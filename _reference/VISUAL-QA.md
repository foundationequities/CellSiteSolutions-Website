# Visual QA — Draft (Vercel) vs Live WordPress Site

_Method: the deployed draft is built from this exact repo, so all 21 menu pages were rendered
locally at 1440px / 1280px / 390px (63 captures) and compared by five analysis agents against
the live site's actual markup, Elementor CSS rules (font sizes, paddings, backgrounds,
min-heights), media settings, and content outlines. Excluded by owner instruction: the two-row
scrolling logo marquee (accepted deviation), contact/ebook form functionality (final stage)._

_Finding of note: the **live footer is white** (`#FFFFFF` on the elementor footer template), so
the draft's white footer **matches live** — no deviation._

---

## GLOBAL FIXES (each fixes many pages at once)

| # | Item | Live | Draft | Severity | Fix |
|---|---|---|---|---|---|
| G1 | Heading scale | Hero H1 ~85–103px uppercase; section H2 65px; sub-H2 55–71px (35px mobile) | H1 45px, H2 32–40px (~60% of live) | High | Raise the shared heading scale: PageHero H1 → `text-[40px] sm:text-[64px] lg:text-[103px] uppercase`; section H2 pattern → `text-[35px] sm:text-[65px]` (per-page tuning where live differs) |
| G2 | Page-hero backgrounds | Every service/product hero has a full-bleed photo (or video) + radial dark overlay | Many heroes flat black | High | Wire each page's live hero image (all already localized) into PageHero; add radial-gradient overlay option |
| G3 | Hero eyebrow vs breadcrumb | Red eyebrow tagline above H1 (e.g. "Building the Backbone of Your Network"); no breadcrumb | Gray "HOME / …" breadcrumb | Low-Med | PageHero: replace breadcrumb with red uppercase eyebrow (site-wide switch) |
| G4 | Full-bleed photo bands | Mid-page "Why Choose Us"-style bands are tall (~889px) photo backgrounds + 40% overlay + overlaid content | Folded into flat white/gray text sections | High | Add a shared `PhotoBand` section component; apply per page (see per-page rows) |
| G5 | CTA "READY TO TALK?" band | Text left / button right; Contact-Us icon watermark at center-right on the red | Centered stack, flat red | Med | Rework `cta-band.tsx`: 2-col layout + `Contact-Us-Icon.png` watermark (fixes every page) |
| G6 | Accordions vs cards | Live uses collapsed toggle accordions (clients, pillars, spec groups) | Draft renders always-open card grids | Med | Reuse FaqAccordion styling for those blocks (about-us clients, sustainability pillars, datacomm specs) |
| G7 | 2-col image+text service sections | Text beside rounded portrait photo (`…2`/`…3` images) | Several sections text-only/centered, images dropped or misplaced | High | Restore the live 2-col layouts with the correct localized image per section (mapping in per-page rows) |
| G8 | Stats/counters | Big animated counters (120px+) with exact values | Some missing values entirely (civil 191/95/76/26), some too small | High | Add counter values + enlarge (CountUp exists) |
| G9 | Scroll animations | fadeInUp entrance on titles/images | ScrollReveal exists but sections render statically in places | Low | Confirm ScrollReveal applies on all pages (it observes `main section` — verify after other DOM changes) |
| G10 | Texture backgrounds | `section-texture-mask-4.png` / `page-texture-img.png` behind quote/FAQ bands (white, subtle) | Flat white or wrong dark/red bands | Med | Add texture backgrounds; convert wrongly-dark quote bands to white+texture (who-we-serve, sustainable-practices, homepage CEO quote) |

---

## HOMEPAGE

