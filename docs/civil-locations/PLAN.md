# Cell Site Solutions — Civil Services Locations Program
## Build & SEO/GEO Plan — v2 (pre-launch build)

**Site:** www.cellsitesolutions.com · Next.js App Router on Vercel · **pre-launch draft deployment**
**Scope:** 65 city pages + 9 state hubs + 1 national index, plus supporting content required to launch them safely
**Positioning:** civil construction and site services for telecom **fiber, wireless, and edge** infrastructure — shelters, huts, cabinets, compounds, and enclosures, existing and new-build

**Changed in v2:** locations added to the Civil Services dropdown (§7); staged rollout replaced with a pre-launch build-all approach plus a launch ratio requirement (§12); content module set substantially expanded — see `CONTENT_MODULES.md`; uniqueness floor raised to 75%; technology-segment structure (fiber/wireless/edge) added throughout.

---

## 1. How to use this repo

| File | Purpose |
|---|---|
| `CLAUDE.md` | Session rules. Read first. |
| `PLAN.md` | This file — strategy and architecture |
| `CONTENT_MODULES.md` | Every page module and the writing rules |
| `TASKS.md` | Ordered build checklist |
| `data/_schema.ts` | The data contract |
| `data/locations.seed.json` | All 65 markets, seeded, research pending |
| `data/locations/missouri/kansas-city.json` | Gold-standard fixture |

Build order is `TASKS.md`. Do not start authoring content before the audit scripts exist — the gates must be in place before there is anything to gate.

---

## 1a. Canonical program facts

Single source for the numbers that appear throughout. If anything elsewhere disagrees with this block, this block wins.

| Fact | Value |
|---|---|
| Markets | 65 city pages + 9 state hubs + 1 national index |
| States | IA, NE, MO, KS, WI, IL, OK, TX, AL |
| Staffed yards | **2** — Cedar Rapids, Iowa · Dallas–Fort Worth, Texas |
| Yard assignment | Cedar Rapids 38 markets · Dallas 27 |
| Mobilization bands | 48 Band A · 15 Band B · 2 Band C |
| Band C markets | Montgomery and Auburn, Alabama only |
| Tiers | 16 Tier 1 · 28 Tier 2 · 21 Tier 3 |
| Pages emitting `LocalBusiness` | 2 — Cedar Rapids and Dallas only |
| Google Business Profiles | 2 — Cedar Rapids and DFW |
| Uniqueness floor | 75% page-unique body content |
| Similarity gate | pairwise 5-gram Jaccard < 25%, enforced at build |
| Word floors | Tier 1: 1,800 · Tier 2: 1,400 · Tier 3: 1,100 |
| Minimum sources per page | 5, dated and linked |
| Nav entry point | Service Locations, last item in the Civil Services dropdown |
| Footer | 9 state links + "View all 65" sitewide; expanded variant inside `/civil-services/**` |

Open items requiring a human decision before the relevant pages are written:

1. **Replace the DFW placeholder coordinates** with the actual yard address — it shifts the close-call boundary (§4.3).
2. **Verify routing for Joplin, Springfield MO, Salina and Huntsville** — each may reassign to the other yard (§4.3).
3. **Decide the Alabama approach** before that state is built (§4.2).
4. **Confirm whether a live site is being replaced** — if so, a 301 redirect map is required before cutover (§12).

---

## 2. Business objective

CSS performs the full civil scope around telecom shelters, fiber huts, wireless compounds, and edge enclosures. The market underestimates that breadth. These pages exist to:

- Capture geo-qualified, high-intent search across three distinct buyer segments — fiber, wireless, and edge
- Make CSS the answerable entity in AI-generated responses ("who does fiber hut foundation work in Nebraska?")
- Give sales a credible, linkable local asset for RFPs and carrier vendor onboarding
- Support field recruiting and subcontractor sourcing per market

Conversions: request a site walk, download the market spec sheet, call the regional ops line.

---

## 3. Anti-penalty architecture

### 3.1 The two policies that govern this program

