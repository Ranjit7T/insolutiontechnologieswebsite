import assert from "node:assert/strict";
import { readFile, writeFile, mkdir, mkdtemp, rm } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { build } from "vite";
import { canonicalUrl, pages, SITE_URL } from "../src/seo/config.js";
import { renderHead } from "../src/seo/head.js";

const root = resolve(import.meta.dirname, "..");
const output = join(root, "dist");
const template = await readFile(join(output, "index.html"), "utf8");
assert(template.includes('<!-- seo:start -->') && template.includes('<!-- seo:end -->'), "SEO head markers missing");
assert(template.includes('<div id="root"></div>'), "Empty React root missing from build template");

// Compile the server renderer with production asset URLs, matching the client build.
await mkdir(join(root, ".tmp"), { recursive: true });
const serverOutput = await mkdtemp(join(root, ".tmp", "seo-build-"));
try {
  await build({
    root,
    build: {
      ssr: "src/entry-server.jsx",
      outDir: serverOutput,
      emptyOutDir: true,
      rollupOptions: { output: { entryFileNames: "entry-server.mjs" } },
    },
    logLevel: "warn",
  });
  const { render } = await import(pathToFileURL(join(serverOutput, "entry-server.mjs")).href);
  for (const route of [...Object.keys(pages), "/404"]) {
    const markup = render(route === "/" ? "/" : `${route}/`);
    const page = template
      .replace(/<!-- seo:start -->[\s\S]*?<!-- seo:end -->/, () => renderHead(route))
      .replace('<div id="root"></div>', () => `<div id="root">${markup}</div>`);
    const file = route === "/404" ? join(output, "404.html") : join(output, route.slice(1), "index.html");
    assert.equal((markup.match(/<h1(?:\s|>)/g) || []).length, 1, `${route} must have exactly one H1`);
    assert(!page.includes("/src/assets/"), `${route} contains development-only asset URLs`);
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, page, "utf8");
    console.log(`Pre-rendered ${route}`);
  }
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${Object.keys(pages).map(route => `  <url><loc>${canonicalUrl(route)}</loc></url>`).join("\n")}\n</urlset>\n`;
  await writeFile(join(output, "sitemap.xml"), sitemap);
  await writeFile(join(output, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
} finally {
  // Only remove the exact temporary directory created by mkdtemp above.
  assert.equal(dirname(serverOutput), join(root, ".tmp"));
  await rm(serverOutput, { recursive: true, force: true });
}
