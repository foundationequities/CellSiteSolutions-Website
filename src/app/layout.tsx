import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { siteConfig } from "@/lib/site-config";

// Body font. Headings use halyard-display (Adobe Fonts), loaded via
// @font-face in globals.css — the same kit the live site serves.
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Telecom Shelters & Wireless Site Services`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: [
      { url: "/images/wp-content/uploads/2026/01/cropped-Favicon-32x32.png", sizes: "32x32" },
      { url: "/images/wp-content/uploads/2026/01/cropped-Favicon-192x192.png", sizes: "192x192" },
    ],
    apple: "/images/wp-content/uploads/2026/01/cropped-Favicon-180x180.png",
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    url: siteConfig.url,
    images: [
      "/images/wp-content/uploads/2024/12/0032-New-Website-Announcement-Post-Large-min.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: ScrollReveal tags <html> with a `js-reveal`
    // class on the client (same pattern as next-themes); without this React
    // reports an attribute mismatch against the server-rendered HTML.
    <html lang="en" className={`${dmSans.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <ScrollReveal />
      </body>
    </html>
  );
}