| # | Section/element | Live (WordPress) | Draft | Severity | Proposed fix |
|---|---|---|---|---|---|
| 1 | Hero height + tagline | Hero `min-height:1280px`; tagline 85px/80px bold uppercase (56 tablet / 40 mobile); overlay opacity 0.1 | Hero ~870px; tagline 45px; overlay 20% | High | `lg:min-h-[1280px]`; tagline `text-[40px] sm:text-[56px] lg:text-[85px] lg:leading-[80px] font-bold`; overlay `bg-black/10` |
| 2 | Mobile hero | Tall, video plays on mobile, 40px tagline centered | Collapses to ~280px; tagline crowds header | High | Fix mobile min-height enforcement; 40px tagline |
| 3 | 15-years band | "15" 225px; "YEARS" 40px; headline 70px with animated rotating "ONE TEAM./DREAM." | 96px / 24px / static 40px | High | Scale up + add rotating-word animation |
| 4 | Top nav structure | `Who We Are ▾` (Who We Serve, Sustainable Practices, Careers, Blog), `Shelters ▾`, `Civil Construction ▾`, `Contact Us` | "Shelters & Products", "Installation & Services", Blog at top level | High | Rename/regroup nav to live IA |
| 5 | Section heading scale | 71/65/60/55px H2s; 47px card overlays | 28–45px | High | Per-section px match (see G1) |
| 6 | Header logo + quote button | Logo 75px tall; REQUEST QUOTE outline/bordered style, hidden on mobile | Logo 40–44px; solid red button | Med | `h-[60px] lg:h-[75px]`; outline button style |
| 7 | Civil section bottom | Red Learn More button + overlapping 2-image collage | Ends at 4 cards | Med | Add button + offset collage |
| 8 | Stats band | Numbers ~89px white; labels BLACK on red | 48–60px; labels white | Med | Enlarge; labels `text-black` |
| 9 | CEO quote band | White bg + texture-mask image, quote 55px | Flat dark, 28–36px | Med | White + texture + 55px |
| 10 | Footer columns | Logo → Address → Say Hello → Site Map → **Newsletter (subscribe form)**; `Footer-Logo.png` | Different order; Newsletter missing; black logo | Med | Reorder; add Newsletter column (form wired later); footer logo file |
| 11 | FAQ/civil-card titles | FAQ questions 20px; civil column titles 25px | 16px / 20px | Low | Bump sizes |

## ABOUT-US
| # | Element | Live | Draft | Sev | Fix |
|---|---|---|---|---|---|
| 1 | Hero bg | HQ/sky photo (`CellSite-HQ-Full-Sky.png`) | Flat black | High | Add photo + overlay |
| 2 | Core Philosophy band | Photo bg `Recycled-Concrete.png` | Plain white | High | Photo band |
| 3 | Clients blocks | Collapsed accordions w/ inline links | Open 2×2 cards | Med | Accordion + links |
| 4 | Clients Learn More | Button → /who-we-serve | Missing | Med | Add |
| 5 | CTA band artwork | Contact-Us icon watermark | Flat red | Low | G5 |
| 6 | Kicker casing | Mixed case ("Frequently Asked Questions") | ALL CAPS | Low | Match live casing per kicker |
| 7 | FAQ texture | Subtle page texture | Flat white | Low | G10 |
| 8 | Hero eyebrow | "ABOUT US" kicker | Breadcrumb | Low | G3 |

## WHO-WE-SERVE
| 1 | Partner cards | Auto-fading photo slider (3 portrait photos + overlaid text) | 3 static text cards | High | Photo carousel/cards |
| 2 | Hook You Up band | Tall photo bg band | Short flat black | High | Photo band |
| 3 | Hook You Up button | None | Extra button added | Med | Remove |
| 4 | Quote band | White + texture, dark text | Red/white merging into CTA | Med | White + texture |
| 5 | Hero title | Stacked 2 lines + giant scrolling ghost words HELP/SUPPORT | Single line | Med | Stack + bg marquee words |
| 6 | Trio blocks | Plain text columns | Heavy bordered cards | Low | Lighten |

## SUSTAINABLE-PRACTICES
| 1 | Keep A Good Thing band | Field-photo bg | Plain white | High | Photo band |
| 2 | 4 pillars | Collapsed accordions | Open cards | Med | Accordion |
| 3 | Quote band | White + texture | Black band | Med | White + texture |
| 4 | eBook CTA | Single button → landing page | Inline form | Low | Button-only (or keep) |
| 5 | Hero title | Stacked 2 lines | One line | Low | Stack |
| 6 | Textures | Hero/FAQ textures | Flat | Low | G10 |

## CAREERS
| 1 | Job listings | Paylocity job-board iframe (core content) | Missing entirely | High | Embed (lazy) |
| 2 | CTA band | Not present | Added | Med | Remove |
| 3 | Eyebrow | "Apply Today" kicker | Breadcrumb | Low | G3 |
| 4 | Body width | Standard content width | Narrow column | Low | Widen |

