"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export type Faq = { q: string; a: string };

/** Accessible FAQ accordion. Also emits FAQPage JSON-LD when `withSchema`. */
export function FaqAccordion({ items, withSchema = false }: { items: Faq[]; withSchema?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border rounded-lg border border-border bg-white">
      {withSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: items.map((it) => ({
                "@type": "Question",
                name: it.q,
                acceptedAnswer: { "@type": "Answer", text: it.a },
              })),
            }),
          }}
        />
      )}
      {items.map((it, i) => (
        <div key={i}>
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
          >
            <span className="text-base font-semibold text-ink">{it.q}</span>
            <svg
              width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5"
              className={cn("shrink-0 text-brand transition-transform", open === i && "rotate-180")}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          {open === i && <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{it.a}</p>}
        </div>
      ))}
    </div>
  );
}
