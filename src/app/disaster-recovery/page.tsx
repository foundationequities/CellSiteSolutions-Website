import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Disaster Recovery",
  description:
    "CellSite Solutions is a leading provider of disaster recovery and repair services for telecom buildings and equipment—restoring service quickly with minimal downtime.",
};

const IMG = "/images/wp-content/uploads";

export default function DisasterRecoveryPage() {
  return (
    <>
      <PageHero
        eyebrow="Disaster Recovery"
        title="Disaster Recovery"
        lede="Weather and other natural disasters can make an impact with little notice. Luckily, so can we. Call CellSite Solutions to restore service and repair or replace broken equipment before your customers notice the outage."
      />

      {/* ── CellSite to the rescue ────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Full-Service Provider
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">
              CellSite To The Rescue
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              CellSite Solutions is a leading provider of disaster recovery and repair services for
              telecommunication buildings and related equipment, ensuring minimal downtime and quick
              recovery in times of crisis. With expertise in telecom infrastructure, the company
              specializes in restoring damaged telecom shelters, power systems, and network
              components, helping businesses maintain continuous communication and data flow. CellSite
              Solutions is equipped to handle the complexities of emergency repairs, from structural
              damage to electrical issues, ensuring that telecom operators can quickly resume
              operations. Their dedicated team of technicians and engineers work swiftly to repair and
              restore critical telecom equipment, providing tailored disaster recovery solutions for
              any situation.
            </p>
            <h3 className="mt-8 text-lg font-bold uppercase text-ink">Fast Response</h3>
            <p className="mt-3 text-base leading-relaxed text-muted">
              When disaster strikes, you have two immediate concerns as a telecom site owner and
              operator: will we be able to maintain service, and, if not, how quickly can we get up and
              running again? CellSite Solutions has the answers you want to hear in either case.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              When bad weather or accidents damage your equipment, we can supply backup equipment and a
              permanent repair—quickly and efficiently.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg lg:aspect-[9/10]">
            <Image
              src={`${IMG}/2024/11/cellsite-services-disasterrecovery3-960x1079-1.png`}
              alt="Telecom Shelter On-Site Restored"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── No sitting out the storm ──────────────────────────────── */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Full-Service Provider
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">
            No Sitting Out The Storm
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            No need to panic when the lights flicker. CellSite Solutions has durable backup power
            solutions that keep you running. You&rsquo;ll be up and working even when the grid needs
            some downtime.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
