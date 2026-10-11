"use client";

import { useEffect, useState } from "react";
import { boot, person } from "@/lib/content";

/** Matches the --boot-step used by the keyframes in globals.css. */
const STEP_MS = 260;
const OUT_MS = STEP_MS * boot.length + 620;

/**
 * The system-boot splash.
 *
 * It is in the server-rendered HTML and animates entirely in CSS, so it runs
 * from the first paint rather than waiting for hydration. React only takes it
 * away afterwards. The inline script in <head> sets data-booted for anyone who
 * has already seen it this tab, and CSS hides it before a frame is drawn.
 *
 * It deliberately does not lock scrolling: the overlay already covers the
 * viewport, and locking the body was stranding scroll-reveals underneath it.
 */
export default function BootScreen() {
  const [gone, setGone] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("booted") === "1";
    } catch {
      /* private mode — show it, it is only a second */
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (seen || reduced) {
      const raf = requestAnimationFrame(() => setGone(true));
      return () => cancelAnimationFrame(raf);
    }

    try {
      sessionStorage.setItem("booted", "1");
    } catch {
      /* nothing to do */
    }

    const a = window.setTimeout(() => setLeaving(true), OUT_MS);
    const b = window.setTimeout(() => setGone(true), OUT_MS + 700);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden
      className={`boot fixed inset-0 z-[100] bg-surface transition-opacity duration-700 ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1320px] flex-col justify-center px-5 md:px-8">
        <p className="label text-faint">
          Initializing system — {person.monogram} / 2026
        </p>

        <dl className="mt-8 max-w-lg space-y-2.5">
          {boot.map((row, i) => (
            <div
              key={row.label}
              className="boot-row flex items-baseline gap-3"
              style={{ "--i": i } as React.CSSProperties}
            >
              <dt className="label w-24 shrink-0 text-content">{row.label}</dt>
              <dd className="label min-w-0 flex-1 overflow-hidden text-line">
                ....................................
              </dd>
              <dd className="boot-ok label shrink-0 text-accent">OK</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 max-w-lg">
          <div className="h-px w-full bg-line">
            <div className="boot-bar h-px origin-left bg-accent" />
          </div>
          <p className="boot-ready label mt-4 text-content">System ready.</p>
        </div>
      </div>
    </div>
  );
}
