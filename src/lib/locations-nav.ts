/**
 * Single source of truth for how the Civil Services Locations cluster appears
 * in the main nav and the footer (adapted from the kit's config/navigation.ts —
 * see docs/civil-locations/PLAN.md §7-8). Nav and footer must never drift.
 *
 * IA note: the kit's target IA has a "/civil-services/" pillar with eight deep
 * service pages (Phase 6 supporting content). Until those exist, the main-nav
 * entry point hangs off the existing Civil Construction dropdown — same intent
 * (wayfinding item, divider above, last position), no dead links.
 */

export const LOCATIONS_INDEX_HREF = "/civil-services/locations/";

/** The main-nav entry point. Removes the structural-orphan signal (PLAN §7). */
export const SERVICE_LOCATIONS_NAV_ITEM = {
  label: "Service Locations",
  href: LOCATIONS_INDEX_HREF,
  dividerBefore: true,
} as const;

/** Order shown in the footer. Alphabetical — no implied priority ranking. */
export const FOOTER_STATES = [
  { name: "Alabama", slug: "alabama" },
  { name: "Illinois", slug: "illinois" },
  { name: "Iowa", slug: "iowa" },
  { name: "Kansas", slug: "kansas" },
  { name: "Missouri", slug: "missouri" },
  { name: "Nebraska", slug: "nebraska" },
  { name: "Oklahoma", slug: "oklahoma" },
  { name: "Texas", slug: "texas" },
  { name: "Wisconsin", slug: "wisconsin" },
] as const;

export function stateHref(slug: string) {
  return `${LOCATIONS_INDEX_HREF}${slug}/`;
}

export function cityHref(stateSlug: string, citySlug: string) {
  return `${LOCATIONS_INDEX_HREF}${stateSlug}/${citySlug}/`;
}

/** Footer renders expanded only inside the civil services cluster. See PLAN §8. */
export function footerVariantForPath(pathname: string): "compact" | "expanded" {
  return pathname.startsWith("/civil-services") ? "expanded" : "compact";
}
