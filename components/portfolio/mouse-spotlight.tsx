"use client"

import { useLayoutEffect, useRef } from "react"
import { useMotionTemplate, useMotionValue, useSpring, useReducedMotion } from "framer-motion"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type MouseSpotlightProps = {
  children: ReactNode
  className?: string
}

/** Soft radial glow that follows the cursor (desktop). Respects reduced motion. */
export function MouseSpotlight({ children, className }: MouseSpotlightProps) {
  const reduce = useReducedMotion()
  const rootRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 280, damping: 35, mass: 0.6 })
  const sy = useSpring(y, { stiffness: 280, damping: 35, mass: 0.6 })

  const background = useMotionTemplate`radial-gradient(520px circle at ${sx}px ${sy}px, rgba(139, 92, 246, 0.14), rgba(251, 191, 36, 0.06) 35%, transparent 55%)`

  useLayoutEffect(() => {
    if (reduce || !rootRef.current) return
    const r = rootRef.current.getBoundingClientRect()
    x.set(r.width * 0.55)
    y.set(r.height * 0.38)
  }, [reduce, x, y])

  return (
    <div
      ref={rootRef}
      className={cn("relative", className)}
      onMouseMove={(e) => {
        if (reduce) return
        const r = e.currentTarget.getBoundingClientRect()
        x.set(e.clientX - r.left)
        y.set(e.clientY - r.top)
      }}
      onMouseLeave={(e) => {
        if (reduce) return
        const r = e.currentTarget.getBoundingClientRect()
        x.set(r.width * 0.55)
        y.set(r.height * 0.38)
      }}
    >
      {!reduce ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1] hidden md:block"
          style={{ background }}
        />
      ) : null}
      <div className="relative z-[2]">{children}</div>
    </div>
  )
}
