import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Engineering Drawings",
  description:
    "Our professional engineering team can provide technical illustrations for all aspects of your telecom project, including OSP and ISP drawings for code and permit approvals.",
};

const IMG = "/images/wp-content/uploads";

const included = [
  "Orthogonal drawings: front,",
  "Side and top",
  "Dimensions",
  "Scale",
  "Projection",
  "Standards (ASME Y14/ANSI Y14)",
];

export default function EngineeringDrawingsPage() {
  return (
    <>
      <PageHero
        eyebrow="Engineering Drawings"
        title="Engineering Drawings"
        lede="Our professional engineering team can provide technical illustrations for all aspects of your project."
      />

      {/* Comply With Code */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Full-Service Provider
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">Comply With Code</h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            CellSite Solutions can provide necessary engineering drawings for our remanufactured
            telecommunication buildings and equipment often needed for code or permit approvals.
            These detailed drawings showcase the quality, precision, and reliability of our telecom
            hubs, ensuring that each shelter is built to withstand the rigorous demands of the
            telecommunications industry. By offering comprehensive engineering designs, we
            demonstrate our commitment to excellence and provide transparency in the remanufacturing
            process.
          </p>
        </div>
      </section>

      {/* Why Choose Us split */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Why Choose Us?</p>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Engineering documents are essential for documenting and communicating your site plan to
              various vendors and civil agencies. Both during an initial telecom site build and when
              adding to or modifying a site, quality drawings can speed approvals and even the build
              itself.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Our engineers will draft the layout and communication buildings on your telecom site to
              show structural soundness, placement of materials, and compliance with local building
              codes. We offer both OSP and ISP drawings to document your whole investment.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={`${IMG}/2024/11/cellsite-services-engineeringdrawings3-960x1079-1.jpeg`}
              alt="Telecom Site Planning"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* What We Include */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Full-Service Provider
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">What We Include</h2>
          </div>
          <ul className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
            {included.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border border-border bg-white p-5 shadow-sm"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand" />
                <span className="text-base text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
