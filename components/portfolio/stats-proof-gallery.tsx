"use client"

import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import { FadeIn } from "@/components/portfolio/fade-in"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { statsProofImages, type StatsProofItem } from "@/lib/stats-proof"
import { X } from "lucide-react"

function Lightbox({
  item,
  onClose,
}: {
  item: StatsProofItem | null
  onClose: () => void
}) {
  useEffect(() => {
    if (!item) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [item, onClose])

  if (!item) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/90 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute right-4 top-4 z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
        onClick={onClose}
        aria-label="Close"
      >
        <X className="size-5" />
      </button>
      <div
        className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-[min(78vh,880px)] w-full">
          <Image
            src={item.src}
            alt={item.title}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 56rem"
            priority
          />
        </div>
        {(item.caption || item.title) && (
          <div className="border-t border-white/10 bg-zinc-950/80 px-4 py-4 sm:px-6">
            <h3 className="font-[family-name:var(--font-clash)] text-lg font-semibold text-white">
              {item.title}
            </h3>
            {item.caption ? (
              <p className="mt-1 text-sm leading-relaxed text-zinc-400">{item.caption}</p>
            ) : null}
          </div>
        )}
      </div>
    </div>
  )
}

export function StatsProofGallery() {
  const [active, setActive] = useState<StatsProofItem | null>(null)
  const close = useCallback(() => setActive(null), [])

  if (statsProofImages.length === 0) return null

  return (
    <div className="mt-14 border-t border-zinc-200 pt-14">
      <FadeIn>
        <SectionHeading
          eyebrow="Evidence"
          title="Third-party proof"
          description="PageSpeed, Ahrefs Site Audit, and YouTube Studio — screenshots chosen for strong lab scores, crawl health, and channel scale."
        />
      </FadeIn>

      <div className="grid gap-6 sm:grid-cols-2">
        {statsProofImages.map((item, i) => (
          <FadeIn key={item.src} delay={i * 0.05}>
            <button
              type="button"
              onClick={() => setActive(item)}
              className="group w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
            >
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-sm transition group-hover:shadow-xl">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-zinc-950/0 transition group-hover:bg-zinc-950/20" />
                <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-zinc-800 shadow">
                  Enlarge
                </span>
              </div>
              <p className="mt-3 text-sm font-semibold text-zinc-900">{item.title}</p>
              {item.caption ? (
                <p className="mt-1 text-xs text-zinc-500">{item.caption}</p>
              ) : null}
            </button>
          </FadeIn>
        ))}
      </div>

      <Lightbox item={active} onClose={close} />
    </div>
  )
}
