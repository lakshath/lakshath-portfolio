import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import { Toaster } from "sonner"
import { FaqJsonLd, JsonLd } from "@/components/json-ld"
import { hiringFaq } from "@/lib/faq"
import { person, siteUrl } from "@/lib/site"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const clashDisplay = localFont({
  src: [
    { path: "../public/fonts/ClashDisplay-Medium.otf", weight: "500", style: "normal" },
    { path: "../public/fonts/ClashDisplay-Semibold.otf", weight: "600", style: "normal" },
    { path: "../public/fonts/ClashDisplay-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-clash",
  display: "swap",
})

const titleDefault = "Lakshath | Digital Marketer & SEO Specialist"
const description =
  "Portfolio: technical SEO, Search Console & analytics proof, content and design collateral (healthcare clients), Next.js projects, and 1M+ YouTube reach. Based in Bengaluru, India — open to digital marketing & SEO roles."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: titleDefault,
    template: "%s | Lakshath",
  },
  description,
  keywords: [
    "Lakshath",
    "digital marketing portfolio",
    "SEO specialist India",
    "technical SEO",
    "content marketing",
    "Bengaluru marketer",
    "Google Search Console",
    "Next.js portfolio",
  ],
  authors: [{ name: person.name, url: siteUrl }],
  creator: person.name,
  publisher: person.name,
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Lakshath — Portfolio",
    title: titleDefault,
    description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Lakshath — Digital Marketing & SEO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: titleDefault,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "portfolio",
}

export const viewport: Viewport = {
  themeColor: "#fafaf9",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body
        className={`${clashDisplay.variable} ${inter.variable} min-h-screen bg-stone-50 font-sans text-zinc-900 antialiased selection:bg-violet-200/80 selection:text-violet-950`}
      >
        <JsonLd />
        <FaqJsonLd items={[...hiringFaq]} />
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  )
}
