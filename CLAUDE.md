# CLAUDE.md — CellSite Solutions Website Rebuild

> Drop this file in the **root** of the new project. Claude Code reads `CLAUDE.md`
> automatically on every session, so everything here is standing context.
> Work through the phases **in order**. Do not skip Phase 0.

---

## 1. Mission

Rebuild the existing WordPress site at **https://www.cellsitesolutions.com** as a
clean, modern **Next.js** app that:

1. **Looks and reads identically** to the current site (same pages, copy, images, videos, layout, brand).
2. Is **easy to edit** afterward in **v0.dev** and/or **Claude Code + GitHub**.
3. Handles the **Contact Us** form and **ebook downloads** via email using **Resend**.
4. Deploys to **Vercel**.

**Important nuance:** "exact copy" means *visually and content-identical*, NOT a byte-for-byte
copy of the WordPress HTML. A raw HTML scrape of WordPress/page-builder markup is unmaintainable
and cannot be edited in v0. So we **preserve** the original as a reference, then **rebuild clean**.
This is the single most important decision in this project — see Phase 2.

---

## 2. Tech stack (locked — do not substitute)

This stack is chosen specifically because it is **v0.dev's native output stack**, so anything
v0 generates drops in cleanly and vice-versa.

- **Next.js (App Router)** + **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** components
- **Resend** for transactional email
- **Vercel** hosting
- Package manager: **pnpm** (fall back to npm if pnpm unavailable)
- Node **20 LTS** (Node 18+ minimum)

Keep dependencies minimal. Prefer `next/image`, `next/font`, native React state.

---

## 3. Repository structure (target)

```
/
├─ CLAUDE.md                     ← this file
├─ MIGRATION-PLAN.md             ← human-facing roadmap
├─ _reference/                   ← the preserved original site (git-ignored, DO NOT ship)
│   └─ mirror/                   ← wget mirror of the live site
├─ public/
│   ├─ images/                   ← all downloaded images (mirror the wp-content paths)
│   ├─ downloads/                ← ebook PDFs (if small; else Vercel Blob — see Phase 6)
│   ├─ favicon.ico, og-*.png
├─ src/
│   ├─ app/
│   │   ├─ layout.tsx            ← header, footer, fonts, metadata defaults
│   │   ├─ page.tsx              ← Home
│   │   ├─ about-us/page.tsx
│   │   ├─ ...                   ← one folder per route (see §5)
│   │   ├─ blog/
│   │   │   ├─ page.tsx          ← blog index
│   │   │   └─ [slug]/page.tsx   ← blog post (MDX-driven)
│   │   ├─ api/
│   │   │   ├─ contact/route.ts  ← Resend contact handler
│   │   │   └─ ebook/route.ts    ← Resend ebook-gate handler
│   │   ├─ sitemap.ts
│   │   └─ robots.ts
│   ├─ components/
│   │   ├─ site-header.tsx, site-footer.tsx, mobile-nav.tsx
│   │   ├─ contact-form.tsx, ebook-form.tsx
│   │   ├─ youtube-embed.tsx     ← lazy YouTube facade
│   │   └─ ui/                   ← shadcn components
│   ├─ content/blog/             ← .mdx blog posts
│   └─ lib/                      ← nav config, site config, helpers
├─ .env.local                    ← secrets (never commit)
├─ .env.example                  ← documented placeholders (commit this)
└─ next.config.mjs
```

---

## 4. Environment variables

Create `.env.example` (commit) and `.env.local` (do NOT commit). Add the same keys in the
**Vercel dashboard** → Project → Settings → Environment Variables.

```bash
# .env.example
RESEND_API_KEY=                 # from resend.com/api-keys
CONTACT_TO_EMAIL=sales@cellsitesolutions.com   # where Contact Us submissions land
CONTACT_FROM_EMAIL=website@cellsitesolutions.com  # must be on a Resend-verified domain
EBOOK_FROM_EMAIL=downloads@cellsitesolutions.com
NEXT_PUBLIC_SITE_URL=https://www.cellsitesolutions.com
# Optional spam protection (recommended):
TURNSTILE_SECRET_KEY=
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
```

---

## 5. Page / route inventory

Rebuild each of these as `src/app/<slug>/page.tsx`. **Keep slugs identical** to the live site
so SEO, backlinks, and bookmarks don't break.

