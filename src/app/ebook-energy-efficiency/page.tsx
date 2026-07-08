import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { EbookForm } from "@/components/ebook-form";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "The Guide to Telecom Shelter Energy Efficiency — Free eBook",
  description:
    "Download our free eBook exploring insulation, advanced HVAC, free cooling, and real-time monitoring strategies that make telecom shelters more sustainable and cost-effective.",
};

const IMG = "/images/wp-content/uploads";

const included = [
  "Structural Efficiency and Lighting",
  "HVAC Systems",
  "Free and Advanced Cooling Systems",
  "Real-Time Monitoring",
];

export default function EbookEnergyEfficiencyPage() {
  return (
    <>
      <PageHero
        eyebrow="Free eBook"
        title="The Guide to Telecom Shelter Energy Efficiency"
        lede="Innovative strategies to address the energy challenges in telecom shelters—from insulation techniques to advanced HVAC systems and free cooling innovations."
      />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* eBook cover */}
          <div className="group relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-lg shadow-xl">
            <Image
              src={`${IMG}/2025/02/Guide-to-Energy-Efficiency-eBook.png`}
              alt="eBook The Guide to Telecom Shelter Energy Efficiency"
              fill
              sizes="(max-width: 1024px) 90vw, 400px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Description + form */}
          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-brand">FREE Ebook</p>
            <h2 className="mt-2 text-[32px] text-ink sm:text-[40px]">
              The Guide to Telecom Shelter Energy Efficiency
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              This eBook explores innovative strategies designed to address the energy challenges in
              telecom shelters. From insulation techniques to advanced HVAC systems and free cooling
              innovations, each chapter provides actionable insights into making telecom shelters
              more sustainable and cost-effective. Through a combination of technical guidance and
              cost-benefit analysis, this resource empowers telecom operators and engineers to
              implement practical solutions that drive both efficiency and environmental stewardship.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Lets dive into the key components of energy-efficient telecom shelters and uncover how
              these advancements are shaping the future of telecommunications infrastructure.
            </p>

            <div className="mt-8 rounded-lg border border-border bg-[#f9f9f9] p-6 sm:p-8">
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
                <EbookForm ebook="energy-efficiency" buttonLabel="Download" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