## BLOG
| 1 | Hero | None on live | Invented H1 + tagline | High | Remove invented copy/hero |
| 2 | List layout | Stacked full-width excerpt rows | 3-col card grid | High | Stacked list |
| 3 | Share row | Twitter/FB/email/copy icons per post | None | Med | Add |
| 4 | CTA band | Not present | Added | Med | Remove |
| 5 | Read More | Mixed-case text link | Uppercase red | Low | Match |
| 6 | Date | Plain meta | Red uppercase | Low | Match |

## SHELTERS
| 1 | Equipment tiles | 4 photo-background portfolio tiles | Plain white cards | High | Image tiles |
| 2 | Remanufacturing layout | Matterport viewer LEFT / text RIGHT 50-50 | Text-only + floating play button | High | 2-col with Matterport panel |
| 3 | Equipment Shelters row | Image LEFT / text RIGHT | Reversed | Med | Swap |
| 4 | FAQ intro | Intro paragraph under FAQ H2 | Moved to hero | Med | Move back |
| 5 | Wireless Providers | Learn More button after intro | Missing | Med | Add |
| 6 | Hero eyebrow | Red subtitle, no breadcrumb | Breadcrumb | Low | G3 |
| 7 | Remanufactured vs New | Open columns + icon dividers | Bordered cards | Low | Open columns + icons |

## TELECOM-SHELTERS
| 1 | What's in Stock | Collage image LEFT / text RIGHT | Image missing, centered text | High | 2-col + image |
| 2 | TELECOM SHELTERS band | Photo bg, centered H3, 2-col paragraphs | Flat gray, 1-col | Med | Photo band + 2-col |
| 3 | Largest Selection | Matterport viewer in right column | Empty column + invented button | Med | Matterport panel |
| 4 | Hero | Warehouse collage bg, centered narrow title | Different photo, left title, breadcrumb | Low | Match live |

