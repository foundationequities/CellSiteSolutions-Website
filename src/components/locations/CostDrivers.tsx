import type { Location } from "../../../data/_schema";
import { Module, prose } from "./section";

/** Local cost drivers (CONTENT_MODULES §F) — drivers, never unit pricing. */
export default function CostDrivers({ location: l }: { location: Location }) {
  const c = l.costDrivers;
  const items: { label: string; note: string }[] = [];
  const push = (label: string, note: string | null) => note && items.push({ label, note });

  push(
    "Rock excavation",
    c.rockExcavationLikelihood !== "unknown"
      ? `${c.rockExcavationLikelihood} likelihood${c.rockNote ? ` — ${c.rockNote}` : ""}`
      : c.rockNote
  );
  push("Aggregate haul", c.aggregateHaulNote);
  push("Ready-mix proximity", c.readyMixProximityNote);
  push("Spoil disposal", c.spoilDisposalNote);
  push("Permit fees & review", c.permitFeeNote);
  push("Prevailing wage exposure", c.prevailingWageExposure);
  push("Union jurisdiction", c.unionJurisdictionNote);
  push("Seasonal premium", c.seasonalPremiumNote);

  return (
    <Module
      id="cost-drivers"
      eyebrow="Estimating"
      title={`What Drives Civil Cost in ${l.identity.city}`}
      tone="gray"
    >
      <p className={prose}>{c.narrative}</p>
      {items.length > 0 && (
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {items.map((i) => (
            <li key={i.label} className="rounded-lg border border-border bg-white p-5">
              <p className="font-display text-sm font-medium uppercase tracking-wide text-ink">{i.label}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{i.note}</p>
            </li>
          ))}
        </ul>
      )}
      <p className="mt-4 text-sm text-muted">
        Drivers, not prices — every site prices to its own conditions, and unit pricing published
        without them would mislead.
      </p>
    </Module>
  );
}
