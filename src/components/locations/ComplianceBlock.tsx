import type { Location } from "../../../data/_schema";
import { Module, prose } from "./section";

/** Compliance & licensing (CONTENT_MODULES §K). */
export default function ComplianceBlock({ location: l }: { location: Location }) {
  const c = l.compliance;
  return (
    <Module id="compliance" eyebrow="Compliance" title={`Licensing & Compliance in ${l.identity.state}`} tone="gray">
      <p className={prose}>{c.stateContractorLicensing}</p>
      {c.additionalRegistrations.length > 0 && (
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted">
          {c.additionalRegistrations.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      )}
      {c.insuranceBondingNorms && <p className={`mt-4 ${prose}`}>{c.insuranceBondingNorms}</p>}
      {c.cssQualificationsNote && <p className={`mt-4 ${prose}`}>{c.cssQualificationsNote}</p>}
    </Module>
  );
}
