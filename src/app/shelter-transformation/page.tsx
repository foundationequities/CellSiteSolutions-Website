import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Case Study: Shelter Remanufacture",
  description:
    "See how CellSite Solutions transformed a severely dilapidated 12'x30' telecom shelter into a like-new gen room configuration in under 90 days—meeting a service provider's exact specifications and timeline.",
};

const IMG = "/images/wp-content/uploads";

export default function ShelterTransformationPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Study"
        title="Case Study: Shelter Remanufacture"
        lede="Keeping infrastructure in top shape is crucial for uninterrupted service—often on timelines new shelter manufacturers simply can't meet."
      />

      <article className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed text-muted">
            In today&rsquo;s rapidly growing telecommunications industry, keeping infrastructure in
            top shape is crucial for uninterrupted service, and often extremely tight timeline
            requirements of 60-90 days are needed for a telecom shelter delivery that new shelter
            manufacturers with lead times often as long as 6-9 months can&rsquo;t hit.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Continue reading online or download the PDF now to explore the full case study.
          </p>
          <a
            href="mailto:sales@cellsitesolutions.com?subject=Shelter%20Remanufacture%20Case%20Study"
            className="mt-6 inline-block rounded-md bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
          >
            Download
          </a>

          {/* The Challenge */}
          <h2 className="mt-14 text-2xl font-extrabold uppercase text-ink sm:text-3xl">
            The Challenge
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            For a service provider in Branson, Missouri, not only did they have a narrow time window
            to get the new shelter installed, but they also required a gen room configuration—a
            shelter partitioned with telecom racks and equipment on one partition and a generator on
            the other partition.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Fortunately, CellSite Solutions retains a surplus of shelters available for remanufacture
            to ensure our ability to deliver a more cost-effective shelter with incredibly tight
            delivery timelines that new manufacturers could never meet.
          </p>

          <h3 className="mt-8 text-lg font-bold uppercase text-ink">
            Before Remanufacture: Severely Dilapidated Shelter
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted">
            The surplus shelter on hand that met the size dimensions required by this service provider
            was a severely dilapidated 12&rsquo;x 30&prime; telecom shelter. Part of the interior roof
            collapsed, and both the interior and exterior had significant cosmetic issues, as shown in
            the pictures below. While the cosmetic appearance of the shelter appeared disastrous, the
            shelter&rsquo;s concrete infrastructure was structurally sound.
          </p>

          <div className="relative my-8 aspect-[16/9] overflow-hidden rounded-lg border border-border">
            <Image
              src={`${IMG}/2024/11/Before-Photos.png`}
              alt="Before Telecom Shelter Remanufacture"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>

          <p className="text-base leading-relaxed text-muted">
            To further complicate the project, the service provider had specific custom modifications
            required to convert part of the shelter into a generator room. The generator room design
            requirements included:
          </p>
          <ul className="mt-4 space-y-3 text-base text-muted">
            {[
              "A section of the shelter dedicated to telecom equipment.",
              "The other section of the shelter needed to house an enclosed generator.",
              "Each section required separate entrances to ensure secure, dedicated spaces, and a 2-hour rated firewall installed between the telecom and generator partition.",
              "Relocation of door entrance(s) due to the site configuration.",
            ].map((it) => (
              <li key={it} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                {it}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Typically, a shelter with this degree of customization would require a more expensive, new
            shelter design, but you will see that CellSite Solutions delivered a remanufactured
            shelter that met every customer specification.
          </p>

          {/* The Method */}
          <p className="mt-14 text-sm font-bold uppercase tracking-[0.2em] text-brand">The Method</p>
          <h2 className="mt-2 text-2xl font-extrabold uppercase text-ink sm:text-3xl">
            Our Remanufacture Process
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            The following details CellSite Solution&rsquo;s remanufacture process, which enabled us to
            deliver a shelter that met the customer&rsquo;s specifications in an incredibly short
            period, less than 90 days from start to on-site shelter installation.
          </p>
          <ul className="mt-6 space-y-5 text-base leading-relaxed text-muted">
            <li>
              <span className="font-semibold text-ink">Custom Generator Room Conversion:</span>{" "}
              Structural changes were made to split the shelter into two internal sections. The{" "}
              <span className="font-semibold text-ink">Telecom Section</span> was renovated to provide
              optimal conditions for telecom equipment, including environmental controls. The{" "}
              <span className="font-semibold text-ink">Generator Section</span> added a fully enclosed
              generator space with a separate entrance, ensuring safety and soundproofing for the
              operational environment. We placed a fresh air intake louver where the original door was
              located on the side of the shelter. A 2-hour fire-rated wall was also installed between
              the generator section and the telecom equipment section. Finally, special spill
              containment flooring was installed on the gen room section to protect in case of diesel
              spill.
            </li>
            <li>
              <span className="font-semibold text-ink">Interior Upgrades:</span> Completely restored
              the interior taking the walls down to bare concrete—then added insulation, fiber
              re-enforced wall panels, roofing, and SelecTile vinyl flooring that collectively
              provides a very durable, and energy-efficient environment. This interior also featured
              the installation of a new door entrance to the telecom section of the shelter.
            </li>
          </ul>

          {/* Inside Plant */}
          <p className="mt-14 text-sm font-bold uppercase tracking-[0.2em] text-brand">Inside Plant</p>
          <h2 className="mt-2 text-2xl font-extrabold uppercase text-ink sm:text-3xl">
            Electrical, HVAC, Generator, and ISP
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Added entirely new electrical systems, energy-efficient LED lighting, and new 3-ton BARD
            HVAC systems as well as the generator, battery system, and a Fike Novec fire suppression
            system housed in the gen room section. CellSite Solutions is also capable of adding any
            necessary ISP racks and cabling.
          </p>

          {/* The Outside */}
          <p className="mt-14 text-sm font-bold uppercase tracking-[0.2em] text-brand">The Outside</p>
          <h2 className="mt-2 text-2xl font-extrabold uppercase text-ink sm:text-3xl">
            Exterior Restoration
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            There were several steps to finalize the exterior restoration starting with the addition
            of a new energy-efficient polyvinyl roof that features a 10-year workmanship warranty,
            concrete sealant, re-caulked seams, and a fresh coat of industrial-grade paint matching
            the customer&rsquo;s exterior color specification. From the pics to the left, you can see
            the remanufactured shelter features two new door locations on one side, and the side of
            the shelter that had the original door location is now outfitted with the air intake
            louver for the gen room.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            When comparing the BEFORE to the AFTER pics of the interior and exterior of this shelter
            the transformation is almost miraculous. This is an extreme example that demonstrates the
            product quality the CellSite Solutions production team can deliver, whether the shelter is
            in our warehouse, or we need to remanufacture the shelter on-site.
          </p>

          {/* Conclusion */}
          <h2 className="mt-14 text-2xl font-extrabold uppercase text-ink sm:text-3xl">Conclusion</h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            In this case study CellSite Solutions provided a comprehensive shelter transformation—a
            like-new telecom equipment shelter that utilized more durable materials than are often
            used on new shelters, ultimately an infrastructure solution that met the customer&rsquo;s
            challenging gen room specifications and timeline while more cost-effective than a new
            shelter.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            By choosing CellSite Solutions&rsquo; remanufactured telecom shelters, service providers
            achieve a combination of cost savings, quality and durability, and fast delivery that new
            shelter manufacturers simply can&rsquo;t match. Whether it&rsquo;s a complete overhaul of
            a customer&rsquo;s shelter worked on in our warehouse or on-site, or a custom modification
            of one of our surplus shelters on hand, our remanufactured shelters offer unmatched
            reliability and value.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Contact us today by email at{" "}
            <a
              href="mailto:sales@cellsitesolutions.com"
              className="font-semibold text-brand hover:text-brand-dark"
            >
              sales@cellsitesolutions.com
            </a>{" "}
            or call 1 855 CEL SITE.
          </p>
        </div>
      </article>

      <CtaBand />
    </>
  );
}
