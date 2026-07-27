import type { Location } from "../../../data/_schema";
import { Module } from "./section";

const CATEGORY_LABEL: Record<string, string> = {
  "broadband program": "Broadband program",
  "data center": "Data center",
  "carrier program": "Carrier program",
  "municipal/utility fiber": "Municipal / utility fiber",
  transportation: "Transportation",
};

/** Local market activity (CONTENT_MODULES §I) — renders only when items exist. */
export default function MarketActivity({ location: l }: { location: Location }) {
  const m = l.marketActivity;
  if (m.items.length === 0) return null;

  return (
    <Module
      id="market-activity"
      eyebrow="Market Activity"
      title={`What's Being Built Around ${l.identity.city} Right Now`}
      tone="gray"
    >
      <ul className="space-y-4">
        {m.items.map((i) => (
          <li key={i.headline} className="rounded-lg border border-border bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">
              {CATEGORY_LABEL[i.category]}
            </p>
            <h3 className="mt-1 font-display text-lg font-medium text-ink">{i.headline}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{i.detail}</p>
            <p className="mt-2 text-xs text-muted">
              <a href={i.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-brand">
                Source
              </a>{" "}
              · as of {i.asOf}
            </p>
          </li>
        ))}
      </ul>
      {m.lastReviewed && (
        <p className="mt-4 text-xs text-muted">Section last reviewed {m.lastReviewed}.</p>
      )}
    </Module>
  );
}