| Policy | Trigger | Mitigation |
|---|---|---|
| **Doorway abuse** | Pages targeted at cities that funnel to one destination; substantially similar pages outside a clearly defined, browseable hierarchy | Three-level crawlable hierarchy, a main-nav entry point (§7), self-sufficient local content and conversion path per page, no funneling redirects |
| **Scaled content abuse** | Volume of pages generated primarily to rank, with little added value | Pages are **data-assembled, not prose-generated**. Verified local data first; AI writes connective prose around it. Enforced word, source, and similarity floors. |

Both policies now apply to AI Overviews and AI Mode as well as classic results, so there is no separate AI-visibility strategy that routes around quality.

### 3.2 Uniqueness budget (revised)

| Content class | Share | Uniqueness |
|---|---|---|
| Local engineering, regulatory, logistical and seasonal data | ~45% | 100% |
| Technology-segment narrative (fiber / wireless / edge) | ~20% | 100% |
| Local proof — projects, photos, counties, crew base | ~15% | 100% |
| Locally-weighted scope descriptions | ~10% | 60–80% |
| Shared boilerplate — company, safety, certs, CTA | ~10% | 0% (fine) |

**Hard floor: 75% of rendered body content page-unique. Pairwise 5-gram similarity under 25%, enforced at build.**

### 3.3 Rules that never bend

1. No city-name-swap templating.
2. No fabricated local facts. Unknown means omitted, not guessed.
3. No fake addresses, no fake Google Business Profiles, no `LocalBusiness` schema without a real staffed location.
4. No fabricated projects or testimonials.
5. No hidden text, no keyword-stuffed county lists.
6. No thin pages — below the Tier floor, the market rolls into a regional page instead of getting a URL.
7. No `noindex` as a safety hatch. Publish-worthy or deleted.

---

## 4. Operating model — two yards

**CSS operates two staffed facilities: Cedar Rapids, Iowa and Dallas–Fort Worth, Texas.** Each market is assigned to its nearer yard. Markets beyond regional reach of either are served on a traveling-crew basis.

### 4.1 Coverage

| Band | Markets | Distance from assigned yard | Model |
|---|---|---|---|
| **A — Regional** | 48 | ≤ 350 road miles | Day-trip and short-stay crews. Fastest response. |
| **B — Extended** | 15 | 350–700 road miles | Project-based deployment with staged crews. |
| **C — Deployment** | 2 | 700+ road miles | Traveling-crew model with local staging and supply. Montgomery and Auburn, Alabama only. |

Assignment: **Cedar Rapids serves 38 markets** — all of Iowa, Wisconsin, Illinois and Nebraska, most of Missouri and Kansas, plus Huntsville. **Dallas serves 27** — all of Texas and Oklahoma, Wichita, Joplin, and five Alabama markets.

The two yards cover the footprint well. Dallas puts every Oklahoma market inside 300 miles and every major Texas metro inside 300 miles except the far west and south, which sit comfortably in Band B. Cedar Rapids covers the entire upper Midwest at Band A.

### 4.2 Where the footprint is actually thin

Not Texas — that resolved. **Alabama is now the weak spot.** All six markets are Band B or C, split awkwardly between two distant yards: five assigned to Dallas at 630–780 miles, and Huntsville nominally to Cedar Rapids at 674 miles. No Alabama market is within regional reach of anything.

That is a defensible position for a program-deployment offering and an implausible one for a local-contractor pitch, so the Alabama pages must be written accordingly — capability, multi-site program delivery and single-source accountability, never response time. Three options worth a conversation:

1. **Keep all six, write them as Band B/C deployment pages.** Lowest cost, honest, and appropriate if Alabama work is genuinely program-based. **This is the default assumption in the plan.**
2. **Trim to Huntsville, Birmingham and Mobile** at launch and expand once there is real demand signal. Reduces the count to 62 and concentrates effort.
3. **Flag Alabama as the next yard decision.** A Birmingham or Huntsville facility would put all six markets plus much of the Southeast in Band A. Only worth it if the pipeline supports it.

