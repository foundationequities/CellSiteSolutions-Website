# CellSite Solutions — WordPress → Vercel Migration Plan

A human-readable roadmap. The companion `CLAUDE.md` is the executable spec you load into
Claude Code. Read this first to understand the strategy and the decisions behind it.

---

## 1. What you're getting

Your current site (cellsitesolutions.com) runs on WordPress. We're moving it to a **Next.js**
app hosted on **Vercel**, so you can edit it in **v0.dev** (visual, no-code-ish) *or*
**Claude Code + GitHub** (conversational/code), with your Contact form and ebook downloads
powered by **Resend** email.

---

## 2. The one big decision: "exact copy" vs. "easy to edit"

These two goals pull in opposite directions, and it's worth being explicit about how we resolve it.

- A **literal HTML scrape** of WordPress gives you a pixel-perfect copy — but the output is a
  tangle of page-builder markup and theme CSS that is essentially **impossible to edit in v0.dev**
  and painful in Claude Code. That defeats your main reason for moving.
- A **clean rebuild** gives you editable, modern code — but requires care to match the original.

**Our approach is a hybrid:**
1. **Preserve** — take a full local mirror of the live site (every page, image, PDF). This is the
   visual source of truth and guarantees nothing is lost.
2. **Rebuild** — recreate each page as clean Next.js + Tailwind + shadcn/ui components that match
   the mirror exactly in content and appearance.

Result: the public site looks identical, but the code underneath is clean and editable. The
rebuild won't be byte-for-byte identical HTML — and that's the point.

**Why this exact stack?** Next.js + TypeScript + Tailwind + shadcn/ui is *literally what v0.dev
generates.* Building on it means v0 edits drop in with zero translation, and Claude Code works
natively with it too.

---

## 3. Architecture at a glance

```
GitHub (source of truth)
   │  ├── Claude Code edits ──┐
   │  └── v0.dev edits ───────┤ both push commits here
   ▼                          ▼
Vercel (auto-deploys every push to main; preview deploys for branches/PRs)
   │
   ├── Static pages + blog (MDX)
   ├── /api/contact  ─┐
   └── /api/ebook   ──┴──► Resend ──► your inbox + the visitor's inbox
```

---

## 4. Phased roadmap

| Phase | What happens | Rough effort |
|---|---|---|
| 0 | Recon: pull sitemap, inventory every page/asset/video, capture SEO meta | 0.5 day |
| 1 | Scaffold Next.js, shared header/footer/nav, brand tokens | 0.5–1 day |
| 2 | Mirror the site; download + localize all images (incl. the temporary-domain logos) | 0.5 day |
| 3 | Video handling (lazy YouTube embeds) | short |
| 4 | Rebuild all ~21 pages + blog to match the mirror | 2–4 days |
| 5 | Contact form → Resend | 0.5 day |
| 6 | Ebook gated downloads → Resend | 0.5 day |
| 7 | SEO: metadata, sitemap, robots, redirects, schema | 0.5 day |
| 8 | QA, deploy to Vercel, verify Resend domain, DNS cutover | 0.5–1 day |

Claude Code does the heavy lifting in phases 2–7; your involvement is mostly review + supplying
credentials (Resend key, domain DNS access) and the final go/no-go on cutover.

---

## 5. Known issues & risks (read this)

1. **Temporary staging-domain assets.** Several homepage partner logos currently load from
   `fzl.jwb.temporary.site` (a temporary host), not your own domain. If that host expires, those
   images vanish. The rebuild **re-downloads and re-hosts them locally** so you're not dependent on
   it. (Worth checking whether your live WordPress site itself has the same fragile references.)

2. **Video weight.** Keep videos on **YouTube** (embedded) rather than committing video files to the
   repo. Large binaries bloat git and slow every deploy. If any videos are self-hosted, we move them
   to YouTube or Vercel Blob.

3. **SEO continuity.** Your existing Google rankings depend on URLs staying the same. The plan
   **keeps every slug identical** and carries over titles/meta descriptions, plus adds redirects for
   old WordPress paths (e.g. `/wp-admin`, feeds). After cutover you'll re-verify Google Search
   Console and submit the new sitemap.

