"use client";

import { useState } from "react";
import type { Location } from "../../../data/_schema";

type Status = "idle" | "loading" | "ok" | "error";

const inputCls =
  "w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-brand";

/**
 * Location conversion form (TASKS 3.8): pre-fills the market, carries a hidden
 * source field for attribution, and posts to the existing contact API. Routing
 * to the correct regional inbox happens server-side once the regional inboxes
 * are configured with the rest of the email wiring (final stage).
 */
export default function LocationForm({ location: l }: { location: Location }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;
    const payload = {
      name: data.name,
      email: data.email,
      company: data.company || undefined,
      phone: data.phone || undefined,
      website: data.website || undefined, // honeypot
      message: `[${data.source}] Site walk request — ${data.market}\n\n${data.message}`,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error((await res.json().catch(() => ({})))?.error || "Send failed");
      setStatus("ok");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <section id="location-form" className="bg-white py-14">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Get Started</p>
        <h2 className="mt-1 text-[26px] leading-tight text-ink sm:text-[36px]">
          Request a Site Walk in {l.identity.city}
        </h2>
        {status === "ok" ? (
          <div className="mt-6 rounded-lg border border-border bg-white p-8 text-center">
            <p className="text-lg font-bold text-ink">Thank you!</p>
            <p className="mt-2 text-muted">
              Your request has been sent. Our {l.operations.nearestBase.city} team will be in touch shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
            {/* attribution + market pre-fill */}
            <input type="hidden" name="market" value={`${l.identity.city}, ${l.identity.stateAbbr}`} />
            <input
              type="hidden"
              name="source"
              value={`location-page:${l.identity.stateSlug}/${l.identity.slug}`}
            />
            {/* honeypot — real users leave this empty */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

            <div>
              <label htmlFor="lf-name" className="mb-1 block text-sm font-semibold text-ink">Name *</label>
              <input id="lf-name" name="name" required className={inputCls} />
            </div>
            <div>
              <label htmlFor="lf-company" className="mb-1 block text-sm font-semibold text-ink">Company</label>
              <input id="lf-company" name="company" className={inputCls} />
            </div>
            <div>
              <label htmlFor="lf-email" className="mb-1 block text-sm font-semibold text-ink">Email *</label>
              <input id="lf-email" type="email" name="email" required className={inputCls} />
            </div>
            <div>
              <label htmlFor="lf-phone" className="mb-1 block text-sm font-semibold text-ink">Phone</label>
              <input id="lf-phone" type="tel" name="phone" className={inputCls} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="lf-message" className="mb-1 block text-sm font-semibold text-ink">
                Project details *
              </label>
              <textarea id="lf-message" name="message" rows={5} required className={inputCls} />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={status === "loading"}
                className="rounded-md bg-brand px-7 py-3 font-display text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-dark disabled:opacity-60"
              >
                {status === "loading" ? "Sending…" : "Request Site Walk"}
              </button>
              {status === "error" && <p className="mt-2 text-sm text-brand">{error}</p>}
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
