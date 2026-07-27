import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { BgVideo } from "@/components/bg-video";
import { FaqAccordion } from "@/components/faq-accordion";
import { VideoLightbox } from "@/components/video-lightbox";
import { CountUp } from "@/components/count-up";
import { DATACOMM_HERO_YT, DATACOMM_TOUR_YT, DATACOMM_ULTRA_YT } from "@/lib/videos";

export const metadata: Metadata = {
  title: "Datacomm Pro Series",
  description:
    "The Datacomm Pro Series is a ruggedized lightweight telecom shelter engineered for more capacity for less—available in six sizes up to 23' × 36' supporting up to 50 equipment racks.",
};

const IMG = "/images/wp-content/uploads";

const faqs = [
  {
    q: "What is the Datacomm Pro Series Lightweight Shelter?",
    a: "The Datacomm Pro Series is a ruggedized lightweight telecom shelter engineered to house critical communications, fiber, networking, utility, and data infrastructure equipment. It is designed to provide high equipment capacity while reducing overall shelter weight and deployment complexity.",
  },
  {
    q: "How is a lightweight telecom shelter different from a concrete shelter?",
    a: "A lightweight telecom shelter provides similar protection for critical equipment while reducing structural weight, simplifying transportation, and often accelerating deployment. Lightweight shelters can also offer greater flexibility for site expansion and equipment growth.",
  },
  {
    q: "Can the Datacomm Pro Series be customized?",
    a: "Yes. Customers can customize rack layouts, electrical systems, HVAC configurations, security features, conduit entrances, power distribution systems, and equipment capacity to meet specific operational requirements.",
  },
  {
    q: "What industries use lightweight telecom shelters?",
    a: "Lightweight telecom shelters are commonly used by wireless carriers, fiber broadband providers, internet service providers (ISPs), utilities, edge computing operators, government agencies, public safety organizations, and data center operators.",
  },
  {
    q: "Why choose a lightweight shelter for fiber, edge computing, or telecom deployments?",
    a: "Lightweight shelters offer a combination of scalability, deployment speed, equipment density, and operational flexibility. For organizations expanding fiber networks, edge computing infrastructure, or telecommunications systems, lightweight shelters provide a cost-effective and rapidly deployable alternative to traditional shelter construction.",
  },
];

/* Live counters — values + captions transcribed from the live page outline. */
const constructionDetails: { value: number; suffix?: string; copy: string }[] = [
  { value: 2, suffix: "x4", copy: "Framing With OSB Sheathing Sides" },
  { value: 1, copy: "Galvanized steel skid" },
  { value: 5, suffix: "/16″", copy: "Cement board default exterior siding" },
  { value: 2, copy: "Can accommodate 2 post racks or enclosures" },
  { value: 4, copy: "Default Communications Conduit Entrances" },
  { value: 1, copy: "Dedicated Generator Conduit Entrance" },
];

type SpecGroup = { title: string; rows: [string, string][]; note?: string };

const specGroups: SpecGroup[] = [
  {
    title: "Structural Specifications",
    rows: [
      ["Wind Load", "150 MPH"],
      ["Ground Snow Load", "90 psf"],
      ["Seismic Zone", "Class “C”"],
      ["Fire Rating", "Class “C”"],
      ["Insulation", "Wall (R15) / Ceiling (R30)"],
      ["Ballistics Hardened Option", "Call to Discuss"],
    ],
  },
  {
    title: "Electrical Specifications",
    rows: [
      ["Standard", "200 amp Service Panel"],
      ["Upgrade Options", "Up to 800 amp"],
      ["Additional Options", "ATS / MTS / GEN PLUG / DISCONNECT / UPS"],
      ["Lighting", "4′ LED Lighting (quantity varies)"],
      ["Outlets", "4+ Outlets + Exterior GFCI"],
      ["Grounding", "Basic Halo/Option (R56/Harris) – Optional Upgrade"],
    ],
  },
  {
    title: "Rack Configurations",
    rows: [
      ["Shelter Size 12′×10′", "Up to 6 Racks"],
      ["Shelter Size 12′×16′", "Up to 8 Racks"],
      ["Shelter Size 12′×20′", "Up to 12 Racks"],
      ["Shelter Size 12′×30′", "Up to 18 Racks"],
      ["Shelter Size 12′×36′", "Up to 24 Racks"],
      ["Shelter Size 23′×36′", "Up to 50 Racks"],
    ],
  },
  {
    title: "HVAC Systems",
    rows: [
      ["Standard", "Dual 3 Ton HVACs"],
      ["Upgrade Options", "Dual 5-10 Ton HVACs"],
      ["Hot & Cold Aisle Plenum Wall Option", "Available"],
    ],
  },
  {
    title: "Interior Features",
    rows: [
      ["Cable Management", "Optimized Layout and Efficient Design"],
      ["Cabinet Space", "Up to 12-14 Lockable Cabinets, Based on Size."],
    ],
    note: "*Typical rack configuration uses 23″ (2) post racks.",
  },
  {
    title: "Warranties",
    rows: [
      ["Structural Warranty", "5 Years"],
      ["Workmanship Warranty", "5 Years"],
      ["Roof Warranty", "10 Years"],
      ["Floor Warranty", "15 Years"],
      ["HVAC Equipment", "Manufacturer Standard"],
    ],
  },
  {
    title: "Ultra Edition",
    rows: [
      ["Structural Framing", "2″×6″"],
      ["Wind Resistance", "180 MPH"],
      ["Ballistics Defense", "Enhanced Ballistics Upgrade — Standard UL 752"],
      ["Level 3", "Handguns up to .44 Magnum"],
    ],
  },
];

