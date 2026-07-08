# CellSite Solutions — Recon & Asset Inventory (Phase 0 + Phase 2 Track B)

_Generated 2026-07-05 from the live site at https://www.cellsitesolutions.com
(apex `cellsitesolutions.com`; `www` 301-redirects to apex)._

This branch (`claude/localize-images-assets`) delivers the **localized image/asset
library** and the recon findings needed to build the pages. The Next.js app itself
is not yet scaffolded, so "wire `next/image` into every page" happens in a later
phase — the assets and brand tokens below are the inputs for it.

---

## 1. How assets were pulled

1. `wget --mirror --page-requisites` of the apex domain → `_reference/mirror/`
   (git-ignored; ~314 MB, visual source of truth only).
2. Every image referenced across **all 50 URLs** (HTML `src` / `srcset` /
   `data-src` lazy attrs **and** CSS `url()` backgrounds) was reconciled against the
   mirror. **14 lazy-loaded / background images wget missed were fetched directly.**
3. WordPress-generated size variants (`name-WIDTHxHEIGHT.ext`) were **pruned** — only
   full-resolution originals are kept; `next/image` regenerates any size on demand.
   This cut the library from **181 MB → 92 MB** with zero loss of unique imagery.
4. **Coverage check: 0 referenced images missing** (HTML + CSS).

**Result:** `public/images/` — **160 files, 92 MB**, all served at
`/images/wp-content/uploads/...` (paths mirror the original WordPress URLs, so
references stay 1:1 predictable).

---

## 2. `fzl.jwb.temporary.site` — flagged & resolved ✅

The homepage partner-logo strip referenced 8 logos from the temporary staging host
`fzl.jwb.temporary.site` (protocol-relative `//fzl.jwb.temporary.site/website_904168ae/...`).

**That host is now DOWN (connection refused).** This is exactly the risk `CLAUDE.md`
flagged. Fortunately all 8 also exist on the production domain under
`/wp-content/uploads/2024/10/`, so they were re-hosted locally from there:

`ATT`, `American-Tower`, `Crown-Castle`, `Dish`, `Ericsson`, `Fujitsu`, `Mastec`, `Nokia`
(`*-Logo-Final.png`).

`grep -rn "temporary.site" public/` → **nothing.** (No `src/` exists yet; re-run the
`src/` grep after pages are built.)

---

## 3. Brand basics (sampled from live CSS)

| Token | Value | Notes |
|---|---|---|
| **Primary / Accent** | `#FF2E36` | brand red (Elementor `primary` **and** `accent`) |
| **Secondary / Text** | `#000000` | black |
| **Neutral / border** | `#DDDDDD` | light grey rule |
| **Surface** | `#FFFFFF` | white |

**Fonts (Google Fonts — both already in the default Trusted list):**

- **DM Sans** — body copy + base `h1–h3` (theme preset). Weights 400/500/700 + italics.
- **Poppins** — Elementor display headings / buttons. Full weight range 100–900.

> ⚠️ Correction to earlier notes: the live site uses **DM Sans + Poppins**, _not_
> "Barlow + Inter" (which was a pre-recon guess). Use DM Sans + Poppins via `next/font`.

---

## 4. Logo assets (localized)

| Purpose | Served path |
|---|---|
| Header logo (white, on dark) | `/images/wp-content/uploads/2024/09/Main-Header-Website-Logo-Larger-White.png` |
| Header logo (black, on light) | `/images/wp-content/uploads/2024/06/Main-Header-Website-Logo-Larger-Black.png` |
| Footer logo | `/images/wp-content/uploads/2024/06/Footer-Logo.png` |

**Favicon / site-icon** (source `.../2026/01/Favicon.png`, 512²):
`cropped-Favicon-32x32.png`, `-180x180.png` (apple-touch), `-192x192.png`, base `cropped-Favicon.png`,
all under `/images/wp-content/uploads/2026/01/`. Generate `favicon.ico` + web manifest from these in Phase 7.

**Default OG image:** `/images/wp-content/uploads/2024/12/0032-New-Website-Announcement-Post-Large-min.png`.

---

## 5. Logo strips (for the homepage marquee — Phase 4)

**Partner / OEM & carrier logos** (`/images/wp-content/uploads/2024/10/`) — the ex-`temporary.site` set:
AT&T · American Tower · Crown Castle · Dish · Ericsson · Fujitsu · MasTec · Nokia