| Route | Source URL |
|---|---|
| `/` | /  (Home) |
| `/about-us` | /about-us/ |
| `/who-we-serve` | /who-we-serve/ |
| `/sustainable-practices` | /sustainable-practices/ |
| `/careers` | /careers/ |
| `/blog` + `/blog/[slug]` | /blog/ (+ each post) |
| `/shelters` | /shelters/ |
| `/telecom-shelters` | /telecom-shelters/ |
| `/datacomm-pro-series` | /datacomm-pro-series/ |
| `/shelter-showcase` | /shelter-showcase/ |
| `/hvac-units` | /hvac-units/ |
| `/generators` | /generators/ |
| `/cabinets` | /cabinets/ |
| `/installation-integration` | /installation-integration/ |
| `/civil-construction` | /civil-construction/ |
| `/installation-commissioning` | /installation-commissioning/ |
| `/general-site-maintenance` | /general-site-maintenance/ |
| `/site-decommissioning` | /site-decommissioning/ |
| `/guy-tower-rod-inspections` | /guy-tower-rod-inspections/ |
| `/disaster-recovery` | /disaster-recovery/ |
| `/contact-us` | /contact-us/ |
| ebook download page(s) | discover in Phase 0 |

**This table is a starting point, not the source of truth.** In Phase 0 you will pull the
sitemap and reconcile it against this list — there may be additional pages (ebook landing
pages, legal/privacy pages, individual blog posts) not shown in the top nav.

---

## PHASE 0 — Recon & inventory (do this first, write findings to `_reference/INVENTORY.md`)

1. Fetch the sitemap to enumerate **every** URL. Try in order:
   - `https://www.cellsitesolutions.com/sitemap_index.xml`
   - `https://www.cellsitesolutions.com/wp-sitemap.xml`
   - `https://www.cellsitesolutions.com/sitemap.xml`
2. For **each** page, record: final slug, `<title>`, meta description, Open Graph image,
   and the H1. (WordPress/Yoast meta must carry over for SEO.)
3. List every **blog post** slug + publish date.
4. Find the **ebook download page(s)** and note which PDF each one gates.
5. Note the **YouTube** videos used (channel: youtube.com/@cellsitesolutionsllc5168) and where each is embedded.
6. Capture brand basics: logo files, primary/secondary colors (sample from the live CSS),
   heading + body fonts.
7. **Flag every asset served from `fzl.jwb.temporary.site`** — these are on a temporary staging
   host and MUST be re-downloaded and re-hosted locally (see Phase 2, step 3).

Write all of this to `_reference/INVENTORY.md` before building anything.

---

## PHASE 1 — Scaffold

```bash
pnpm create next-app@latest . --ts --tailwind --app --src-dir --import-alias "@/*" --eslint
pnpm dlx shadcn@latest init
pnpm add resend zod
# add a couple of shadcn primitives we'll use:
pnpm dlx shadcn@latest add button input textarea label
```

- Set up `src/lib/site-config.ts` (site name, social URLs, contact details) and
  `src/lib/nav.ts` (the nav tree from §5 with dropdowns).
- Configure brand colors + fonts in `tailwind.config` / `globals.css` from Phase 0 findings.
- Build `site-header.tsx` (with the two-level dropdown nav), `mobile-nav.tsx`, and `site-footer.tsx`
  (Facebook / LinkedIn / YouTube links). Wire them into `app/layout.tsx`.

Social links to reuse:
- Facebook: https://www.facebook.com/cellsitesolutions/
- LinkedIn: https://www.linkedin.com/company/cellsite-solutions-llc/
- YouTube: https://www.youtube.com/@cellsitesolutionsllc5168

---

## PHASE 2 — Preserve the original + pull assets

**Track A — preserve (reference only, never shipped):**

```bash
# macOS: `brew install wget` first if needed.
mkdir -p _reference/mirror && cd _reference/mirror
wget --mirror --convert-links --adjust-extension --page-requisites --no-parent \
  --span-hosts --domains cellsitesolutions.com,www.cellsitesolutions.com,fzl.jwb.temporary.site \
  -e robots=off --wait=1 \
  https://www.cellsitesolutions.com/
cd -
```

Add `_reference/` to `.gitignore` — it's your visual source of truth while rebuilding, not part of the app.

**Track B — bring assets into the app:**

1. Copy every image from the mirror into `public/images/`, preserving the `wp-content/uploads/...`
   sub-paths so references stay predictable.
