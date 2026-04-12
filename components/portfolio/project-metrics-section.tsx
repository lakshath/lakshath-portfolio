"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { FadeIn } from "@/components/portfolio/fade-in"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { projectMetrics, type ProjectMetricEntry } from "@/lib/project-metrics"

const StatsProofGallery = dynamic(
  () =>
    import("@/components/portfolio/stats-proof-gallery").then((m) => ({
      default: m.StatsProofGallery,
    })),
  { loading: () => <div className="mx-auto mt-12 h-40 max-w-4xl animate-pulse rounded-2xl bg-zinc-100" /> }
)

function ScoreBar({ label, value }: { label: string; value: number }) {
  const pct = Math.min(100, value)
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-xs">
        <span className="text-zinc-500">{label}</span>
        <span className="font-semibold tabular-nums text-emerald-600">{value}</span>
      </div>
      <div className="h-1 overflow-hidden rounded-full bg-zinc-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

function MetricCard({ entry }: { entry: ProjectMetricEntry }) {
  const base =
    "flex h-full flex-col rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"

  if (entry.kind === "lighthouse") {
    const L = entry.lighthouse
    const rows: { k: keyof typeof L; label: string }[] = [
      { k: "performance", label: "Performance" },
      { k: "seo", label: "SEO" },
      { k: "accessibility", label: "Accessibility" },
      { k: "bestPractices", label: "Best practices" },
    ]
    return (
      <article className={base}>
        <div className="mb-4 flex items-start justify-between gap-2">
          <div>
            <h3 className="font-[family-name:var(--font-clash)] text-base font-semibold text-zinc-900">
              {entry.name}
            </h3>
            {entry.note ? <p className="mt-1 text-xs text-zinc-500">{entry.note}</p> : null}
          </div>
          <Link
            href={entry.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-zinc-400 transition hover:text-violet-600"
            aria-label={`Open ${entry.name}`}
          >
            <ExternalLink className="size-4" />
          </Link>
        </div>
        <div className="flex flex-1 flex-col gap-3">
          {rows.map(({ k, label }) => {
            const v = entry.lighthouse[k]
            if (v === undefined) return null
            return <ScoreBar key={k} label={label} value={v} />
          })}
        </div>
        <p className="mt-3 text-[10px] font-medium uppercase tracking-wider text-zinc-400">
          PageSpeed Insights · desktop
        </p>
      </article>
    )
  }

  if (entry.kind === "youtube") {
    return (
      <article className={base}>
        <div className="mb-4 flex items-start justify-between gap-2">
          <div>
            <h3 className="font-[family-name:var(--font-clash)] text-base font-semibold text-zinc-900">
              {entry.name}
            </h3>
            <p className="mt-1 text-xs text-zinc-500">YouTube Studio · {entry.note}</p>
          </div>
          <Link
            href={entry.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-zinc-400 transition hover:text-violet-600"
            aria-label="Open channel"
          >
            <ExternalLink className="size-4" />
          </Link>
        </div>
        <dl className="grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-xl bg-violet-50/80 px-3 py-2">
            <dt className="text-[10px] font-semibold uppercase tracking-wider text-violet-600">
              Views
            </dt>
            <dd className="font-[family-name:var(--font-clash)] text-lg font-semibold text-zinc-900">
              {entry.youtube.views}
            </dd>
          </div>
          <div className="rounded-xl bg-violet-50/80 px-3 py-2">
            <dt className="text-[10px] font-semibold uppercase tracking-wider text-violet-600">
              Subs
            </dt>
            <dd className="font-[family-name:var(--font-clash)] text-lg font-semibold text-zinc-900">
              {entry.youtube.subscribers}
            </dd>
          </div>
          {entry.youtube.watchHours ? (
            <div className="col-span-2 rounded-xl bg-zinc-50 px-3 py-2">
              <dt className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                Watch time (hrs)
              </dt>
              <dd className="font-semibold text-zinc-900">{entry.youtube.watchHours}</dd>
            </div>
          ) : null}
        </dl>
      </article>
    )
  }

  if (entry.kind === "seo-notes") {
    return (
      <article className={base}>
        <div className="mb-4 flex items-start justify-between gap-2">
          <div>
            <h3 className="font-[family-name:var(--font-clash)] text-base font-semibold text-zinc-900">
              {entry.name}
            </h3>
            <p className="mt-1 text-xs text-zinc-500">Client blog build</p>
          </div>
          <Link
            href={entry.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-zinc-400 transition hover:text-violet-600"
            aria-label={`Open ${entry.name}`}
          >
            <ExternalLink className="size-4" />
          </Link>
        </div>
        <ul className="space-y-2 text-sm text-zinc-600">
          {entry.bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-500" />
              {b}
            </li>
          ))}
        </ul>
      </article>
    )
  }

  if (entry.kind === "ahrefs") {
    return (
      <article className={base}>
        <div className="mb-4 flex items-start justify-between gap-2">
          <div>
            <h3 className="font-[family-name:var(--font-clash)] text-base font-semibold text-zinc-900">
              {entry.name}
            </h3>
            {entry.note ? <p className="mt-1 text-xs text-zinc-500">{entry.note}</p> : null}
          </div>
          <Link
            href={entry.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-zinc-400 transition hover:text-violet-600"
            aria-label="Open site"
          >
            <ExternalLink className="size-4" />
          </Link>
        </div>
        <dl className="space-y-3 text-sm">
          <div className="flex justify-between border-b border-zinc-100 pb-2">
            <dt className="text-zinc-500">Health</dt>
            <dd className="font-semibold text-emerald-600">{entry.ahrefs.health}</dd>
          </div>
          <div className="flex justify-between border-b border-zinc-100 pb-2">
            <dt className="text-zinc-500">Organic keywords</dt>
            <dd className="font-semibold text-violet-600">{entry.ahrefs.organicKeywords}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-zinc-500">Crawled pages</dt>
            <dd className="font-semibold text-violet-600">{entry.ahrefs.crawledPages}</dd>
          </div>
        </dl>
      </article>
    )
  }

  return null
}

export function ProjectMetricsSection() {
  return (
    <section id="seo" className="border-b border-zinc-200 bg-zinc-50/80 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="Proof"
            title="Metrics across every build"
            description="Lighthouse (desktop) where measured, YouTube Studio for the channel, Ahrefs for site health — one grid for all public work."
          />
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {projectMetrics.map((entry, i) => (
            <FadeIn key={entry.id} delay={i * 0.03}>
              <MetricCard entry={entry} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.08}>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              "Ahrefs",
              "SEMrush",
              "Screaming Frog",
              "GA4",
              "Search Console",
              "PageSpeed Insights",
              "YouTube Studio",
            ].map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-600"
              >
                {tool}
              </span>
            ))}
          </div>
        </FadeIn>

        <div className="mt-12">
          <StatsProofGallery />
        </div>
      </div>
    </section>
  )
}
