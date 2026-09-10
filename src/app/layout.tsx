import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { organizationSchema, websiteSchema, toJsonLdScript } from "@/lib/schema";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { Analytics, ScrollDepthTracker } from "@/components/analytics/Analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Satoshi (Indian Type Foundry, self-hosted via Fontshare's free-license
// package — see src/fonts/LICENSE.txt). Variable font, so one file covers
// the whole 300–900 weight range the design system uses (600/700 for headings).
const satoshi = localFont({
  src: [
    { path: "../fonts/Satoshi-Variable.woff2", style: "normal" },
    { path: "../fonts/Satoshi-VariableItalic.woff2", style: "italic" },
  ],
  variable: "--font-satoshi",
  display: "swap",
  weight: "300 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.brand} — Homeopathic Clinic in Sikar, Rajasthan`,
    template: `%s | ${siteConfig.brand}`,
  },
  description:
    "Aura Cure Clinic is a homeopathic, skin and hair clinic on Bajaj Road, opposite Jain School and Vardhman School, Sikar. Unhurried consultations with Dr. Nitin Sharma, BHMS. Open Monday to Saturday — book an appointment or call 96108 96996.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.brand,
    title: `${siteConfig.brand} — Homeopathic Clinic in Sikar, Rajasthan`,
    description:
      "A homeopathic medical clinic in Sikar offering unhurried, individualised consultations.",
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brand} — Homeopathic Clinic in Sikar`,
    description:
      "A homeopathic medical clinic in Sikar offering unhurried, individualised consultations.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${satoshi.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col pb-[68px] xl:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: toJsonLdScript([organizationSchema(), websiteSchema()]),
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-forest-800 focus:px-4 focus:py-2 focus:text-sm focus:text-ivory"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileActionBar />
        <Analytics />
        <ScrollDepthTracker />
      </body>
    </html>
  );
}
