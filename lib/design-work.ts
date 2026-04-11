export type DesignPiece = {
  src: string
  title: string
  description: string
}

export type DesignClient = {
  id: string
  name: string
  blurb: string
  pieces: DesignPiece[]
}

/** Poster & flyer creative for Vaidyog + Medasus (client work). */
export const designClients: DesignClient[] = [
  {
    id: "vaidyog",
    name: "Vaidyog",
    blurb:
      "Event promos, internship programmes, and recruitment collateral for a medical careers platform — layout, hierarchy, and brand-consistent visuals.",
    pieces: [
      {
        src: "/images/vaidyog/vaidyog-seminar-fleming.jpeg",
        title: "Seminar — Pharma careers",
        description:
          "Co-branded flyer with Vaidyog × Fleming College of Pharmacy: date, venue, key benefits, and mission copy.",
      },
      {
        src: "/images/vaidyog/vaidyog-internship.jpeg",
        title: "Internship programme",
        description:
          "Full flyer for final-year pharmaceutical students: partner hospitals, pharma industry placements, and programme benefits.",
      },
      {
        src: "/images/vaidyog/vaidyog-hiring.jpeg",
        title: "Hospital hiring campaign",
        description:
          "Recruitment creative for multi-speciality roles — vacancies, location, and contact-led CTA.",
      },
    ],
  },
  {
    id: "medasus",
    name: "Medasus Healthcare",
    blurb:
      "Product and corporate flyers for medical equipment and hospital solutions — product hero, feature grids, and trust-led CTAs.",
    pieces: [
      {
        src: "/images/medasus/medasus1.jpeg",
        title: "Philips HeartStart FRx AED",
        description:
          "Product-focused flyer: lifesaving positioning, feature grid, ideal locations, and service highlights.",
      },
      {
        src: "/images/medasus/medasus2.jpeg",
        title: "Brand — Powering better healthcare",
        description:
          "Corporate story flyer with service pillars, impact stats, and dual CTAs with contact strip.",
      },
      {
        src: "/images/medasus/medasus3.jpeg",
        title: "Complete hospital solutions",
        description:
          "Offer overview: equipment supply, infrastructure setup, and installation/support — with CTA to medasus.com.",
      },
    ],
  },
]
