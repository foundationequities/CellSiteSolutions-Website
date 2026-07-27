import type { Location } from "../../../data/_schema";
import { Module, prose } from "./section";

const HEADINGS: Record<"fiber" | "wireless" | "edge", (city: string) => string> = {
  fiber: (c) => `Fiber Infrastructure Civil Construction in ${c}`,
  wireless: (c) => `Wireless Site Civil Construction in ${c}`,
  edge: (c) => `Edge & Data Center Civil Work in ${c}`,
};

const EYEBROWS = { fiber: "Fiber", wireless: "Wireless", edge: "Edge & Data Center" } as const;

/**
 * Technology-segment scope block (CONTENT_MODULES §A) — one each for fiber,
 * wireless, and edge. The narrative is authored per city and must reference a
 * real local specific; the scope list comes from that city's weighting.
 */
export default function SegmentBlock({
  location: l,
  segment,
}: {
  location: Location;
  segment: "fiber" | "wireless" | "edge";
}) {
  const s = l.segments[segment];
  return (
    <Module
      id={`${segment}-civil`}
      eyebrow={EYEBROWS[segment]}
      title={HEADINGS[segment](l.identity.city)}
      tone={segment === "wireless" ? "gray" : "white"}
    >
      <p className={prose}>{s.narrative}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {[...s.primaryScopeIds, ...s.secondaryScopeIds].map((scope) => (
          <li
            key={scope}
            className="rounded-full border border-border bg-white px-3.5 py-1.5 text-sm text-ink"
          >
            {scope}
          </li>
        ))}
      </ul>
    </Module>
  );
}