## DATACOMM-PRO-SERIES
| 1 | Construction Details | Numeric stat counters (2x4, 1, 5/16", 2, 4, 1) | Invented card titles | High | Counters, live captions |
| 2 | Tech Specs | Collapsible accordion, first open | Open 2-col cards | Med | Accordion |
| 3 | Components gallery | 5-slide slider + icon caption list | 4 static tiles + separate banner | Med | Slider + icons |
| 4 | ULTRA Series | Media on left + full copy | Text alone, sentence omitted | Med | Restore |
| 5 | FAQ heading | None | Added big H2 | Low | Remove |
| 6 | Intro title block | INTRODUCING/H1/subtitle repeated below hero | Missing | Low | Add |
| 7 | Eyebrow + USA badge | Eyebrow; wide Made-in-USA banner | Breadcrumb; small floated badge | Low | Match |

## SHELTER-SHOWCASE
| 1 | Photo side | Photo LEFT on every row | Alternating | High | All-left |
| 2 | Imageless rows | 4 rows have 9–17-photo slideshows | Empty columns | High | Add gallery lead images |
| 3 | Image pairing | Per-project galleries | 3 rows mis-paired | High | Re-map |
| 4 | Page opening | "Customer Types" jump-nav tiles over video; no H1 hero | Invented hero | High | Jump-nav section, live copy |
| 5 | Verizon | One row w/ before/after cross-fade | Two separate blocks | Med | Collapse |
| 6 | Media richness | Auto-cycling slideshows per row | Single static image | Med | Cross-fade slideshows |
| 7 | Tour row | Matterport panel as media | Text + button | Med | Panel |
| 8 | CTA band | Red + icon | Black on this page | Med | Shared red band |

## HVAC-UNITS
| 1 | Hvac Importance | Full photo band (~889px) | Small subheading in column | High | Photo band |
| 2 | Reliability | 2-col text+image (hvac3) | Centered text only | High | 2-col |
| 3 | Find Your Fit | 2-col text+image (hvac2) | Centered text only | High | 2-col |
| 4 | Hero H1 | UPPERCASE ~103px narrow centered | 45px title-case left | Med | G1 |
| 5 | H2s | UPPERCASE 65px | 40px | Med | G1 |
| 6 | CTA band | 2-col + icon | Centered flat | Med | G5 |
| 7 | Find Your Fit bg | White | Gray | Low | White |

## GENERATORS
| 1 | Available Styles | 2-col: image slideshow left, stacked bold-lead paragraphs right | Heading + 3 cards, no image | High | 2-col + images (2 Generac PNGs need download) |
| 2 | Power Up | 2-col text+image (generators2) | Centered text | High | 2-col |
| 3 | Wide Selection | Photo band ~889px | Short dark band | Med | Photo band |
| 4-6 | H1/H2s/CTA | as G1/G5 | — | Med | Global |

## CABINETS
| 1 | Security Pays image | cabinets2 image (contain) | Broken/blank area | High | Fix + correct source |
| 2 | Cabinet Solutions | Own photo band (Resized_20201218 photo) | Merged into column | High | Photo band |
| 3 | Hero bg | Resized_20201218 warehouse photo | Wrong photo | High | Swap |
| 4 | Available Styles | 2-col image LEFT + stacked styles | Cards, no image, gray | High | 2-col |
| 5-6 | Typography/CTA | as G1/G5 | — | Med | Global |

## CONTACT-US
| 1 | Header treatment | No dark hero; red eyebrow + BLACK 65px uppercase H1 in left column of form section | Black band + separate section | High | Restructure |
| 2 | Layout | 50/50; form directly on white beside H1 | 1fr/1.3fr; gray card; below hero | High | Restructure |
| 3 | Info block | Red icon list (clock/pin/mail/phone); only "OFFICE HOURS" heading | Extra headings, no icons | Med | Icon list |
| 4 | Form labels | Visible labels + First/Last sublabels | Placeholder-only | Med | Add labels (visual) |
| 5 | Eyebrow | Red "Contact Us" | Breadcrumb | Low | G3 |

## INSTALLATION-INTEGRATION
| 1 | Hero bg | Maintenance-and-Technology photo + radial overlay | Flat black | High | G2 |
| 2 | ISP EXPERTISE | Own photo band + content card | Merged into white section | High | Photo band |
| 3 | Details section image | installintegration2 portrait | Missing/wrong | Med | Swap |
| 4 | Integrated Team | 2-col with rack photo | Centered text | Med | 2-col |
| 5 | ISP list | 12 single-col items in overlay card | 11 items 2-col | Low | Optional strict match |

## CIVIL-CONSTRUCTION
| 1 | Coast to Coast counters | 191 / 95 / 76 / 26 animated 120px numbers | Labels only, NO numbers | High | Add values + CountUp |
| 2 | We Do It All stat | "80's of civil projects" odometer | Missing | Med | Add |
| 3 | Hero eyebrow | Tagline eyebrow | Breadcrumb | Med | G3 |
| 4 | FAQ intro | Paragraph under FAQ H2 | Moved to hero | Med | Move back |
| 5 | Learn More links | 12 total | 5 missing | Med | Add links |
| 6 | Projects CTA | None | Invented button | Low | Remove |
| 7 | Project cards | Link to portfolio pages | Unlinked | Low | Link |
| 8 | Hero video overlay | Radial dark treatment | Flat | Low | Overlay |

## INSTALLATION-COMMISSIONING / GENERAL-SITE-MAINTENANCE / SITE-DECOMMISSIONING (shared template)
| 1 | Hero bg | Page photo + radial overlay | Flat black | High | G2 |
| 2 | WHY CHOOSE US | Own photo band + card | Folded into white section | High | Photo band |
| 3 | Section-2 image | `…2` portrait | Uses `…3` image | Med | Swap |
| 4 | Services section | 2-col `…3` image + icon list | 3-col cards, no image | Med | 2-col |

## GUY-TOWER-ROD-INSPECTIONS
| 1 | Hero bg | sitesurvey photo | Flat black | High | G2 |
| 2 | Support Lower Costs | 2-col + guyrod2 photo (offset card) | Text only | High | 2-col |
| 3 | why to choose us | Texture parallax band + guyrod3 photo | Plain white | Med | Band + photo |
| 4 | How We Work | 5 plain descriptions, no titles | Invented numbered titles | Med | Remove invented titles |

## DISASTER-RECOVERY
| 1 | Hero bg | disasterrecovery photo | Flat black | High | G2 |
| 2 | Before/after | Both photos + captions | Before missing; captions missing; after misplaced | High | Restore pairing + captions |
| 3 | Fast Response | Own photo band + card | Folded into white section | High | Photo band |
| 4 | No Sitting Out | 2-col + after photo | Centered text | Med | 2-col |
