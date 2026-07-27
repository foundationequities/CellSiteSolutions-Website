import Link from "next/link";
import type { Location } from "../../../data/_schema";
import { Module } from "./section";

/**
 * Related services (CONTENT_MODULES Part 1 §9 / PLAN §6.2) — deep links chosen
 * by the city's segment weighting. Until the Phase 6 deep service pages exist,
 * these point at the site's real service pages, so no link dead-ends.
 */
const BY_SEGMENT: Record<"fiber" | "wireless" | "edge", { label: string; href: string }[]> = {
  fiber: [
    { label: "Civil Construction", href: "/civil-construction/" },
    { label: "Installation & Commissioning", href: "/installation-commissioning/" },
  ],
  wireless: [
    { label: "Guy Tower & Rod Inspections", href: "/guy-tower-rod-inspections/" },
    { label: "Site Decommissioning", href: "/site-decommissioning/" },
  ],
  edge: [
    { label: "Telecom Shelters", href: "/telecom-shelters/" },
    { label: "Installation Integration", href: "/installation-integration/" },
  ],
};

export default function RelatedServices({ location: l }: { location: Location }) {
  // Weight by which segments carry the most primary scope in this market.
  const ranked = (["fiber", "wireless", "edge"] as const)
    .map((s) => ({ s, weight: l.segments[s].primaryScopeIds.length }))
    .sort((a, b) => b.weight - a.weight);
  const links = [
    ...BY_SEGMENT[ranked[0].s],
    BY_SEGMENT[ranked[1].s][0],
    { label: "Disaster Recovery", href: "/disaster-recovery/" },
  ];

  return (
    <Module id="related-services" eyebrow="Services" title="Related CellSite Solutions Services">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {links.map((s) => (
          <li key={s.href}>
            <Link
              href={s.href}
              className="block rounded-lg border border-border bg-white p-5 font-display text-base font-medium text-ink transition-colors hover:border-brand hover:text-brand"
            >
              {s.label}
            </Link>
          </li>
        ))}
      </ul>
    </Module>
  );
}