**Customer / co-op & fiber logos** (`/images/wp-content/uploads/2025/02` + `2025/03/`):
Coast Electric · Four States Fiber · Glades Electric Cooperative · Mountain View · OEMC ·
Osage Valley Electric Cooperative · Petit Jean Fiber · Satilla · Singing River Connect ·
Suwannee Valley · Farmers FRC · Grady EMC

---

## 6. Ebook gated downloads

Three ebook landing pages, each gated by a **WPForms** email form (the PDF is
delivered by email — there is **no public PDF URL** to scrape, which matches the
Phase 6 design). So `public/downloads/` is intentionally empty for now; drop the
actual PDFs there (or in Vercel Blob) once the client provides them.

| Page | WPForms form id |
|---|---|
| `/ebook-telecom-construction/` | 65069 |
| `/ebook-energy-efficiency/` | 65383 |
| `/ebook-datacomm-pro-series/` | 67590 |

---

## 7. Video

- **No self-hosted video** (`.mp4/.webm/.mov`) anywhere in the mirror — consistent
  with the "all YouTube" assumption in Phase 3.
- No `<iframe>` YouTube embeds appear in the **static** HTML of the mirrored pages
  (any video is JS-injected). When rebuilding, use the lazy `youtube-embed.tsx`
  facade per Phase 3; confirm which posts/pages embed video against the live site.
- Channel: youtube.com/@cellsitesolutionsllc5168.

---

## 8. Page / route inventory (from `sitemap_index.xml`)

**Pages (41)** — reconciled with `CLAUDE.md §5`. Slugs present on the live site that
extend the §5 table are marked ⊕; a couple look like build scratch pages (⚠).

```
/                              /telecom-shelters/            /engineering-drawings/ ⊕
/about-us/                     /shelters-for-sale/ ⊕         /craning-logistics/ ⊕
/who-we-serve/                 /shelters/                    /data-center-mec/ ⊕
/sustainable-practices/        /shelter-showcase/            /site-survey/ ⊕
/careers/                      /shelter-transformation/ ⊕    /site-build-prep-development/ ⊕
/contact-us/                   /datacomm-pro-series/         /staging-services/ ⊕
/civil-construction/           /hvac-units/                  /recycle-upgrade/ ⊕
/civil-services-showcase/ ⊕    /cabinets/                    /other-isp-services/ ⊕
/installation-integration/     /generators/                  /manufacturer-certification/ ⊕
/installation-commissioning/   /generator-install/ ⊕         /referral/ ⊕
/general-site-maintenance/     /disaster-recovery/           /cell-on-wheels/ ⊕
/site-decommissioning/         /guy-tower-rod-inspections/   /faqs/ ⊕
/ebook-telecom-construction/   /ebook-energy-efficiency/     /ebook-datacomm-pro-series/
/privacy-policy/               /portfolio-horizontal-scroll/ ⊕   /test/ ⚠   /generators/
```

**Blog posts (8 + index)** — `/blog/` plus:
`/keeping-infrastructure-cool/`, `/elevating-telecom/`, `/roof-sealant-shelters/`,
`/site-analysis-permitting/`, `/enhancing-isp/`, `/wheres-the-money/`,
`/sites-done-right/`, `/shutting-down-sites/`.

> Per-page `<title>` / meta-description / H1 capture (for SEO carry-over) is a
> page-build concern and was **not** done on this asset branch — do it in Phase 4/7.

---

## 9. `next.config.mjs` guidance

Every image is local, so **no `images.remotePatterns` entry is required** — that's the
goal state. If a stray remote ref survives during page building, localize it rather
than whitelisting the host.

---

## 10. Outstanding (next phases)

- [ ] Scaffold the Next.js app (Phase 1) — this branch is assets-only.
- [ ] Wire `next/image` + the two logo strips into pages (Phase 4).
- [ ] Apply brand tokens (§3) to Tailwind/`globals.css` + `next/font` (DM Sans + Poppins).
- [ ] Capture per-page SEO metadata (Phase 7).
- [ ] Drop ebook PDFs into `public/downloads/` when provided (Phase 6).

---

## Appendix — full served-image manifest (160 files)

All served at `/images<path>` below:

