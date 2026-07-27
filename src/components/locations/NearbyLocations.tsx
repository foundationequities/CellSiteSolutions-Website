import Link from "next/link";
import type { Location } from "../../../data/_schema";
import { cityHref } from "@/lib/locations-nav";
import { Module } from "./section";

/**
 * Nearby locations (CONTENT_MODULES Part 1 §9) — computed neighbors only,
 * never a hand-curated list (a doorway-pattern tell).
 */
export default function NearbyLocations({
  neighbors,
}: {
  neighbors: { location: Location; miles: number }[];
}) {
  if (neighbors.length === 0) return null;
  return (
    <Module id="nearby" eyebrow="Nearby" title="Nearby Service Locations" tone="gray">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {neighbors.map(({ location: n, miles }) => (
          <li key={`${n.identity.stateSlug}-${n.identity.slug}`}>
            <Link
              href={cityHref(n.identity.stateSlug, n.identity.slug)}
              className="block rounded-lg border border-border bg-white p-5 transition-colors hover:border-brand"
            >
              <p className="font-display text-lg font-medium text-ink">
                {n.identity.city}, {n.identity.stateAbbr}
              </p>
              <p className="mt-1 text-sm text-muted">{miles} miles away</p>
            </Link>
          </li>
        ))}
      </ul>
    </Module>
  );
}
