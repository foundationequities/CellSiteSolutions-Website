import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { VideoLightbox } from "@/components/video-lightbox";
import { MATTERPORT_TOUR, SHELTER_TIMELAPSE_VIDEO } from "@/lib/videos";

export const metadata: Metadata = {
  title: "Shelter Showcase",
  description:
    "Explore real-world CellSite Solutions telecom shelter projects for wireless providers, fiber providers, tower owners, and emergency response—highlighting our craftsmanship and turnkey capabilities.",
};

const IMG = "/images/wp-content/uploads";

type Project = {
  customer: string;
  type: string;
  size: string;
  body: string[];
  /** Project photo (localized live slider image), shown beside the description. */
  image?: string;
  imageAlt?: string;
  /** Matterport / embed URL for a 3D tour lightbox. */
  tour?: string;
};

const wireless: Project[] = [
  {
    customer: "Verizon",
    type: "On-site Remanufacture",
    size: "SHELTER SIZE: 10' x 12'",
    image: `${IMG}/2025/04/Controller-1.jpg`,
    imageAlt: "Telecom shelter interior equipment",
    body: [
      "Verizon needed our help after a truck collision had demolished a telecom shelter, leaving the structure barely intact. However, replacing the shelter entirely wasn't an option—since its original installation, critical electrical wires had been added overhead, preventing crane operations from safely lifting the damaged shelter out and setting a new one in its place. The ISP equipment within the shelter remained still operational, so our team meticulously worked around the running network systems without interrupting Verizon's service. Ultimately achieving the goal of an on-site remanufactured shelter that looked virtually indistinguishable from a new telecom shelter.",
    ],
  },
  {
    customer: "Network Solution",
    type: "Telecom Shelter",
    size: "SIZE: 11' x 20' | SHELTER MODEL: Andrew",
    image: `${IMG}/2026/06/Roof_1HVAC.png`,
    imageAlt: "Shelter roof-mounted HVAC",
    body: [
      "CellSite Solutions delivered an 11' x 20' telecom shelter featuring AIRSYS HVAC units installed on both the front and back sides for enhanced airflow and redundancy. This configuration ensures reliable climate control, ideal for supporting sensitive telecom and fiber equipment in demanding environments operations.",
    ],
  },
  {
    customer: "Network Services",
    type: "Network Services",
    size: "SIZE: 12' x 28' | SHELTER MODEL: Rohn",
    image: `${IMG}/2026/06/Rack-mounted-fuse-panels2.jpeg`,
    imageAlt: "Rack-mounted fuse panels",
    body: [
      "Our 12' x 28' telecom shelter is a high-performance, fully equipped solution designed for demanding network and data applications. It features three 6-ton AIRSYS HVAC units with a PLC controller capable of running all units simultaneously for maximum cooling efficiency. A complete alarm package is also installed, with door contact, and high/low temperature sensors—delivering both operational confidence and critical environmental monitoring in one turnkey package.",
    ],
  },
  {
    customer: "Network Services",
    type: "Telecom Shelter",
    size: "SIZE: 12' x 20' | SHELTER MODEL: Andrew",
    image: `${IMG}/2026/06/Interior-black-racks-2-scaled.jpg`,
    imageAlt: "Interior network racks",
    body: [
      "This 12' x 20' telecom shelter, built for a network and delivering to Cheyenne, Wyoming, showcases a turnkey ISP infrastructure solution designed for reliable broadband network deployments. The shelter features three 3-ton Bard HVAC units, a new 200-amp 42-space single-phase panel, and an ASCO NEMA 3R Series 300 automatic transfer switch for dependable power and environmental control.",
      "Configured with eight network racks, DC power systems, battery backup, and extensive cable management infrastructure, this shelter provides a secure, scalable environment for critical ISP equipment. A Trilogy Lock 6200 access control system with magnetic door strike adds an extra layer of site security.",
    ],
  },
];

