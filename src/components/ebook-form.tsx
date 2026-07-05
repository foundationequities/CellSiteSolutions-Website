"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export function EbookForm({ ebookKey }: { ebookKey: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/ebook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, ebook: ebookKey }),
      });
      if (!res.ok) throw new Error((await res.json().catch(() => ({})))?.error ?? "Send failed");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-border bg-card p-6 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-brand" />
        <h3 className="mt-3 text-lg font-bold text-brand-dark">Check your inbox</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          We&apos;ve emailed you the download link. It may take a minute to arrive.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="hidden" aria-hidden>
        <label htmlFor="website-eb">Website</label>
        <input id="website-eb" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="eb-name">Name <span className="text-accent">*</span></Label>
        <Input id="eb-name" name="name" required autoComplete="name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="eb-email">Work email <span className="text-accent">*</span></Label>
        <Input id="eb-email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="eb-company">Company</Label>
        <Input id="eb-company" name="company" autoComplete="organization" />
      </div>
      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-destructive">
          <AlertCircle className="h-4 w-4" /> {error || "Couldn't send. Please try again."}
        </p>
      )}
      <Button type="submit" variant="accent" className="w-full" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Email me the guide"}
      </Button>
    </form>
  );
}
