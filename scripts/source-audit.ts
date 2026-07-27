/**
 * Source discipline gate (PLAN.md §14, RESEARCH.md):
 *   - every location cites >= 5 sources
 *   - every source is labeled, linked, and dated (accessedDate present, ISO-ish)
 *   - no duplicate source URLs within a page
 *   - every `Sourced` field with a non-null value carries a source string
 *
 * Strict on _verified pages; report-only while a page is still in research.
 */
import { getAllLocations } from "../src/lib/locations";
import type { Location } from "../data/_schema";

const MIN_SOURCES = 5;
const DATE_RE = /^\d{4}-\d{2}-\d{2}/;

/** Walk the object tree finding {value, source, verifiedOn} shapes with a value but no source. */
function unsourcedValues(obj: unknown, trail: string[] = [], out: string[] = []): string[] {
  if (obj === null || typeof obj !== "object") return out;
  const rec = obj as Record<string, unknown>;
  const keys = Object.keys(rec);
  if (keys.includes("value") && keys.includes("source") && keys.includes("verifiedOn")) {
    if (rec.value !== null && (rec.source === null || rec.source === "")) {
      out.push(trail.join("."));
    }
    return out;
  }
  for (const k of keys) unsourcedValues(rec[k], [...trail, k], out);
  return out;
}

function auditOne(l: Location): string[] {
  const problems: string[] = [];
  if (l.sources.length < MIN_SOURCES)
    problems.push(`only ${l.sources.length} sources (need ${MIN_SOURCES})`);
  const seen = new Set<string>();
  for (const s of l.sources) {
    if (!DATE_RE.test(s.accessedDate)) problems.push(`source "${s.label}" has no ISO accessedDate`);
    if (seen.has(s.url)) problems.push(`duplicate source URL: ${s.url}`);
    seen.add(s.url);
  }
  for (const field of unsourcedValues(l)) problems.push(`value without source: ${field}`);
  return problems;
}

const locs = getAllLocations();
if (locs.length === 0) {
  console.log("source-audit: no location files yet (pre-Phase-4). PASS.");
  process.exit(0);
}

let failed = 0;
for (const l of locs) {
  const id = `${l.identity.stateSlug}/${l.identity.slug}`;
  const problems = auditOne(l);
  if (problems.length === 0) {
    console.log(`  OK      ${id}`);
  } else {
    const hard = l._verified;
    if (hard) failed++;
    console.log(`  ${hard ? "FAIL   " : "PENDING"} ${id}`);
    problems.forEach((p) => console.log(`            - ${p}`));
  }
}

if (failed) {
  console.error(`\nFAIL: ${failed} _verified page(s) with source problems.`);
  process.exit(1);
}
console.log(`\nPASS: source discipline holds on all _verified pages (${locs.length} files checked).`);
