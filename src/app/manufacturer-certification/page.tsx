import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Manufacturer Certification",
  description:
    "CellSite Solutions is committed to full compliance with Build America, Buy America (BABA) requirements and the Broadband Equity, Access, and Deployment (BEAD) Program. Download our manufacturer's certificate.",
};

const IMG = "/images/wp-content/uploads";

export default function ManufacturerCertificationPage() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturer Certification"
        title="BABA and BEAD Certification"
        lede="Download our manufacturer's certificate confirming compliance with Build America, Buy America (BABA) requirements."
      />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border shadow-sm">
            <Image
              src={`${IMG}/2025/03/Screenshot-2025-03-05-124628.jpg`}
              alt="CellSite Solutions BABA Manufacturer Certificate"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Manufacturer Certificate
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">
              BABA and BEAD Certification
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              CellSite Solutions is committed to full compliance with the Build America, Buy America
              (BABA) requirements and the associated waiver for the Broadband Equity, Access, and
              Deployment (BEAD) Program, as outlined in the Infrastructure Investment and Jobs Act
              (IIJA) (Pub. L. No. 117-58, §§ 70901-52) and enforced by the U.S. Department of
              Commerce. We recognize the importance of using domestically sourced materials and
              American-made products to strengthen U.S. infrastructure, create jobs, and support the
              nation&rsquo;s economic growth. Our dedication to these standards ensures that our
              telecom shelters and civil construction solutions meet the highest quality and
              compliance requirements for federally funded broadband expansion projects.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              For transparency and ease of access, we have provided our manufacturer&rsquo;s
              certificate confirming compliance with BABA requirements. You can request the
              certificate directly to verify our commitment to delivering American-made telecom
              infrastructure solutions that support the expansion of broadband connectivity across the
              country.
            </p>
            <a
              href="mailto:sales@cellsitesolutions.com?subject=Manufacturer%20Certificate%20Request"
              className="mt-7 inline-block rounded-md bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
            >
              Download Manufacturer Certificate
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
