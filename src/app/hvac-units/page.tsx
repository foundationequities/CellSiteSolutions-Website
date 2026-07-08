import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "HVAC Units",
  description:
    "CellSite Solutions offers telecom shelter HVAC units ranging from two to six-ton, with or without economizers or heat strips, to keep your critical equipment at peak efficiency.",
};

const IMG = "/images/wp-content/uploads";

export default function HvacUnitsPage() {
  return (
    <>
      <PageHero
        eyebrow="HVAC Units"
        title="HVAC Units"
        lede="Telecommunications and cellular site equipment can be sensitive, and a steady temperature must be maintained in your shelter throughout the year to ensure your equipment functions at maximum efficiency."
        image={`${IMG}/2024/10/cellsite_products_hvac-1920x1014-1.png`}
      />

      {/* ── Reliability ──────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Full-Service Provider
          </p>
          <h2 className="mt-2 text-[32px] text-ink sm:text-[40px]">Reliability</h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Telecom failure may not only be costly to repair—it can also lead to serious problems
            for your customers. An outage can cost you money and cause customers to leave your
            company for a more reliable carrier. Simply installing and maintaining an HVAC system
            can prevent these problems.
          </p>
          <h3 className="mt-8 text-2xl text-ink">Hvac importance</h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Expensive telecom equipment needs protection not just from precipitation, but also from
            extremes of heat and cold. The best way to guarantee that your equipment maintains its
            core temperature is to install a Heating, Ventilation and Cooling (HVAC) unit in your
            telecommunications shelter.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            An HVAC unit in a telecom shelter works much like it does in a home or office, as both
            an air conditioner and a heater. It keeps the air cooler in the summer and warmer in the
            winter—making for a moderate, regulated temperature ideal for ensuring proper efficiency
            of your equipment.
          </p>
        </div>
      </section>

      {/* ── Find Your Fit ────────────────────────────────────────── */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Full-Service Provider
          </p>
          <h2 className="mt-2 text-[32px] text-ink sm:text-[40px]">Find Your Fit</h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            CellSite offers a wide variety of options ranging in size from two to six-ton units. We
            also have units available with or without economizers or heat strips. While our
            competitors offer a one-size-fits-all approach to HVAC, the CellSite Solutions team knows
            that our customers have varying needs. We will work with you to make sure you get the
            exact size and type of unit that will serve you best.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
