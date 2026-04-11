import type { Metadata } from "next"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import { Toaster } from "sonner"

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

export const metadata: Metadata = {
  title: "Lakshath | Digital Marketer & SEO Specialist",
  description: "1M+ YouTube views · 99 PageSpeed · SEO expert · Web developer",
  keywords: ["Lakshath", "Digital Marketer", "SEO", "Web Developer", "Portfolio"],
  authors: [{ name: "Lakshath" }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${clashDisplay.variable} ${inter.variable} min-h-screen bg-stone-50 font-sans text-zinc-900 antialiased selection:bg-violet-200/80 selection:text-violet-950`}
      >
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  )
}