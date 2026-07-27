/**
 * Fails the build if any two location pages are too similar.
 *
 * Compares rendered text, not source JSON — the rendered page is what Google
 * and LLMs actually see. Threshold is 25% pairwise 5-gram Jaccard similarity.
 *
 * Do not raise the threshold to make a build pass. Rewrite the page.
 */
import { getAllLocations } from "../src/lib/locations";
import { renderLocationText } from "./render-text";

const THRESHOLD = 0.25;
const N = 5;

function shingles(text: string): Set<string> {
  const words = text.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean);
  const s = new Set<string>();
  for (let i = 0; i + N <= words.length; i++) s.add(words.slice(i, i + N).join(" "));
  return s;
}

function jaccard(a: Set<string>, b: Set<string>): number {
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  return inter / (a.size + b.size - inter || 1);
}

const docs = getAllLocations().map((l) => ({
  id: `${l.identity.stateSlug}/${l.identity.slug}`,
  set: shingles(renderLocationText(l)),
}));

const failures: string[] = [];
const scores: { pair: string; score: number }[] = [];

for (let i = 0; i < docs.length; i++) {
  for (let j = i + 1; j < docs.length; j++) {
    const score = jaccard(docs[i].set, docs[j].set);
    scores.push({ pair: `${docs[i].id} <-> ${docs[j].id}`, score });
    if (score > THRESHOLD) failures.push(`${docs[i].id} <-> ${docs[j].id}: ${(score * 100).toFixed(1)}%`);
  }
}

scores.sort((a, b) => b.score - a.score);
console.log("\nTop 10 most similar page pairs:");
for (const s of scores.slice(0, 10)) {
  console.log(`  ${(s.score * 100).toFixed(1).padStart(5)}%  ${s.pair}`);
}

if (failures.length) {
  console.error(`\nFAIL: ${failures.length} pair(s) over the ${THRESHOLD * 100}% threshold:\n`);
  failures.forEach((f) => console.error("  " + f));
  console.error("\nRewrite the offending pages. Do not raise the threshold.\n");
  process.exit(1);
}
console.log(`\nPASS: all ${docs.length} location pages under ${THRESHOLD * 100}% pairwise similarity\n`);
