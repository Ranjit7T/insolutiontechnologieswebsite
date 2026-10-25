export const SITE_URL = "https://www.insolutiontechnologies.com";
export const SITE_NAME = "Insolution Technologies";
export const SITE_EMAIL = "ranjit@insolutiontechnologies.in";
export const SOCIAL_IMAGE = `${SITE_URL}/brand/logo.jpg`;

export const pages = {
  "/": {
    title: "Web Development & Training | Insolution Technologies",
    description: "Build business websites, web applications and custom software with Insolution Technologies. Explore practical 3- and 6-month training programs in India.",
    name: "Web Development, Custom Software & Practical Training",
    type: "WebPage",
  },
  "/services": {
    title: "Web & Custom Software Development | Insolution Technologies",
    description: "Explore website development, web applications, CRM, ERP, automation and ongoing maintenance. Discuss your business software needs with Insolution Technologies.",
    name: "Web & Custom Software Development Services",
    type: "CollectionPage",
  },
  "/training": {
    title: "Software Training & Internships | Insolution Technologies",
    description: "Explore 3-month and 6-month paid software training with guided projects and internship exposure. View fees, program details and enrolment enquiries.",
    name: "Software Training & Industry-Oriented Internships",
    type: "CollectionPage",
  },
  "/about": {
    title: "About Insolution Technologies | Software & Skill Development",
    description: "Meet Insolution Technologies, an Indian UDYAM-registered enterprise focused on business software, practical technical learning and industry-oriented training.",
    name: "About Insolution Technologies",
    type: "AboutPage",
  },
  "/contact": {
    title: "Contact Insolution Technologies | Projects & Training",
    description: "Discuss a website, web application or custom software project, or ask about our training programs. Contact Insolution Technologies by email or enquiry form.",
    name: "Contact Insolution Technologies",
    type: "ContactPage",
  },
};

export function normalizePath(pathname) {
  return pathname.replace(/\/+$/, "") || "/";
}

export function canonicalUrl(pathname) {
  const path = normalizePath(pathname);
  return `${SITE_URL}${path === "/" ? "/" : `${path}/`}`;
}

export function pageMetadata(pathname) {
  return pages[normalizePath(pathname)] || {
    title: "Page Not Found | Insolution Technologies",
    description: "This page could not be found. Explore Insolution Technologies services, training programs and contact information.",
    name: "Page not found",
    noindex: true,
  };
}

export function structuredData(pathname) {
  const path = normalizePath(pathname);
  const metadata = pageMetadata(path);
  if (metadata.noindex) return { "@context": "https://schema.org", "@graph": [] };
  const url = canonicalUrl(path);
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;
  const graph = [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      logo: { "@type": "ImageObject", url: SOCIAL_IMAGE },
      email: SITE_EMAIL,
      description: "An Indian UDYAM-registered enterprise providing business software development and practical, training-focused internship programs.",
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      publisher: { "@id": organizationId },
      inLanguage: "en-IN",
    },
    {
      "@type": metadata.type,
      "@id": `${url}#webpage`,
      url,
      name: metadata.name,
      description: metadata.description,
      isPartOf: { "@id": websiteId },
      about: { "@id": organizationId },
      inLanguage: "en-IN",
      ...(path !== "/" ? { breadcrumb: { "@id": `${url}#breadcrumb` } } : {}),
    },
  ];
  if (path !== "/") {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: metadata.name, item: url },
      ],
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

export function serializeSchema(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
