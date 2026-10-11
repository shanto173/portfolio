import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import { person, hero } from "@/lib/content";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const title = `${person.name} — ${person.role}`;
const description =
  "Software developer working across Odoo ERP and supply-chain analytics, encrypted mobile platforms and applied AI. Based in Deggendorf, Germany.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: title,
    template: `%s — ${person.name}`,
  },
  description,
  keywords: [
    "Ariful Islam",
    "software developer",
    "Odoo developer",
    "Odoo 17",
    "ERP",
    "supply chain analytics",
    "data science",
    "React Native",
    "NestJS",
    "Deggendorf",
    "Germany",
  ],
  authors: [{ name: person.name, url: person.linkedin }],
  creator: person.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    siteName: person.name,
    title,
    description: hero.headline,
    url: "/",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: hero.headline,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="antialiased">
        {/* Without JavaScript nothing would ever be revealed, so show it all. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
