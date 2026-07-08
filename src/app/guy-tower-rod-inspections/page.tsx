import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Guy Tower & Rod Inspections",
  description:
    "CellSite Solutions provides cost-effective guy anchor rod inspections and protection to prevent galvanic corrosion and tower failure—extending the life of your guyed tower.",
};

const steps = [
  {
    title: "Cleaning",
    copy: "Our crew carefully excavates and cleans the guy anchor shafts to inspect for damage and corrosion.",
  },
  {
    title: "Measurements",
    copy: "We take measurements of the shaft's overall dimensions to report any cross-sectional loss.",
  },
  {
    title: "Coating",
    copy: "Our crews coat the anchor shaft with Epoxy Mastic to prevent future corrosion.",
  },
  {
    title: "Major Loss",
    copy: "Major loss (over 50%) of an anchor shaft is documented and site technicians are notified.",
  },
  {
    title: "Safety and Procedures",
    copy: "Temporary safety procedures and methods may need to be put in place until crews can make repairs.",
  },
];

export default function GuyTowerRodInspectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Guy Tower & Rod Inspections"
        title="Guy Tower & Rod Inspections"
        lede="Guy wires and anchor rods are used to support a guyed tower. In order to maintain a proper level of performance, these anchor rods need to be examined periodically to ensure the integrity of the anchor rod has not been compromised. These inspections ensure the tower's safety, security, and life expectancy."
      />

      {/* ── Support lower costs ───────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-[32px] text-ink sm:text-[40px]">Support Lower Costs</h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Regular inspections save you money by extending the life of your guyed tower. Avoid
            costly damage by identifying minor problems while they are still small—and taking care
            of them before they grow into major issues.
          </p>
          <h2 className="mt-12 text-[32px] text-ink sm:text-[40px]">why to choose us</h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Telecommunication tower sites have a number of safety procedures and processes set in
            place to ensure a tower&rsquo;s integrity is sustained over its lifespan. Guy anchor rods
            support a guyed tower&rsquo;s structure and, if not properly maintained, galvanic
            corrosion can build up and lead to tower failure.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            CellSite Solutions provides anchor rod protection to prevent tower failure. Guy anchor
            rod inspections are a cost-effective way to ensure your guyed tower maintains its
            structural integrity over time. We have evolved as experts in this telecom industry
            service and are a dependable resource for all your tower inspection needs.
          </p>
        </div>
      </section>

      {/* ── How we work ───────────────────────────────────────────── */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-[32px] text-ink sm:text-[40px]">How We Work</h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="rounded-lg border border-border bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="font-display text-2xl font-medium text-brand">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 text-xl text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
