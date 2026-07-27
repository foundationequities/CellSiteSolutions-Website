import type { Location } from "../../../data/_schema";
import { Module, Table, Tr, Td, prose } from "./section";

/** Ground conditions & foundation approach (CONTENT_MODULES Part 1 §4). */
export default function GroundConditions({ location: l }: { location: Location }) {
  const g = l.geotech;
  const rows: { label: string; value: string }[] = [];
  const push = (label: string, value: string | null) => value && rows.push({ label, value });

  push("Dominant soil types", g.dominantSoilTypes.join(", "));
  if (g.typicalBearingCapacityPsf.low != null && g.typicalBearingCapacityPsf.high != null) {
    push(
      "Typical bearing capacity",
      `${g.typicalBearingCapacityPsf.low.toLocaleString("en-US")}–${g.typicalBearingCapacityPsf.high.toLocaleString("en-US")} psf (site-specific investigation governs)`
    );
  }
  push("Expansive soil risk", g.expansiveSoilRisk !== "unknown" ? g.expansiveSoilRisk : null);
  push(
    "Typical depth to bedrock",
    g.typicalDepthToBedrockFt.value != null ? `${g.typicalDepthToBedrockFt.value} ft` : null
  );
  push("Karst risk", g.karstRisk.present ? g.karstRisk.note ?? "present" : null);
  push(
    "Seasonal high groundwater",
    g.seasonalHighGroundwaterFt.value != null ? `${g.seasonalHighGroundwaterFt.value} ft` : null
  );

  return (
    <Module
      id="ground-conditions"
      eyebrow="Geotechnical"
      title={`Ground Conditions & Foundations in ${l.identity.city}`}
      tone="gray"
    >
      <p className={prose}>{g.dominantGeology}</p>
      {rows.length > 0 && (
        <div className="mt-6">
          <Table caption={`Geotechnical overview for ${l.identity.city}`} head={["Condition", "Typical"]}>
            {rows.map((r) => (
              <Tr key={r.label}>
                <Td strong>{r.label}</Td>
                <Td>{r.value}</Td>
              </Tr>
            ))}
          </Table>
        </div>
      )}
      {g.expansiveSoilNote && <p className={`mt-5 ${prose}`}>{g.expansiveSoilNote}</p>}
      {g.soilCorrosivityNote && <p className={`mt-4 ${prose}`}>{g.soilCorrosivityNote}</p>}
      <h3 className="mt-7 font-display text-xl font-medium text-ink">Foundation approach</h3>
      <p className={`mt-3 ${prose}`}>{g.foundationApproachNarrative}</p>
    </Module>
  );
}
