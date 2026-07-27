# Location Page Content Modules

The complete module spec for every city page. Modules render in this order. Modules marked **[R]** must be populated to publish; **[O]** render only when data exists.

**The governing principle:** a page earns its right to exist by telling a carrier construction manager, tower company site acquisition lead, or GC project manager something they did not already know about building in that specific market. Every module below is designed to carry information that is genuinely different city to city. If a module ends up saying the same thing in Omaha and Mobile, that module is wrong for this program.

---

## Part 1 — Modules carried over from v1

| # | Module | Ref |
|---|---|---|
| 1 | H1 + local intro (90–140 words, authored per city) | PLAN §7 |
| 2 | Primary CTA bar | PLAN §7 |
| 3 | Local design criteria table (wind, ice, snow, seismic, frost) | PLAN §5.2 |
| 4 | Ground conditions & foundation approach | PLAN §5.3 |
| 5 | Permitting & jurisdiction guide | PLAN §5.4 |
| 6 | Local projects / proof | PLAN §5.7 |
| 7 | Coverage map + counties served | PLAN §5.6 |
| 8 | Crew base & mobilization | **rewritten — see §O below** |
| 9 | Nearby locations / related services | PLAN §6.2 |
| 10 | Trust block, conversion form, sources | PLAN §7 |

---

## Part 2 — New modules

These exist for two reasons at once: they add the substantive local value that keeps the cluster clear of scaled-content and doorway classification, and they map directly onto the fiber / wireless / edge query space where CSS wants to rank.

---

### A. Technology-segment scope blocks **[R]** — *highest priority addition*

The single biggest gap in v1: it treated every market as one generic "telecom civil" opportunity. Buyers don't search that way. Fiber, wireless, and edge are three distinct budgets, three distinct buyer personas, and three distinct query clusters.

Every page carries **three** clearly separated sub-sections, each with its own H2, its own scope list, and its own locally-weighted paragraph (120–180 words):

**A1. Fiber infrastructure civil** — `fiber hut pad`, `OSP duct bank`, `HDD / road bore`, `vault and handhole setting`, `regen and amplifier site civil`, `long-haul and metro route construction`, `service lateral to hut`, `restoration`
> Local weighting inputs: named long-haul corridors through the market, river/rail/highway crossings, state broadband program activity, ILEC and competitive fiber presence, rock vs. soil boring conditions.

**A2. Wireless site civil** — `macro compound construction`, `shelter and cabinet pads`, `generator and fuel containment pads`, `ice bridge and cable tray`, `ground ring and halo`, `access road and turnaround`, `compound fencing`, `small cell and DAS node civil`, `C-band / densification upgrade civil`
> Local weighting inputs: carrier market density, terrain and access difficulty, wind/ice design severity, municipal small-cell ordinance, tower owner concentration.

**A3. Edge & data center civil** — `edge enclosure and micro-DC pads`, `hyperscale campus civil support`, `utility yard and transformer pads`, `generator yards`, `campus duct bank and conduit`, `security compound and bollards`, `heavy haul access and crane pads`
> Local weighting inputs: named data center campuses and corridors in or near the market, utility capacity, industrial ROW, heavy-haul route availability.

**Writing rule:** each block must reference at least one real, verifiable local specific — a named corridor, campus, river crossing, ordinance, or utility. A block that could be pasted into another city's page has failed.

**Why this matters for ranking:** it triples the distinct query surface per page (`fiber hut contractor {city}`, `cell site civil contractor {city}`, `data center site work {city}`) without adding a single templated word, and it gives AI systems three clean, self-contained passages to extract instead of one blended one.

---

### B. Site conditions calendar **[R]**

A month-by-month buildability table for the market. Twelve rows, four columns: month, ground conditions, concrete/earthwork feasibility, notes.

This is one of the most genuinely differentiating modules available — the construction year in Green Bay and the construction year in Corpus Christi have almost nothing in common — and it answers a question every scheduler asks.

Inputs: frost period, spring thaw, typical precipitation pattern, hurricane season, severe weather season, extreme heat limits on concrete placement, holiday/hunting-season access constraints on rural sites.

Render as a real `<table>`. It will get extracted and cited.

---

### C. Seasonal load restrictions & oversize/overweight logistics **[R]**

Almost nobody publishes this and it is decisive for shelter and hut delivery.

- **Spring load restrictions / frost laws** — posted road weight limits during thaw. Real and enforced across WI, IL, IA, NE, and northern MO; typically absent in TX, OK, AL. Include the posting authority and typical window.
- **Oversize/overweight permit authority** and typical lead time for a shelter or hut haul
- **Bridge weight and vertical clearance constraints** on likely approach routes
- **Railroad crossing permits** — critical for fiber routes; name the operating railroad(s) and the permitting process, which is notoriously slow
- **Urban ROW / lane closure requirements** in dense markets

