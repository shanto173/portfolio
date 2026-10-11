import { ImageResponse } from "next/og";
import { person, hero, impact } from "@/lib/content";

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
          backgroundColor: "#faf8f3",
          color: "#16140f",
          padding: "68px 76px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            letterSpacing: 3,
            color: "#8f8878",
            textTransform: "uppercase",
          }}
        >
          <span>{person.name}</span>
          <span>{person.location}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 66, lineHeight: 1.12, letterSpacing: -1.5 }}>
            {hero.headlineLead}
          </div>
          <div
            style={{
              fontSize: 66,
              lineHeight: 1.12,
              letterSpacing: -1.5,
              color: "#9a4a2b",
            }}
          >
            {hero.headlineEmphasis}
          </div>
          <div style={{ marginTop: 30, fontSize: 25, color: "#6e6658" }}>
            {`${person.role} — ${person.disciplines}`}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 56,
            borderTop: "1px solid #e2dccf",
            paddingTop: 26,
          }}
        >
          {impact.map((item) => (
            <div
              key={item.label}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <span style={{ fontSize: 44, lineHeight: 1.1 }}>{item.value}</span>
              <span style={{ marginTop: 10, fontSize: 18, color: "#6e6658" }}>
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
