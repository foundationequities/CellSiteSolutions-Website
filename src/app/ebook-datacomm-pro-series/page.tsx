import type { Metadata } from "next";
import { EbookLanding } from "@/components/ebook-landing";
import { EBOOKS } from "@/lib/ebooks";

const ebook = EBOOKS["datacomm-pro-series"];

export const metadata: Metadata = {
  title: ebook.title,
  description: ebook.blurb,
  alternates: { canonical: "/ebook-datacomm-pro-series" },
};

export default function Page() {
  return (
    <EbookLanding
      ebook={ebook}
      highlights={[
        "How the Datacomm Pro Series compares to concrete — up to 45% savings",
        "Construction details: framing, cladding, roof, and siding",
        "Standard sizes, rack capacity, and footprint options",
        "Wind, snow, and seismic performance ratings",
        "ULTRA Series and Enhanced Ballistics upgrade options",
        "Warranty coverage across structure, roof, and floor",
      ]}
    />
  );
}
