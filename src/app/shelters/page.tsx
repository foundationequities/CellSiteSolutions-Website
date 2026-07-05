import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/faq-accordion";
import { VideoLightbox } from "@/components/video-lightbox";

export const metadata: Metadata = {
  title: "Telecom Shelters",
  description:
    "CellSite Solutions provides remanufactured, new Datacomm Pro Lightweight, and custom telecom shelters that protect critical equipment with the durability of new shelters, faster deployment, and significant cost savings.",
};

const IMG = "/images/wp-content/uploads";

const faqs = [
  {
    q: "What is a telecom shelter?",
    a: "A telecom shelter is a secure, climate-controlled structure designed to protect critical communications equipment, including wireless network hardware, fiber optic equipment, power systems, batteries, and backup generators. Telecom shelters help ensure reliable network performance in all environmental conditions.",
  },
  {
    q: "What is a remanufactured telecom shelter?",
    a: "A remanufactured telecom shelter is a previously deployed shelter that has been professionally inspected, repaired, upgraded, and restored to meet current operational requirements. Remanufactured shelters provide a cost-effective alternative to purchasing a new shelter while maintaining durability and performance.",
  },
  {
    q: "How much can a remanufactured telecom shelter save compared to a new shelter?",
    a: "Cost savings vary based on size, condition, and customization requirements, but remanufactured telecom shelters typically offer substantial savings compared to new construction. They also help reduce project timelines by utilizing existing shelter structures.",
  },
  {
    q: "Are remanufactured telecom shelters as durable as new shelters?",
    a: "Yes. When properly remanufactured, telecom shelters undergo structural inspections, repairs, and upgrades to ensure they meet operational requirements. Many remanufactured shelters provide decades of additional service life when maintained properly.",
  },
  {
    q: "How long does the telecom shelter remanufacturing process take?",
    a: "The timeline depends on shelter size, condition, and customization requirements. However, remanufactured shelters can often be delivered significantly faster than newly manufactured shelters because the primary structure already exists.",
  },
];

const choice = [
  {
    title: "Affordability",
    copy: "Our remanufactured shelters provide a cost-effective “like new” alternative that delivers the same reliability and durability as brand-new units, but at a fraction of the price.",
  },
  {
    title: "Durability",
    copy: "Each remanufactured shelter is meticulously upgraded with new components, ensuring unmatched durability and energy efficiency, even in the most challenging environments.",
  },
  {
    title: "Timeliness",
    copy: "Our customized shelters are delivered in weeks to months—often much faster than newly manufactured options, helping you stay on schedule and avoid costly delays.",
  },
];

const process = [
  {
    title: "Customize Your Shelter",
    copy: "Customize your surplus concrete shelter's inside plant, electrical, and safety equipment.",
  },
  {
    title: "Project Management",
    copy: "Our team can initiate, plan, execute, monitor and close your project from start to finish.",
  },
  {
    title: "Maintenance Solutions",
    copy: "Our crews can provide shelter inspection, restoration, repair, foundation upgrades and refurbishment.",
  },
  {
    title: "Save Time & Money",
    copy: "Taking the time to invest now in a remanufactured telecom shelter will not only save on the overall cost of a site project, but it can also reduce overall lead time.",
  },
];

const sustainability = [
  {
    title: "Decommissioning with Purpose",
    copy: "We prioritize recycling materials to reduce environmental waste and are an EPA-compliant refrigerant recycler.",
  },
  {
    title: "Concrete Savings",
    copy: "Each remanufactured shelter prevents 20 tons of concrete from ending up in landfills.",
  },
  {
    title: "Energy Innovation",
    copy: "Our shelters feature the latest refrigerants, variable-speed HVAC systems for optimal winter and summer performance, and energy efficient LED lighting.",
  },
];

const equipment = [
  { title: "HVAC", href: "/hvac-units/" },
  { title: "Generators", href: "/generators/" },
  { title: "ISP", href: "/installation-integration/" },
  { title: "Cabinets", href: "/cabinets/" },
];

