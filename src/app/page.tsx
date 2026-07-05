import Link from "next/link";
import { LogoStrip } from "@/components/logo-strip";
import { partnerLogos, customerLogos } from "@/lib/logos";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      {/* Placeholder hero — full page rebuild (Phase 4) comes next. This page
          exists to validate the scaffold, layout, fonts and localized logos. */}
      <section className="bg-surface-dark text-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Wireless Infrastructure
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Telecom shelters &amp; full site services, built to last.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact-us/"
              className="rounded-md bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
            >
              Request a Quote
            </Link>
            <Link
              href="/shelters/"
              className="rounded-md border border-white/25 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-white/60"
            >
              Explore Shelters
            </Link>
          </div>
        </div>
      </section>

      <LogoStrip title="Trusted by leading carriers & partners" logos={partnerLogos} />
      <LogoStrip title="Serving co-ops & fiber providers nationwide" logos={customerLogos} />
    </>
  );
}
