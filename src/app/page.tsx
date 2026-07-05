import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  Section,
  SectionHeading,
  FeatureGrid,
  StatBand,
  CTABand,
  CheckList,
} from "@/components/sections";
import { YouTubeEmbed } from "@/components/youtube-embed";
import { siteConfig } from "@/lib/site-config";
import {
  Building2,
  Wind,
  Zap,
  Server,
  HardHat,
  Wrench,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Telecom Shelters & Cell Site Services",
  description:
    "CellSite Solutions remanufactures telecom shelters and delivers turnkey cell-site services nationwide — shelters, generators, HVAC, cabinets, and construction.",
  alternates: { canonical: "/" },
};

const homeFaqs = [
  {
    q: "What is a telecom shelter?",
    a: "A telecom shelter is a secure, climate-controlled structure designed to protect critical communications equipment — wireless network hardware, fiber optic equipment, power systems, batteries, and backup generators — from weather, security threats, and environmental conditions while supporting reliable network operations.",
  },
  {
    q: "What is a remanufactured shelter?",
    a: "A remanufactured shelter is a previously deployed shelter that has been professionally inspected, repaired, upgraded, and restored to meet current operational requirements — returning it to like-new condition, performed on-site or at our fully equipped warehouse.",
  },
  {
    q: "Why choose remanufactured over new?",
    a: "Remanufactured shelters deliver the same reliability and durability as new units at a fraction of the price, and can reduce overall project lead time. Every remanufactured shelter also keeps roughly 20 tons of concrete out of a landfill.",
  },
  {
    q: "What sizes of shelters do you offer?",
    a: "We offer a diverse selection of equipment shelter sizes, from compact 6' x 8' units to larger 12' x 28' shelters, in concrete, lightweight concrete, lightweight, and fiberglass construction — each engineer-inspected for like-new appearance and performance.",
  },
];

const services = [
  { title: "Remanufactured Shelters", description: "Like-new concrete, lightweight, and fiberglass telecom shelters, 6'x8' to 12'x28'.", href: "/shelters", icon: Building2 },
  { title: "HVAC Units", description: "High-efficiency AIRSYS and Bard cooling with redundant, PLC-controlled configurations.", href: "/hvac-units", icon: Wind },
  { title: "Generators", description: "Single- to 3-phase backup power and battery systems, foundations included.", href: "/generators", icon: Zap },
  { title: "Cabinets & ISP", description: "Weatherproof outdoor cabinets and complete inside-plant solutions.", href: "/cabinets", icon: Server },
  { title: "Civil Construction", description: "Foundations, grounding, electrical, trenching, and compound fencing.", href: "/civil-construction", icon: HardHat },
  { title: "Site Services", description: "Installation, commissioning, maintenance, inspections, and decommissioning.", href: "/installation-integration", icon: Wrench },
];

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark text-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.15] [background-image:linear-gradient(hsl(var(--brand-light))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--brand-light))_1px,transparent_1px)] [background-size:48px_48px]"
        />
        <div className="container relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Cedar Rapids, Iowa · Shipping Nationwide
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.05] md:text-6xl">
              Telecom Infrastructure Solutions,{" "}
              <span className="text-accent">Done Right</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/75">
              CellSite Solutions is an industry-leading provider of telecom
              infrastructure asset refurbishment and turnkey site services. We
              remanufacture communication shelters to like-new condition — top
              quality at a lower price — and keep the networks people depend on
              running smoothly.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="accent" size="lg">
                <Link href="/contact-us">Request a Quote</Link>
              </Button>
              <Button asChild variant="white" size="lg">
                <Link href="/shelters">Explore Shelters</Link>
              </Button>
            </div>
          </div>
          <div className="lg:pl-6">
            <YouTubeEmbed id="Inn3YnBQWG4" title="Telecom Shelter Remanufacture — CellSite Solutions" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <Section>
        <StatBand
          stats={[
            { value: "2009", label: "Serving telecom since" },
            { value: "50", label: "States licensed" },
            { value: "20 tons", label: "Concrete saved per shelter" },
            { value: "6'×8'–12'×28'", label: "Shelter sizes in stock" },
          ]}
        />
      </Section>

      {/* What we do */}
      <Section muted>
        <SectionHeading
          center
          eyebrow="What We Do"
          title="A single turnkey source for the full life cycle of a cell site"
          subtitle="From remanufactured shelters and equipment to civil construction, installation, maintenance, and decommissioning — one accountable team."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-brand/10 text-brand">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-brand-dark">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Why remanufactured */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Why Remanufactured"
              title="Like-new performance at a fraction of the cost"
            />
            <p className="mt-4 text-muted-foreground">
              A remanufactured telecom shelter is a previously deployed shelter
              that has been professionally inspected, repaired, upgraded, and
              restored. Performed on-site or at our fully equipped warehouse,
              remanufacturing delivers the same reliability and durability as a
              brand-new unit — while saving on overall project cost and reducing
              lead time.
            </p>
            <div className="mt-8">
              <CheckList
                columns={1}
                items={[
                  "Engineer-inspected for like-new appearance and performance",
                  "Latest refrigerants and variable-speed HVAC systems",
                  "Energy-efficient LED lighting and upgraded components",
                  "Custom modifications, including gen-room partitioning",
                  "Concrete, lightweight, and fiberglass construction",
                ]}
              />
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-secondary p-8">
            <h3 className="text-xl font-bold text-brand-dark">
              Sustainability, built in
            </h3>
            <p className="mt-3 text-muted-foreground">
              By recycling and reusing previously owned shelters, we minimize
              waste and reduce the need for new materials.
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-6">
              <div>
                <dt className="text-3xl font-extrabold text-accent">20 tons</dt>
                <dd className="text-sm text-muted-foreground">concrete kept out of landfill per shelter</dd>
              </div>
              <div>
                <dt className="text-3xl font-extrabold text-accent">17.5M lbs</dt>
                <dd className="text-sm text-muted-foreground">concrete diverted each year</dd>
              </div>
            </dl>
            <p className="mt-6 text-sm text-muted-foreground">
              We&rsquo;re also an EPA-compliant refrigerant recycler.{" "}
              <Link href="/sustainable-practices" className="font-semibold text-brand hover:underline">
                See our sustainable practices →
              </Link>
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section muted>
        <SectionHeading center eyebrow="FAQ" title="Common questions about telecom shelters" />
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-border rounded-xl border border-border bg-card">
          {homeFaqs.map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-brand-dark">
                {f.q}
                <span className="text-accent transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <CTABand
        secondary={{ label: "Call " + siteConfig.contact.phone, href: siteConfig.contact.phoneHref }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
