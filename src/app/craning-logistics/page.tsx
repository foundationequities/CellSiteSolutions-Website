import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Craning & Logistics",
  description:
    "CellSite Solutions offers end-to-end logistics for projects requiring heavy and oversize haul shipping, plus crane services, rigging, and shelter warehousing.",
};

const IMG = "/images/wp-content/uploads";

const services = [
  "Equipment Loading, Delivery & Off-loading",
  "Heavy-Haul and Over-Dimensional Shipping",
  "International Shipping",
  "Shelter Warehousing",
  "Crane Services",
];

const fleet = [
  {
    category: "Trucks",
    items: ["Five New 2025 International LT 62"],
  },
  {
    category: "Trailers",
    items: [
      "Four 48 ft Dorsey Step deck 100 K beam",
      "One 53 FT step deck combo  Steel Frame Aluminum Deck",
      "Two 48 Ft step deck combo   Steel Frame Aluminum Deck",
    ],
  },
  {
    category: "Cranes",
    items: [
      "2017 Link-Belt ATC-3210, All-terrain 210 ton crane",
      "2020 Link-Belt 175-AT, All-terrain 175 ton crane",
    ],
  },
];

export default function CraningLogisticsPage() {
  return (
    <>
      <PageHero
        eyebrow="Craning & Logistics"
        title="Craning & Logistics"
        lede="CellSite offers logistics services for projects that require heavy and oversize haul shipping. No need for a separate vendor; let us handle transportation from end to end."
      />

      {/* Outdoor or Indoor Storage */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Full-Service Provider
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">
            Outdoor or Indoor Storage
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Our warehouses offer secure outdoor storage for short and long-term warehousing. Indoor
            and climate-controlled warehousing is available in select states.
          </p>
        </div>
      </section>

      {/* Why Choose Us split */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Why Choose Us?</p>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Whether your telecom site is down the street or across the country, we have the fleet
              and the know-how to get your communications building where it needs to be. Long and
              short haul, over-dimensional or overweight&hellip;not a problem. We also offer crane
              shipping and rigging to your specifications, with cost-effective rental and leasing
              options.
            </p>
            <ul className="mt-6 space-y-3 text-base text-ink">
              {services.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={`${IMG}/2024/11/cellsite-services-logistics3-960x1078-1.png`}
              alt="CellSite Logistics Craning Service"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Fleet */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Full-Service Provider
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">Our Fleet</h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {fleet.map((col) => (
              <div
                key={col.category}
                className="rounded-lg border border-border bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold uppercase text-ink">{col.category}</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted">
                  {col.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
