"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Shot = { src: string; alt: string; caption: string };

export default function Gallery({ images }: { images: Shot[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggers = useRef<(HTMLButtonElement | null)[]>([]);

  const close = useCallback(() => {
    setOpen((current) => {
      if (current !== null) triggers.current[current]?.focus();
      return null;
    });
  }, []);

  const step = useCallback(
    (by: number) =>
      setOpen((current) =>
        current === null
          ? current
          : (current + by + images.length) % images.length,
      ),
    [images.length],
  );

  useEffect(() => {
    if (open === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };

    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open, close, step]);

  const current = open === null ? null : images[open];

  return (
    <>
      <ul className="grid gap-6 sm:grid-cols-2">
        {images.map((shot, i) => (
          <li key={shot.src}>
            <figure>
              <button
                type="button"
                ref={(el) => {
                  triggers.current[i] = el;
                }}
                onClick={() => setOpen(i)}
                className="group block w-full cursor-zoom-in overflow-hidden bg-paper-3 ring-1 ring-line transition-shadow duration-500 hover:ring-accent-soft"
                aria-label={`Enlarge: ${shot.caption}`}
              >
                <span className="relative block aspect-[16/9]">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(min-width: 640px) 46vw, 90vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.015]"
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

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          className="fixed inset-0 z-[70] flex flex-col bg-ink/96 px-4 py-4 backdrop-blur-sm md:px-8 md:py-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="flex items-center justify-between gap-4">
            <span className="label text-paper/60">
              {(open ?? 0) + 1} / {images.length}
            </span>
            <div className="flex items-center gap-2">
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    className="label border border-paper/25 px-3 py-2 text-paper/80 transition-colors hover:border-paper/60 hover:text-paper"
                    aria-label="Previous image"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    className="label border border-paper/25 px-3 py-2 text-paper/80 transition-colors hover:border-paper/60 hover:text-paper"
                    aria-label="Next image"
                  >
                    →
                  </button>
                </>
              )}
              <button
                type="button"
                ref={closeRef}
                onClick={close}
                className="label border border-paper/25 px-3 py-2 text-paper/80 transition-colors hover:border-paper/60 hover:text-paper"
              >
                Close ✕
              </button>
            </div>
          </div>

          <div className="relative mt-4 min-h-0 flex-1">
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              fill
              sizes="94vw"
              className="object-contain"
            />
          </div>

          <p className="mx-auto mt-4 max-w-3xl text-center text-[0.85rem] leading-relaxed text-paper/70 text-pretty">
            {current.caption}
          </p>
        </div>
      )}
    </>
  );
}
