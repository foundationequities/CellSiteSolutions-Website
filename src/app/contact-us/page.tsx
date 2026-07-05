import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
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
      <PageHero
        eyebrow="Contact Us"
        title="We're Here to Help"
        lede="Whether you're looking for equipment, installation, logistics, decommissioning, or just some friendly advice on the proper hardware to use for your next shelter tie down, the friendly and knowledgeable staff at CellSite Solutions is here."
      />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.3fr] lg:px-8">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-brand">Office Hours</h2>
              <p className="mt-2 text-ink">{officeHours.days}</p>
              <p className="text-muted">{officeHours.hours}</p>
            </div>
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-brand">Address</h2>
              <address className="mt-2 not-italic leading-relaxed text-ink">
                {siteConfig.name}
                <br />
                {address.line}
              </address>
            </div>
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-brand">Say Hello</h2>
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
