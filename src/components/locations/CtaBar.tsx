import Link from "next/link";
import type { Location } from "../../../data/_schema";
import { siteConfig } from "@/lib/site-config";

/** Primary CTA bar — request a site walk / call the regional line. */
export default function CtaBar({ location: l }: { location: Location }) {
  const phone = siteConfig.contact.phone;
  return (
    <section className="bg-white py-6">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-4 rounded-lg bg-brand px-6 py-6 text-white sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-lg font-medium">
            Planning telecom civil work in {l.identity.city}? Request a site walk.
          </p>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link
              href="#location-form"
              className="rounded-md bg-white px-5 py-2.5 font-display text-sm font-medium uppercase tracking-wide text-brand transition-colors hover:bg-black hover:text-white"
            >
              Request Site Walk
            </Link>
            <a
              href={`tel:${phone.replace(/[^0-9]/g, "")}`}
              className="rounded-md border border-white/70 px-5 py-2.5 font-display text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-brand"
            >
              Call {phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
