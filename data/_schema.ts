import { z } from "zod";

/**
 * Location data contract for the Civil Services Locations cluster.
 *
 * Rule: a field is either sourced or null. Never invented.
 * A page publishes only when `_verified` is true, set by a named human.
 */

const Sourced = <T extends z.ZodTypeAny>(inner: T) =>
  z.object({
    value: inner.nullable(),
    source: z.string().min(4).nullable(),
    verifiedOn: z.string().nullable(), // ISO date
  });

export const Source = z.object({
  label: z.string().min(3),
  url: z.string().url(),
  accessedDate: z.string(),
});

export const Tier = z.union([z.literal(1), z.literal(2), z.literal(3)]);

/* ---------------------------------------------------------------- identity */

export const Identity = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  city: z.string(),
  state: z.string(),
  stateSlug: z.string().regex(/^[a-z0-9-]+$/),
  stateAbbr: z.string().length(2),
  counties: z.array(z.string()).min(1),
  msa: z.string().nullable(),
  tier: Tier,
  latitude: z.number(),
  longitude: z.number(),
  elevationFt: z.number().nullable(),
  population: Sourced(z.number()),
  interstates: z.array(z.string()),
  majorRoutes: z.array(z.string()),
});

/* --------------------------------------------------------- designCriteria */
/* Highest-value differentiator. Every value sourced or null. */

export const DesignCriteria = z.object({
  asce7Edition: z.string().nullable(),
  ultimateWindSpeedMph: z.object({
    riskCatII: Sourced(z.number()),
    riskCatIV: Sourced(z.number()),
  }),
  typicalExposureCategory: z.string().nullable(),
  groundSnowLoadPsf: Sourced(z.number()),
  tia222Revision: z.string().nullable(),
  designRadialIceIn: Sourced(z.number()),
  seismic: z.object({
    ss: Sourced(z.number()),
    s1: Sourced(z.number()),
    typicalSiteClass: z.string().nullable(),
    typicalDesignCategory: z.string().nullable(),
    notes: z.string().nullable(),
  }),
  frostDepthIn: Sourced(z.number()),
  designTempLowF: Sourced(z.number()),
  designTempHighF: Sourced(z.number()),
});

/* ----------------------------------------------------------------- geotech */

export const Geotech = z.object({
  dominantGeology: z.string().min(20),
  dominantSoilTypes: z.array(z.string()).min(1),
  typicalBearingCapacityPsf: z.object({
    low: z.number().nullable(),
    high: z.number().nullable(),
    source: z.string().nullable(),
  }),
  expansiveSoilRisk: z.enum(["none", "low", "moderate", "high", "unknown"]),
  expansiveSoilNote: z.string().nullable(),
  typicalDepthToBedrockFt: Sourced(z.number()),
  karstRisk: z.object({ present: z.boolean(), note: z.string().nullable() }),
  seasonalHighGroundwaterFt: Sourced(z.number()),
  soilCorrosivityNote: z.string().nullable(),
  foundationApproachNarrative: z.string().min(200),
});

/* -------------------------------------------------------------- regulatory */

export const Authority = z.object({
  name: z.string(),
  url: z.string().url().nullable(),
  phone: z.string().nullable(),
  typicalReviewDays: z.number().nullable(),
  note: z.string().nullable(),
});

export const Regulatory = z.object({
  buildingAHJs: z.array(Authority).min(1),
  adoptedBuildingCode: Sourced(z.string()),
  wirelessFacilityOrdinanceNote: z.string().nullable(),
  rowPermitAuthority: Authority,
  stateDotDistrict: Authority,
  oneCallCenter: Authority.extend({ ticketLeadBusinessDays: z.number().nullable() }),
  stormwaterAuthority: Authority,
  npdesDisturbanceTriggerAcres: z.number().nullable(),
  floodplainAdministrator: Authority.nullable(),
  permitTimelineNarrative: z.string().min(150),
});

/* --------------------------------------------------------------- utilities */

export const Utilities = z.object({
  electricProviders: z.array(
    z.object({
      name: z.string(),
      type: z.enum(["investor-owned", "municipal", "cooperative", "unknown"]),
      newServiceProcessUrl: z.string().url().nullable(),
      typicalNewServiceLeadWeeks: z.number().nullable(),
      note: z.string().nullable(),
    })
  ),
  ilec: z.string().nullable(),
  notableFiberProviders: z.array(z.string()),
  notableDataCenterCampuses: z.array(z.string()),
  longHaulRouteNotes: z.string().nullable(),
  ixPresence: z.string().nullable(),
});

/* -------------------------------------------------------- logistics (new) */

