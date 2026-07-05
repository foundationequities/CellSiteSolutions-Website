import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Site Decommissioning",
  description:
    "Turnkey telecom decommissioning services from CellSite Solutions—tower removal, communication shelter removal, asset disposal, and full site remediation with low impact and high reward.",
};

const IMG = "/images/wp-content/uploads";

const services = [
  "Cell Tower Removal",
  "Communication Shelter Removal",
  "Asset Disposal",
  "Site Remediation",
  "Light and Antenna Removal",
  "Asset Tracking",
  "R2 Standard for Responsible Recycling",
  "Internal Equipment Removal",
  "Battery Disposal",
];

export default function SiteDecommissioningPage() {
  return (
    <>
      <PageHero
        eyebrow="Site Decommissioning"
        title="Site Decommissioning"
        lede="Unlike demolition of a simple structure, telecom demolition services are explicitly designed to solve the unique problems that happen when telecom equipment is involved. This can include towers, batteries, internal equipment, hazardous material, and communication shelter removal."
      />

      {/* ── Low impact high reward ────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Full-Service Provider
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">
              Low Impact High Reward
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              We always work to ensure a safe project and to have as little of an impact on
              surrounding structures as possible. We bring the land back to working condition so it
              can be used for other building purposes. During site cleanup, we remove the old
              potentially hazardous materials to ensure the land is restored with proper safety in
              mind.
            </p>
            <h3 className="mt-8 text-lg font-bold uppercase text-ink">Why Choose Us?</h3>
            <p className="mt-3 text-base leading-relaxed text-muted">
              Before we begin telecom decommissioning, we make certain there are no other legal claims
              to the site work within the law and give proper notice of termination to any third
              parties. Next, we recover all branded equipment, which you can reuse or have us dispose
              of safely.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Our next step is to decommission the radio and microwave-based equipment carefully, so
              as not to cause damage. Then, we manage the entire process of disconnecting the power
              supply to the site. Next, we&rsquo;ll remove the communication shelter, including all
              electrical equipment and wiring. Circuits are tested and can be kept for reuse if you
              wish. Finally, we dismantle the steelworks or perform selective or full-site demolition.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg lg:aspect-[9/10]">
            <Image
              src={`${IMG}/2024/11/cellsite-services-sitedecom3-960x1079-1.jpeg`}
              alt="Telecom Wireless Tower Decom"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Our services ──────────────────────────────────────────── */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Full-Service Provider
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">Our Services</h2>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li
                key={s}
                className="flex items-center gap-3 rounded-lg border border-border bg-white p-5 shadow-sm"
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