const fiber: Project[] = [
  {
    customer: "Metronet",
    type: "Fiber Hut With ISP",
    size: "SIZE: 12' x 28' | SHELTER MODEL: Rohn",
    image: `${IMG}/2026/06/Interior-Telecom-Shelter-3.jpeg`,
    imageAlt: "Fiber hut interior",
    body: [
      "CellSite Solutions delivered a 12' x 28' fiber hut for Metronet, designed to support a full ISP solution as part of their high-speed fiber network infrastructure. This spacious shelter was engineered to house all key components of the inside plant (ISP), including power distribution, HVAC, fiber management, and rack-mounted network equipment. Built to ensure reliability, security, and scalability, the shelter provides a climate-controlled, turnkey environment for core networking operations.",
    ],
  },
  {
    customer: "Fiber Provider",
    type: "Fiber Hut with ISP",
    size: "SIZE: 12' x 28' | SHELTER MODEL: Rohn",
    body: [
      "Tour the interior of the 12' x 28' fiber hut featuring complete ISP buildout deployed in North Carolina.",
    ],
    tour: MATTERPORT_TOUR,
  },
  {
    customer: "Singing River Co-op",
    type: "Rural Co-op",
    size: "SIZE: 9' x 16' | SHELTER MODEL: CellXion",
    image: `${IMG}/2025/04/Pic-4-Inside-A-scaled.jpg`,
    imageAlt: "Fiber hut interior equipment",
    body: [
      "CellSite Solutions provided a 9' x 16' fiber hut for a rural electric cooperative, supporting their expanding fiber distribution network. Built to our standard configuration, this shelter offers a secure, climate-controlled environment ideal for housing critical telecom and fiber infrastructure. Designed for durability and long-term performance, it meets the demanding needs of rural broadband deployment.",
    ],
  },
  {
    customer: "Vantage Point",
    type: "Hut With Gen Room",
    size: "SIZE: 12' x 26' | SHELTER MODEL: Fibrebond",
    image: `${IMG}/2025/04/Pic-2-Outer-scaled.jpg`,
    imageAlt: "Fiber hut exterior",
    body: [
      "As Cherokee Cablevision expanded their network; they engaged Vantage Point Solutions to engineer a fiber expansion into North Carolina. CellSite joined the collaboration with a custom fiber hut designed with an integrated Generation Room within the shelter, allowing for on-site backup power equipment in a secure, climate-controlled space.",
    ],
  },
  {
    customer: "Rural Fiber Provider",
    type: "Rural Provider",
    size: "SIZE: 10' x 20' | SHELTER MODEL: CellXion",
    image: `${IMG}/2026/06/5136-DC-Power1.jpg`,
    imageAlt: "DC power plant installation",
    body: [
      "CellSite Solutions delivered a 10' x 20' custom fiber hut for a rural fiber provider in Rock Hill, North Carolina, that features a robust Fike Novec fire suppression system, including a cylinder with agent, actuator, nozzle, SHP Pro control panel with standby batteries, a manual pull station, abort switch, maintenance bypass, horn/strobe, discharge strobe, and all necessary conduit, and wiring for a complete fire protection solution. This showcases our ability to deliver a safe, and fully integrated fiber hut.",
    ],
  },
  {
    customer: "Fiber Provider",
    type: "Fiber Provider",
    size: "SIZE: 10' x 12' | SHELTER MODEL: Rohn",
    image: `${IMG}/2025/04/6249-Gen-Room-HVAC.jpg`,
    imageAlt: "Generator room HVAC",
    body: [
      "This 10' x 12' custom fiber hut was designed and built for a Fiber to the Home (FTTH) provider in Northampton, MA. The project included a range of tailored solutions to meet the customer's specific needs, including installed racks, a DC power plant, fuse panels, and structured cabling. Additionally, we supplied and installed three (3) 30A L6 twist-lock drops above the power distribution racks to support critical power requirements. Explore the gallery to see photos of the completed shelter and interior equipment layout.",
    ],
  },
  {
    customer: "Amusement Park",
    type: "Amusement Park",
    size: "SIZE: 12' x 30' | SHELTER MODEL: Andrew",
    image: `${IMG}/2026/06/Controller-7.jpg`,
    imageAlt: "HVAC controller",
    body: [
      "CellSite Solutions partnered with an amusement park to deliver a custom-engineered fiber hut designed to support the park's broadband data infrastructure. This extra-large shelter was uniquely partitioned into two secure rooms—one dedicated to housing a 60kW Generac diesel generator with a 200A automatic transfer switch (ATS), and the other for broadband data equipment to ensure uninterrupted connectivity throughout the park. This tailored solution helps power seamless communication and data flow across one of America's most iconic amusement parks.",
    ],
  },
  {
    customer: "Fiber Provider",
    type: "Fiber Provider",
    size: "SIZE: 11' x 16' | SHELTER MODEL: Fibrebond",
    image: `${IMG}/2025/04/Inside-Electrical-2.jpg`,
    imageAlt: "Shelter electrical interior",
    body: [
      "CellSite Solutions delivered a fully equipped 11' x 16' fiber hut for a leading Fiber to the Home (FTTH) provider in Baton Rouge, Louisiana. This shelter features a high-efficiency AIRSYS variable HVAC unit (3–6 ton) with the ASMUC.6.AC controller, ensuring reliable climate control. This fiber hut stands as a durable, turn-key solution built to support the critical infrastructure needs of high-speed fiber networks.",
    ],
  },
];

