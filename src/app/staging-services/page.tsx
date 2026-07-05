import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Staging Services",
  description:
    "CellSite Solutions staging services deliver a completely configured shelter and equipment to your site, fast — including Rack & Stack, network cabling, and pre-installation configuration.",
};

const IMG = "/images/wp-content/uploads";

const services = [
  "Shelter or cabinet build-out Power",
  "Network cabling",
  "Shelf installation",
  "Card and module installation",
  "Transceiver installation",
  "Software and firmware configuration",
];

export default function StagingServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Staging Services"
        title="Staging Services"
        lede="When time and money are on the line, CellSite Solutions staging services get a completely configured shelter and equipment delivered to your site, fast."
      />

      {/* No More Roaming Fees */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Full-Service Provider
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">No More Roaming Fees</h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            When we stage your shelter at one of our warehouses, we perform the same quality of
            services we&rsquo;d typically do on your site, without all the associated travel costs. We
            can have multiple teams work on your project without leaving the warehouse, and you share
            in that savings. Our team can then be onsite or remote to complete the integration of your
            new equipment into your network.
          </p>
        </div>
      </section>

      {/* Why Choose Us split */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Why Choose Us?</p>
            <p className="mt-5 text-base leading-relaxed text-muted">
              There are times when schedules and budgets call for services to be operational right
              out-of-the box. In those cases, CellSite Solutions&rsquo;s Staging Services offer a
              virtually plug-and-play experience. Our Data Center, Mobile Service Center (MSC), and
              Central Office staging includes Rack &amp; Stack service based on your company&rsquo;s
              requirements. This involves installation and mounting of circuit boards, power supplies
              and pre-installation configuration services for most edge routing and data transport
              devices, and pre-manufactured cabinets.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Our logistical services then transport the configured equipment and fully-staged
              cabinets to your site in a timely and safe manner, including power from AC and DC feeds.
              Our installation teams meet the shipper and move the equipment into position and complete
              the physical installation onsite, verifying that the configuration matches your
              requirements and making any needed changes to complete the installation and power up.
              And there you have it: a fully operational site, practically overnight.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={`${IMG}/2024/11/cellsite-services-stagingservices3-960x1079_0.png`}
              alt="Inside Telecom Shelter Electrical"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Full-Service Provider
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">Services We Offer</h2>
          </div>
          <ul className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
            {services.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border border-border bg-white p-5 shadow-sm"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand" />
                <span className="text-base text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
