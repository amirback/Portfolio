import { ImageResponse } from "next/og";

import { hero, site } from "@/content/portfolio";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = site.title;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#fbf9f5",
          color: "#1b1917",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 60, letterSpacing: "-2px" }}>{hero.name}</div>
          <div style={{ fontSize: 30, color: "#635f57", marginTop: 10 }}>{hero.location}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ height: 1, backgroundColor: "#d9d4c9", marginBottom: 32 }} />
          <div style={{ fontSize: 38, lineHeight: 1.3, maxWidth: 900 }}>{hero.line}</div>
        </div>
      </div>
    ),
    size,
  );
}
