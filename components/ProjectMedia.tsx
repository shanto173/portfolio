"use client";

import Image from "next/image";
import { useState } from "react";
import type { Shot } from "@/lib/content";
import Lightbox from "./Lightbox";

type Props = {
  mockup: Shot;
  album: Shot[];
  accent: string;
  shape: "phone" | "screen";
  title: string;
};

export default function ProjectMedia({
  mockup,
  album,
  accent,
  shape,
  title,
}: Props) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const phone = shape === "phone";

  return (
    <>
      <div className="relative">
        {/* The coloured bloom the device floats in. */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 blur-3xl"
          style={{
            background: `radial-gradient(60% 55% at 50% 45%, ${accent}, transparent 70%)`,
            opacity: "var(--glow)",
          }}
        />

        <button
          type="button"
          onClick={() => {
            setIndex(0);
            setOpen(true);
          }}
          aria-label={`${title} — open ${album.length} ${
            album.length === 1 ? "image" : "images"
          }`}
          className={`group relative mx-auto block overflow-hidden border border-line bg-panel transition-transform duration-500 hover:-translate-y-1 ${
            phone
              ? "w-[168px] rounded-[1.5rem] md:w-[188px]"
              : "w-full rounded-lg"
          }`}
        >
          <span
            className={`relative block ${phone ? "aspect-[390/844]" : "aspect-[16/10]"}`}
          >
            <Image
              src={mockup.src}
              alt={mockup.alt}
              fill
              sizes={phone ? "200px" : "(min-width: 1024px) 420px, 92vw"}
              className="object-cover object-top"
            />
          </span>

          <span
            className="pointer-events-none absolute inset-0 border opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ borderColor: accent }}
          />
        </button>

        <p className="label mt-4 text-center">
          {album.length > 1 ? `${album.length} screens — click to open` : "Click to open"}
        </p>
      </div>

      {open && (
        <Lightbox
          shots={album}
          index={index}
          onIndex={setIndex}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
