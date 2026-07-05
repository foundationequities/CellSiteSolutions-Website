# Build Notes — CellSite Solutions rebuild

This documents what was built in this pass, the one environment constraint that
shaped the approach, and the manual steps remaining before go-live.

## What's built

A complete, deployable **Next.js 15 (App Router) + TypeScript + Tailwind +
shadcn-style UI** site matching the stack locked in `CLAUDE.md`.

- **All routes from the §5 inventory** (21 pages) plus two ebook landing pages and
  a blog (index + 4 seed MDX posts).
- **Header** with two-level dropdown nav, **mobile nav**, and **footer** with social links.
- **Contact form + `/api/contact`** and **ebook gate + `/api/ebook`**, both Resend-backed,
  with a honeypot and Zod validation.
- **SEO:** per-page metadata, `sitemap.xml`, `robots.txt`, legacy-path redirects,
  FAQ + Organization + LocalBusiness + BlogPosting JSON-LD, generated OG image,
  SVG favicon, web manifest.
- **Lazy YouTube facade** for videos (real channel video IDs wired in).
- `next build` passes; all routes smoke-tested returning 200.

## The one constraint: no live-site access

This build ran in a sandbox whose **network policy blocks all hosts except GitHub
and package registries** — including `cellsitesolutions.com`, its CDN, and the
Wayback Machine. So two `CLAUDE.md` phases **could not run here**:

- **Phase 0 mirror / Phase 2 asset download** — no `wget` mirror, no image/PDF pull.

Instead, page **copy was grounded in `WebSearch` results** (which route outside the
blocked proxy) against the real live pages and public sources, then written as clean
components. A few gap-filling passages are professional-standard for the industry and
are flagged `(synthesized)` in the research notes. **Proofread every page against the
live site before launch**, per the `CLAUDE.md` guardrail ("transcribe, don't paraphrase").

## Remaining manual steps before go-live

1. **Images & PDFs** — download from the live site into `public/images/` and
   `public/downloads/` (see the READMEs there). Includes the ex-`fzl.jwb.temporary.site`
   partner logos. Then swap the text `Logo` wordmark for the real logo and add
   `next/image` art where sections currently run text-only.
2. **Verify contact details** in `src/lib/site-config.ts` (address, phone, fax, hours)
   against the live Contact page.
3. **Fonts** — for the production Barlow + Inter pairing, enable the `next/font`
   block in `src/app/layout.tsx` (works on Vercel, where Google Fonts is reachable).
4. **Resend env vars** — set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`,
   `EBOOK_FROM_EMAIL`, `NEXT_PUBLIC_SITE_URL` in Vercel (see `.env.example`); verify the
   sending domain in Resend.
5. **Optional:** wire Cloudflare Turnstile (keys already stubbed in `.env.example`).
6. **Confirm** the ebook landing slugs and blog content against the live site, and
   the careers application links.

## Editing later

- **v0.dev** — import the repo; components are small and composable.
- **Claude Code** — `CLAUDE.md` loads automatically. Page copy lives in
  `src/lib/content.ts` (products/services), individual `page.tsx` files (core pages),
  and `src/content/blog/*.mdx` (posts).
