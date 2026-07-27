# CLAUDE.md — Cell Site Solutions

Repo instructions for Claude Code. Read this first, every session.

## What this project is

`www.cellsitesolutions.com` — Next.js (App Router) on Vercel. **Pre-launch.** Currently a draft/preview deployment.

Active workstream: a 65-market **Civil Services Locations** cluster covering telecom shelter, fiber hut, wireless, and edge site civil construction across IA, NE, MO, KS, WI, IL, OK, TX, AL.

## Read these before writing code

| File | What it governs |
|---|---|
| `PLAN.md` | Full program strategy, SEO/GEO architecture, QA gate |
| `CONTENT_MODULES.md` | Every content module on a location page + writing rules |
| `TASKS.md` | Ordered build checklist — work through it in sequence |
| `data/_schema.ts` | The location data contract. Single source of truth. |
| `data/locations/missouri/kansas-city.json` | Gold-standard fixture. Match its depth and voice. |

## Hard rules — do not violate these

1. **Never fabricate a technical, regulatory, or geographic value.** Wind speed, frost depth, seismic category, bearing capacity, AHJ names, permit timelines, code editions — every one of these is either sourced or omitted. A wrong frost depth on a public page is a professional liability exposure, not just an SEO problem. If you cannot source it, leave the field `null` and add it to `_gaps[]`. The build will correctly refuse to publish that page.

2. **Never generate a page by swapping the city name into a template.** If two location pages differ only by proper nouns, delete one. `scripts/uniqueness-audit.ts` enforces this at build time — do not weaken its threshold to make a build pass.

3. **CSS has exactly two staffed yards: Cedar Rapids, Iowa and Dallas–Fort Worth, Texas.** Every other market is served from one of those two. Never write "our {City} office," "locally based," or anything implying presence elsewhere. `LocalBusiness` schema emits on the Cedar Rapids and Dallas pages only. See `PLAN.md` §4.

4. **Never template the mobilization module off the base city.** With two yards, that field has only two values across 65 pages — templating it produces 38 near-identical paragraphs plus 27 more, in the module most likely to read as a sales claim. Write to the market's `mobilizationBand`. `CONTENT_MODULES.md` §O.

5. **Never invent a project, client, testimonial, or photo caption.** Project entries come from the real project intake only.

6. **`_verified: true` is set by a human, never by you.** The schema requires it. Do not set it to satisfy a failing build.

7. **Do not add `noindex` to make a page "safe."** If a page is not good enough to index, it is not good enough to publish. Delete it or roll it into a regional page.

## Conventions

- TypeScript strict. Zod for all data validation.
- Location data lives in `data/locations/{state-slug}/{city-slug}.json`. Nothing reads these files directly — everything goes through `lib/locations.ts`.
- Server Components by default. Client Components only for the map, accordions, and the form.
- Follow the existing site's design system and Tailwind config. **Do not introduce a new visual language for the locations cluster** — it must look native to the site.
- Real semantic HTML. Data tables are `<table>`, not grid divs — this matters for AI extraction (see `PLAN.md` §11).
- Commit granularly. One task from `TASKS.md` per commit.

## Commands

```bash
pnpm dev              # local dev
pnpm validate         # Zod-validate all location JSON
pnpm audit            # run all six content audits
pnpm build            # runs validate + audit as prebuild, then next build
pnpm audit:uniqueness # pairwise similarity report across location pages
```

`pnpm build` must fail if any audit fails. Do not add `|| true` anywhere in the prebuild chain.

## When you are blocked

If a required field cannot be sourced, do not guess and do not silently drop the module. Add the field to `_gaps[]` in the location JSON with a note on what you tried, and surface it in your summary. A short honest gap list is far more useful than a complete-looking file with invented numbers.
