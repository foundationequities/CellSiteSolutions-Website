/**
 * Ebook catalog. Map each key → title + file URL.
 * Small PDFs live in /public/downloads. Large PDFs → Vercel Blob; store the
 * Blob URL here instead. Drop the actual PDFs in before enabling downloads.
 */
export type Ebook = {
  key: string;
  title: string;
  blurb: string;
  url: string; // public path or absolute Blob URL
};

export const EBOOKS: Record<string, Ebook> = {
  "datacomm-pro-series": {
    key: "datacomm-pro-series",
    title: "Complete Guide: Datacomm Pro Series",
    blurb:
      "An in-depth look at our next-generation lightweight shelter — durability, rapid deployment, and up to 45% savings versus concrete.",
    url: "/downloads/datacomm-pro-series-guide.pdf",
  },
  "telecom-shelter-construction": {
    key: "telecom-shelter-construction",
    title: "The Complete Guide to Telecom Shelter Construction",
    blurb:
      "A step-by-step overview of how telecom shelter sites are planned, built, and commissioned.",
    url: "/downloads/telecom-shelter-construction-guide.pdf",
  },
};

export const ebookList = Object.values(EBOOKS);
