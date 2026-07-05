import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Referral Partner Program",
  description:
    "Partner with CellSite Solutions and earn 5% of the total sales order value for qualified referrals on telecom equipment shelters and civil construction projects.",
};

const terms = [
  {
    title: "Referral Fee",
    body: "Referrers will receive 5% of the total sales value for qualified referrals.",
  },
  {
    title: "Eligibility",
    body: "Referral leads must be new clients not currently engaged with CellSite Solutions or its sales team over the last 3 years. Referral leads are valid for a period of 12 months from the date of submission. If a shelter or civil construction project order does not occur in first 12 months the referral becomes invalid.",
  },
  {
    title: "Commission Payment",
    body: "Payments will be issued within 60 days after receipt of a payment from the referred customer on a per shelter order or civil construction project. Payment is defined as initial partial payments up to 50% of the order, and final order payments.",
  },
  {
    title: "Referral Submission Process",
    body: "All referrals must be registered via our online Netsuite partner portal. You will receive updates on the submitted leads status throughout the sales process: (a) initial confirmation that the lead is accepted per eligibility rules, (b) confirmation that a PO is received from a submitted lead, and (c) receipt of payment to you per commission payment terms after completion of order delivery.",
  },
  {
    title: "Exclusions",
    body: "Existing clients or leads from regions outside of our service area (48 continental USA) do not qualify for referral bonuses. Leads accepted only for our equipment shelter and civil construction lines of business.",
  },
];

export default function ReferralPage() {
  return (
    <>
      <PageHero eyebrow="Referral Partner Program" title="Referral Partner Program" />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed text-muted">
            Our CellSite Solutions Referral Partner Program makes it easier than ever to partner with
            us and earn rewards for providing leads on telecom equipment shelters and civil
            construction projects. Simply refer a new client lead, and once they complete their order,
            you&rsquo;ll receive 5% of the total sales order value. Whether you&rsquo;re a contractor,
            engineer, or trusted partner, this is a simple and straightforward way to earn money for
            leads that turn into sales. Your referrals help us expand our network, and you benefit
            from every successful CellSite Solutions sale.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted">
            If you are interested in participating in our referral program please email us at:{" "}
            <a
              href="mailto:referrals@cellsitesolutions.com"
              className="font-semibold text-brand hover:text-brand-dark"
            >
              referrals@cellsitesolutions.com
            </a>
          </p>
        </div>
      </section>

      <section className="bg-[#f6f6f6] py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold uppercase text-ink sm:text-3xl">
            Referral Program Terms and Conditions
          </h2>
          <dl className="mt-8 space-y-6">
            {terms.map((t) => (
              <div key={t.title} className="rounded-lg border border-border bg-white p-6 shadow-sm">
                <dt className="text-lg font-bold text-ink">{t.title}</dt>
                <dd className="mt-2 text-base leading-relaxed text-muted">{t.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
