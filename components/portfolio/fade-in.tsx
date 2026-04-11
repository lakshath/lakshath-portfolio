"use client"

import { motion, type HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

type FadeInProps = HTMLMotionProps<"div"> & {
  delay?: number
  children: React.ReactNode
}

export function FadeIn({ className, delay = 0, children, ...props }: FadeInProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
