import type { Location } from "../../../data/_schema";

/** Sources & last verified (CONTENT_MODULES §N) — visible, dated, linked. */
export default function SourcesFooter({ location: l }: { location: Location }) {
  return (
    <section id="sources" className="border-t border-border bg-[#f6f6f6] py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-sm font-medium uppercase tracking-wide text-ink">Sources</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm text-muted">
          {l.sources.map((s) => (
            <li key={s.url}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-border underline-offset-2 hover:text-brand"
              >
                {s.label}
              </a>{" "}
              — accessed {s.accessedDate}
            </li>
          ))}
        </ol>
        {l._verifiedOn && (
          <p className="mt-4 text-xs text-muted">
            Page data last verified {l._verifiedOn}
            {l._verifiedBy ? ` by ${l._verifiedBy}` : ""}. Engineering values are typical for the
            area; site-specific investigation and design govern.
          </p>
        )}
      </div>
    </section>
  );
}
