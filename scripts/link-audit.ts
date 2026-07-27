/**
 * Link gate (PLAN.md §14): on pages headed for publish, every cited source URL
 * and every authority link (AHJ, ROW, DOT, 811, stormwater, floodplain,
 * OS/OW, utilities) must resolve — a location page citing a dead permit portal
 * is worse than no citation.
 *
 * Only _verified pages are checked (research-in-progress pages change daily
 * and would make the build flaky for no benefit). Each URL is fetched once
 * with redirects followed; 2xx/3xx pass. HEAD is tried first, then GET,
 * because many government servers reject HEAD.
 */
import { getAllLocations } from "../src/lib/locations";
import type { Location } from "../data/_schema";

const TIMEOUT_MS = 15000;
const CONCURRENCY = 8;

function collectUrls(l: Location): Map<string, string> {
  const urls = new Map<string, string>(); // url -> first label
  const add = (url: string | null | undefined, label: string) => {
    if (url && !urls.has(url)) urls.set(url, label);
  };
  l.sources.forEach((s) => add(s.url, `source: ${s.label}`));
  l.regulatory.buildingAHJs.forEach((a) => add(a.url, `AHJ: ${a.name}`));
  add(l.regulatory.rowPermitAuthority.url, `ROW: ${l.regulatory.rowPermitAuthority.name}`);
  add(l.regulatory.stateDotDistrict.url, `DOT: ${l.regulatory.stateDotDistrict.name}`);
  add(l.regulatory.oneCallCenter.url, `811: ${l.regulatory.oneCallCenter.name}`);
  add(l.regulatory.stormwaterAuthority.url, `stormwater: ${l.regulatory.stormwaterAuthority.name}`);
  add(l.regulatory.floodplainAdministrator?.url, "floodplain administrator");
  add(l.logistics.oversizeOverweightPermitAuthority?.url, "OS/OW permits");
  add(l.logistics.seasonalLoadRestrictions.postingAuthority?.url, "load restriction postings");
  add(l.environmental.shpo?.url, "SHPO");
  add(l.environmental.wetlandsAuthority?.url, "wetlands authority");
  l.utilities.electricProviders.forEach((p) => add(p.newServiceProcessUrl, `utility: ${p.name}`));
  l.marketActivity.items.forEach((i) => add(i.sourceUrl, `market activity: ${i.headline}`));
  return urls;
}

async function check(url: string): Promise<{ ok: boolean; status: string }> {
  for (const method of ["HEAD", "GET"] as const) {
    try {
      const res = await fetch(url, {
        method,
        redirect: "follow",
        signal: AbortSignal.timeout(TIMEOUT_MS),
        headers: { "user-agent": "Mozilla/5.0 (compatible; CSS-link-audit)" },
      });
      if (res.ok) return { ok: true, status: String(res.status) };
      // some servers 403/405 HEAD but serve GET — fall through to GET
      if (method === "GET") return { ok: false, status: String(res.status) };
    } catch (e) {
      if (method === "GET") return { ok: false, status: (e as Error).name || "network error" };
    }
  }
  return { ok: false, status: "unreachable" };
}

async function main() {
  const verified = getAllLocations().filter((l) => l._verified);
  if (verified.length === 0) {
    console.log("link-audit: no _verified location files yet. PASS.");
    return;
  }

  let failed = 0;
  for (const l of verified) {
    const id = `${l.identity.stateSlug}/${l.identity.slug}`;
    const urls = [...collectUrls(l).entries()];
    console.log(`\n${id} — ${urls.length} links`);
    for (let i = 0; i < urls.length; i += CONCURRENCY) {
      const batch = urls.slice(i, i + CONCURRENCY);
      const results = await Promise.all(batch.map(([u]) => check(u)));
      results.forEach((r, j) => {
        const [url, label] = batch[j];
        if (!r.ok) {
          failed++;
          console.error(`  FAIL ${r.status.padEnd(14)} ${label} → ${url}`);
        }
      });
    }
  }

  if (failed) {
    console.error(`\nFAIL: ${failed} dead or unreachable link(s) on _verified pages.`);
    process.exit(1);
  }
  console.log(`\nPASS: all links resolve on ${verified.length} _verified page(s).`);
}

main();
