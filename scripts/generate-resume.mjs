import { PDFDocument, StandardFonts, rgb } from "pdf-lib"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const out = path.join(__dirname, "..", "public", "resume.pdf")

async function main() {
  const pdf = await PDFDocument.create()
  const page = pdf.addPage([612, 792])
  const font = await pdf.embedFont(StandardFonts.Helvetica)
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold)

  let y = 750
  const x = 50

  const draw = (text, size, f = font, color = rgb(0.15, 0.15, 0.15)) => {
    page.drawText(text, { x, y, size, font: f, color })
    y -= size + 8
  }

  draw("LAKSHATH", 22, bold, rgb(0.08, 0.08, 0.08))
  y -= 4
  draw("Digital Marketer & SEO Specialist", 12, font, rgb(0.35, 0.35, 0.35))
  draw("Bengaluru, India  ·  14ksh8th@gmail.com", 10)
  draw(
    "linkedin.com/in/lakshath  ·  github.com/lakshath  ·  youtube.com/@jobless_edits",
    9,
    font,
    rgb(0.25, 0.25, 0.45)
  )
  y -= 12

  draw("Professional summary", 12, bold)
  const lines = [
    "Technical SEO, Search Console, analytics, and content. Design collateral for healthcare",
    "clients; ships web experiences with Next.js. Founder of ownstreet.in. YouTube channel",
    "jobless_edits: 1M+ lifetime views (YouTube Studio).",
  ]
  for (const ln of lines) {
    page.drawText(ln, { x, y, size: 10, font, color: rgb(0.2, 0.2, 0.2) })
    y -= 14
  }
  y -= 8

  draw("Highlights", 12, bold)
  for (const ln of [
    "· SEO: Ahrefs, SEMrush, GA4, PageSpeed Insights, GSC",
    "· Internship: Vaidyog — blog build, on-page SEO, hospital outreach",
    "· Dev: Next.js, Tailwind, Supabase, Vercel, Netlify",
  ]) {
    page.drawText(ln, { x, y, size: 10, font, color: rgb(0.2, 0.2, 0.2) })
    y -= 16
  }

  y -= 20
  page.drawText("Full portfolio & proof (screenshots, projects)", {
    x,
    y,
    size: 9,
    font,
    color: rgb(0.4, 0.4, 0.4),
  })
  y -= 12
  page.drawText("https://lakshath.ownstreet.in", {
    x,
    y,
    size: 9,
    font,
    color: rgb(0.35, 0.35, 0.55),
  })

  const bytes = await pdf.save()
  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, bytes)
  console.log("Wrote", out, `(${bytes.length} bytes)`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
