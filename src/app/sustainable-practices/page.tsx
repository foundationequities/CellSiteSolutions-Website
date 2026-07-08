import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/faq-accordion";
import { EbookForm } from "@/components/ebook-form";

export const metadata: Metadata = {
  title: "Sustainable Practices",
  description:
    "Sustainability drives everything at CellSite Solutions. By remanufacturing telecom shelters and reusing infrastructure, we reduce waste and build a more sustainable future for telecom.",
};

const IMG = "/images/wp-content/uploads";

const faqs = [
  {
    q: "What is sustainable telecommunications infrastructure?",
    a: "Sustainable telecommunications infrastructure focuses on reducing environmental impact through resource conservation, equipment reuse, recycling, energy efficiency, and responsible construction practices while maintaining reliable network performance.",
  },
  {
    q: "How does telecom shelter remanufacturing support sustainability?",
    a: "Remanufacturing extends the life of existing telecom shelters by restoring, upgrading, and repurposing them for future deployments. This reduces landfill waste, conserves raw materials, and lowers the environmental impact associated with manufacturing new structures.",
  },
  {
    q: "Why is infrastructure reuse important in the telecommunications industry?",
    a: "Infrastructure reuse reduces the need for new materials, decreases construction waste, shortens project timelines, and helps organizations lower both environmental impact and overall project costs.",
  },
  {
    q: "What telecom equipment can be refurbished or reused?",
    a: "Many telecommunications assets can be refurbished or reused, including shelters, generators, HVAC systems, power equipment, batteries, cabinets, and supporting site infrastructure, depending on condition and project requirements.",
  },
  {
    q: "Why are telecom companies investing in sustainability initiatives?",
    a: "Telecom operators are increasingly adopting sustainability initiatives to reduce environmental impact, improve resource efficiency, meet corporate ESG goals, support regulatory compliance, and lower long-term infrastructure costs while maintaining network reliability.",
  },
];

const pillars = [
  {
    title: "ENVIRONMENTAL",
    copy: "As environmental stewards, we are committed to reducing waste and damage to the planet. By recycling shelters and other products, we keep 17.5 million pounds of concrete out of landfills each year. Our site remediation service leaves the land clean and ready to be reclaimed by nature at a project’s end. We are always looking for new ways to reduce our impact while increasing customer satisfaction.",
  },
  {
    title: "SOCIAL",
    copy: "Social sustainability means we empower services that benefit all of society. Greater connectivity means more people have access to information and services. We consider the needs of future people when we provide solutions for our current population. We know that our behavior—including our relationships with our personnel and clients—has a ripple effect. We value the concept of connection and weave it through everything we do.",
  },
  {
    title: "ECONOMIC",
    copy: "Economic sustainability goes beyond making a profit as a company. We look to operational efficiency as a primary way to create economic sustainability. By improving efficiency, we are able to do more with less waste of resources or human effort. We grow organically, adding high-quality lines of service when our clients indicate a need. And we create an environment that leverages technology and strategy to make the most of the resources we have.",
  },
  {
    title: "HUMAN",
    copy: "Human sustainability drives the way we operate as a business and extends from there. We are invested in the safety of our employees and offer ample training opportunities to help them stay skilled and protected in the field. In the same way, our culture of service helps us cultivate strong relationships with our clients and partners. Together, we build a more connected world.",
  },
];

export default function SustainablePracticesPage() {
  return (
    <>
      <PageHero
        eyebrow="SUSTAINABLE PRACTICES"
        title="SUSTAINABLE PRACTICES"
        lede="As both corporate citizens and human beings, CellSite strives to make a positive impact on our planet. True sustainability means making a commitment on multiple levels, across an entire organization. These pillars remind us to always consider the effects of our actions."
      />

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Frequently Asked Questions
          </p>
          <h2 className="mt-2 text-[32px] text-ink sm:text-[40px]">
            Sustainable Telecom Infrastructure
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Sustainable telecommunications infrastructure reduces environmental impact by extending
            equipment lifecycles, minimizing construction waste, and maximizing the reuse of existing
            resources. CellSite Solutions supports sustainable network deployment through telecom shelter
            remanufacturing, equipment refurbishment, infrastructure reuse, recycling initiatives, and
            environmentally responsible construction practices that help organizations reduce waste while
            maintaining reliable network performance.
          </p>
          <div className="mt-8">
            <FaqAccordion items={faqs} withSchema />
          </div>
        </div>
      </section>

      {/* ── Building for the future ──────────────────────────────── */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="group relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={`${IMG}/2024/11/Sustainable-Practices-V2.png`}
              alt="Sustainable Practices"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">THE KEY PLAYERS</p>
            <h2 className="mt-2 text-[32px] text-ink sm:text-[40px]">BUILDING FOR THE FUTURE</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              At CellSite Solutions, sustainability drives every aspect of our business, ensuring we make
              a positive impact on the environment, society, economy, and the lives of those we serve.
              Our commitment to environmental responsibility guides us in sourcing eco-friendly materials
              and minimizing waste throughout our processes. Socially, we prioritize community engagement
              and ethical practices, building partnerships that strengthen local economies and foster
              long-term growth. Economically, we are dedicated to offering cost-effective solutions that
              deliver value and efficiency without compromising quality or our planet’s resources. We
              also recognize the importance of human impact, fostering a safe, inclusive, and supportive
              environment for our employees and clients alike. Together, we’re building a more
              sustainable future for the telecommunications industry and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* ── Four pillars ─────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-lg border border-border bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <h3 className="text-xl text-ink">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── eBook download ───────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">SUSTAINABILITY</p>
            <h2 className="mt-2 text-[32px] text-ink sm:text-[40px]">KEEP A GOOD THING GOING</h2>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1fr] lg:px-8">
          <div className="group relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden">
            <Image
              src={`${IMG}/2025/02/Guide-to-Energy-Efficiency-eBook.png`}
              alt="eBook The Guide to Telecom Shelter Energy Efficiency"
              fill
              sizes="(max-width: 1024px) 80vw, 320px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div>
            <h2 className="text-[32px] text-ink sm:text-[40px]">Download FREE eBook</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Explore innovative strategies for enhancing energy efficiency in telecom shelters, covering
              insulation, advanced HVAC, and free cooling solutions. With technical guidance and
              cost-benefit analysis, it equips telecom operators and engineers with practical solutions
              for sustainability and cost savings.
            </p>
            <div className="mt-7 max-w-md">
              <EbookForm ebook="energy-efficiency" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Founder quote band ───────────────────────────────────── */}
      <section className="bg-surface-dark py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">WHO WE SERVE</p>
          <blockquote className="mt-6 font-display text-[28px] font-medium leading-snug sm:text-[36px]">
            &ldquo;We want our land, our customers, and our people to thrive. The decisions we make today
            impact that future.&rdquo;
          </blockquote>
          <p className="mt-6 font-bold">Jim Patterson</p>
          <p className="text-sm text-white/70">CellSite Solutions</p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
