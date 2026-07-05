import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Elevating Telecom to New Heights",
  description:
    "Why craning and logistics are a critical, often overlooked part of telecom — the crane types used, the different lifts, and how craning costs are calculated.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Elevating Telecom to New Heights"
        image="/images/wp-content/uploads/2025/01/0001-Elevating-Telecom-to-New-Heights-Header-Image-2.png"
      />

      <article className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-brand">January 6, 2025</p>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
            <p>
              In the telecom industry, craning is an essential part in ensuring the delivery and
              placement of telecom shelters to their final destinations. Let&rsquo;s take a closer look
              at why craning and logistics are a critical and often overlooked part in telecom and some
              of the different types of cranes that are commonly used in this industry as well as how
              to calculate craning costs ahead of time.
            </p>

            <h2 className="pt-4 text-2xl font-extrabold text-ink">Cranes 101</h2>
            <p>
              Cranes are machines that are used to lift, lower, and move heavy objects by suspending
              them from a beam or cable. There are many different types of cranes, but the most common
              type used in telecom are mobile cranes. However, there are other common cranes such as
              tower cranes, and overhead cranes. Let&rsquo;s learn about all of them.
            </p>
            <p>
              <strong className="text-ink">Mobile Cranes:</strong> Mobile cranes are mounted on trucks
              or trailers and can be moved from one location to another. They&rsquo;re typically used
              for short-term projects or for projects where space is limited. The mobile crane is the
              bread and butter of the telecom industry as it is the most common crane type used to pick
              and place heavy concrete telecom shelters. Mobile cranes are the go-to when moving telecom
              shelters from one location to another by loading them onto a truck and trailer and
              transporting/placing them to their final resting place at a telecom site.
            </p>
            <p>
              <strong className="text-ink">Tower Cranes:</strong> Tower cranes are tall structures that
              consist of a base, tower, and boom. They&rsquo;re often used on large construction sites
              where they can be left in place for the duration of the project.
            </p>
            <p>
              <strong className="text-ink">Overhead Cranes:</strong> Overhead cranes are similar to
              tower cranes, but they&rsquo;re mounted on an elevated structure instead of being
              freestanding. They&rsquo;re often used in manufacturing and warehouse settings.
            </p>

            <h2 className="pt-4 text-2xl font-extrabold text-ink">
              The Different Types of Lifts Used in Telecom
            </h2>
            <p>
              There are four main types of lifts that are commonly used in telecom: single line lifts,
              double line lifts, horizontal lifts, and angle lifts.
            </p>
            <p>
              <strong className="text-ink">Single Line Lifts:</strong> Single line lifts involve
              suspending an object from a single cable or beam. This type of lift is typically used for
              lighter objects and can be used for telecom equipment such as HVAC&rsquo;s and generators.
            </p>
            <p>
              <strong className="text-ink">Double Line Lifts:</strong> Double line lifts involve
              suspending an object from two cables or beams. This type of lift is typically used for
              heavier objects.
            </p>
            <p>
              <strong className="text-ink">Horizontal Lifts:</strong> Horizontal lifts involve moving
              an object horizontally instead of vertically. This type of lift is often used when space
              is limited or when an object needs to be moved through a tight space such as a door or
              window.
            </p>
            <p>
              <strong className="text-ink">Angle Lifts:</strong> Angle lifts involve suspending an
              object from a crane at an angle instead of straight up and down. This type of lift is
              often used when an object needs to be lifted over obstacles like buildings or trees.
            </p>

            <h2 className="pt-4 text-2xl font-extrabold text-ink">Crane Computation</h2>
            <p>
              When it comes to craning, there are a few factors that can impact pricing. First and
              foremost, site access has the potential for big changes in cost&mdash;if an operation
              requires specialized equipment or skill level then expect higher prices on fuel because
              of their need; heavier loads mean more money spent with each lift. Want a great way to
              reduce these expenses? Try finding local companies who provide this service near where
              you&rsquo;re working&mdash;saving time through reduced travel costs as well.
            </p>
            <p>
              When it comes to generators and other equipment, those are most likely able to be
              on/off loaded with a forklift or boom truck. But always pay attention the load capacities
              of any machine used for this task since they may not all work in tandem depending upon
              how heavy your generator is.
            </p>
            <p>Craning companies usually format their pricing as follows:</p>
            <p>($ mobilization in) + ($ x hours of use) + ($ mobilization out).</p>

            <h2 className="pt-4 text-2xl font-extrabold text-ink">
              Let CellSite Solutions Do the Heavy Lifting
            </h2>
            <p>
              Craning plays a vital role in the telecom industry. From lifting heavy concrete telecom
              shelters to moving equipment around tight spaces, cranes make it possible for telecom
              crews to safely and efficiently complete even the most challenging projects.
            </p>
            <p>
              At CellSite Solutions our team will reduce risks by analyzing your telecom site prior to
              delivery and managing all communications with each party involved (drivers, cranes,
              riggers, permits, etc.) This could mean the difference between an on-time and
              under-budget project versus one that is riddled with complications that quickly goes over
              deadline and over budget. When you work with us, you&rsquo;ll get nothing but our best.
              CellSite will do all the heavy lifting to coordinate necessary logistics and important
              deadlines to keep your project on time and on budget!
            </p>
          </div>
        </div>
      </article>

      <CtaBand />
    </>
  );
}
