import type { Location } from "../../../data/_schema";
import { Module } from "./section";
import { FootprintMap } from "./FootprintMap";

/** Coverage map + counties served (CONTENT_MODULES Part 1 §7). */
export default function CoverageMap({ location: l }: { location: Location }) {
  const o = l.operations;
  return (
    <Module id="coverage" eyebrow="Coverage" title={`Counties Served Around ${l.identity.city}`} tone="gray">
      <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_1fr]">
        <FootprintMap highlight={{ stateSlug: l.identity.stateSlug, slug: l.identity.slug }} />
        <div>
          <h3 className="font-display text-sm font-medium uppercase tracking-wide text-ink">
            Counties served from this market
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {o.countiesServed.map((c) => (
              <li key={c} className="rounded-full border border-border bg-white px-3.5 py-1.5 text-sm text-ink">
                {c} County
              </li>
            ))}
          </ul>
          {o.serviceRadiusMiles != null && (
            <p className="mt-4 text-sm text-muted">
              Typical service radius: {o.serviceRadiusMiles} miles.
            </p>
          )}
        </div>
      </div>
    </Module>
  );
}
