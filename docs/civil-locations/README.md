# CSS Civil Services Locations — project package

Drop these into the repo root and point Claude Code at `CLAUDE.md`.

## Read order

1. `CLAUDE.md` — session rules and hard constraints
2. `PLAN.md` — strategy, architecture, QA gate
3. `CONTENT_MODULES.md` — every page module and how to write it
4. `RESEARCH.md` — where each data field is sourced from
5. `TASKS.md` — ordered build checklist

## What's included

```
CLAUDE.md                                  repo instructions
PLAN.md                                    program plan v2
CONTENT_MODULES.md                         page module spec
RESEARCH.md                                field sourcing guide
TASKS.md                                   build checklist

config/navigation.ts                       nav + footer single source of truth
components/layout/LocationsFooter.tsx      CIVIL SERVICES LOCATIONS footer
data/_schema.ts                            Zod location data contract
data/locations.seed.json                   65 markets, seeded
lib/locations.ts                           data access + neighbour computation
scripts/render-text.ts                     rendered-text flattener
scripts/validate-locations.ts              schema + publish gate
scripts/uniqueness-audit.ts                pairwise similarity gate
app/civil-services/locations/[state]/page.tsx
app/civil-services/locations/[state]/[city]/page.tsx
```

## Operating model assumption baked into these files

CSS has **two staffed yards: Cedar Rapids, Iowa and Dallas–Fort Worth, Texas**. Each of the 65 markets is assigned to its nearer yard and carries a `mobilizationBand` — 48 Band A, 15 Band B, 2 Band C. Cedar Rapids serves 38 markets, Dallas 27. Only the Cedar Rapids and Dallas pages emit `LocalBusiness` schema.

DFW coordinates in the seed are Dallas city center as a placeholder — **replace with the actual yard address before banding is final.** Four markets are close calls that real routing may reassign; see `PLAN.md` §4.3.

## First command to give Claude Code

> Read CLAUDE.md, PLAN.md, CONTENT_MODULES.md, RESEARCH.md and TASKS.md.
> Then work Phase 1 of TASKS.md only, and stop for review before Phase 2.

## Package.json additions

```json
{
  "scripts": {
    "validate": "tsx scripts/validate-locations.ts",
    "audit:uniqueness": "tsx scripts/uniqueness-audit.ts",
    "audit": "pnpm validate && pnpm audit:uniqueness && tsx scripts/word-count-audit.ts && tsx scripts/link-audit.ts && tsx scripts/metadata-audit.ts && tsx scripts/source-audit.ts",
    "prebuild": "pnpm audit"
  }
}
```

Never add `|| true` to the prebuild chain.
