import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Installation & Commissioning",
  description:
    "One source gets the job done. CellSite Solutions completes every aspect of telecom shelter installation and site commissioning—from the ground up.",
};

const IMG = "/images/wp-content/uploads";

const services = [
  "Civil Work",
  "Shelter Stoops",
  "Shelter Tie-Down",
  "Compound Fencing",
  "Generator Pads",
  "Grounding Rings",
  "Trenching Conduit",
  "Power Connectivity",
  "Crane Offloads",
  "Weed Barrier",
];

export default function InstallationCommissioningPage() {
  return (
    <>
      <PageHero
        eyebrow="Installation & Commissioning"
        title="Installation & Commissioning"
        lede="Once you've selected the right shelter, CellSite Solutions can complete every aspect of shelter installation and commissioning. We'll prep your site for the new structure and make sure all connections made and regulations met."
      />

      {/* ── Why choose us ─────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Full-Service Provider
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">
              One Source Gets the Job Done
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              No need to coordinate vendors and communicate information across teams. CellSite
              Solutions offers comprehensive installation services, handling everything from the
              ground up—and quite a few things under it.
            </p>
            <h3 className="mt-8 text-lg font-bold uppercase text-ink">Why Choose Us?</h3>
            <p className="mt-3 text-base leading-relaxed text-muted">
              The telecommunication industry is more complex than ever. Telecommunication sites call
              for many different factors and require comprehensive installation, much of which you
              cannot handle in-house. This is especially true if you need fast service. Our talented
              installation experts at CellSite Solutions offer telecom shelter installation and site
              commissioning services.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We work from the ground up—building structures and leaving you with a complete project
              that is ready to go. We are comfortable working with all of the top-brand products and
              can complete projects even on rough terrain.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg lg:aspect-[9/10]">
            <Image
              src={`${IMG}/2024/11/cellsite-services-shelterinstall3-960x1078-1.png`}
              alt="CellSite Small Telecom Shelter"
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
