import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Installation & Integration",
  description:
    "CellSite Solutions integrates your new telecom equipment with expert inside plant (ISP) installation—cable trays, racks, power distribution, and more.",
};

const IMG = "/images/wp-content/uploads";

const ispItems = [
  "Overhead Cable Trays",
  "Fiber Management Trays",
  "Battery and Data",
  "Racks/Cabinets",
  "Main Power Distribution",
  "Panels/Main Distribution Frame (MDF)",
  "ATS Panel",
  "Rack Mount DC Power Plant",
  "Telemetry panels and wiring",
  "Rack Mounted Fuse Panels",
  "Rack Mounted Fiber Distribution Panels (FDP)",
];

export default function InstallationIntegrationPage() {
  return (
    <>
      <PageHero
        eyebrow="Installation & Integration"
        title="Installation & Integration"
        lede="Your gear is here—but there's still a step left. When you want a skilled, experienced team to help integrate your new equipment, CellSite can provide that as well."
      />

      {/* ── ISP expertise ─────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Full-Service Provider
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">
              Keep the Details In Mind
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Our experienced specialists know telecom shelters inside and out. They are attuned to
              the smallest details and rarely encounter an issue they haven&rsquo;t dealt with before.
              You can trust CellSite to keep ISP components in top condition, ready to support the
              latest technology.
            </p>
            <h3 className="mt-8 text-lg font-bold uppercase text-ink">ISP Expertise</h3>
            <p className="mt-3 text-base leading-relaxed text-muted">
              CellSite Solutions has the resources available to complete inside plant (ISP) installs
              to your specifications. Our ISP installation team is able to install any or all of your
              ISP components. This includes the installation of:
            </p>
            <ul className="mt-5 grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {ispItems.map((it) => (
                <li key={it} className="flex gap-2 text-sm text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg lg:aspect-[9/10]">
            <Image
              src={`${IMG}/2024/11/cellsite-services-installintegration3-960x1078-1.jpg`}
              alt="Shelter Inside Plant Equipment"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Integrated team ───────────────────────────────────────── */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Full-Service Provider
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">An Integrated Team</h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            At CellSite, our various teams are used to working together, sharing information, and
            creating synergy. It just makes sense to use our services end to end when you want an
            efficient and easy process.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
