"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "ok" | "error";

/** Email-gated ebook request form. `ebook` is the key in the API's EBOOKS map. */
export function EbookForm({ ebook, buttonLabel = "Download eBook" }: { ebook: string; buttonLabel?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const fd = new FormData(e.currentTarget);
    const payload = { ...Object.fromEntries(fd.entries()), ebook };
    try {
      const res = await fetch("/api/ebook", {
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
      <div className="rounded-lg border border-border bg-white p-6 text-center">
        <p className="font-bold text-ink">Check your inbox!</p>
        <p className="mt-1 text-sm text-muted">We&apos;ve emailed you the download link.</p>
      </div>
    );
  }

  const field =
    "w-full rounded-md border border-border bg-white px-4 py-3 text-sm text-ink outline-none focus:border-brand";

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <input name="name" required placeholder="Name *" className={field} />
      <input name="email" type="email" required placeholder="Email *" className={field} />
      {status === "error" && <p className="text-sm text-brand">{error}</p>}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-md bg-brand px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : buttonLabel}
      </button>
    </form>
  );
}