A single table with authority names and links. This module alone will differentiate a Wisconsin page from a Texas page beyond any possibility of duplicate-content classification.

---

### D. Environmental & cultural review windows **[R]**

Also rarely published, also decisive for schedule.

- **Tree clearing windows** — seasonal restrictions tied to bat species protection apply across large portions of the Midwest and South and genuinely constrain when clearing can occur. Region-specific.
- **Migratory bird considerations** for clearing and structure work
- **State SHPO office** — name, contact, typical review timeline
- **Wetlands / waters of the state** — regulating agency, USACE district
- **Threatened & endangered species** likely to be flagged in that region
- **Floodplain** — administrator and whether the market has significant mapped floodplain in typical build areas
- **NEPA / Section 106** context for federally funded builds (relevant to state broadband program work)

Present as a reference table with authority names, links, and typical timelines. Frame honestly: CSS coordinates and supports these processes.

---

### E. Utility interconnection reality **[R]**

- Serving electric utility or utilities, with the new-service application process named
- Typical lead time for a new commercial service to a hut or compound (this varies enormously and everyone underestimates it)
- Transformer availability note
- Meter socket / service equipment standards specific to that utility
- Whether the utility is municipal, co-op, or IOU — this changes the process materially
- Natural gas provider where generator fuel is relevant

---

### F. Local cost drivers **[R]** — *do not publish prices, publish drivers*

What actually moves a number in this market, in plain language:

- Rock excavation likelihood and typical depth to refusal
- Haul distance to the nearest aggregate source and ready-mix plant
- Spoil disposal options and cost pressure
- Permit fee structure and review duration
- Prevailing wage / Davis-Bacon exposure — **relevant on any federally funded broadband work**
- Union jurisdiction where applicable
- Mobilization distance from the nearest CSS crew base
- Seasonal premium (winter concrete protection, frost heave mitigation, dewatering)

Framing: "What drives civil cost on a fiber hut build in {City}." Extremely high query volume, almost never answered honestly. Do not publish unit pricing.

---

### G. Materials & supply proximity **[O]**

Ready-mix plant proximity and typical delivery radius, precast vault and enclosure suppliers, aggregate sources, rebar and steel supply, geotextile and geogrid availability. Schedule-relevant, verifiable, and unique per market. Name categories and distances rather than endorsing specific vendors.

---

### H. Hazard & resilience profile **[R]**

- Dominant hazards for the market: tornado, ice storm, hurricane, flood, wildfire, extreme heat
- How that shapes design decisions on pads, anchorage, fuel systems, and compound drainage
- CSS emergency mobilization and post-event restoration capability for the market

Connects naturally to a real service line and reads as expertise rather than filler.

---

### I. Local market activity **[O, refresh quarterly]**

What is actually being built here right now, with public sources cited:

- State broadband program (BEAD and successor) subgrantee activity and award announcements
- Announced data center and hyperscale campus projects
- Carrier densification and upgrade programs
- Municipal and utility fiber builds
- Major transportation projects creating fiber relocation work

Cite public sources. This is the module that keeps pages fresh, gives sales a reason to send the link, and signals to search engines that the cluster is maintained rather than published-and-abandoned.

---

### J. Decision guidance **[R]**

One short, genuinely useful engineering-judgment section per market. Examples:

- "Drilled pier vs. spread footing for a fiber hut in {City} soils"
- "When frost depth drives your foundation cost in {City}"
- "Boring vs. trenching across {a real local soil or rock condition}"
- "Why compound drainage design changes in {City}'s clay"

150–250 words, written by or reviewed by someone who has actually built there. This is the highest-value module for AI citation because it is the kind of judgment content that does not exist elsewhere on the open web.

---

### K. Compliance & licensing **[R]**

- State contractor licensing requirements applicable to this scope (these vary meaningfully — some states license general contractors above a dollar threshold, others have no statewide GC license)
- State-specific safety or environmental registration
- Insurance and bonding norms for carrier and tower company work in the market
- CSS's actual qualifications for that state

---

### L. Expanded local FAQ **[R]** — 8–12 questions

Up from 5–8. Every question must be answerable only for this city. Mix technology segments:

- "How deep does a fiber hut foundation need to be in {City}?"
- "Who issues the ROW permit for a cell site access drive in {County} County?"
- "Are there seasonal road restrictions that affect shelter delivery to {City}?"
- "What's the lead time for a new electric service to a hut in {City}?"
- "Can you pour a shelter pad in {City} in January?"
- "What tree clearing restrictions apply near {City}?"
- "Which railroad permits do I need for a fiber crossing in {County} County?"
- "What soil conditions should I expect boring near {named local feature}?"

Answers 40–90 words, answer-first, self-contained. Marked up as `FAQPage`.

---

### M. Downloadable market spec sheet **[O — build after launch]**

