import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { BgVideo } from "@/components/bg-video";
import { CountUp } from "@/components/count-up";
import { VideoLightbox } from "@/components/video-lightbox";
import { FaqAccordion } from "@/components/faq-accordion";
import { LogoMarquee } from "@/components/logo-marquee";
import { partnerLogos, customerLogos } from "@/lib/logos";
import { FACILITY_TOUR_YT, HOME_HERO_VIMEO } from "@/lib/videos";

export const metadata: Metadata = {
  title: "CellSite Solutions — Any Shelter. Any Service. Fast Delivery.",
  description:
    "CellSite Solutions provides expert telecom services, specializing in remanufactured concrete telecom shelters, lightweight shelters, civil construction, and turnkey site services nationwide.",
};

const IMG = "/images/wp-content/uploads";

const homeFaqs = [
  {
    q: "What is CellSite Solutions?",
    a: "CellSite Solutions is a telecommunications infrastructure provider specializing in telecom shelters, civil construction, site maintenance, equipment installation, and turnkey network deployment solutions for organizations across the United States.",
  },
  {
    q: "What services does CellSite Solutions provide?",
    a: "CellSite Solutions provides telecom shelter remanufacturing, new lightweight shelter solutions, civil construction, wireless network services, shelter installation, site maintenance, equipment upgrades, logistics, and infrastructure decommissioning.",
  },
  {
    q: "What types of telecom shelters does CellSite Solutions offer?",
    a: "CellSite Solutions provides remanufactured concrete telecom shelters, custom shelter solutions, lightweight telecom shelters, fiber huts, edge computing shelters, and equipment enclosures designed to protect critical communications infrastructure.",
  },
  {
    q: "What is telecom shelter remanufacturing?",
    a: "Telecom shelter remanufacturing is the process of restoring, upgrading, and customizing existing telecom shelters to extend their service life while reducing costs, material consumption, and deployment timelines compared to new construction.",
  },
  {
    q: "Why choose a remanufactured telecom shelter instead of a new shelter?",
    a: "Remanufactured telecom shelters provide a cost-effective alternative to new construction while maintaining the durability, security, and performance required for critical communications equipment. By restoring and upgrading existing shelters, organizations can reduce project costs, shorten deployment timelines, and support sustainability initiatives without sacrificing reliability.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero: Vimeo background video + centered tagline (as live) ── */}
      <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden text-white lg:min-h-screen">
        <BgVideo
          src={HOME_HERO_VIMEO}
          poster={`${IMG}/2024/11/Shelters-Division-v2.png`}
          overlay="bg-black/20"
        />
        <div className="relative mx-auto w-full max-w-5xl px-4 pb-16 pt-28 text-center sm:px-6 lg:px-8">
          <h2 className="text-[32px] leading-snug sm:text-[45px]">
            ANY SHELTER. ANY SERVICE. FAST DELIVERY.
          </h2>
        </div>
      </section>

      {/* ── 15-year anniversary band ─────────────────────────────── */}
      <section className="bg-brand py-14 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[auto_1fr] lg:gap-14 lg:px-8">
          <div className="flex items-baseline gap-3 lg:flex-col lg:items-center lg:gap-0">
            <span className="font-display text-7xl font-medium leading-none lg:text-8xl">
              <CountUp value={15} />
            </span>
            <span className="text-2xl tracking-[0.2em]">YEARS</span>
          </div>
          <div>
            <h2 className="text-[34px] sm:text-[40px]">ONE TEAM. ONE DREAM.</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-white/90">
              CellSite Solutions is proud to celebrate 15 years of innovation, reliability, and
              partnership in the telecom industry. From our dedicated team to the customers who trust
              us every day, this milestone reflects our shared commitment to building stronger,
              smarter connectivity. Thank you for being part of our journey as we continue building
              the future of connectivity — together.
            </p>
          </div>
        </div>
      </section>

      {/* ── Scrolling client-logo marquee (as live) ──────────────── */}
      <section className="border-b border-border bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <LogoMarquee logos={partnerLogos} />
          <LogoMarquee logos={customerLogos} reverse />
        </div>
      </section>

      {/* ── Who We Are ───────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="group relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={`${IMG}/2024/11/Shelters-Division-v2.png`}
              alt="CellSite Solutions Telecom Shelters Floor"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Who We Are</p>
            <h2 className="mt-2 text-[32px] text-ink sm:text-[40px]">Turnkey Solution Provider</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              CellSite Solutions provides expert telecom and telecommunications services,
              specializing in concrete shelter remanufacturing, and custom telecom shelter solutions.
              We have the resources and capabilities for all your telecommunication site and equipment
              shelter needs. Our remanufactured shelters are an unbeatable alternative to new shelters
              with the same durability and energy efficiency, but at a fraction of the cost and lead
              time.
            </p>
            <Link
              href="/about-us/"
              className="mt-7 inline-block rounded-md bg-brand px-6 py-3 font-display text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ (part of Who We Are) ─────────────────────────────── */}
      <section className="bg-white pb-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FaqAccordion items={homeFaqs} withSchema />
        </div>
      </section>

      {/* ── Division cards ───────────────────────────────────────── */}
      <section className="bg-white pb-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {[
            {
              img: `${IMG}/2024/11/Shelters-Division-v2.png`,
              title: "TELECOM SHELTERS",
              copy: "We remanufacture shelters and essential equipment to keep telecom networks operational.",
              href: "/shelters/",
              alt: "Telecom Shelters",
            },
            {
              img: `${IMG}/2024/10/Civil-Construction-Division-v2.png`,
              title: "CIVIL CONSTRUCTION",
              copy: "Civil construction services, including telecom site install, maintenance, & shelter decommission.",
              href: "/civil-construction/",
              alt: "Civil Construction",
            },
          ].map((c) => (
            <div key={c.title} className="group relative overflow-hidden rounded-lg">
              <div className="relative aspect-[16/10]">
                <Image
                  src={c.img}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <h3 className="text-2xl">{c.title}</h3>
                <p className="mt-2 max-w-md text-sm text-white/85">{c.copy}</p>
                <Link
                  href={c.href}
                  className="mt-4 inline-block rounded-md bg-brand px-5 py-2.5 font-display text-xs font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Equipment shelters feature ───────────────────────────── */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">PREMIUM QUALITY</p>
            <h2 className="mt-2 text-[32px] text-ink sm:text-[40px]">OUR EQUIPMENT SHELTERS</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Telecom shelters play a vital role in housing critical communications equipment away from
              the main switching center, ensuring uninterrupted and efficient telecommunications
              operations. We specialize in providing high-quality remanufactured equipment shelters
              designed to protect your essential infrastructure and keep your network running smoothly.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We offer a diverse selection of equipment shelter sizes, ranging from compact 6&apos; x 8&apos;
              units to larger 12&apos; x 28&apos; shelters, ensuring a perfect fit for any project or industry
              need. Whether you&apos;re supporting telecom infrastructure, fiber optic networks, data
              centers, or utility operations, our customizable shelters provide the flexibility and
              reliability your operation demands.
            </p>
            <Link
              href="/shelters/"
              className="mt-7 inline-block rounded-md bg-brand px-6 py-3 font-display text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
            >
              Learn More
            </Link>
          </div>
          <div className="group relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={`${IMG}/2024/09/Shelters-Section-Image.png`}
              alt="Remanufactured Concrete Communication Shelter"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
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
          <h2 className="mx-auto mt-3 max-w-4xl text-[32px] sm:text-[45px]">
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

      {/* ── Stats ────────────────────────────────────────────────── */}
      <section className="bg-brand py-16 text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 text-center sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            { value: 5.3, decimals: 1, suffix: "k", label: "TONS CONCRETE REPURPOSED" },
            { value: 363, decimals: 0, suffix: "k", label: "LBS COPPER & METAL RECYCLED" },
            { value: 190, decimals: 0, suffix: "k", label: "SQUARE FOOT FACILITY" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display text-5xl font-medium lg:text-6xl">
                <CountUp value={s.value} suffix={s.suffix} decimals={s.decimals} />
              </div>
              <p className="mt-2 text-sm font-semibold tracking-wide text-white/90">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Virtual tour (dark band w/ YouTube bg video, as live) ── */}
      <section className="relative flex min-h-[55vh] items-center overflow-hidden bg-surface-dark py-24 text-white lg:min-h-[70vh]">
        <BgVideo src={FACILITY_TOUR_YT} start={2} end={140} overlay="bg-black/30" />
        <div className="relative mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Behind the Scenes</p>
          <h2 className="mt-2 text-[32px] sm:text-[45px]">Virtual Tour</h2>
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

      {/* ── eBook CTA ────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1fr] lg:px-8">
          <div className="group relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-lg shadow-xl">
            <Image
              src={`${IMG}/2025/11/eBook-Complete-Guide-Datacomm-Pro-Series-Thumbnail.png`}
              alt="Complete Guide to the Datacomm Pro Series eBook"
              fill
              sizes="(max-width: 1024px) 80vw, 320px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div>
            <h2 className="text-[32px] text-ink sm:text-[40px]">Download FREE eBook</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Download our free eBook for an inside look at the next generation of telecom shelter
              design. Learn how the Datacomm Pro Series delivers rugged strength, lightweight
              efficiency, and up to 45% cost savings over concrete shelters—making it the smarter
              choice for scalable, reliable infrastructure.
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

      {/* ── Civil construction services grid ─────────────────────── */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              INSTALLATION TO DECOMMISSIONING
            </p>
            <h2 className="mt-2 text-[32px] text-ink sm:text-[40px]">CIVIL CONSTRUCTION</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              We provide top-tier civil construction services to help you build and maintain telecom
              sites that meet your exact specifications. From initial site planning and development to
              final infrastructure installation, our team delivers end-to-end solutions tailored to
              your needs.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Shelter Installation",
                href: "/installation-integration/",
                items: [
                  "Site Concrete Foundations",
                  "Site Prep: Grubbing & Landscaping",
                  "Build Access Roads",
                  "Culvert Installations",
                  "Compound Fencing & Rocking",
                  "Handhole Placement",
                  "Fiber Conduits",
                  "Site Grounding",
                  "Generator & Battery Installs",
                  "ATS Swaps",
                ],
              },
              {
                title: "Site Maintenance",
                href: "/general-site-maintenance/",
                items: ["Electrical Services", "Grounding Repair / Fence Repair"],
              },
              {
                title: "Site Decommissioning",
                href: "/site-decommissioning/",
                items: ["Shelter & Generator Removal", "Tower Removal", "Site Restoration to Original"],
              },
              {
                title: "Guy Anchor Inspections",
                href: "/guy-tower-rod-inspections/",
                items: ["Unsurpassed Dig-to-Block Process"],
              },
            ].map((col) => (
              <div
                key={col.title}
                className="rounded-lg border border-border bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <h3 className="text-xl text-ink">{col.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {col.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      {it}
                    </li>
                  ))}
                </ul>
                <Link
                  href={col.href}
                  className="mt-5 inline-block font-display text-sm font-medium uppercase tracking-wide text-brand hover:text-brand-dark"
                >
                  Learn More &rsaquo;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CEO quote (centered, no photo — as live) ─────────────── */}
      <section className="bg-surface-dark py-24 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Who we are</p>
          <blockquote className="mt-6 font-display text-[28px] font-medium leading-snug sm:text-[36px]">
            &ldquo;We specialize in industrial telecom shelter remanufacturing of any imaginable scale
            and complexity.&rdquo;
          </blockquote>
          <p className="mt-8 font-bold">Jim Patterson</p>
          <p className="text-sm text-white/70">CEO, CellSite Solutions</p>
        </div>
      </section>

      {/* ── Ready to talk CTA ────────────────────────────────────── */}
      <section className="bg-brand py-16 text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <h3 className="text-[28px] sm:text-[34px]">READY TO TALK?</h3>
          <p className="max-w-2xl text-white/90">
            Have an upcoming project that requires a certain skill set? Does one of our products or
            services help you accomplish something in the field? Let us know.
          </p>
          <Link
            href="/contact-us/"
            className="rounded-md bg-white px-8 py-3.5 font-display text-sm font-medium uppercase tracking-wide text-brand transition-colors hover:bg-white/90"
          >
            REQUEST A QUOTE
          </Link>
        </div>
      </section>
    </>
  );
}
