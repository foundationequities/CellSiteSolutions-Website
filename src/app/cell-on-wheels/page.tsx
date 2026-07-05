import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Cell on Wheels",
  description:
    "A cell on wheels (COW) from CellSite Solutions can be quickly delivered to any site for emergency coverage or to boost a cellular network during major events.",
};

const IMG = "/images/wp-content/uploads";

export default function CellOnWheelsPage() {
  return (
    <>
      <PageHero
        eyebrow="Cell on Wheels"
        title="Cell on Wheels"
        lede="A cell on wheels, commonly known as a COW, can be quickly delivered to any site for emergency coverage on a short-term basis."
      />

      {/* Give Service a Boost */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Full-Service Provider
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">Give Service a Boost</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted">
            COWs aren&rsquo;t just useful in emergency situations. A COW can also be used to create or
            boost a cellular network during a big event, when local population and service demand
            rises. Cover a conference or festival, sporting event, or seasonal traffic.
          </p>
        </div>
      </section>

      {/* Why Choose Us — split with image */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Why Choose Us?</p>
            <p className="mt-5 text-base leading-relaxed text-muted">
              A COW is a mobile cell site product that includes a tower and transceiver, as well as
              all other necessary equipment, carefully constructed on a trailer or truck. Unlike
              standard towers, COWs are highly portable, but they are not constructed for permanence.
              However, a high-quality system can be utilized for longer periods of time, if necessary.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Emergency use — such as after a major storm or flood — is one common application. If a
              standard tower is damaged and requires repair, using a COW makes sense from a practical
              standpoint. However, these towers are also used during major occasions such as for the
              Super Bowl, media coverage of a big event, or a large parade or festival. Additionally,
              a cell-on-wheels setup can provide a temporary signal when a standard tower is being
              built — a process that isn&rsquo;t always fast enough to keep up with consumer needs.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <Image
              src={`${IMG}/2024/11/cellsite-products-COWs3-960x1079-1.jpeg`}
              alt="CellSite Cell on Wheels"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Available Styles */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Full-Service Provider
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">Available Styles</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted">
            There are many sizes of COW designed for different needs, including easy access, more
            strength, or more stability. The smallest versions sit on trailers that can be pulled by
            nearly any standard truck, while the largest versions require a heavy-duty rig to tow and
            set up the tower. The larger versions allow for a bigger tower and more power, while the
            smaller versions are easier to add or remove without as much planning.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
