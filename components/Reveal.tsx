"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Entry = { el: Element; show: () => void };

/**
 * One observer and one scroll listener for the whole page, not sixty.
 *
 * The observer does the work; the scroll sweep is the safety net. An
 * IntersectionObserver can miss an element that is flung past during a fast
 * scroll, a jump to an anchor, or a scroll lock being released — and a missed
 * callback would leave that section invisible for good. The sweep re-checks
 * anything still waiting, so nothing can be stranded.
 */
const pending = new Set<Entry>();
let observer: IntersectionObserver | null = null;
let sweeping = false;
let frame = 0;

function reveal(entry: Entry) {
  pending.delete(entry);
  observer?.unobserve(entry.el);
  entry.show();
}

function sweep() {
  frame = 0;
  const limit = window.innerHeight * 0.96;
  for (const entry of [...pending]) {
    if (entry.el.getBoundingClientRect().top < limit) reveal(entry);
  }
}

function queueSweep() {
  if (!frame) frame = requestAnimationFrame(sweep);
}

function watch(entry: Entry) {
  pending.add(entry);

  if (!observer && typeof IntersectionObserver !== "undefined") {
    observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          for (const p of pending) {
            if (p.el === e.target) reveal(p);
          }
        }
      },
      { rootMargin: "0px 0px -5% 0px", threshold: 0.03 },
    );
  }
  observer?.observe(entry.el);

  if (!sweeping) {
    sweeping = true;
    window.addEventListener("scroll", queueSweep, { passive: true });
    window.addEventListener("resize", queueSweep);
  }
  queueSweep();

  return () => {
    pending.delete(entry);
    observer?.unobserve(entry.el);
  };
}

type Props = {
  children: ReactNode;
  /** Stagger, in milliseconds. */
  delay?: number;
  className?: string;
};

/** Fades its children up the first time they scroll into view. */
export default function Reveal({ children, delay = 0, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return watch({ el, show: () => setShown(true) });
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "reveal-in" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
