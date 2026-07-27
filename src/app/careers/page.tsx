import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "A culture of connection, education, and community makes CellSite Solutions an exceptional place to build your career. Explore open jobs and grow with us.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Apply Today"
        title="Join Our Team"
        lede="A culture of connection, education, and community makes CellSite Solutions an exceptional place to develop your career. We invest in our employees and hope they will stay with the organization as we change and grow together."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl space-y-6 px-4 text-base leading-relaxed text-muted sm:px-6 lg:px-8">
          <p>
            Our work is about building connections and our internal philosophy is no different. We are
            always looking to give back to our employees, providing opportunities for growth, education,
            and advancement.
          </p>
          <p>
            One way we reinforce our company culture is through the Make It Happen Committee. This diverse
            cross-departmental group works to build a cohesive culture through volunteering,
            team-building, and social events.
          </p>
          <p>
            At CellSite Solutions, we pride ourselves on offering quality equipment supply and service
            backed by a knowledgeable and friendly staff. We work to build relationships with our
            customers in order to provide a lifetime of excellent service. If that sounds good to you,
            it&rsquo;s time to take a look at our open jobs and see where you might fit.
          </p>
        </div>

        {/* ── Paylocity job board (core content on the live page) ── */}
        <div className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
          <iframe
            src="https://recruiting.paylocity.com/recruiting/jobs/All/3e39eefe-ed09-437c-8a96-587fff3db562/Cellsite-Solutions-LLC"
            title="Job openings"
            loading="lazy"
            className="w-full rounded-lg border border-border"
            style={{ minHeight: "900px" }}
          />
        </div>
      </section>
    </>
  );
}
