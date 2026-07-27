import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PhotoBand } from "@/components/photo-band";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Cabinets",
  description:
    "Telecom equipment cabinets from CellSite Solutions protect your investment from weather and curious hands, extending the life of your equipment when you don't need a full concrete shelter.",
};

const IMG = "/images/wp-content/uploads";

const styles = [
  {
    lead: "Battery Storage Cabinets:",
    copy: " Store spare batteries—even massive gel cells—in controlled temperatures.",
  },
  {
    lead: "Transmission Cabinets:",
    copy: " Protect radio transmission racks.",
  },
];

export default function CabinetsPage() {
  return (
    <>
      <PageHero
        eyebrow="Cabinets"
        title="CABINETS"
        lede="Protect your investment from weather—and curious hands. When you don't need the space of a full precast concrete shelter, the right cabinet can extend the life of your equipment."
        image={`${IMG}/2024/11/Resized_20201218_133923.jpeg`}
      />

      {/* ── Security Pays for Itself ─────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Full-Service Provider
            </p>
            <h2 className="mt-2 text-[35px] uppercase text-ink sm:text-[65px]">
              Security Pays for Itself
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              In many cases, the right telecom cabinet could pay for itself in just a short time
              because of lowered repair expenses.
            </p>
          </div>
          <div className="relative aspect-[8/9] overflow-hidden rounded-lg bg-white">
            <Image
              src={`${IMG}/2024/11/cellsite-products-cabinets2-960x1078-1.jpeg`}
              alt="Telecom equipment cabinet"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* ── Cabinet Solutions (photo band) ───────────────────────── */}
      <PhotoBand image={`${IMG}/2024/11/Resized_20201218_133923-1.jpeg`}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[35px] uppercase sm:text-[65px]">CABINET SOLUTIONS</h2>
          <p className="mt-5 text-base leading-relaxed text-white/90">
            When you are in the telecommunications equipment business, you know all about equipment
            expenses. Even a little piece can be costly to replace or repair. Having the proper
            storage and protection in place can help you minimize—or even avoid—these costs.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/90">
            In addition to protecting equipment, it is important to realize that your equipment
            could be dangerous to curious children or animals. Placing this gear in properly latched
            cabinets will help avoid danger and could protect you from liability.
          </p>
        </div>
      </PhotoBand>

      {/* ── Available Styles ─────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="group relative aspect-[8/9] overflow-hidden rounded-lg">
            <Image
              src={`${IMG}/2024/11/cellsite-products-cabinets3-960x1078-1.png`}
              alt="Telecom cabinets in the CellSite Solutions warehouse"
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
            {styles.map((s) => (
              <p key={s.lead} className="mt-5 text-base leading-relaxed text-muted">
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
