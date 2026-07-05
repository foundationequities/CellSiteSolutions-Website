import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/sections";
import { getAllPosts, formatDate } from "@/lib/blog";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "News, guides, and case studies from CellSite Solutions on telecom shelters, site services, and infrastructure best practices.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Blog & Insights"
        subtitle="News, guides, and case studies from the CellSite Solutions team."
        breadcrumb={[{ title: "Blog", href: "/blog" }]}
      />

      <Section>
        {posts.length === 0 ? (
          <p className="text-muted-foreground">Posts are on the way — check back soon.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                {post.category && (
                  <span className="w-fit rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand">
                    {post.category}
                  </span>
                )}
                <h2 className="mt-4 text-lg font-bold text-brand-dark">
                  <Link href={`/blog/${post.slug}`} className="hover:text-brand">
                    {post.title}
                  </Link>
                </h2>
                <time className="mt-1 text-xs text-muted-foreground">
                  {formatDate(post.date)}
                </time>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand"
                >
                  Read more <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
