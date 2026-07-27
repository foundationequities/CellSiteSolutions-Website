import Link from "next/link";
import {
  FOOTER_STATES,
  LOCATIONS_INDEX_HREF,
  stateHref,
  cityHref,
} from "@/lib/locations-nav";
import { getRenderableStateLocations } from "@/lib/locations";
import { LocationsFooterSwitch } from "@/components/locations-footer-switch";

/**
 * CIVIL SERVICES LOCATIONS footer block (PLAN.md §8).
 *
 * compact  — sitewide: 9 state links + "View all 65". State hubs carry the
 *            city links, keeping every city within three clicks of home
 *            without a 65-link sitewide boilerplate block.
 * expanded — only within /civil-services/**: states with their published
 *            cities in a multi-column server-rendered grid.
 *
 * Styled with the existing white-footer tokens — no separate visual language.
 */

const linkCls = "text-sm text-muted transition-colors hover:text-brand";

function CompactStates() {
  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-2">
      {FOOTER_STATES.map((s) => (
        <li key={s.slug}>
          <Link href={stateHref(s.slug)} className={linkCls}>
            {s.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function ExpandedStates() {
  return (
    <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
      {FOOTER_STATES.map((s) => {
        const cities = getRenderableStateLocations(s.slug);
        return (
          <section key={s.slug}>
            <h3 className="mb-2 font-display text-sm font-medium uppercase tracking-wide text-ink">
              <Link href={stateHref(s.slug)} className="hover:text-brand">
                {s.name}
              </Link>
            </h3>
            {cities.length > 0 && (
              <ul className="space-y-1.5">
                {cities.map((c) => (
                  <li key={c.identity.slug}>
                    <Link href={cityHref(s.slug, c.identity.slug)} className={linkCls}>
                      {c.identity.city}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </section>
        );
      })}
    </div>
  );
}

export function LocationsFooter() {
  const viewAll = (
    <p className="mt-4">
      <Link
        href={LOCATIONS_INDEX_HREF}
        className="text-sm font-semibold text-ink transition-colors hover:text-brand"
      >
        View all 65 service locations &rarr;
      </Link>
    </p>
  );

  return (
    <nav aria-labelledby="footer-locations-heading" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h2
          id="footer-locations-heading"
          className="mb-4 font-display text-xl font-medium uppercase tracking-wide text-ink"
        >
          Civil Services Locations
        </h2>
        <LocationsFooterSwitch
          compact={
            <div>
              <CompactStates />
              {viewAll}
            </div>
          }
          expanded={
            <div>
              <ExpandedStates />
              {viewAll}
            </div>
          }
        />
      </div>
    </nav>
  );
}
