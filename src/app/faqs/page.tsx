import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/faq-accordion";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to frequently asked questions about telecom shelters, remanufactured shelters, cost savings, durability, and the remanufacturing process from CellSite Solutions.",
};

const faqs = [
  {
    q: "What is a telecom shelter?",
    a: "A telecom shelter is a secure, climate-controlled structure designed to protect critical communications equipment, including wireless network hardware, fiber optic equipment, power systems, batteries, and backup generators. Telecom shelters help ensure reliable network performance in all environmental conditions.",
  },
  {
    q: "What is a remanufactured telecom shelter?",
    a: "A remanufactured telecom shelter is a previously deployed shelter that has been professionally inspected, repaired, upgraded, and restored to meet current operational requirements. Remanufactured shelters provide a cost-effective alternative to purchasing a new shelter while maintaining durability and performance.",
  },
  {
    q: "How much can a remanufactured telecom shelter save compared to a new shelter?",
    a: "Cost savings vary based on size, condition, and customization requirements, but remanufactured telecom shelters typically offer substantial savings compared to new construction. They also help reduce project timelines by utilizing existing shelter structures.",
  },
  {
    q: "Are remanufactured telecom shelters as durable as new shelters?",
    a: "Yes. When properly remanufactured, telecom shelters undergo structural inspections, repairs, and upgrades to ensure they meet operational requirements. Many remanufactured shelters provide decades of additional service life when maintained properly.",
  },
  {
    q: "How long does the telecom shelter remanufacturing process take?",
    a: "The timeline depends on shelter size, condition, and customization requirements. However, remanufactured shelters can often be delivered significantly faster than newly manufactured shelters because the primary structure already exists.",
  },
];

export default function FaqsPage() {
  return (
    <>
      <PageHero eyebrow="FAQs" title="Frequently Asked Questions" />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Frequently Asked Questions About
          </p>
          <h2 className="mt-2 text-[32px] text-ink sm:text-[40px]">Telecom Shelters</h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Telecom shelters protect critical communications equipment from weather, security threats,
            and environmental conditions while supporting reliable network operations.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            CellSite Solutions provides remanufactured, new Datacomm Pro Lightweight and custom telecom
            shelters that deliver the durability, performance, and energy efficiency of new shelters with
            faster deployment timelines and significant cost savings for telecom, fiber, utility, and
            data infrastructure projects.
          </p>
          <div className="mt-8">
            <FaqAccordion items={faqs} withSchema />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
