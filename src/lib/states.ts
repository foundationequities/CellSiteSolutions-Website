import fs from "node:fs";
import path from "node:path";
import { z } from "zod";
import { Source } from "../../data/_schema";

/**
 * State hub content model — PLAN.md §6.1. Same discipline as the city
 * schema: every narrative is sourced or null, never invented, and a hub
 * publishes only after human sign-off. City grids, counties and neighbors
 * come from the location data at render time, not from these files.
 */

const Gap = z.object({ field: z.string(), attempted: z.string() });

export const StateFaq = z.object({
  question: z.string().min(15),
  answer: z.string().min(150).max(700),
});

export const StateHubSchema = z.object({
  identity: z.object({
    slug: z.string().regex(/^[a-z0-9-]+$/),
    name: z.string(),
    abbr: z.string().length(2),
  }),
  metadata: z.object({
    title: z.string().min(30).max(65).nullable(),
    description: z.string().min(120).max(165).nullable(),
    h1: z.string().min(20).nullable(),
    intro: z.string().min(300).nullable(),
  }),
  /** Statewide code adoption and notable local-amendment landscape. */
  codeAdoption: z.object({ narrative: z.string().min(150).nullable(), source: z.string().nullable() }),
  /** State DOT ROW / utility accommodation process. */
  dotRowProcess: z.object({ narrative: z.string().min(150).nullable(), source: z.string().nullable() }),
  /** The state's one-call (811) center. */
  oneCall: z.object({
    name: z.string().nullable(),
    url: z.string().url().nullable(),
    ticketLeadBusinessDays: z.number().nullable(),
    source: z.string().nullable(),
  }),
  /** Wind/frost/snow variation across the state, rendered as a table. */
  designCriteriaVariation: z.object({
    windSpeedRangeMph: z.object({ low: z.number().nullable(), high: z.number().nullable() }),
    frostDepthRangeIn: z.object({ low: z.number().nullable(), high: z.number().nullable() }),
    groundSnowRangePsf: z.object({ low: z.number().nullable(), high: z.number().nullable() }),
    narrative: z.string().min(120).nullable(),
    source: z.string().nullable(),
  }),
  /** Seasonal load restriction regime (spring thaw postings etc.). */
  seasonalLoadRegime: z.object({ narrative: z.string().min(120).nullable(), source: z.string().nullable() }),
  /** SHPO and state environmental review overview. */
  environmentalReview: z.object({ narrative: z.string().min(120).nullable(), source: z.string().nullable() }),
  /** State contractor licensing requirements. */
  contractorLicensing: z.object({ narrative: z.string().min(120).nullable(), source: z.string().nullable() }),
  /** Broadband program activity, data center corridors, carrier landscape. */
  telecomLandscape: z.object({ narrative: z.string().min(200).nullable(), source: z.string().nullable() }),
  faq: z.array(StateFaq),
  sources: z.array(Source),
  _verified: z.boolean(),
  _verifiedBy: z.string().nullable(),
  _verifiedOn: z.string().nullable(),
  _gaps: z.array(Gap),
});

export type StateHub = z.infer<typeof StateHubSchema>;

const ROOT = path.join(process.cwd(), "data", "states");
let cache: StateHub[] | null = null;

export function getAllStateHubs(): StateHub[] {
  if (cache) return cache;
  const out: StateHub[] = [];
  if (fs.existsSync(ROOT)) {
    for (const file of fs.readdirSync(ROOT).filter((f) => f.endsWith(".json"))) {
      const raw = JSON.parse(fs.readFileSync(path.join(ROOT, file), "utf8"));
      const parsed = StateHubSchema.safeParse(raw);
      if (!parsed.success) {
        throw new Error(
          `Invalid state hub ${file}:\n${JSON.stringify(parsed.error.format(), null, 2)}`
        );
      }
      out.push(parsed.data);
    }
  }
  cache = out.sort((a, b) => a.identity.name.localeCompare(b.identity.name));
  return cache;
}

/** A hub publishes only after human sign-off with no open gaps — same gate as cities. */
export function getPublishedStateHubs(): StateHub[] {
  return getAllStateHubs().filter((s) => s._verified && s._gaps.length === 0);
}

export function getStateHub(slug: string): StateHub | undefined {
  return getPublishedStateHubs().find((s) => s.identity.slug === slug);
}
