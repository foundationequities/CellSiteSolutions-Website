import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Guy Tower & Rod Inspections",
  description:
    "CellSite Solutions provides cost-effective guy anchor rod inspections and protection to prevent galvanic corrosion and tower failure—extending the life of your guyed tower.",
};

const IMG = "/images/wp-content/uploads";

const steps = [
  "Our crew carefully excavates and cleans the guy anchor shafts to inspect for damage and corrosion.",
  "We take measurements of the shaft's overall dimensions to report any cross-sectional loss.",
  "Our crews coat the anchor shaft with Epoxy Mastic to prevent future corrosion.",
  "Major loss (over 50%) of an anchor shaft is documented and site technicians are notified.",
  "Temporary safety procedures and methods may need to be put in place until crews can make repairs.",
];

export default function GuyTowerRodInspectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Guy Tower & Rod Inspections"
        title="Guy Tower & Rod Inspections"
        image={`${IMG}/2024/10/cellsite-services-sitesurvey-1920x1014-2.jpeg`}
        lede="Guy wires and anchor rods are used to support a guyed tower. In order to maintain a proper level of performance, these anchor rods need to be examined periodically to ensure the integrity of the anchor rod has not been compromised. These inspections ensure the tower's safety, security, and life expectancy."
      />

      {/* ── Support lower costs ───────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-[35px] text-ink sm:text-[65px]">Support Lower Costs</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Regular inspections save you money by extending the life of your guyed tower. Avoid
              costly damage by identifying minor problems while they are still small&mdash;and taking
              care of them before they grow into major issues.
            </p>
          </div>
          <div className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl lg:aspect-[9/10] lg:-translate-y-6">
            <Image
              src={`${IMG}/2024/10/cellsite-services-guyrod2-960x1014-2.png`}
              alt="Guy Anchor Rod Inspection"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* ── why to choose us — texture band + photo ───────────────── */}
      <section
        className="relative overflow-hidden bg-white py-20"
        style={{
          backgroundImage: `url(${IMG}/2024/06/section-texture-mask-4.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-[35px] text-ink sm:text-[65px]">why to choose us</h2>
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
          <div className="group relative aspect-[4/3] overflow-hidden rounded-lg lg:aspect-[9/10]">
            <Image
              src={`${IMG}/2024/10/cellsite-services-guyrod3-960x1079-2.jpeg`}
              alt="Guy Tower Anchor Rod Excavation"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* ── How we work ───────────────────────────────────────────── */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-[35px] text-ink sm:text-[65px]">How We Work</h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((copy) => (
              <p key={copy} className="text-sm leading-relaxed text-muted">
                {copy}
              </p>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