### 4.3 Close calls that need real routing

Four markets sit within 60 miles of assigning to the other yard. Straight-line estimates may not survive real road routing, and the assignment changes which yard's crews and supply chain the page describes. **Verify these against actual routing before writing them:**

| Market | Assigned | Est. mi | Other yard |
|---|---|---|---|
| Joplin, MO | Dallas | 383 | Cedar Rapids ~437 |
| Springfield, MO | Cedar Rapids | 402 | Dallas ~407 |
| Salina, KS | Cedar Rapids | 449 | Dallas ~452 |
| Huntsville, AL | Cedar Rapids | 674 | Dallas ~677 |

Joplin in particular is suspect: straight-line favors Dallas, but real routing runs through Kansas City, which may favor Cedar Rapids.

### 4.4 Duplicate-content risk

With two bases, `nearestBase` takes one of two values across 65 pages. Templated off that field, the mobilization module produces 38 near-identical paragraphs and 27 more — concentrated in the one module that reads as a sales claim, which is the worst place for boilerplate.

The mobilization module must be built from band, route, staging plan and local supply, never from the base city. See `CONTENT_MODULES.md` §O. `scripts/uniqueness-audit.ts` catches violations, but catching them late is expensive — check after every state.

### 4.5 What this means for local search

Two results surfaces, two strategies.

**Local pack / map results** are driven largely by proximity to a verified physical location. CSS can compete in the map pack around **Cedar Rapids and Dallas–Fort Worth**. The DFW yard is genuinely valuable here — it puts CSS in contention for map results across one of the largest metros in the country, and the Dallas, Fort Worth, Arlington, Irving and Plano pages all sit within that radius. Cedar Rapids covers eastern Iowa. Everywhere else, no.

**Classic organic and AI-answer results** carry no proximity constraint and are winnable anywhere on the strength of the page. This is also where the buyers are — carrier construction managers, tower company site acquisition, turf vendor procurement and hyperscale GCs are not sourcing a civil subcontractor from the map pack.

**So: two fully optimized Google Business Profiles, Cedar Rapids and DFW, and compete organically in the other 63.**

---

## 5. Location data model

Full field-level contract lives in `data/_schema.ts`. Groups:

| Group | Contents |
|---|---|
| `identity` | slug, city, state, counties, MSA, tier, lat/long, elevation, interstates |
| `designCriteria` | ASCE 7 edition + ultimate wind speed, exposure, ground snow, TIA-222 revision + radial ice, seismic Ss/S1/site class/SDC, frost depth + code citation, design temps |
| `geotech` | geology, soil types, bearing range, expansive risk + PI note, depth to bedrock, karst risk, seasonal high groundwater, soil corrosivity, foundation approach narrative |
| `regulatory` | building AHJs + portals + review days, adopted code edition, wireless facility ordinance, ROW authority, state DOT district, 811 center, stormwater authority, NPDES trigger, floodplain administrator |
| `utilities` | electric providers + type, ILEC, notable fiber providers, data center campuses, long-haul routes, IX presence |
| `logistics` | **new** — seasonal load restrictions, OS/OW permit authority, bridge constraints, railroads, urban ROW requirements |
| `environmental` | **new** — tree clearing windows, SHPO, wetlands authority + USACE district, T&E species, floodplain prevalence |
| `seasonality` | **new** — 12-month buildability calendar |
| `costDrivers` | **new** — rock likelihood, haul distances, spoil, permit fees, prevailing wage exposure, union jurisdiction, seasonal premium |
| `compliance` | **new** — state contractor licensing, registrations, insurance/bonding norms |
| `hazards` | **new** — dominant hazards, design implications, restoration capability |
| `marketActivity` | **new** — broadband program activity, announced campuses, carrier programs, with sources |
| `segments` | **new** — fiber / wireless / edge scope weighting + narrative per segment |
| `operations` | nearest CSS base + drive time, service radius, counties served, mobilization, emergency response |
| `proof` | projects, photos, crew quote |
| `faq` | 8–12 locally specific Q&A |
| `decisionGuidance` | **new** — one engineering-judgment section |
| `metadata` | authored title, description, OG |
| `sources` | min 5, labeled, linked, dated |
| `_verified` | human sign-off boolean — blocks publish when false |
| `_gaps` | fields attempted and not sourced |

