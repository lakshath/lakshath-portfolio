"use client"

import { motion, useMotionValue, useSpring, useReducedMotion, useTransform } from "framer-motion"
import { useEffect } from "react"

/** Decorative blobs that shift slightly with pointer — hero only. */
export function ParallaxOrbs() {
  const reduce = useReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 120, damping: 28 })
  const sy = useSpring(my, { stiffness: 120, damping: 28 })

  useEffect(() => {
    if (reduce) return
    const onMove = (e: MouseEvent) => {
      const cx = (e.clientX / window.innerWidth - 0.5) * 2
      const cy = (e.clientY / window.innerHeight - 0.5) * 2
      mx.set(cx * 18)
      my.set(cy * 14)
    }
    window.addEventListener("mousemove", onMove, { passive: true })
    return () => window.removeEventListener("mousemove", onMove)
  }, [mx, my, reduce])

  const x1 = useTransform(sx, (v) => v * 1.2)
  const y1 = useTransform(sy, (v) => v * 0.9)
  const x2 = useTransform(sx, (v) => -v * 0.8)
  const y2 = useTransform(sy, (v) => -v * 1.1)

  if (reduce) {
    return (
      <>
        <div className="pointer-events-none absolute -right-24 top-0 h-[420px] w-[420px] rounded-full bg-violet-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-[320px] w-[320px] rounded-full bg-amber-300/25 blur-3xl" />
      </>
    )
  }

  return (
    <>
      <motion.div
        style={{ x: x1, y: y1 }}
        className="pointer-events-none absolute -right-24 top-0 h-[420px] w-[420px] rounded-full bg-violet-400/25 blur-3xl will-change-transform"
      />
      <motion.div
        style={{ x: x2, y: y2 }}
        className="pointer-events-none absolute -left-32 bottom-0 h-[340px] w-[340px] rounded-full bg-amber-300/30 blur-3xl will-change-transform"
      />
    </>
  )
}
