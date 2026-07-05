import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { EBOOKS } from "@/lib/ebooks";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional(),
  ebook: z.string().min(1), // slug/key identifying which ebook
  website: z.string().optional(), // honeypot — silently no-op if filled
});

export async function POST(req: Request) {
  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Invalid" }, { status: 400 });
  if (parsed.data.website) return NextResponse.json({ ok: true });

  const item = EBOOKS[parsed.data.ebook];
  if (!item) return NextResponse.json({ error: "Unknown ebook" }, { status: 404 });

  const { name, email, company } = parsed.data;

  if (
    !process.env.RESEND_API_KEY ||
    !process.env.CONTACT_TO_EMAIL ||
    !process.env.CONTACT_FROM_EMAIL ||
    !process.env.EBOOK_FROM_EMAIL
  ) {
    console.error("Ebook form: missing Resend env vars.");
    return NextResponse.json({ error: "Email is not configured" }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const downloadUrl = item.url.startsWith("http")
    ? item.url
    : `${process.env.NEXT_PUBLIC_SITE_URL ?? ""}${item.url}`;

  // 1) send the ebook link to the requester
  const { error: sendErr } = await resend.emails.send({
    from: `CellSite Solutions <${process.env.EBOOK_FROM_EMAIL}>`,
    to: [email],
    subject: `Your download: ${item.title}`,
    text: `Hi ${name},\n\nThanks for your interest. Here's your download:\n${downloadUrl}\n\nQuestions? Just reply to this email.\n\n— CellSite Solutions`,
  });
  if (sendErr) {
    console.error("Resend (requester) error:", sendErr);
    return NextResponse.json({ error: "Send failed" }, { status: 502 });
  }

  // 2) notify the team of the new lead
  await resend.emails.send({
    from: `CellSite Website <${process.env.CONTACT_FROM_EMAIL}>`,
    to: [process.env.CONTACT_TO_EMAIL],
    subject: `Ebook lead: ${item.title}`,
    text: `${name}${company ? ` (${company})` : ""} <${email}> requested "${item.title}".`,
  });

  return NextResponse.json({ ok: true });
}