See `CONTENT_MODULES.md` for what each renders as and how to write it.

---

## 6. Information architecture

```
/civil-services/                                  pillar (main nav)
/civil-services/locations/                        national index — NOW IN MAIN NAV DROPDOWN
/civil-services/locations/{state}/                state hub  (9)
/civil-services/locations/{state}/{city}/         city page (65)
```

### 6.1 State hub content (1,200–1,500 words, unique)
Statewide code adoption and amendments · state DOT ROW process · state 811 center · statewide design-criteria variation table (wind and frost ranges across the state) · statewide seasonal load restriction regime · SHPO and environmental review process · state contractor licensing · statewide telecom landscape including broadband program activity and data center corridors · grid of the state's cities with a one-line differentiator each · counties served · 5-question state FAQ.

### 6.2 Internal linking
- Every city page links up to its state hub and to `/civil-services/`
- 3–5 computed nearest neighbours (haversine from location JSON, never hand-coded)
- 3–4 deep service pages, selected by that city's segment weighting
- Blog and resource content links down into city pages contextually
- No sitewide 65-link block (§8)

### 6.3 Sitemaps
`app/sitemap.ts` emitting a segmented index: `sitemap-core`, `sitemap-services`, `sitemap-locations`, `sitemap-resources`. Segmentation is what lets you diagnose the locations cluster independently in Search Console. Real `lastmod`, not build time.

---

## 7. Navigation — Civil Services dropdown

Approved change. Add `/civil-services/locations/` as an item in the Civil Services dropdown.

```
CIVIL SERVICES ▾
├─ Civil Services Overview          /civil-services/
├─ Site Development & Earthwork     /civil-services/site-development/
├─ Concrete & Foundations           /civil-services/foundations/
├─ Underground & Duct Bank          /civil-services/underground-duct-bank/
├─ Directional Boring & HDD         /civil-services/directional-boring/
├─ Grounding & Electrical Civil     /civil-services/grounding/
├─ Compound & Security              /civil-services/compound-security/
├─ Steel, Ice Bridge & Mounting     /civil-services/structural-mounting/
├─ ──────────────────────────
└─ Service Locations                /civil-services/locations/     ← new
```

Placement: last item, visually separated by a divider. It reads as a wayfinding item rather than a service, which is what it is. Implemented in `config/navigation.ts` so nav and footer stay in sync from one source.

This single link is what removes the structural orphan signal. City pages stay out of the menu, as intended.

---

## 8. Footer — "CIVIL SERVICES LOCATIONS"

Compact variant, sitewide:

```
CIVIL SERVICES LOCATIONS
Alabama   Illinois   Iowa    Kansas    Missouri
Nebraska  Oklahoma   Texas   Wisconsin
                 View all 65 service locations →
```

Ten links. State hubs carry the city links; every city page is three clicks from home.

Expanded variant, rendered only within `/civil-services/**`: all 9 states with their cities in a four-column server-rendered block. `<Footer variant="compact" | "expanded" />`, selected by route segment.

Do not put 65 links in the sitewide footer — it dilutes internal link equity across the whole site and adds an identical boilerplate block that works directly against the §3.2 uniqueness budget.

Markup: real `<nav aria-labelledby>`, real `<h2>`, real `<ul>`. Links present in server-rendered HTML, never JS-gated.

---

## 9. Structured data

Per city page:

- **`Service`** — `serviceType`, `provider` → `@id` of the Organization node, `areaServed` as City + AdministrativeArea nodes for real counties, `hasOfferCatalog` listing **that city's** weighted scopes
- **`Organization`** — one canonical node at `https://www.cellsitesolutions.com/#organization`, referenced not duplicated, with `sameAs` for LinkedIn, GBP, industry associations
- **`BreadcrumbList`** — Home → Civil Services → Service Locations → State → City
- **`FAQPage`** — only for the genuinely local FAQ
- **`ImageObject`** with `contentLocation` on real project photos

