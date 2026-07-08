import Link from "next/link";
import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with CellSite Solutions for telecom shelters, installation, logistics, decommissioning, and expert advice. We're here to help.",
};

export default function ContactPage() {
  const { address, phone, tollFree, salesEmail, officeHours } = siteConfig.contact;

  return (
    <>
      {/* Hero (inline: live H1 breaks across two lines) */}
      <section className="relative overflow-hidden bg-surface-dark text-white">
        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-36">
          <nav className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/60">
            <Link href="/" className="hover:text-brand">
              Home
            </Link>{" "}
            <span className="mx-1">/</span> Contact Us
          </nav>
          <h1 className="max-w-4xl text-[34px] leading-tight sm:text-[45px]">
            We&rsquo;re Here
            <br />
            to Help
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
            Whether you&rsquo;re looking for equipment, installation, logistics, decommissioning, or
            just some friendly advice on the proper hardware to use for your next shelter tie down,
            the friendly and knowledgeable staff at CellSite Solutions is here.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.3fr] lg:px-8">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h4 className="text-2xl text-ink">OFFICE HOURS</h4>
              <p className="mt-2 text-ink">{officeHours.days}</p>
              <p className="text-muted">{officeHours.hours}</p>
            </div>
            <div>
              <h4 className="text-2xl text-ink">Address</h4>
              <address className="mt-2 not-italic leading-relaxed text-ink">
                {siteConfig.name}
                <br />
                {address.line}
              </address>
            </div>
            <div>
              <h4 className="text-2xl text-ink">Say Hello</h4>
              <ul className="mt-2 space-y-1 text-ink">
                <li>
                  <a href={`mailto:${salesEmail}`} className="hover:text-brand">
                    {salesEmail}
                  </a>
                </li>
                <li>
                  <a href={`tel:${phone.replace(/[^0-9]/g, "")}`} className="hover:text-brand">
                    {phone}
                  </a>
                </li>
                <li>{tollFree}</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-lg border border-border bg-[#f9f9f9] p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
