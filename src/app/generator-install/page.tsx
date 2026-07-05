import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Generator Install",
  description:
    "Power outages are a huge liability for telecom providers. CellSite Solutions supplies, delivers, and installs commercial backup generators to keep your operations running no matter what.",
};

const IMG = "/images/wp-content/uploads";

export default function GeneratorInstallPage() {
  return (
    <>
      <PageHero
        eyebrow="Generator Install"
        title="Generator Install"
        lede="Power outages are a huge liability for telecom providers. Have a plan in place to ensure uninterrupted service and loyal customers."
      />

      {/* Be Ready For Anything */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Full-Service Provider
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">Be Ready For Anything</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted">
            When you generate your own power, nothing can stand in your way. Be the consistent,
            dependable provider that your area trusts to keep them connected—the best way to keep and
            attract happy customers!
          </p>
        </div>
      </section>

      {/* Why Choose Us — split with image */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Why Choose Us?</p>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Nobody has to tell you that disruptions to your company&rsquo;s power lines can cause
              major problems for business—but the good news is you can keep those disruptions from
              happening. Thanks to backup power solutions from CellSite, your business doesn&rsquo;t
              have to be at the mercy of thunderstorms or unexplained power outages. With one of our
              commercial generators, you have a way to keep operations running smoothly—no matter what
              kind of power problems occur.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <Image
              src={`${IMG}/2024/11/cellsite-services-generatorinstall3-960x1078-1.jpeg`}
              alt="Telecom CellSite New Development"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* We Offer */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Full-Service Provider
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">We Offer:</h2>
          <ul className="mt-6 space-y-3 text-base text-muted">
            {[
              "New or recycled generators for purchase",
              "Delivery",
              "Installation, including craning services",
              "Disposal of removed equipment",
            ].map((it) => (
              <li key={it} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                {it}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
