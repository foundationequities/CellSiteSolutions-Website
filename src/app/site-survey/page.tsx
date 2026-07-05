import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Site Survey",
  description:
    "CellSite Solutions assesses site topography, geology, weather trends, utilities, and more so you can choose the best options for your telecom project.",
};

const process = [
  "Site Access",
  "Topography",
  "Geology",
  "Weather Trends",
  "Utility Placement",
  "Local Codes and Regulations",
];

export default function SiteSurveyPage() {
  return (
    <>
      <PageHero
        eyebrow="Site Survey"
        title="Site Survey"
        lede="During a site survey, we assess the site to understand what we are dealing with and create an optimal plan. We look at site topography, geology, weather trends, utilities, and more to help you choose the best options for your project."
      />

      {/* Intro */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-brand">
            See what you&rsquo;ve got. Then make the most of it.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Our surveyors ensure that your prospective site is appropriate for the project you have in
            mind. We aim to understand local regulations and specifications so we can provide sound
            advice at any stage of the process. We start by examining access to the property, planning
            for clearing and access roads as needed. A thorough analysis of the terrain combines
            geological and topographical considerations to guide the choice of tower and other
            structures.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Once your site is active, we can inspect for routine maintenance or after any damage.
            Armed with information and understanding, you can plan to keep your site updated and ahead
            of the technology curve.
          </p>
        </div>
      </section>

      {/* Plan for Efficiency */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">Plan For Efficiency</h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Discovering any issues during a thorough survey helps prevent unexpected problems. When
            you are aware of every detail upfront, you can plan for seamless access, the correct
            equipment, and any special installation procedures.
          </p>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">Our Process</h2>
            <p className="mt-4 text-base text-muted">We examine:</p>
          </div>
          <ul className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
            {process.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border border-border bg-white p-5 shadow-sm"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand" />
                <span className="text-base text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
