import type { MetadataRoute } from "next";
import { allRoutes } from "@/lib/nav";
import { getPostSlugs } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");

  const staticRoutes = allRoutes.map((route) => ({
    url: `${base}${route === "/" ? "" : route}`,
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));

  const ebookRoutes = ["/ebook-datacomm-pro-series", "/ebook-telecom-construction"].map(
    (route) => ({
      url: `${base}${route}`,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })
  );

  const blogRoutes = getPostSlugs().map((slug) => ({
    url: `${base}/blog/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...ebookRoutes, ...blogRoutes];
}
