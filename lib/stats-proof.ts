/**
 * Third-party proof (PageSpeed, Ahrefs, YouTube Studio). Curated for a digital marketing narrative:
 * strong Lighthouse scores, crawl/health audits, and platform-scale audience metrics.
 * Omitted: screenshots where metrics were weak or easy to misread (e.g. low-traffic GSC panels).
 */
export type StatsProofItem = {
  src: string
  title: string
  caption?: string
}

export const statsProofImages: StatsProofItem[] = [
  {
    src: "/images/stats-proof/pagespeed-ownstreet-desktop.png",
    title: "PageSpeed Insights — ownstreet.in",
    caption:
      "Desktop: 99 Performance · 100 SEO · 100 Best Practices · 95 Accessibility (founder build).",
  },
  {
    src: "/images/stats-proof/pagespeed-trishola-desktop.png",
    title: "PageSpeed Insights — trishola.com",
    caption:
      "Desktop: 93 Performance · 100 SEO · 100 Best Practices · 95 Accessibility — technical + on-page SEO delivery.",
  },
  {
    src: "/images/stats-proof/ahrefs-trishola-site-audit.png",
    title: "Ahrefs Site Audit — trishola.com",
    caption:
      "Health Score 94 (Excellent): crawl overview, issue mix, and stable health trend — technical SEO + site quality beyond lab scores.",
  },
  {
    src: "/images/stats-proof/youtube-studio-jobless-edits.png",
    title: "YouTube Studio — jobless_edits",
    caption:
      "Channel-scale proof: lifetime views, watch time, and subscriber growth from content and packaging.",
  },
]
