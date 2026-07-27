import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { BgVideo } from "@/components/bg-video";
import { FaqAccordion } from "@/components/faq-accordion";
import { VideoLightbox } from "@/components/video-lightbox";
import { FACILITY_TOUR_YT, MATTERPORT_TOUR, SHELTERS_HERO_VIMEO, SHELTER_TIMELAPSE_VIDEO } from "@/lib/videos";

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
    icon: (
      // dollar / bill
      <svg
        width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden
      >
        <path d="M12 2v20" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Durability",
    copy: "Each remanufactured shelter is meticulously upgraded with new components, ensuring unmatched durability and energy efficiency, even in the most challenging environments.",
    icon: (
      // refresh arrows
      <svg
        width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden
      >
        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
        <path d="M16 16h5v5" />
      </svg>
    ),
  },
  {
    title: "Timeliness",
    copy: "Our customized shelters are delivered in weeks to months—often much faster than newly manufactured options, helping you stay on schedule and avoid costly delays.",
    icon: (
      // clock
      <svg
        width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
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
  {
    title: "HVAC",
    href: "/hvac-units/",
    img: `${IMG}/2024/05/HVAC-Portfolio-Featured-v2.png`,
    alt: "Telecom Shelter HVAC Units",
  },
  {
    title: "Generators",
    href: "/generators/",
    img: `${IMG}/2024/05/Generator-Portfolio-Featured-Image.png`,
    alt: "Telecom Shelter Generators",
  },
  {
    title: "Cabinets",
    href: "/cabinets/",
    img: `${IMG}/2024/05/Cabinets-Portfolio-Featured-Image.png`,
    alt: "Telecom Equipment Cabinets",
  },
  {
    title: "ISP",
    href: "/installation-integration/",
    img: `${IMG}/2024/05/ISP-Portfolio-Featured-Image.png`,
    alt: "Telecom Shelter ISP Installation",
  },
];

export default function SheltersPage() {
  return (
    <>
      <PageHero
        eyebrow="Building the Backbone of Your Network"
        title="Telecom Shelters"
        image={`${IMG}/2024/09/Shelters-Section-Image.png`}
        video={{ src: SHELTERS_HERO_VIMEO }}
      />

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Frequently Asked Questions
          </p>
          <h2 className="mt-2 text-[35px] text-ink sm:text-[65px]">Telecom Shelters</h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Telecom shelters protect critical communications equipment from weather, security
            threats, and environmental conditions while supporting reliable network operations.
            CellSite Solutions provides remanufactured, new Datacomm Pro Lightweight and custom
            telecom shelters that deliver the durability, performance, and energy efficiency of new
            shelters with faster deployment timelines and significant cost savings for telecom,
            fiber, utility, and data infrastructure projects.
          </p>
          <div className="mt-8">
            <FaqAccordion items={faqs} withSchema />
          </div>
        </div>
      </section>

      {/* ── Our Equipment Shelters (image LEFT / text RIGHT, as live) ── */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="group relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={`${IMG}/2024/09/Shelters-Section-Image.png`}
              alt="Remanufactured Concrete Communication Shelter"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">PREMIUM QUALITY</p>
            <h2 className="mt-2 text-[35px] text-ink sm:text-[65px]">OUR EQUIPMENT SHELTERS</h2>
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
              className="mt-7 inline-block rounded-md bg-brand px-6 py-3 font-display text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ── Remanufactured vs New (open columns + icons, as live) ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">The Choice</p>
            <h2 className="mt-2 text-[35px] text-ink sm:text-[65px]">
              REMANUFACTURED vs NEW SHELTERS
            </h2>
          </div>
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {choice.map((c) => (
              <div key={c.title} className="border-t border-border pt-8">
                <div className="text-brand">{c.icon}</div>
                <h3 className="mt-5 text-xl text-ink">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{c.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Remanufacturing Process (Matterport LEFT / text RIGHT, as live) ── */}
      <section className="relative overflow-hidden bg-surface-dark py-20 text-white">
        <BgVideo
          src={SHELTER_TIMELAPSE_VIDEO}
          overlay="bg-black/30"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Matterport 3D tour panel */}
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src={`${IMG}/2024/09/Shelters-Section-Image.png`}
                alt="Immersive 3D shelter tour preview"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" aria-hidden />
              <VideoLightbox
                embedUrl={MATTERPORT_TOUR}
                label="Launch immersive 3D shelter experience"
                className="group absolute inset-0 flex items-center justify-center"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-transform group-hover:scale-110">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </VideoLightbox>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">SEE HOW</p>
              <h2 className="mt-2 text-[35px] sm:text-[65px]">REMANUFACTURING PROCESS</h2>
              <p className="mt-5 text-base leading-relaxed text-white/80">
                We specialize in expertly remanufacturing both the exterior and interior of your concrete
                equipment shelters using industry-leading durable materials. Whether performed on-site or
                at our fully equipped warehouse, our remanufacturing process restores your shelter to
                like-new condition, ensuring it meets or exceeds current industry standards.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                Our high-quality materials and meticulous craftsmanship allow us to offer warranties that
                often surpass those of brand-new shelters, giving you peace of mind and long-term value.
                Trust CellSite Solutions to deliver reliable, cost-effective solutions for extending the
                life of your telecom shelters while maintaining optimal performance and protection.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                Press the PLAY button to launch an immersive 3D experience that allows you to explore
                the inside of our shelter that features a complete ISP installation.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div
                key={p.title}
                className="rounded-lg border border-white/15 bg-white/10 p-6 backdrop-blur-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <h3 className="text-xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Virtual Tour (dark band w/ YouTube bg video, as live) ── */}
      <section className="relative flex min-h-[55vh] items-center overflow-hidden bg-surface-dark py-24 text-white lg:min-h-[70vh]">
        <BgVideo src={FACILITY_TOUR_YT} start={2} end={140} overlay="bg-black/30" />
        <div className="relative mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Behind the Scenes</p>
          <h2 className="mt-2 text-[35px] sm:text-[65px]">Virtual Tour</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80">
            Take a behind-the-scenes virtual tour of CellSite Solutions&rsquo; Cedar Rapids facility.
            See how our team remanufactures high-performance concrete telecom shelters—built to last
            and trusted nationwide. From inspection to final restoration, discover the precision and
            craftsmanship behind every shelter.
          </p>
          <VideoLightbox
            embedUrl="https://www.youtube.com/embed/UlecVkYXJGY?start=2"
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
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1fr] lg:px-8">
          <div className="group relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden">
            <Image
              src={`${IMG}/2025/01/Complete-Guide-eBook.png`}
              alt="The Complete Guide to Telecom Shelter Construction"
              fill
              sizes="(max-width: 1024px) 80vw, 320px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div>
            <h2 className="text-[35px] text-ink sm:text-[65px]">Download FREE eBook</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Telecom shelter construction involves more than just building a structure from the ground
              up; it integrates engineering expertise, meticulous planning, and skilled installation to
              create a dependable foundation for modern communications. Whether you&rsquo;re a telecom
              professional or simply curious about the process, this resource offers valuable insights.
            </p>
            <Link
              href="/ebook-telecom-construction/"
              className="mt-7 inline-block rounded-md bg-brand px-6 py-3 font-display text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
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
            <h2 className="mt-2 text-[35px] sm:text-[65px]">WIRELESS PROVIDERS</h2>
            <p className="mt-5 text-base leading-relaxed text-white/80">
              Since 2009, CellSite Solutions has focused on sustainable remanufacturing. Our core
              philosophy is simple: Reuse, Renew, and Reimagine.
            </p>
            <Link
              href="/sustainable-practices/"
              className="mt-7 inline-block rounded-md bg-brand px-6 py-3 font-display text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
            >
              Learn More
            </Link>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {sustainability.map((s) => (
              <div
                key={s.title}
                className="rounded-lg border border-white/15 bg-white/5 p-7 transition-shadow duration-300 hover:shadow-lg"
              >
                <h3 className="text-xl">{s.title}</h3>
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
          className="object-cover opacity-50"
        />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">INTRODUCING</p>
          <h2 className="mx-auto mt-3 max-w-4xl text-[35px] sm:text-[65px]">
            Datacomm Pro Ruggedized Lightweight Shelters
          </h2>
          <Link
            href="/datacomm-pro-series/"
            className="mt-8 inline-block rounded-md bg-brand px-7 py-3.5 font-display text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* ── Telecom Shelter Equipment (photo tiles, as live) ─────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Custom Equipment Solutions
            </p>
            <h2 className="mt-2 text-[35px] text-ink sm:text-[65px]">Telecom Shelter Equipment</h2>
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
                className="group relative block aspect-[3/4] overflow-hidden rounded-lg"
              >
                <Image
                  src={e.img}
                  alt={e.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
                    Equipment
                  </p>
                  <h3 className="mt-1 text-2xl text-white transition-colors group-hover:text-brand">
                    {e.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
