export type NavLink = {
  label: string;
  href: string;
  /** Optional dropdown children (two-level nav, mirrors the live site menu). */
  children?: { label: string; href: string }[];
};

/**
 * Primary navigation — exact structure of the live cellsitesolutions.com menu:
 * Who We Are ▾ · Shelters ▾ · Civil Construction ▾ · Contact Us
 */
export const mainNav: NavLink[] = [
  {
    label: "Who We Are",
    href: "/about-us/",
    children: [
      { label: "Who We Serve", href: "/who-we-serve/" },
      { label: "Sustainable Practices", href: "/sustainable-practices/" },
      { label: "Careers", href: "/careers/" },
      { label: "Blog", href: "/blog/" },
    ],
  },
  {
    label: "Shelters",
    href: "/shelters/",
    children: [
      { label: "Telecom Shelters", href: "/telecom-shelters/" },
      { label: "Datacomm Pro Series Lightweight Shelters", href: "/datacomm-pro-series/" },
      { label: "Shelter Showcase", href: "/shelter-showcase/" },
      { label: "HVAC Units", href: "/hvac-units/" },
      { label: "Generators", href: "/generators/" },
      { label: "Cabinets", href: "/cabinets/" },
      { label: "Installation Integration", href: "/installation-integration/" },
    ],
  },
  {
    label: "Civil Construction",
    href: "/civil-construction/",
    children: [
      { label: "Installation & Commissioning", href: "/installation-commissioning/" },
      { label: "General Site Maintenance", href: "/general-site-maintenance/" },
      { label: "Site Decommissioning", href: "/site-decommissioning/" },
      { label: "Guy Tower & Rod Inspections", href: "/guy-tower-rod-inspections/" },
      { label: "Disaster Recovery", href: "/disaster-recovery/" },
    ],
  },
  { label: "Contact Us", href: "/contact-us/" },
];
