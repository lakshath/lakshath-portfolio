import Link from "next/link"
import { FileText, MapPin, Mail } from "lucide-react"
import { IconLinkedin } from "@/components/social-icons"
import { person } from "@/lib/site"

const highlights = [
  "Technical SEO & Search Console",
  "Content, analytics & reporting",
  "Design collateral & social creative",
  "Next.js + shipping real products",
]

export function RecruiterStrip() {
  return (
    <section
      id="recruiters"
      aria-labelledby="recruiter-heading"
      className="border-b border-zinc-200 bg-white py-10 sm:py-12"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-violet-200/80 bg-gradient-to-br from-violet-50/90 via-white to-stone-50 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <p
                id="recruiter-heading"
                className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700"
              >
                For recruiters & hiring managers
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-clash)] text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl">
                SEO-led marketer who also designs and ships on the web
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base">
                Use this page as a one-stop profile: metrics, tool screenshots, live projects, and
                client creative. Ideal fit when you need someone who can own{" "}
                <strong className="font-medium text-zinc-800">search + content + execution</strong>,
                not only slides.
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {highlights.map((line) => (
                  <li
                    key={line}
                    className="flex items-center gap-2 text-sm text-zinc-700 before:size-1.5 before:shrink-0 before:rounded-full before:bg-violet-500"
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-2 sm:max-w-xs lg:w-72">
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Quick contact
              </p>
              <a
                href={`mailto:${person.email}?subject=Role%20discussion%20%E2%80%93%20Lakshath`}
                className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-800 transition hover:border-violet-300 hover:bg-violet-50/50"
              >
                <Mail className="size-4 text-violet-600" aria-hidden />
                {person.email}
              </a>
              <Link
                href={person.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-800 transition hover:border-violet-300 hover:bg-violet-50/50"
              >
                <IconLinkedin className="size-4 text-violet-600" aria-hidden />
                LinkedIn profile
              </Link>
              <Link
                href="/resume.pdf"
                className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-800 transition hover:border-violet-300 hover:bg-violet-50/50"
              >
                <FileText className="size-4 text-violet-600" aria-hidden />
                Resume (PDF)
              </Link>
              <p className="flex items-center gap-2 pt-1 text-xs text-zinc-500">
                <MapPin className="size-3.5 shrink-0" aria-hidden />
                {person.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
