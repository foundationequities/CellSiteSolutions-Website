"use client";

import { usePathname } from "next/navigation";
import { footerVariantForPath } from "@/lib/locations-nav";

/**
 * Picks the CIVIL SERVICES LOCATIONS footer variant by route. Both variants
 * arrive as server-rendered nodes, so the selected one is present in the
 * server HTML of every statically generated page (PLAN §8: links must never
 * be JS-gated).
 */
export function LocationsFooterSwitch({
  compact,
  expanded,
}: {
  compact: React.ReactNode;
  expanded: React.ReactNode;
}) {
  const pathname = usePathname();
  return footerVariantForPath(pathname ?? "/") === "expanded" ? expanded : compact;
}
