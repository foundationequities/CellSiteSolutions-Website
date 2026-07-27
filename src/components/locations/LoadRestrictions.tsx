import type { Location } from "../../../data/_schema";
import { Module, Table, Tr, Td, AuthorityLink } from "./section";

/** Seasonal load restrictions & OS/OW logistics (CONTENT_MODULES §C). */
export default function LoadRestrictions({ location: l }: { location: Location }) {
  const g = l.logistics;
  const s = g.seasonalLoadRestrictions;

  return (
    <Module
      id="load-restrictions"
      eyebrow="Logistics"
      title={`Shelter & Hut Delivery Logistics for ${l.identity.city}`}
    >
      <Table
        caption={`Haul and delivery logistics for ${l.identity.city}, ${l.identity.stateAbbr}`}
        head={["Constraint", "Detail"]}
      >
        <Tr>
          <Td strong>Seasonal load restrictions</Td>
          <Td>
            {s.applies
              ? [
                  s.typicalWindow ? `Typical window: ${s.typicalWindow}.` : null,
                  s.postingAuthority ? "Posted by " : null,
                ]
                  .filter(Boolean)
                  .join(" ") || "Apply"
              : "Not typically posted in this market"}
            {s.applies && s.postingAuthority && (
              <AuthorityLink name={s.postingAuthority.name} url={s.postingAuthority.url} />
            )}
            {s.note ? ` ${s.note}` : ""}
          </Td>
        </Tr>
        {g.oversizeOverweightPermitAuthority && (
          <Tr>
            <Td strong>Oversize / overweight permits</Td>
            <Td>
              <AuthorityLink
                name={g.oversizeOverweightPermitAuthority.name}
                url={g.oversizeOverweightPermitAuthority.url}
              />
              {g.oversizeOverweightPermitAuthority.note ? ` — ${g.oversizeOverweightPermitAuthority.note}` : ""}
            </Td>
          </Tr>
        )}
        {g.bridgeOrClearanceConstraints && (
          <Tr>
            <Td strong>Bridge & clearance constraints</Td>
            <Td>{g.bridgeOrClearanceConstraints}</Td>
          </Tr>
        )}
        {g.railroads.length > 0 && (
          <Tr>
            <Td strong>Railroad crossings</Td>
            <Td>
              {g.railroads.map((r) => `${r.name}${r.crossingPermitNote ? ` — ${r.crossingPermitNote}` : ""}`).join("; ")}
            </Td>
          </Tr>
        )}
        {g.urbanRowRequirements && (
          <Tr>
            <Td strong>Urban ROW requirements</Td>
            <Td>{g.urbanRowRequirements}</Td>
          </Tr>
        )}
      </Table>
    </Module>
  );
}
