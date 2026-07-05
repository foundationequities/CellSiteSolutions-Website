import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Shutting Down Telecom Sites, the Sustainable Way",
  description:
    "How CellSite Solutions delivers turn-key, sustainable telecom decommissioning — full equipment removal, disposal, site remediation, and responsible recycling.",
};

const services = [
  "Cell Tower Removal",
  "Communication Shelter Removal",
  "Asset Disposal",
  "Site Remediation",
  "Light and Antenna Removal",
  "Asset Tracking",
  "R2 Standard for Responsible Recycling",
  "Internal Equipment Removal",
  "Battery Disposal",
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Shutting Down Telecom Sites, the Sustainable Way"
        image="/images/wp-content/uploads/2025/04/0008-Shutting-Down-Telecom-Sites-the-Sustainable-Way-min.png"
      />

      <article className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-brand">April 10, 2025</p>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
            <p>
              Telecom sites are becoming more necessary than ever for the telecommunications industry.
              They are needed to keep up with the increasing demand for data storage and high-speed
              internet connections, but they can also require significant capital investment and
              maintenance costs. With that in mind, many telecom executives have been looking into how
              best to decommission and consolidate their aging telecom infrastructure without
              sacrificing customer service or losing competitive advantage on decom pricing.
            </p>

            <h2 className="pt-4 text-2xl font-extrabold text-ink">
              Full Equipment Removal and Disposal Solutions
            </h2>
            <p>
              Qualified decommissioning and restoration experts are playing an increasingly more
              important role when considering your equipment removal and disposal investment options.
              With a wide range of services available to accommodate your needs&mdash;from concrete
              shelter removal to equipment and generator disposal&mdash;our team is ready for any job
              large or small. CellSite Solutions can offer exclusive turn-key decommissioning services
              to help you streamline the entire decommission process, including:
            </p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {services.map((s) => (
                <li key={s} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {s}
                </li>
              ))}
            </ul>

            <h2 className="pt-4 text-2xl font-extrabold text-ink">Telecom Infrastructure Decom</h2>
            <p>
              As providers continue to evaluate and audit their current telecommunication infrastructure
              needs, telecom huts will play a more important role and are projected to see continued
              significant growth over the next few years. This is all due to increased demand for mobile
              computing, IoT (Internet of Things), cloud computing, and the every growing fiber optic
              internet industry.
            </p>
            <p>
              As the need for telecommunication huts and overall upgrades increase in the coming years,
              having qualified decommissioning and restoration experts will become vital to any planned
              infrastructure consolidation or expansion project. Not only can CellSite provide telecom
              hut decommission projects nationwide, but we can also fully repair, remanufacture, outfit,
              and install any telecom shelter we acquire. Should your project require more
              customization, we can also restore, refurbish, and replace any of the vital equipment that
              is housed inside the shelter.
            </p>

            <h2 className="pt-4 text-2xl font-extrabold text-ink">Sustainable Decommissioning</h2>
            <p>
              At CellSite Solutions, sustainability drives every aspect of our telecom shelter
              decommissioning and refurbishment process. Our commitment to environmental responsibility
              guides us in recycling and reusing previously owned telecom shelters, minimizing waste,
              and reducing the need for new materials. By carefully restoring and remanufacturing
              telecom huts, we reduce the carbon footprint of infrastructure projects while providing a
              cost-effective, eco-friendly solution.
            </p>
            <p>
              We prioritize using eco-friendly materials, ensuring that each project supports a
              healthier environment. Socially, we foster strong partnerships within communities,
              contributing to local economies and creating opportunities for long-term growth. Our
              approach also includes economic efficiency, delivering high-quality solutions that not
              only meet telecom needs but also enhance the sustainability of the industry as a whole. At
              CellSite, we are dedicated to building a more sustainable future for telecom
              infrastructure, where both people and the planet thrive.
            </p>

            <h2 className="pt-4 text-2xl font-extrabold text-ink">
              The Benefits of Sustainable Telecom Site Closures
            </h2>
            <p>
              CellSite Solutions is a leading provider of telecom decommissioning services. We provide
              solutions for any size project to help you streamline the entire process from removal,
              transportation, and disposal. Our team understands that projects like these can be
              stressful with many moving parts; we are here to make your life easier by monitoring and
              executing the entirety of this process, so you don&rsquo;t have to worry about anything.
              Reach out to us today if you&rsquo;re interested in learning more about our exclusive decom
              service offerings.
            </p>
          </div>
        </div>
      </article>

      <CtaBand />
    </>
  );
}
