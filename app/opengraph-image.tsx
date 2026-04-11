import { ImageResponse } from "next/og"

export const alt = "Lakshath — Digital Marketing & SEO Specialist"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(135deg, #18181b 0%, #5b21b6 45%, #86198f 100%)",
          padding: 64,
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "white",
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
          }}
        >
          Lakshath
        </div>
        <div
          style={{
            fontSize: 30,
            color: "rgba(255,255,255,0.9)",
            marginTop: 20,
            fontWeight: 500,
          }}
        >
          Digital Marketing · SEO · Technical Web
        </div>
        <div style={{ fontSize: 22, color: "rgba(255,255,255,0.65)", marginTop: 16 }}>
          Bengaluru · Portfolio & proof of work
        </div>
      </div>
    ),
    { ...size }
  )
}
