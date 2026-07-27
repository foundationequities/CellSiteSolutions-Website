import type { Location } from "../../../data/_schema";
import { Module, Table, Tr, Td, AuthorityLink, prose } from "./section";

/** Permitting & jurisdiction guide (CONTENT_MODULES Part 1 §5) as a real table. */
export default function PermittingTable({ location: l }: { location: Location }) {
  const r = l.regulatory;
  return (
    <Module
      id="permitting"
      eyebrow="Regulatory"
      title={`Permitting & Jurisdictions in ${l.identity.city}`}
    >
      <Table
        caption={`Permitting authorities for ${l.identity.city}, ${l.identity.stateAbbr}`}
        head={["Function", "Authority", "Typical review"]}
      >
        {r.buildingAHJs.map((a) => (
          <Tr key={a.name}>
            <Td strong>Building permits</Td>
            <Td>
              <AuthorityLink name={a.name} url={a.url} />
              {a.note ? ` — ${a.note}` : ""}
            </Td>
            <Td>{a.typicalReviewDays != null ? `${a.typicalReviewDays} days` : "—"}</Td>
          </Tr>
        ))}
        <Tr>
          <Td strong>Right-of-way permits</Td>
          <Td><AuthorityLink name={r.rowPermitAuthority.name} url={r.rowPermitAuthority.url} /></Td>
          <Td>{r.rowPermitAuthority.typicalReviewDays != null ? `${r.rowPermitAuthority.typicalReviewDays} days` : "—"}</Td>
        </Tr>
        <Tr>
          <Td strong>State DOT district</Td>
          <Td><AuthorityLink name={r.stateDotDistrict.name} url={r.stateDotDistrict.url} /></Td>
          <Td>{r.stateDotDistrict.typicalReviewDays != null ? `${r.stateDotDistrict.typicalReviewDays} days` : "—"}</Td>
        </Tr>
        <Tr>
          <Td strong>One-call (811) center</Td>
          <Td><AuthorityLink name={r.oneCallCenter.name} url={r.oneCallCenter.url} /></Td>
          <Td>
            {r.oneCallCenter.ticketLeadBusinessDays != null
              ? `${r.oneCallCenter.ticketLeadBusinessDays} business days notice`
              : "—"}
          </Td>
        </Tr>
        <Tr>
          <Td strong>Construction stormwater</Td>
          <Td>
            <AuthorityLink name={r.stormwaterAuthority.name} url={r.stormwaterAuthority.url} />
            {r.npdesDisturbanceTriggerAcres != null
              ? ` — NPDES permit triggers at ${r.npdesDisturbanceTriggerAcres} acre${r.npdesDisturbanceTriggerAcres === 1 ? "" : "s"} of disturbance`
              : ""}
          </Td>
          <Td>{r.stormwaterAuthority.typicalReviewDays != null ? `${r.stormwaterAuthority.typicalReviewDays} days` : "—"}</Td>
        </Tr>
        {r.floodplainAdministrator && (
          <Tr>
            <Td strong>Floodplain administrator</Td>
            <Td><AuthorityLink name={r.floodplainAdministrator.name} url={r.floodplainAdministrator.url} /></Td>
            <Td>{r.floodplainAdministrator.typicalReviewDays != null ? `${r.floodplainAdministrator.typicalReviewDays} days` : "—"}</Td>
          </Tr>
        )}
      </Table>
      {r.adoptedBuildingCode.value && (
        <p className="mt-4 text-sm text-muted">
          Adopted building code: <span className="font-semibold text-ink">{r.adoptedBuildingCode.value}</span>
          {r.adoptedBuildingCode.source ? ` (${r.adoptedBuildingCode.source})` : ""}
        </p>
      )}
      <p className={`mt-5 ${prose}`}>{r.permitTimelineNarrative}</p>
      {r.wirelessFacilityOrdinanceNote && <p className={`mt-4 ${prose}`}>{r.wirelessFacilityOrdinanceNote}</p>}
    </Module>
  );
}
