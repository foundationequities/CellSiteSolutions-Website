import type { Metadata } from "next";
import { PageHero, Section } from "@/components/sections";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site-config";
import { Phone, Mail, MapPin, Clock, Printer } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact CellSite Solutions in Cedar Rapids, IA. Call (319) 826-3404, email sales@cellsitesolutions.com, or request a quote for your telecom project.",
  alternates: { canonical: "/contact-us" },
};

export default function ContactPage() {
  const { contact, legalName, url, social } = siteConfig;
  const { address } = contact;

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: legalName,
    url,
    email: contact.email,
    telephone: contact.phone,
    faxNumber: contact.fax,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.zip,
      addressCountry: address.country,
    },
    sameAs: [social.facebook, social.linkedin, social.youtube],
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact Us"
        subtitle="Whether you need a remanufactured shelter, a generator, HVAC, or full turnkey site services, our team is ready to help."
        breadcrumb={[{ title: "Contact Us", href: "/contact-us" }]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_400px]">
          <div>
            <h2 className="text-2xl font-bold text-brand-dark">Request a quote</h2>
            <p className="mt-2 text-muted-foreground">
              Tell us about your project and a member of our team will follow up
              promptly. Share the site type, shelter size, and services you need,
              and we&apos;ll put together a solution built for quality, safety, and value.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl border border-border bg-secondary p-6">
              <h2 className="text-lg font-bold text-brand-dark">Reach us</h2>
              <ul className="mt-4 space-y-4 text-sm">
                <InfoRow icon={<MapPin className="h-5 w-5" />}>
                  {address.street}<br />
                  {address.city}, {address.state} {address.zip}
                </InfoRow>
                <InfoRow icon={<Phone className="h-5 w-5" />}>
                  <a href={contact.phoneHref} className="font-semibold text-brand hover:underline">
                    {contact.phone}
                  </a>
                </InfoRow>
                {contact.fax && (
                  <InfoRow icon={<Printer className="h-5 w-5" />}>Fax: {contact.fax}</InfoRow>
                )}
                <InfoRow icon={<Mail className="h-5 w-5" />}>
                  <a href={`mailto:${contact.email}`} className="text-brand hover:underline">
                    {contact.email}
                  </a>
                </InfoRow>
                <InfoRow icon={<Clock className="h-5 w-5" />}>{contact.hours}</InfoRow>
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-brand-dark p-6 text-white">
              <h3 className="font-bold">Serving customers nationwide</h3>
              <p className="mt-2 text-sm text-white/75">
                Headquartered in Cedar Rapids, Iowa, we ship remanufactured shelters
                and deliver turnkey site services across the country.
              </p>
            </div>
          </aside>
        </div>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}

function InfoRow({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-0.5 shrink-0 text-brand">{icon}</span>
      <span className="text-foreground/90">{children}</span>
    </li>
  );
}
