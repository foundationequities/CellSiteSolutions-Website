import { Metadata } from "next";
import {
  PageHero,
  Section,
  Prose,
  FeatureGrid,
  CheckList,
  CTABand,
  SectionHeading,
} from "@/components/sections";
import { YouTubeEmbed } from "@/components/youtube-embed";
import { siteConfig } from "@/lib/site-config";

export type ContentPageData = {
  slug: string;
  eyebrow?: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  subtitle?: string;
  breadcrumb?: { title: string; href: string }[];
  blocks: { heading?: string; paragraphs: string[] }[];
  features?: { heading?: string; items: { title: string; description: string }[] };
  checklist?: { heading?: string; items: string[] };
  video?: { id: string; title: string };
  cta?: { title?: string; subtitle?: string };
};

export function buildMetadata(data: ContentPageData): Metadata {
  return {
    title: data.seoTitle,
    description: data.metaDescription,
    alternates: { canonical: data.slug },
    openGraph: {
      title: data.seoTitle,
      description: data.metaDescription,
      url: `${siteConfig.url}${data.slug}`,
    },
  };
}

export function ContentPage({ data }: { data: ContentPageData }) {
  return (
    <>
      <PageHero
        eyebrow={data.eyebrow}
        title={data.h1}
        subtitle={data.subtitle}
        breadcrumb={data.breadcrumb}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          <div>
            <Prose blocks={data.blocks} />
          </div>
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            {data.video && (
              <YouTubeEmbed id={data.video.id} title={data.video.title} />
            )}
            <div className="rounded-xl border border-border bg-secondary p-6">
              <h3 className="text-lg font-bold text-brand-dark">
                Talk to a specialist
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Questions about this service or product? Our team serves customers
                nationwide from Cedar Rapids, Iowa.
              </p>
              <a
                href={siteConfig.contact.phoneHref}
                className="mt-4 block text-lg font-bold text-brand"
              >
                {siteConfig.contact.phone}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-sm text-muted-foreground hover:text-brand"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </aside>
        </div>
      </Section>

      {data.checklist && (
        <Section muted>
          {data.checklist.heading && (
            <div className="mb-8">
              <SectionHeading title={data.checklist.heading} />
            </div>
          )}
          <CheckList items={data.checklist.items} columns={3} />
        </Section>
      )}

      {data.features && (
        <Section muted={!data.checklist}>
          {data.features.heading && (
            <div className="mb-8">
              <SectionHeading title={data.features.heading} />
            </div>
          )}
          <FeatureGrid items={data.features.items} columns={3} />
        </Section>
      )}

      <CTABand title={data.cta?.title} subtitle={data.cta?.subtitle} />
    </>
  );
}
