import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Civil Services Showcase",
  description:
    "Explore CellSite Solutions' civil construction projects—site preparation, grounding and fencing, ISP field installation, on-site shelter remanufacture, field services, and guy anchor inspections.",
};

const IMG = "/images/wp-content/uploads";

type Project = {
  customer?: string;
  subtitle: string;
  location: string;
  description?: string;
  images: { src: string; alt: string }[];
};

type Category = {
  eyebrow: string;
  title: string;
  intro: string;
  projects: Project[];
};

const categories: Category[] = [
  {
    eyebrow: "End-to-End Construction",
    title: "Civil Site Preparation for Shelters & Cabinets",
    intro:
      "From initial site planning and design to telecom construction and final installation, CellSite Solutions provides comprehensive civil construction services to deliver a fully finished, functional telecom site. We manage every phase to ensure your infrastructure is built to perform—reliably and efficiently.",
    projects: [
      {
        customer: "Rural Co-op",
        subtitle: "Site Preparation for Cabinets",
        location: "Branson, Missouri",
        description:
          "CellSite Solutions fully turnkeyed the location for fiber cabinet deployment by precision-pouring a concrete pad, installing customer-provided grounding, and AC power conduit at the pad for seamless future electrical tie-in. We also built a gravel access road, and erected a 20′×20′ chain-link around the compound.",
        images: [
          { src: `${IMG}/2025/05/20241116_115303.jpg`, alt: "Site preparation for cabinets" },
          { src: `${IMG}/2025/05/20241109_105002.jpg`, alt: "Site preparation for cabinets" },
          { src: `${IMG}/2025/05/20241110_122027.jpg`, alt: "Site preparation for cabinets" },
          { src: `${IMG}/2025/05/20241110_122015.jpg`, alt: "Site preparation for cabinets" },
        ],
      },
      {
        customer: "Fiber Provider",
        subtitle: "Shelter Site Construction",
        location: "Colstrip, Montana",
        description:
          "This turnkey project began with comprehensive site preparation — clearing, grading, and laying a solid concrete foundation designed for long-term stability. Our team installed durable perimeter fencing to secure the site, and then deployed one of our expertly remanufactured telecom shelters. This upgraded shelter features modern HVAC, grounding, and power-ready configurations tailored to fiber infrastructure needs.",
        images: [
          { src: `${IMG}/2025/05/Colstrip_Finished_OtherSIde.jpg`, alt: "Colstrip finished shelter" },
          { src: `${IMG}/2025/05/Colstrip_Back.jpg`, alt: "Colstrip shelter back" },
          { src: `${IMG}/2025/05/Colstrip_Finished_SIde.jpg`, alt: "Colstrip finished side" },
          { src: `${IMG}/2025/05/Colstrip_foundation.jpg`, alt: "Colstrip foundation" },
          { src: `${IMG}/2025/05/Colstrip_Before.jpg`, alt: "Colstrip site before" },
        ],
      },
      {
        customer: "Colstrip",
        subtitle: "Range",
        location: "Lusk/Mule Creek",
        images: [
          { src: `${IMG}/2025/04/Verizon_After.jpg`, alt: "Site after construction" },
          { src: `${IMG}/2025/04/Verizon_Before.jpg`, alt: "Site before construction" },
        ],
      },
    ],
  },
  {
    eyebrow: "Grounded and Guarded",
    title: "Site Grounding and Fencing",
    intro:
      "CellSite Solutions delivers expert civil site grounding and fencing services to ensure safety, equipment protection, and regulatory compliance. From ground ring installation to perimeter security fencing, our team provides turnkey solutions tailored to telecom site needs—built to last and designed to perform.",
    projects: [
      {
        subtitle: "Mule Creek Fencing Buildout",
        location: "Mule Creek",
        images: [],
      },
      {
        subtitle: "Torrington Fencing Buildout",
        location: "Torrington",
        images: [
          { src: `${IMG}/2025/04/Exterior-HVAC-wall-2.jpg`, alt: "Exterior HVAC wall" },
          { src: `${IMG}/2025/04/2036-Exterior-HVAC_door.jpg`, alt: "Exterior HVAC door" },
          { src: `${IMG}/2025/04/2036-Exterior-side.jpg`, alt: "Exterior side" },
          { src: `${IMG}/2025/04/2036-Interior-wall1.jpg`, alt: "Interior wall" },
          { src: `${IMG}/2025/04/2036-Interior-panels_cabinets.jpg`, alt: "Interior panels and cabinets" },
          { src: `${IMG}/2025/04/Ceiling-7.jpg`, alt: "Ceiling" },
          { src: `${IMG}/2025/04/Controller-1.jpg`, alt: "Controller" },
        ],
      },
      {
        customer: "Unity Fiber",
        subtitle: "Vicksburg Fiber Shelter",
        location: "Vicksburg",
        images: [
          { src: `${IMG}/2025/04/iHeartmedia_exteriorwalls.jpg`, alt: "Exterior walls" },
          { src: `${IMG}/2025/04/iHeartMedia_DoorEntrance.jpg`, alt: "Door entrance" },
          { src: `${IMG}/2025/03/rear_wHVACs.jpg`, alt: "Rear with HVACs" },
        ],
      },
      {
        customer: "North Central Electric",
        subtitle: "Fiber Build Electrical Substation Buildout",
        location: "Pleasanthill",
        images: [
          { src: `${IMG}/2025/04/Pic-1-Outside_GenRoom-1-scaled.jpg`, alt: "Outside generator room" },
          { src: `${IMG}/2025/04/Pic-2-Inside.jpg`, alt: "Inside shelter" },
          { src: `${IMG}/2025/04/Pic-1.jpg`, alt: "Shelter exterior" },
          { src: `${IMG}/2025/04/Pic-3-Inside.jpg`, alt: "Inside shelter" },
          { src: `${IMG}/2025/04/Pic-4-Inside-A.jpg`, alt: "Inside shelter" },
        ],
      },
    ],
  },
  {
    eyebrow: "Connecting Your Network Core",
    title: "ISP Field Installation",
    intro:
      "CellSite Solutions provides expert ISP field installation services for telecom facilities, ensuring precise setup of all inside plant infrastructure—including power systems, cabling, racks, and equipment. Our technicians follow industry best practices to deliver efficient, code-compliant installations that support long-term performance and scalability.",
    projects: [
      {
        customer: "Central Florida Electric",
        subtitle: "On-Site Refurbishment, Paint and Electrical",
        location: "Chiefland",
        images: [],
      },
      {
        customer: "Central Florida Electric",
        subtitle: "On-Site Refurbishment, Paint and Electrical",
        location: "Engalls",
        images: [],
      },
      {
        customer: "Central Florida Electric",
        subtitle: "On-Site Refurbishment, Paint and Electrical",
        location: "Ottercreek",
        images: [],
      },
    ],
  },
  {
    eyebrow: "On-Site Shelter Renewal",
    title: "On-Site Shelter Remanufacture",
    intro:
      "CellSite Solutions offers professional on-site shelter remanufacture services to restore and upgrade existing telecom shelters without the need for costly relocation. From structural repairs and HVAC replacement to electrical upgrades and interior refurbishments, our team delivers efficient, code-compliant solutions that maximize your shelter's performance and value—right at your location.",
    projects: [
      {
        customer: "Electric Co-op",
        subtitle: "On-Site Restored Shelter",
        location: "Central Florida",
        description:
          "In just a short timeframe, our team replaced both HVAC units, installed a new exterior polyvinyl roof, applied a fresh protective paint finish, and upgraded the interior with new ladder racks, cable management, and ISP equipment placement. This project highlights our ability to restore aging shelters directly in the field — minimizing downtime while delivering the quality and performance of a factory-remanufactured unit.",
        images: [
          { src: `${IMG}/2025/05/IMG_1366_BEFORE-1.jpg`, alt: "Shelter before restoration" },
          { src: `${IMG}/2025/05/Exterior-HVAC-wall_2_NOLABELS.jpg`, alt: "Exterior HVAC wall" },
          { src: `${IMG}/2025/05/Roof_AFTER-1.jpg`, alt: "Roof after restoration" },
          { src: `${IMG}/2025/05/inside_before.jpg`, alt: "Inside before restoration" },
          { src: `${IMG}/2025/05/Ceiling_2_NOLABEL.jpg`, alt: "Ceiling after restoration" },
        ],
      },
      {
        customer: "Verizon",
        subtitle: "On-Site Restored Shelter",
        location: "",
        images: [],
      },
    ],
  },
  {
    eyebrow: "Expert On-Site Support",
    title: "Field Services Management",
    intro:
      "CellSite Solutions provides expert field services to support the installation, maintenance, and repair of telecom infrastructure. Our experienced team offers on-site services such as equipment installation, system upgrades, troubleshooting, and routine maintenance, ensuring your telecom sites stay operational, secure, and compliant with industry standards.",
    projects: [
      {
        subtitle: "HVAC Installation",
        location: "Virginia",
        images: [],
      },
    ],
  },
  {
    eyebrow: "Early Detection, Lasting Safety",
    title: "Guy Anchor Inspections",
    intro:
      "Telecommunication tower sites rely on proper maintenance of guy anchor rods to prevent galvanic corrosion and avoid potential tower failure. CellSite Solutions offers cost-effective guy anchor inspections and protection services to detect early signs of wear and tear. Regular inspections help extend the lifespan of your guyed towers, saving money by identifying minor issues before they turn into costly repairs.",
    projects: [
      {
        customer: "Tower Owners",
        subtitle: "Dig to Block Inspection",
        location: "Nationwide",
        images: [],
      },
    ],
  },
];

