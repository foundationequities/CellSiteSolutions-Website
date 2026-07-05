import type { Metadata } from "next";
import { PageHero, Section, SectionHeading, Prose, StatBand, CTABand } from "@/components/sections";

export const metadata: Metadata = {
  title: "Sustainable Practices",
  description:
    "CellSite Solutions is an EPA-compliant refrigerant recycler. Each remanufactured shelter keeps 20 tons of concrete out of landfills.",
  alternates: { canonical: "/sustainable-practices" },
};

export default function SustainablePage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="Sustainable Practices"
        subtitle="Environmental responsibility guides every project we take on."
        breadcrumb={[{ title: "Sustainable Practices", href: "/sustainable-practices" }]}
      />

      <Section>
        <Prose
          blocks={[
            {
              heading: "Sustainability at the heart of what we do",
              paragraphs: [
                "At CellSite Solutions, environmental responsibility guides every project. By recycling and reusing previously owned telecom shelters, we minimize waste and reduce the need for new materials.",
                "Carefully restoring and remanufacturing telecom huts reduces the carbon footprint of infrastructure projects and extends the useful life of assets that would otherwise be scrapped.",
              ],
            },
          ]}
        />
      </Section>

      <Section muted>
        <SectionHeading center title="The measurable impact of choosing remanufactured" />
        <div className="mt-10">
          <StatBand
            stats={[
              { value: "20 tons", label: "Concrete saved per shelter" },
              { value: "17.5M lbs", label: "Concrete diverted each year" },
              { value: "EPA", label: "Compliant refrigerant recycler" },
              { value: "100%", label: "Site remediation & restoration" },
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <Prose
            blocks={[
              {
                heading: "20 tons of concrete, saved per shelter",
                paragraphs: [
                  "Each remanufactured shelter prevents 20 tons of concrete from ending up in a landfill. On a larger scale, by recycling shelters and other products, we keep 17.5 million pounds of concrete out of landfills each year — a measurable impact from choosing remanufactured over new.",
                ],
              },
              {
                heading: "EPA-compliant refrigerant recycling",
                paragraphs: [
                  "We prioritize recycling materials to reduce environmental waste and operate as an EPA-compliant refrigerant recycler, ensuring that refrigerants and other regulated materials are recovered and handled responsibly rather than released or discarded.",
                ],
              },
            ]}
          />
          <Prose
            blocks={[
              {
                heading: "Clean site remediation",
                paragraphs: [
                  "Our site remediation service leaves the land clean and ready to be reclaimed by nature at a project's end. From decommissioning to material recovery, we shut down telecom sites the sustainable way — restoring the land while responsibly recycling the assets we remove.",
                ],
              },
            ]}
          />
        </div>
      </Section>

      <CTABand title="Build sustainably with remanufactured infrastructure" />
    </>
  );
}
