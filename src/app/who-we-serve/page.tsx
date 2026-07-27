import Image from "next/image";
import type { Metadata } from "next";
import { PhotoBand } from "@/components/photo-band";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "CellSite Solutions supports tower owners, wireless carriers, fiber providers, cable and internet companies, municipalities, and telecom co-ops with turnkey infrastructure solutions.",
};

const IMG = "/images/wp-content/uploads";

const keyPlayers = [
  {
    title: "TOWER OWNERS",
    copy: "You may already be thinking of the money you can save by choosing a recycled shelter or other gear designed to your exacting specifications. But in addition to reducing your budget, you’ll be helping keep our planet healthy and industry sustainable. Each year, CellSite has kept 17.5 million pounds of concrete out of landfills by recycling shelters. And with our huge inventory, we will have you up and running faster than anyone else.",
  },
  {
    title: "WIRELESS CARRIERS",
    copy: "For wireless carriers, CellSite Solutions offers the flexibility to add to and upgrade your site at the pace of evolving technology. We also provide the essential maintenance to keep your site functioning at the highest level and protect your investment. With a sophisticated selection of shelters, cabinets, HVAC, alarm systems, and more, we can extend the life of your equipment and save you money.",
  },
  {
    title: "FIBER PROVIDERS",
    copy: "Growing fiber networks require connection, protection, and maintenance. We can help with all three, from state-of-the-art fiber huts and other site services.",
  },
];

// Portrait photos from the live auto-fading partner slider (localized).
const partners = [
  {
    title: "CABLE & INTERNET PROVIDERS",
    copy: "Cable and internet bring content to millions of people every day. CellSite specializes in all aspects of cable/internet maintenance, from shelters and towers to guy line inspection and battery backup. When people rely on your services, you can rely on CellSite to keep you up and running no matter what.",
    image: `${IMG}/2024/10/cellsite-whoweserve-CableandInternet-760x884-1.jpg`,
  },
  {
    title: "TOWNS & MUNICIPALITIES",
    copy: "We work with many towns and municipalities to deliver exceptional engineering service to residents. One of our most crucial functions is establishing and maintaining local emergency networks. When residents dial 911, our services help connect them to assistance regardless of their provider. We will work with your town or municipality to install emergency service and provide peace of mind.",
    image: `${IMG}/2024/10/Cellsite-whoweserve-townsmunicip_760x884.jpg`,
  },
  {
    title: "TELECOM CO-OPS",
    copy: "Millions of Americans rely on their local telecommunications co-op for service. As a co-op provider, you have a responsibility to keep them connected. CellSite is your partner in this effort, with efficient and cost-effective solutions.",
    image: `${IMG}/2024/10/cellsite-whoweserve-telecomcoops-760x884-1.png`,
  },
];

const ghostWordClass =
  "pointer-events-none absolute select-none whitespace-nowrap font-display font-bold uppercase leading-none text-transparent opacity-20";

export default function WhoWeServePage() {
  return (
    <>
      {/* ── Hero: stacked two-line title + giant outlined ghost words ── */}
      <section className="relative flex items-center overflow-hidden bg-surface-dark text-white">
        {/* static outlined background words (live uses a scrolling marquee) */}
        <span
          aria-hidden
          className={`${ghostWordClass} -left-4 top-24 text-[110px] lg:text-[220px]`}
          style={{ WebkitTextStroke: "2px rgba(255,255,255,0.4)" }}
        >
          HELP
        </span>
        <span
          aria-hidden
          className={`${ghostWordClass} -right-6 bottom-8 text-[110px] lg:text-[220px]`}
          style={{ WebkitTextStroke: "2px rgba(255,255,255,0.4)" }}
        >
          SUPPORT
        </span>
        {/* radial dark overlay, as on the live heroes */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 100%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-28 text-center sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
          <p className="mb-3 font-display text-sm font-medium uppercase tracking-[0.2em] text-brand">
            WHO WE SERVE
          </p>
          <h1 className="mx-auto max-w-4xl uppercase leading-[1.05] text-[36px] sm:text-[64px] lg:text-[96px]">
            WHO WE
            <br />
            SERVE
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
            There are an estimated 419,000 cellular service sites in the United States alone. Whether
            you’re responsible for building, maintaining, upgrading, or managing any aspect of these
            sites, CellSite Solutions has the products and expertise to support your needs. Our
            solutions are designed to help everyone from engineers and contractors to site owners and
            telecom providers. No matter your role, we provide the essential equipment and services
            that ensure your operations are efficient and reliable. Keep reading to discover how we
            can work alongside you and enhance your success in this critical industry.
          </p>
        </div>
      </section>

      {/* ── The Key Players intro ────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="group relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={`${IMG}/2024/10/Who-We-Support.png`}
              alt="Who We Support"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-brand">The Key Players</p>
            <h2 className="mt-2 text-[35px] text-ink sm:text-[65px]">WHO WE SUPPORT</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              At CellSite Solutions, we are dedicated to supporting key players in the telecommunications
              industry, offering comprehensive solutions to streamline operations and maximize
              efficiency. Whether you’re a tower owner looking to optimize site management, a wireless
              carrier expanding network coverage, or a fiber provider enhancing connectivity, our
              products and services are designed with your needs in mind. Explore how we can support your
              specific role and help you achieve your goals in this rapidly evolving industry.
            </p>
          </div>
        </div>
      </section>

      {/* ── Key player columns (plain text, as live) ─────────────── */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            {keyPlayers.map((p) => (
              <div key={p.title}>
                <h3 className="text-xl text-ink">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hook You Up (tall full-bleed photo band, no button) ──── */}
      <PhotoBand image={`${IMG}/2024/10/Cellsite-whoweserve-hookyouup-1920x1077-1.jpg`}>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold tracking-[0.2em] text-brand">HERE TO HELP</p>
          <h2 className="mt-2 text-[35px] sm:text-[65px]">LET US HOOK YOU UP</h2>
        </div>
      </PhotoBand>

      {/* ── Who we partner with ──────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold tracking-[0.2em] text-brand">The Community</p>
            <h2 className="mt-2 text-[35px] text-ink sm:text-[65px]">WHO WE PARTNER WITH</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              CellSite Solutions is proud to partner with essential organizations and local governments
              to strengthen telecommunications infrastructure across communities. Whether you’re a cable
              and internet provider improving customer service, a town or municipality enhancing public
              connectivity, or a telecom co-op ensuring reliable communication for your members, our team
              is committed to delivering solutions that meet your unique needs. Discover how our
              partnerships foster growth and connectivity where it matters most.
            </p>
          </div>

          {/* photo-background cards matching the live partner slider */}
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {partners.map((p) => (
              <div
                key={p.title}
                className="relative flex aspect-[760/884] flex-col justify-end overflow-hidden rounded-lg p-7 text-white"
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/55" aria-hidden />
                <div className="relative">
                  <h3 className="text-xl">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/85">{p.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full-service quote band (white + texture, as live) ───── */}
      <section
        className="bg-white py-20"
        style={{
          backgroundImage: `url(${IMG}/2024/06/section-texture-mask-4.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold tracking-[0.2em] text-brand">WHO WE SERVE</p>
          <p className="mt-4 font-display text-[28px] font-medium leading-snug text-ink sm:text-[36px]">
            We&rsquo;re a full-service company that will help you every step of the way—and at every stage
            in between.
          </p>
          <p className="mt-6 font-bold text-ink">Your Telecom Experts</p>
          <p className="text-sm text-muted">CellSite Solutions</p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
