import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { VideoLightbox } from "@/components/video-lightbox";
import { MATTERPORT_TOUR } from "@/lib/videos";

export const metadata: Metadata = {
  title: "Shelters",
  description:
    "CellSite Solutions offers the largest selection of built-to-spec remanufactured telecom shelters on the market, in sizes from 6' x 8' to 12' x 28', shipped nationwide.",
};

const IMG = "/images/wp-content/uploads";

export default function TelecomSheltersPage() {
  return (
    <>
      <PageHero
        eyebrow="Shelters"
        title="SHELTERS"
        lede="At CellSite Solutions, we're proud to provide a wide selection of built-to-spec remanufactured shelters for telecom projects. Our shelters can be shipped nationwide."
        image={`${IMG}/2024/11/cellsite-products-shelters-960x1078-1.png`}
      />

      {/* ── Largest Selection ────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Full-Service Provider
            </p>
            <h2 className="mt-2 text-[32px] text-ink sm:text-[40px]">Largest Selection</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              CellSite is proud to offer the largest selection of recycled communication shelters on
              the market. Come to us for previously deployed products that are able to house electrical
              equipment, generators, or anything else your communications projects require. In addition
              to our large quantity of telecom shelters, our team offers shelter recycling services to
              make your used concrete shelters look like new.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Press the PLAY button to launch a 3D immersive experience of a recently completed
              remanufactured shelter that has new HVAC, ladder rack, and electrical systems installed.
            </p>
            <VideoLightbox
              embedUrl={MATTERPORT_TOUR}
              label="Play immersive shelter tour"
              className="group mt-7 inline-flex items-center gap-3 rounded-md bg-brand px-6 py-3 font-display text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              Play 3D Tour
            </VideoLightbox>
          </div>
          <div className="group relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={`${IMG}/2024/11/cellsite-products-shelters-960x1078-1.png`}
              alt="Remanufactured Telecom Shelter HVACs"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* ── Telecom Shelters explainer ───────────────────────────── */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl text-ink">TELECOM SHELTERS</h3>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Used to safeguard sensitive telecommunication equipment from the surrounding environment,
            telecom shelters are small independent structures that house communications equipment away
            from the main switching center and keep telecommunications running smoothly. They are
            designed to be resistant against all types of weather, from high heat to harsh rain, and
            they are built to last for years to come, even with little maintenance and upkeep.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            While we can provide new shelters, CellSite specializes in remanufacturing previously owned
            communication shelters. These offer top quality at a lower price and are engineer-inspected
            for like-new appearance and performance.
          </p>
        </div>
      </section>

      {/* ── eBook CTA (Energy Efficiency) ────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1fr] lg:px-8">
          <div className="group relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-lg shadow-xl">
            <Image
              src={`${IMG}/2025/02/Guide-to-Energy-Efficiency-eBook.png`}
              alt="eBook: The Guide to Telecom Shelter Energy Efficiency"
              fill
              sizes="(max-width: 1024px) 80vw, 320px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div>
            <h2 className="text-[32px] text-ink sm:text-[40px]">Download FREE eBook</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Explore innovative strategies for enhancing energy efficiency in telecom shelters,
              covering insulation, advanced HVAC, and free cooling solutions. With technical guidance
              and cost-benefit analysis, it equips telecom operators and engineers with practical
              solutions for sustainability and cost savings.
            </p>
            <Link
              href="/ebook-energy-efficiency/"
              className="mt-7 inline-block rounded-md bg-brand px-6 py-3 font-display text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
            >
              Download eBook
            </Link>
          </div>
        </div>
      </section>

      {/* ── What's in Stock ──────────────────────────────────────── */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Full-Service Provider
          </p>
          <h2 className="mt-2 text-[32px] text-ink sm:text-[40px]">What&apos;s in Stock</h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Our secure, long-lasting telecommunication shelters range in size from 6 feet by 8 feet to
            12 feet by 28 feet so that they can fit any scope of project or job. They are available in
            several different types, including lightweight, lightweight concrete, concrete, and
            fiberglass, expanding your options further. Because stock shifts so quickly, it&apos;s best
            to give us a quick call for the latest availability and pricing.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
