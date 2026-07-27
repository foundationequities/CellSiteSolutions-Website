import Image from "next/image";
import type { Location } from "../../../data/_schema";
import { Module } from "./section";

/**
 * Local project proof (CONTENT_MODULES Part 1 §6). Entries come exclusively
 * from the real project intake — never invented (hard rule 5). Renders only
 * when projects exist.
 */
export default function ProjectProof({ location: l }: { location: Location }) {
  if (l.projects.length === 0) return null;

  return (
    <Module id="projects" eyebrow="Proof" title={`Recent Work Near ${l.identity.city}`}>
      <div className="grid gap-6 md:grid-cols-2">
        {l.projects.map((p) => (
          <article key={p.title} className="overflow-hidden rounded-lg border border-border">
            {p.photos[0] && (
              <div className="relative aspect-[16/9]">
                <Image
                  src={p.photos[0].src}
                  alt={p.photos[0].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">
                {p.segment} · {p.county} County · {p.year}
              </p>
              <h3 className="mt-1 font-display text-lg font-medium text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {p.scopeTags.map((t) => (
                  <li key={t} className="rounded-full bg-ink/5 px-2.5 py-1 text-xs text-ink">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Module>
  );
}
