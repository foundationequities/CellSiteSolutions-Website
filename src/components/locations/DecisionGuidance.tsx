import type { Location } from "../../../data/_schema";
import { Module, prose } from "./section";

/** Decision guidance (CONTENT_MODULES §J) — the engineering-judgment module. */
export default function DecisionGuidance({ location: l }: { location: Location }) {
  return (
    <Module id="decision-guidance" eyebrow="Engineering Judgment" title={l.decisionGuidance.heading}>
      <div className="rounded-lg border-l-4 border-brand bg-[#f6f6f6] p-6">
        <p className={prose}>{l.decisionGuidance.body}</p>
      </div>
    </Module>
  );
}