2. Copy any gated PDFs into `public/downloads/` (see Phase 6 for large-file handling).
3. **Re-host the temporary-domain assets.** Any URL containing `fzl.jwb.temporary.site` (several
   partner logos on the homepage) must be downloaded and saved locally, then referenced from
   `/images/...`. Do a repo-wide check afterward:
   ```bash
   grep -rn "temporary.site" src/ public/    # must return NOTHING before shipping
   grep -rn "cellsitesolutions.com/wp-content" src/   # externally-hosted refs to localize
   ```
4. Use `next/image` for all images. Add any remaining remote hosts to `next.config.mjs`
   `images.remotePatterns` only as a temporary bridge — the goal is everything local.

---

## PHASE 3 — Videos

- The site uses YouTube (channel above). Embed each video with a **lazy facade** component
  (`components/youtube-embed.tsx`) — render a thumbnail + play button, load the iframe on click.
  This keeps Core Web Vitals high. Do **not** ship an eager iframe per video.
- If Phase 0 finds any **self-hosted** `.mp4` in `wp-content/uploads`:
  - If small (<25 MB total) → `public/videos/`.
  - If large → keep it on YouTube, or move to **Vercel Blob** storage. Do **not** commit large
    binaries to git (it bloats the repo and slows every deploy).

---

## PHASE 4 — Rebuild pages

For each route in §5, open the corresponding page in `_reference/mirror/` as your visual
reference and rebuild it as a clean React component:

- Match copy **exactly** (proofread against the mirror — don't paraphrase marketing text).
- Recreate sections/layout with Tailwind + shadcn. Reuse shared section components (hero,
  logo marquee, feature grid, CTA band) across pages.
- Wire the homepage partner-logo strip from the localized logo images (including the ex-temporary ones).
- Preserve the FAQ-style Q&A content on the homepage — it's good for SEO; render it with FAQ schema (Phase 7).
- Every page must set its own `metadata` (title + description from Phase 0) via the App Router
  `export const metadata`.

Build order suggestion: layout/header/footer → Home → Contact → the two section landing pages
(Shelters, Civil Construction) → remaining leaf pages → blog.

**Blog:** store posts as `.mdx` in `src/content/blog/`. Render index at `/blog` and posts at
`/blog/[slug]`. (MDX keeps posts editable in Claude Code/v0. If non-technical staff need to post
often, note the headless-CMS option in MIGRATION-PLAN.md, but MDX is the default.)

---

## PHASE 5 — Contact form + Resend

`src/app/api/contact/route.ts`:

```ts
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(1),
  // honeypot: real users leave this empty
  website: z.string().max(0).optional(),
});

export async function POST(req: Request) {
  const data = await req.json().catch(() => null);
  const parsed = schema.safeParse(data);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }
  if (parsed.data.website) {
    // honeypot tripped — silently accept, send nothing
    return NextResponse.json({ ok: true });
  }
  const { name, email, company, phone, message } = parsed.data;

  const { error } = await resend.emails.send({
    from: `CellSite Website <${process.env.CONTACT_FROM_EMAIL}>`,
    to: [process.env.CONTACT_TO_EMAIL!],
    replyTo: email,
    subject: `New quote request from ${name}${company ? ` (${company})` : ""}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      phone ? `Phone: ${phone}` : null,
      "",
      message,
    ].filter(Boolean).join("\n"),
  });

  if (error) return NextResponse.json({ error: "Send failed" }, { status: 502 });
  return NextResponse.json({ ok: true });
}
```

- `components/contact-form.tsx` is a `"use client"` component that POSTs JSON to `/api/contact`,
  shows loading + success/error states, and includes a hidden `website` honeypot field.
- Wire the same form behind the **REQUEST QUOTE** button (it currently points to /contact-us).
- Recommended: add **Cloudflare Turnstile** (free) and verify the token server-side before sending.

---

## PHASE 6 — Ebook gated downloads

Goal: user submits email → we email them the download link (and notify the team), rather than
exposing the raw PDF.

`src/app/api/ebook/route.ts` (sketch):

```ts
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);
const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  ebook: z.string().min(1),          // slug/key identifying which ebook
  website: z.string().max(0).optional(), // honeypot
});

// map ebook keys → file URLs (public/downloads/... or Vercel Blob URLs)
const EBOOKS: Record<string, { title: string; url: string }> = {
  // "shelter-guide": { title: "...", url: "https://.../shelter-guide.pdf" },
};

