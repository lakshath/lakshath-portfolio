import { person, siteUrl } from "@/lib/site"

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  url: siteUrl,
  email: person.email,
  jobTitle: person.jobTitle,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressCountry: "IN",
  },
  sameAs: [person.linkedIn, person.github, person.youtube],
  knowsAbout: [
    "Search Engine Optimization",
    "Technical SEO",
    "Content marketing",
    "Google Analytics",
    "Google Search Console",
    "Web performance",
    "Next.js",
  ],
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${person.name} — Portfolio`,
  url: siteUrl,
  description:
    "Digital marketing and SEO portfolio: technical SEO, analytics, content, design collateral, and web development.",
  author: { "@type": "Person", name: person.name, url: siteUrl },
}

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([personSchema, websiteSchema]),
      }}
    />
  )
}

type FaqItem = { question: string; answer: string }

export function FaqJsonLd({ items }: { items: FaqItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
