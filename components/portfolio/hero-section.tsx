"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MouseSpotlight } from "@/components/portfolio/mouse-spotlight"
import { ParallaxOrbs } from "@/components/portfolio/parallax-orbs"
import { IconGithub, IconLinkedin, IconYoutube } from "@/components/social-icons"
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
}

type HeroSectionProps = {
  emailCopied: boolean
  onCopyEmail: () => void
}

export function HeroSection({ emailCopied, onCopyEmail }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200/80 bg-stone-50 pt-28 pb-20 sm:pt-32 sm:pb-24 lg:min-h-[min(92vh,880px)] lg:pt-36 lg:pb-28">
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.5]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(0 0 0 / 0.028) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(0 0 0 / 0.028) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-[18%] h-[min(70vw,520px)] w-[min(90vw,720px)] -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-400/12 via-fuchsia-400/8 to-transparent blur-3xl"
        aria-hidden
      />

      <MouseSpotlight className="min-h-[1px]">
        <ParallaxOrbs />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-12 xl:gap-16">
            <motion.div
              className="lg:col-span-7"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={item} className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-300/60 bg-gradient-to-r from-violet-50 to-fuchsia-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-violet-900 shadow-sm shadow-violet-500/10">
                  <Sparkles className="size-3.5 text-violet-600" />
                  Open to roles
                </span>
                <span className="rounded-full bg-zinc-100/80 px-2.5 py-1 text-xs font-medium text-zinc-600">
                  Digital marketing · Bengaluru
                </span>
              </motion.div>

              <motion.h1
                variants={item}
                className="mt-7 font-[family-name:var(--font-clash)] text-[2.65rem] font-semibold leading-[1.05] tracking-tight text-zinc-950 sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]"
              >
                <span className="bg-gradient-to-br from-zinc-950 via-zinc-800 to-zinc-700 bg-clip-text text-transparent">
                  LAKSHATH
                </span>
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-5 max-w-xl text-lg font-medium leading-snug text-zinc-800 sm:text-xl lg:text-2xl"
              >
                Digital marketer & SEO specialist —{" "}
                <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 bg-clip-text text-transparent">
                  growth
                </span>{" "}
                backed by data, code, and creative.
              </motion.p>

              <motion.p
                variants={item}
                className="mt-5 max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg"
              >
                Technical SEO, content, analytics, and shipping fast web experiences — so
                rankings and conversions move together.
              </motion.p>

              <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
                <Link href="/resume.pdf">
                  <Button className="h-12 gap-2 rounded-2xl bg-zinc-950 px-7 text-sm font-semibold text-white shadow-xl shadow-zinc-900/20 ring-2 ring-zinc-950/10 transition hover:bg-zinc-800 hover:shadow-2xl">
                    <Download className="size-4" />
                    Download resume
                  </Button>
                </Link>
                <Button
                  onClick={onCopyEmail}
                  variant="outline"
                  className="h-12 rounded-2xl border-zinc-300/90 bg-white/90 px-6 text-sm font-semibold text-zinc-800 shadow-md shadow-zinc-900/5 backdrop-blur-sm hover:bg-white"
                >
                  <Mail className="mr-2 size-4 text-violet-600" />
                  {emailCopied ? "Copied!" : "Copy email"}
                </Button>
              </motion.div>

              <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Profiles
                </span>
                <div className="flex items-center gap-2">
                  {[
                    { href: "https://www.linkedin.com/in/lakshath/", label: "LinkedIn", Icon: IconLinkedin },
                    { href: "https://github.com/lakshath", label: "GitHub", Icon: IconGithub },
                    { href: "https://www.youtube.com/@jobless_edits", label: "YouTube", Icon: IconYoutube },
                  ].map(({ href, label, Icon }) => (
                    <Link
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-11 items-center justify-center rounded-2xl border border-zinc-200/90 bg-white text-zinc-500 shadow-sm transition hover:border-violet-300 hover:text-violet-700 hover:shadow-md"
                      aria-label={label}
                    >
                      <Icon className="size-5" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl border border-zinc-200/70 bg-white/90 p-6 shadow-2xl shadow-zinc-900/15 ring-1 ring-violet-500/15 backdrop-blur-md sm:p-8">
                  <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-violet-400/20 blur-2xl" />
                  <div className="pointer-events-none absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-amber-300/25 blur-2xl" />

                  <p className="relative text-xs font-semibold uppercase tracking-[0.22em] text-violet-600">
                    Snapshot
                  </p>
                  <p className="relative mt-1 text-sm text-zinc-500">
                    What recruiters scan first
                  </p>

                  <div className="relative mt-6 grid grid-cols-2 gap-3">
                    {[
                      { k: "YouTube", v: "1M+ views", sub: "2.8K+ subs" },
                      { k: "Stack", v: "Ahrefs · GSC", sub: "GA4 · SEMrush" },
                      { k: "Web", v: "Next.js", sub: "Tailwind · Supabase" },
                      { k: "Focus", v: "SEO + content", sub: "Design + ship" },
                    ].map((cell) => (
                      <div
                        key={cell.k}
                        className="rounded-2xl border border-zinc-100 bg-gradient-to-br from-white to-zinc-50/80 px-3 py-3 shadow-sm"
                      >
                        <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                          {cell.k}
                        </p>
                        <p className="mt-1 font-[family-name:var(--font-clash)] text-sm font-semibold text-zinc-900">
                          {cell.v}
                        </p>
                        <p className="mt-0.5 text-xs text-zinc-500">{cell.sub}</p>
                      </div>
                    ))}
                  </div>

                  <div className="relative mt-6 flex flex-wrap gap-2 border-t border-zinc-100/90 pt-6">
                    {["Technical SEO", "Content", "UI/UX", "Analytics"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-zinc-200/80 bg-zinc-50/90 px-3 py-1 text-xs font-medium text-zinc-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.a
            href="#metrics"
            className="mt-16 flex flex-col items-center justify-center gap-1 text-zinc-400 transition hover:text-violet-600 lg:mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="size-5" />
            </motion.span>
          </motion.a>
        </div>
      </MouseSpotlight>
    </section>
  )
}
