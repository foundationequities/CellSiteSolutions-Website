import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/faq-accordion";

export const metadata: Metadata = {
  title: "Civil Construction",
  description:
    "CellSite Solutions delivers turnkey telecom civil construction services—site surveys, preparation, shelter installation, grounding, power systems, maintenance, and decommissioning.",
};

const IMG = "/images/wp-content/uploads";

const faqs = [
  {
    q: "What is telecom civil construction?",
    a: "Telecom civil construction involves building and preparing the physical infrastructure required for telecommunications networks. This includes site surveys, grading, foundations, access roads, grounding systems, utility connections, shelter installations, fencing, and ongoing site maintenance.",
  },
  {
    q: "What services are included in telecom site development?",
    a: "Telecom site development typically includes site surveys, engineering, permitting support, site preparation, concrete foundations, trenching, conduit installation, grounding, shelter placement, power connectivity, fencing, and final site commissioning.",
  },
  {
    q: "How long does it take to build a telecom site?",
    a: "Project timelines vary based on site conditions, permitting requirements, utility availability, and project scope. A telecom site can take anywhere from several weeks to several months from initial planning through final equipment installation.",
  },
  {
    q: "What telecom site maintenance services are typically required?",
    a: "Routine maintenance may include vegetation management, fence repairs, grounding inspections, access road maintenance, equipment support, electrical repairs, and site restoration to keep infrastructure operating safely and efficiently.",
  },
  {
    q: "What is telecom site decommissioning?",
    a: "Telecom site decommissioning is the process of removing shelters, generators, towers, equipment, and supporting infrastructure when a site reaches the end of its lifecycle. The site is then restored according to project and landowner requirements.",
  },
];

const process = [
  "Site Survey",
  "Site Preparation & Development",
  "Site Build & Shelter Placement",
  "Craning & Logistics",
  "General Site Maintenance",
];

const installServices = [
  {
    title: "Site Survey",
    href: "/site-survey/",
    body: [
      "During a site survey, we assess the site to understand what we are dealing with and create an optimal plan. We look at site topography, geology, weather trends, utilities, and more to help you choose the best options for your project.",
    ],
  },
  {
    title: "Engineering Drawings",
    href: "/engineering-drawings/",
    body: [
      "Engineering documents are essential for documenting and communicating your site plan to various vendors and civil agencies. Both during an initial build and when adding to or modifying a site, quality drawings can speed approvals and even the build itself.",
      "Our engineers will draft the layout and buildings on your site to show structural soundness, placement of materials, and compliance with local building codes. We offer both OSP and ISP drawings to document your whole investment.",
    ],
  },
  {
    title: "Backup Power",
    href: null,
    body: [
      "In case of emergency power outages, CellSite Solutions can install a battery backup system on your site. A backup system is compact and self-contained. The batteries collect their charge from your existing power system, switching on only when grid power goes down. Batteries can last up to several hours, giving you ample time to restore service.",
      "You can rely on CellSite for all aspects of backup power service. We have the equipment, the logistics, and the skilled technicians ready to leap into action with a single call. We are able to quickly determine the best solution and get it installed so service is restored.",
    ],
  },
  {
    title: "Generator Install",
    href: "/generator-install/",
    body: [
      "Nobody has to tell you that disruptions to your company's power lines can cause major problems for business—but the good news is you can keep those disruptions from happening. Thanks to backup power solutions from CellSite, your business doesn't have to be at the mercy of thunderstorms or unexplained power outages. With one of our commercial generators, you have a way to keep operations running smoothly—no matter what kind of power problems occur.",
    ],
  },
  {
    title: "Data Center (MEC)",
    href: "/data-center-mec/",
    body: [
      "The growing use of internet services, from apps to connected appliances on the internet-of-things, is rapidly increasing the need for bandwidth in increasingly remote areas. Multi-access edge computing (MEC) brings technology resources closer to the end user. Data is processed and stored at the network's edge, provisioning faster connections with no lag. MEC enables fast streaming, even with multiple connections in the same household.",
      "Cell tower sites are attractive locations for edge data centers, given their placement on existing telecom networks. Shelters are thought to be the optimal storage location on tower sites. CellSite Solutions can add MEC to any existing or new shelter, boosting your capabilities and improving service for your customers.",
    ],
  },
];