export const Logistics = z.object({
  seasonalLoadRestrictions: z.object({
    applies: z.boolean(),
    typicalWindow: z.string().nullable(),
    postingAuthority: Authority.nullable(),
    note: z.string().nullable(),
  }),
  oversizeOverweightPermitAuthority: Authority.nullable(),
  bridgeOrClearanceConstraints: z.string().nullable(),
  railroads: z.array(
    z.object({ name: z.string(), crossingPermitNote: z.string().nullable() })
  ),
  urbanRowRequirements: z.string().nullable(),
});

/* ---------------------------------------------------- environmental (new) */

export const Environmental = z.object({
  treeClearingWindow: z.object({
    restricted: z.boolean(),
    window: z.string().nullable(),
    driver: z.string().nullable(), // e.g. protected bat species
    source: z.string().nullable(),
  }),
  shpo: Authority.nullable(),
  wetlandsAuthority: Authority.nullable(),
  usaceDistrict: z.string().nullable(),
  listedSpeciesNote: z.string().nullable(),
  floodplainPrevalenceNote: z.string().nullable(),
});

/* ------------------------------------------------------ seasonality (new) */

export const MonthCondition = z.object({
  month: z.enum(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]),
  groundConditions: z.string(),
  earthworkConcrete: z.enum(["favorable", "workable", "constrained", "restricted"]),
  note: z.string().nullable(),
});

export const Seasonality = z.object({
  calendar: z.array(MonthCondition).length(12),
  narrative: z.string().min(150),
});

/* ------------------------------------------------------ costDrivers (new) */

export const CostDrivers = z.object({
  rockExcavationLikelihood: z.enum(["low", "moderate", "high", "unknown"]),
  rockNote: z.string().nullable(),
  aggregateHaulNote: z.string().nullable(),
  readyMixProximityNote: z.string().nullable(),
  spoilDisposalNote: z.string().nullable(),
  permitFeeNote: z.string().nullable(),
  prevailingWageExposure: z.string().nullable(),
  unionJurisdictionNote: z.string().nullable(),
  seasonalPremiumNote: z.string().nullable(),
  narrative: z.string().min(200),
});

/* ------------------------------------------------------- compliance (new) */

export const Compliance = z.object({
  stateContractorLicensing: z.string().min(20),
  additionalRegistrations: z.array(z.string()),
  insuranceBondingNorms: z.string().nullable(),
  cssQualificationsNote: z.string().nullable(),
});

/* ---------------------------------------------------------- hazards (new) */

export const Hazards = z.object({
  dominant: z.array(
    z.enum(["tornado","ice storm","hurricane","flood","wildfire","extreme heat","extreme cold","hail","high wind"])
  ).min(1),
  designImplications: z.string().min(120),
  restorationCapabilityNote: z.string().nullable(),
});

/* --------------------------------------------------- marketActivity (new) */

export const MarketActivity = z.object({
  items: z.array(
    z.object({
      headline: z.string(),
      detail: z.string(),
      category: z.enum(["broadband program","data center","carrier program","municipal/utility fiber","transportation"]),
      sourceUrl: z.string().url(),
      asOf: z.string(),
    })
  ),
  lastReviewed: z.string().nullable(),
});

/* --------------------------------------------------------- segments (new) */
/* fiber / wireless / edge — the three query clusters */

export const Segment = z.object({
  primaryScopeIds: z.array(z.string()).min(3).max(8),
  secondaryScopeIds: z.array(z.string()),
  narrative: z.string().min(400), // 120-180 words, must name a real local specific
  localSpecificsReferenced: z.array(z.string()).min(1),
});

export const Segments = z.object({
  fiber: Segment,
  wireless: Segment,
  edge: Segment,
});

/* -------------------------------------------------------------- operations */

/**
 * CSS operates TWO staffed yards: Cedar Rapids, Iowa and Dallas-Fort Worth, Texas.
 * Each market is assigned to its nearer yard. Because nearestBase takes only two
 * values across 65 pages, mobilization copy MUST be built from band, route,
 * staging and local supply — never templated off the base city.
 * See CONTENT_MODULES.md §O.
 */
export const YARDS = {
  "cedar-rapids": { city: "Cedar Rapids", state: "Iowa", stateSlug: "iowa" },
  dallas: { city: "Dallas", state: "Texas", stateSlug: "texas" },
} as const;
export const MobilizationBand = z.enum(["A", "B", "C"]);
// A = regional, <=350 road mi   B = extended, 350-700   C = deployment, 700+

