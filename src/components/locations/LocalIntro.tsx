import Link from "next/link";
import type { Location } from "../../../data/_schema";
import { stateHref, LOCATIONS_INDEX_HREF } from "@/lib/locations-nav";
import { prose } from "./section";

/** H1 + authored local intro (CONTENT_MODULES Part 1 §1) with visible breadcrumbs. */
export default function LocalIntro({ location: l }: { location: Location }) {
  return (
    <section className="bg-white pb-4 pt-32 lg:pt-40">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-1">
            <li><Link href="/" className="hover:text-brand">Home</Link><span aria-hidden> / </span></li>
            <li><Link href="/civil-construction/" className="hover:text-brand">Civil Construction</Link><span aria-hidden> / </span></li>
            <li><Link href={LOCATIONS_INDEX_HREF} className="hover:text-brand">Service Locations</Link><span aria-hidden> / </span></li>
            <li><Link href={stateHref(l.identity.stateSlug)} className="hover:text-brand">{l.identity.state}</Link><span aria-hidden> / </span></li>
            <li aria-current="page" className="text-ink">{l.identity.city}</li>
          </ol>
        </nav>
        <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-brand">
          {l.identity.city}, {l.identity.stateAbbr}
        </p>
        <h1 className="mt-2 max-w-4xl text-[32px] uppercase leading-[1.08] text-ink sm:text-[48px]">
          {l.metadata.h1}
        </h1>
        <p className={`mt-5 max-w-3xl ${prose}`}>{l.metadata.intro}</p>
      </div>
    </section>
  );
}
