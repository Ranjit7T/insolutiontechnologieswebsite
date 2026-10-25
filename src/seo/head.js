import { canonicalUrl, pageMetadata, serializeSchema, SITE_NAME, SOCIAL_IMAGE, structuredData } from "./config.js";

export function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}

export function renderHead(pathname) {
  const page = pageMetadata(pathname);
  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);
  const url = escapeHtml(canonicalUrl(pathname));
  return `<!-- seo:start -->
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="robots" content="${page.noindex ? "noindex, follow" : "index, follow, max-image-preview:large"}" />
    ${page.noindex ? "" : `<link rel="canonical" href="${url}" />`}
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${SITE_NAME}" />
    <meta property="og:locale" content="en_IN" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${SOCIAL_IMAGE}" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:alt" content="Insolution Technologies company logo" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${SOCIAL_IMAGE}" />
    <meta name="twitter:image:alt" content="Insolution Technologies company logo" />
    <script id="site-structured-data" type="application/ld+json">${serializeSchema(structuredData(pathname))}</script>
    <!-- seo:end -->`;
}
