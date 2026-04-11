"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Download, Menu, X } from "lucide-react"

const links = [
  { href: "#metrics", label: "Impact" },
  { href: "#seo", label: "SEO" },
  { href: "#work", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#design", label: "Design" },
  { href: "#skills", label: "Skills" },
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
        "fixed top-0 left-0 right-0 z-50 transition-[background,box-shadow,backdrop-filter] duration-300",
        scrolled
          ? "border-b border-zinc-200/80 bg-white/80 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#top"
          className="font-[family-name:var(--font-clash)] text-lg font-semibold tracking-tight text-zinc-900"
        >
          Lakshath<span className="text-violet-600">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/resume.pdf" className="hidden sm:block">
            <Button className="h-9 gap-2 rounded-xl bg-zinc-900 px-4 text-xs font-semibold text-white hover:bg-zinc-800">
              <Download className="size-3.5" />
              Resume
            </Button>
          </Link>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-800 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-zinc-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-xl px-3 py-3 text-sm font-medium text-zinc-800 hover:bg-zinc-50"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <Link
              href="/resume.pdf"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-zinc-900 py-3 text-sm font-semibold text-white"
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
