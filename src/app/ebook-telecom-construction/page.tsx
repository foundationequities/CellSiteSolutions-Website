import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { EbookForm } from "@/components/ebook-form";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "The Complete Guide to Telecom Shelter Construction — Free eBook",
  description:
    "Download our free eBook for a clear, step-by-step overview of how telecom shelter sites are built—from engineering and planning to project completion.",
};

const IMG = "/images/wp-content/uploads";

const included = [
  "Engineering & Planning",
  "Raw Land Conversion & Site Preparation",
  "Building a Foundation",
  "Transportation & Logistics",
  "Electrical & Grounding",
  "Project Completion",
];

export default function EbookTelecomConstructionPage() {
  return (
    <>
      <PageHero
        eyebrow="Free eBook"
        title="The Complete Guide to Telecom Shelter Construction"
        lede="A clear, step-by-step overview of how telecom shelter sites are built—ensuring reliable communication networks everywhere."
      />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* eBook cover */}
          <div className="group relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden">
            <Image
              src={`${IMG}/2025/01/Complete-Guide-eBook.png`}
              alt="The Complete Guide to Telecom Shelter Construction"
              fill
              sizes="(max-width: 1024px) 90vw, 400px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Description + form */}
          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-brand">FREE Ebook</p>
            <h2 className="mt-2 text-[32px] text-ink sm:text-[40px]">
              The Complete Guide to Telecom Shelter Construction
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Telecom shelter construction isn&apos;t just about installing a new building
              structure—it&apos;s about combining engineering expertise, careful planning, and
              skilled installation to build a reliable foundation for modern communications. From the
              initial designs to the final installation, every step is a critical piece of the
              puzzle.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Whether you&apos;re a telecom professional or just curious about the process, this guide
              provides a clear, step-by-step overview of how telecom shelter sites are built ensuring
              reliable communication networks everywhere.
            </p>

            <div className="mt-8">
              <h3 className="text-xl text-ink">What does this eBook include:</h3>
              <ul className="mt-4 grid gap-2 text-sm text-muted sm:grid-cols-2">
                {included.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <EbookForm ebook="telecom-construction" buttonLabel="Download" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
