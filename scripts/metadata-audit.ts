/**
 * Metadata gate (PLAN.md §14): every location's title and meta description are
 *   - within length bounds (title 30-65, description 120-165 — schema enforces
 *     the same bounds; this audit exists to catch cross-page problems)
 *   - unique across the whole cluster
 *   - locally specific: title and description each mention the city or state
 *
 * Duplicates fail regardless of _verified — two half-finished pages sharing a
 * title become two published pages sharing a title. Local-specificity is
 * strict on _verified pages only.
 */
import { getAllLocations } from "../src/lib/locations";

const locs = getAllLocations();
if (locs.length === 0) {
  console.log("metadata-audit: no location files yet (pre-Phase-4). PASS.");
  process.exit(0);
}

let failed = 0;
const titles = new Map<string, string[]>();
const descriptions = new Map<string, string[]>();

for (const l of locs) {
  const id = `${l.identity.stateSlug}/${l.identity.slug}`;
  titles.set(l.metadata.title, [...(titles.get(l.metadata.title) ?? []), id]);
  descriptions.set(l.metadata.description, [...(descriptions.get(l.metadata.description) ?? []), id]);

  const mentionsPlace = (s: string) =>
    s.toLowerCase().includes(l.identity.city.toLowerCase()) ||
    s.toLowerCase().includes(l.identity.state.toLowerCase()) ||
    s.includes(l.identity.stateAbbr);
  const problems: string[] = [];
  if (!mentionsPlace(l.metadata.title)) problems.push("title does not mention city or state");
  if (!mentionsPlace(l.metadata.description)) problems.push("description does not mention city or state");
  if (!mentionsPlace(l.metadata.h1)) problems.push("h1 does not mention city or state");

  if (problems.length) {
    const hard = l._verified;
    if (hard) failed++;
    console.log(`  ${hard ? "FAIL   " : "PENDING"} ${id}`);
    problems.forEach((p) => console.log(`            - ${p}`));
  } else {
    console.log(`  OK      ${id}`);
  }
}

for (const [title, ids] of titles) {
  if (ids.length > 1) {
    failed++;
    console.error(`  FAIL    duplicate title "${title}" on: ${ids.join(", ")}`);
  }
}
for (const [desc, ids] of descriptions) {
  if (ids.length > 1) {
    failed++;
    console.error(`  FAIL    duplicate description on: ${ids.join(", ")} ("${desc.slice(0, 60)}…")`);
  }
}

if (failed) {
  console.error(`\nFAIL: ${failed} metadata problem(s).`);
  process.exit(1);
}
console.log(`\nPASS: metadata unique and locally specific (${locs.length} files checked).`);
