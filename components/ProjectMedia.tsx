"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Shot } from "@/lib/content";
import Lightbox from "./Lightbox";

type Props = {
  album: Shot[];
  accent: string;
  shape: "phone" | "screen";
  title: string;
  slug: string;
};

const DWELL_MS = 2800;

/**
 * The device mockup on a project row. It cycles through that project's real
 * screens while it is on-screen — a loop built from the screens themselves
 * rather than a recording — and pauses the moment you point at it.
 */
export default function ProjectMedia({
  album,
  accent,
  shape,
  title,
  slug,
}: Props) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [shown, setShown] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useRef(false);
  const paused = useRef(false);

  const phone = shape === "phone";
  const many = album.length > 1;

  // Only animate while the row is actually visible and nobody is pointing at it.
  useEffect(() => {
    if (!many) return;
    const el = wrapRef.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        inView.current = entry.isIntersecting;
      },
      { threshold: 0.35 },
    );
    io.observe(el);

    const timer = window.setInterval(() => {
      if (inView.current && !paused.current) {
        setShown((s) => (s + 1) % album.length);
      }
    }, DWELL_MS);

    return () => {
      io.disconnect();
      clearInterval(timer);
    };
  }, [album.length, many]);

  return (
    <>
      <div
        ref={wrapRef}
        className="relative"
        onPointerEnter={() => {
          paused.current = true;
        }}
        onPointerLeave={() => {
          paused.current = false;
        }}
      >
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
            setIndex(shown);
            setOpen(true);
          }}
          aria-label={`${title} — open ${album.length} ${
            album.length === 1 ? "image" : "images"
          }`}
          className={`group relative mx-auto block overflow-hidden border border-line bg-panel transition-transform duration-500 hover:-translate-y-1 ${
            phone ? "w-[168px] rounded-[1.5rem] md:w-[188px]" : "w-full rounded-lg"
          }`}
        >
          <span
            className={`relative block ${phone ? "aspect-[390/844]" : "aspect-[16/10]"}`}
          >
            {album.map((s, i) => (
              <Image
                key={s.src}
                src={s.src}
                alt={i === 0 ? s.alt : ""}
                aria-hidden={i !== 0}
                fill
                sizes={phone ? "200px" : "(min-width: 1024px) 420px, 92vw"}
                className={`object-cover object-top transition-opacity duration-700 ${
                  i === shown ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </span>

          <span
            className="pointer-events-none absolute inset-0 border opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ borderColor: accent }}
          />
        </button>

        {/* Which screen is showing, and a way to jump straight to one. */}
        {many && (
          <div className="mt-4 flex items-center justify-center gap-1.5">
            {album.map((s, i) => (
              <button
                key={s.src}
                type="button"
                onClick={() => setShown(i)}
                aria-label={`Show screen ${i + 1} of ${album.length}`}
                className="group/dot p-1"
              >
                <span
                  className="block h-px w-6 transition-colors duration-300"
                  style={{
                    backgroundColor: i === shown ? accent : "var(--line)",
                  }}
                />
              </button>
            ))}
          </div>
        )}

        <p className="label mt-3 text-center">
          {many ? `${album.length} screens` : "1 screen"}
        </p>

        <Link
          href={`/work/${slug}`}
          className="btn mt-4 flex w-full justify-center"
        >
          Case study ↗
        </Link>
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
