"use client";

import Image from "next/image";
import { useState } from "react";
import type { Shot } from "@/lib/content";
import Lightbox from "./Lightbox";

/** Every screen from a project, on its case-study page. */
export default function CaseAlbum({
  album,
  accent,
  title,
}: {
  album: Shot[];
  accent: string;
  title: string;
}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="flex items-baseline justify-between gap-4">
        <p className="label text-accent">
          {album.length} {album.length === 1 ? "screen" : "screens"}
        </p>
        <button
          type="button"
          onClick={() => {
            setIndex(0);
            setOpen(true);
          }}
          className="btn"
        >
          Open album ⤢
        </button>
      </div>

      <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {album.map((shot, i) => (
          <li key={shot.src}>
            <figure className="relative">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 blur-2xl"
                style={{
                  background: `radial-gradient(60% 55% at 50% 45%, ${accent}, transparent 70%)`,
                  opacity: "var(--glow)",
                }}
              />
              <button
                type="button"
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
                aria-label={`Enlarge: ${shot.caption}`}
                className="group block w-full cursor-zoom-in overflow-hidden border border-line bg-panel transition-transform duration-500 hover:-translate-y-1"
              >
                <span className="relative block aspect-[16/10]">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 92vw"
                    className="object-cover object-top"
                  />
                </span>
              </button>
              <figcaption className="mt-3 text-[0.825rem] leading-relaxed text-muted text-pretty">
                {shot.caption}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <p className="sr-only">{title} screens</p>

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
