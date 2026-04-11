"use client"

import { useRef, type ReactNode } from "react"
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

type TiltPanelProps = {
  children: ReactNode
  className?: string
  intensity?: number
}

/** Subtle 3D tilt toward cursor — cards feel alive without nausea. */
export function TiltPanel({ children, className, intensity = 9 }: TiltPanelProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const srx = useSpring(rx, { stiffness: 320, damping: 32 })
  const sry = useSpring(ry, { stiffness: 320, damping: 32 })

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    ry.set(px * intensity)
    rx.set(-py * intensity)
  }

  function onLeave() {
    rx.set(0)
    ry.set(0)
  }

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <div className={cn("perspective-[1000px]", className)}>
      <motion.div
        ref={ref}
        className="h-full will-change-transform"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{
          rotateX: srx,
          rotateY: sry,
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
