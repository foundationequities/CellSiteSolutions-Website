"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mainNav } from "@/lib/nav";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="grid h-10 w-10 place-items-center rounded-md hover:bg-secondary"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {open && (
        <div className="fixed inset-x-0 top-16 z-50 max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border bg-white shadow-lg">
          <nav aria-label="Mobile" className="container flex flex-col gap-1 py-4">
            {mainNav.map((item) =>
              item.children ? (
                <div key={item.title} className="border-b border-border/60 pb-1">
                  <button
                    className="flex w-full items-center justify-between px-1 py-3 text-left text-base font-semibold"
                    onClick={() =>
                      setExpanded((e) => (e === item.title ? null : item.title))
                    }
                    aria-expanded={expanded === item.title}
                  >
                    {item.title}
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 transition-transform",
                        expanded === item.title && "rotate-180"
                      )}
                    />
                  </button>
                  {expanded === item.title && (
                    <div className="flex flex-col pb-2 pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="rounded-md px-2 py-2 text-sm text-foreground/80 hover:bg-secondary"
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.title}
                  href={item.href!}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/60 px-1 py-3 text-base font-semibold"
                >
                  {item.title}
                </Link>
              )
            )}
            <Button asChild variant="accent" className="mt-4">
              <Link href="/contact-us" onClick={() => setOpen(false)}>
                Request a Quote
              </Link>
            </Button>
            <a
              href={siteConfig.contact.phoneHref}
              className="mt-2 text-center text-sm font-medium text-brand"
            >
              Call {siteConfig.contact.phone}
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
