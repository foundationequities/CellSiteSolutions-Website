import type { Location } from "../../../data/_schema";
import { Module, Table, Tr, Td, prose } from "./section";

const FEASIBILITY_LABEL: Record<string, string> = {
  favorable: "Favorable",
  workable: "Workable",
  constrained: "Constrained",
  restricted: "Restricted",
};

/** Site conditions calendar (CONTENT_MODULES §B) — 12-row real <table>. */
export default function SeasonalCalendar({ location: l }: { location: Location }) {
  return (
    <Module
      id="seasonal-calendar"
      eyebrow="Scheduling"
      title={`When Can You Build in ${l.identity.city}?`}
      tone="gray"
    >
      <p className={prose}>{l.seasonality.narrative}</p>
      <div className="mt-6">
        <Table
          caption={`Month-by-month buildability in ${l.identity.city}, ${l.identity.stateAbbr}`}
          head={["Month", "Ground conditions", "Earthwork & concrete", "Notes"]}
        >
          {l.seasonality.calendar.map((m) => (
            <Tr key={m.month}>
              <Td strong>{m.month}</Td>
              <Td>{m.groundConditions}</Td>
              <Td>{FEASIBILITY_LABEL[m.earthworkConcrete]}</Td>
              <Td>{m.note ?? "—"}</Td>
            </Tr>
          ))}
        </Table>
      </div>
    </Module>
  );
}