export default function SheltersPage() {
  return (
    <>
      <PageHero
        eyebrow="Building the Backbone of Your Network"
        title="Telecom Shelters"
        lede="Telecom shelters protect critical communications equipment from weather, security threats, and environmental conditions while supporting reliable network operations. CellSite Solutions provides remanufactured, new Datacomm Pro Lightweight and custom telecom shelters that deliver the durability, performance, and energy efficiency of new shelters with faster deployment timelines and significant cost savings for telecom, fiber, utility, and data infrastructure projects."
        image={`${IMG}/2024/09/Shelters-Section-Image.png`}
      />

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Telecom Shelters</p>
          <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-8">
            <FaqAccordion items={faqs} withSchema />
          </div>
        </div>
      </section>

      {/* ── Our Equipment Shelters ───────────────────────────────── */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Premium Quality</p>
            <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">
              Our Equipment Shelters
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Telecom shelters play a vital role in housing critical communications equipment away from
              the main switching center, ensuring uninterrupted and efficient telecommunications
              operations. We specialize in providing high-quality remanufactured equipment shelters
              designed to protect your essential infrastructure and keep your network running smoothly.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We offer a diverse selection of equipment shelter sizes, ranging from compact 6&rsquo; x
              8&rsquo; units to larger 12&rsquo; x 28&rsquo; shelters, ensuring a perfect fit for any
              project or industry need. To see the quality of our work firsthand, explore our{" "}
              <Link href="/shelter-showcase/" className="font-semibold text-brand hover:text-brand-dark">
                Shelter Showcase
              </Link>{" "}
              page—featuring real-world examples of past projects and installations that highlight our
              craftsmanship, attention to detail, and ability to deliver shelters that meet a wide
              range of customer requirements.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Whether you&rsquo;re supporting telecom infrastructure, fiber optic networks, data
              centers, or utility operations, our customizable shelters provide the flexibility and
              reliability your operation demands.
            </p>
            <Link
              href="/shelter-showcase/"
              className="mt-7 inline-block rounded-md bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
            >
              Learn More
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={`${IMG}/2024/09/Shelters-Section-Image.png`}
              alt="Remanufactured Concrete Communication Shelter"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Remanufactured vs New ────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">The Choice</p>
            <h2 className="mt-2 text-3xl font-extrabold uppercase text-ink sm:text-4xl">
              Remanufactured vs New Shelters
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {choice.map((c) => (
              <div key={c.title} className="rounded-lg border border-border bg-white p-7 shadow-sm">
                <h3 className="text-lg font-bold uppercase text-ink">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{c.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Remanufacturing Process ──────────────────────────────── */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">See How</p>
            <h2 className="mt-2 text-3xl font-extrabold uppercase text-ink sm:text-4xl">
              Remanufacturing Process
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              We specialize in expertly remanufacturing both the exterior and interior of your concrete
              equipment shelters using industry-leading durable materials. Whether performed on-site or
              at our fully equipped warehouse, our remanufacturing process restores your shelter to
              like-new condition, ensuring it meets or exceeds current industry standards.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Our high-quality materials and meticulous craftsmanship allow us to offer warranties that
              often surpass those of brand-new shelters, giving you peace of mind and long-term value.
              Trust CellSite Solutions to deliver reliable, cost-effective solutions for extending the
              life of your telecom shelters while maintaining optimal performance and protection.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.title} className="rounded-lg border border-border bg-white p-6 shadow-sm">
                <h3 className="text-base font-bold uppercase text-ink">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Virtual Tour ─────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Behind the Scenes</p>
          <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">Virtual Tour</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted">
            Take a behind-the-scenes virtual tour of CellSite Solutions&rsquo; Cedar Rapids facility.
            See how our team remanufactures high-performance concrete telecom shelters—built to last
            and trusted nationwide. From inspection to final restoration, discover the precision and
            craftsmanship behind every shelter.
          </p>
          <VideoLightbox
            embedUrl="https://player.vimeo.com/video/1036146605"
            label="Play virtual tour"
            className="group mx-auto mt-8 flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-transform hover:scale-110"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
              <path d="M8 5v14l11-7z" />
            </svg>
          </VideoLightbox>
        </div>
      </section>

      {/* ── eBook CTA (Telecom Construction) ─────────────────────── */}
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

      {/* ── Wireless Providers / Sustainability ──────────────────── */}
      <section className="bg-surface-dark py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Powering Connectivity, Delivering Reliability.
            </p>
            <h2 className="mt-2 text-3xl font-extrabold uppercase sm:text-4xl">Wireless Providers</h2>
            <p className="mt-5 text-base leading-relaxed text-white/80">
              Since 2009, CellSite Solutions has focused on sustainable remanufacturing. Our core
              philosophy is simple: Reuse, Renew, and Reimagine.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {sustainability.map((s) => (
              <div key={s.title} className="rounded-lg border border-white/15 bg-white/5 p-7">
                <h3 className="text-lg font-bold uppercase">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">{s.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Datacomm Pro band ────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-surface-dark py-24 text-white">
        <Image
          src={`${IMG}/2025/06/Datacomm-Pro-Series-Lightweight-Shelter.png`}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Introducing</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-extrabold uppercase sm:text-4xl lg:text-5xl">
            Datacomm Pro Ruggedized Lightweight Shelters
          </h2>
          <Link
            href="/datacomm-pro-series/"
            className="mt-8 inline-block rounded-md bg-brand px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* ── Telecom Shelter Equipment ────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Custom Equipment Solutions
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">
              Telecom Shelter Equipment
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              CellSite Solutions offers a wide range of telecom shelter equipment designed to protect
              and enhance your network infrastructure. From robust, dependable HVAC systems and
              generators to advanced ISP solutions and secure equipment cabinets, we provide everything
              you need to ensure your telecommunications systems operate efficiently and safely.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {equipment.map((e) => (
              <Link
                key={e.title}
                href={e.href}
                className="group rounded-lg border border-border bg-white p-7 text-center shadow-sm transition-colors hover:border-brand"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">Equipment</p>
                <h3 className="mt-1 text-xl font-bold uppercase text-ink group-hover:text-brand">
                  {e.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
