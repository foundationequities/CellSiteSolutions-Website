export const siteConfig = {
  name: "CellSite Solutions",
  legalName: "CellSite Solutions, LLC",
  description:
    "CellSite Solutions remanufactures durable, cost-effective telecom shelters and delivers end-to-end cell-site services — from civil construction and installation to maintenance and decommissioning.",
  // Canonical production URL. Overridable via NEXT_PUBLIC_SITE_URL.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.cellsitesolutions.com",
  tagline: "Your turnkey solution for telecom equipment and site services.",
  contact: {
    // Sourced from public listings — verify against the live site before launch.
    email: "sales@cellsitesolutions.com",
    phone: "(319) 826-3404",
    phoneHref: "tel:+13198263404",
    fax: "(319) 826-3415",
    address: {
      street: "4150 C St SW",
      city: "Cedar Rapids",
      state: "IA",
      zip: "52404",
      country: "USA",
    },
    hours: "Monday–Friday, 8:00 AM – 5:00 PM CT",
  },
  social: {
    facebook: "https://www.facebook.com/cellsitesolutions/",
    linkedin: "https://www.linkedin.com/company/cellsite-solutions-llc/",
    youtube: "https://www.youtube.com/@cellsitesolutionsllc5168",
  },
} as const;

export type SiteConfig = typeof siteConfig;