export const Operations = z.object({
  nearestBase: z.object({
    city: z.enum(["Cedar Rapids", "Dallas"]),
    state: z.enum(["Iowa", "Texas"]),
    roadMiles: z.number(),          // real routing, not straight-line
    driveTimeHours: z.number(),     // real routing, not straight-line
    routeVerified: z.boolean(),     // false until checked against actual routing
    /** Gates LocalBusiness schema. True on the Cedar Rapids page only. */
    isStaffedFacility: z.boolean(),
  }),
  mobilizationBand: MobilizationBand,
  serviceRadiusMiles: z.number().nullable(),
  countiesServed: z.array(z.string()).min(1),
  /** Where crews and equipment stage. Required for bands B and C. */
  stagingApproach: z.string().nullable(),
  /** Ready-mix, aggregate, precast, rental. Required for bands B and C —
   *  hauling from Iowa is not viable and buyers know it. */
  localSupplyApproach: z.string().nullable(),
  /** Scope split between self-performed and locally subcontracted. */
  selfPerformVsSubNote: z.string().nullable(),
  /** Must be written to the band. No response-time claims uncleared by ops. */
  mobilizationNote: z.string().min(200),
  emergencyResponseNote: z.string().nullable(),
});

/* ------------------------------------------------------------------- proof */

export const Project = z.object({
  title: z.string(),
  segment: z.enum(["fiber", "wireless", "edge", "mixed"]),
  scopeTags: z.array(z.string()).min(1),
  county: z.string(),
  year: z.number(),
  description: z.string().min(250),
  anonymized: z.boolean(),
  photos: z.array(
    z.object({ src: z.string(), alt: z.string().min(20), caption: z.string().nullable() })
  ),
});

/* --------------------------------------------------------------------- faq */

export const Faq = z.object({
  question: z.string().min(15),
  answer: z.string().min(150).max(700),
  segment: z.enum(["fiber", "wireless", "edge", "general"]),
});

/* ---------------------------------------------------------------- metadata */

export const Metadata = z.object({
  title: z.string().min(30).max(65),
  description: z.string().min(120).max(165),
  h1: z.string().min(20),
  intro: z.string().min(450), // 90-140 words, authored per city
  ogImage: z.string().nullable(),
});

/* ------------------------------------------------------------------- root */

export const LocationSchema = z.object({
  identity: Identity,
  metadata: Metadata,
  designCriteria: DesignCriteria,
  geotech: Geotech,
  regulatory: Regulatory,
  utilities: Utilities,
  logistics: Logistics,
  environmental: Environmental,
  seasonality: Seasonality,
  costDrivers: CostDrivers,
  compliance: Compliance,
  hazards: Hazards,
  marketActivity: MarketActivity,
  segments: Segments,
  operations: Operations,
  projects: z.array(Project),
  faq: z.array(Faq).min(8).max(14),
  decisionGuidance: z.object({
    heading: z.string().min(15),
    body: z.string().min(700), // 150-250 words
  }),
  sources: z.array(Source).min(5),

  /** Human sign-off. Claude Code must never set this. */
  _verified: z.boolean(),
  _verifiedBy: z.string().nullable(),
  _verifiedOn: z.string().nullable(),

  /** Fields attempted and not sourced. Honest gaps beat invented values. */
  _gaps: z.array(z.object({ field: z.string(), attempted: z.string() })),
});

export type Location = z.infer<typeof LocationSchema>;

/* ------------------------------------------------- tier-dependent publish */

const TIER_MINIMUMS = {
  1: { words: 1800, images: 4, projects: 1 },
  2: { words: 1400, images: 3, projects: 1 },
  3: { words: 1100, images: 2, projects: 0 },
} as const;

export function publishGate(loc: Location, renderedWordCount: number) {
  const min = TIER_MINIMUMS[loc.identity.tier];
  const images = loc.projects.flatMap((p) => p.photos).length;
  const failures: string[] = [];

  if (!loc._verified) failures.push("_verified is false — requires human sign-off");
  if (renderedWordCount < min.words)
    failures.push(`word count ${renderedWordCount} < ${min.words} for tier ${loc.identity.tier}`);
  if (images < min.images) failures.push(`images ${images} < ${min.images}`);
  if (loc.projects.length < min.projects) failures.push("missing required project proof");
  if (loc._gaps.length > 0)
    failures.push(`unresolved gaps: ${loc._gaps.map((g) => g.field).join(", ")}`);

  // Single-yard operating model rules — see PLAN §4
  const ops = loc.operations;
  if (!ops.nearestBase.routeVerified)
    failures.push("nearestBase distance/drive time still a straight-line estimate");
  if (ops.mobilizationBand !== "A") {
    if (!ops.stagingApproach) failures.push(`band ${ops.mobilizationBand} requires stagingApproach`);
    if (!ops.localSupplyApproach) failures.push(`band ${ops.mobilizationBand} requires localSupplyApproach`);
  }
  const isYardPage =
    loc.identity.slug in YARDS &&
    YARDS[loc.identity.slug as keyof typeof YARDS].stateSlug === loc.identity.stateSlug;
  if (ops.nearestBase.isStaffedFacility !== isYardPage)
    failures.push("isStaffedFacility is true only on the Cedar Rapids and Dallas pages");

  return { pass: failures.length === 0, failures };
}
