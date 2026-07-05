export type NavLeaf = { title: string; href: string; description?: string };
export type NavItem = {
  title: string;
  href?: string;
  children?: NavLeaf[];
};

export const mainNav: NavItem[] = [
  { title: "Home", href: "/" },
  {
    title: "Company",
    children: [
      { title: "About Us", href: "/about-us", description: "Who we are and how we started." },
      { title: "Who We Serve", href: "/who-we-serve", description: "Carriers, tower companies, and integrators." },
      { title: "Sustainable Practices", href: "/sustainable-practices", description: "Recycling and EPA-compliant work." },
      { title: "Careers", href: "/careers", description: "Join the CellSite team." },
    ],
  },
  {
    title: "Products",
    children: [
      { title: "Shelters", href: "/shelters", description: "Remanufactured concrete shelters." },
      { title: "Telecom Shelters", href: "/telecom-shelters", description: "Purpose-built telecom enclosures." },
      { title: "Datacomm Pro Series", href: "/datacomm-pro-series", description: "Lightweight shelter line." },
      { title: "Shelter Showcase", href: "/shelter-showcase", description: "Completed projects and case studies." },
      { title: "HVAC Units", href: "/hvac-units", description: "Redundant cooling systems." },
      { title: "Generators", href: "/generators", description: "Standby power for cell sites." },
      { title: "Cabinets", href: "/cabinets", description: "Outdoor equipment cabinets." },
    ],
  },
  {
    title: "Services",
    children: [
      { title: "Installation & Integration", href: "/installation-integration", description: "Turnkey install and integration." },
      { title: "Civil Construction", href: "/civil-construction", description: "Foundations, grounding, fencing." },
      { title: "Installation & Commissioning", href: "/installation-commissioning", description: "Bring sites online, verified." },
      { title: "General Site Maintenance", href: "/general-site-maintenance", description: "Keep sites running." },
      { title: "Site Decommissioning", href: "/site-decommissioning", description: "Responsible teardown." },
      { title: "Guy, Tower & Rod Inspections", href: "/guy-tower-rod-inspections", description: "Structural inspection." },
      { title: "Disaster Recovery", href: "/disaster-recovery", description: "Rapid emergency response." },
    ],
  },
  { title: "Blog", href: "/blog" },
];

// Flat list used for the sitemap.
export const allRoutes: string[] = [
  "/",
  "/about-us",
  "/who-we-serve",
  "/sustainable-practices",
  "/careers",
  "/shelters",
  "/telecom-shelters",
  "/datacomm-pro-series",
  "/shelter-showcase",
  "/hvac-units",
  "/generators",
  "/cabinets",
  "/installation-integration",
  "/civil-construction",
  "/installation-commissioning",
  "/general-site-maintenance",
  "/site-decommissioning",
  "/guy-tower-rod-inspections",
  "/disaster-recovery",
  "/blog",
  "/contact-us",
];
