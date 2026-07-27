import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

/**
 * DRAFT MODE: while NEXT_PUBLIC_DRAFT=1 is set (e.g. on the Vercel preview
 * deployment before go-live), robots.txt disallows everything so the draft
 * site is never indexed alongside the live WordPress site. Remove the env var
 * at cutover and this reverts to allow-all + sitemap automatically.
 */
export default function robots(): MetadataRoute.Robots {
  if (process.env.NEXT_PUBLIC_DRAFT === "1") {
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
