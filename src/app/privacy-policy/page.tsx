import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "CellSite Solutions is committed to protecting your privacy. Learn how we collect, use, disclose, and safeguard your information when you visit our website or use our products and services.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Privacy Policy" title="Privacy Policy" />

      <article className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-muted">
            Last Updated: November 19, 2025
          </p>

          <h2 className="mt-10 text-2xl font-extrabold text-ink">Introduction</h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            CellSite Solutions (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed
            to protecting your privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you visit our website, communicate with us, or use our
            products and services.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            By accessing or using our website, you agree to the terms of this Privacy Policy.
          </p>

          <h2 className="mt-10 text-2xl font-extrabold text-ink">Information We Collect</h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            We may collect personal and non&#8209;personal information in the following ways:
          </p>

          <h3 className="mt-6 text-lg font-bold text-ink">Information You Provide</h3>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-relaxed text-muted">
            <li>Contact information (name, company, job title, email address, phone number)</li>
            <li>Inquiry or quote&#8209;related details submitted through our forms</li>
            <li>Account information if you register for portals or online systems</li>
            <li>Communications sent to our team</li>
          </ul>

          <h3 className="mt-6 text-lg font-bold text-ink">Information Collected Automatically</h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            When you visit our website, we may automatically collect:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-relaxed text-muted">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device information</li>
            <li>Pages visited</li>
            <li>Referring website</li>
            <li>Time spent on pages</li>
            <li>Cookies and tracking technologies (Google Analytics, LinkedIn Insight Tag, etc.)</li>
          </ul>

          <h3 className="mt-6 text-lg font-bold text-ink">Information from Third Parties</h3>
          <p className="mt-3 text-base leading-relaxed text-muted">We may receive information from:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-relaxed text-muted">
            <li>Marketing partners</li>
            <li>Advertising platforms</li>
            <li>Social networks (e.g., LinkedIn interactions)</li>
            <li>Industry directories or trade show providers</li>
          </ul>

          <h2 className="mt-10 text-2xl font-extrabold text-ink">How We Use Your Information</h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            We use collected information to:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-relaxed text-muted">
            <li>Provide and improve our products and services</li>
            <li>Respond to inquiries and quote requests</li>
            <li>Process purchases or service orders</li>
            <li>Send marketing communications</li>
            <li>Analyze website performance</li>
            <li>Enhance customer experience</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="mt-10 text-2xl font-extrabold text-ink">
            Cookies &amp; Tracking Technologies
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            We use cookies, pixels, and similar tools to:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-relaxed text-muted">
            <li>Measure website usage</li>
            <li>Improve performance</li>
            <li>Personalize content</li>
            <li>Deliver relevant advertising</li>
          </ul>

          <h2 className="mt-10 text-2xl font-extrabold text-ink">How We Share Information</h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            We may share your information with:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-relaxed text-muted">
            <li>Service providers that support our operations</li>
            <li>Marketing and analytics partners</li>
            <li>Logistics, installation, or field&#8209;service partners</li>
            <li>Legal authorities when required</li>
            <li>Affiliates or subsidiaries of CellSite Solutions</li>
          </ul>
          <p className="mt-4 text-base font-semibold leading-relaxed text-ink">
            We do NOT sell personal information.
          </p>

          <h2 className="mt-10 text-2xl font-extrabold text-ink">Data Security</h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            We use industry&#8209;standard administrative, technical, and physical safeguards to
            protect your data. However, no online transmission is 100% secure.
          </p>

          <h2 className="mt-10 text-2xl font-extrabold text-ink">Data Retention</h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            We retain information only as long as necessary for business, legal, and operational
            purposes.
          </p>

          <h2 className="mt-10 text-2xl font-extrabold text-ink">Your Privacy Rights</h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Depending on your location, you may have rights to:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-relaxed text-muted">
            <li>Access your data</li>
            <li>Request corrections</li>
            <li>Request deletion</li>
            <li>Opt out of marketing communications</li>
            <li>Request limits on data usage</li>
          </ul>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Email{" "}
            <a
              href="mailto:marketing@cellsitesolutions.com"
              className="font-semibold text-brand hover:text-brand-dark"
            >
              marketing@cellsitesolutions.com
            </a>{" "}
            to submit a request.
          </p>

          <h2 className="mt-10 text-2xl font-extrabold text-ink">Third&#8209;Party Links</h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Our website may link to external sites. We are not responsible for the privacy practices
            or content of those sites.
          </p>

          <h2 className="mt-10 text-2xl font-extrabold text-ink">Changes to This Policy</h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            We may update this Privacy Policy. Changes will be posted on this page with a revised
            &ldquo;Last Updated&rdquo; date.
          </p>

          <div className="mt-10">
            <Link
              href="/contact-us/"
              className="inline-block rounded-md bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
