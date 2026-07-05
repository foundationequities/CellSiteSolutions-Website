import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/faq-accordion";
import { VideoLightbox } from "@/components/video-lightbox";

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

const constructionDetails = [
  { spec: "2x4", copy: "Framing With OSB Sheathing Sides" },
  { spec: "Skid", copy: "Galvanized steel skid" },
  { spec: "5/16″", copy: "Cement board default exterior siding" },
  { spec: "Racks", copy: "Can accommodate 2 post racks or enclosures" },
  { spec: "Conduit", copy: "Default Communications Conduit Entrances" },
  { spec: "Generator", copy: "Dedicated Generator Conduit Entrance" },
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
  { label: "HVAC Systems", img: "2025/06/HVAC-min.png", alt: "Reinforced Lightweight Shelter HVACs" },
  {
    label: "Power Distribution",
    img: "2025/06/Power-Distribution-min.png",
    alt: "Reinforced Lightweight Shelter Power Distribution",
  },
  {
    label: "Cable Management",
    img: "2025/06/Cable-Management-min.png",
    alt: "Reinforced Lightweight Shelter Cable Management",
  },
  { label: "Rack Space", img: "2025/06/Rack-Space-min.png", alt: "Reinforced Lightweight Shelter Racking" },
];

export default function DatacommProSeriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Introducing"
        title="Datacomm Pro Series"
        lede="Ruggedized Lightweight Shelters engineered telecom-tough for companies that demand more capacity for less."
        image={`${IMG}/2026/06/Outside-Datacomm-Pro.png`}
      />

      {/* ── Intro ────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed text-muted">
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

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">Frequently Asked Questions</h2>
          <div className="mt-8">
            <FaqAccordion items={faqs} withSchema />
          </div>
        </div>
      </section>

      {/* ── Video tour ───────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Introducing</p>
          <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">
            Datacomm Pro Series Ruggedized Lightweight Shelters
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted">
            Discover the future of telecom shelter solutions with CellSite Solutions&rsquo; new
            Datacomm Pro Series Lightweight Shelter. Built with innovation, durability, and efficiency
            in mind, this shelter is designed to meet the evolving demands of modern communication
            networks.
          </p>
          <VideoLightbox
            embedUrl="https://player.vimeo.com/video/1036146605"
            label="Play Datacomm Pro Series video"
            className="group mx-auto mt-8 flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-transform hover:scale-110"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
              <path d="M8 5v14l11-7z" />
            </svg>
          </VideoLightbox>
        </div>
      </section>

      {/* ── Construction Details ─────────────────────────────────── */}
      <section className="bg-surface-dark py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Features</p>
              <h2 className="mt-2 text-3xl font-extrabold uppercase sm:text-4xl">
                Construction Details
              </h2>
            </div>
            <div className="relative h-24 w-40 shrink-0">
              <Image
                src={`${IMG}/2025/06/Made-in-the-USA.png`}
                alt="Made in the USA"
                fill
                sizes="160px"
                className="object-contain"
              />
            </div>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {constructionDetails.map((d) => (
              <div key={d.copy} className="rounded-lg border border-white/15 bg-white/5 p-6">
                <p className="text-2xl font-extrabold text-brand">{d.spec}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/85">{d.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technical Specifications ─────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Features</p>
            <h2 className="mt-2 text-3xl font-extrabold uppercase text-ink sm:text-4xl">
              Technical Specifications
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              The shelter is built on reinforced 2 x 4 framing clad internally with ½-inch FRP/OSB
              panels. Externally, it carries ½-inch wall sheathing, a ¾-inch exterior-grade plywood
              roof deck, and durable 5/16-inch cement-board siding.
            </p>
            <div className="mt-6 rounded-lg border border-border bg-[#f9f9f9] p-6">
              <h3 className="text-base font-bold uppercase text-ink">Multiple Sizes</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Available in 6 shelter sizes with 2 door configuration options—giving you the
                flexibility to choose the right fit for your site layout, access needs, and equipment
                requirements.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {specGroups.map((g) => (
              <div key={g.title} className="rounded-lg border border-border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold uppercase text-ink">{g.title}</h3>
                <dl className="mt-4 divide-y divide-border">
                  {g.rows.map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4 py-2.5 text-sm">
                      <dt className="text-muted">{k}</dt>
                      <dd className="text-right font-semibold text-ink">{v}</dd>
                    </div>
                  ))}
                </dl>
                {g.note && <p className="mt-3 text-xs italic text-muted">{g.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Components gallery ───────────────────────────────────── */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Components</p>
            <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">Interior Features</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Professional rack layout with optimized cable management and HVAC distribution. Typical
              rack configuration uses 23″ (2) post racks.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {components.map((c) => (
              <figure key={c.label} className="overflow-hidden rounded-lg bg-white shadow-sm">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={`${IMG}/${c.img}`}
                    alt={c.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-4 text-center text-sm font-bold uppercase text-ink">
                  {c.label}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
              <Image
                src={`${IMG}/2026/06/Outside-Datacomm-Pro.png`}
                alt="Datacomm Pro Series Lightweight Shelter"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
              <Image
                src={`${IMG}/2025/06/Datacomm-Pro-Series-Lightweight-Shelter.png`}
                alt="Datacomm Pro Series Lightweight Shelter exterior"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── ULTRA Series ─────────────────────────────────────────── */}
      <section className="bg-surface-dark py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Introducing</p>
          <h2 className="mt-2 text-3xl font-extrabold uppercase sm:text-4xl">
            Datacomm Pro ULTRA Series
          </h2>
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
        </div>
      </section>

      {/* ── eBook CTA ────────────────────────────────────────────── */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1fr] lg:px-8">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-lg shadow-xl">
            <Image
              src={`${IMG}/2025/11/eBook-Complete-Guide-Datacomm-Pro-Series-Thumbnail.png`}
              alt="The Complete Guide to the Datacomm Pro Series eBook"
              fill
              sizes="(max-width: 1024px) 80vw, 320px"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">Download FREE eBook</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Download our free eBook to explore the next generation of telecom shelter design. See how
              the Datacomm Pro Series combines rugged durability, lightweight efficiency, and cost
              savings over concrete shelters—making it a smarter solution for scalable, reliable
              infrastructure.
            </p>
            <Link
              href="/ebook-datacomm-pro-series/"
              className="mt-7 inline-block rounded-md bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
            >
              Download eBook
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonial ──────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Verified Results</p>
          <blockquote className="mt-5 text-2xl font-semibold leading-snug text-ink sm:text-3xl">
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
