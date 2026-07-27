import type { MetadataRoute } from "next";
import { pageRoutes, blogRoutes } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";
import { getPublishedLocations } from "@/lib/locations";
import { getPublishedStateHubs } from "@/lib/states";
import { LOCATIONS_INDEX_HREF, stateHref, cityHref } from "@/lib/locations-nav";

/**
 * Segmented sitemap index (PLAN §6.3): core / services / locations / resources
 * emit as separate sitemap files so the locations cluster can be diagnosed
 * independently in Search Console. Location entries carry a real lastmod
 * (the human verification date), never build time.
 *
 * Discovery sequencing at production cutover (PLAN §12): submit core+services
 * to GSC first and hold the locations sitemap 2-3 weeks — that is a Search
 * Console action, not a code change; everything stays crawlable throughout.
 */

const SEGMENTS = ["core", "services", "locations", "resources"] as const;
export function generateSitemaps() {
  return SEGMENTS.map((id) => ({ id }));
}

const SERVICE_PREFIXES = [
  "/shelters",
  "/telecom-shelters",
  "/datacomm-pro-series",
  "/shelter-",
  "/hvac-units",
  "/cabinets",
  "/generators",
  "/generator-install",
  "/cell-on-wheels",
  "/civil-",
  "/installation-",
  "/general-site-maintenance",
  "/site-",
  "/guy-tower-rod-inspections",
  "/disaster-recovery",
  "/engineering-drawings",
  "/craning-logistics",
  "/data-center-mec",
  "/staging-services",
  "/recycle-upgrade",
  "/other-isp-services",
];

export default function sitemap({ id: rawId }: { id: string }): MetadataRoute.Sitemap {
  // Normalize — the runtime id can arrive with the .xml suffix attached.
  const id = String(rawId).replace(/\.xml$/, "") as (typeof SEGMENTS)[number];
  const base = siteConfig.url.replace(/\/$/, "");
  const entry = (
    path: string,
    opts: Partial<Pick<MetadataRoute.Sitemap[number], "changeFrequency" | "priority" | "lastModified">> = {}
  ) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    ...opts,
  });

  const isService = (p: string) => SERVICE_PREFIXES.some((pre) => p.startsWith(pre));

  switch (id) {
    case "core":
      return pageRoutes
        .filter((p) => !isService(p))
        .map((p) => entry(p, p === "/" ? { changeFrequency: "weekly", priority: 1 } : {}));
    case "services":
      return pageRoutes.filter(isService).map((p) => entry(p));
    case "locations": {
      const cities = getPublishedLocations();
      const hubs = getPublishedStateHubs();
      return [
        entry(LOCATIONS_INDEX_HREF, { changeFrequency: "weekly", priority: 0.8 }),
        ...hubs.map((h) =>
          entry(stateHref(h.identity.slug), {
            lastModified: h._verifiedOn ? new Date(h._verifiedOn) : undefined,
          })
        ),
        ...cities.map((l) =>
          entry(cityHref(l.identity.stateSlug, l.identity.slug), {
            lastModified: l._verifiedOn ? new Date(l._verifiedOn) : undefined,
          })
        ),
      ];
    }
    case "resources":
      return blogRoutes.map((p) => entry(p, { changeFrequency: "weekly" }));
    default:
      // Unknown id — return the core set rather than crashing the export.
      return pageRoutes.map((p) => entry(p));
  }
}
