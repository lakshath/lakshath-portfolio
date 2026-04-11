import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-semibold tracking-tight text-zinc-900 leading-[1.1]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base text-zinc-600 leading-relaxed">{description}</p>
      ) : null}
    </div>
  )
}
