# RESEARCH.md — where each field comes from

Every field is sourced from a named authority or left null. This file is the lookup. Record the actual URL used in `sources[]` with an access date.

**If a source cannot be found, the field goes in `_gaps[]`. It never gets estimated, interpolated from a neighboring city, or inferred from a similar climate.** Wrong engineering values on a public page are a professional liability exposure well before they are an SEO problem.

---

## Design criteria

| Field | Source |
|---|---|
| Ultimate wind speed, risk categories II and IV | ASCE 7 Hazard Tool, queried at the site's latitude/longitude. Record the ASCE 7 edition. |
| Ground snow load | ASCE 7 Hazard Tool; check for a local amendment, which frequently overrides |
| Seismic Ss, S1, site class, design category | USGS seismic design maps at lat/long. Site class is site-specific — publish the *typical* class for the area and say so. |
| Design radial ice | TIA-222 ice map for the county. Record the revision (H, I, etc.). |
| **Frost depth** | **Local building code or municipal amendment only.** Do not use a regional map, a contractor blog, or a neighboring jurisdiction. Cite the code section. This is the single most-cited number on the page and the one most likely to be wrong from a secondary source. |
| Design temperatures | ASHRAE climate design conditions or NOAA normals |

## Geotechnical

| Field | Source |
|---|---|
| Dominant geology, soil types | USDA NRCS Web Soil Survey; state geological survey publications |
| Bearing capacity range | State geological survey or published local geotechnical literature. Publish a *range* and state clearly that site-specific investigation governs. |
| Expansive soil risk | NRCS shrink-swell / linear extensibility data |
| Depth to bedrock | State geological survey; NRCS |
| Karst risk | State geological survey karst mapping |
| Seasonal high groundwater | NRCS water table data; state well logs |
| Soil corrosivity | NRCS corrosion of concrete / steel ratings — directly relevant to ground ring and rebar specification |

## Regulatory

| Field | Source |
|---|---|
| Building AHJ, portal, review time | Municipal and county building department websites. Call to confirm review times — published figures are frequently stale. |
| Adopted building code edition | AHJ code adoption ordinance. Editions vary widely between adjacent jurisdictions. |
| Wireless facility ordinance | Municipal code, telecommunications or zoning chapter |
| ROW permit authority | City engineering or public works; county highway department for unincorporated areas |
| State DOT district | State DOT district map and permits page |
| 811 center | State one-call center. Names differ by state — verify each rather than assuming. Record required advance notice in business days. |
| Stormwater authority, NPDES trigger | State environmental agency construction stormwater program |
| Floodplain administrator | Municipal or county floodplain management office |

## Logistics

| Field | Source |
|---|---|
| Seasonal load restrictions | State DOT seasonal weight restriction page **and** the county highway department. County-posted roads are frequently the binding constraint and are not on the state map. |
| OS/OW permit authority | State DOT oversize/overweight permitting office |
| Bridge and clearance constraints | State DOT bridge inventory / truck route maps |
| Railroads and crossing permits | Operating railroad's public utility or crossing permit process. Note typical timelines honestly — they are long. |
| Urban ROW requirements | Municipal ROW manual and traffic control standards |

## Environmental

| Field | Source |
|---|---|
| Tree clearing windows | USFWS field office guidance for the county. Restrictions tied to protected bat species apply across much of this footprint and vary by county — do not generalize by state. |
| SHPO | State historic preservation office |
| Wetlands authority, USACE district | State environmental agency; USACE district boundary map |
| Listed species | USFWS IPaC for the county |
| Floodplain prevalence | FEMA flood map service center |

## Utilities

| Field | Source |
|---|---|
| Electric providers and type | State utility commission service territory maps |
| New service lead time | The utility's own new-construction documentation, confirmed by phone. Published figures understate reality; note what CSS actually sees. |
| ILEC, fiber providers | FCC broadband data; provider coverage maps |
| Data center campuses | Company announcements; local economic development authority releases |

## Seasonality, cost, compliance

| Field | Source |
|---|---|
| 12-month calendar | NOAA climate normals for the station, combined with CSS field experience. The field-experience half is what makes this module worth reading — get it from ops, not from weather data alone. |
| Cost drivers | CSS estimating team. Not researchable externally. **Publish drivers, never unit pricing.** |
| Prevailing wage exposure | Davis-Bacon applies to federally funded work including broadband program builds; check state prevailing wage law separately |
| Contractor licensing | State licensing board. Requirements vary from full GC licensing above a dollar threshold to no statewide license at all. |

## Market activity

Public sources only, with the URL and an "as of" date: state broadband office award announcements, company press releases, local economic development authority news, DOT project pages. Re-review quarterly and update `marketActivity.lastReviewed`.

## Operations and mobilization

| Field | Source |
|---|---|
| Road miles, drive hours | Real routing from the market's **assigned yard** — Cedar Rapids or Dallas. Seed values are straight-line estimates. Four markets sit close to the boundary and may reassign under real routing (`PLAN.md` §4.3). Set `routeVerified` only after checking. |
| Staging approach (bands B and C) | CSS ops. Where crews and equipment stage for a deployment in that market. |
| Local supply approach (bands B and C) | CSS estimating and ops. Ready-mix, aggregate, precast and rental sourcing — hauling from the yard is not viable at that range and buyers know it. |
| Self-perform vs. subcontract split | CSS ops |
| Response commitments | **Ops sign-off required.** Never publish a response time that has not been cleared. |

## Proof

Projects, photos, crew quotes and testimonials come from CSS records only, via the PM intake. Never generated, never composited, never illustrative-stock-photo-with-a-plausible-caption.

---

## Sourcing discipline

- Prefer primary sources — the code, the agency, the standard — over aggregators, contractor blogs, and SEO content from competitors.
- Record the **specific** URL, not the site's homepage.
- Date every access. The page renders "last verified" publicly.
- Where a value is a range or a typical rather than a fixed figure, say so in the rendered text. Publishing "typical bearing capacity 2,000–3,000 psf, site-specific investigation governs" is both accurate and more useful than a false single number.
- When two sources disagree, cite the authoritative one and note the discrepancy rather than silently picking.
