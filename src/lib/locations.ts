import fs from "node:fs";
import path from "node:path";
import { LocationSchema, type Location } from "../../data/_schema";

const ROOT = path.join(process.cwd(), "data", "locations");
let cache: Location[] | null = null;

/** Loads and validates every location file. Throws on invalid data. */
export function getAllLocations(): Location[] {
  if (cache) return cache;
  const out: Location[] = [];
  // data/locations is populated in Phase 4 (seed split). Empty until then.
  if (fs.existsSync(ROOT)) {
    for (const stateDir of fs.readdirSync(ROOT)) {
      const dir = path.join(ROOT, stateDir);
      if (!fs.statSync(dir).isDirectory()) continue;
      for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".json"))) {
        const raw = JSON.parse(fs.readFileSync(path.join(dir, file), "utf8"));
        const parsed = LocationSchema.safeParse(raw);
        if (!parsed.success) {
          throw new Error(
            `Invalid location ${stateDir}/${file}:\n${JSON.stringify(parsed.error.format(), null, 2)}`
          );
        }
        out.push(parsed.data);
      }
    }
  }
  cache = out;
  return out;
}

/** Only pages cleared for publish appear in routing and sitemaps. */
export function getPublishedLocations(): Location[] {
  return getAllLocations().filter((l) => l._verified && l._gaps.length === 0);
}

export function getLocation(stateSlug: string, citySlug: string): Location | undefined {
  return getPublishedLocations().find(
    (l) => l.identity.stateSlug === stateSlug && l.identity.slug === citySlug
  );
}

export function getStateLocations(stateSlug: string): Location[] {
  return getPublishedLocations()
    .filter((l) => l.identity.stateSlug === stateSlug)
    .sort(
      (a, b) =>
        a.identity.tier - b.identity.tier ||
        a.identity.city.localeCompare(b.identity.city)
    );
}

export function getStates(): { slug: string; name: string; count: number }[] {
  const map = new Map<string, { slug: string; name: string; count: number }>();
  for (const l of getPublishedLocations()) {
    const e = map.get(l.identity.stateSlug) ?? {
      slug: l.identity.stateSlug,
      name: l.identity.state,
      count: 0,
    };
    e.count += 1;
    map.set(l.identity.stateSlug, e);
  }
  return [...map.values()].sort((a, b) => a.name.localeCompare(b.name));
}

function haversineMiles(a: Location, b: Location): number {
  const R = 3958.8;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(b.identity.latitude - a.identity.latitude);
  const dLon = toRad(b.identity.longitude - a.identity.longitude);
  const lat1 = toRad(a.identity.latitude);
  const lat2 = toRad(b.identity.latitude);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

/**
 * Nearest published markets, computed — never hand-curated.
 * Hand-curated "related locations" lists are a doorway-pattern tell.
 */
export function getNeighbors(loc: Location, n = 4) {
  return getPublishedLocations()
    .filter(
      (l) =>
        !(l.identity.slug === loc.identity.slug && l.identity.stateSlug === loc.identity.stateSlug)
    )
    .map((l) => ({ location: l, miles: Math.round(haversineMiles(loc, l)) }))
    .sort((a, b) => a.miles - b.miles)
    .slice(0, n);
}
