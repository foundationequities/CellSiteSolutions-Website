import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { EbookForm } from "@/components/ebook-form";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Complete Guide: Datacomm Pro Series — Free eBook",
  description:
    "Download our free eBook for an in-depth look at the Datacomm Pro Series—rugged, lightweight telecom shelters built for rapid deployment, scalability, and cost savings.",
};

const IMG = "/images/wp-content/uploads";

const included = [
  "Executive Summary",
  "Meet the Datacomm Pro Series",
  "Sizes & Interior Capacity",
  "Why Bigger Shelters Now",
  "Power Systems",
  "Thermal & Environmental Control",
  "Options & Integrations",
  "Ballistic Protection Upgrade",
  "Deployment & Warranties",
  "Conclusion",
];

export default function EbookDatacommProSeriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Free eBook"
        title="Complete Guide: Datacomm Pro Series"
        lede="An in-depth look at the next generation of telecom shelter design—rugged durability meets lightweight construction for rapid deployment and meaningful cost savings."
      />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* eBook cover */}
          <div className="group relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden">
            <Image
              src={`${IMG}/2025/10/eBook-Complete-Guide-Datacomm-Pro-Series-Featured-v2.png`}
              alt="eBook Complete Guide: Datacomm Pro Series"
              fill
              sizes="(max-width: 1024px) 90vw, 400px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Description + form */}
          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-brand">FREE Ebook</p>
            <h2 className="mt-2 text-[32px] text-ink sm:text-[40px]">
              Complete Guide: Datacomm Pro Series
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              The Complete Guide: Datacomm Pro Series eBook is your in-depth look at the next
              generation of telecom shelter design. Inside, you&rsquo;ll learn how the Datacomm Pro
              Series combines rugged durability with lightweight construction to support rapid
              deployment, scalability, and meaningful cost savings compared to traditional concrete
              shelters.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Whether you&rsquo;re a fiber provider, edge data center operator, utility, or
              hyperscaler, this guide breaks down the specifications, performance advantages, and
              customizable features that make Datacomm Pro a smarter infrastructure solution.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Discover how to optimize your next build for efficiency, flexibility, and long-term
              reliability.
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
                <EbookForm ebook="datacomm-pro-series" buttonLabel="Download" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
