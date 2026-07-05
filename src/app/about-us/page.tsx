import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/faq-accordion";
import { VideoLightbox } from "@/components/video-lightbox";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded in 2010, CellSite Solutions is a turnkey telecom infrastructure provider specializing in remanufactured shelters, civil construction, and wireless network services.",
};

const IMG = "/images/wp-content/uploads";

const faqs = [
  {
    q: "What does CellSite Solutions do?",
    a: "CellSite Solutions is a telecommunications infrastructure company that provides remanufactured telecom shelters, civil construction, wireless services, site maintenance, equipment installation, logistics, and turnkey network deployment solutions for telecom and utility customers.",
  },
  {
    q: "What industries does CellSite Solutions serve?",
    a: "CellSite Solutions serves wireless carriers, fiber and broadband providers, internet service providers (ISPs), utility companies, municipalities, government agencies, public safety organizations, and telecommunications cooperatives.",
  },
  {
    q: "What types of telecom shelters does CellSite Solutions provide?",
    a: "CellSite Solutions offers remanufactured concrete shelters, custom telecom shelters, Datacomm Pro Series lightweight telecom shelters, fiber huts, edge computing shelters, and related infrastructure solutions designed to protect critical communications equipment.",
  },
  {
    q: "What is telecom shelter remanufacturing?",
    a: "Telecom shelter remanufacturing is the process of restoring, upgrading, and customizing previously deployed shelters to extend their service life while reducing costs, waste, and deployment timelines compared to new construction.",
  },
  {
    q: "What makes CellSite Solutions different from other telecom infrastructure providers?",
    a: "CellSite Solutions combines telecom shelter manufacturing and remanufacturing, civil construction, wireless services, maintenance, logistics, and deployment expertise under one organization. This integrated approach helps customers reduce costs, streamline projects, and accelerate infrastructure deployment.",
  },
];

const clients = [
  {
    title: "Cable & Internet Providers",
    copy: "Cable and internet bring content to millions of people every day. CellSite specializes in all aspects of cable/internet maintenance and installation, from shelters and towers to guy line inspection and battery backup. When people rely on your services, you can rely on CellSite to keep you up and running no matter what.",
  },
  {
    title: "Wireless Carriers",
    copy: "For wireless carriers, CellSite Solutions offers the flexibility to add to and upgrade your site at the pace of evolving technology. We also provide the essential maintenance to keep your site functioning at the highest level and protect your investment. With a sophisticated selection of shelters, cabinets, HVAC, alarm systems, and more, we can extend the life of your equipment and save you money.",
  },
  {
    title: "Towns & Municipalities",
    copy: "We work with many towns and municipalities to deliver exceptional engineering service to residents. One of our most crucial functions is establishing and maintaining local emergency networks. When residents dial 911, our services help connect them to assistance regardless of their provider. We will work with your town or municipality to install emergency service and provide peace of mind.",
  },
  {
    title: "Telecom Co-ops",
    copy: "Millions of Americans rely on their local telecommunications co-op for service. As a co-op provider, you have a responsibility to keep them connected. CellSite is your partner in this effort, with efficient and cost-effective solutions.",
  },
];

