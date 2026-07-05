import type { Metadata } from "next";
import { PageHero, Section, SectionHeading, FeatureGrid, CTABand } from "@/components/sections";

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "CellSite Solutions serves wireless carriers, tower owners, fiber and cable providers, municipalities, and telecom co-ops across the United States.",
  alternates: { canonical: "/who-we-serve" },
};

const audiences = [
  {
    title: "Wireless Carriers",
    description:
      "The flexibility to add to and upgrade sites at the pace of evolving technology, essential maintenance to keep sites at their highest level, and a sophisticated selection of shelters, cabinets, HVAC, and alarm systems.",
  },
  {
    title: "Tower Owners",
    description:
      "Optimize and maintain your portfolio with reliable shelters, equipment, and site services that protect your assets and keep them performing.",
  },
  {
    title: "Fiber Networks",
    description:
      "Connection, protection, and maintenance for growing fiber networks — from state-of-the-art fiber huts to a full range of site services that keep data moving.",
  },
  {
    title: "Cable & Internet Providers",
    description:
      "Infrastructure and site services that help you improve customer service and expand reliable connectivity.",
  },
  {
    title: "Towns & Municipalities",
    description:
      "Enhance public connectivity with durable, cost-effective telecom infrastructure and dependable ongoing support.",
  },
  {
    title: "Telecom Co-ops",
    description:
      "Ensure reliable communication for your members with turnkey shelters, power, and maintenance built for the long term.",
  },
];

export default function WhoWeServePage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="Who We Serve"
        subtitle="Built for everyone behind the network."
        breadcrumb={[{ title: "Who We Serve", href: "/who-we-serve" }]}
      />

      <Section>
        <SectionHeading
          title="Someone has to build, maintain, and manage the network"
          subtitle="With an estimated 419,000 cellular service sites in the United States, CellSite Solutions serves the people responsible for every aspect of those sites — from tower owners optimizing site management to carriers expanding coverage and fiber providers enhancing connectivity."
        />
      </Section>

      <Section muted>
        <FeatureGrid items={audiences} columns={3} />
      </Section>

      <CTABand title="Let's talk about your sites" subtitle="Whatever role you play in the network, we have a solution built for it." />
    </>
  );
}
