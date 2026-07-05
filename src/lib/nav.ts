export type NavLink = {
  label: string;
  href: string;
  /** Optional dropdown children (two-level nav, mirrors the live site menu). */
  children?: { label: string; href: string }[];
};

/**
 * Primary navigation, grouped to match the live cellsitesolutions.com menu.
 * Section landing pages (Shelters, Installation & Integration) double as the
 * dropdown parent link.
 */
export const mainNav: NavLink[] = [
  {
    label: "Who We Are",
    href: "/about-us/",
    children: [
      { label: "About Us", href: "/about-us/" },
      { label: "Who We Serve", href: "/who-we-serve/" },
      { label: "Sustainable Practices", href: "/sustainable-practices/" },
      { label: "Careers", href: "/careers/" },
    ],
  },
  {
    label: "Shelters & Products",
    href: "/shelters/",
    children: [
      { label: "Shelters", href: "/shelters/" },
      { label: "Telecom Shelters", href: "/telecom-shelters/" },
      { label: "Datacomm Pro Series", href: "/datacomm-pro-series/" },
      { label: "Shelter Showcase", href: "/shelter-showcase/" },
      { label: "HVAC Units", href: "/hvac-units/" },
      { label: "Generators", href: "/generators/" },
      { label: "Cabinets", href: "/cabinets/" },
    ],
  },
  {
    label: "Installation & Services",
    href: "/installation-integration/",
    children: [
      { label: "Installation & Integration", href: "/installation-integration/" },
      { label: "Civil Construction", href: "/civil-construction/" },
      { label: "Installation & Commissioning", href: "/installation-commissioning/" },
      { label: "General Site Maintenance", href: "/general-site-maintenance/" },
      { label: "Site Decommissioning", href: "/site-decommissioning/" },
      { label: "Guy Tower & Rod Inspections", href: "/guy-tower-rod-inspections/" },
      { label: "Disaster Recovery", href: "/disaster-recovery/" },
    ],
  },
  { label: "Blog", href: "/blog/" },
  { label: "Contact Us", href: "/contact-us/" },
];
