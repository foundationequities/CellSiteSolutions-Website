# TASKS.md — build order

Work top to bottom. One task per commit. Do not skip ahead to content authoring — the quality gates must exist before there is anything to gate.

---

## Phase 1 — Infrastructure (no content yet)

- [ ] **1.1** Install deps: `zod`, `tsx`, `@types/node`. Add `pnpm validate`, `pnpm audit`, `pnpm audit:uniqueness` scripts; wire both into `prebuild`.
- [ ] **1.2** Drop in `data/_schema.ts` as provided. Do not loosen any constraint to make early data pass.
- [ ] **1.3** Drop in `lib/locations.ts`, `scripts/render-text.ts`, `scripts/validate-locations.ts`, `scripts/uniqueness-audit.ts`.
- [ ] **1.4** Write the four remaining audits: `word-count-audit.ts`, `link-audit.ts`, `metadata-audit.ts`, `source-audit.ts`. Specs in `PLAN.md` §14.
- [ ] **1.5** Write `lib/jsonld.ts` per `PLAN.md` §9. **`LocalBusiness` emits only when `operations.nearestBase.isStaffedFacility` is true and the base city matches the page city.**
- [ ] **1.6** Write `lib/states.ts` + `data/states/*.json` for the state hub content model.
- [ ] **1.7** Confirm `prebuild` fails the build on any audit failure. Verify by deliberately breaking one file. Remove no `|| true`.

## Phase 2 — Navigation and footer

- [ ] **2.1** Drop in `config/navigation.ts`. Refactor the existing header nav to read the Civil Services dropdown from it — no hardcoded duplicates.
- [ ] **2.2** Add **Service Locations → `/civil-services/locations/`** as the final dropdown item, with a divider above it. `PLAN.md` §7.
- [ ] **2.3** Drop in `components/layout/LocationsFooter.tsx`. Wire the variant selector to the route segment.
- [ ] **2.4** Style both footer variants using the **existing** site tokens. Do not introduce a new visual language.
- [ ] **2.5** Verify: state links resolve, "View all 65" resolves, expanded variant renders only under `/civil-services/**`, all links present in server-rendered HTML with JS disabled.
- [ ] **2.6** Keyboard nav and focus states on the dropdown. Screen reader check on the footer nav landmark.

## Phase 3 — Routes and template

- [ ] **3.1** Build the three route files. City page provided as a contract — build the components it imports.
- [ ] **3.2** Build every component in `components/locations/` against `CONTENT_MODULES.md`.
- [ ] **3.3** Data-heavy modules render as real `<table>` elements — design criteria, permitting, seasonal calendar, load restrictions, environmental windows. **Not grid divs.** This is an AI-extraction requirement, not a style preference. `PLAN.md` §11.
- [ ] **3.4** Build the national index at `/civil-services/locations/` — map, state grouping, all 65 with one-line differentiators.
- [ ] **3.5** Build the state hub template. Real content, 1,200–1,500 words, not a link list. `PLAN.md` §6.1.
- [ ] **3.6** Segmented sitemap index in `app/sitemap.ts`. Real `lastmod`.
- [ ] **3.7** Breadcrumbs, canonicals, OG tags.
- [ ] **3.8** Location form: pre-fills city, routes to the correct regional inbox, hidden source field for attribution.

## Phase 4 — Pilot content (3 markets)

- [ ] **4.1** Load `data/locations.seed.json`; split into `data/locations/{state}/{city}.json`.
- [ ] **4.2** Research and populate **Cedar Rapids IA** and **Dallas TX** completely. These are the two yard pages — structurally different from the other 63, since they describe a facility, carry an address, and emit `LocalBusiness`. Both become gold-standard fixtures. Use `RESEARCH.md`.
- [ ] **4.3** Populate **Green Bay WI** and **Corpus Christi TX**. Chosen as the footprint's extremes — deep-frost/snow at 300 miles from Cedar Rapids versus hurricane-coast at 408 miles from Dallas. If the template can express how different those markets are *and* how differently a Band A and a Band B mobilization section must read, it handles the other 61.
- [ ] **4.3b** Verify real routing for all four. Set `routeVerified: true` only after checking actual road distance; seed values are straight-line estimates.
- [ ] **4.4** Run all six audits. Report the top-10 similarity pairs.
- [ ] **4.5** Human review and `_verified` sign-off on all three. **You do not set this flag.**
- [ ] **4.6** Lighthouse on all three. Performance ≥ 90, Accessibility ≥ 95, SEO 100.

