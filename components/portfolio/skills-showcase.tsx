"use client"

import { motion } from "framer-motion"
import { BarChart3, Code2, Sparkles } from "lucide-react"
import { FadeIn } from "@/components/portfolio/fade-in"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { TiltPanel } from "@/components/portfolio/tilt-panel"
import { cn } from "@/lib/utils"

const stacks = [
  {
    title: "SEO & analytics",
    description:
      "Audits, keyword strategy, and performance tracking across the full funnel — from crawl to conversion.",
    icon: BarChart3,
    glow: "from-violet-500/30 to-fuchsia-500/20",
    iconBg: "bg-violet-100 text-violet-700 ring-violet-200/80",
    tools: [
      "Ahrefs",
      "SEMrush",
      "Screaming Frog",
      "GA4",
      "Search Console",
      "PageSpeed Insights",
      "Keyword Planner",
      "Ubersuggest",
    ],
    delay: 0.05,
  },
  {
    title: "Design & content",
    description:
      "Campaign creatives, social assets, thumbnails, and packaging for channels that need to stand out in the feed.",
    icon: Sparkles,
    glow: "from-amber-500/30 to-orange-500/20",
    iconBg: "bg-amber-100 text-amber-800 ring-amber-200/80",
    tools: [
      "Figma",
      "Canva",
      "Picsart",
      "Pixel Lab",
      "YouTube Studio",
      "TubeBuddy",
      "VidIQ",
    ],
    delay: 0.1,
  },
  {
    title: "Development",
    description:
      "Shipping fast, accessible interfaces — from landing pages to full-stack apps with payments and auth.",
    icon: Code2,
    glow: "from-cyan-500/30 to-blue-600/20",
    iconBg: "bg-cyan-100 text-cyan-800 ring-cyan-200/80",
    tools: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Supabase",
      "Vercel",
      "Netlify",
      "GitHub",
      "HTML/CSS",
    ],
    delay: 0.15,
  },
] as const

function SkillCard({ stack }: { stack: (typeof stacks)[number] }) {
  const Icon = stack.icon
  return (
    <TiltPanel className="h-full">
      <motion.div
        className={cn(
          "group relative flex h-full min-h-[26rem] flex-col overflow-hidden rounded-3xl border border-zinc-200/90 bg-gradient-to-b from-white to-zinc-50/90 p-6 shadow-sm transition-shadow duration-300 sm:min-h-[28rem] sm:p-7",
          "hover:border-violet-200/90 hover:shadow-xl hover:shadow-violet-500/[0.07]"
        )}
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 420, damping: 28 }}
      >
        <div
          className={cn(
            "pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br blur-3xl transition-opacity duration-500 group-hover:opacity-100",
            stack.glow
          )}
        />

        <div className="relative flex items-start gap-4">
          <div
            className={cn(
              "flex size-12 shrink-0 items-center justify-center rounded-2xl ring-2 ring-inset shadow-sm",
              stack.iconBg
            )}
          >
            <Icon className="size-6" aria-hidden />
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-clash)] text-xl font-semibold tracking-tight text-zinc-900">
              {stack.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">{stack.description}</p>
          </div>
        </div>

        <div className="relative mt-6 flex flex-1 flex-col border-t border-zinc-100/90 pt-6">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
            Tools & platforms
          </p>
          <div className="flex flex-wrap gap-2">
            {stack.tools.map((tool) => (
              <motion.span
                key={tool}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="cursor-default rounded-full border border-zinc-200/90 bg-white/90 px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm backdrop-blur-sm transition-colors hover:border-violet-300 hover:bg-violet-50/90 hover:text-violet-900"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </TiltPanel>
  )
}

export function SkillsShowcase() {
  return (
    <section
      id="skills"
      className="border-b border-zinc-200 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(139,92,246,0.06),transparent)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="Capabilities"
            title="Stack & tools"
            description="Three pillars — move your mouse over the cards for a subtle tilt. Pills light up on hover."
          />
        </FadeIn>

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {stacks.map((stack) => (
            <FadeIn key={stack.title} delay={stack.delay}>
              <SkillCard stack={stack} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