const ourServices = [
  "On-Site Maintenance",
  "Shelter Pads",
  "Shelter Installs",
  "Compound Fencing",
  "Generator Services",
  "Site Grounding",
  "Trenching Conduit",
  "Power Connectivity",
  "Crane Offloads",
  "Access Roads",
];

const coastStats = ["Decommissioned sites", "Sites Maintained", "Anchor Digs", "Sites Built"];

const projects = [
  "Fiber Optic Regeneration Site",
  "Civil Construction & Shelter Install",
  "Site Decommissioning",
  "Proprietary Two Way Radio Project",
];

export default function CivilConstructionPage() {
  return (
    <>
      <PageHero
        eyebrow="Laying the Foundation for Success"
        title="Civil Construction"
        lede="Telecom civil construction creates the physical infrastructure required to support wireless, fiber, utility, and broadband networks. From site surveys and site preparation to shelter installation, grounding, power systems, maintenance, and decommissioning, CellSite Solutions delivers turnkey telecom construction services that help operators deploy, maintain, and expand critical communications infrastructure."
      />

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Frequently Asked Questions
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">Civil Construction</h2>
          <div className="mt-8">
            <FaqAccordion items={faqs} withSchema />
          </div>
        </div>
      </section>

      {/* ── From start to finish ──────────────────────────────────── */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={`${IMG}/elementor/thumbs/Civil-First-Section-Image-qxgcuzprf7b2vfzsflu55uxb8aw7tbnuv67bxwmfbo.png`}
              alt="Telecom Shelter Placement from Crane"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-extrabold text-ink">
              We create infrastructure installation-ready telecom sites
            </h3>
            <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-brand">
              The Process
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">From Start To Finish</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              From initial site planning and design to telecom construction and all the way to final
              execution and installation of new infrastructure, CellSite Solutions offers the civil
              construction services you need to create a final, usable, finished telecom site.
            </p>
            <ol className="mt-6 space-y-3">
              {process.map((step, i) => (
                <li key={step} className="flex items-center gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-semibold text-ink">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── We do it all ──────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">All In One</p>
            <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">We Do It All</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              No other company offers the breadth of telecom site civil services that CellSite
              Solutions does. We handle everything it takes to prepare your site, install and maintain
              your equipment, and even decommission with full restoration when your project ends.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <Image
                src={`${IMG}/elementor/thumbs/cellsite-services-siteprep2-960x1079-1-qxgcuwwaohegeb7i2sr90f0dstehkqb5r5zlm4kv3q.png`}
                alt="CellSite Telecom Shelter Site"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <Image
                src={`${IMG}/elementor/thumbs/cellsite-services-sitesurvey-1920x1014-1-qxgcuxu3l9oiqt4ff4hyuy2jnghi12odhzhc6wfxiw.jpeg`}
                alt="Site Survey CellSite Solutions"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Site installation services ────────────────────────────── */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">The How</p>
            <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">
              Site Installation Services
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Once you&rsquo;ve selected the right shelter, CellSite Solutions can complete every
              aspect of shelter installation and commissioning. We&rsquo;ll prep your site for the new
              structure and make sure all connections made and regulations met.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {installServices.map((s) => (
              <div key={s.title} className="rounded-lg border border-border bg-white p-7 shadow-sm">
                <h3 className="text-xl font-bold uppercase text-ink">{s.title}</h3>
                {s.body.map((p, i) => (
                  <p key={i} className="mt-3 text-sm leading-relaxed text-muted">
                    {p}
                  </p>
                ))}
                {s.href && (
                  <Link
                    href={s.href}
                    className="mt-5 inline-block text-sm font-bold uppercase tracking-wide text-brand hover:text-brand-dark"
                  >
                    Learn More &rsaquo;
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Site maintenance ──────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Supporting Your Sites
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">Site Maintenance</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              The overall appearance of your site makes an important impression on both neighbors and
              potential investors. Even more important, site upkeep can extend the life of your
              equipment by maintaining proper surroundings. Something as simple as removing brush can
              prevent on-site pests, while fencing repair keeps other kinds of unwanted visitors away.
              When you need upgrades to your access road or compound block grading, CellSite can
              provide routine and emergency maintenance.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold uppercase text-ink">Site Maintenance</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                CellSite maintenance is crucial to the ongoing protection of your equipment. To keep
                your site in the best possible shape, consider some of the following telecom
                maintenance services.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {[
                  "Weed remediation",
                  "Fence repairs and tensioning",
                  "New compound block grading",
                  "Access road maintenance",
                  "Grounding deficiencies",
                ].map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {it}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Our combined network includes every kind of professional you need to keep your site in
                excellent shape. We have certified electricians, carpenters, roofers, landscapers, and
                more ready to serve you.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold uppercase text-ink">ISP Services</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                There&rsquo;s always something: a floor to replace or an outlet to repair, or an
                upgrade to your gear that requires more rack space. CellSite Solutions is your partner
                for regular ISP maintenance.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                CellSite Solutions can diagnose and replace any broken or damaged ISP components. From
                upgrading your technology stack to replacing flooring and cable trays, we have the
                skills and people to take care of it. Whatever your operation needs to reach the next
                level, we can have it done before you miss a beat.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {[
                  "Equipment Upgrades",
                  "Wiring",
                  "Floor Installation",
                  "Wall Repair",
                  "Painting",
                ].map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold uppercase text-ink">Disaster Recovery</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Weather and other natural disasters can make an impact with little notice. Luckily, so
                can we. Call CellSite Solutions to restore service and repair or replace broken
                equipment before your customers notice the outage. When disaster strikes, you have two
                immediate concerns as a telecom site owner and operator: will we be able to maintain
                service, and, if not, how quickly can we get up and running again? CellSite Solutions
                has the answers you want to hear in either case. When bad weather or accidents damage
                your equipment, we can supply backup equipment and a permanent repair—quickly and
                efficiently.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                We have a huge inventory of backup power solutions, including commercial generators and
                battery solutions. If you sustain tower damage we can have a cell-on-wheels (COW) on
                site without delay thanks to our transportation network. Best of all, CellSite can
                supply all the restoration services you need; no other vendors needed.
              </p>
              <Link
                href="/disaster-recovery/"
                className="mt-4 inline-block text-sm font-bold uppercase tracking-wide text-brand hover:text-brand-dark"
              >
                Learn More &rsaquo;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── eBook ─────────────────────────────────────────────────── */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1fr] lg:px-8">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-lg shadow-xl">
            <Image
              src={`${IMG}/2025/01/Complete-Guide-eBook.png`}
              alt="The Complete Guide to Telecom Shelter Construction"
              fill
              sizes="(max-width: 1024px) 80vw, 320px"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">Download FREE eBook</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Telecom shelter construction involves more than just building a structure from the ground
              up; it integrates engineering expertise, meticulous planning, and skilled installation to
              create a dependable foundation for modern communications. Whether you&rsquo;re a telecom
              professional or simply curious about the process, this resource offers valuable insights.
            </p>
            <Link
              href="/ebook-telecom-construction/"
              className="mt-7 inline-block rounded-md bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
            >
              Download eBook
            </Link>
          </div>
        </div>
      </section>

      {/* ── Site decommissioning ──────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Make Space For What&rsquo;s Next
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">Site Decommissioning</h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            CellSite can offer exclusive turn-key, decommissioning services including site analysis,
            end-to-end project management, equipment demolition, removal and disposal to help you
            streamline the entire decommission process.
          </p>
          <Link
            href="/site-decommissioning/"
            className="mt-7 inline-block rounded-md bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* ── Guy anchor inspections ────────────────────────────────── */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={`${IMG}/2024/10/Guy-Anchor-Inspections.png`}
              alt="Guy Anchor Inspections"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Dig-to-Block</p>
            <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">
              Guy Anchor Inspections
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Telecommunication tower sites implement safety procedures to maintain structural
              integrity, particularly regarding guy anchor rods. Without proper maintenance, these
              rods can suffer from galvanic corrosion, leading to potential tower failure.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              CellSite Solutions offers anchor rod protection and cost-effective inspections to help
              prevent such failures. Regular inspections not only extend the lifespan of your guyed
              tower but also save money by identifying minor issues early, allowing for timely repairs
              before they escalate into costly damage.
            </p>
            <h3 className="mt-8 text-lg font-bold uppercase text-ink">Services Offered</h3>
            <dl className="mt-4 space-y-4">
              {[
                ["Cleaning", "Our crew carefully excavates and cleans the guy anchor shafts to inspect for damage and corrosion."],
                ["Measurements", "We take measurements of the shaft's overall dimensions to report any cross-sectional loss."],
                ["Coating", "Our crews coat the anchor shaft with Epoxy Mastic to prevent future corrosion."],
                ["Major Loss", "Major loss (over 50%) of an anchor shaft is documented and site technicians are notified."],
                ["Safety and Procedures", "Temporary safety procedures and methods may need to be put in place until crews can make repairs."],
              ].map(([term, def]) => (
                <div key={term}>
                  <dt className="text-sm font-bold uppercase text-ink">{term}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted">{def}</dd>
                </div>
              ))}
            </dl>
            <Link
              href="/guy-tower-rod-inspections/"
              className="mt-6 inline-block text-sm font-bold uppercase tracking-wide text-brand hover:text-brand-dark"
            >
              Learn More &rsaquo;
            </Link>
          </div>
        </div>
      </section>

      {/* ── Our services ──────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">What We Offer</p>
            <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">Our Services</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              The telecommunications industry is more complex than ever. Telecom sites call for many
              different factors and require comprehensive installation, much of which you cannot handle
              in-house. This is especially true if you need fast service. Our talented installation
              experts at CellSite Solutions offer telecom shelter installation and site commissioning
              services.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We work from the ground up—building structures and leaving you with a complete project
              that is ready to go. We are comfortable working with all of the top-brand products and
              can complete projects even on rough terrain.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              No need to coordinate vendors and communicate information across teams. CellSite
              Solutions offers comprehensive installation services, handling everything from the ground
              up—and quite a few things under it.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {ourServices.map((s) => (
              <li
                key={s}
                className="flex items-center gap-3 rounded-lg border border-border bg-white p-4 shadow-sm"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-brand" />
                <span className="text-sm font-semibold text-ink">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── From coast to coast ───────────────────────────────────── */}
      <section className="bg-surface-dark py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Recent Civil Projects</p>
            <h2 className="mt-2 text-3xl font-extrabold uppercase sm:text-4xl">From Coast To Coast</h2>
          </div>
          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src={`${IMG}/2024/10/Civil-Construction-Locations_10-24-24_Final-cutout-2.png`}
              alt="Completed Civil Construction Projects Map"
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
            {coastStats.map((s) => (
              <p key={s} className="text-sm font-semibold uppercase tracking-wide text-white/85">
                {s}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Civil construction projects ───────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Infrastructure Built to Last
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">
              Civil Construction Projects
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Discover our expertise in civil construction projects, where we focus on delivering
              high-quality, tailored solutions for the telecom industry. From site development to
              infrastructure installation, our projects are built with precision and reliability. Browse
              through each project to see how we bring your telecom needs to life.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((p) => (
              <div key={p} className="rounded-lg border border-border bg-white p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wide text-brand">
                  Civil Construction Projects
                </p>
                <h3 className="mt-2 text-lg font-bold text-ink">{p}</h3>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/civil-services-showcase/"
              className="inline-block rounded-md bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
            >
              View Civil Services Showcase
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
