import type { Metadata } from "next";
import { PageHero, Section, SectionHeading, Prose, FeatureGrid, CTABand } from "@/components/sections";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join CellSite Solutions in Cedar Rapids, IA. Careers for electricians, HVAC techs, engineers, and field crews in a culture of connection and growth.",
  alternates: { canonical: "/careers" },
};

const roles = [
  { title: "Electricians", description: "From apprentice to master electrician, wiring and powering telecom sites across the country." },
  { title: "HVAC Technicians", description: "Install, repair, and maintain heating, ventilation, and air-conditioning systems for critical shelters." },
  { title: "Mechanical Engineers", description: "Design and refine the systems behind our remanufactured shelters and equipment." },
  { title: "Civil Engineers", description: "Plan and manage foundations, grounding, and site construction." },
  { title: "Field Service Engineers", description: "Deploy, integrate, and commission equipment at sites nationwide." },
  { title: "Craning & Logistics", description: "Move, stage, and offload shelters and equipment safely and efficiently." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="Build Your Career With CellSite Solutions"
        subtitle="A culture of connection, education, and community."
        breadcrumb={[{ title: "Careers", href: "/careers" }]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <Prose
            blocks={[
              {
                heading: "A culture of connection, education & community",
                paragraphs: [
                  "A culture of connection, education, and community makes CellSite Solutions an exceptional place to develop your career. We are always looking to give back to employees, providing opportunities for growth, education, and advancement.",
                ],
              },
              {
                heading: "The Make It Happen Committee",
                paragraphs: [
                  "We reinforce our company culture through the Make It Happen Committee — a diverse, cross-departmental group that builds a cohesive culture through volunteering, team-building, and social events. It's one of the ways we stay connected to each other and to the communities we serve.",
                ],
              },
            ]}
          />
          <div className="rounded-2xl border border-border bg-secondary p-8">
            <h2 className="text-xl font-bold text-brand-dark">How to apply</h2>
            <p className="mt-3 text-muted-foreground">
              Explore current openings and apply through our recruiting portal, or find
              us on Indeed, LinkedIn, and ZipRecruiter, where we regularly post new
              positions.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="accent">
                <a href="https://recruiting.paylocity.com/recruiting/jobs/All/cellsite" target="_blank" rel="noopener noreferrer">
                  View open positions
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://www.linkedin.com/company/cellsite-solutions-llc/jobs/" target="_blank" rel="noopener noreferrer">
                  LinkedIn Jobs
                </a>
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Application links point to third-party recruiting portals — confirm the live URLs before launch.
            </p>
          </div>
        </div>
      </Section>

      <Section muted>
        <SectionHeading title="Roles we hire" subtitle="Our teams span the full range of trades and engineering behind a telecom site." />
        <div className="mt-8">
          <FeatureGrid items={roles} columns={3} />
        </div>
      </Section>

      <CTABand
        title="Ready to make it happen?"
        subtitle="Join a team that builds the infrastructure the country depends on."
        primary={{ label: "See open roles", href: "https://recruiting.paylocity.com/recruiting/jobs/All/cellsite" }}
      />
    </>
  );
}
