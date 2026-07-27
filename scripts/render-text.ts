import type { Location } from "../data/_schema";

/**
 * Flattens a location into the text a visitor actually reads.
 * Must stay in sync with the page template — if you add a rendered module,
 * add it here, or the audits will under-count.
 */
export function renderLocationText(l: Location): string {
  const parts: (string | null)[] = [
    l.metadata.h1,
    l.metadata.intro,
    l.segments.fiber.narrative,
    l.segments.wireless.narrative,
    l.segments.edge.narrative,
    l.geotech.dominantGeology,
    l.geotech.foundationApproachNarrative,
    l.geotech.expansiveSoilNote,
    l.geotech.soilCorrosivityNote,
    l.regulatory.permitTimelineNarrative,
    l.regulatory.wirelessFacilityOrdinanceNote,
    l.logistics.seasonalLoadRestrictions.note,
    l.logistics.bridgeOrClearanceConstraints,
    l.logistics.urbanRowRequirements,
    l.environmental.listedSpeciesNote,
    l.environmental.floodplainPrevalenceNote,
    l.seasonality.narrative,
    ...l.seasonality.calendar.map((m) => `${m.groundConditions} ${m.note ?? ""}`),
    l.costDrivers.narrative,
    l.compliance.stateContractorLicensing,
    l.hazards.designImplications,
    l.hazards.restorationCapabilityNote,
    ...l.marketActivity.items.map((i) => `${i.headline} ${i.detail}`),
    l.operations.mobilizationNote,
    l.operations.emergencyResponseNote,
    ...l.projects.map((p) => `${p.title} ${p.description}`),
    ...l.faq.map((f) => `${f.question} ${f.answer}`),
    l.decisionGuidance.heading,
    l.decisionGuidance.body,
  ];
  return parts.filter(Boolean).join(" ");
}