const towers: Project[] = [
  {
    customer: "Tower Owner",
    type: "Shelter with Plenum Wall",
    size: "SIZE: 12' x 20' | SHELTER MODEL: Oldcastle",
    image: `${IMG}/2026/06/surge-suppression-2.jpeg`,
    imageAlt: "Surge suppression equipment",
    body: [
      "CellSite Solutions customized telecom shelter featured a range of advanced infrastructure upgrades tailored to their specifications. A plenum wall was built and installed at the end of the shelter to create efficient hot/cold aisles for optimized airflow. We provided and installed two new AIRSYS 3–6 ton HVAC units along with an AIRSYS HVAC controller, complete with a supply and return grille for enhanced climate control. Inside the shelter, we installed ladder racks and cabinets.",
    ],
  },
  {
    customer: "Construction Company",
    type: "Turnkey Telecom Shelter",
    size: "SIZE: 12' x 16' | SHELTER MODEL: Cellxion",
    image: `${IMG}/2026/06/Alarm-66-Block.jpeg`,
    imageAlt: "Alarm 66 block wiring",
    body: [
      "This 12' x 16' Cellxion telecom shelter, delivered to Fort Davis, Texas, is a reliable and fully equipped solution designed to support critical telecommunications infrastructure. The shelter features two new 3-ton Bard HVAC units with a lead-lag controller and 5 kW heat strips for efficient environmental control.",
      "To ensure dependable site operation, the shelter includes three new 200-amp power panels, a Kohler automatic transfer switch, manual transfer switch, cam-lock generator connection, and dual lightning surge arrestors. An R56 grounding system, smoke detection, emergency lighting, and a complete safety kit provide additional protection, making this shelter a secure and turnkey solution for demanding network applications.",
    ],
  },
];

const emergency: Project[] = [
  {
    customer: "Public Safety Provider",
    type: "Public Safety Provider",
    size: "SIZE: 12' x 28' | SHELTER MODEL: Andrews",
    image: `${IMG}/2026/06/Interior-CommScope.jpg`,
    imageAlt: "Interior CommScope equipment",
    body: [
      "CellSite Solutions recently delivered this remanufactured 12' x 28' Andrews telecom shelter to Maryland, offering a dependable and cost-effective solution for critical communications infrastructure. The shelter features upgraded power distribution with a new 400-amp electrical service, Kohler 400A automatic transfer switch, and Raycap surge protection, along with two new 5-ton Bard HVAC units with lead-lag controls and 5 kW heat strips for reliable climate control. Additional upgrades include LED lighting, enhanced Trilogy 3000 door hardware, and a comprehensive alarm package with door, power failure, and temperature monitoring. Built to support wireless, broadband, utility, and public safety networks, this shelter provides the durability and performance needed for mission-critical operations.",
    ],
  },
  {
    customer: "Municipal Deployment",
    type: "E911 Solution",
    size: "SIZE: 12' x 28' | SHELTER MODEL: Miller",
    body: [
      "CellSite Solutions recently deployed this remanufactured E911 shelter for a municipal building in Maryland, providing a secure and reliable environment for mission-critical emergency communications equipment. The shelter features a dedicated generator room and upgraded climate control systems, including a new 5-ton HVAC unit with lead-lag controls, a 5 kW heat strip, a wall-mounted heater, baseboard heater, and humidistat to maintain optimal operating conditions year-round. Power distribution upgrades include a refurbished 200-amp electrical panel, manual transfer switch, generator cam-lock connector, and multiple new lightning surge arrestors for enhanced system protection. Additional improvements such as new outlets, GFCIs, LED emergency lighting, smoke detectors with relay switches, and a thorough inspection of all wiring help ensure dependable operation. Designed to support E911 and public safety communications, this shelter delivers the reliability, security, and performance required for continuous emergency response connectivity.",
    ],
  },
];

const choice = [
  {
    title: "Affordability",
    copy: "Our remanufactured shelters provide a cost-effective “like new” alternative that delivers the same reliability and durability as brand-new units, but at a fraction of the price.",
  },
  {
    title: "Durability",
    copy: "Each remanufactured shelter is meticulously upgraded with new components, ensuring unmatched durability and energy efficiency, even in the most challenging environments.",
  },
  {
    title: "Timeliness",
    copy: "Our customized shelters are delivered in weeks to months—often much faster than newly manufactured options, helping you stay on schedule and avoid costly delays.",
  },
];

/**
 * One project = a split row: photo on one half, description (customer, type,
 * size, story) on the other, alternating sides — matching the live showcase.
 */
