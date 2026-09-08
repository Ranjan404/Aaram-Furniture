import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import "./globals.css";

/* Display serif for headlines, geometric sans for everything else. */
const display = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const sans = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    /* Names the differentiator and the market, not just the brand: for a local
       business the homepage is normally what ranks for the primary service plus
       the primary place. Individual cities are left to the body copy and the
       "Where we deliver" section rather than stuffed into 60 characters. */
    default: `Custom Sofas & Beds in ${siteConfig.serviceArea} | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "furniture",
    "sofa",
    "sofa set",
    "modern sofas",
    "L shape sofa",
    "beds",
    "modern beds",
    "storage bed",
    "upholstered bed",
    "furniture designs",
    "custom furniture",
    "made to order furniture",
    "dining table",
    "dining set",
    "wardrobe",
    "TV unit",
    "furniture shop",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Furniture",
  alternates: { canonical: "/" },
  formatDetection: { telephone: true, address: false, email: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "en_IN",
    url: siteConfig.url,
    title: `Custom Sofas & Beds in ${siteConfig.serviceArea} | ${siteConfig.name}`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - premium sofas, beds and custom furniture`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Custom Sofas & Beds in ${siteConfig.serviceArea} | ${siteConfig.name}`,
    description: siteConfig.description,
    images: ["/images/og-cover.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf9f6",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${display.variable} ${sans.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-ivory">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-ivory"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
