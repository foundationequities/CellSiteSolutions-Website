/**
 * Validates every location file against the schema and the tier publish gate.
 * Runs in prebuild. Never bypass.
 */
import { getAllLocations } from "../src/lib/locations";
import { publishGate } from "../data/_schema";
import { renderLocationText } from "./render-text";

const locs = getAllLocations(); // throws on schema failure
let pending = 0;

console.log(`Loaded ${locs.length} location files.\n`);

for (const l of locs) {
  const id = `${l.identity.stateSlug}/${l.identity.slug}`;
  const words = renderLocationText(l).split(/\s+/).filter(Boolean).length;
  const { pass, failures } = publishGate(l, words);
  if (pass) {
    console.log(`  OK      ${id.padEnd(34)} tier ${l.identity.tier}  ${words} words`);
  } else {
    pending++;
    console.log(`  PENDING ${id.padEnd(34)} tier ${l.identity.tier}`);
    failures.forEach((f) => console.log(`            - ${f}`));
  }
}

console.log(`\n${locs.length - pending} publishable, ${pending} pending research or sign-off.`);

// Pending pages are excluded from routing — that is the intended workflow while
// research is in progress, not a build failure. The build fails only when a page
// claims _verified but still fails its tier gate.
const lying = locs.filter((l) => {
  const words = renderLocationText(l).split(/\s+/).filter(Boolean).length;
  return l._verified && !publishGate(l, words).pass;
});
if (lying.length) {
  console.error("\nFAIL: pages marked _verified that do not pass their tier gate:");
  lying.forEach((l) => console.error(`  ${l.identity.stateSlug}/${l.identity.slug}`));
  process.exit(1);
}
