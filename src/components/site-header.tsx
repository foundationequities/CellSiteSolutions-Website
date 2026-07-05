import Link from "next/link";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/mobile-nav";
import { mainNav } from "@/lib/nav";
import { siteConfig } from "@/lib/site-config";
import { Phone, ChevronDown } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      {/* Utility bar */}
      <div className="hidden bg-brand-dark text-white md:block">
        <div className="container flex h-9 items-center justify-between text-xs">
          <span className="text-white/80">
            Remanufactured telecom shelters &amp; turnkey site services — shipped nationwide.
          </span>
          <a
            href={siteConfig.contact.phoneHref}
            className="inline-flex items-center gap-1.5 font-medium hover:text-accent"
          >
            <Phone className="h-3.5 w-3.5" />
            {siteConfig.contact.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Main" className="hidden lg:flex lg:items-center lg:gap-1">
          {mainNav.map((item) =>
            item.children ? (
              <div key={item.title} className="group relative">
                <button className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground">
                  {item.title}
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-0 top-full z-50 w-72 translate-y-1 pt-2 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="rounded-lg border border-border bg-white p-2 shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-md px-3 py-2 hover:bg-secondary"
                      >
                        <span className="block text-sm font-semibold text-foreground">
                          {child.title}
                        </span>
                        {child.description && (
                          <span className="mt-0.5 block text-xs text-muted-foreground">
                            {child.description}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.title}
                href={item.href!}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
              >
                {item.title}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="accent" size="sm" className="hidden sm:inline-flex">
            <Link href="/contact-us">Request a Quote</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
