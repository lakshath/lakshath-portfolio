"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Download, Menu, X } from "lucide-react"

const links = [
  { href: "#metrics", label: "Impact" },
  { href: "#seo", label: "SEO" },
  { href: "#recruiters", label: "Recruiters" },
  { href: "#work", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#design", label: "Design" },
  { href: "#skills", label: "Skills" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4 md:px-6 pointer-events-none">
      <div className="mx-auto max-w-6xl pointer-events-auto">
        <motion.div
          layout
          className={cn(
            "flex items-center gap-2 rounded-2xl border px-2 py-1.5 shadow-lg transition-[box-shadow,background,border-color] duration-300 sm:gap-3 sm:px-3 sm:py-2",
            scrolled
              ? "border-zinc-200/95 bg-white/90 shadow-zinc-900/12 backdrop-blur-xl backdrop-saturate-150"
              : "border-zinc-200/70 bg-white/70 shadow-zinc-900/[0.06] backdrop-blur-xl"
          )}
        >
          <motion.a
            href="#main"
            className="shrink-0 pl-1.5 font-[family-name:var(--font-clash)] text-base font-semibold tracking-tight text-zinc-900 sm:pl-2 sm:text-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
          >
            Lakshath<span className="text-violet-600">.</span>
          </motion.a>

          <nav
            className="scrollbar-hide hidden min-w-0 flex-1 items-center justify-center gap-0.5 overflow-x-auto md:flex lg:gap-1"
            aria-label="Page sections"
          >
            {links.map((l) => (
              <motion.a
                key={l.href}
                href={l.href}
                className="group relative shrink-0 whitespace-nowrap rounded-lg px-2 py-2 text-[13px] font-medium text-zinc-600 transition-colors hover:text-zinc-900 lg:px-2.5 lg:text-sm"
                whileHover={{ y: -1 }}
              >
                {l.label}
                <span className="absolute bottom-1 left-2 right-2 h-px origin-center scale-x-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-transform duration-200 group-hover:scale-x-100" />
              </motion.a>
            ))}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2">
            <Link href="/resume.pdf" className="hidden sm:block">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button className="h-8 gap-1.5 rounded-xl border border-violet-600/15 bg-gradient-to-r from-zinc-900 to-zinc-800 px-3 text-[11px] font-semibold text-white shadow-md shadow-violet-500/10 sm:h-9 sm:px-4 sm:text-xs">
                  <Download className="size-3.5" />
                  Resume
                </Button>
              </motion.div>
            </Link>
            <button
              type="button"
              className="inline-flex size-9 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 text-zinc-800 shadow-sm transition hover:border-violet-200 hover:bg-violet-50/60 md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-[18px]" /> : <Menu className="size-[18px]" />}
            </button>
          </div>
        </motion.div>

        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/95 shadow-xl backdrop-blur-xl md:hidden"
          >
            <div className="flex max-h-[min(70vh,420px)] flex-col gap-0.5 overflow-y-auto p-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-zinc-800 transition hover:bg-violet-50 hover:text-violet-900"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <Link
                href="/resume.pdf"
                className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-zinc-900 to-zinc-800 py-3 text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                <Download className="size-4" />
                Download resume
              </Link>
            </div>
          </motion.div>
        ) : null}
      </div>
    </header>
  )
}
