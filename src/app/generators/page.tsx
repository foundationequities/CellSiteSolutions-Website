import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Generators",
  description:
    "CellSite Solutions stocks a wide selection of new generators for sale, from single-phase to 3-phase, including natural gas, diesel, and propane, to keep your telecom network running.",
};

const IMG = "/images/wp-content/uploads";

const styles = [
  {
    title: "Natural Gas Generators",
    copy: "Natural Gas Generators run relatively clean with low odor. Because fuel is delivered by pipeline, consider the impact of supply interruptions in your decision.",
  },
  {
    title: "Diesel Generators",
    copy: "Diesel Generators are efficient and cost-effective and run on fuel oil even when other forms of electricity are unavailable.",
  },
  {
    title: "Propane Generators",
    copy: "Propane Generators are a strong, quiet choice for emergency preparedness. Propane is clean-burning, making it safe and sanitary for storage.",
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
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Full-Service Provider
          </p>
          <h2 className="mt-2 text-[32px] text-ink sm:text-[40px]">Power Up</h2>
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
      </section>

      {/* ── Wide Selection ───────────────────────────────────────── */}
      <section className="bg-surface-dark py-20 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-[32px] sm:text-[40px]">WIDE SELECTION</h2>
          <p className="mt-5 text-base leading-relaxed text-white/80">
            CellSite Solutions stocks a wide variety of new generators for sale, in sizes from
            single-phase to 3-phase. Our commercial generators are able to handle large-scale power
            needs, providing power indefinitely until the main power line is working again. This means
            they offer your business the stability of uninterrupted processes, even when you&apos;re
            using heavy machinery, a large network of computers, elevators, high-level medical
            equipment, or more. Any time the power is disrupted, your generator kicks in to save the
            day.
          </p>
        </div>
      </section>

      {/* ── Available Styles ─────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Full-Service Provider
            </p>
            <h2 className="mt-2 text-[32px] text-ink sm:text-[40px]">Available Styles</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              We carry single-phase to 3-phase generators.
            </p>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {styles.map((s) => (
              <div
                key={s.title}
                className="rounded-lg border border-border bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <h3 className="text-xl text-ink">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
