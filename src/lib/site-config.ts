export const siteConfig = {
  name: "CellSite Solutions",
  legalName: "CellSite Solutions LLC",
  description:
    "Telecom shelters, HVAC, generators, cabinets, civil construction, and full site services for wireless infrastructure.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.cellsitesolutions.com",

  contact: {
    salesEmail: "sales@cellsitesolutions.com",
  },

  social: {
    facebook: "https://www.facebook.com/cellsitesolutions/",
    linkedin: "https://www.linkedin.com/company/cellsite-solutions-llc/",
    youtube: "https://www.youtube.com/@cellsitesolutionsllc5168",
  },

  logos: {
    // paths mirror the original wp-content/uploads structure (see _reference/INVENTORY.md)
    headerWhite: {
      src: "/images/wp-content/uploads/2024/09/Main-Header-Website-Logo-Larger-White.png",
      width: 472,
      height: 128,
    },
    headerBlack: {
      src: "/images/wp-content/uploads/2024/06/Main-Header-Website-Logo-Larger-Black.png",
      width: 472,
      height: 128,
    },
    footer: {
      src: "/images/wp-content/uploads/2024/06/Footer-Logo.png",
      width: 232,
      height: 113,
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