const team = [
  { name: "Jim Patterson", role: "Chief Executive Officer", img: `${IMG}/2023/12/Jim-Updated.png` },
  {
    name: "Mat Hennings",
    role: "Chief Financial Officer",
    img: `${IMG}/2024/10/cellsite-team-mat-hennings-660x880-1.jpg`,
  },
  {
    name: "Amanda Tylee",
    role: "Human Resources Director",
    img: `${IMG}/2024/10/cellsite-team-amanda-tylee-660x880-1.jpg`,
  },
];

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Who We Are"
        lede="CellSite Solutions, founded in 2010, quickly became a leader in the telecom infrastructure industry specializing in remanufacturing equipment shelters, offering a more sustainable, eco-friendly alternative to new shelters. In 2021, Fort Point Capital invested in CellSite Solutions, allowing the company to expand its services creating a complete turnkey solution provider with services ranging from civil construction to wireless network services."
      />

      {/* ── Founded stat band ────────────────────────────────────── */}
      <section className="bg-brand py-16 text-white">
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-10 px-4 text-center sm:px-6 lg:px-8">
          <div>
            <div className="text-5xl font-extrabold lg:text-6xl">2010</div>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-white/90">Founded</p>
          </div>
          <div>
            <div className="text-5xl font-extrabold lg:text-6xl">100+</div>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-white/90">Employees</p>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Frequently Asked Questions
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">About CellSite Solutions</h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            CellSite Solutions is a turnkey telecommunications infrastructure provider specializing in
            remanufactured telecom shelters, civil construction, wireless network services, site
            maintenance, equipment installation, and infrastructure deployment. Since 2010, the company
            has helped wireless carriers, fiber providers, utilities, municipalities, and telecom
            cooperatives build, maintain, and expand reliable communications networks throughout the
            United States.
          </p>
          <div className="mt-8">
            <FaqAccordion items={faqs} withSchema />
          </div>
        </div>
      </section>

      {/* ── We Are Hiring ────────────────────────────────────────── */}
      <section className="bg-surface-dark py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold uppercase sm:text-4xl">We Are Hiring</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80">
            Ready to make a difference and grow your career? Join our team! We&rsquo;re looking for
            passionate, talented individuals to help us shape the future of our industry. Whether
            you&rsquo;re an experienced professional or just starting out, we have opportunities that
            match your skills and ambitions.
          </p>
          <Link
            href="/careers/"
            className="mt-8 inline-block rounded-md bg-brand px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
          >
            View Job Openings
          </Link>
        </div>
      </section>

      {/* ── Virtual Tour ─────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Behind the Scenes</p>
          <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">Virtual Tour</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted">
            Take a behind-the-scenes virtual tour of CellSite Solutions&rsquo; Cedar Rapids facility.
            See how our team remanufactures high-performance concrete telecom shelters—built to last and
            trusted nationwide. From inspection to final restoration, discover the precision and
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

      {/* ── Our Clients ──────────────────────────────────────────── */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={`${IMG}/2024/10/Who-We-Support.png`}
                alt="Who We Support"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Main Partners</p>
              <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">Our Clients</h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                At CellSite Solutions, we proudly serve a wide range of industries, from telecom
                infrastructure to utility providers, delivering high-quality telecom shelters and
                equipment solutions. Whether you&rsquo;re in mobile, fiber, oil &amp; gas, or beyond, we
                have the expertise to meet your needs.
              </p>
              <Link
                href="/who-we-serve/"
                className="mt-7 inline-block rounded-md bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {clients.map((c) => (
              <div key={c.title} className="rounded-lg border border-border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold uppercase text-ink">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{c.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sustainable Practices ────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Sustainable Practices</p>
          <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">Our Core Philosophy</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted">
            At CellSite Solutions, sustainability is at the heart of everything we do. By
            remanufacturing telecom shelters we extend their lifespan and reduce the environmental
            impact of producing new structures. Our eco-friendly approach not only benefits our
            customers but also supports a more sustainable future for the telecom industry.
          </p>
          <Link
            href="/sustainable-practices/"
            className="mt-8 inline-block rounded-md bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* ── Meet Our Team ────────────────────────────────────────── */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">The Experts</p>
            <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">Meet Our Team</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              At CellSite Solutions, our executive team brings together decades of experience in telecom
              infrastructure and civil construction. Each leader is dedicated to upholding our values of
              quality, safety, and innovation, ensuring that our solutions meet the evolving needs of
              our clients. Their commitment to operational excellence and strategic growth drives
              CellSite&rsquo;s mission to be a trusted partner in reliable telecom shelter solutions.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="overflow-hidden rounded-lg bg-white shadow-sm">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-ink">{member.name}</h3>
                  <p className="mt-1 text-sm text-muted">{member.role}</p>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-bold uppercase tracking-wide text-brand hover:text-brand-dark"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