A one-page PDF per market: design criteria, permitting authorities, 811 center, seasonal windows, CSS contact. Email-gated at most (name + email, no interrogation form). Creates a real engagement signal, gives sales a leave-behind, and turns a web page into a bookmarked asset.

---

### N. Sources & last verified **[R]**

Visible, dated, linked. Minimum 5 sources per page now that the module set has expanded. This is both an E-E-A-T signal and the mechanism that keeps the content honest.

---

### O. Mobilization & crew deployment **[R]** — *written to the band, never to the base*

CSS operates two staffed yards: **Cedar Rapids, Iowa** (38 markets) and **Dallas–Fort Worth, Texas** (27 markets). Each market is assigned to its nearer yard and carries a `mobilizationBand`.

**This module is the highest duplicate-content risk in the program.** The underlying data has only two values across 65 pages. Templated off `nearestBase`, it produces 38 near-identical paragraphs plus 27 more — in the one module that reads as a sales claim. Build it from band, route, staging and local supply. Never from the base city.

---

**Band A — Regional (48 markets, ≤ 350 mi)**

Lead with responsiveness. It is real, and for most of this footprint it is the strongest thing CSS can say.

Differentiate with: the actual route and its seasonal constraints — river crossings, winter closures on secondary routes, active construction corridors; a realistic same-day versus overnight breakdown for that specific distance; which counties in the service area are reached from which direction; emergency response capability for that market's dominant hazard.

Do not write "our Cedar Rapids yard is X hours away" on 38 pages. Write about reaching *this* market.

---

**Band B — Extended (15 markets, 350–700 mi)**

Lead with project-based deployment. Crews deploy for the duration of a scope rather than commuting.

Differentiate with: typical deployment duration for that market's common scopes; the staging approach and where equipment is held; local material sourcing — ready-mix, aggregate, precast — since haul from the yard is not viable at this range; the split between self-performed and locally subcontracted scope; realistic lead time on a mobilization request.

Covers most of west and south Texas, the Alabama markets, Wichita, Springfield MO, Joplin, Salina and Grand Island.

---

**Band C — Deployment (2 markets: Montgomery and Auburn, Alabama)**

**Do not lead with response time.** At 720–780 miles a speed claim invites a comparison against a local contractor that CSS will lose, and a construction manager will notice.

Lead with program capability: multi-site deployment across a region under one contract, self-performed scope breadth, single-source accountability, consistent crews and QA/QC across a build program rather than a patchwork of local subs.

Differentiate with: the local staging and supply plan, local subcontract and rental relationships, how mobilization is priced and scheduled into a program, Alabama licensing CSS holds, honest lead times.

**Write plainly that crews travel.** A carrier construction manager already understands the traveling-crew model; pretending otherwise is what costs credibility, not the distance.

---

**Rules for every band**

1. Never state or imply a physical presence CSS does not have. No "our {City} location," no "locally based," no address — except on the two yard pages.
2. Never publish a response-time commitment ops has not cleared.
3. Distance and drive time must come from real routing. Seed values are straight-line estimates; four markets are close enough that real routing may reassign them to the other yard (`PLAN.md` §4.3).
4. **The Cedar Rapids and Dallas pages get their own treatment** — the yard itself, equipment, crews, address, hours, and `LocalBusiness` schema. These two pages are structurally different from the other 63 and should read that way.
5. Run the uniqueness audit against this module specifically after every state. It fails first and hardest.

---

## Part 3 — Content volume targets (revised)

| Tier | Modules | Min rendered words | Min unique images |
|---|---|---|---|
| 1 | All | 1,800 | 4 |
| 2 | All except G, M | 1,400 | 3 |
| 3 | All except G, I, M | 1,100 | 2 |

Uniqueness floor rises to **75%** of rendered body content, since the new modules are nearly all fully local. `scripts/uniqueness-audit.ts` threshold: pairwise 5-gram similarity must stay under **25%**.

---

## Part 4 — Writing rules

1. **Answer-first.** The first two sentences under every H2 are a complete, quotable answer. LLMs extract passages, not pages.
2. **Declarative and quantified.** "Spring load restrictions in {County} typically run early March through mid-May" beats "seasonal restrictions may apply."
3. **Units in the same cell as the number.** Always.
4. **Name real things.** Corridors, campuses, rivers, highways, agencies, utilities, railroads. Generic geography is the tell of a templated page.
5. **No superlatives without evidence.** Drop "leading," "premier," "world-class," "cutting-edge." They add nothing and they read as filler to both humans and quality raters.
6. **Vary sentence and paragraph structure across pages.** If all 65 intros open with "Cell Site Solutions provides…", that is a machine-detectable pattern even if the nouns differ. Author intros individually.
7. **Write for the buyer, not the crawler.** Every module above exists because a real person asks that question before awarding a civil scope.
