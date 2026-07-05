"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "ok" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error((await res.json().catch(() => ({})))?.error || "Send failed");
      setStatus("ok");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-lg border border-border bg-white p-8 text-center">
        <p className="text-lg font-bold text-ink">Thank you!</p>
        <p className="mt-2 text-muted">Your message has been sent. We&apos;ll be in touch shortly.</p>
      </div>
    );
  }

  const field =
    "w-full rounded-md border border-border bg-white px-4 py-3 text-sm text-ink outline-none focus:border-brand";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="firstName" required placeholder="First Name *" className={field} />
        <input name="lastName" placeholder="Last Name" className={field} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="email" type="email" required placeholder="Email *" className={field} />
        <input name="phone" placeholder="Phone" className={field} />
      </div>
      <input name="company" placeholder="Company Name" className={field} />
      <textarea name="message" required rows={5} placeholder="Message *" className={field} />
      {status === "error" && <p className="text-sm text-brand">{error}</p>}
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-md bg-brand px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
