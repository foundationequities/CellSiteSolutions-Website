import fs from "node:fs";
import path from "node:path";
import { z } from "zod";

/**
 * Read-only access to data/locations.seed.json — identity facts only.
 *
 * The seed drives the national index, the footprint map, and the state hub
 * market grids while research is pending: city NAMES and one-line market
 * drivers are safe to show, but a seed market gets no page and no link until
 * it is researched, verified, and published (Phase 4-5). Everything content-
 * bearing goes through src/lib/locations.ts and its publish gate instead.
 */

const SeedMarket = z.object({
  identity: z.object({
    slug: z.string(),
    city: z.string(),
    state: z.string(),
    stateSlug: z.string(),
    stateAbbr: z.string(),
    tier: z.union([z.literal(1), z.literal(2), z.literal(3)]),
    latitude: z.number(),
    longitude: z.number(),
  }),
  _relevanceDriver: z.string(),
  operations: z.object({
    nearestBase: z.object({
      city: z.string(),
      isStaffedFacility: z.boolean(),
    }),
    mobilizationBand: z.enum(["A", "B", "C"]),
  }),
});

const SeedFile = z.object({ locations: z.array(SeedMarket) });

export type SeedMarketInfo = {
  slug: string;
  city: string;
  state: string;
  stateSlug: string;
  stateAbbr: string;
  tier: 1 | 2 | 3;
  latitude: number;
  longitude: number;
  driver: string;
  band: "A" | "B" | "C";
  isYard: boolean;
};

let cache: SeedMarketInfo[] | null = null;

export function getSeedMarkets(): SeedMarketInfo[] {
  if (cache) return cache;
  const file = path.join(process.cwd(), "data", "locations.seed.json");
  const parsed = SeedFile.parse(JSON.parse(fs.readFileSync(file, "utf8")));
  cache = parsed.locations.map((l) => ({
    slug: l.identity.slug,
    city: l.identity.city,
    state: l.identity.state,
    stateSlug: l.identity.stateSlug,
    stateAbbr: l.identity.stateAbbr,
    tier: l.identity.tier,
    latitude: l.identity.latitude,
    longitude: l.identity.longitude,
    driver: l._relevanceDriver,
    band: l.operations.mobilizationBand,
    isYard: l.operations.nearestBase.isStaffedFacility,
  }));
  return cache;
}

export function getSeedMarketsByState(stateSlug: string): SeedMarketInfo[] {
  return getSeedMarkets()
    .filter((m) => m.stateSlug === stateSlug)
    .sort((a, b) => a.tier - b.tier || a.city.localeCompare(b.city));
}
