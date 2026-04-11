import Link from "next/link"
import { IconGithub, IconLinkedin, IconYoutube } from "@/components/social-icons"
import { person } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-[family-name:var(--font-clash)] text-lg font-semibold text-zinc-900">
            Lakshath<span className="text-violet-600">.</span>
          </p>
          <p className="mt-1 text-sm text-zinc-500">
            Digital marketing · SEO · Web
          </p>
          <a
            href={`mailto:${person.email}`}
            className="mt-2 inline-block text-sm font-medium text-violet-600 hover:text-violet-700"
          >
            {person.email}
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://linkedin.com/in/lakshath/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 transition-colors hover:text-violet-600"
            aria-label="LinkedIn"
          >
            <IconLinkedin className="size-5" />
          </Link>
          <Link
            href="https://github.com/lakshath"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 transition-colors hover:text-violet-600"
            aria-label="GitHub"
          >
            <IconGithub className="size-5" />
          </Link>
          <Link
            href="https://youtube.com/@jobless_edits"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 transition-colors hover:text-violet-600"
            aria-label="YouTube"
          >
            <IconYoutube className="size-5" />
          </Link>
        </div>
      </div>
      <div className="border-t border-zinc-100 py-6 text-center text-xs text-zinc-400">
        © {new Date().getFullYear()} Lakshath. Built with Next.js.
      </div>
    </footer>
  )
}
