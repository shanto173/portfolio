import type { Metadata, Viewport } from "next";
import { Archivo, Inter, JetBrains_Mono } from "next/font/google";
import { person, hero } from "@/lib/content";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const display = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

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
  title: { default: title, template: `%s — ${person.name}` },
  description,
  keywords: [
    "Ariful Islam",
    "software developer",
    "Odoo developer",
    "Odoo 17",
    "ERP",
    "supply chain analytics",
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
  twitter: { card: "summary_large_image", title, description: hero.headline },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0b" },
    { media: "(prefers-color-scheme: light)", color: "#f5f3ee" },
  ],
};

/**
 * Applies the stored theme before the first paint, so a light-mode visitor
 * never sees a black flash. Dark is the default when nothing is stored.
 */
const themeScript = `(function(){var d=document.documentElement;try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark"){d.dataset.theme=t}}catch(e){}
try{var s=sessionStorage.getItem("booted")==="1";var r=matchMedia("(prefers-reduced-motion: reduce)").matches;if(s||r){d.dataset.booted="1"}}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
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
