import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Data Center (MEC)",
  description:
    "CellSite Solutions can add multi-access edge computing (MEC) to any existing or new telecom shelter, bringing computing power closer to where it's needed most.",
};

const IMG = "/images/wp-content/uploads";

const benefits = [
  "Reduced cloud storage and transport costs",
  "Improved availability of access",
  "Real-time analytics",
  "Conserve network bandwidth",
  "Stronger security",
];

export default function DataCenterMecPage() {
  return (
    <>
      <PageHero
        eyebrow="Data Center (MEC)"
        title="Data Center (MEC)"
        lede="As data use increases, it's making more and more sense to house resources directly at your site in modular communication buildings putting computing power where it's needed most. A growing trend is use of multiple modular communication buildings together as an alternative to the large data centers."
      />

      {/* Deliver Cutting Edge Technology */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Full-Service Provider
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">
              Deliver Cutting Edge Technology
            </h2>
          </div>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Multi-edge computing (MEC) is transforming the way networks deliver high-speed data by
            processing and analyzing data closer to the source. MEC enhances the performance of 4G
            and 5G networks, supports seamless streaming, and enables real-time processing for
            applications like the Internet of Things (IoT). This innovative approach reduces latency
            and boosts bandwidth, making it crucial for meeting the demands of modern consumers and
            businesses.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Telecom shelters optimized for MEC play a vital role in supporting this network
            evolution. These specialized shelters house critical telecom equipment, providing the
            necessary environment for edge computing infrastructure. Designed for durability and
            security, telecom shelters are strategically placed at the edge of networks, allowing
            data to be processed quickly and locally. By integrating MEC into these shelters, telecom
            providers can deliver reliable, low-latency services that meet the growing demands for
            high-speed connectivity. Whether it&rsquo;s enabling smart cities or enhancing mobile
            network performance, telecom shelters optimized for MEC are essential for the next wave of
            technological innovation.
          </p>
        </div>
      </section>

      {/* Why Choose Us split */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Why Choose Us?</p>
            <p className="mt-5 text-base leading-relaxed text-muted">
              The growing use of internet services, from apps to connected appliances on the
              internet-of-things, is rapidly increasing the need for bandwidth in increasingly remote
              areas. Multi-access edge computing (MEC) brings technology resources closer to the end
              user. Data is processed and stored at the network&rsquo;s edge, provisioning faster
              connections with no lag. MEC enables fast streaming, even with multiple connections in
              the same household.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Cell tower sites are attractive locations for edge data centers, given their placement
              on existing telecom networks. Shelters are thought to be the optimal storage location
              on tower sites. CellSite Solutions can add MEC to any existing or new shelter, boosting
              your capabilities and improving service for your customers.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={`${IMG}/2024/11/cellsite-services-datacenter3-960x1078-1.jpg`}
              alt="Data Center Equipment"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Offer New Benefits */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Full-Service Provider
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">Offer New Benefits</h2>
          </div>
          <ul className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
            {benefits.map((item) => (
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
