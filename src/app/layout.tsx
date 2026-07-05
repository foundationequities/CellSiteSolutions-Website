import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

// ─────────────────────────────────────────────────────────────────────────────
// PRODUCTION FONTS (Barlow + Inter) — enable when building where Google Fonts is
// reachable (e.g. Vercel). Uncomment, then add the classNames to <html> below.
//
// import { Barlow, Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
// const barlow = Barlow({
//   subsets: ["latin"],
//   weight: ["500", "600", "700", "800"],
//   variable: "--font-heading",
//   display: "swap",
// });
// then: <html className={`${inter.variable} ${barlow.variable}`}> ...
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Telecom Shelters & Cell Site Services`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "telecom shelters",
    "remanufactured shelters",
    "cell site services",
    "telecom generators",
    "shelter HVAC",
    "equipment cabinets",
    "civil construction",
    "site decommissioning",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.legalName,
    title: `${siteConfig.name} | Telecom Shelters & Cell Site Services`,
    description: siteConfig.description,
    // og:image is provided by the app/opengraph-image.tsx file convention.
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Telecom Shelters & Cell Site Services`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.svg`,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.zip,
      addressCountry: siteConfig.contact.address.country,
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.linkedin,
      siteConfig.social.youtube,
    ],
  };

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </body>
    </html>
  );
}
