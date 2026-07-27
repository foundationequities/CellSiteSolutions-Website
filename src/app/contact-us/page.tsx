import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with CellSite Solutions for telecom shelters, installation, logistics, decommissioning, and expert advice. We're here to help.",
};

const iconProps = {
  className: "h-5 w-5 shrink-0 text-brand",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
  "aria-hidden": true,
} as const;

function ClockIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg {...iconProps}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg {...iconProps}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg {...iconProps}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function ContactPage() {
  const { address, phone, tollFree, salesEmail, officeHours } = siteConfig.contact;

  return (
    <section className="bg-white pb-20 pt-32 lg:pt-40">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left: heading + info */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Contact Us</p>
          <h1 className="mt-2 uppercase leading-[1.05] text-[35px] text-ink lg:text-[65px]">
            We&rsquo;re Here to Help
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            Whether you&rsquo;re looking for equipment, installation, logistics, decommissioning, or
            just some friendly advice on the proper hardware to use for your next shelter tie down,
            the friendly and knowledgeable staff at CellSite Solutions is here.
          </p>

          <h4 className="mt-10 text-2xl text-ink">OFFICE HOURS</h4>
          <ul className="mt-4 space-y-4 text-ink">
            <li className="flex items-center gap-3">
              <ClockIcon />
              <span>
                {officeHours.days}, {officeHours.hours}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <MapPinIcon />
              <span>{address.line}</span>
            </li>
            <li className="flex items-center gap-3">
              <MailIcon />
              <a href={`mailto:${salesEmail}`} className="hover:text-brand">
                {salesEmail}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <PhoneIcon />
              <a href={`tel:${phone.replace(/[^0-9]/g, "")}`} className="hover:text-brand">
                {phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <PhoneIcon />
              <span>{tollFree}</span>
            </li>
          </ul>
        </div>

        {/* Right: form directly on white */}
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
