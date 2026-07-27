import Link from "next/link";
import type { Metadata } from "next";
import { getSeedMarkets, getSeedMarketsByState } from "@/lib/seed";
import { getRenderableLocations } from "@/lib/locations";
import { FOOTER_STATES, stateHref, cityHref } from "@/lib/locations-nav";
import { FootprintMap } from "@/components/locations/FootprintMap";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Civil Services Locations | Telecom Site Civil Construction",
  description:
    "CellSite Solutions self-performs telecom civil construction — fiber, wireless, and edge site work — across 65 markets in nine states, from staffed yards in Cedar Rapids, Iowa and Dallas–Fort Worth, Texas.",
  alternates: { canonical: "/civil-services/locations/" },
};

/**
 * National service locations index (TASKS 3.4): footprint map, state grouping,
 * all 65 markets with one-line differentiators. Only researched, verified
 * markets carry links — the rest render as named markets until their pages
 * publish (Phases 4-5).
 */
export default function LocationsIndexPage() {
  const published = new Set(
    getRenderableLocations().map((l) => `${l.identity.stateSlug}/${l.identity.slug}`)
  );
  const total = getSeedMarkets().length;

  return (
    <>
      <section className="bg-white pb-6 pt-32 lg:pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-1">
              <li><Link href="/" className="hover:text-brand">Home</Link><span aria-hidden> / </span></li>
              <li><Link href="/civil-construction/" className="hover:text-brand">Civil Construction</Link><span aria-hidden> / </span></li>
              <li aria-current="page" className="text-ink">Service Locations</li>
            </ol>
          </nav>
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Fiber · Wireless · Edge
          </p>
          <h1 className="mt-2 max-w-4xl text-[32px] uppercase leading-[1.08] text-ink sm:text-[56px]">
            Civil Services Locations
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted">
            CellSite Solutions performs the full civil scope around telecom shelters, fiber huts,
            wireless compounds, and edge enclosures — site development, foundations, underground,
            grounding, and compound construction. Crews work out of two staffed yards, in Cedar
            Rapids, Iowa and Dallas–Fort Worth, Texas, serving {total} markets across nine states:
            regional markets on a rapid-response basis and extended markets through project-based
            crew deployment.
          </p>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FootprintMap />
          <p className="mt-3 text-xs text-muted">
            Squares mark the two staffed yards; dots mark served markets. Each market is assigned
            to its nearer yard.
          </p>
        </div>
      </section>

      {/* State grouping — every market with a one-line differentiator */}
      <section className="bg-[#f6f6f6] py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-[26px] text-ink sm:text-[36px]">Markets by State</h2>
          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            {FOOTER_STATES.map((s) => {
              const markets = getSeedMarketsByState(s.slug);
              return (
                <section key={s.slug} aria-labelledby={`state-${s.slug}`}>
                  <h3 id={`state-${s.slug}`} className="font-display text-xl font-medium uppercase tracking-wide text-ink">
                    <Link href={stateHref(s.slug)} className="hover:text-brand">
                      {s.name}
                    </Link>
                    <span className="ml-2 text-sm font-normal normal-case text-muted">
                      {markets.length} market{markets.length === 1 ? "" : "s"}
                    </span>
                  </h3>
                  <ul className="mt-3 divide-y divide-border rounded-lg border border-border bg-white">
                    {markets.map((m) => {
                      const isPublished = published.has(`${m.stateSlug}/${m.slug}`);
                      return (
                        <li key={m.slug} className="flex items-baseline gap-3 px-4 py-3">
                          <span className="min-w-[9rem] shrink-0 font-semibold text-ink">
                            {isPublished ? (
                              <Link href={cityHref(m.stateSlug, m.slug)} className="hover:text-brand">
                                {m.city}
                              </Link>
                            ) : (
                              m.city
                            )}
                            {m.isYard && (
                              <span className="ml-1.5 rounded bg-brand/10 px-1.5 py-0.5 text-[11px] font-bold uppercase text-brand">
                                Yard
                              </span>
                            )}
                          </span>
                          <span className="text-sm text-muted">{m.driver}</span>
                        </li>
                      );
                    })}
                  </ul>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