4. **Email deliverability.** Resend needs you to **verify your sending domain** (add DKIM/SPF DNS
   records). Until then, mail only sends from Resend's test address. Good news: these records are
   *separate from your MX records*, so **inbound email to your existing mailboxes is unaffected.**
   Consider sending from a subdomain like `mail.cellsitesolutions.com` to isolate reputation.

5. **Spam.** Public forms attract bots. Plan includes a honeypot field; strongly recommend adding
   **Cloudflare Turnstile** (free) for real protection.

6. **Blog editing model.** Posts will be stored as **MDX files** in the repo — perfect for editing
   via Claude Code/v0. If non-technical staff need to publish frequently without touching the repo,
   consider a lightweight headless CMS (e.g. Sanity) later. Start with MDX; it's the simplest path.

7. **DNS cutover timing.** This is the only step with downtime risk. We test everything on Vercel's
   preview URL first, keep WordPress live in parallel, lower DNS TTL a day ahead, then flip records.
   Nothing goes dark.

8. **Page-builder widgets.** If the current site uses interactive WordPress plugin widgets, some may
   not have a 1:1 equivalent. Claude Code will flag these and rebuild the closest clean version
   rather than guess.

---

## 6. The two editing workflows after launch

**v0.dev (visual, fastest for look-and-feel):**
- The new v0 can **import your GitHub repo** and work on it directly; connect that repo to your
  Vercel project so v0 picks up env vars and deploys previews.
- Best for: tweaking layouts, copy, colors, adding sections.
- v0 publishes changes as commits/PRs to GitHub → Vercel auto-deploys.

**Claude Code + GitHub (conversational + full control):**
- Install: `npm install -g @anthropic-ai/claude-code` (needs Node 18+; Node 20 LTS recommended),
  then run `claude` inside the repo. It reads `CLAUDE.md` automatically.
- Best for: logic, forms, SEO, new pages, refactors, anything structural.
- Commit → push → Vercel auto-deploys.

Both write to the **same GitHub repo**, so they interoperate. Rule of thumb: **v0 for pixels,
Claude Code for plumbing.** Work on branches / PRs to avoid the two stepping on each other.

---

## 7. Email plan (Resend) specifics

- One Resend account, one API key (stored in Vercel env vars, never in the repo).
- **Contact Us** → emails your sales inbox, with the visitor's address as reply-to.
- **Ebook downloads** → emails the visitor the download link *and* notifies your team of the lead.
- Verify `cellsitesolutions.com` (or a subdomain) in Resend and add the DNS records it provides.
- Optional next step: forward captured emails into a CRM/newsletter tool (Resend Audiences,
  Mailchimp, HubSpot) if you want to nurture leads.

---

## 8. Go-live checklist

- [ ] All pages rebuilt and proofread against the mirror
- [ ] No references to `temporary.site` anywhere
- [ ] Contact + ebook forms tested end-to-end with a real inbox
- [ ] Resend sending domain verified (DNS records live)
- [ ] Lighthouse 90+ on key pages
- [ ] sitemap.xml + robots.txt correct; redirects in place
- [ ] Env vars set in Vercel (Production + Preview)
- [ ] Production deploy verified on `*.vercel.app`
- [ ] DNS TTL lowered (day before)
- [ ] Point apex + `www` to Vercel
- [ ] WordPress kept live until cutover confirmed
- [ ] Google Search Console re-verified + new sitemap submitted
- [ ] Analytics (GA4 / GTM) reconnected

---

## 9. Rough cost picture

- **Vercel** — Hobby tier is free and often enough for a brochure site; Pro (~$20/mo) if you want
  team features, more bandwidth, or commercial guarantees.
- **Resend** — free tier covers a few thousand emails/month; paid tiers beyond that.
- **Claude Code** — usage via your Claude Pro/Max subscription or API credits.
- **v0.dev** — has free + paid tiers.
- **Domain/DNS** — unchanged (you keep your registrar).

You're likely at **$0–40/month** for hosting + email for a site of this size, versus WordPress
hosting + plugin/maintenance costs.

---

## 10. How to kick off

1. Create an empty GitHub repo and clone it locally.
2. Drop `CLAUDE.md` (and this file) into the repo root.
3. Install Claude Code, `cd` into the repo, run `claude`.
4. Tell it: *"Start with Phase 0 in CLAUDE.md and report the inventory before building."*
5. Review the inventory, then let it proceed phase by phase, reviewing each.
6. Provide the Resend key + DNS access when you reach phases 5–8.
