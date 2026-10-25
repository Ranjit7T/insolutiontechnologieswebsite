# Insolution Technologies

React and Vite website for software development services and practical training programs. Production builds include pre-rendered HTML so page content and metadata are available before JavaScript runs.

## Local development

Use Node.js 22 or newer. In Windows PowerShell:

```powershell
npm.cmd install
npm.cmd run dev
```

Open the local URL printed by Vite. To build, check SEO output, and preview the production files:

```powershell
npm.cmd run build
npm.cmd run check:seo
npm.cmd run preview
```

The build runs Vite and then `scripts/prerender.mjs`. It writes five pages to `dist/`: `/`, `/services/`, `/training/`, `/about/`, and `/contact/`, plus `404.html`, `sitemap.xml`, and `robots.txt`. Run `check:seo` after building; it checks generated metadata, headings, structured data, content, links, and assets.

## SEO configuration

`src/seo/config.js` is the authoritative source for `SITE_URL`, page metadata, canonical URLs, and organization data. Its current `https://www.insolutiontechnologies.com` value comes from the existing project and has not been confirmed as the intended production domain. Confirm it before deployment. If it changes, rebuild and update the development copies of `public/robots.txt` and `public/sitemap.xml` to match; production copies are generated during the build.

The stable social-preview image and favicon are `public/brand/logo.jpg`. Keep published business details accurate. Placeholder phone numbers, addresses, and social-profile URLs have been removed; add those fields only when verified.

## Hosting and publication

Deploy the contents of `dist/` to static hosting. Serve each generated route directory directly, including its `index.html`. Do not configure a blanket SPA rewrite to the homepage: it would replace the route-specific HTML and metadata that the build generates.

Unknown routes must return `dist/404.html` with HTTP status **404**. Configure this in the hosting provider and verify it after deployment. Vite preview can fall back to the SPA for an unknown URL, so preview behavior does not verify production 404 status handling.

The built pages have been checked with JavaScript disabled, and hydration and client-side navigation have been checked in a browser. Deployment is pending; these checks do not confirm a published site's hosting configuration.

After deployment, a verified site owner should submit the production `/sitemap.xml` URL in Google Search Console and review indexing reports. Search Console verification and sitemap submission have not been performed. These improvements support crawlability and accurate previews; they do not guarantee rankings or indexing.