**`LocalBusiness` emits on the Cedar Rapids and Dallas pages only.** Those are the two staffed facilities. Every other page uses `Service` with `areaServed` and carries no address, no `geo`, and no `openingHours`. Gate this on `operations.nearestBase.isStaffedFacility`, which the schema allows to be true only on those two pages — not on a hand-maintained list. See §4.5.

---

## 10. Supporting content required before launch

The 65 pages cannot carry the site alone. A new domain launching with 65 location pages and little else is the exact ratio that draws scrutiny. Required at launch:

| Asset | Count | Why |
|---|---|---|
| Deep service pages | 8–12 | Location pages need real link targets. A city page whose only outbound link is a generic overview page looks like a funnel. |
| **Telecom Site Civil Design Criteria Reference** | 1 | Public, filterable table of wind, ice, frost, seismic, soil and 811 center across all 65 markets, with sources. Highest link- and citation-earning asset in the program. Also the natural hub linking to all 65 pages. |
| State permitting guides | 9 | "Fiber Hut Permitting in Texas: ROW, Floodplain and TxDOT Requirements." Ranks for the research-phase queries that precede vendor selection. |
| Glossary | 1 hub, 30–40 terms | Definitional content is heavily cited by AI systems and anchors topical authority. |
| Project portfolio | 15–20 | Real proof, feeds the location pages |
| About / leadership / safety / certifications | 4–5 | Entity resolution and E-E-A-T |

**Target ratio at launch: no more than ~55% of indexable URLs are location pages.** 65 location pages against roughly 45–55 substantive non-location pages is a healthy site. 65 against 8 is not.

---

## 11. AI / LLM answer optimization

- **Answer-first structure.** Every H2 phrased as or immediately answering a real question; first two sentences self-contained and quotable.
- **Real `<table>` markup** for design criteria, permitting, seasonal calendar, and load restrictions. Tables extract disproportionately well.
- **Quantified declaratives.** "Spring load restrictions in {County} typically run early March to mid-May" beats "restrictions may apply."
- **Entity clarity.** Consistent NAP sitewide and across LinkedIn, GBP, Crunchbase, NATE/WIA and state association listings. An `/about/` page that states unambiguously what CSS is, where it works, and what it does.
- **Citation-worthy originals.** The Design Criteria Reference and the per-market decision-guidance sections are the two things most likely to get cited, because they contain judgment and data that do not otherwise exist on the open web.
- **`/llms.txt`** at root pointing to the index, the reference, and the glossary. Cheap, not a ranking factor.
- **Measure it.** Monthly manual panel of 20 seed prompts across ChatGPT, Claude, Perplexity, Gemini and Google AI Mode. Log appearance and cited source.

---

## 12. Build and launch approach (revised for pre-launch)

v1 staged publishing across 24 weeks. That advice applies to an **established** site adding a cluster. This site is pre-launch, so it changes:

**Build all 65 into the pre-production deployment now.** A site should launch with complete, coherent architecture — partial navigation and dead-end hubs are worse than a full cluster.

What replaces staged publishing:

1. **Quality gate per page, not per phase.** Every one of the 65 passes §14 before the site goes to production. The gate is the control, not the calendar.
2. **Ratio requirement.** §10 supporting content ships in the same launch.
3. **Sequenced discovery, not sequenced publishing.** At production cutover, submit `sitemap-core` and `sitemap-services` first. Add `sitemap-locations` 2–3 weeks later once the core site is indexed and the domain has a quality baseline. All pages are live and crawlable throughout — this only shapes discovery order, and it costs nothing.
4. **Tiered depth.** Tier 1 markets launch with full proof and photography. Tier 3 launch complete but leaner. Depth arrives through the §13.4 project intake loop.
5. **Preview hygiene.** `X-Robots-Tag: noindex` on every Vercel preview deployment until production cutover. Verify before shipping — an indexed preview domain creates a duplicate of the entire site.

