"use client"

import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import { FadeIn } from "@/components/portfolio/fade-in"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { designClients, type DesignPiece } from "@/lib/design-work"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

function Lightbox({
  piece,
  onClose,
}: {
  piece: DesignPiece | null
  onClose: () => void
}) {
  useEffect(() => {
    if (!piece) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [piece, onClose])

  if (!piece) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/90 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={piece.title}
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
        className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[3/4] max-h-[85vh] w-full sm:aspect-[4/5]">
          <Image
            src={piece.src}
            alt={piece.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 48rem"
            priority
          />
        </div>
        <div className="border-t border-white/10 bg-zinc-950/80 px-4 py-4 sm:px-6">
          <h3 className="font-[family-name:var(--font-clash)] text-lg font-semibold text-white">
            {piece.title}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-zinc-400">{piece.description}</p>
        </div>
      </div>
    </div>
  )
}

export function DesignGallery() {
  const [active, setActive] = useState<DesignPiece | null>(null)
  const close = useCallback(() => setActive(null), [])

  return (
    <section id="design" className="border-b border-zinc-200 bg-stone-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="Design proof"
            title="Client creative — Vaidyog & Medasus"
            description="Posters and flyers built end-to-end: layout, typography, hierarchy, and on-brand visuals for healthcare marketing."
          />
        </FadeIn>

        <div className="space-y-20">
          {designClients.map((client, ci) => (
            <FadeIn key={client.id} delay={ci * 0.05}>
              <div>
                <div className="mb-8 flex flex-col gap-2 border-b border-zinc-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3 className="font-[family-name:var(--font-clash)] text-2xl font-semibold tracking-tight text-zinc-900">
                      {client.name}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600">
                      {client.blurb}
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {client.pieces.map((piece) => (
                    <button
                      key={piece.src}
                      type="button"
                      onClick={() => setActive(piece)}
                      className={cn(
                        "group text-left transition-transform hover:-translate-y-1",
                        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
                      )}
                    >
                      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-sm ring-zinc-900/5 transition group-hover:shadow-xl group-hover:ring-2 group-hover:ring-violet-500/20">
                        <Image
                          src={piece.src}
                          alt={piece.title}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition group-hover:opacity-100">
                          <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
                            View full
                          </p>
                          <p className="font-[family-name:var(--font-clash)] text-base font-semibold leading-snug">
                            {piece.title}
                          </p>
                        </div>
                      </div>
                      <p className="mt-3 text-sm font-semibold text-zinc-900">{piece.title}</p>
                      <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-zinc-500">
                        {piece.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <Lightbox piece={active} onClose={close} />
    </section>
  )
}
