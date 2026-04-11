/** Canonical site URL — set NEXT_PUBLIC_SITE_URL on Vercel if the domain changes. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://lakshath.ownstreet.in"

export const person = {
  name: "Lakshath",
  email: "14ksh8th@gmail.com",
  location: "Bengaluru, India",
  jobTitle: "Digital Marketer & SEO Specialist",
  linkedIn: "https://www.linkedin.com/in/lakshath/",
  github: "https://github.com/lakshath",
  youtube: "https://www.youtube.com/@jobless_edits",
} as const
