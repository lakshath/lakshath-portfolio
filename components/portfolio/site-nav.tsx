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
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-[background,box-shadow,backdrop-filter,border-color] duration-300",
        scrolled
          ? "border-b border-zinc-200/90 bg-white/85 shadow-md shadow-zinc-900/[0.04] backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent bg-white/40 backdrop-blur-[2px]"
      )}
    >
      <div className="mx-auto flex h-[3.65rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <motion.a
          href="#main"
          className="font-[family-name:var(--font-clash)] text-lg font-semibold tracking-tight text-zinc-900"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        >
          Lakshath<span className="text-violet-600">.</span>
        </motion.a>

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Page sections">
          {links.map((l) => (
            <motion.a
              key={l.href}
              href={l.href}
              className="group relative rounded-lg px-2.5 py-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
              whileHover={{ y: -1 }}
            >
              {l.label}
              <span className="absolute bottom-1 left-2 right-2 h-px origin-center scale-x-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-transform duration-200 group-hover:scale-x-100" />
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/resume.pdf" className="hidden sm:block">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button className="h-9 gap-2 rounded-xl border border-violet-600/20 bg-gradient-to-r from-zinc-900 to-zinc-800 px-4 text-xs font-semibold text-white shadow-md shadow-violet-500/10 hover:from-zinc-800 hover:to-zinc-800">
                <Download className="size-3.5" />
                Resume
              </Button>
            </motion.div>
          </Link>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-800 shadow-sm transition hover:border-violet-200 hover:bg-violet-50/50 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-zinc-200 bg-white/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
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
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-zinc-900 to-zinc-800 py-3 text-sm font-semibold text-white shadow-lg"
              onClick={() => setOpen(false)}
            >
              <Download className="size-4" />
              Download resume
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}
