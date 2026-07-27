import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { IS_LIVE } from "@/lib/site-mode";

/**
 * The deployment is a noindexed draft UNLESS NEXT_PUBLIC_LIVE=1 is set, so a
 * forgotten environment variable can never accidentally expose the rebuild to
 * search engines alongside the live WordPress site. Set NEXT_PUBLIC_LIVE=1 in
 * Vercel at domain cutover and this flips to allow-all + sitemaps.
 */
export default function robots(): MetadataRoute.Robots {
  if (!IS_LIVE) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  const base = siteConfig.url.replace(/\/$/, "");
  // Segmented sitemap index (PLAN §6.3) — one file per cluster so the
  // locations segment can be monitored independently in Search Console.
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: ["core", "services", "locations", "resources"].map(
      (id) => `${base}/sitemap/${id}.xml`
    ),
  };
}
