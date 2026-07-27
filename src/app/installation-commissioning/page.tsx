import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PhotoBand } from "@/components/photo-band";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Installation & Commissioning",
  description:
    "One source gets the job done. CellSite Solutions completes every aspect of telecom shelter installation and site commissioning—from the ground up.",
};

const IMG = "/images/wp-content/uploads";
const HERO = `${IMG}/2024/11/cellsite-services-shelterinstall-1920x1014_1.jpg`;

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
        image={HERO}
        lede="Once you've selected the right shelter, CellSite Solutions can complete every aspect of shelter installation and commissioning. We'll prep your site for the new structure and make sure all connections made and regulations met."
      />

      {/* ── One source gets the job done ──────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Full-Service Provider
            </p>
            <h2 className="mt-2 text-[35px] text-ink sm:text-[65px]">
              One Source Gets the Job Done
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              No need to coordinate vendors and communicate information across teams. CellSite
              Solutions offers comprehensive installation services, handling everything from the
              ground up&mdash;and quite a few things under it.
            </p>
          </div>
          <div className="group relative aspect-[4/3] overflow-hidden rounded-lg lg:aspect-[9/10]">
            <Image
              src={`${IMG}/2024/11/cellsite-services-shelterinstall2-960x1078-1.jpg`}
              alt="Telecom Shelter Installation"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* ── Why choose us — photo band ────────────────────────────── */}
      <PhotoBand image={HERO} card>
        <h3 className="text-2xl text-ink">WHY CHOOSE US?</h3>
        <p className="mt-4 text-base leading-relaxed text-muted">
          The telecommunication industry is more complex than ever. Telecommunication sites call
          for many different factors and require comprehensive installation, much of which you
          cannot handle in-house. This is especially true if you need fast service. Our talented
          installation experts at CellSite Solutions offer telecom shelter installation and site
          commissioning services.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          We work from the ground up&mdash;building structures and leaving you with a complete
          project that is ready to go. We are comfortable working with all of the top-brand
          products and can complete projects even on rough terrain.
        </p>
      </PhotoBand>

      {/* ── Our services ──────────────────────────────────────────── */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="group relative order-last aspect-[4/3] overflow-hidden rounded-lg lg:order-first lg:aspect-[9/10]">
            <Image
              src={`${IMG}/2024/11/cellsite-services-shelterinstall3-960x1078-1.png`}
              alt="CellSite Small Telecom Shelter"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Full-Service Provider
            </p>
            <h2 className="mt-2 text-[35px] text-ink sm:text-[65px]">Our Services</h2>
            <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-brand" />
                  <span className="text-base font-semibold text-ink">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
