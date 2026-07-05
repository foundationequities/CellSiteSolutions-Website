import { PageHero, Section } from "@/components/sections";
import { EbookForm } from "@/components/ebook-form";
import { CheckList } from "@/components/sections";
import type { Ebook } from "@/lib/ebooks";

export function EbookLanding({
  ebook,
  highlights,
}: {
  ebook: Ebook;
  highlights: string[];
}) {
  return (
    <>
      <PageHero
        eyebrow="Free Guide"
        title={ebook.title}
        subtitle={ebook.blurb}
        breadcrumb={[{ title: "Guides", href: "/blog" }]}
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-brand-dark">What&apos;s inside</h2>
            <p className="mt-3 text-muted-foreground">
              Get practical, no-nonsense guidance from the team that builds and
              remanufactures telecom shelters every day.
            </p>
            <div className="mt-8">
              <CheckList columns={1} items={highlights} />
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-secondary p-8">
            <h2 className="text-xl font-bold text-brand-dark">
              Get your free copy
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Enter your details and we&apos;ll email you the download link right away.
            </p>
            <div className="mt-6">
              <EbookForm ebookKey={ebook.key} />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
