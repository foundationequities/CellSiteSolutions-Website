import type { Metadata } from "next";
import { EbookLanding } from "@/components/ebook-landing";
import { EBOOKS } from "@/lib/ebooks";

const ebook = EBOOKS["telecom-shelter-construction"];

export const metadata: Metadata = {
  title: ebook.title,
  description: ebook.blurb,
  alternates: { canonical: "/ebook-telecom-construction" },
};

export default function Page() {
  return (
    <EbookLanding
      ebook={ebook}
      highlights={[
        "How a telecom shelter site is planned and designed",
        "Foundations, grounding, and civil construction basics",
        "Shelter selection: sizes, materials, and configurations",
        "Power, HVAC, and alarm considerations",
        "Installation and commissioning step by step",
        "What to expect on timeline and budget",
      ]}
    />
  );
}
