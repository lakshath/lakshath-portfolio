/**
 * Third-party proof (Ahrefs, YouTube Studio). Curated screenshots — authority work and channel scale.
 * Lighthouse / PageSpeed for live sites lives in the metrics section above.
 */
export type StatsProofItem = {
  src: string
  title: string
  caption?: string
}

export const statsProofImages: StatsProofItem[] = [
  {
    src: "/images/stats-proof/ahrefs-vaidyog-domain-rating.png",
    title: "Ahrefs Site Explorer — Vaidyog",
    caption:
      "Domain Rating 18 → 24 within one month while interning (off-page SEO, backlinks, technical fixes). Ahrefs DR trend + Site Explorer overview.",
  },
  {
    src: "/images/stats-proof/youtube-studio-jobless-edits.png",
    title: "YouTube Studio — jobless_edits",
    caption:
      "Channel-scale proof: lifetime views, watch time, and subscriber growth from content and packaging.",
  },
]
