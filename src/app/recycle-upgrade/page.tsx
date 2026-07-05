import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Recycle & Upgrade",
  description:
    "Recycled telecom shelters from CellSite Solutions are a cost-effective, like-new option backed by our engineering team — saving money while keeping waste out of landfills.",
};

const IMG = "/images/wp-content/uploads";

const upgrades = [
  "HVAC Unit Replacement",
  "Full Exterior Mortar Primer and Sealant (to stop leaks and opportunities for damage)",
  "Updated Electrical Equipment",
  "Updated Internal Grounding to OEM Standards",
  "Driveway Maintenance (repairing, replacing or maintaining your shelter's driveway makes the process of coming to check on things much easier for you or your staff)",
  "15-Year Lifespan Roof Coating",
];

const coatings = [
  {
    name: "Elastomeric",
    items: [
      "100% acrylic polymer",
      "Crack, peel, water, and weather resistant",
      "Bright white finish reduces surface temperatures and lowers cooling costs",
    ],
  },
  {
    name: "Polyvinyl",
    items: [
      "Energy efficient",
      "Water resistant",
      "Requires minimal maintenance",
      "Highly sustainable, noncombustible, and 100% recyclable",
    ],
  },
  {
    name: "Sky Paver",
    items: [
      "Composed of 95% recycled rubber",
      "Stain, puncture, scratch, and water resistant",
      "Ability to withstand harsh conditions",
    ],
  },
];

export default function RecycleUpgradePage() {
  return (
    <>
      <PageHero
        eyebrow="Recycle & Upgrade"
        title="Recycle & Upgrade"
        lede="When your telecom shelter needs upgrading, recycled shelters from CellSite are a cost-effective, like-new option backed by our engineering team. You get a pristine shelter while saving money and keeping trash out of landfills."
      />

      {/* Get Exactly What You Need */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Full-Service Provider
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">
            Get Exactly What You Need
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            If there is a custom modification you&rsquo;d like to see, don&rsquo;t hesitate to reach
            out to us. We will go the extra mile to make your refurbished equipment shelter meet your
            needs and exceed your expectations.
          </p>
        </div>
      </section>

      {/* Why Choose Us split */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Why Choose Us?</p>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Even with regular maintenance, there may come a time when you need to upgrade or replace
              a telecom shelter. Our shelter recycling process offers a cost-effective and
              environmentally friendly alternative to a brand-new structure. An updated, modern
              shelter will help you protect the expensive equipment inside; and it is safer and more
              inviting when a repair person, inspector, or potential buyer visits the site.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We build to spec so you get exactly what you need, from custom modifications to all-new
              electrical systems. Our services include:
            </p>
            <ul className="mt-6 space-y-3 text-base text-ink">
              {upgrades.map((u) => (
                <li key={u} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand" />
                  {u}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={`${IMG}/2024/11/cellsite-services-recycleshelter3-960x1079-1.jpg`}
              alt="Inside Refurbished Concrete Shelter"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Take it from the top */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Full-Service Provider
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">Take it from the top</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              All of our roof coatings provide 15 years (or more) of coverage. You will not have to
              worry about leaks or damage from rain, hail, or snow.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {coatings.map((c) => (
              <div key={c.name} className="rounded-lg border border-border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold uppercase text-ink">{c.name}</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted">
                  {c.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
