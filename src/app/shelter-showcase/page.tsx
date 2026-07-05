import type { Metadata } from "next";
import { PageHero, Section, SectionHeading, CTABand } from "@/components/sections";
import { YouTubeEmbed } from "@/components/youtube-embed";

export const metadata: Metadata = {
  title: "Shelter Showcase & Case Studies",
  description:
    "See CellSite Solutions shelter transformations — from dilapidated surplus units to like-new telecom shelters with custom HVAC, gen rooms, and finishes.",
  alternates: { canonical: "/shelter-showcase" },
};

const projects = [
  {
    title: "12' x 30' Gen-Room Transformation",
    tag: "Full remanufacture",
    body: "We started with a severely dilapidated 12' x 30' telecom shelter — part of the interior roof had collapsed and both the interior and exterior had significant cosmetic damage — yet the concrete infrastructure remained structurally sound. The customer needed part of the shelter converted into a generator room on a tight timeline and budget.",
    details: [
      "Partitioned interior for telecom racks and a generator",
      "Two new door locations added on one side",
      "Original door opening repurposed as a gen-room air-intake louver",
      "New energy-efficient polyvinyl roof (10-year workmanship warranty)",
      "Concrete sealant, re-caulked seams, and industrial-grade paint matched to spec",
    ],
  },
  {
    title: "11' x 20' Redundant HVAC Build",
    tag: "Climate control",
    body: "A climate-control showcase featuring AIRSYS HVAC units mounted on both the front and back of the shelter for enhanced airflow and redundancy — keeping critical equipment cool even under peak thermal load.",
    details: [
      "AIRSYS variable HVAC units front and back",
      "Redundant configuration for continuous uptime",
      "Complete alarm package with temperature sensors",
    ],
  },
  {
    title: "12' x 28' High-Capacity Cooling",
    tag: "Climate control",
    body: "A 12' x 28' shelter running three 6-ton Bard HVAC units on a PLC controller capable of running all units simultaneously for maximum cooling — engineered for the most demanding equipment loads.",
    details: [
      "Three 6-ton Bard units",
      "PLC controller running all units simultaneously",
      "Maximum-cooling configuration for dense equipment",
    ],
  },
];

export default function ShelterShowcasePage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Shelter Showcase: Transformations That Prove It"
        subtitle="Real completed projects that demonstrate what remanufacturing can achieve."
        breadcrumb={[{ title: "Shelter Showcase", href: "/shelter-showcase" }]}
      />

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="From surplus to like-new"
              title="We restore shelters using more durable materials than are often found on brand-new units"
            />
            <p className="mt-4 text-muted-foreground">
              Our Shelter Showcase highlights real completed projects that demonstrate
              what remanufacturing can achieve — from structural restoration to custom
              gen rooms and high-capacity climate control.
            </p>
          </div>
          <YouTubeEmbed id="Inn3YnBQWG4" title="Telecom Shelter Remanufacture — CellSite Solutions" />
        </div>
      </Section>

      <Section muted>
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm">
              <span className="w-fit rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand">
                {p.tag}
              </span>
              <h3 className="mt-4 text-lg font-bold text-brand-dark">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <ul className="mt-4 space-y-2 border-t border-border pt-4 text-sm text-foreground/90">
                {p.details.map((d) => (
                  <li key={d} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {d}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <CTABand
        title="Have a shelter that needs a second life?"
        subtitle="Send us the details and we'll show you what remanufacturing can do for your budget and timeline."
      />
    </>
  );
}
