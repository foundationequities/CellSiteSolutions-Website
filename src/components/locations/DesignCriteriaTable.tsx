import type { Location } from "../../../data/_schema";
import { Module, Table, Tr, Td } from "./section";

/**
 * Local design criteria (CONTENT_MODULES Part 1 §3). Sourced-or-omitted:
 * a row renders only when its value exists — never a guessed number.
 * Units live in the same cell as the number (writing rule 3).
 */
export default function DesignCriteriaTable({ location: l }: { location: Location }) {
  const d = l.designCriteria;
  const rows: { label: string; value: string; source: string | null }[] = [];
  const push = (label: string, value: string | null, source: string | null = null) => {
    if (value) rows.push({ label, value, source });
  };

  push(
    "Ultimate wind speed — Risk Category II",
    d.ultimateWindSpeedMph.riskCatII.value != null ? `${d.ultimateWindSpeedMph.riskCatII.value} mph` : null,
    d.ultimateWindSpeedMph.riskCatII.source
  );
  push(
    "Ultimate wind speed — Risk Category IV",
    d.ultimateWindSpeedMph.riskCatIV.value != null ? `${d.ultimateWindSpeedMph.riskCatIV.value} mph` : null,
    d.ultimateWindSpeedMph.riskCatIV.source
  );
  push("Typical exposure category", d.typicalExposureCategory);
  push(
    "Ground snow load",
    d.groundSnowLoadPsf.value != null ? `${d.groundSnowLoadPsf.value} psf` : null,
    d.groundSnowLoadPsf.source
  );
  push(
    `Design radial ice${d.tia222Revision ? ` (TIA-222-${d.tia222Revision})` : ""}`,
    d.designRadialIceIn.value != null ? `${d.designRadialIceIn.value} in` : null,
    d.designRadialIceIn.source
  );
  push("Seismic Ss", d.seismic.ss.value != null ? String(d.seismic.ss.value) : null, d.seismic.ss.source);
  push("Seismic S1", d.seismic.s1.value != null ? String(d.seismic.s1.value) : null, d.seismic.s1.source);
  push("Typical site class", d.seismic.typicalSiteClass);
  push("Typical seismic design category", d.seismic.typicalDesignCategory);
  push(
    "Frost depth",
    d.frostDepthIn.value != null ? `${d.frostDepthIn.value} in` : null,
    d.frostDepthIn.source
  );
  push(
    "Design low temperature",
    d.designTempLowF.value != null ? `${d.designTempLowF.value} °F` : null,
    d.designTempLowF.source
  );
  push(
    "Design high temperature",
    d.designTempHighF.value != null ? `${d.designTempHighF.value} °F` : null,
    d.designTempHighF.source
  );

  if (rows.length === 0) return null;

  return (
    <Module
      id="design-criteria"
      eyebrow="Engineering"
      title={`Design Criteria for ${l.identity.city} Telecom Sites`}
    >
      {d.asce7Edition && (
        <p className="mb-4 text-sm text-muted">
          Wind, snow and seismic values per {d.asce7Edition}. Site-specific analysis governs final design.
        </p>
      )}
      <Table
        caption={`Structural design criteria for ${l.identity.city}, ${l.identity.stateAbbr}`}
        head={["Criterion", "Value", "Source"]}
      >
        {rows.map((r) => (
          <Tr key={r.label}>
            <Td strong>{r.label}</Td>
            <Td>{r.value}</Td>
            <Td>{r.source ?? "—"}</Td>
          </Tr>
        ))}
      </Table>
      {d.seismic.notes && <p className="mt-4 text-sm text-muted">{d.seismic.notes}</p>}
    </Module>
  );
}
