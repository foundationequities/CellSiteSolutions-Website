import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "General Site Maintenance",
  description:
    "CellSite Solutions offers comprehensive general maintenance services for telecom sites—electrical maintenance, civil work, and equipment replacement to keep your infrastructure at peak performance.",
};

const IMG = "/images/wp-content/uploads";

const services = [
  "Electrical Maintenance",
  "Equipment replacement",
  "Weed remediation",
  "Fence repairs and tensioning",
  "New compound block grading",
  "Access road maintenance",
  "Grounding deficiencies",
];

export default function GeneralSiteMaintenancePage() {
  return (
    <>
      <PageHero
        eyebrow="General Site Maintenance"
        title="General Site Maintenance"
        lede="CellSite's maintenance is crucial to the ongoing protection of your equipment. To keep your site in the best possible shape, consider some of the following telecom maintenance services."
      />

      {/* ── One team for all needs ────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Full-Service Provider
            </p>
            <h2 className="mt-2 text-[32px] text-ink sm:text-[40px]">
              One Team for All Needs
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              CellSite Solutions offers comprehensive general maintenance services for telecom sites,
              ensuring that your infrastructure operates at peak performance year-round. Our
              experienced team provides expert electrical maintenance, civil work, and equipment
              replacement, addressing all aspects of telecom site upkeep. Whether it&rsquo;s ensuring
              reliable power systems, maintaining structural integrity, or replacing aging telecom
              equipment, we deliver tailored solutions that meet the specific needs of your site. With
              a focus on safety, efficiency, and quality, CellSite Solutions helps minimize downtime
              and extend the lifespan of your telecom building.
            </p>
            <h3 className="mt-8 text-xl text-ink">WHY CHOOSE US?</h3>
            <p className="mt-3 text-base leading-relaxed text-muted">
              The overall appearance of your site makes an important impression on both neighbors and
              potential investors. Even more important, site upkeep can extend the life of your
              equipment by maintaining proper surroundings. Something as simple as removing brush can
              prevent on-site pests, while fencing repair keeps other kinds of unwanted visitors away.
              When you need upgrades to your access road or compound block grading, CellSite can
              provide routine and emergency maintenance.
            </p>
          </div>
          <div className="group relative aspect-[4/3] overflow-hidden rounded-lg lg:aspect-[9/10]">
            <Image
              src={`${IMG}/2024/11/cellsite-services-generalsitemaintenance3-960x1078-1.jpg`}
              alt="Telecom Concrete Shelter Site Maintenance"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* ── Services we offer ─────────────────────────────────────── */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Full-Service Provider
            </p>
            <h2 className="mt-2 text-[32px] text-ink sm:text-[40px]">Services We Offer</h2>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li
                key={s}
                className="flex items-center gap-3 rounded-lg border border-border bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-brand" />
                <span className="text-base font-semibold text-ink">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
