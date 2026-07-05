import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";
export const alt = siteConfig.legalName;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a2540 0%, #0b63b7 100%)",
          padding: 80,
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#ef6a2b",
            fontWeight: 700,
          }}
        >
          CellSite Solutions
        </div>
        <div style={{ fontSize: 72, fontWeight: 800, marginTop: 20, lineHeight: 1.1, maxWidth: 900 }}>
          Telecom Infrastructure Solutions, Done Right
        </div>
        <div style={{ fontSize: 32, marginTop: 28, color: "rgba(255,255,255,0.8)" }}>
          Remanufactured shelters · Generators · HVAC · Turnkey site services
        </div>
      </div>
    ),
    { ...size }
  );
}
