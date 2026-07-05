import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Other ISP Services",
  description:
    "CellSite Solutions is your partner for regular inside plant (ISP) maintenance — from equipment upgrades and wiring to floor installation, wall repair, and painting.",
};

const IMG = "/images/wp-content/uploads";

const services = [
  "Equipment Upgrades",
  "Wiring",
  "Floor Installation",
  "Wall Repair",
  "Painting",
];

export default function OtherIspServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Other ISP Services"
        title="Other ISP Services"
        lede="There's always something: a floor to replace or an outlet to repair, or an upgrade to your gear that requires more rack space. CellSite Solutions is your partner for regular ISP maintenance."
      />

      {/* Keep Up With Technology */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Full-Service Provider
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">
            Keep Up With Technology
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Rapidly evolving technology often means gear needs to be upgraded too. We are able to add
            new equipment and configure it to your system whenever change happens. With access to just
            about every piece of gear on the market, you&rsquo;ll never find yourself behind the curve.
          </p>
        </div>
      </section>

      {/* Why Choose Us split */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Why Choose Us?</p>
            <p className="mt-5 text-base leading-relaxed text-muted">
              CellSite Solutions can diagnose and replace any broken or damaged ISP components. From
              upgrading your technology stack to replacing flooring and cable trays, we have the
              skills and people to take care of it. Whatever your operation needs to reach the next
              level, we can have it done before you miss a beat.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={`${IMG}/2024/11/cellsite-services-otherISP3-960x1079-1.jpg`}
              alt="Inside Plant Services"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Full-Service Provider
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">Our Services</h2>
          </div>
          <ul className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
            {services.map((item) => (
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
