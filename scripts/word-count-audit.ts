/**
 * Enforces the tier word floors on rendered body text (PLAN.md §14):
 * Tier 1: 1,800 · Tier 2: 1,400 · Tier 3: 1,100.
 *
 * A page still in research (_verified: false) is reported, not failed —
 * the publish gate already keeps it out of routing. A page that claims
 * _verified while under its floor fails the build.
 */
import { getAllLocations } from "../src/lib/locations";
import { renderLocationText } from "./render-text";

const FLOORS: Record<1 | 2 | 3, number> = { 1: 1800, 2: 1400, 3: 1100 };

const locs = getAllLocations();
if (locs.length === 0) {
  console.log("word-count-audit: no location files yet (pre-Phase-4). PASS.");
  process.exit(0);
}

let failed = 0;
for (const l of locs) {
  const id = `${l.identity.stateSlug}/${l.identity.slug}`;
  const words = renderLocationText(l).split(/\s+/).filter(Boolean).length;
  const floor = FLOORS[l.identity.tier];
  const under = words < floor;
  const status = !under ? "OK   " : l._verified ? "FAIL " : "SHORT";
  console.log(`  ${status} ${id.padEnd(34)} tier ${l.identity.tier}  ${String(words).padStart(5)} / ${floor}`);
  if (under && l._verified) failed++;
}

if (failed) {
  console.error(`\nFAIL: ${failed} _verified page(s) under the tier word floor.`);
  process.exit(1);
}
console.log(`\nPASS: word floors respected on all _verified pages (${locs.length} files checked).`);
