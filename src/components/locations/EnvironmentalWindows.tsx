import type { Location } from "../../../data/_schema";
import { Module, Table, Tr, Td, AuthorityLink } from "./section";

/** Environmental & cultural review windows (CONTENT_MODULES §D). */
export default function EnvironmentalWindows({ location: l }: { location: Location }) {
  const e = l.environmental;
  const t = e.treeClearingWindow;

  return (
    <Module
      id="environmental-windows"
      eyebrow="Environmental"
      title={`Environmental & Cultural Review in ${l.identity.city}`}
      tone="gray"
    >
      <Table
        caption={`Environmental review references for ${l.identity.city}, ${l.identity.stateAbbr}`}
        head={["Topic", "Detail"]}
      >
        <Tr>
          <Td strong>Tree clearing window</Td>
          <Td>
            {t.restricted
              ? `${t.window ?? "Seasonally restricted"}${t.driver ? ` — driven by ${t.driver}` : ""}${t.source ? ` (${t.source})` : ""}`
              : "No seasonal clearing restriction identified for this market"}
          </Td>
        </Tr>
        {e.shpo && (
          <Tr>
            <Td strong>State historic preservation (SHPO)</Td>
            <Td>
              <AuthorityLink name={e.shpo.name} url={e.shpo.url} />
              {e.shpo.typicalReviewDays != null ? ` — typical review ${e.shpo.typicalReviewDays} days` : ""}
            </Td>
          </Tr>
        )}
        {(e.wetlandsAuthority || e.usaceDistrict) && (
          <Tr>
            <Td strong>Wetlands / waters</Td>
            <Td>
              {e.wetlandsAuthority && <AuthorityLink name={e.wetlandsAuthority.name} url={e.wetlandsAuthority.url} />}
              {e.wetlandsAuthority && e.usaceDistrict ? " · " : ""}
              {e.usaceDistrict ? `USACE ${e.usaceDistrict} District` : ""}
            </Td>
          </Tr>
        )}
        {e.listedSpeciesNote && (
          <Tr>
            <Td strong>Listed species</Td>
            <Td>{e.listedSpeciesNote}</Td>
          </Tr>
        )}
        {e.floodplainPrevalenceNote && (
          <Tr>
            <Td strong>Floodplain</Td>
            <Td>{e.floodplainPrevalenceNote}</Td>
          </Tr>
        )}
      </Table>
      <p className="mt-4 text-sm text-muted">
        CellSite Solutions coordinates and supports these reviews as part of site civil scope —
        timelines above are the agencies&rsquo; own and should be confirmed per project.
      </p>
    </Module>
  );
}