**If www.cellsitesolutions.com currently has a live site being replaced,** this is a migration and needs a full URL inventory and 301 redirect map before cutover. Flag this if it applies — losing existing equity would cost more than this entire program gains.

---

## 13. Strategic initiatives

### 13.1 Local entity foundation
Two Google Business Profiles — Cedar Rapids and DFW — both fully built out with categories, full service list, real photos, posts and Q&A. A limit of roughly 20 service areas applies per profile; spend them on that yard's Band A markets, where proximity still gives the listing some reach.

The DFW profile is the higher-value of the two by a wide margin: it puts CSS in map-pack contention across the Metroplex, and the Dallas, Fort Worth, Arlington, Irving and Plano pages all sit inside that radius. Treat it as a priority asset, not a duplicate of the Iowa listing — different photos, different posts, different service emphasis reflecting what that yard actually does.

Mirror both to Bing Places and Apple Business Connect, which feed AI assistants. NAP consistency audit across every citation before launch.

**Alabama is the next yard question**, not Texas. See §4.2.

### 13.2 Authority content
Design Criteria Reference · state permitting guides · scope-specific deep pages · honest cost-driver explainers · glossary. See §10.

### 13.3 Links that are actually attainable in this industry
- **Shelter, hut and enclosure manufacturers** — installer and partner directories. Highest value, most attainable.
- **Carrier and turf vendor** approved-supplier pages
- **State broadband offices and program subgrantees** — active, well-funded, link-rich right now
- **NATE, WIA, ISPA, state telecom and broadband associations** — membership plus speaking
- **Trade press** — Inside Towers, Wireless Estimator, Fierce Network, Light Reading. Contributed technical articles, not press releases.
- **Economic development authorities** in data center markets — Council Bluffs, Sarpy County, Mount Pleasant, Pryor, Joliet
- **University civil engineering programs** — the Design Criteria Reference is exactly what gets cited from `.edu`

### 13.4 The project intake loop — *the thing that keeps this alive*
Every completed job feeds a photo, scope, and county back into the location JSON via a simple PM intake form. Without this, 65 pages go stale in a year. With it, the cluster compounds. Build the form in Phase 1, not later.

### 13.5 Sales and ops integration
Sales uses the city page URL in every proposal and RFP response. Recruiting posts link to the relevant city page. Both drive real engagement signals that no content strategy can manufacture.

### 13.6 Paid pairing
Geo-targeted paid search on Tier 1 markets pointed at the city pages for the first 90 days post-launch. Validates commercial intent per market with real data and tells you which Tier 3 markets deserve investment.

### 13.7 Underweighted channels
Reddit, industry forums and YouTube are heavily weighted in AI answer generation. Genuine presence in r/telecom and r/fiberoptics, plus tower-industry YouTube — a foundation pour, an HDD run under a state highway, a compound build timelapse — is disproportionately valuable for AI visibility and costs time rather than money.

---

## 14. Pre-publish QA gate — every page, no exceptions

- [ ] All required schema fields populated; Zod validation passes
- [ ] `_verified: true` set by a named human
- [ ] Every numeric engineering value spot-checked by a licensed engineer or traced to the cited standard
- [ ] ≥ 5 cited sources, all returning 200, all dated
- [ ] AHJ, 811, DOT and utility links tested and current
- [ ] Rendered body meets Tier floor (1,800 / 1,400 / 1,100 words)
- [ ] Pairwise similarity < 25% against all other location pages
- [ ] Title and meta description unique, locally specific, correct length
- [ ] Tier-appropriate count of unique images with descriptive local alt text
- [ ] ≥ 1 real project reference (Tier 1 and 2)
- [ ] All three technology-segment blocks present with a verifiable local specific in each
- [ ] Seasonal calendar, load restrictions, and environmental windows populated
- [ ] 8+ locally specific FAQ items
- [ ] Schema validates; no `LocalBusiness` without a real facility
- [ ] ≥ 6 outbound internal links; up-link to state hub present
- [ ] Breadcrumbs render and match URL structure
- [ ] Form pre-fills location and routes to the correct regional inbox
- [ ] Lighthouse mobile: Performance ≥ 90, Accessibility ≥ 95, SEO 100
- [ ] **Human read-through: would a carrier construction manager in this market learn something here? If no, do not publish.**

