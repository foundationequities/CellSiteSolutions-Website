import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

/* ── Page hero for interior pages ─────────────────────────────────────────── */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumb?: { title: string; href: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-brand-dark text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-20 [background-image:linear-gradient(hsl(var(--brand-light))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--brand-light))_1px,transparent_1px)] [background-size:44px_44px]"
      />
      <div className="container relative py-16 md:py-20">
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/60">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li><Link href="/" className="hover:text-accent">Home</Link></li>
              {breadcrumb.map((b) => (
                <li key={b.href} className="flex items-center gap-1.5">
                  <span aria-hidden>/</span>
                  <Link href={b.href} className="hover:text-accent">{b.title}</Link>
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-3xl font-extrabold leading-tight md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg text-white/75">{subtitle}</p>
        )}
      </div>
    </section>
  );
}

/* ── Generic section wrapper ──────────────────────────────────────────────── */
export function Section({
  children,
  className,
  muted = false,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  muted?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={cn(muted && "bg-secondary", "py-16 md:py-20")}>
      <div className={cn("container", className)}>{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-brand">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold text-brand-dark md:text-3xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

/* ── Prose block: heading + paragraphs ────────────────────────────────────── */
export function Prose({
  blocks,
}: {
  blocks: { heading?: string; paragraphs: string[] }[];
}) {
  return (
    <div className="space-y-10">
      {blocks.map((b, i) => (
        <div key={i}>
          {b.heading && (
            <h2 className="mb-3 text-xl font-bold text-brand-dark md:text-2xl">
              {b.heading}
            </h2>
          )}
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            {b.paragraphs.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Feature / capability grid ────────────────────────────────────────────── */
export function FeatureGrid({
  items,
  columns = 3,
}: {
  items: { title: string; description: string }[];
  columns?: 2 | 3 | 4;
}) {
  return (
    <div
      className={cn(
        "grid gap-6",
        columns === 2 && "sm:grid-cols-2",
        columns === 3 && "sm:grid-cols-2 lg:grid-cols-3",
        columns === 4 && "sm:grid-cols-2 lg:grid-cols-4"
      )}
    >
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <h3 className="text-base font-semibold text-brand-dark">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ── Checklist ────────────────────────────────────────────────────────────── */
export function CheckList({
  items,
  columns = 2,
}: {
  items: string[];
  columns?: 1 | 2 | 3;
}) {
  return (
    <ul
      className={cn(
        "grid gap-x-8 gap-y-3",
        columns === 2 && "sm:grid-cols-2",
        columns === 3 && "sm:grid-cols-2 lg:grid-cols-3"
      )}
    >
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
            <Check className="h-3.5 w-3.5" />
          </span>
          <span className="text-sm text-foreground/90">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ── Stat band ────────────────────────────────────────────────────────────── */
export function StatBand({
  stats,
}: {
  stats: { value: string; label: string }[];
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <div className="text-3xl font-extrabold text-accent md:text-4xl">
            {s.value}
          </div>
          <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

/* ── Call-to-action band ──────────────────────────────────────────────────── */
export function CTABand({
  title = "Ready to build your site the right way?",
  subtitle = "Tell us about your project and our team will follow up with a solution built for quality, safety, and value.",
  primary = { label: "Request a Quote", href: "/contact-us" },
  secondary,
}: {
  title?: string;
  subtitle?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="bg-brand">
      <div className="container flex flex-col items-start gap-6 py-12 md:flex-row md:items-center md:justify-between md:py-14">
        <div className="max-w-2xl text-white">
          <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
          <p className="mt-2 text-white/80">{subtitle}</p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <Button asChild variant="accent" size="lg">
            <Link href={primary.href}>{primary.label}</Link>
          </Button>
          {secondary && (
            <Button asChild variant="white" size="lg">
              <Link href={secondary.href}>{secondary.label}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
