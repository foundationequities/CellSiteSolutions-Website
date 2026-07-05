import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  ebook: z.string().min(1),
  website: z.string().max(0).optional(), // honeypot
});

/** Map ebook keys → { title, url }. Drop the PDFs in public/downloads or Vercel Blob. */
const EBOOKS: Record<string, { title: string; url: string }> = {
  "telecom-construction": {
    title: "The Complete Guide to Telecom Construction",
    url: "/downloads/telecom-construction.pdf",
  },
  "energy-efficiency": {
    title: "Energy Efficiency in Telecom Shelters",
    url: "/downloads/energy-efficiency.pdf",
  },
  "datacomm-pro-series": {
    title: "The Complete Guide to the Datacomm Pro Series",
    url: "/downloads/datacomm-pro-series.pdf",
  },
};

export async function POST(req: Request) {
  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Invalid" }, { status: 400 });
  if (parsed.data.website) return NextResponse.json({ ok: true });

  const item = EBOOKS[parsed.data.ebook];
  if (!item) return NextResponse.json({ error: "Unknown ebook" }, { status: 404 });

  const { name, email } = parsed.data;

  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not set — ebook lead not emailed:", { name, email, ebook: item.title });
    return NextResponse.json({ ok: true });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "";

  await resend.emails.send({
    from: `CellSite Solutions <${process.env.EBOOK_FROM_EMAIL}>`,
    to: [email],
    subject: `Your download: ${item.title}`,
    text: `Hi ${name},\n\nHere's your download: ${base}${item.url}\n\n— CellSite Solutions`,
  });
  await resend.emails.send({
    from: `CellSite Website <${process.env.CONTACT_FROM_EMAIL}>`,
    to: [process.env.CONTACT_TO_EMAIL!],
    subject: `Ebook lead: ${item.title}`,
    text: `${name} <${email}> requested "${item.title}".`,
  });

  return NextResponse.json({ ok: true });
}
