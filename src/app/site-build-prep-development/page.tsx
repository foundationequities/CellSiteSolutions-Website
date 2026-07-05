import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Site Build, Prep & Development",
  description:
    "From legal and regulatory services to clearing the site, CellSite Solutions handles the civil services needed to get your telecom site up and running.",
};

const services = [
  "Telecom Civil Consulting",
  "Communication Shelter Certification/Recertification",
  "Telecom Construction Documents and Building Permitting",
  "Site Maintenance, Clearing, and Preparation",
  "Equipment Pad and Shelter Foundation",
  "Compound and Access Road Maintenance",
  "Cathodic Anchor Protection Systems",
  "Electrical Conduit, Telco, and Grounding System Installation",
];

export default function SiteBuildPrepDevelopmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Site Build, Prep & Development"
        title="Site Build, Prep & Development"
        lede="CellSite Solutions can assist with planning and civil services from the moment your project begins. From legal and regulatory services to clearing the site, we will get you up and running."
      />

      {/* One Stop for Solutions */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Full-Service Provider
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">
            One Stop For Solutions
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            No other company offers the breadth of telecom site services and products that CellSite
            Solutions does. We handle everything it takes to prepare your site, install and maintain
            your equipment, and even decommission it when your project ends. Who could handle
            documentation better?
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Why Choose Us?</p>
          <p className="mt-5 text-base leading-relaxed text-muted">
            From initial site planning and design to telecom construction and all the way to final
            execution and installation of new infrastructure, CellSite Solutions offers the civil
            services you need to create a final, usable, finished product ready for installation.
            We&rsquo;re here to help get your site&rsquo;s telecommunications network fully built or
            expanded. Civil services lay the groundwork for building a new or adding onto an existing
            telecommunications site.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Therefore, they can include everything from putting in a fence to installing a shelter
            foundation or a tower foundation. Whatever is necessary to prepare a site for its
            telecommunications structure, from engineering services to permitting services, CellSite
            offers. We evaluate your location and provide any necessary communication shelter
            certification, permits, maintenance and repairs, electrical installation, and more.
          </p>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Our Capabilities
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">Services We Offer</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              From network design and installation to maintenance and support, we offer everything you
              need to enhance your communication infrastructure. Our team of experts is dedicated to
              providing reliable, efficient services that help you stay connected and achieve your
              goals.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <div
                key={service}
                className="rounded-lg border border-border bg-white p-6 shadow-sm"
              >
                <span className="text-3xl font-extrabold text-brand">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <p className="mt-3 text-base font-semibold text-ink">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