function ProjectBlock({ project }: { project: Project }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
      {project.images.length > 0 && (
        <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {project.images.map((img) => (
            <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-md">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}
      {project.customer && (
        <p className="text-xs font-bold uppercase tracking-wide text-brand">
          Customer: {project.customer}
        </p>
      )}
      <h3 className="mt-1 text-xl font-bold text-ink">{project.subtitle}</h3>
      {project.location && (
        <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-muted">
          Location: {project.location}
        </p>
      )}
      {project.description && (
        <p className="mt-4 text-sm leading-relaxed text-muted">{project.description}</p>
      )}
    </div>
  );
}

export default function CivilServicesShowcasePage() {
  return (
    <>
      <PageHero
        eyebrow="Jump the Line"
        title="Civil Services Showcase"
        lede="Explore our civil construction service options—click a section below to quickly find the ideal solution for your project."
      />

      {/* ── Category nav ──────────────────────────────────────────── */}
      <section className="border-b border-border bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((c, i) => (
              <a
                key={c.title}
                href={`#category-${i}`}
                className="rounded-full border border-border px-4 py-2 text-xs font-bold uppercase tracking-wide text-ink transition-colors hover:border-brand hover:text-brand"
              >
                {c.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {categories.map((c, i) => (
        <section
          key={c.title}
          id={`category-${i}`}
          className={`scroll-mt-24 py-20 ${i % 2 === 0 ? "bg-white" : "bg-[#f6f6f6]"}`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">{c.eyebrow}</p>
              <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">{c.title}</h2>
              <p className="mt-5 text-base leading-relaxed text-muted">{c.intro}</p>
            </div>
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {c.projects.map((p, pi) => (
                <ProjectBlock key={`${p.subtitle}-${pi}`} project={p} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── Closing statement ─────────────────────────────────────── */}
      <section className="bg-surface-dark py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Laying the Foundation for Success
          </p>
          <h2 className="mt-2 text-3xl font-extrabold uppercase sm:text-4xl">
            Civil Construction Services
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/80">
            No other company matches the range of telecom site civil services offered by CellSite
            Solutions. We&rsquo;re a one-stop partner for every stage of your telecom infrastructure
            project—providing expert support from concept to completion. Our team handles everything
            from detailed site planning, grading, and grounding to equipment installation, shelter
            placement, cable routing, and utility coordination. Once your system is up and running, we
            offer ongoing maintenance and field services to keep your site operating at peak
            performance.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/80">
            When your project reaches the end of its lifecycle, we offer full decommissioning services,
            including the safe removal of equipment and complete site restoration, leaving the area
            clean, compliant, and ready for its next purpose. Whether you&rsquo;re launching a new
            build, expanding capacity, or upgrading aging infrastructure, CellSite Solutions delivers
            reliable, cost-effective, and fully integrated civil services tailored to your timeline and
            technical needs. With deep industry expertise and a commitment to excellence, we ensure
            your telecom site is built to last.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
