import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PhotoBand } from "@/components/photo-band";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/faq-accordion";

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
      {/* ── Hero: stacked two-line title + subtle texture ─────────── */}
      <section className="relative flex items-center overflow-hidden bg-surface-dark text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${IMG}/2024/06/page-texture-img.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        {/* radial dark overlay, as on the live heroes */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 100%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-28 text-center sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
          <p className="mb-3 font-display text-sm font-medium uppercase tracking-[0.2em] text-brand">
            SUSTAINABLE PRACTICES
          </p>
          <h1 className="mx-auto max-w-4xl uppercase leading-[1.05] text-[36px] sm:text-[64px] lg:text-[96px]">
            SUSTAINABLE
            <br />
            PRACTICES
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
            As both corporate citizens and human beings, CellSite strives to make a positive impact on
            our planet. True sustainability means making a commitment on multiple levels, across an
            entire organization. These pillars remind us to always consider the effects of our actions.
          </p>
        </div>
      </section>

      {/* ── FAQ (white + subtle page texture) ────────────────────── */}
      <section
        className="bg-white py-20"
        style={{
          backgroundImage: `url(${IMG}/2024/06/page-texture-img.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold tracking-[0.2em] text-brand">
            Frequently Asked Questions
          </p>
          <h2 className="mt-2 text-[35px] text-ink sm:text-[65px]">
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
            <p className="text-sm font-bold tracking-[0.2em] text-brand">The Key Players</p>
            <h2 className="mt-2 text-[35px] text-ink sm:text-[65px]">BUILDING FOR THE FUTURE</h2>
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

      {/* ── Four pillars (collapsed accordion, as live) ──────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FaqAccordion items={pillars.map((p) => ({ q: p.title, a: p.copy }))} />
        </div>
      </section>

      {/* ── Keep A Good Thing Going (full-bleed field photo band) ── */}
      <PhotoBand image={`${IMG}/2024/11/cellsite-sustainability-field-1920x1077-1.jpg`}>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold tracking-[0.2em] text-brand">SUSTAINABILITY</p>
          <h2 className="mt-2 text-[35px] sm:text-[65px]">KEEP A GOOD THING GOING</h2>
        </div>
      </PhotoBand>

      {/* ── eBook download (single button → landing page, as live) ── */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1fr] lg:px-8">
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
            <h2 className="text-[35px] text-ink sm:text-[65px]">Download FREE eBook</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Explore innovative strategies for enhancing energy efficiency in telecom shelters, covering
              insulation, advanced HVAC, and free cooling solutions. With technical guidance and
              cost-benefit analysis, it equips telecom operators and engineers with practical solutions
              for sustainability and cost savings.
            </p>
            <Link
              href="/ebook-energy-efficiency/"
              className="mt-7 inline-block rounded-md bg-brand px-7 py-3.5 font-display text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
            >
              Download eBook
            </Link>
          </div>
        </div>
      </section>

      {/* ── Founder quote band (white + texture, as live) ────────── */}
      <section
        className="bg-white py-20"
        style={{
          backgroundImage: `url(${IMG}/2024/06/section-texture-mask-4.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold tracking-[0.2em] text-brand">WHO WE SERVE</p>
          <blockquote className="mt-6 font-display text-[28px] font-medium leading-snug text-ink sm:text-[36px]">
            &ldquo;We want our land, our customers, and our people to thrive. The decisions we make today
            impact that future.&rdquo;
          </blockquote>
          <p className="mt-6 font-bold text-ink">Jim Patterson</p>
          <p className="text-sm text-muted">CellSite Solutions</p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