## Phase 5 — Remaining 62 markets

- [ ] **5.1** Work state by state, not tier by tier — regulatory research compounds within a state and this cuts research time substantially.
- [ ] **5.2** Order: Iowa → Wisconsin → Illinois → Nebraska → Missouri → Kansas → Texas → Oklahoma → Alabama. Band A markets establish the voice; Alabama is hardest and goes last.
- [ ] **5.2b** **Resolve the four close-call assignments first** (`PLAN.md` §4.3) — Joplin, Springfield MO, Salina and Huntsville. Real routing may reassign them to the other yard, which changes which crews and supply chain the page describes. Joplin is the most suspect.
- [ ] **5.2c** **Before starting Alabama, raise the coverage question with leadership** (`PLAN.md` §4.2). All six markets are Band B/C from both yards. Decide: keep all six as deployment pages, trim to three, or treat Alabama as the next yard decision.
- [ ] **5.3** Populate the state hub first, then that state's cities. Statewide facts sourced once, then referenced.
- [ ] **5.4** Run the uniqueness audit after **every** state, not at the end. Similarity problems are cheap to fix at 8 pages and expensive at 65.
- [ ] **5.4b** Check the mobilization module specifically each run. With only two base values across 65 pages it is the highest-similarity module in the program and it will fail first.
- [ ] **5.5** Anything unsourceable goes in `_gaps[]`. **Never invent a value to clear the schema.**
- [ ] **5.6** Report per state: pages complete, pages pending, gap list, worst similarity pair.

## Phase 6 — Supporting content (required before production)

`PLAN.md` §10. The cluster cannot launch alone.

- [ ] **6.1** 8–12 deep service pages — the link targets city pages need.
- [ ] **6.2** **Telecom Site Civil Design Criteria Reference** — public filterable table across all 65 markets. Highest link- and citation-earning asset in the program.
- [ ] **6.3** 9 state permitting guides.
- [ ] **6.4** Glossary hub, 30–40 terms.
- [ ] **6.5** Project portfolio, 15–20 entries.
- [ ] **6.6** About / leadership / safety / certifications.
- [ ] **6.7** Verify the ratio: location pages ≤ ~55% of indexable URLs.
- [ ] **6.8** Build out the Cedar Rapids Google Business Profile fully — categories, services, real photos, posts, Q&A. Spend the ~20 service-area slots on Band A markets only. Mirror to Bing Places and Apple Business Connect.

## Phase 7 — Launch readiness

- [ ] **7.1** Confirm `X-Robots-Tag: noindex` on all Vercel preview deployments. Verify with curl. An indexed preview domain duplicates the entire site.
- [ ] **7.2** Full audit run across all 65 + hubs + index.
- [ ] **7.3** Schema validation in Rich Results Test on a sample of 10.
- [ ] **7.4** Crawl the preview with Screaming Frog or equivalent: no orphans, no broken links, no duplicate titles or descriptions, correct canonicals.
- [ ] **7.5** **If a live site is being replaced:** full URL inventory and 301 redirect map. Do not cut over without it.
- [ ] **7.6** Production cutover. Submit `sitemap-core` and `sitemap-services` first; hold `sitemap-locations` 2–3 weeks. All pages live and crawlable throughout — this shapes discovery order only. `PLAN.md` §12.
- [ ] **7.7** GSC and Bing Webmaster Tools set up with segmented sitemaps and a cluster-specific alert.
- [ ] **7.8** Build the PM project intake form (`PLAN.md` §13.4). Without it the cluster goes stale within a year.

---

## Reporting format

After each phase, report:

1. What shipped
2. Audit results — including the top-10 similarity pairs verbatim
3. Every `_gaps[]` entry created, with what was tried
4. Anything in the schema that proved impractical, with a proposed change

Honest gap lists are the deliverable. Complete-looking files with invented values are worse than useless — they carry professional liability and they are what gets a cluster classified as scaled content.
