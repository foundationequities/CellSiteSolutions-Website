import type { Location } from "../../../data/_schema";
import { Module, prose } from "./section";

const BAND_HEADING: Record<"A" | "B" | "C", (city: string) => string> = {
  A: (c) => `Reaching ${c}: Regional Crews`,
  B: (c) => `Reaching ${c}: Project-Based Deployment`,
  C: (c) => `Building in ${c}: Program Deployment`,
};

/**
 * Mobilization & crew deployment (CONTENT_MODULES §O) — written to the BAND,
 * never templated off the base city. All copy comes from this market's own
 * mobilizationNote / staging / supply fields, which the uniqueness audit
 * checks pairwise; this component only lays it out.
 */
export default function CrewBase({ location: l }: { location: Location }) {
  const o = l.operations;
  return (
    <Module id="mobilization" eyebrow="Mobilization" title={BAND_HEADING[o.mobilizationBand](l.identity.city)}>
      <p className={prose}>{o.mobilizationNote}</p>
      <dl className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
        {o.nearestBase.routeVerified && (
          <div>
            <dt className="font-display text-sm font-medium uppercase tracking-wide text-ink">Mobilization distance</dt>
            <dd className="mt-1 text-sm text-muted">
              {o.nearestBase.roadMiles.toLocaleString("en-US")} road miles ·{" "}
              {o.nearestBase.driveTimeHours} hours from the {o.nearestBase.city},{" "}
              {o.nearestBase.state} yard
            </dd>
          </div>
        )}
        {o.stagingApproach && (
          <div>
            <dt className="font-display text-sm font-medium uppercase tracking-wide text-ink">Staging</dt>
            <dd className="mt-1 text-sm text-muted">{o.stagingApproach}</dd>
          </div>
        )}
        {o.localSupplyApproach && (
          <div>
            <dt className="font-display text-sm font-medium uppercase tracking-wide text-ink">Local supply</dt>
            <dd className="mt-1 text-sm text-muted">{o.localSupplyApproach}</dd>
          </div>
        )}
        {o.selfPerformVsSubNote && (
          <div>
            <dt className="font-display text-sm font-medium uppercase tracking-wide text-ink">Self-perform vs. subcontract</dt>
            <dd className="mt-1 text-sm text-muted">{o.selfPerformVsSubNote}</dd>
          </div>
        )}
      </dl>
      {o.emergencyResponseNote && <p className={`mt-5 ${prose}`}>{o.emergencyResponseNote}</p>}
    </Module>
  );
}
