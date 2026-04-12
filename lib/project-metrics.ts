/**
 * Proof metrics per property — Lighthouse desktop where measured; YouTube from Studio;
 * Vaidyog blog called out without invented Lighthouse scores.
 */
export type LighthouseBlock = {
  performance?: number
  seo?: number
  accessibility?: number
  bestPractices?: number
}

export type ProjectMetricEntry =
  | {
      id: string
      name: string
      url: string
      kind: "lighthouse"
      lighthouse: LighthouseBlock
      note?: string
    }
  | {
      id: string
      name: string
      url: string
      kind: "youtube"
      youtube: { views: string; subscribers: string; watchHours?: string }
      note?: string
    }
  | {
      id: string
      name: string
      url: string
      kind: "seo-notes"
      bullets: string[]
    }
  | {
      id: string
      name: string
      url: string
      kind: "ahrefs"
      ahrefs: { health: number; organicKeywords: string; crawledPages: number }
      note?: string
    }

export const projectMetrics: ProjectMetricEntry[] = [
  {
    id: "ownstreet",
    name: "ownstreet.in",
    url: "https://ownstreet.in",
    kind: "lighthouse",
    lighthouse: {
      performance: 99,
      seo: 100,
      accessibility: 95,
      bestPractices: 100,
    },
    note: "Founder product — Next.js storefront",
  },
  {
    id: "trishola",
    name: "trishola.com",
    url: "https://trishola.com",
    kind: "lighthouse",
    lighthouse: {
      performance: 93,
      accessibility: 95,
      bestPractices: 100,
      seo: 100,
    },
    note: "Blog — content, UI, SEO",
  },
  {
    id: "eatmygreens",
    name: "eatmygreens.netlify.app",
    url: "https://eatmygreens.netlify.app",
    kind: "lighthouse",
    lighthouse: {
      performance: 60,
      seo: 100,
      accessibility: 100,
      bestPractices: 100,
    },
    note: "Microgreens site — branding + SEO setup",
  },
  {
    id: "vaidyog-blog",
    name: "blog.vaidyog.com",
    url: "https://blog.vaidyog.com",
    kind: "seo-notes",
    bullets: [
      "Built from scratch (HTML/CSS/JS)",
      "On-page & technical SEO",
      "SEO-led blog posts & publishing",
    ],
  },
  {
    id: "jobless-edits",
    name: "jobless_edits",
    url: "https://www.youtube.com/@jobless_edits",
    kind: "youtube",
    youtube: { views: "1M+", subscribers: "2.8K+", watchHours: "4.8K" },
    note: "YouTube Studio — lifetime",
  },
  {
    id: "ahrefs-trishola",
    name: "Ahrefs · trishola.com",
    url: "https://trishola.com",
    kind: "ahrefs",
    ahrefs: { health: 94, organicKeywords: "11+", crawledPages: 48 },
    note: "Site audit snapshot",
  },
]
