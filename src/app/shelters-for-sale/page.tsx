import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Shelters for Sale",
  description:
    "Surplus 10' x 20' and 12' x 20' concrete telecom shelters available as-is (DIY) or fully remanufactured and ready for deployment. Reach out for current availability and pricing.",
};

const IMG = "/images/wp-content/uploads";

const choice = [
  {
    title: "Affordability",
    copy: "Our remanufactured shelters provide a cost-effective “like new” alternative that delivers the same reliability and durability as brand-new units, but at a fraction of the price.",
  },
  {
    title: "Durability",
    copy: "Each remanufactured shelter is meticulously upgraded with new components, ensuring unmatched durability and energy efficiency, even in the most challenging environments.",
  },
  {
    title: "Timeliness",
    copy: "Our customized shelters are delivered in weeks to months—often much faster than newly manufactured options, helping you stay on schedule and avoid costly delays.",
  },
];

export default function SheltersForSalePage() {
  return (
    <>
      <PageHero
        eyebrow="Shelters for Sale"
        title="Surplus Concrete Shelters"
        lede="We're offering a limited surplus of 10' x 20' and 12' x 20' concrete telecom shelters at short-term discounted pricing. These durable, secure shelters are ideal for telecom and critical equipment applications."
        image={`${IMG}/2025/04/2036-Exterior-side.jpg`}
      />

      {/* ── Surplus intro ────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            10&prime; x 20&prime; &amp; 12&prime; x 20&prime;
          </p>
          <h2 className="mt-2 text-[32px] text-ink sm:text-[40px]">Surplus Concrete Shelters</h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Inventory is limited and discounts are available for a short window only.
          </p>
          <p className="mt-6 text-xs italic text-muted">
            * Photos reflect remanufactured shelter quality. DIY shelters are sold as-is and will vary
            in condition.
          </p>
          <div className="mt-8 rounded-lg border border-border bg-[#f9f9f9] p-6">
            <h3 className="text-xl text-ink">Missed the sale? Let&rsquo;s still connect.</h3>
            <p className="mt-3 text-base leading-relaxed text-muted">
              While this promotion has ended, our team may still have options available that meet your
              needs. Reach out to learn about current inventory, pricing, or upcoming opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* ── Discounted Options ───────────────────────────────────── */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-[32px] text-ink sm:text-[45px]">Discounted Options</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg">
              <h3 className="text-xl text-ink">DIY Shelter — $14,000 or $15,000</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Purchase a structurally sound 10&prime; x 20&prime; concrete telecom shelter sold as-is
                for $14,000 or a 12&prime; x 20&prime; concrete telecom shelter sold as-is for $15,000.
                Ideal for teams that prefer to manage refurbishment and equipment fit-out in-house. A
                cost-effective solution with maximum flexibility.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg">
              <h3 className="text-xl text-ink">Remanufactured Shelter — SAVE $6,000 or $7,000</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Get $6,000 OFF a fully remanufactured 10&prime; x 20&prime; concrete telecom shelter, or
                get $7,000 OFF a fully remanufactured 12&prime; x 20&prime; concrete telecom shelter,
                professionally restored and ready for deployment with reduced lead time compared to new
                construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Let's find the right fit + form ──────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
          <div>
            <h2 className="text-[32px] text-ink sm:text-[40px]">
              LET&rsquo;S FIND THE RIGHT FIT
            </h2>
            <h3 className="mt-3 text-2xl text-brand">Call +1 855 CEL SITE</h3>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Reach out to learn more about current availability, pricing, and whether these shelters
              are the right solution for your needs.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                As-is units are available for immediate pickup.
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                Remanufactured shelters include a scheduled delivery date.
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                Please note: Delivery fees are not included in the sale price.
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-[#f9f9f9] p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── Remanufactured vs New ────────────────────────────────── */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">The Choice</p>
            <h2 className="mt-2 text-[32px] text-ink sm:text-[40px]">
              REMANUFACTURED vs NEW SHELTERS
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {choice.map((c) => (
              <div
                key={c.title}
                className="rounded-lg border border-border bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <h3 className="text-xl text-ink">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{c.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