function ProjectRow({ p, flip }: { p: Project; flip: boolean }) {
  const info = (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-muted">
        Customer: {p.customer}
      </p>
      <h4 className="mt-1 text-2xl text-ink">{p.type}</h4>
      <p className="mt-1 font-display text-sm font-medium tracking-wide text-brand">{p.size}</p>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
        {p.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
      {p.tour && (
        <VideoLightbox
          embedUrl={p.tour}
          label="Play 3D tour"
          className="mt-5 inline-flex items-center gap-2 rounded-md bg-brand px-5 py-2.5 font-display text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
          Play 3D Tour
        </VideoLightbox>
      )}
    </div>
  );

  const media = p.image ? (
    <div className="group relative aspect-[4/3] overflow-hidden rounded-lg">
      <Image
        src={p.image}
        alt={p.imageAlt ?? p.type}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
  ) : null;

  if (!media) return <div className="max-w-3xl">{info}</div>;

  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
      {flip ? (
        <>
          <div className="lg:order-2">{media}</div>
          <div className="lg:order-1">{info}</div>
        </>
      ) : (
        <>
          {media}
          {info}
        </>
      )}
    </div>
  );
}

function ProjectGroup({
  eyebrow,
  title,
  intro,
  projects,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  projects: Project[];
}) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">{eyebrow}</p>
        <h2 className="mt-2 text-[32px] text-ink sm:text-[40px]">{title}</h2>
        <p className="mt-5 text-base leading-relaxed text-muted">{intro}</p>
      </div>
      <div className="mt-12 space-y-16">
        {projects.map((p, i) => (
          <ProjectRow key={i} p={p} flip={i % 2 === 1} />
        ))}
      </div>
    </div>
  );
}

export default function ShelterShowcasePage() {
  return (
    <>
      <PageHero
        eyebrow="Shelter Showcase"
        title="Shelter Showcase"
        lede="Explore our telecom shelter options and real-world projects—find the ideal solution for wireless providers, fiber providers, tower owners, and emergency response deployments."
        image={`${IMG}/2025/04/2036-Exterior-side.jpg`}
      />

      {/* ── Verizon before / after ───────────────────────────────── */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              On-site Remanufacture
            </p>
            <h2 className="mt-2 text-[32px] text-ink sm:text-[40px]">
              Verizon — Before &amp; After
            </h2>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <figure>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={`${IMG}/2025/04/Verizon_Before.jpg`}
                  alt="Verizon telecom shelter before on-site remanufacture"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="mt-2 text-center text-sm font-semibold uppercase text-muted">
                Before
              </figcaption>
            </figure>
            <figure>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={`${IMG}/2025/04/Verizon_After.jpg`}
                  alt="Verizon telecom shelter after on-site remanufacture"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="mt-2 text-center text-sm font-semibold uppercase text-muted">
                After
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ── Wireless Providers ───────────────────────────────────── */}
      <section className="bg-white py-20">
        <ProjectGroup
          eyebrow="Building Networks, Powering Trust."
          title="WIRELESS PROVIDERS"
          intro="We provide reliable infrastructure solutions to keep wireless providers connected. Whether expanding coverage or upgrading infrastructure, we deliver cost-effective, durable solutions designed to support wireless networks nationwide."
          projects={wireless}
        />
      </section>

      {/* ── Fiber Providers ──────────────────────────────────────── */}
      <section className="bg-[#f6f6f6] py-20">
        <ProjectGroup
          eyebrow="Powering Connectivity, Protecting Performance."
          title="FIBER PROVIDERS"
          intro="Growing fiber networks demand reliable connection, robust protection, and ongoing maintenance to ensure optimal performance. We provide comprehensive solutions for all three, offering state-of-the-art fiber huts designed to safeguard critical equipment, along with expert site services that support seamless deployment and long-term network stability."
          projects={fiber}
        />
      </section>

      {/* ── Tower Owners ─────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <ProjectGroup
          eyebrow="Wireless Services That Grow and Evolve with You"
          title="TOWER OWNERS"
          intro="We provide dependable infrastructure solutions to keep your telecom towers operating at peak performance. From durable telecom shelters to comprehensive site construction and equipment installation, our services ensure your network remains strong and uninterrupted."
          projects={towers}
        />
      </section>

      {/* ── Emergency Response ───────────────────────────────────── */}
      <section className="bg-[#f6f6f6] py-20">
        <ProjectGroup
          eyebrow="Reliable Emergency Response"
          title="EMERGENCY RESPONSE | E911"
          intro="CellSite Solutions specializes in high-quality telecom shelters designed to support emergency response and E911 systems. Our shelters provide secure, climate-controlled environments for critical communication equipment. Trusted by public safety agencies our shelters are a vital component in the infrastructure that keeps emergency services responsive when every second counts."
          projects={emergency}
        />
      </section>

      {/* ── Remanufactured vs New ────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">The Choice</p>
            <h2 className="mt-2 text-[32px] text-ink sm:text-[40px]">
              REMANUFACTURED vs NEW SHELTERS
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {choice.map((c) => (
              <div
                key={c.title}
                className="rounded-lg border border-border bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <h3 className="text-xl text-ink">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{c.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand videoSrc={SHELTER_TIMELAPSE_VIDEO} />
    </>
  );
}
