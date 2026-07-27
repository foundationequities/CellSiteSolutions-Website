import type { Location } from "../../data/_schema";
import { YARDS } from "../../data/_schema";

/**
 * Structured data builders for the Civil Services Locations cluster.
 * PLAN.md §9 governs. The rules that matter:
 *
 *  - ONE canonical Organization node (`#organization`), referenced by @id from
 *    every other node — never duplicated per page.
 *  - City pages emit `Service` with `areaServed`; NO address, NO geo, NO
 *    openingHours on markets where CSS has no facility.
 *  - `LocalBusiness` emits ONLY when `operations.nearestBase.isStaffedFacility`
 *    is true AND the page's city is that staffed yard (Cedar Rapids or Dallas).
 *    Gated on data, not on a hand-maintained list.
 */

const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.cellsitesolutions.com").replace(/\/$/, "");
export const ORG_ID = `${SITE}/#organization`;

export function organizationNode() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: "CellSite Solutions",
    url: `${SITE}/`,
    logo: `${SITE}/images/wp-content/uploads/2024/05/Footer-Logo.png`,
    sameAs: [
      "https://www.facebook.com/cellsitesolutions/",
      "https://www.linkedin.com/company/cellsite-solutions-llc/",
      "https://www.youtube.com/@cellsitesolutionsllc5168",
    ],
  };
}

/** True only for the Cedar Rapids and Dallas pages — the two staffed yards. */
export function isYardPage(loc: Location): boolean {
  const yard = YARDS[loc.identity.slug as keyof typeof YARDS];
  return (
    loc.operations.nearestBase.isStaffedFacility === true &&
    yard !== undefined &&
    yard.stateSlug === loc.identity.stateSlug
  );
}

function cityUrl(loc: Location): string {
  return `${SITE}/civil-services/locations/${loc.identity.stateSlug}/${loc.identity.slug}/`;
}

/** Service node for every city page. areaServed uses real city + counties only. */
export function serviceNode(loc: Location) {
  const scopes = [
    ...new Set([
      ...loc.segments.fiber.primaryScopeIds,
      ...loc.segments.wireless.primaryScopeIds,
      ...loc.segments.edge.primaryScopeIds,
    ]),
  ];
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${cityUrl(loc)}#service`,
    serviceType: "Telecom site civil construction",
    name: `Telecom Site Civil Construction — ${loc.identity.city}, ${loc.identity.stateAbbr}`,
    provider: { "@id": ORG_ID },
    areaServed: [
      { "@type": "City", name: loc.identity.city },
      ...loc.identity.counties.map((c) => ({
        "@type": "AdministrativeArea",
        name: `${c} County, ${loc.identity.state}`,
      })),
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Civil services offered in ${loc.identity.city}`,
      itemListElement: scopes.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s },
      })),
    },
  };
}

/**
 * LocalBusiness — the two staffed yards only. Returns null everywhere else;
 * callers render it only when non-null. Address must be supplied by the yard
 * page's data when those pages are authored (Phase 4.2) — this builder refuses
 * to emit without the gate passing.
 */
export function localBusinessNode(
  loc: Location,
  address: { streetAddress: string; addressLocality: string; addressRegion: string; postalCode: string }
) {
  if (!isYardPage(loc)) return null;
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${cityUrl(loc)}#localbusiness`,
    name: `CellSite Solutions — ${loc.identity.city}`,
    parentOrganization: { "@id": ORG_ID },
    url: cityUrl(loc),
    address: { "@type": "PostalAddress", ...address },
    geo: {
      "@type": "GeoCoordinates",
      latitude: loc.identity.latitude,
      longitude: loc.identity.longitude,
    },
  };
}

export function breadcrumbNode(loc: Location) {
  const items = [
    { name: "Home", item: `${SITE}/` },
    { name: "Civil Services", item: `${SITE}/civil-services/` },
    { name: "Service Locations", item: `${SITE}/civil-services/locations/` },
    { name: loc.identity.state, item: `${SITE}/civil-services/locations/${loc.identity.stateSlug}/` },
    { name: loc.identity.city, item: cityUrl(loc) },
  ];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.item,
    })),
  };
}

/** FAQPage — only the genuinely local FAQ, which is the only FAQ the schema allows. */
export function faqNode(loc: Location) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: loc.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
