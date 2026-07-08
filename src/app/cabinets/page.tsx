import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Cabinets",
  description:
    "Telecom equipment cabinets from CellSite Solutions protect your investment from weather and curious hands, extending the life of your equipment when you don't need a full concrete shelter.",
};

const IMG = "/images/wp-content/uploads";

export default function CabinetsPage() {
  return (
    <>
      <PageHero
        eyebrow="Cabinets"
        title="CABINETS"
        lede="Protect your investment from weather—and curious hands. When you don't need the space of a full precast concrete shelter, the right cabinet can extend the life of your equipment."
        image={`${IMG}/2024/11/cellsite-products-cabinets3-960x1078-1.png`}
      />

      {/* ── Security Pays for Itself ─────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Full-Service Provider
            </p>
            <h2 className="mt-2 text-[32px] text-ink sm:text-[40px]">Security Pays for Itself</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              In many cases, the right telecom cabinet could pay for itself in just a short time
              because of lowered repair expenses.
            </p>
            <h3 className="mt-8 text-2xl text-ink">CABINET SOLUTIONS</h3>
            <p className="mt-3 text-base leading-relaxed text-muted">
              When you are in the telecommunications equipment business, you know all about equipment
              expenses. Even a little piece can be costly to replace or repair. Having the proper
              storage and protection in place can help you minimize—or even avoid—these costs.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              In addition to protecting equipment, it is important to realize that your equipment
              could be dangerous to curious children or animals. Placing this gear in properly latched
              cabinets will help avoid danger and could protect you from liability.
            </p>
          </div>
          <div className="group relative aspect-[3/4] overflow-hidden rounded-lg">
            <Image
              src={`${IMG}/2024/11/cellsite-products-cabinets3-960x1078-1.png`}
              alt="Telecommunications Shelters"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* ── Available Styles ─────────────────────────────────────── */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Full-Service Provider
            </p>
            <h2 className="mt-2 text-[32px] text-ink sm:text-[40px]">Available Styles</h2>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-lg">
              <h3 className="text-xl text-ink">Battery Storage Cabinets</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Store spare batteries—even massive gel cells—in controlled temperatures.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-lg">
              <h3 className="text-xl text-ink">Transmission Cabinets</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Protect radio transmission racks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
