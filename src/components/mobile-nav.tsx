"use client";

import { useState } from "react";
import Link from "next/link";
import { mainNav } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10"
      >
        <span className="sr-only">Menu</span>
        <div className="relative h-5 w-6">
          <span
            className={cn(
              "absolute left-0 block h-0.5 w-6 bg-current transition-all duration-300",
              open ? "top-2 rotate-45" : "top-0",
            )}
          />
          <span
            className={cn(
              "absolute left-0 top-2 block h-0.5 w-6 bg-current transition-all duration-300",
              open ? "opacity-0" : "opacity-100",
            )}
          />
          <span
            className={cn(
              "absolute left-0 block h-0.5 w-6 bg-current transition-all duration-300",
              open ? "top-2 -rotate-45" : "top-4",
            )}
          />
        </div>
      </button>

      {/* Slide-over panel */}
      <div
        className={cn(
          "fixed inset-0 z-50 transition-opacity duration-300",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setOpen(false)}
          aria-hidden
        />
        <nav
          className={cn(
            "absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-surface-dark px-6 py-6 text-white shadow-xl transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full",
          )}
          aria-label="Mobile"
        >
          <div className="mb-6 flex justify-end">
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md text-white hover:bg-white/10"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
          <ul className="space-y-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-semibold uppercase tracking-wide hover:text-brand"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mb-2 ml-3 border-l border-white/15 pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block rounded-md px-3 py-1.5 text-sm text-white/80 hover:text-brand"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Link
            href="/contact-us/"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-md bg-brand px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
          >
            Request Quote
          </Link>
        </nav>
      </div>
    </div>
  );
}
