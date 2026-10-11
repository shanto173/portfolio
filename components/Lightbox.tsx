"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Shot } from "@/lib/content";

type Props = {
  shots: Shot[];
  index: number;
  onClose: () => void;
  onIndex: (i: number) => void;
};

export default function Lightbox({ shots, index, onClose, onIndex }: Props) {
  const [zoom, setZoom] = useState(false);
  const [nat, setNat] = useState<{ w: number; h: number } | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const shot = shots[index];

  /** Every move to another image starts fitted, scrolled back to the corner. */
  const goTo = useCallback(
    (i: number) => {
      setZoom(false);
      setNat(null);
      scrollRef.current?.scrollTo(0, 0);
      onIndex(i);
    },
    [onIndex],
  );

  const step = useCallback(
    (by: number) => goTo((index + by + shots.length) % shots.length),
    [index, shots.length, goTo],
  );

  /**
   * Freeze the page behind the viewer and put the reader back exactly where
   * they were on the way out. Pinning the body is the only lock that holds on
   * iOS — `overflow: hidden` alone lets the page scroll underneath.
   *
   * This runs on open and close only; changing image must not re-lock.
   */
  useEffect(() => {
    const y = window.scrollY;
    const body = document.body;
    const prev = {
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      overflow: body.style.overflow,
    };

    body.style.position = "fixed";
    body.style.top = `-${y}px`;
    body.style.width = "100%";
    body.style.overflow = "hidden";

    closeRef.current?.focus();

    return () => {
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.width = prev.width;
      body.style.overflow = prev.overflow;
      window.scrollTo(0, y);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, step]);

  const canZoom = nat !== null && nat.w > 900;

  /**
   * Rendered into <body>. A `position: fixed` box is contained by any ancestor
   * with a transform or will-change, and these open from inside an animated
   * reveal — without the portal the viewer would be trapped in the project row
   * instead of covering the screen.
   */
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={shot.caption}
      className="fixed inset-0 z-[90] flex flex-col bg-surface/98 backdrop-blur-sm"
    >
      {/* Bar */}
      <div className="flex shrink-0 items-center gap-3 border-b border-line px-4 py-3 md:px-6">
        <span className="label shrink-0 text-accent">
          {index + 1} / {shots.length}
        </span>
        <p className="label hidden min-w-0 flex-1 truncate text-muted md:block">
          {shot.caption}
        </p>
        <div className="ml-auto flex items-center gap-2 md:ml-0">
          {canZoom && (
            <button
              type="button"
              onClick={() => setZoom((z) => !z)}
              className="btn"
              aria-pressed={zoom}
            >
              {zoom ? "Fit" : "Zoom ⤢"}
            </button>
          )}
          <button ref={closeRef} type="button" onClick={onClose} className="btn">
            Close ✕
          </button>
        </div>
      </div>

      {/* Image — scrollable in both directions once zoomed */}
      <div
        ref={scrollRef}
        className={`relative min-h-0 flex-1 overflow-auto overscroll-contain p-3 md:p-6 ${
          zoom ? "cursor-grab" : ""
        }`}
      >
        <div
          className={zoom ? "relative mx-auto" : "relative mx-auto h-full w-full"}
          style={
            zoom && nat
              ? { width: nat.w, aspectRatio: `${nat.w} / ${nat.h}` }
              : undefined
          }
        >
          <Image
            key={shot.src}
            src={shot.src}
            alt={shot.alt}
            fill
            sizes="100vw"
            priority
            className={zoom ? "object-fill" : "object-contain"}
            onLoad={(e) => {
              const img = e.currentTarget;
              if (img.naturalWidth) {
                setNat({ w: img.naturalWidth, h: img.naturalHeight });
              }
            }}
          />
        </div>
      </div>

      {shots.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 border border-line bg-surface/80 px-3 py-4 text-content backdrop-blur transition-colors hover:border-accent hover:text-accent md:left-4"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next image"
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 border border-line bg-surface/80 px-3 py-4 text-content backdrop-blur transition-colors hover:border-accent hover:text-accent md:right-4"
          >
            →
          </button>
        </>
      )}

      {/* Filmstrip — every image in the album, always reachable */}
      <div className="shrink-0 border-t border-line">
        <p className="label px-4 pt-3 text-muted md:hidden">{shot.caption}</p>
        <ul className="no-bar flex gap-2 overflow-x-auto px-4 py-3 md:px-6">
          {shots.map((s, i) => (
            <li key={s.src} className="shrink-0">
              <button
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show image ${i + 1}: ${s.caption}`}
                aria-current={i === index ? "true" : undefined}
                className={`relative block h-14 w-24 overflow-hidden border transition-colors md:h-16 md:w-28 ${
                  i === index
                    ? "border-accent"
                    : "border-line opacity-55 hover:opacity-100"
                }`}
              >
                <Image
                  src={s.src}
                  alt=""
                  fill
                  sizes="112px"
                  className="object-cover object-top"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>,
    document.body,
  );
}
