import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().optional(),
  email: z.string().email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(1),
  website: z.string().max(0).optional(), // honeypot
});

export async function POST(req: Request) {
  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }
  if (parsed.data.website) {
    return NextResponse.json({ ok: true }); // honeypot tripped
  }

  const { firstName, lastName, email, company, phone, message } = parsed.data;
  const name = [firstName, lastName].filter(Boolean).join(" ");

  if (!process.env.RESEND_API_KEY) {
    // Allow the form to work in previews without email configured.
    console.warn("RESEND_API_KEY not set — contact submission not emailed:", { name, email });
    return NextResponse.json({ ok: true });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: `CellSite Website <${process.env.CONTACT_FROM_EMAIL}>`,
    to: [process.env.CONTACT_TO_EMAIL!],
    replyTo: email,
    subject: `New quote request from ${name}${company ? ` (${company})` : ""}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      phone ? `Phone: ${phone}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) return NextResponse.json({ error: "Send failed" }, { status: 502 });
  return NextResponse.json({ ok: true });
}
