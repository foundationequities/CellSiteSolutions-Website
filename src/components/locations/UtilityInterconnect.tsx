import type { Location } from "../../../data/_schema";
import { Module, Table, Tr, Td, AuthorityLink, prose } from "./section";

const TYPE_LABEL: Record<string, string> = {
  "investor-owned": "Investor-owned utility",
  municipal: "Municipal utility",
  cooperative: "Electric cooperative",
  unknown: "",
};

/** Utility interconnection reality (CONTENT_MODULES §E). */
export default function UtilityInterconnect({ location: l }: { location: Location }) {
  const u = l.utilities;
  return (
    <Module
      id="utilities"
      eyebrow="Utilities"
      title={`Power & Fiber Interconnection in ${l.identity.city}`}
    >
      {u.electricProviders.length > 0 && (
        <Table
          caption={`Electric service providers for ${l.identity.city}, ${l.identity.stateAbbr}`}
          head={["Electric provider", "Type", "Typical new-service lead"]}
        >
          {u.electricProviders.map((p) => (
            <Tr key={p.name}>
              <Td strong>
                <AuthorityLink name={p.name} url={p.newServiceProcessUrl} />
                {p.note ? ` — ${p.note}` : ""}
              </Td>
              <Td>{TYPE_LABEL[p.type] || "—"}</Td>
              <Td>{p.typicalNewServiceLeadWeeks != null ? `${p.typicalNewServiceLeadWeeks} weeks` : "—"}</Td>
            </Tr>
          ))}
        </Table>
      )}
      <dl className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
        {u.ilec && (
          <div>
            <dt className="font-display text-sm font-medium uppercase tracking-wide text-ink">ILEC</dt>
            <dd className="mt-1 text-sm text-muted">{u.ilec}</dd>
          </div>
        )}
        {u.notableFiberProviders.length > 0 && (
          <div>
            <dt className="font-display text-sm font-medium uppercase tracking-wide text-ink">Notable fiber providers</dt>
            <dd className="mt-1 text-sm text-muted">{u.notableFiberProviders.join(", ")}</dd>
          </div>
        )}
        {u.notableDataCenterCampuses.length > 0 && (
          <div>
            <dt className="font-display text-sm font-medium uppercase tracking-wide text-ink">Data center campuses</dt>
            <dd className="mt-1 text-sm text-muted">{u.notableDataCenterCampuses.join(", ")}</dd>
          </div>
        )}
        {u.ixPresence && (
          <div>
            <dt className="font-display text-sm font-medium uppercase tracking-wide text-ink">Interconnection presence</dt>
            <dd className="mt-1 text-sm text-muted">{u.ixPresence}</dd>
          </div>
        )}
      </dl>
      {u.longHaulRouteNotes && <p className={`mt-5 ${prose}`}>{u.longHaulRouteNotes}</p>}
    </Module>
  );
}
