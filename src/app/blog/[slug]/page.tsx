import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/sections";
import { CTABand } from "@/components/sections";
import { getPost, getPostSlugs, formatDate } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${slug}`,
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    description: post.excerpt,
    author: { "@type": "Organization", name: post.author ?? siteConfig.legalName },
    publisher: { "@type": "Organization", name: siteConfig.legalName },
    mainEntityOfPage: `${siteConfig.url}/blog/${slug}`,
  };

  return (
    <>
      <article className="py-14 md:py-20">
        <div className="container max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> Back to blog
          </Link>
          <div className="mt-6">
            {post.category && (
              <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand">
                {post.category}
              </span>
            )}
            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-brand-dark md:text-4xl">
              {post.title}
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              {formatDate(post.date)}
              {post.author ? ` · ${post.author}` : ""}
            </p>
          </div>

          <div
            className="prose-content mt-10"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </article>

      <CTABand />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
