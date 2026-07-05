import type { ContentPageData } from "@/components/content-page";

/**
 * Page content for the product & service routes. Copy is grounded in the live
 * CellSite Solutions site and public sources; a few gap-filling passages are
 * clearly professional-standard for the industry. Proofread against the live
 * mirror before launch (see CLAUDE.md, Phase 4).
 */
export const contentPages: Record<string, ContentPageData> = {
  /* ─── Products ─────────────────────────────────────────────────────────── */
  "shelters": {
    slug: "/shelters",
    eyebrow: "Products",
    breadcrumb: [{ title: "Shelters", href: "/shelters" }],
    seoTitle: "Remanufactured Telecom Shelters",
    metaDescription:
      "Cost-effective, like-new remanufactured concrete telecom shelters. Durable, energy-efficient, and customizable in sizes from 6'x8' to 12'x28'.",
    h1: "Remanufactured Telecom Shelters Built to Perform",
    subtitle:
      "A smarter, more sustainable alternative to buying new — like-new reliability at a fraction of the price.",
    blocks: [
      {
        heading: "A smarter, more sustainable alternative",
        paragraphs: [
          "CellSite Solutions specializes in remanufacturing equipment shelters, delivering a more sustainable, eco-friendly alternative to buying new. Each remanufactured shelter is meticulously upgraded with new components, providing a cost-effective “like-new” solution that delivers the same reliability and durability as a brand-new unit — but at a fraction of the price.",
          "Every remanufactured shelter also prevents roughly 20 tons of concrete from ending up in a landfill, making it a responsible choice for your budget and the environment.",
        ],
      },
      {
        heading: "Sizes and types for every deployment",
        paragraphs: [
          "Our secure, long-lasting shelters range in size from 6' x 8' to 12' x 28' and are available in several types, including lightweight, lightweight concrete, concrete, and fiberglass.",
          "Whether you're supporting telecom infrastructure, fiber optic networks, data centers, or utility operations, our customizable shelters provide the flexibility and reliability your operation demands.",
        ],
      },
      {
        heading: "Engineered for efficiency",
        paragraphs: [
          "Our shelters feature the latest refrigerants, variable-speed HVAC systems tuned for optimal winter and summer performance, and energy-efficient LED lighting. Each unit is upgraded for unmatched durability and energy efficiency, even in the most challenging environments.",
          "We also keep concrete telecom shelters in stock for fast deployment. Inventory changes quickly, so contact us for current availability of as-is and fully remanufactured units.",
        ],
      },
    ],
    features: {
      heading: "Shelter highlights",
      items: [
        { title: "6' x 8' to 12' x 28'", description: "A full range of footprints to match any site requirement." },
        { title: "Multiple constructions", description: "Concrete, lightweight concrete, lightweight, and fiberglass." },
        { title: "Variable-speed HVAC", description: "Latest refrigerants tuned for winter and summer performance." },
        { title: "LED lighting", description: "Energy-efficient interior lighting throughout." },
        { title: "Custom modifications", description: "Gen-room partitions, door relocations, and alarm packages." },
        { title: "In-stock inventory", description: "Concrete shelters ready for fast deployment nationwide." },
      ],
    },
    cta: { title: "Need a shelter for your next site?", subtitle: "Tell us your size, timeline, and site requirements — we'll match you with the right shelter." },
  },

  "telecom-shelters": {
    slug: "/telecom-shelters",
    eyebrow: "Products",
    breadcrumb: [{ title: "Telecom Shelters", href: "/telecom-shelters" }],
    seoTitle: "Telecom Shelters for Sale",
    metaDescription:
      "Durable telecom equipment shelters in concrete, lightweight, and fiberglass. Sizes 6'x8' to 12'x28', customizable with HVAC, power, and gen-room options.",
    h1: "Telecom Equipment Shelters Engineered for Reliability",
    subtitle:
      "Purpose-built enclosures that protect sensitive network equipment in the harshest environments.",
    blocks: [
      {
        heading: "Purpose-built for telecom infrastructure",
        paragraphs: [
          "Our telecom shelters protect sensitive network equipment in the harshest environments. Available in concrete, lightweight concrete, lightweight, and fiberglass construction, each shelter can be tailored to the exact footprint, power, and climate-control requirements of your site — from compact 6' x 8' units to spacious 12' x 28' enclosures.",
        ],
      },
      {
        heading: "Custom configurations, including gen rooms",
        paragraphs: [
          "Beyond standard layouts, we partition shelters to separate telecom racks from generator rooms, add custom door locations, and integrate air-intake louvers — delivering turnkey solutions matched to demanding site specifications and timelines.",
          "See our Shelter Showcase for a completed gen-room transformation that started as a dilapidated surplus unit.",
        ],
      },
      {
        heading: "Complete climate and power packages",
        paragraphs: [
          "Shelters ship with variable-speed HVAC systems using the latest refrigerants, energy-efficient LED lighting, complete alarm packages with door contacts and high/low temperature sensors, and electrical service sized to your load.",
        ],
      },
    ],
    checklist: {
      heading: "Configure it your way",
      items: [
        "Concrete, lightweight, and fiberglass construction",
        "Footprints from 6' x 8' to 12' x 28'",
        "Generator-room partitioning",
        "Custom door locations and air-intake louvers",
        "Variable-speed HVAC with latest refrigerants",
        "Alarm packages with door and temperature sensors",
        "Electrical service sized to your load",
        "As-is or fully remanufactured options",
      ],
    },
    cta: { title: "Looking for a specific shelter configuration?" },
  },

  "datacomm-pro-series": {
    slug: "/datacomm-pro-series",
    eyebrow: "Products",
    breadcrumb: [{ title: "Datacomm Pro Series", href: "/datacomm-pro-series" }],
    seoTitle: "Datacomm Pro Series Lightweight Shelters",
    metaDescription:
      "Lightweight, ruggedized telecom shelters up to 45% less than concrete. USA-made, wind-rated, up to 50 racks, six standard sizes up to 23'x36'.",
    h1: "Datacomm Pro Series: Lightweight, Telecom-Tough Shelters",
    subtitle:
      "The structural integrity critical infrastructure demands — at up to 45% less cost than concrete.",
    video: { id: "YA3MnKXqLCg", title: "Datacomm Pro Series Lightweight Shelter Installation" },
    blocks: [
      {
        heading: "A lightweight alternative without compromise",
        paragraphs: [
          "Engineered telecom-tough for operators, carriers, and edge data providers, the Datacomm Pro Series weighs substantially less than traditional concrete while delivering the structural integrity critical communications and data infrastructure demand.",
          "Compared to concrete shelters, the Datacomm Pro Series offers savings of up to 45% — superior value without sacrificing durability or functionality.",
        ],
      },
      {
        heading: "Rugged construction, made in the USA",
        paragraphs: [
          "Each shelter is built on reinforced 2x4 framing, clad internally with ½-inch FRP/OSB panels. The exterior carries ½-inch wall sheathing, a ¾-inch exterior-grade plywood roof deck, and durable 5/16-inch cement-board siding.",
          "Every unit sits on galvanized steel skids for easy deployment and mobility, and is proudly manufactured in the USA.",
        ],
      },
      {
        heading: "Sizes, capacity, and performance",
        paragraphs: [
          "Available in six standard sizes up to 23' x 36', supporting up to 50 equipment racks in a single enclosure. Footprint options include 12'x10', 12'x16', 12'x20', 12'x30', and 12'x36'.",
          "Shelters are built to withstand 150 MPH winds and 90 psf snow loads with seismic-rated construction, and offer dual 3–10 ton HVAC options plus available hot/cold aisle containment.",
        ],
      },
      {
        heading: "Hardened and ballistics upgrades",
        paragraphs: [
          "For extreme durability, the ULTRA Series uses 2\"x6\" structural framing engineered for wind speeds up to 180 MPH, and Enhanced Ballistics Protection upgrades deliver up to Level 3 resistance against forced entry, vandalism, and firearm threats. Electrical options range from a standard 200 Amp service panel up to 600 Amp.",
        ],
      },
    ],
    features: {
      heading: "Backed by strong warranties",
      items: [
        { title: "Structural — 5 years", description: "Warranty on the shelter's structural integrity." },
        { title: "Workmanship — 5 years", description: "Coverage on build quality and finish." },
        { title: "Roof — 10 years", description: "Long-term roof performance warranty." },
        { title: "Floor — 15 years", description: "Extended floor durability warranty." },
        { title: "Up to 50 racks", description: "Six standard sizes up to 23' x 36'." },
        { title: "HVAC warranty", description: "Manufacturer standard warranties on HVAC equipment." },
      ],
    },
    cta: {
      title: "Want the complete Datacomm Pro Series guide?",
      subtitle: "Download our in-depth guide, or request a quote for your deployment.",
    },
  },

  "hvac-units": {
    slug: "/hvac-units",
    eyebrow: "Products",
    breadcrumb: [{ title: "HVAC Units", href: "/hvac-units" }],
    seoTitle: "Telecom Shelter HVAC Units & Cooling",
    metaDescription:
      "High-efficiency HVAC for telecom shelters — AIRSYS and Bard units, redundant configurations, PLC/lead-lag control, and full alarm packages for critical uptime.",
    h1: "HVAC Systems That Protect Your Telecom Equipment",
    subtitle:
      "Precise, reliable climate control engineered for the always-on conditions inside telecom shelters.",
    blocks: [
      {
        heading: "Purpose-built cooling for critical infrastructure",
        paragraphs: [
          "Sensitive telecom and fiber equipment depends on precise, reliable climate control. CellSite Solutions specifies, installs, and services high-efficiency HVAC systems engineered for the demanding, always-on conditions inside telecom shelters — keeping critical infrastructure cool year-round.",
        ],
      },
      {
        heading: "Redundant, high-efficiency configurations",
        paragraphs: [
          "We deploy leading HVAC platforms tailored to each site's thermal load. Recent builds include high-efficiency AIRSYS variable HVAC units (3–6 ton) with the ASMUC.6.AC controller, AIRSYS units mounted on both the front and back of a shelter for enhanced airflow and redundancy, and three 6-ton Bard units on a PLC controller capable of running all units simultaneously for maximum cooling.",
          "Variable-speed systems using the latest refrigerants optimize performance in both winter and summer.",
        ],
      },
      {
        heading: "Turnkey monitoring and service",
        paragraphs: [
          "Every install can include a complete alarm package with door contacts and high/low temperature sensors, delivering operational confidence and critical environmental monitoring in one package.",
          "Our technicians install new units or upgrade existing ones — repairing condensate lines and installing new thermostats, economizers, and lead-lag controllers. All refrigerant work is performed by certified technicians for compliant, responsible handling during every install, service, and disposal.",
        ],
      },
    ],
    features: {
      heading: "HVAC capabilities",
      items: [
        { title: "AIRSYS variable units", description: "3–6 ton units with the ASMUC.6.AC controller." },
        { title: "Bard multi-unit systems", description: "Three 6-ton units on a PLC for simultaneous cooling." },
        { title: "Front & back mounting", description: "Redundant airflow configurations for uptime." },
        { title: "Lead-lag control", description: "Balances runtime and provides automatic backup." },
        { title: "Full alarm package", description: "Door contacts and high/low temperature sensors." },
        { title: "Certified refrigerant handling", description: "Compliant recovery, service, and disposal." },
      ],
    },
    cta: { title: "Need HVAC for a new or existing shelter?" },
  },

  "generators": {
    slug: "/generators",
    eyebrow: "Products",
    breadcrumb: [{ title: "Generators", href: "/generators" }],
    seoTitle: "Backup Generators for Cell Sites",
    metaDescription:
      "Commercial backup generators and battery systems for cell sites. Single- to 3-phase units, foundations, grounding, and full turnkey installation.",
    h1: "Backup Power Generators for Cell Sites",
    subtitle: "Reliable standby power that keeps your network online when the grid goes down.",
    blocks: [
      {
        heading: "Reliable power when the grid goes down",
        paragraphs: [
          "Cell sites can't afford downtime. CellSite Solutions maintains a large inventory of backup power solutions — including new commercial generators and battery systems — and matches each customer with the right equipment.",
          "Backed by over 20 years of telecommunications experience, our team takes time to understand each unique situation before recommending a generator that fits the site's exact power needs.",
        ],
      },
      {
        heading: "Sizes for every load",
        paragraphs: [
          "We stock a wide variety of new generators for sale, from single-phase units to 3-phase commercial generators capable of handling large-scale power demands — providing power indefinitely until the main line is restored.",
        ],
      },
      {
        heading: "Battery backup systems",
        paragraphs: [
          "For emergency outages, we install compact, self-contained battery backup systems. Batteries charge from the existing power system and switch on automatically only when grid power drops, delivering several hours of runtime to bridge short interruptions.",
        ],
      },
      {
        heading: "Complete foundations and installation",
        paragraphs: [
          "Our in-house teams of electricians, mechanical engineers, and civil engineers manage the full scope — generator and shelter foundations, grounding, electrical work, and compound fencing — for a true turnkey install.",
        ],
      },
    ],
    cta: { title: "Find the right backup power for your site" },
  },

  "cabinets": {
    slug: "/cabinets",
    eyebrow: "Products",
    breadcrumb: [{ title: "Cabinets", href: "/cabinets" }],
    seoTitle: "Outdoor Telecom Equipment Cabinets",
    metaDescription:
      "Durable outdoor telecom cabinets and battery storage enclosures. Secure, weatherproof protection plus complete inside-plant (ISP) solutions.",
    h1: "Secure Outdoor Equipment Cabinets",
    subtitle: "Weatherproof, tamper-resistant protection for equipment that can't fail.",
    blocks: [
      {
        heading: "Weatherproof, tamper-resistant protection",
        paragraphs: [
          "CellSite Solutions offers durable telecom cabinets designed for security and storage, protecting sensitive equipment against weather and tampering.",
          "For sites that need spare-battery capacity, we supply battery storage cabinets that keep batteries in controlled temperatures — ready when backup power is called on.",
        ],
      },
      {
        heading: "Integrated ISP solutions",
        paragraphs: [
          "Cabinets are part of our broader Inside Plant (ISP) capability — the equipment inside a telecom shelter responsible for managing data traffic in and out of a location.",
          "Our ISP work spans ladder racking, cabinets, cable routing and pathway management, electrical equipment, copper and fiber optic cabling, fiber optic splicing enclosures, optical distribution frames, switches, routers, power supplies, and cooling systems.",
        ],
      },
      {
        heading: "New and reconditioned inventory",
        paragraphs: [
          "We offer one of the country's largest selections of reconditioned and surplus telecommunications infrastructure equipment, and we can install, service, and maintain cabinets and enclosures that meet or exceed industry standards.",
        ],
      },
    ],
    checklist: {
      heading: "Inside-plant capabilities",
      items: [
        "Ladder racking and pathway management",
        "Copper and fiber optic cabling",
        "Fiber optic splicing enclosures",
        "Optical distribution frames (ODFs)",
        "Switches, routers, and power supplies",
        "Battery storage cabinets",
        "Cooling systems integration",
        "Reconditioned and surplus inventory",
      ],
    },
    cta: { title: "Protect your equipment with the right enclosure" },
  },

  /* ─── Services ─────────────────────────────────────────────────────────── */
  "installation-integration": {
    slug: "/installation-integration",
    eyebrow: "Services",
    breadcrumb: [{ title: "Installation & Integration", href: "/installation-integration" }],
    seoTitle: "Equipment Installation & Integration",
    metaDescription:
      "Skilled crews install and integrate telecom shelters and equipment — getting your new gear up, connected, and running efficiently at any site.",
    h1: "Equipment Installation & Integration",
    subtitle: "One accountable team to get your equipment installed, connected, and running.",
    video: { id: "m8y4Uc3cARk", title: "CellSite Solutions Telecom Shelter Installation" },
    blocks: [
      {
        heading: "Seamless integration by telecom specialists",
        paragraphs: [
          "CellSite provides skilled, experienced teams to integrate new equipment into your telecom site. Our specialists know telecom shelters inside and out and ensure your gear is installed, connected, and running efficiently and effectively — from a single site installation to a multi-regional deployment.",
        ],
      },
      {
        heading: "Full life-cycle support",
        paragraphs: [
          "As a complete turnkey provider, CellSite brings together several in-house business segments — Civil Construction, Electrical, HVAC/Mechanical, Craning and Logistics, Inside Plant, and Outside Plant — so equipment install and integration is handled by one accountable team rather than a chain of subcontractors.",
        ],
      },
      {
        heading: "Staging and logistics",
        paragraphs: [
          "Beyond field integration, CellSite supports shipping, warehousing, and staging so equipment arrives configured and ready to install — reducing on-site time and getting networks live faster.",
        ],
      },
    ],
    checklist: {
      heading: "In-house segments behind every install",
      items: [
        "Civil Construction",
        "Electrical",
        "HVAC / Mechanical",
        "Craning and Logistics",
        "Inside Plant",
        "Outside Plant",
      ],
    },
    cta: { title: "Ready to deploy new equipment?" },
  },

  "civil-construction": {
    slug: "/civil-construction",
    eyebrow: "Services",
    breadcrumb: [{ title: "Civil Construction", href: "/civil-construction" }],
    seoTitle: "Civil Construction for Telecom Sites",
    metaDescription:
      "Foundations, grounding, electrical, trenching, and compound fencing — CellSite delivers the full civil construction needed for a finished telecom site.",
    h1: "Telecom Civil Construction",
    subtitle: "From site planning and design to a complete, usable, finished telecom site.",
    blocks: [
      {
        heading: "From site planning to finished infrastructure",
        paragraphs: [
          "From initial site planning and design through construction and final installation, CellSite delivers the civil construction services needed to create a complete, usable, finished telecom site. In-house teams of electricians, HVAC technicians, mechanical engineers, and civil engineers manage the full project.",
        ],
      },
      {
        heading: "Foundations, grounding, and site civil work",
        paragraphs: [
          "Our crews handle shelter and generator foundations, grounding, electrical work, and compound fencing. Our scope ranges from civil work, shelter tie-downs, generator pads, and trenching conduits to crane offloads, shelter stoops, grounding rings, power connectivity, and weed barriers.",
        ],
      },
      {
        heading: "Built for surge protection and durability",
        paragraphs: [
          "Concrete foundations are poured for the shelter, generator pad, and entrance, with conduit entry points carefully blocked off so no concrete enters the conduit. An electrical meter is set on-site along with a ground ring to guard against power surges and static build-up.",
        ],
      },
    ],
    checklist: {
      heading: "Civil construction scope",
      items: [
        "Shelter and generator foundations",
        "Shelter tie-downs and stoops",
        "Grounding rings and surge protection",
        "Electrical work and meter setting",
        "Trenching and conduit runs",
        "Crane offloads",
        "Compound fencing",
        "Weed barriers and site finishing",
      ],
    },
    cta: { title: "Planning a new site build?" },
  },

  "installation-commissioning": {
    slug: "/installation-commissioning",
    eyebrow: "Services",
    breadcrumb: [{ title: "Installation & Commissioning", href: "/installation-commissioning" }],
    seoTitle: "Shelter Installation & Commissioning",
    metaDescription:
      "CellSite completes every aspect of shelter installation and commissioning — prepping the site, making all connections, and ensuring regulations are met.",
    h1: "Installation & Commissioning",
    subtitle: "Turned over ready to operate — every connection made, every regulation met.",
    blocks: [
      {
        heading: "Every aspect, handled",
        paragraphs: [
          "Once you've selected the right shelter, CellSite completes every aspect of installation and commissioning — prepping your site for the new structure, making sure all connections are made, and ensuring all regulations are met.",
        ],
      },
      {
        heading: "Turnkey field expertise",
        paragraphs: [
          "With decades of combined telecommunications experience, our professional installation experts deliver telecom shelter installation and site commissioning that spans civil work, tie-downs, generator pads, trenching, crane offloads, grounding, and power connectivity — equipped to handle jobs from a single site to a multi-regional deployment.",
        ],
      },
      {
        heading: "Regulatory and quality assurance",
        paragraphs: [
          "Commissioning includes verifying that power, grounding, and equipment connections meet code and carrier specifications before hand-off, so the site is turned over ready to operate.",
        ],
      },
    ],
    cta: { title: "Bring your site online with confidence" },
  },

  "general-site-maintenance": {
    slug: "/general-site-maintenance",
    eyebrow: "Services",
    breadcrumb: [{ title: "General Site Maintenance", href: "/general-site-maintenance" }],
    seoTitle: "General Telecom Site Maintenance",
    metaDescription:
      "Keep your telecom infrastructure at peak performance year-round with CellSite's electrical maintenance, civil work, and equipment replacement services.",
    h1: "General Site Maintenance",
    subtitle: "Keep telecom infrastructure operating at peak performance, year-round.",
    blocks: [
      {
        heading: "Peak performance, year-round",
        paragraphs: [
          "CellSite offers comprehensive general maintenance services that keep telecom infrastructure operating at peak performance year-round. Our experienced team provides expert electrical maintenance, civil work, and equipment replacement, addressing every aspect of telecom site upkeep.",
        ],
      },
      {
        heading: "Tailored to your site",
        paragraphs: [
          "Whether it's ensuring reliable power systems, maintaining structural integrity, or replacing aging telecom equipment, CellSite delivers tailored solutions built around the specific needs of each site — backed by in-house Electrical, HVAC/Mechanical, and Civil Construction segments.",
        ],
      },
      {
        heading: "One provider across the life cycle",
        paragraphs: [
          "Because CellSite also handles installation, integration, and decommissioning, ongoing maintenance stays with a partner who already knows your infrastructure — simplifying coordination and accountability.",
        ],
      },
    ],
    cta: { title: "Keep your sites running at their best" },
  },

  "site-decommissioning": {
    slug: "/site-decommissioning",
    eyebrow: "Services",
    breadcrumb: [{ title: "Site Decommissioning", href: "/site-decommissioning" }],
    seoTitle: "Telecom Site Decommissioning & Removal",
    metaDescription:
      "More than demolition — CellSite handles tower and shelter removal, R2 responsible recycling, asset tracking, and full site restoration when your project ends.",
    h1: "Site Decommissioning",
    subtitle: "Responsible teardown, recycling, and restoration when your project ends.",
    blocks: [
      {
        heading: "More than demolition",
        paragraphs: [
          "Decommissioning a telecom site is more than just demolition. CellSite's telecom demolition services are designed for the unique challenges of telecom sites — towers, batteries, internal equipment, hazardous materials, and communication shelter removal.",
        ],
      },
      {
        heading: "Full-scope, responsible removal",
        paragraphs: [
          "Our decommissioning services cover cell tower removal, communication shelter removal, light and antenna removal, internal equipment removal, battery disposal, asset disposal and tracking, site remediation, and R2 standards for responsible recycling. We provide solutions for any size project, streamlining removal, transportation, and disposal.",
        ],
      },
      {
        heading: "Restored and ready for reuse",
        paragraphs: [
          "CellSite brings the land back to working condition so it can be repurposed for other building uses. During cleanup, old and potentially hazardous materials are removed so the site is restored safely — decommissioning with full restoration when your project ends.",
        ],
      },
    ],
    checklist: {
      heading: "Decommissioning scope",
      items: [
        "Cell tower removal",
        "Communication shelter removal",
        "Light and antenna removal",
        "Internal equipment removal",
        "Battery and hazardous-material disposal",
        "Asset disposal and tracking",
        "R2 responsible recycling",
        "Site remediation and restoration",
      ],
    },
    cta: { title: "Closing down a site?" },
  },

  "guy-tower-rod-inspections": {
    slug: "/guy-tower-rod-inspections",
    eyebrow: "Services",
    breadcrumb: [{ title: "Guy, Tower & Rod Inspections", href: "/guy-tower-rod-inspections" }],
    seoTitle: "Guy Tower & Anchor Rod Inspections",
    metaDescription:
      "Protect guyed towers from failure. CellSite inspects guy wires and anchor rods for corrosion and integrity, extending tower life and preventing costly damage.",
    h1: "Guy, Tower & Rod Inspections",
    subtitle: "Catch corrosion early and protect the structural integrity of your guyed towers.",
    blocks: [
      {
        heading: "Protecting the integrity of guyed towers",
        paragraphs: [
          "Guy wires and anchor rods support a guyed tower's structure. To maintain performance, these anchor rods must be examined periodically to confirm their integrity has not been compromised. CellSite's expert inspections assess guy wires and anchor rods to help maintain tower performance, security, and life expectancy.",
        ],
      },
      {
        heading: "Corrosion is the hidden threat",
        paragraphs: [
          "If not properly maintained, galvanic corrosion can build up on guy anchor rods and lead to tower failure. CellSite's professional anchor rod protection services identify that corrosion early and help keep towers structurally sound and compliant.",
        ],
      },
      {
        heading: "Regular inspections save money",
        paragraphs: [
          "Routine inspections extend the life of your guyed tower and help avoid costly damage by catching minor problems while they're still small — protecting both your asset and the network it supports.",
        ],
      },
    ],
    cta: { title: "Schedule a tower and anchor-rod inspection" },
  },

  "disaster-recovery": {
    slug: "/disaster-recovery",
    eyebrow: "Services",
    breadcrumb: [{ title: "Disaster Recovery", href: "/disaster-recovery" }],
    seoTitle: "Telecom Disaster Recovery & Emergency Repair",
    metaDescription:
      "When disaster strikes, CellSite restores damaged shelters, power systems, and network components fast — minimizing downtime and keeping communications online.",
    h1: "Disaster Recovery",
    subtitle: "Rapid recovery when it matters most — restoring critical telecom infrastructure fast.",
    blocks: [
      {
        heading: "Rapid recovery when it matters most",
        paragraphs: [
          "CellSite is a leading provider of disaster recovery and repair services for telecommunication buildings and related equipment, ensuring minimal downtime and quick recovery in times of crisis. Our dedicated technicians and engineers work swiftly to repair and restore critical telecom equipment.",
        ],
      },
      {
        heading: "Restoring shelters, power, and networks",
        paragraphs: [
          "With deep telecom infrastructure expertise, CellSite specializes in restoring damaged telecom shelters, power systems, and network components — handling the full complexity of emergency repairs, from structural damage to electrical issues, so operators can quickly resume operations.",
        ],
      },
      {
        heading: "Backed by the country's largest equipment inventory",
        paragraphs: [
          "Beyond recovery services, CellSite offers one of the country's largest selections of reconditioned and surplus telecom infrastructure equipment — shelters, towers, cabinets, generators, HVAC, and backup power — so replacement assets are available fast when disaster hits.",
        ],
      },
    ],
    cta: {
      title: "Need emergency telecom recovery?",
      subtitle: "Reach our team right away — we mobilize quickly to restore critical infrastructure.",
    },
  },
};

export const contentSlugs = Object.keys(contentPages);
