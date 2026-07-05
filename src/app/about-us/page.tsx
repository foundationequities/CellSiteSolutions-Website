import type { Metadata } from "next";
import { PageHero, Section, SectionHeading, Prose, StatBand, CTABand, CheckList } from "@/components/sections";

export const metadata: Metadata = {
  title: "About CellSite Solutions",
  description:
    "Founded in 2009 in Cedar Rapids, Iowa, CellSite Solutions grew from shelter remanufacturing into a full turnkey telecom infrastructure partner.",
  alternates: { canonical: "/about-us" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="Who We Are"
        subtitle="From shelter remanufacturer to complete turnkey telecom infrastructure partner."
        breadcrumb={[{ title: "About Us", href: "/about-us" }]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <Prose
            blocks={[
              {
                heading: "Our story",
                paragraphs: [
                  "Founded in 2009 in Cedar Rapids, Iowa, CellSite Solutions quickly became a leader in the telecom infrastructure industry by specializing in remanufacturing equipment shelters — a more sustainable, eco-friendly alternative to building new.",
                  "What began as a shelter remanufacturer has grown into a complete turnkey solution provider serving carriers, tower owners, and network operators nationwide.",
                ],
              },
              {
                heading: "Growth & investment",
                paragraphs: [
                  "In September 2021, CellSite Solutions received an investment from Boston-based private equity firm Fort Point Capital. The partnership fueled a major expansion of our capabilities — building teams of electricians, HVAC technicians, mechanical engineers, and civil engineers.",
                  "Today that means we deliver everything from shelter and generator foundations, grounding, electrical work, and compound fencing to backup generators, asset disposal, equipment removal, and complete site decommissioning.",
                ],
              },
            ]}
          />
          <Prose
            blocks={[
              {
                heading: "What we do today",
                paragraphs: [
                  "Our services span self-support towers and monopoles, outdoor cabinets, wireless construction, site civils, fixed network services, generators, HVAC and backup power, inside and outside plant, reconditioned shelters, decommissioning, integration, staging (rack & stack), craning and logistics, guy tower and rod inspections, and disaster recovery — a single source for the full life cycle of a cell site.",
                ],
              },
              {
                heading: "Our values",
                paragraphs: [
                  "Our executive team is dedicated to upholding our values of quality, safety, and innovation, ensuring our solutions meet the evolving needs of our clients.",
                  "Sustainability sits at the heart of everything we do: by remanufacturing telecom shelters, we extend their lifespan and reduce the environmental impact of producing new structures.",
                ],
              },
            ]}
          />
        </div>
      </Section>

      <Section muted>
        <StatBand
          stats={[
            { value: "2009", label: "Founded in Cedar Rapids, IA" },
            { value: "50", label: "States licensed" },
            { value: "Turnkey", label: "Full site life-cycle provider" },
            { value: "Nationwide", label: "Shipping & service" },
          ]}
        />
      </Section>

      <Section>
        <SectionHeading eyebrow="Our Values" title="Quality, safety, and innovation in everything we build" />
        <div className="mt-8">
          <CheckList
            columns={3}
            items={[
              "Quality — solutions that meet or exceed industry standards",
              "Safety — for our crews, customers, and the public",
              "Innovation — evolving with the needs of modern networks",
              "Sustainability — remanufacturing over building new",
              "Accountability — one team across the full project",
              "Reliability — networks that stay up",
            ]}
          />
        </div>
      </Section>

      <CTABand title="Partner with a full-life-cycle telecom provider" />
    </>
  );
}
