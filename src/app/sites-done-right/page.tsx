import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Telecom Sites Done Right",
  description:
    "Understand the key aspects of civil site construction — from pre-construction and raw land work to foundations, logistics, electrical, and long-term maintenance.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Telecom Sites Done Right"
        image="/images/wp-content/uploads/2025/04/0007-Telecom-Sites-Done-Right-min.png"
      />

      <article className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-brand">April 2, 2025</p>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
            <p>
              Civil site construction is a process that all telecommunications companies must go through
              in order to install new telecommunications sites or upgrade existing infrastructure. By
              understanding the different aspects of civil site construction, you can minimize potential
              problems and ensure your project is completed on time and within budget. There are
              numerous regulatory hurdles to overcome, as well as careful planning required to ensure
              that the work is completed quickly and without incident. Let&rsquo;s take a look at some of
              the key aspects of civil site construction, and we&rsquo;ll outline some of the challenges
              that telecom companies face during this process.
            </p>

            <h2 className="pt-4 text-2xl font-extrabold text-ink">What Is Civil Site Construction?</h2>
            <p>
              Civil site construction is a process that is used to prepare a site for the construction
              of a building or other infrastructure. This process includes raw land construction, as
              well as the installation of utilities and other support structures. Civil site
              construction is necessary an important step in any telecom construction project, and it is
              critical that it be done correctly to ensure the success of a project.
            </p>
            <p>
              <strong className="text-ink">Pre-Construction:</strong> Performing a full site analysis
              prior to any sort of construction is the best way to get a full picture of the newly
              purchased plot of raw land. This also starts the planning process to create a scope of
              work including engineering, noting layouts, required space, proper permitting, and any
              demolition or removal of existing landscape or structures.
            </p>
            <p>
              <strong className="text-ink">Raw Land Construction:</strong> Now that the preconstruction
              phase is complete, proper permits have been acquired, and the scope of work has been
              determined, site preparation can now begin. It is in this stage that any grading, access
              road creation, and removal of any structures, debris, trees, etc. takes place to prepare
              for construction.
            </p>
            <p>
              <strong className="text-ink">Foundation Creation:</strong> This is the time when concrete
              foundations for the telecom shelter, generator pad, and entrance can be prepped and
              poured. It is important in this step to determine where the conduit will be coming into
              the shelter and tape or block it off to ensure no concrete accidentally gets into the
              conduit.
            </p>
            <p>
              <strong className="text-ink">Logistics and Shelter Placement:</strong> A project manager
              should have already scheduled for shelter and equipment delivery. Getting a shelter
              delivered is a very carefully orchestrated event. A project manager has to line up the
              delivery of the shelter with the arrival of the crane on-site so that the shelter offload
              can happen on time with no delays. Once the shelter, generator, and other equipment are
              placed it is time to get everything installed and wired up.
            </p>
            <p>
              <strong className="text-ink">Electrical and Standby Power Installation:</strong> The site
              will need electrical and grounding to be done before it is operational. This is important
              and required to maintain safety for technicians and anyone else who may be on site. All of
              the electrical is serving both the AC and DC power equipment inside and outside of the
              telecom shelter.
            </p>
            <p>
              An electrical meter is then placed on-site with a ground ring to anticipate any unwanted
              power surge or static build-up at the project site. An optional ATS (Automatic Transfer
              Switch) can also be installed alongside the generator on the outside of the shelter so
              backup power can be switched on automatically in case of an outage.
            </p>
            <p>
              <strong className="text-ink">Maintenance Plan:</strong> The site is now up and
              operational, the last things that need to happen are site grading and landscaping, and
              close outs. This is where reseeding, rock, and fencing will be placed to finish out the
              site. This is also the point where any close out photos will be taken of the site for
              documentation.
            </p>
            <p>
              The last and final step is to ensure the network is protected by creating and executing a
              short and long-term maintenance plan for all the site equipment and shelter. While most
              telecom shelters are constructed of precast concrete and designed to last for decades,
              most major companies fail to consider or plan for scheduled maintenance. The shelter, its
              components, stand-by power, and the civil site itself, all require scheduled servicing and
              maintenance to keep the network up and running efficiently, ensuring the building and
              equipment exceed their average lifespan.
            </p>

            <h2 className="pt-4 text-2xl font-extrabold text-ink">
              Laying the Groundwork for Success
            </h2>
            <p>
              Construction of a telecom civil site is a multi-step process that can be complicated. But
              have no fear, CellSite Solutions has the expertise and skillset to help you through every
              step of the process, from paperwork to construction and installation. We have worked on
              hundreds of telecom sites across North America and are ready to put our knowledge and
              experience to work for you. Contact us today to learn more about how we can help with your
              next telecom civil site construction project.
            </p>
          </div>
        </div>
      </article>

      <CtaBand />
    </>
  );
}