const components = [
  {
    label: "HVAC SYSTEMS",
    img: "2025/06/HVAC-min.png",
    alt: "Reinforced Lightweight Shelter HVACs",
    icon: (
      // air / wind
      <svg
        width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden
      >
        <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
        <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
        <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
      </svg>
    ),
  },
  {
    label: "POWER DISTRIBUTION",
    img: "2025/06/Power-Distribution-min.png",
    alt: "Reinforced Lightweight Shelter Power Distribution",
    icon: (
      // lightning bolt
      <svg
        width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    label: "CABLE MANAGEMENT",
    img: "2025/06/Cable-Management-min.png",
    alt: "Reinforced Lightweight Shelter Cable Management",
    icon: (
      // plug
      <svg
        width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden
      >
        <path d="M12 22v-5" />
        <path d="M9 8V2" />
        <path d="M15 8V2" />
        <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8z" />
      </svg>
    ),
  },
  {
    label: "RACK SPACE",
    img: "2025/06/Rack-Space-min.png",
    alt: "Reinforced Lightweight Shelter Racking",
    icon: (
      // server rack
      <svg
        width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden
      >
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <path d="M6 6h.01" />
        <path d="M6 18h.01" />
      </svg>
    ),
  },
];

/* Gallery: exterior view first, then the four component photos. */
const gallerySlides = [
  { img: "2026/06/Outside-Datacomm-Pro.png", alt: "Datacomm Pro Series Lightweight Shelter" },
  ...components.map(({ img, alt }) => ({ img, alt })),
];

/* ULTRA Series multi-layer protection breakdown images. */
const ultraLayers = [
  { img: "2026/03/Outside-Panel.png", alt: "Datacomm Pro ULTRA outside panel layer" },
  { img: "2026/03/Outside-Side-Panel.png", alt: "Datacomm Pro ULTRA outside side panel layer" },
  { img: "2026/03/Side-Panel-Layering.png", alt: "Datacomm Pro ULTRA side panel layering breakdown" },
  { img: "2026/03/Inside-Panel.png", alt: "Datacomm Pro ULTRA inside panel layer" },
];

export default function DatacommProSeriesPage() {
  return (
    <>
      <PageHero
        eyebrow="INTRODUCING"
        title="DATACOMM PRO SERIES"
        lede="RUGGEDIZED LIGHTWEIGHT SHELTERS"
        image={`${IMG}/2026/06/Outside-Datacomm-Pro.png`}
        video={{ src: DATACOMM_HERO_YT, end: 110 }}
      />

      {/* ── Intro (title block + paragraphs, as live) ─────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">INTRODUCING</p>
            <h2 className="mt-2 text-[35px] uppercase text-ink sm:text-[65px]">
              DATACOMM PRO SERIES
            </h2>
            <p className="mt-2 font-display text-lg font-medium uppercase tracking-[0.15em] text-muted">
              RUGGEDIZED LIGHTWEIGHT SHELTERS
            </p>
          </div>
          <p className="mt-10 text-base leading-relaxed text-muted">
            Introducing the Datacomm Pro Series—engineered telecom-tough for companies that demand more
            capacity for less. These shelters weigh substantially less than traditional concrete while
            still delivering the structural integrity required for critical communications and data
            infrastructure. Now available in six standard sizes up to 23&rsquo; × 36&rsquo;, which can
            support up to 50 equipment racks in a single enclosure. Lightweight, ruggedized, and a
            superior value, Datacomm Pro is exactly the type of shelter today&rsquo;s growth-minded
            telecom operators, carriers, and edge data operators need.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            For environments that demand extreme durability, CellSite Solutions also offers premium
            hardened configurations, including our ULTRA Series, which uses 2&rdquo; × 6&rdquo;
            structural framing and is engineered to withstand wind speeds up to 180 MPH along with
            higher snow-load PSI ratings for severe weather regions. In addition, our Enhanced
            Ballistics Protection upgrade increases ballistic resistance up to Level 3, providing
            hardened protection against forced entry, vandalism, and firearm threats—making Datacomm
            Pro shelters ideal for critical infrastructure, government, public safety, utilities, and
            high-risk deployments.
          </p>
        </div>
      </section>

      {/* ── FAQ toggles (no heading on live) ─────────────────────── */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FaqAccordion items={faqs} withSchema />
        </div>
      </section>

      {/* ── Video tour (dark band w/ YouTube bg video, as live) ──── */}
      <section className="relative flex min-h-[55vh] items-center overflow-hidden bg-surface-dark py-24 text-white lg:min-h-[70vh]">
        <BgVideo src={DATACOMM_TOUR_YT} start={1} end={40} overlay="bg-black/30" />
        <div className="relative mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">INTRODUCING</p>
          <h2 className="mt-2 text-[35px] sm:text-[65px]">
            Datacomm Pro Series Ruggedized Lightweight Shelters
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80">
            Discover the future of telecom shelter solutions with CellSite Solutions&rsquo; new
            Datacomm Pro Series Lightweight Shelter. Built with innovation, durability, and efficiency
            in mind, this shelter is designed to meet the evolving demands of modern communication
            networks.
          </p>
          <VideoLightbox
            embedUrl="https://www.youtube.com/embed/uH4lnFjXmHo"
            label="Play Datacomm Pro Series video"
            className="group mx-auto mt-8 flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-transform hover:scale-110"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
              <path d="M8 5v14l11-7z" />
            </svg>
          </VideoLightbox>
        </div>
      </section>

      {/* ── Construction Details (numeric counters, as live) ─────── */}
      <section className="bg-surface-dark py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Features</p>
            <h2 className="mt-2 text-[35px] sm:text-[65px]">CONSTRUCTION DETAILS</h2>
          </div>
          <div className="mt-14 grid gap-x-8 gap-y-14 text-center sm:grid-cols-2 lg:grid-cols-3">
            {constructionDetails.map((d) => (
              <div key={d.copy}>
                <p className="font-display text-[64px] font-bold leading-none text-brand sm:text-[88px]">
                  <CountUp value={d.value} suffix={d.suffix ?? ""} />
                </p>
                <p className="mx-auto mt-4 max-w-[260px] text-sm leading-relaxed text-white/85">
                  {d.copy}
                </p>
              </div>
            ))}
          </div>
          {/* Full-width Made in the USA banner below the stats row, as live */}
          <div className="mt-16">
            <Image
              src={`${IMG}/2025/06/Made-in-the-USA.png`}
              alt="Made in the USA"
              width={1053}
              height={279}
              sizes="(max-width: 1152px) 100vw, 1088px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* ── Technical Specifications (single-column accordion) ───── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Features</p>
          <h2 className="mt-2 text-[35px] text-ink sm:text-[65px]">TECHNICAL SPECIFICATIONS</h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            The shelter is built on reinforced 2 x 4 framing clad internally with ½-inch FRP/OSB
            panels. Externally, it carries ½-inch wall sheathing, a ¾-inch exterior-grade plywood
            roof deck, and durable 5/16-inch cement-board siding.
          </p>

          <div className="mt-10 divide-y divide-border rounded-lg border border-border bg-white">
            {/* Multiple Sizes folded in as the first (open) spec toggle */}
            <details open className="group">
              <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left [&::-webkit-details-marker]:hidden">
                <span className="text-base font-semibold text-ink">Multiple Sizes</span>
                <svg
                  width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5"
                  className="shrink-0 text-brand transition-transform group-open:rotate-180"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-muted">
                Available in 6 shelter sizes with 2 door configuration options—giving you the
                flexibility to choose the right fit for your site layout, access needs, and equipment
                requirements.
              </p>
            </details>
            {specGroups.map((g) => (
              <details key={g.title} className="group">
                <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left [&::-webkit-details-marker]:hidden">
                  <span className="text-base font-semibold text-ink">{g.title}</span>
                  <svg
                    width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2.5"
                    className="shrink-0 text-brand transition-transform group-open:rotate-180"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <div className="px-5 pb-5">
                  <dl className="divide-y divide-border">
                    {g.rows.map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-4 py-2.5 text-sm">
                        <dt className="text-muted">{k}</dt>
                        <dd className="text-right font-semibold text-ink">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  {g.note && <p className="mt-3 text-xs italic text-muted">{g.note}</p>}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Components gallery (5-slide slider + caption list) ───── */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Components</p>
            <h2 className="mt-2 text-[35px] text-ink sm:text-[65px]">Interior Features</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Professional rack layout with optimized cable management and HVAC distribution. Typical
              rack configuration uses 23″ (2) post racks.
            </p>
          </div>
          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.5fr_1fr]">
            {/* CSS cross-fade slideshow: exterior first, then the 4 component photos */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-white shadow-sm">
              <style>{`
                @keyframes dps-gallery-fade {
                  0% { opacity: 0; }
                  3% { opacity: 1; }
                  20% { opacity: 1; }
                  25% { opacity: 0; }
                  100% { opacity: 0; }
                }
                .dps-gallery-slide {
                  opacity: 0;
                  animation: dps-gallery-fade 25s linear infinite;
                }
              `}</style>
              {gallerySlides.map((s, i) => (
                <div
                  key={s.img}
                  className="dps-gallery-slide absolute inset-0"
                  style={{ animationDelay: `${i * 5}s` }}
                >
                  <Image
                    src={`${IMG}/${s.img}`}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
            {/* Icon caption list beside the gallery */}
            <ul className="space-y-6">
              {components.map((c) => (
                <li key={c.label} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    {c.icon}
                  </span>
                  <span className="font-display text-lg font-medium text-ink">{c.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── ULTRA Series (layer images LEFT + copy, as live) ─────── */}
      <section className="relative overflow-hidden bg-surface-dark py-20 text-white">
        <BgVideo src={DATACOMM_ULTRA_YT} overlay="bg-black/30" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* Multi-layer protection breakdown images */}
          <div className="grid grid-cols-2 gap-4">
            {ultraLayers.map((l) => (
              <div key={l.img} className="relative aspect-square overflow-hidden rounded-lg bg-white">
                <Image
                  src={`${IMG}/${l.img}`}
                  alt={l.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Introducing</p>
            <h2 className="mt-2 text-[35px] sm:text-[65px]">Datacomm Pro ULTRA Series</h2>
            <p className="mt-5 text-base leading-relaxed text-white/80">
              When conditions are extreme, your infrastructure can&rsquo;t afford weak links. Introducing
              CellSite Solutions Datacomm Pro ULTRA Series Shelters which are engineered for the toughest
              environments—featuring 2&rdquo; × 6&rdquo; structural framing, wind resistance up to 180
              MPH, and higher snow-load ratings for severe weather regions.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/80">
              Need even more protection? Our Enhanced Ballistics Protection upgrade delivers up to Level 3
              resistance against forced entry, vandalism, and firearm threats—making it the ideal
              solution for critical infrastructure, government, public safety, utilities, and high-risk
              deployments. Built to endure. Built to protect. Built for when failure isn&rsquo;t an
              option.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/80">
              See the images on the left for a detailed breakdown of the multi-layer protection system
              built into the Datacomm Pro ULTRA shelter.
            </p>
          </div>
        </div>
      </section>

      {/* ── eBook CTA ────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1fr] lg:px-8">
          <div className="group relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden">
            <Image
              src={`${IMG}/2025/11/eBook-Complete-Guide-Datacomm-Pro-Series-Thumbnail.png`}
              alt="The Complete Guide to the Datacomm Pro Series eBook"
              fill
              sizes="(max-width: 1024px) 80vw, 320px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div>
            <h2 className="text-[35px] text-ink sm:text-[65px]">Download FREE eBook</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Download our free eBook to explore the next generation of telecom shelter design. See how
              the Datacomm Pro Series combines rugged durability, lightweight efficiency, and cost
              savings over concrete shelters—making it a smarter solution for scalable, reliable
              infrastructure.
            </p>
            <Link
              href="/ebook-datacomm-pro-series/"
              className="mt-7 inline-block rounded-md bg-brand px-6 py-3 font-display text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
            >
              Download eBook
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonial ──────────────────────────────────────────── */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Verified Results</p>
          <blockquote className="mt-5 font-display text-[28px] font-medium leading-snug text-ink sm:text-[36px]">
            &ldquo;Finally, a shelter that&rsquo;s designed for tomorrow. Great design, great
            craftsmanship, and great value. Very happy so far and definitely recommend.&rdquo;
          </blockquote>
          <p className="mt-6 font-bold text-ink">Jay Hanke</p>
          <p className="text-sm text-muted">CEO, South Front Networks</p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
