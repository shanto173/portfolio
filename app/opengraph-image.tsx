import { ImageResponse } from "next/og";
import { person, impact } from "@/lib/content";

export const alt = `${person.name} — ${person.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Satori needs an explicit display on any element with more than one child,
// so every block below is either a flex container or holds a single string.
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
          backgroundColor: "#0b0b0b",
          color: "#ede9e3",
          padding: "64px 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 19,
            letterSpacing: 3.5,
            color: "#8d8b85",
            textTransform: "uppercase",
          }}
        >
          <span>{`01 / ${person.monogram} — ${person.name}`}</span>
          <span>{person.locationShort}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 124, lineHeight: 0.92, letterSpacing: -5, fontWeight: 800 }}>
            ARIFUL
          </div>
          <div style={{ fontSize: 124, lineHeight: 0.92, letterSpacing: -5, fontWeight: 800 }}>
            ISLAM
          </div>
          <div style={{ marginTop: 26, fontSize: 25, color: "#c9c5bf" }}>
            {`${person.role} — ${person.disciplines}`}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 54,
            borderTop: "1px solid #232322",
            paddingTop: 24,
          }}
        >
          {impact.map((item) => (
            <div key={item.label} style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 42, lineHeight: 1.1, fontWeight: 700 }}>
                {item.value}
              </span>
              <span style={{ marginTop: 8, fontSize: 17, color: "#8d8b85" }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
