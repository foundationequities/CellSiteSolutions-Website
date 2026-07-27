import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PhotoBand } from "@/components/photo-band";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Generators",
  description:
    "CellSite Solutions stocks a wide selection of new generators for sale, from single-phase to 3-phase, including natural gas, diesel, and propane, to keep your telecom network running.",
};

const IMG = "/images/wp-content/uploads";

const styles = [
  {
    lead: "Natural Gas Generators",
    copy: " run relatively clean with low odor. Because fuel is delivered by pipeline, consider the impact of supply interruptions in your decision.",
  },
  {
    lead: "Diesel Generators",
    copy: " are efficient and cost-effective and run on fuel oil even when other forms of electricity are unavailable.",
  },
  {
    lead: "Propane Generators",
    copy: " are a strong, quiet choice for emergency preparedness. Propane is clean-burning, making it safe and sanitary for storage.",
  },
];

export default function GeneratorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Generators"
        title="Generators"
        lede="When the power goes down, you stay up and running. That's the simple promise of all of our generators: your network will always have a reliable, high-performance solution to maintain service in any conditions."
        image={`${IMG}/2024/11/cellsite-products-generators-1920x1014-1.jpg`}
      />

      {/* ── Power Up ─────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Full-Service Provider
            </p>
            <h2 className="mt-2 text-[35px] uppercase text-ink sm:text-[65px]">Power Up</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Backed by more than 20 years of experience in the telecommunications industry, CellSite
              Solutions has the knowledge and expertise to help customers select the right generator
              for their critical infrastructure.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We understand that every telecom site has unique power requirements, environmental
              conditions, and operational goals, which is why we take the time to understand your
              specific application before making a recommendation. Whether you need reliable backup
              power for a remote cell site, public safety communications, broadband network, or
              mission-critical facility, our team will guide you toward the best solution for your
              budget, performance needs, and long-term reliability.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              From consultation and equipment selection to installation and ongoing support, we&apos;re
              committed to delivering dependable power solutions that keep your network running when it
              matters most.
            </p>
          </div>
          <div className="group relative aspect-[8/9] overflow-hidden rounded-lg">
            <Image
              src={`${IMG}/2024/11/cellsite-products-generators2-960x1079-1.jpeg`}
              alt="Commercial generator at a telecom site"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* ── Wide Selection (photo band) ──────────────────────────── */}
      <PhotoBand image={`${IMG}/2024/11/cellsite-products-generators-1920x1014-1.jpg`}>
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-[30px] uppercase sm:text-[55px]">WIDE SELECTION</h3>
          <p className="mt-5 text-base leading-relaxed text-white/90">
            CellSite Solutions stocks a wide variety of new generators for sale, in sizes from
            single-phase to 3-phase. Our commercial generators are able to handle large-scale power
            needs, providing power indefinitely until the main power line is working again. This means
            they offer your business the stability of uninterrupted processes, even when you&apos;re
            using heavy machinery, a large network of computers, elevators, high-level medical
            equipment, or more. Any time the power is disrupted, your generator kicks in to save the
            day.
          </p>
        </div>
      </PhotoBand>

      {/* ── Available Styles ─────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* Live shows a fading slideshow of generator photos; static first image here.
              Remaining slides: 2026/06/Generac-Generator-OnSite.png,
              2024/11/cellsite-products-generator3-960x1078-1.jpg */}
          <div className="group relative aspect-[8/9] overflow-hidden rounded-lg">
            <Image
              src={`${IMG}/2026/06/Generac-Generator-CellSite.png`}
              alt="Generac generator at CellSite Solutions"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Full-Service Provider
            </p>
            <h2 className="mt-2 text-[35px] uppercase text-ink sm:text-[65px]">Available Styles</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              We carry single-phase to 3-phase generators.
            </p>
            {styles.map((s) => (
              <p key={s.lead} className="mt-4 text-base leading-relaxed text-muted">
                <strong className="font-bold text-ink">{s.lead}</strong>
                {s.copy}
              </p>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
