import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getRenderableStateLocations } from "@/lib/locations";
import { getAllStateHubs } from "@/lib/states";
import { getSeedMarketsByState } from "@/lib/seed";
import { FOOTER_STATES, LOCATIONS_INDEX_HREF, cityHref } from "@/lib/locations-nav";
import { Module, Table, Tr, Td, prose } from "@/components/locations/section";
import { FaqAccordion } from "@/components/faq-accordion";
import { CtaBand } from "@/components/cta-band";

export const dynamicParams = false;

/**
 * State hub (PLAN §6.1) — the browseable layer that keeps the city cluster
 * clear of doorway classification.
 *
 * All nine states render so the sitewide footer links always resolve on this
 * pre-launch draft. Researched statewide narrative modules appear only once
 * the hub file is verified; until then the page carries the market grid with
 * seed differentiators. City links appear only for published city pages.
 */
export function generateStaticParams() {
  return FOOTER_STATES.map((s) => ({ state: s.slug }));
}

function getHubShell(slug: string) {
  return getAllStateHubs().find((h) => h.identity.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state } = await params;
  const hub = getHubShell(state);
  if (!hub) return {};
  const verified = hub._verified && hub.metadata.title;
  return {
    title: verified
      ? hub.metadata.title
      : `${hub.identity.name} Telecom Civil Construction Locations`,
    description:
      (verified && hub.metadata.description) ||
      `Telecom site civil construction markets CellSite Solutions serves in ${hub.identity.name} — fiber, wireless, and edge infrastructure civil work.`,
    alternates: { canonical: `/civil-services/locations/${state}/` },
  };
}

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  const hub = getHubShell(state);
  if (!hub) notFound();
  const publishedCities = getRenderableStateLocations(state);
  const publishedSlugs = new Set(publishedCities.map((c) => c.identity.slug));
  const markets = getSeedMarketsByState(state);
  const showResearch = hub._verified && hub._gaps.length === 0;

  return (
    <>
      <section className="bg-white pb-6 pt-32 lg:pt-40">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-1">
              <li><Link href="/" className="hover:text-brand">Home</Link><span aria-hidden> / </span></li>
              <li><Link href="/civil-construction/" className="hover:text-brand">Civil Construction</Link><span aria-hidden> / </span></li>
              <li><Link href={LOCATIONS_INDEX_HREF} className="hover:text-brand">Service Locations</Link><span aria-hidden> / </span></li>
              <li aria-current="page" className="text-ink">{hub.identity.name}</li>
            </ol>
          </nav>
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Service Locations
          </p>
          <h1 className="mt-2 max-w-4xl text-[32px] uppercase leading-[1.08] text-ink sm:text-[48px]">
            {(showResearch && hub.metadata.h1) || `Telecom Civil Construction in ${hub.identity.name}`}
          </h1>
          {showResearch && hub.metadata.intro && (
            <p className={`mt-5 max-w-3xl ${prose}`}>{hub.metadata.intro}</p>
          )}
        </div>
      </section>

      {/* Markets grid — published cities link; the rest are named markets */}
      <Module eyebrow={hub.identity.name} title={`${hub.identity.name} Markets We Serve`} tone="gray">
        <ul className="divide-y divide-border rounded-lg border border-border bg-white">
          {markets.map((m) => (
            <li key={m.slug} className="flex items-baseline gap-3 px-4 py-3">
              <span className="min-w-[10rem] shrink-0 font-semibold text-ink">
                {publishedSlugs.has(m.slug) ? (
                  <Link href={cityHref(state, m.slug)} className="hover:text-brand">
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
          ))}
        </ul>
      </Module>

      {/* Researched statewide modules — verified hubs only (Phase 5.3) */}
      {showResearch && (
        <>
          {hub.codeAdoption.narrative && (
            <Module eyebrow="Codes" title={`Building Codes Across ${hub.identity.name}`}>
              <p className={prose}>{hub.codeAdoption.narrative}</p>
            </Module>
          )}
          {hub.designCriteriaVariation.narrative && (
            <Module eyebrow="Engineering" title={`Design Criteria Variation Across ${hub.identity.name}`} tone="gray">
              <p className={prose}>{hub.designCriteriaVariation.narrative}</p>
              <div className="mt-6">
                <Table head={["Criterion", "Statewide range"]}>
                  {hub.designCriteriaVariation.windSpeedRangeMph.low != null && (
                    <Tr>
                      <Td strong>Ultimate wind speed (Risk Cat. II)</Td>
                      <Td>
                        {hub.designCriteriaVariation.windSpeedRangeMph.low}–
                        {hub.designCriteriaVariation.windSpeedRangeMph.high} mph
                      </Td>
                    </Tr>
                  )}
                  {hub.designCriteriaVariation.frostDepthRangeIn.low != null && (
                    <Tr>
                      <Td strong>Frost depth</Td>
                      <Td>
                        {hub.designCriteriaVariation.frostDepthRangeIn.low}–
                        {hub.designCriteriaVariation.frostDepthRangeIn.high} in
                      </Td>
                    </Tr>
                  )}
                  {hub.designCriteriaVariation.groundSnowRangePsf.low != null && (
                    <Tr>
                      <Td strong>Ground snow load</Td>
                      <Td>
                        {hub.designCriteriaVariation.groundSnowRangePsf.low}–
                        {hub.designCriteriaVariation.groundSnowRangePsf.high} psf
                      </Td>
                    </Tr>
                  )}
                </Table>
              </div>
            </Module>
          )}
          {hub.dotRowProcess.narrative && (
            <Module eyebrow="Right-of-Way" title={`${hub.identity.abbr} DOT & ROW Process`}>
              <p className={prose}>{hub.dotRowProcess.narrative}</p>
            </Module>
          )}
          {hub.seasonalLoadRegime.narrative && (
            <Module eyebrow="Logistics" title={`Seasonal Load Restrictions in ${hub.identity.name}`} tone="gray">
              <p className={prose}>{hub.seasonalLoadRegime.narrative}</p>
            </Module>
          )}
          {hub.environmentalReview.narrative && (
            <Module eyebrow="Environmental" title={`Environmental & Historic Review in ${hub.identity.name}`}>
              <p className={prose}>{hub.environmentalReview.narrative}</p>
            </Module>
          )}
          {hub.contractorLicensing.narrative && (
            <Module eyebrow="Compliance" title={`Contractor Licensing in ${hub.identity.name}`} tone="gray">
              <p className={prose}>{hub.contractorLicensing.narrative}</p>
            </Module>
          )}
          {hub.telecomLandscape.narrative && (
            <Module eyebrow="Market" title={`The ${hub.identity.name} Telecom Landscape`}>
              <p className={prose}>{hub.telecomLandscape.narrative}</p>
            </Module>
          )}
          {hub.faq.length > 0 && (
            <Module eyebrow="FAQ" title={`${hub.identity.name} Civil Construction Questions`} tone="gray">
              <FaqAccordion items={hub.faq.map((f) => ({ q: f.question, a: f.answer }))} withSchema />
            </Module>
          )}
        </>
      )}

      <CtaBand />
    </>
  );
}
