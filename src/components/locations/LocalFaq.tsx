import type { Location } from "../../../data/_schema";
import { Module } from "./section";
import { FaqAccordion } from "@/components/faq-accordion";

/**
 * Expanded local FAQ (CONTENT_MODULES §L). FAQPage JSON-LD is emitted once by
 * the page's locationJsonLd graph, so the accordion renders without schema.
 */
export default function LocalFaq({ location: l }: { location: Location }) {
  return (
    <Module id="faq" eyebrow="FAQ" title={`${l.identity.city} Telecom Civil Questions`}>
      <FaqAccordion items={l.faq.map((f) => ({ q: f.question, a: f.answer }))} />
    </Module>
  );
}
