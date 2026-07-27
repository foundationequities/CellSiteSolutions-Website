import type { Location } from "../../../data/_schema";
import { Module, prose } from "./section";

/** Hazard & resilience profile (CONTENT_MODULES §H). */
export default function HazardProfile({ location: l }: { location: Location }) {
  const h = l.hazards;
  return (
    <Module id="hazards" eyebrow="Resilience" title={`Hazard Profile & Design Response in ${l.identity.city}`}>
      <ul className="flex flex-wrap gap-2">
        {h.dominant.map((hz) => (
          <li
            key={hz}
            className="rounded-full bg-brand/10 px-3.5 py-1.5 text-sm font-semibold capitalize text-brand"
          >
            {hz}
          </li>
        ))}
      </ul>
      <p className={`mt-5 ${prose}`}>{h.designImplications}</p>
      {h.restorationCapabilityNote && <p className={`mt-4 ${prose}`}>{h.restorationCapabilityNote}</p>}
    </Module>
  );
}
