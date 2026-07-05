import Link from "next/link";
import { Facebook, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/logo";
import { siteConfig } from "@/lib/site-config";
import { mainNav } from "@/lib/nav";

const products = mainNav.find((n) => n.title === "Products")?.children ?? [];
const services = mainNav.find((n) => n.title === "Services")?.children ?? [];
const company = mainNav.find((n) => n.title === "Company")?.children ?? [];

export function SiteFooter() {
  const { address } = siteConfig.contact;
  return (
    <footer className="mt-auto bg-brand-dark text-white/80">
      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo onDark />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex gap-3">
            <SocialIcon href={siteConfig.social.facebook} label="Facebook">
              <Facebook className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon href={siteConfig.social.linkedin} label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon href={siteConfig.social.youtube} label="YouTube">
              <Youtube className="h-5 w-5" />
            </SocialIcon>
          </div>
        </div>

        <FooterCol title="Products" links={products} />
        <FooterCol title="Services" links={services} />

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Company
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {company.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-accent">
                  {l.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/blog" className="hover:text-accent">Blog</Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-accent">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-4 py-6 text-sm md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
            <a href={siteConfig.contact.phoneHref} className="inline-flex items-center gap-2 hover:text-accent">
              <Phone className="h-4 w-4" /> {siteConfig.contact.phone}
            </a>
            <a href={`mailto:${siteConfig.contact.email}`} className="inline-flex items-center gap-2 hover:text-accent">
              <Mail className="h-4 w-4" /> {siteConfig.contact.email}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> {address.street}, {address.city}, {address.state} {address.zip}
            </span>
          </div>
          <p className="text-white/50">
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { title: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
        {title}
      </h3>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="hover:text-accent">
              {l.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-md bg-white/10 transition-colors hover:bg-accent hover:text-accent-foreground"
    >
      {children}
    </a>
  );
}
