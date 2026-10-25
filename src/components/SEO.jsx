import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { canonicalUrl, pageMetadata, serializeSchema, SITE_NAME, SOCIAL_IMAGE, structuredData } from "../seo/config.js";

function updateMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export default function SEO() {
  const { pathname } = useLocation();
  useEffect(() => {
    const page = pageMetadata(pathname);
    document.title = page.title;
    updateMeta("name", "description", page.description);
    updateMeta("name", "robots", page.noindex ? "noindex, follow" : "index, follow, max-image-preview:large");
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (page.noindex) canonical?.remove();
    else {
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }
      canonical.href = canonicalUrl(pathname);
    }
    for (const [key, value] of Object.entries({
      "og:type": "website", "og:site_name": SITE_NAME, "og:locale": "en_IN",
      "og:title": page.title, "og:description": page.description,
      "og:url": canonicalUrl(pathname), "og:image": SOCIAL_IMAGE,
      "og:image:type": "image/jpeg", "og:image:alt": `${SITE_NAME} company logo`,
    })) updateMeta("property", key, value);
    for (const [key, value] of Object.entries({
      "twitter:card": "summary", "twitter:title": page.title,
      "twitter:description": page.description, "twitter:image": SOCIAL_IMAGE,
      "twitter:image:alt": `${SITE_NAME} company logo`,
    })) updateMeta("name", key, value);
    let schema = document.getElementById("site-structured-data");
    if (!schema) {
      schema = document.createElement("script");
      schema.id = "site-structured-data";
      schema.type = "application/ld+json";
      document.head.appendChild(schema);
    }
    schema.textContent = serializeSchema(structuredData(pathname));
  }, [pathname]);
  return null;
}
