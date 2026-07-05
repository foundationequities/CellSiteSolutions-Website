import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Text-based wordmark used until the official logo asset is dropped into
 * /public. Swap this for <Image src="/images/logo.svg" .../> when available.
 */
export function Logo({
  className,
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="CellSite Solutions — home"
      className={cn("inline-flex items-center gap-2", className)}
    >
      <span
        aria-hidden
        className="grid h-9 w-9 place-items-center rounded-md bg-accent text-accent-foreground"
      >
        {/* signal-tower mark */}
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v18" />
          <path d="M7 8a7 7 0 0 1 10 0" />
          <path d="M4.5 5a11 11 0 0 1 15 0" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-lg font-extrabold tracking-tight",
            onDark ? "text-white" : "text-brand-dark"
          )}
        >
          CellSite <span className="text-accent">Solutions</span>
        </span>
        <span
          className={cn(
            "text-[10px] font-medium uppercase tracking-[0.18em]",
            onDark ? "text-white/60" : "text-muted-foreground"
          )}
        >
          Telecom Infrastructure
        </span>
      </span>
    </Link>
  );
}
