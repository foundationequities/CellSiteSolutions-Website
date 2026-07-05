import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "CellSite Solutions supports tower owners, wireless carriers, fiber providers, cable and internet companies, municipalities, and telecom co-ops with turnkey infrastructure solutions.",
};

const IMG = "/images/wp-content/uploads";

const keyPlayers = [
  {
    title: "Tower Owners",
    copy: "You may already be thinking of the money you can save by choosing a recycled shelter or other gear designed to your exacting specifications. But in addition to reducing your budget, you’ll be helping keep our planet healthy and industry sustainable. Each year, CellSite has kept 17.5 million pounds of concrete out of landfills by recycling shelters. And with our huge inventory, we will have you up and running faster than anyone else.",
  },
  {
    title: "Wireless Carriers",
    copy: "For wireless carriers, CellSite Solutions offers the flexibility to add to and upgrade your site at the pace of evolving technology. We also provide the essential maintenance to keep your site functioning at the highest level and protect your investment. With a sophisticated selection of shelters, cabinets, HVAC, alarm systems, and more, we can extend the life of your equipment and save you money.",
  },
  {
    title: "Fiber Providers",
    copy: "Growing fiber networks require connection, protection, and maintenance. We can help with all three, from state-of-the-art fiber huts and other site services.",
  },
];

const partners = [
  {
    title: "Cable & Internet Providers",
    copy: "Cable and internet bring content to millions of people every day. CellSite specializes in all aspects of cable/internet maintenance, from shelters and towers to guy line inspection and battery backup. When people rely on your services, you can rely on CellSite to keep you up and running no matter what.",
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

export default function WhoWeServePage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Serve"
        title="Who We Support"
        lede="There are an estimated 419,000 cellular service sites in the United States alone. Whether you’re responsible for building, maintaining, upgrading, or managing any aspect of these sites, CellSite Solutions has the products and expertise to support your needs."
      />

      {/* ── The Key Players intro ────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
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
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">The Key Players</p>
            <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">Who We Support</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              At CellSite Solutions, we are dedicated to supporting key players in the telecommunications
              industry, offering comprehensive solutions to streamline operations and maximize
              efficiency. Whether you’re a tower owner looking to optimize site management, a wireless
              carrier expanding network coverage, or a fiber provider enhancing connectivity, our
              products and services are designed with your needs in mind. Explore how we can support your
              specific role and help you achieve your goals in this rapidly evolving industry.
            </p>
          </div>
        </div>
      </section>

      {/* ── Key player cards ─────────────────────────────────────── */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {keyPlayers.map((p) => (
              <div key={p.title} className="rounded-lg border border-border bg-white p-7 shadow-sm">
                <h3 className="text-lg font-bold uppercase text-ink">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Here to help band ────────────────────────────────────── */}
      <section className="bg-surface-dark py-20 text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Here to Help</p>
          <h2 className="text-3xl font-extrabold uppercase sm:text-4xl">Let Us Hook You Up</h2>
          <Link
            href="/contact-us/"
            className="rounded-md bg-brand px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      {/* ── Who we partner with ──────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">The Community</p>
            <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">Who We Partner With</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              CellSite Solutions is proud to partner with essential organizations and local governments
              to strengthen telecommunications infrastructure across communities. Whether you’re a cable
              and internet provider improving customer service, a town or municipality enhancing public
              connectivity, or a telecom co-op ensuring reliable communication for your members, our team
              is committed to delivering solutions that meet your unique needs. Discover how our
              partnerships foster growth and connectivity where it matters most.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {partners.map((p) => (
              <div key={p.title} className="rounded-lg border border-border bg-white p-7 shadow-sm">
                <h3 className="text-lg font-bold uppercase text-ink">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full-service tagline band ────────────────────────────── */}
      <section className="bg-brand py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">Who We Serve</p>
          <p className="mt-4 text-2xl font-semibold leading-snug sm:text-3xl">
            We&rsquo;re a full-service company that will help you every step of the way—and at every stage
            in between.
          </p>
          <p className="mt-6 font-bold">Your Telecom Experts</p>
          <p className="text-sm text-white/80">CellSite Solutions</p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
