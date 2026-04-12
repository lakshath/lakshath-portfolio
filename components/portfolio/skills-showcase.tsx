"use client"

import { BarChart3, Code2, Sparkles } from "lucide-react"
import { FadeIn } from "@/components/portfolio/fade-in"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { cn } from "@/lib/utils"

const stacks = [
  {
    title: "SEO & analytics",
    description:
      "Search, crawl, and measurement — web analytics plus YouTube channel performance (Studio, TubeBuddy, VidIQ).",
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
      "YouTube Studio",
      "TubeBuddy",
      "VidIQ",
    ],
    delay: 0.05,
  },
  {
    title: "Design & content",
    description:
      "Visual assets plus AI-assisted drafting for blogs, scripts, and social — then edited for brand voice and accuracy.",
    icon: Sparkles,
    glow: "from-amber-500/30 to-orange-500/20",
    iconBg: "bg-amber-100 text-amber-800 ring-amber-200/80",
    tools: [
      "Figma",
      "Canva",
      "Picsart",
      "Pixel Lab",
      "Claude",
      "ChatGPT",
      "DeepSeek",
      "Gemini",
    ],
    delay: 0.1,
  },
  {
    title: "Development",
    description:
      "AI-assisted development — fast iteration with Claude, ChatGPT, and modern hosting (Supabase, Vercel, Netlify) plus transactional email.",
    icon: Code2,
    glow: "from-cyan-500/30 to-blue-600/20",
    iconBg: "bg-cyan-100 text-cyan-800 ring-cyan-200/80",
    tools: [
      "Claude",
      "ChatGPT",
      "DeepSeek",
      "Gemini",
      "Cursor",
      "VS Code",
      "Supabase",
      "Vercel",
      "Netlify",
      "GitHub",
      "Resend",
      "HTML/CSS",
    ],
    delay: 0.15,
  },
] as const

function SkillCard({ stack }: { stack: (typeof stacks)[number] }) {
  const Icon = stack.icon
  return (
    <div
      className={cn(
        "group relative flex h-full min-h-[24rem] flex-col overflow-hidden rounded-3xl border border-zinc-200/90 bg-gradient-to-b from-white to-zinc-50/90 p-6 shadow-sm transition-[transform,box-shadow] duration-300 sm:min-h-[26rem] sm:p-7",
        "hover:-translate-y-1 hover:border-violet-200/90 hover:shadow-lg hover:shadow-violet-500/[0.06]"
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br opacity-70 blur-2xl transition-opacity duration-500 group-hover:opacity-100",
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
            <span
              key={tool}
              className="cursor-default rounded-full border border-zinc-200/90 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm transition-colors hover:border-violet-300 hover:bg-violet-50/90 hover:text-violet-900"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
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
            description="Three pillars — SEO and analytics (including YouTube), design and content, and AI-assisted development with the stack I ship on."
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
