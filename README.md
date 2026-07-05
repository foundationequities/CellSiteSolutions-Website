# CellSite Solutions — Website

Modern **Next.js** rebuild of [cellsitesolutions.com](https://www.cellsitesolutions.com)
(App Router · TypeScript · Tailwind CSS v4 · pnpm), deployable to **Vercel**.

> **Current state:** Phase 1–2 complete. All site imagery is localized under
> `public/images/`, and the shared **header / footer / mobile nav** plus a
> **placeholder homepage** (hero + partner/customer logo strips) are built and
> render with the real brand colors and fonts. Individual content pages, the
> contact/ebook forms, and the blog are still to come — see `CLAUDE.md`.

## Tech stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (`@theme` tokens in `src/app/globals.css`)
- `next/font` — DM Sans + Poppins (the live site's fonts)
- Resend + Zod (installed, used once the forms are built)
- Package manager: **pnpm** · Node **20+**

## Run it — GitHub Codespaces (no local setup)

1. On the GitHub repo page, click the green **`< > Code`** button →
   **Codespaces** tab → **Create codespace on `main`**.
2. Wait for it to build. This repo ships a `.devcontainer`, so the codespace
   automatically installs pnpm and runs `pnpm install` for you (first build
   takes a couple of minutes).
3. In the VS Code terminal (bottom panel), start the dev server:
   ```bash
   pnpm dev
   ```
4. A toast pops up: **"Your application running on port 3000 is available."**
   Click **Open in Browser** (or open the **Ports** tab and click the 🌐 next
   to port 3000). The site loads with live reload — edit a file and it updates.

To stop the server press `Ctrl+C`. Codespaces pause when idle; reopen from the
same **Code → Codespaces** menu to resume.

## Run it — locally

Requires Node 20+ and pnpm (`npm i -g pnpm` or `corepack enable`):

```bash
pnpm install
pnpm dev            # http://localhost:3000
```

Other scripts:

```bash
pnpm build          # production build (also runs the TypeScript check)
pnpm start          # serve the production build
pnpm lint           # ESLint
```

## Deploy to Vercel

1. Push is already done — the code is on GitHub (`main`).
2. Go to <https://vercel.com/new>, sign in with GitHub, and **Import** the
   `cellsitesolutions-website` repo.
3. Vercel auto-detects **Next.js** — leave Framework Preset, Build Command
   (`next build`), and Output as-is. **Root Directory** stays the repo root.
4. Click **Deploy**. In ~1–2 minutes you get a live `*.vercel.app` preview URL.

### Environment variables (only needed later)

The site builds and previews **without any env vars**. You'll add these in
**Vercel → Project → Settings → Environment Variables** once the contact and
ebook forms are wired up (see `.env.example` when it lands / `CLAUDE.md` Phase 4–6):

| Key | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend transactional email |
| `CONTACT_TO_EMAIL` | where Contact Us submissions are sent |
| `CONTACT_FROM_EMAIL` | verified Resend sender for the site |
| `EBOOK_FROM_EMAIL` | verified Resend sender for ebook downloads |
| `NEXT_PUBLIC_SITE_URL` | canonical site URL (metadata / OG) |

> Going live on the real domain (DNS cutover) is the very last step — keep the
> current WordPress site running until the Vercel build is fully signed off.
> See `CLAUDE.md` Phase 8 for the cutover checklist.

## Project layout

```
public/images/      Localized site imagery (mirrors wp-content/uploads paths)
src/app/            App Router: layout.tsx, page.tsx, globals.css
src/components/     site-header, site-footer, mobile-nav, logo-strip
src/lib/            site-config, nav, logos, utils
_reference/         Recon notes (INVENTORY.md). The wget mirror here is git-ignored.
CLAUDE.md           Full rebuild plan / phase-by-phase roadmap
```