export async function POST(req: Request) {
  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Invalid" }, { status: 400 });
  if (parsed.data.website) return NextResponse.json({ ok: true });
  const item = EBOOKS[parsed.data.ebook];
  if (!item) return NextResponse.json({ error: "Unknown ebook" }, { status: 404 });

  // 1) send the ebook link to the requester
  await resend.emails.send({
    from: `CellSite Solutions <${process.env.EBOOK_FROM_EMAIL}>`,
    to: [parsed.data.email],
    subject: `Your download: ${item.title}`,
    text: `Hi ${parsed.data.name},\n\nHere's your download: ${item.url}\n\n— CellSite Solutions`,
  });
  // 2) notify the team of the new lead
  await resend.emails.send({
    from: `CellSite Website <${process.env.CONTACT_FROM_EMAIL}>`,
    to: [process.env.CONTACT_TO_EMAIL!],
    subject: `Ebook lead: ${item.title}`,
    text: `${parsed.data.name} <${parsed.data.email}> requested "${item.title}".`,
  });
  return NextResponse.json({ ok: true });
}
```

- Small PDFs → `public/downloads/`. Large PDFs → **Vercel Blob** (`@vercel/blob`) and store the
  Blob URL in the `EBOOKS` map.
- `components/ebook-form.tsx` mirrors the contact form pattern, with a hidden `ebook` field.

---

## PHASE 7 — SEO, redirects, structured data

- **Per-page metadata:** title + description from Phase 0 on every route. Set defaults + Open
  Graph in `app/layout.tsx`.
- **`src/app/sitemap.ts`** — generate from the route list + blog slugs.
- **`src/app/robots.ts`** — allow all, point to the sitemap.
- **Redirects** in `next.config.mjs` for legacy WordPress paths so nothing 404s:
  ```js
  async redirects() {
    return [
      { source: "/wp-admin/:path*", destination: "/", permanent: false },
      { source: "/feed", destination: "/blog", permanent: true },
      // add any old slug → new slug pairs discovered in Phase 0
    ];
  }
  ```
- **Trailing slashes:** the WP URLs end in `/`. Decide once (set `trailingSlash` in
  `next.config.mjs` if you want to preserve them) and be consistent to avoid duplicate URLs.
- **Structured data:** add FAQ schema (homepage Q&A), Organization schema (logo, social profiles),
  and BreadcrumbList where relevant.
- Add `favicon.ico`, an OG image, and a web manifest.

---

## PHASE 8 — QA & deploy

**QA before shipping:**
- [ ] `grep -rn "temporary.site" src/ public/` returns nothing.
- [ ] No broken images; every page renders against its mirror reference.
- [ ] Contact form + each ebook form send successfully (test with a real inbox).
- [ ] Lighthouse: Performance, SEO, Accessibility all green-ish (aim 90+).
- [ ] All §5 slugs resolve; sitemap.xml and robots.txt correct.
- [ ] Mobile nav + dropdowns work.

**Deploy:**
1. Push to GitHub (`main`).
2. Import the repo in **Vercel** → framework auto-detected as Next.js.
3. Add all env vars (Phase 4) in Vercel for Production + Preview.
4. Deploy; verify on the `*.vercel.app` preview URL first.
5. **Resend domain verification:** in Resend, add your sending domain (or a subdomain like
   `mail.cellsitesolutions.com`) and add the DKIM/SPF/return-path DNS records it gives you.
   Until verified, email only works from Resend's test address. **These records do NOT touch your
   existing MX records — inbound email to your mailboxes is unaffected.**
6. **Domain cutover** (do last, after full sign-off): lower DNS TTL a day ahead, then point the
   apex + `www` records to Vercel per Vercel's "Add Domain" instructions. Keep WordPress live until
   the Vercel site is verified in production. Re-verify Google Search Console after cutover and
   submit the new sitemap.

---

## Guardrails for the agent

- **Never** invent marketing copy — transcribe it from the mirror.
- **Never** commit `.env.local`, `_reference/`, or large binaries.
- Keep components small and composable so v0.dev can edit them cleanly.
- Prefer server components; add `"use client"` only where interactivity requires it.
- After each phase, summarize what changed and what's left. Commit in small, labeled increments.
- If something on the live site can't be reproduced (a WP plugin widget, an animation), flag it
  in `_reference/INVENTORY.md` and propose the closest clean-code equivalent rather than guessing.
