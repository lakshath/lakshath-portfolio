"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/portfolio/fade-in"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { SiteNav } from "@/components/portfolio/site-nav"
import { SiteFooter } from "@/components/portfolio/site-footer"
import { DesignGallery } from "@/components/portfolio/design-gallery"
import { RecruiterStrip } from "@/components/portfolio/recruiter-strip"
import { StatsProofGallery } from "@/components/portfolio/stats-proof-gallery"
import { HeroSection } from "@/components/portfolio/hero-section"
import { SkillsShowcase } from "@/components/portfolio/skills-showcase"
import { hiringFaq } from "@/lib/faq"
import { IconGithub, IconLinkedin, IconYoutube } from "@/components/social-icons"
import {
  Download,
  Mail,
  Users,
  Rocket,
  BarChart3,
  Check,
  ExternalLink,
  ChevronDown,
} from "lucide-react"

function ScoreRow({ label, value }: { label: string; value: number }) {
  const pct = Math.min(100, value)
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-zinc-600">{label}</span>
        <span className="font-semibold tabular-nums text-emerald-600">{value}</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-zinc-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

const projectGradients = [
  "from-violet-500 via-fuchsia-500 to-pink-500",
  "from-amber-500 via-orange-500 to-rose-500",
  "from-cyan-500 via-blue-500 to-indigo-500",
  "from-emerald-500 via-teal-500 to-cyan-500",
]

const projects = [
  {
    title: "EatMyGreens",
    desc: "Microgreens business website – branding, SEO setup, content writing",
    tags: ["SEO", "Web Design", "Branding"],
    link: "https://eatmygreens.netlify.app",
  },
  {
    title: "Trishola",
    desc: "Personal development blog – SEO, content writing, UI/UX design",
    tags: ["SEO", "Content", "UI/UX"],
    link: "https://trishola.com",
  },
  {
    title: "ownstreet",
    desc: "Linktree + Gumroad alternative for Indian creators",
    tags: ["Next.js", "Supabase", "Razorpay"],
    link: "https://ownstreet.in",
  },
  {
    title: "Vaidyog Blog",
    desc: "Medical job portal blog built from scratch with SEO",
    tags: ["HTML/CSS", "SEO", "Content"],
    link: "https://blog.vaidyog.com",
  },
]

export default function HomePage() {
  const [emailCopied, setEmailCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("14ksh8th@gmail.com")
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  return (
    <main id="main" tabIndex={-1} className="min-h-screen outline-none">
      <SiteNav />

      <HeroSection emailCopied={emailCopied} onCopyEmail={copyEmail} />

      <RecruiterStrip />

      {/* Stats */}
      <section id="metrics" className="border-b border-zinc-800 bg-zinc-950 py-14 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
              {[
                { value: "1M+", label: "YouTube views", icon: IconYoutube },
                { value: "2.8K+", label: "Subscribers", icon: Users },
                { value: "5+", label: "Portfolio projects", icon: Rocket },
                { value: "99", label: "PageSpeed score", icon: BarChart3 },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center md:text-left"
                >
                  <stat.icon className="mx-auto mb-3 size-7 text-violet-400 md:mx-0" />
                  <div className="font-[family-name:var(--font-clash)] text-3xl font-semibold tracking-tight sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-zinc-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Technical SEO */}
      <section id="seo" className="border-b border-zinc-200 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <SectionHeading
              eyebrow="Proof"
              title="Performance metrics that matter"
              description="Real Lighthouse scores and SEO health from sites I’ve worked on — not vanity metrics."
            />
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FadeIn delay={0.05}>
              <article className="flex h-full flex-col rounded-3xl border border-zinc-200 bg-stone-50/60 p-6 shadow-sm transition-shadow hover:shadow-lg">
                <div className="mb-6 flex items-center gap-3">
                  <span className="text-2xl" aria-hidden>
                    🚀
                  </span>
                  <h3 className="font-[family-name:var(--font-clash)] text-lg font-semibold text-zinc-900">
                    ownstreet.in
                  </h3>
                </div>
                <div className="flex flex-1 flex-col gap-4">
                  <ScoreRow label="Performance" value={99} />
                  <ScoreRow label="SEO" value={100} />
                  <ScoreRow label="Accessibility" value={95} />
                  <ScoreRow label="Best practices" value={100} />
                </div>
              </article>
            </FadeIn>

            <FadeIn delay={0.1}>
              <article className="flex h-full flex-col rounded-3xl border border-zinc-200 bg-stone-50/60 p-6 shadow-sm transition-shadow hover:shadow-lg">
                <div className="mb-6 flex items-center gap-3">
                  <span className="text-2xl" aria-hidden>
                    📝
                  </span>
                  <h3 className="font-[family-name:var(--font-clash)] text-lg font-semibold text-zinc-900">
                    trishola.com
                  </h3>
                </div>
                <div className="flex flex-1 flex-col gap-4">
                  <ScoreRow label="Performance" value={93} />
                  <ScoreRow label="SEO" value={95} />
                  <ScoreRow label="Accessibility" value={92} />
                </div>
              </article>
            </FadeIn>

            <FadeIn delay={0.15}>
              <article className="flex h-full flex-col rounded-3xl border border-zinc-200 bg-stone-50/60 p-6 shadow-sm transition-shadow hover:shadow-lg md:col-span-2 lg:col-span-1">
                <div className="mb-6 flex items-center gap-3">
                  <span className="text-2xl" aria-hidden>
                    🔧
                  </span>
                  <h3 className="font-[family-name:var(--font-clash)] text-lg font-semibold text-zinc-900">
                    Ahrefs (Trishola)
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-600">Health score</span>
                    <span className="font-semibold text-emerald-600">94</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-600">Organic keywords</span>
                    <span className="font-semibold text-violet-600">11+</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-600">Crawled pages</span>
                    <span className="font-semibold text-violet-600">48</span>
                  </div>
                </div>
              </article>
            </FadeIn>
          </div>

          <FadeIn delay={0.05}>
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {[
                "Ahrefs",
                "SEMrush",
                "Screaming Frog",
                "Google Analytics 4",
                "Search Console",
                "PageSpeed Insights",
              ].map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-medium text-zinc-700"
                >
                  {tool}
                </span>
              ))}
            </div>
          </FadeIn>

          <StatsProofGallery />
        </div>
      </section>

      {/* YouTube */}
      <section
        id="youtube"
        className="relative overflow-hidden border-b border-zinc-200 py-20 sm:py-24"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500 via-fuchsia-600 to-violet-700" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.2),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <FadeIn>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
              <IconYoutube className="size-3.5" />
              Flagship channel
            </div>
            <h2 className="font-[family-name:var(--font-clash)] text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              jobless_edits
            </h2>
            <p className="text-white/80 mb-10 mt-3 text-lg">
              SEO-driven titles, thumbnails, and content optimization at scale.
            </p>
            <div className="mx-auto grid max-w-lg grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
                <div className="font-[family-name:var(--font-clash)] text-4xl font-semibold text-white">
                  1M+
                </div>
                <div className="mt-1 text-sm text-white/70">Total views</div>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
                <div className="font-[family-name:var(--font-clash)] text-4xl font-semibold text-white">
                  2.8K+
                </div>
                <div className="mt-1 text-sm text-white/70">Subscribers</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Experience */}
      <section id="work" className="border-b border-zinc-200 bg-stone-50 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <FadeIn>
            <SectionHeading
              eyebrow="Experience"
              title="Where I’ve shipped"
              description="Internships, founder work, and hands-on delivery across SEO, content, and web."
            />
          </FadeIn>

          <div className="space-y-8">
            <FadeIn delay={0.05}>
              <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-zinc-100 pb-6">
                  <div>
                    <h3 className="font-[family-name:var(--font-clash)] text-xl font-semibold text-zinc-900">
                      Vaidyog (Medical Job Portal)
                    </h3>
                    <p className="mt-1 text-sm font-medium text-violet-600">
                      Digital Marketing Intern
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-200/80">
                    Jan 2026 – Apr 2026
                  </span>
                </div>
                <ul className="mt-6 grid gap-3 md:grid-cols-2">
                  {[
                    "Off-page SEO across 10+ categories",
                    "10+ outreach emails daily to hospitals",
                    "3+ marketing posters daily for social media",
                    "Built blog.vaidyog.com with HTML/CSS/JS",
                    "On-page & technical SEO from scratch",
                    "SEO-optimized blog writing & publishing",
                    "WhatsApp channel content management",
                    "Keyword research & competitor analysis",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-zinc-600">
                      <Check className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>

            <FadeIn delay={0.1}>
              <article className="relative overflow-hidden rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-amber-50 p-6 shadow-sm sm:p-8">
                <div className="pointer-events-none absolute -right-24 -top-24 size-48 rounded-full bg-violet-400/20 blur-2xl" />
                <div className="relative flex flex-wrap items-start justify-between gap-4 border-b border-violet-200/60 pb-6">
                  <div>
                    <h3 className="font-[family-name:var(--font-clash)] text-xl font-semibold text-zinc-900">
                      ownstreet.in
                    </h3>
                    <p className="mt-1 text-sm font-medium text-violet-700">
                      Founder (pre-launch)
                    </p>
                  </div>
                  <span className="rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                    Current
                  </span>
                </div>
                <ul className="relative mt-6 grid gap-3 md:grid-cols-2">
                  {[
                    "SaaS for Indian creators to sell digital products",
                    "UPI-first payments via Razorpay",
                    "Conversion-focused storefront design",
                    "Full-stack: Next.js, Supabase, Tailwind CSS",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-zinc-700">
                      <Check className="mt-0.5 size-4 shrink-0 text-violet-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-b border-zinc-200 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <SectionHeading
              eyebrow="Portfolio"
              title="Live projects"
              description="A mix of client sites, SEO-led content properties, and products I’ve built end-to-end."
            />
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <FadeIn key={project.title} delay={i * 0.05}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-stone-50/40 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-xl">
                  <div
                    className={`h-2 bg-gradient-to-r ${projectGradients[i % projectGradients.length]}`}
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-[family-name:var(--font-clash)] text-lg font-semibold text-zinc-900">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">
                      {project.desc}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-zinc-600 ring-1 ring-zinc-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 transition-all hover:gap-2.5"
                    >
                      View project
                      <ExternalLink className="size-3.5" />
                    </Link>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <DesignGallery />

      <SkillsShowcase />

      {/* Education */}
      <section id="education" className="border-b border-zinc-200 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <FadeIn>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">
              Education
            </div>
            <h2 className="font-[family-name:var(--font-clash)] text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              B.Com (Bachelor of Commerce)
            </h2>
            <p className="mt-4 text-zinc-600">
              St. Vincent Pallotti College, Bangalore North University
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              Completed 5th & 6th semester · Awaiting results
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ — copy mirrored in JSON-LD (lib/faq.ts) */}
      <section
        id="faq"
        className="border-b border-zinc-200 bg-stone-50 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <FadeIn>
            <SectionHeading
              eyebrow="Hiring FAQ"
              title="Questions recruiters ask"
              description="Straight answers — also marked up for Google as FAQ rich results."
            />
          </FadeIn>
          <div className="mt-10 space-y-3">
            {hiringFaq.map((item) => (
              <FadeIn key={item.question}>
                <details className="group rounded-2xl border border-zinc-200 bg-white px-5 py-4 shadow-sm open:shadow-md">
                  <summary className="cursor-pointer list-none font-[family-name:var(--font-clash)] text-base font-semibold text-zinc-900 [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center justify-between gap-3">
                      {item.question}
                      <ChevronDown
                        className="size-5 shrink-0 text-violet-600 transition-transform group-open:rotate-180"
                        aria-hidden
                      />
                    </span>
                  </summary>
                  <p className="mt-3 border-t border-zinc-100 pt-3 text-sm leading-relaxed text-zinc-600">
                    {item.answer}
                  </p>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="border-t border-zinc-200 bg-white py-20 sm:py-24"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-gradient-to-br from-zinc-900 via-zinc-950 to-violet-950 p-10 text-center shadow-2xl sm:p-14">
              <div className="pointer-events-none absolute -left-32 top-0 h-64 w-64 rounded-full bg-violet-500/30 blur-3xl" />
              <div className="pointer-events-none absolute -right-24 bottom-0 h-48 w-48 rounded-full bg-fuchsia-500/20 blur-3xl" />
              <div className="relative">
                <h2 className="font-[family-name:var(--font-clash)] text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Let’s work together
                </h2>
                <p className="mx-auto mt-5 max-w-md text-balance text-lg text-white/75">
                  Looking for a marketer who bridges SEO, content, and the technical side of the web?
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Link href="/resume.pdf">
                    <Button className="h-12 gap-2 rounded-2xl bg-white px-8 text-sm font-semibold text-zinc-900 hover:bg-zinc-100">
                      <Download className="size-4" />
                      Download resume
                    </Button>
                  </Link>
                  <Button
                    onClick={copyEmail}
                    variant="outline"
                    className="h-12 rounded-2xl border-white/30 bg-transparent px-6 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    <Mail className="mr-2 size-4" />
                    {emailCopied ? "Copied!" : "Copy email"}
                  </Button>
                </div>
                <div className="mt-10 flex justify-center gap-5">
                  <Link
                    href="https://linkedin.com/in/lakshath/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 transition-colors hover:text-white"
                    aria-label="LinkedIn"
                  >
                    <IconLinkedin className="size-6" />
                  </Link>
                  <Link
                    href="https://github.com/lakshath"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 transition-colors hover:text-white"
                    aria-label="GitHub"
                  >
                    <IconGithub className="size-6" />
                  </Link>
                  <Link
                    href="https://youtube.com/@jobless_edits"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 transition-colors hover:text-white"
                    aria-label="YouTube"
                  >
                    <IconYoutube className="size-6" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