```
/images/wp-content/uploads/2023/12/Jim-Updated.png
/images/wp-content/uploads/2024/01/cellsite-case-study-radio-project-IMG_2488.jpg
/images/wp-content/uploads/2024/01/cellsite-case-study-radio-project-IMG_2500.jpg
/images/wp-content/uploads/2024/01/cellsite-case-study-radio-project-IMG_2509.jpg
/images/wp-content/uploads/2024/01/cellsite-case-study-radio-project-IMG_3066.jpg
/images/wp-content/uploads/2024/03/1-case-study-cellsite-site-removal-remediation-IMG_5878.jpg
/images/wp-content/uploads/2024/03/1-cellsite-fiber-optic-regeneration-site-Foundation.jpeg
/images/wp-content/uploads/2024/03/2-case-study-cellsite-site-removal-remediation-IMG_5945.jpg
/images/wp-content/uploads/2024/03/2-cellsite-fiber-optic-regeneration-site-crane-lift.jpeg
/images/wp-content/uploads/2024/03/3-case-study-cellsite-site-removal-remediation-IMG_5957.jpg
/images/wp-content/uploads/2024/03/3-cellsite-fiber-optic-regeneration-site-building-placed.jpeg
/images/wp-content/uploads/2024/03/4-case-study-cellsite-site-removal-remediation-IMG_5889_0.jpg
/images/wp-content/uploads/2024/03/4-cellsite-fiber-optic-regeneration-site-shelter.jpeg
/images/wp-content/uploads/2024/03/5-case-study-cellsite-site-removal-remediation-IMG_0483.jpg
/images/wp-content/uploads/2024/03/5-cellsite-fiber-optic-regeneration-site-electrical-panels.jpeg
/images/wp-content/uploads/2024/03/6-case-study-cellsite-site-removal-remediation-IMG_6296-1.jpg
/images/wp-content/uploads/2024/03/case-study-cellsite-site-removal-remediation-IMG_5926.jpg
/images/wp-content/uploads/2024/03/cellsite-civil-foundation-shelter-install-before.jpeg
/images/wp-content/uploads/2024/03/cellsite-civil-foundation-shelter-install.jpeg
/images/wp-content/uploads/2024/03/cellsite-fiber-optic-regeneration-site-shelter-fenced.jpeg
/images/wp-content/uploads/2024/05/Cabinets-Portfolio-Featured-Image.png
/images/wp-content/uploads/2024/05/Generator-Portfolio-Featured-Image.png
/images/wp-content/uploads/2024/05/HVAC-Portfolio-Featured-v2.png
/images/wp-content/uploads/2024/05/ISP-Portfolio-Featured-Image.png
/images/wp-content/uploads/2024/06/Footer-Logo.png
/images/wp-content/uploads/2024/06/Main-Header-Website-Logo-Larger-Black.png
/images/wp-content/uploads/2024/06/page-texture-img.png
/images/wp-content/uploads/2024/06/section-texture-mask-4.png
/images/wp-content/uploads/2024/06/section-texture-mask-5.png
/images/wp-content/uploads/2024/09/Civil-Construction-Section.png
/images/wp-content/uploads/2024/09/Contact-Us-Icon.png
/images/wp-content/uploads/2024/09/Main-Header-Website-Logo-Larger-White.png
/images/wp-content/uploads/2024/09/Shelters-Section-Image.png
/images/wp-content/uploads/2024/09/cellsite-services-header-1920x1077-1.jpg
/images/wp-content/uploads/2024/10/ATT-Logo-Final.png
/images/wp-content/uploads/2024/10/American-Tower-Logo-Final.png
/images/wp-content/uploads/2024/10/CellSite-HQ-Full-Sky.png
/images/wp-content/uploads/2024/10/Cellsite-whoweserve-townsmunicip_760x884.jpg
/images/wp-content/uploads/2024/10/Civil-Construction-Division-v2.png
/images/wp-content/uploads/2024/10/Civil-Construction-Locations_10-24-24_Final-cutout-2.png
/images/wp-content/uploads/2024/10/Crown-Castle-Logo-Final.png
/images/wp-content/uploads/2024/10/Dish-Logo-Final.png
/images/wp-content/uploads/2024/10/Ericsson-Logo-Final-2.png
/images/wp-content/uploads/2024/10/Fujitsu-Logo-Final.png
/images/wp-content/uploads/2024/10/Guy-Anchor-Inspections.png
/images/wp-content/uploads/2024/10/Mastec-Logo-Final.png
/images/wp-content/uploads/2024/10/Nokia-Logo-Final.png
/images/wp-content/uploads/2024/10/Recycled-Concrete.png
/images/wp-content/uploads/2024/10/Who-We-Support.png
/images/wp-content/uploads/2024/10/cellsite-products-hvac2-960x1078-1.png
/images/wp-content/uploads/2024/10/cellsite-products-hvac3-960x1078-1.jpeg
/images/wp-content/uploads/2024/10/cellsite-service-sitesurvey2-960x1078-1.jpeg
/images/wp-content/uploads/2024/10/cellsite-services-guyrod2-960x1014-2.png
/images/wp-content/uploads/2024/10/cellsite-services-guyrod3-960x1079-1.jpeg
/images/wp-content/uploads/2024/10/cellsite-services-guyrod3-960x1079-2.jpeg
/images/wp-content/uploads/2024/10/cellsite-services-siteprep2-960x1079-1.png
/images/wp-content/uploads/2024/10/cellsite-services-sitesurvey-1920x1014-1.jpeg
/images/wp-content/uploads/2024/10/cellsite-services-sitesurvey-1920x1014-2.jpeg
/images/wp-content/uploads/2024/10/cellsite-services-sitesurvey3-960x1078-1.jpeg
/images/wp-content/uploads/2024/10/cellsite-team-amanda-tylee-660x880-1.jpg
/images/wp-content/uploads/2024/10/cellsite-team-mat-hennings-660x880-1.jpg
/images/wp-content/uploads/2024/10/cellsite-whoweserve-CableandInternet-760x884-1.jpg
/images/wp-content/uploads/2024/10/cellsite-whoweserve-telecomcoops-760x884-1.png
/images/wp-content/uploads/2024/10/cellsite_products_hvac-1920x1014-1.png
/images/wp-content/uploads/2024/11/Logistics_featured.jpg
/images/wp-content/uploads/2024/11/Resized_20201218_133923-1.jpeg
/images/wp-content/uploads/2024/11/Resized_20201218_133923.jpeg
/images/wp-content/uploads/2024/11/Shelters-Division-v2.png
/images/wp-content/uploads/2024/11/Sustainable-Practices-V2.png
/images/wp-content/uploads/2024/11/cellsite-products-cabinets2-960x1078-1.jpeg
/images/wp-content/uploads/2024/11/cellsite-products-cabinets3-960x1078-1.png
/images/wp-content/uploads/2024/11/cellsite-products-generator3-960x1078-1.jpg
/images/wp-content/uploads/2024/11/cellsite-products-generators-1920x1014-1.jpg
/images/wp-content/uploads/2024/11/cellsite-products-generators2-960x1079-1.jpeg
/images/wp-content/uploads/2024/11/cellsite-products-shelters-1920x1014-1.jpeg
/images/wp-content/uploads/2024/11/cellsite-products-shelters-960x1078-1.png
/images/wp-content/uploads/2024/11/cellsite-services-craning-960x1078-1.png
/images/wp-content/uploads/2024/11/cellsite-services-datacenter-1920x1014_3.jpg
/images/wp-content/uploads/2024/11/cellsite-services-datacenter2-960x1078_1.jpg
/images/wp-content/uploads/2024/11/cellsite-services-datacenter3-960x1078-1.jpg
/images/wp-content/uploads/2024/11/cellsite-services-disasterrecovery-1920x1014-1.jpeg
/images/wp-content/uploads/2024/11/cellsite-services-disasterrecovery2-960x1079-1.jpg
/images/wp-content/uploads/2024/11/cellsite-services-disasterrecovery3-960x1079-1.png
/images/wp-content/uploads/2024/11/cellsite-services-engineeringdrawings-1920x1014_0.jpeg
/images/wp-content/uploads/2024/11/cellsite-services-engineeringdrawings2-960x1079-1.jpeg
/images/wp-content/uploads/2024/11/cellsite-services-engineeringdrawings3-960x1079-1.jpeg
/images/wp-content/uploads/2024/11/cellsite-services-generalsitemaintenance-1920x1014-1.jpeg
/images/wp-content/uploads/2024/11/cellsite-services-generalsitemaintenance2-960x1078-1.jpg
/images/wp-content/uploads/2024/11/cellsite-services-generalsitemaintenance3-960x1078-1.jpg
/images/wp-content/uploads/2024/11/cellsite-services-generatorinstall-1920x1014-1.jpg
/images/wp-content/uploads/2024/11/cellsite-services-generatorinstall2-960x1078-1.jpeg
/images/wp-content/uploads/2024/11/cellsite-services-generatorinstall3-960x1078-1.jpeg
/images/wp-content/uploads/2024/11/cellsite-services-installintegration2-960x1078-1.jpg
/images/wp-content/uploads/2024/11/cellsite-services-installintegration3-960x1078-1.jpg
/images/wp-content/uploads/2024/11/cellsite-services-logistics3-960x1078-1.png
/images/wp-content/uploads/2024/11/cellsite-services-otherISP2-960x1079-1.jpeg
/images/wp-content/uploads/2024/11/cellsite-services-otherISP3-960x1079-1.jpg
/images/wp-content/uploads/2024/11/cellsite-services-otherisp-1920x1014-1.jpg
/images/wp-content/uploads/2024/11/cellsite-services-shelterinstall-1920x1014_1.jpg
/images/wp-content/uploads/2024/11/cellsite-services-shelterinstall2-960x1078-1.jpg
/images/wp-content/uploads/2024/11/cellsite-services-shelterinstall3-960x1078-1.png
/images/wp-content/uploads/2024/11/cellsite-services-sitedecom2-960x1079-1.jpeg
/images/wp-content/uploads/2024/11/cellsite-services-sitedecom3-960x1079-1.jpeg
/images/wp-content/uploads/2024/11/cellsite-services-sitedecommissioning-19200x1014-2.jpg
/images/wp-content/uploads/2024/11/cellsite-services-stagingservices-1920x1014-1-1.jpeg
/images/wp-content/uploads/2024/11/cellsite-services-stagingservices-1920x1014-1.jpeg
/images/wp-content/uploads/2024/11/cellsite-services-stagingservices3-960x1079_0.png
/images/wp-content/uploads/2024/12/0032-New-Website-Announcement-Post-Large-min.png
/images/wp-content/uploads/2025/01/0001-Elevating-Telecom-to-New-Heights-Header-Image-2.png
/images/wp-content/uploads/2025/01/0001-Elevating-Telecom-to-New-Heights-Header-Image.png
/images/wp-content/uploads/2025/01/Background-Pattern-eBook.png
/images/wp-content/uploads/2025/01/Complete-Guide-eBook.png
/images/wp-content/uploads/2025/01/eBook-Wordpress-Featured-Image.png
/images/wp-content/uploads/2025/02/0002-HVACs-Keeping-Critical-Infrastructure-Cool-Header-Image-min.png
/images/wp-content/uploads/2025/02/0003-Maximizing-Protection-with-Roof-Sealant-for-Telecom-Shelters-Header-Image.png
/images/wp-content/uploads/2025/02/Background-Pattern-eBook-Energy-Efficiency.png
/images/wp-content/uploads/2025/02/Coast-Electric-Logo-Final.png
/images/wp-content/uploads/2025/02/Four-States-Fiber-Internet-Logo-Final.png
/images/wp-content/uploads/2025/02/Glades-Electric-Cooperative-Logo-Final.png
/images/wp-content/uploads/2025/02/Guide-to-Energy-Efficiency-eBook.png
/images/wp-content/uploads/2025/02/Homepage-Video-Still-min.png
/images/wp-content/uploads/2025/02/Mountain-View-Logo-Final.png
/images/wp-content/uploads/2025/02/OEMC-Logo-Final.png
/images/wp-content/uploads/2025/02/Osage-Valley-Electric-Cooperative-Logo-Final.png
/images/wp-content/uploads/2025/02/Petit-Jean-Fiber-Logo-Final.png
/images/wp-content/uploads/2025/02/Satilla-Logo-Final.png
/images/wp-content/uploads/2025/02/Singing-River-Connect-Logo-Final.png
/images/wp-content/uploads/2025/02/Suwannee-Valley-Logo-Final.png
/images/wp-content/uploads/2025/02/eBook-Energy-Efficiency-Wordpress-Featured-Image.png
/images/wp-content/uploads/2025/03/0004-Enhancing-ISP-for-Telecom-Efficiency.png
/images/wp-content/uploads/2025/03/0005-Step-by-Step-Telecom-Site-Analysis-and-Permitting.png
/images/wp-content/uploads/2025/03/0006-Where-Is-the-Money-Going-Telecom-Investment-and-Market-Trends-Blog.png
/images/wp-content/uploads/2025/03/Farmers-FRC-Logo-Final.png
/images/wp-content/uploads/2025/03/Grady-EMC-Logo-Final.png
/images/wp-content/uploads/2025/04/0007-Telecom-Sites-Done-Right-min.png
/images/wp-content/uploads/2025/04/0008-Shutting-Down-Telecom-Sites-the-Sustainable-Way-min.png
/images/wp-content/uploads/2025/04/Verizon_After.jpg
/images/wp-content/uploads/2025/06/Cable-Management-min.png
/images/wp-content/uploads/2025/06/Datacomm-Pro-Series-Lightweight-Shelter.png
/images/wp-content/uploads/2025/06/Fixed-Up-Lightweight-Shelter-Header-Final-min-scaled.png
/images/wp-content/uploads/2025/06/HVAC-min.png
/images/wp-content/uploads/2025/06/Made-in-the-USA.png
/images/wp-content/uploads/2025/06/Power-Distribution-min.png
/images/wp-content/uploads/2025/06/Rack-Space-min.png
/images/wp-content/uploads/2025/08/Maintenance-and-Technology-Upgrades-Updated.png
/images/wp-content/uploads/2025/10/Background-Pattern-eBook-Datacomm-Pro.png
/images/wp-content/uploads/2025/10/eBook-Complete-Guide-Datacomm-Pro-Series-Featured-v2.png
/images/wp-content/uploads/2025/10/eBook-Complete-Guide-Datacomm-Pro-Series-Wordpress-Featured-Image.png
/images/wp-content/uploads/2025/11/eBook-Complete-Guide-Datacomm-Pro-Series-Thumbnail.png
/images/wp-content/uploads/2026/01/Favicon.png
/images/wp-content/uploads/2026/01/cropped-Favicon-180x180.png
/images/wp-content/uploads/2026/01/cropped-Favicon-192x192.png
/images/wp-content/uploads/2026/01/cropped-Favicon-32x32.png
/images/wp-content/uploads/2026/01/cropped-Favicon.png
/images/wp-content/uploads/2026/06/Civil-Engineering-Drawings.jpeg
/images/wp-content/uploads/2026/06/Outside-Datacomm-Pro.png
/images/wp-content/uploads/elementor/thumbs/Civil-Construction-Section-rothb2q54h1y45xu1m29c14g048bqnuqt9bvi8vaeu.png
/images/wp-content/uploads/elementor/thumbs/Civil-First-Section-Image-qxgcuzprf7b2vfzsflu55uxb8aw7tbnuv67bxwmfbo.png
/images/wp-content/uploads/elementor/thumbs/cellsite-services-siteprep2-960x1079-1-qxgcuwwaohegeb7i2sr90f0dstehkqb5r5zlm4kv3q.png
/images/wp-content/uploads/elementor/thumbs/cellsite-services-sitesurvey-1920x1014-1-qxgcuxu3l9oiqt4ff4hyuy2jnghi12odhzhc6wfxiw.jpeg
```

---

## 11. Self-hosted hero videos (added during fidelity pass)

Two Elementor background videos are **self-hosted mp4s on the live WordPress host**
(too large for the repo — 196MB / 253MB):

- `/wp-content/uploads/2024/10/Civil-Construction-Header-Video.mp4` (civil-construction hero,
  civil-services-showcase CTA band)
- `/wp-content/uploads/2024/10/Timelapse-Shelter-Shorter-Version.mp4` (shelters remanufacturing
  band, shelter-showcase CTA band, shelters-for-sale bottom band @10s)

The rebuilt pages reference the live URLs as a **temporary bridge**. ⚠ Before DNS cutover,
upload both to **Vercel Blob** and update the URLs (they only appear in the page files +
this note). Matterport tour: `my.matterport.com/show/?m=15QDm9hsrxq` (shelters group).
