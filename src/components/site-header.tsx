"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { mainNav } from "@/lib/nav";
import { siteConfig } from "@/lib/site-config";
import { MobileNav } from "@/components/mobile-nav";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const { headerWhite } = siteConfig.logos;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 text-white transition-colors duration-300",
        scrolled
          ? "border-b border-white/10 bg-surface-dark shadow-lg"
          : "bg-gradient-to-b from-black/60 to-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center" aria-label={siteConfig.name}>
          <Image
            src={headerWhite.src}
            alt={`${siteConfig.name} logo`}
            width={headerWhite.width}
            height={headerWhite.height}
            priority
            className="h-10 w-auto sm:h-11"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {mainNav.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className="inline-flex items-center gap-1 px-3 py-2 text-sm font-semibold uppercase tracking-wide text-white/90 transition-colors hover:text-brand"
              >
                {item.label}
                {item.children && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="opacity-70">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                )}
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full min-w-[16rem] translate-y-1 rounded-md border border-border/60 bg-white py-2 opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm font-medium text-ink/80 hover:bg-brand/5 hover:text-brand"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact-us/"
            className="hidden rounded-md bg-brand px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark lg:inline-block"
          >
            Request Quote
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