---

## 15. Measurement

| Metric | Source | Target |
|---|---|---|
| Location cluster indexation | GSC segmented sitemap | ≥ 90% within 45 days of sitemap submission |
| Non-brand geo query impressions | GSC | Primary leading indicator |
| Segment query coverage (fiber / wireless / edge) | GSC | Impressions in all three per Tier 1 market by day 120 |
| Position for `{city} + {scope}` | GSC | Top 20 by day 90, top 10 by day 180 for Tier 1 |
| Form submissions attributed to location pages | Analytics + hidden field | The actual KPI |
| AI answer appearance rate | Manual monthly panel | ≥ 25% of seed prompts by month 6 |
| Pairwise similarity | `pnpm audit:uniqueness` | < 25%, enforced at build |
| Core Web Vitals | Vercel Speed Insights | All green |

Set a Search Console alert on the locations sitemap specifically. If the cluster gets devalued you want to see it in segment data, not in a sitewide traffic drop.

---

## Appendix — yard assignment and mobilization band

Assigned to the nearer of the two yards. **Distances are straight-line estimates and must be replaced with real routing before publish** (`routeVerified`). Rows marked ⚠ sit within 60 miles of assigning to the other yard — verify these first (§4.3).

| Market | State | Tier | Yard | Est. mi | Est. hrs | Band |
|---|---|---|---|---|---|---|
| Cedar Rapids — **yard** | Iowa | 1 | Cedar Rapids | 0 | 0.0 | A |
| Iowa City | Iowa | 3 | Cedar Rapids | 27 | 0.5 | A |
| Davenport | Iowa | 2 | Cedar Rapids | 76 | 1.3 | A |
| Des Moines | Iowa | 1 | Cedar Rapids | 123 | 2.1 | A |
| West Des Moines | Iowa | 2 | Cedar Rapids | 129 | 2.2 | A |
| Rockford | Illinois | 2 | Cedar Rapids | 157 | 2.7 | A |
| Madison | Wisconsin | 2 | Cedar Rapids | 163 | 2.8 | A |
| Peoria | Illinois | 3 | Cedar Rapids | 165 | 2.8 | A |
| Aurora | Illinois | 2 | Cedar Rapids | 204 | 3.5 | A |
| Elgin | Illinois | 3 | Cedar Rapids | 205 | 3.5 | A |
| Naperville | Illinois | 3 | Cedar Rapids | 214 | 3.7 | A |
| Springfield | Illinois | 2 | Cedar Rapids | 218 | 3.8 | A |
| Joliet | Illinois | 2 | Cedar Rapids | 221 | 3.8 | A |
| Eau Claire | Wisconsin | 3 | Cedar Rapids | 231 | 4.0 | A |
| Kenosha | Wisconsin | 2 | Cedar Rapids | 237 | 4.1 | A |
| Milwaukee | Wisconsin | 1 | Cedar Rapids | 242 | 4.2 | A |
| Racine | Wisconsin | 2 | Cedar Rapids | 242 | 4.2 | A |
| Chicago | Illinois | 1 | Cedar Rapids | 245 | 4.2 | A |
| Columbia | Missouri | 2 | Cedar Rapids | 250 | 4.3 | A |
| Council Bluffs | Iowa | 2 | Cedar Rapids | 262 | 4.5 | A |
| Omaha | Nebraska | 1 | Cedar Rapids | 267 | 4.6 | A |
| Appleton | Wisconsin | 3 | Cedar Rapids | 268 | 4.6 | A |
| Papillion | Nebraska | 2 | Cedar Rapids | 275 | 4.7 | A |
| St. Louis | Missouri | 1 | Cedar Rapids | 288 | 5.0 | A |
| Sioux City | Iowa | 3 | Cedar Rapids | 289 | 5.0 | A |
| Independence | Missouri | 3 | Cedar Rapids | 291 | 5.0 | A |
| Kansas City | Missouri | 1 | Cedar Rapids | 296 | 5.1 | A |
| Green Bay | Wisconsin | 2 | Cedar Rapids | 300 | 5.2 | A |
| Lee's Summit | Missouri | 3 | Cedar Rapids | 302 | 5.2 | A |
| Overland Park | Kansas | 2 | Cedar Rapids | 307 | 5.3 | A |
| Olathe | Kansas | 2 | Cedar Rapids | 319 | 5.5 | A |
| Lincoln | Nebraska | 2 | Cedar Rapids | 322 | 5.6 | A |
| Lawrence | Kansas | 3 | Cedar Rapids | 330 | 5.7 | A |
| Topeka | Kansas | 2 | Cedar Rapids | 345 | 5.9 | A |
| Springfield ⚠ | Missouri | 2 | Cedar Rapids | 402 | 6.9 | B |
| Grand Island | Nebraska | 3 | Cedar Rapids | 417 | 7.2 | B |
| Salina ⚠ | Kansas | 3 | Cedar Rapids | 449 | 7.7 | B |
| Huntsville ⚠ | Alabama | 1 | Cedar Rapids | 674 | 11.6 | B |
| Dallas — **yard** | Texas | 1 | Dallas | 0 | 0.0 | A |
| Irving | Texas | 3 | Dallas | 11 | 0.2 | A |
| Plano | Texas | 2 | Dallas | 21 | 0.4 | A |
| Arlington | Texas | 2 | Dallas | 22 | 0.4 | A |
| Fort Worth | Texas | 1 | Dallas | 37 | 0.6 | A |
| Lawton | Oklahoma | 3 | Dallas | 184 | 3.2 | A |
| Norman | Oklahoma | 2 | Dallas | 204 | 3.5 | A |
| Austin | Texas | 1 | Dallas | 215 | 3.7 | A |
| Oklahoma City | Oklahoma | 1 | Dallas | 225 | 3.9 | A |
| Edmond | Oklahoma | 3 | Dallas | 239 | 4.1 | A |
| Houston | Texas | 1 | Dallas | 265 | 4.6 | A |
| Broken Arrow | Oklahoma | 3 | Dallas | 276 | 4.8 | A |
| Tulsa | Oklahoma | 1 | Dallas | 281 | 4.8 | A |
| San Antonio | Texas | 1 | Dallas | 298 | 5.1 | A |
| Lubbock | Texas | 2 | Dallas | 351 | 6.1 | B |
| Midland | Texas | 2 | Dallas | 369 | 6.4 | B |
| Joplin ⚠ | Missouri | 3 | Dallas | 383 | 6.6 | B |
| Amarillo | Texas | 3 | Dallas | 394 | 6.8 | B |
| Wichita | Kansas | 1 | Dallas | 402 | 6.9 | B |
| Corpus Christi | Texas | 2 | Dallas | 408 | 7.0 | B |
| Laredo | Texas | 3 | Dallas | 468 | 8.1 | B |
| Mobile | Alabama | 2 | Dallas | 630 | 10.9 | B |
| Tuscaloosa | Alabama | 3 | Dallas | 632 | 10.9 | B |
| El Paso | Texas | 2 | Dallas | 673 | 11.6 | B |
| Birmingham | Alabama | 2 | Dallas | 684 | 11.8 | B |
| Montgomery | Alabama | 2 | Dallas | 722 | 12.4 | C |
| Auburn | Alabama | 3 | Dallas | 776 | 13.4 | C |

**48 Band A · 15 Band B · 2 Band C.** Cedar Rapids serves 38 markets, Dallas 27. The only Band C markets are Montgomery and Auburn, Alabama — see §4.2.
