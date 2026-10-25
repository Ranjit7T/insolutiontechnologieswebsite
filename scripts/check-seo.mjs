import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { canonicalUrl, pages, SITE_URL } from "../src/seo/config.js";
import { escapeHtml } from "../src/seo/head.js";

const output = resolve(import.meta.dirname, "../dist");
const titles = new Set();
for (const [route, metadata] of Object.entries(pages)) {
  const html = await readFile(join(output, route.slice(1), "index.html"), "utf8");
  assert.equal((html.match(/<title>/g) || []).length, 1, `${route}: duplicate/missing title`);
  assert(html.includes(`<title>${escapeHtml(metadata.title)}</title>`), `${route}: wrong title`);
  assert(!titles.has(metadata.title), `${route}: title is reused`);
  titles.add(metadata.title);
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1, `${route}: duplicate/missing canonical`);
  assert(html.includes(`rel="canonical" href="${canonicalUrl(route)}"`), `${route}: wrong canonical`);
  assert.equal((html.match(/name="description"/g) || []).length, 1, `${route}: duplicate/missing description`);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${route}: must have one H1`);
  assert(!html.includes("+91-XXXXXXXXXX") && !html.includes("https://www.linkedin.com/"), `${route}: placeholder business data`);
  assert(!html.includes("noindex"), `${route}: indexable page is blocked`);
  const match = html.match(/<script id="site-structured-data" type="application\/ld\+json">([\s\S]*?)<\/script>/);
  const schema = JSON.parse(match?.[1] || "null");
  assert(schema?.["@graph"].some(item => item.url === canonicalUrl(route)), `${route}: missing WebPage schema`);
  const main = html.match(/<main[\s\S]*?<\/main>/)?.[0] || "";
  assert(main.replace(/<[^>]+>/g, "").length > 200, `${route}: content missing before JavaScript`);
  for (const [, asset] of html.matchAll(/(?:src|href)="(\/(?:assets|brand)\/[^"?#]+)[^"]*"/g)) {
    await access(join(output, asset.slice(1)));
  }
  for (const [, href] of html.matchAll(/href="(\/(?!\/)[^"#?]*)"/g)) {
    if (href.startsWith("/assets/") || href.startsWith("/brand/")) continue;
    assert(href === "/" || href.endsWith("/"), `${route}: inconsistent trailing slash: ${href}`);
    await access(join(output, href.slice(1), "index.html"));
  }
  console.log(`SEO checks passed: ${route}`);
}
const notFound = await readFile(join(output, "404.html"), "utf8");
assert(notFound.includes('content="noindex, follow"'), "404 must be noindex");
assert(!notFound.includes('rel="canonical"'), "404 must not canonicalize to the homepage");
const sitemap = await readFile(join(output, "sitemap.xml"), "utf8");
assert.equal((sitemap.match(/<loc>/g) || []).length, Object.keys(pages).length);
for (const route of Object.keys(pages)) assert(sitemap.includes(`<loc>${canonicalUrl(route)}</loc>`));
const robots = await readFile(join(output, "robots.txt"), "utf8");
assert(robots.includes(`Sitemap: ${SITE_URL}/sitemap.xml`));
assert(!robots.includes("Disallow: /"), "robots.txt must not block the site");
await access(join(output, "brand/logo.jpg"));
console.log("Sitemap, robots.txt, public assets, and 404 checks passed.");
