"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  tx: number;
  ty: number;
  vx: number;
  vy: number;
  size: number;
  accent: boolean;
};

/**
 * Renders the name as a drifting dust field: the text is drawn offscreen, its
 * filled pixels become particles, and those particles settle onto the letters
 * and scatter away from the pointer.
 *
 * The real heading is a visually-hidden <h1> beside it — this canvas is
 * decoration, and the page still reads correctly without it.
 */
export default function ParticleName({ lines }: { lines: string[] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let particles: Particle[] = [];
    let raf = 0;
    let width = 0;
    let height = 0;
    const pointer = { x: -9999, y: -9999 };

    const styles = () => {
      const cs = getComputedStyle(document.documentElement);
      return {
        content: cs.getPropertyValue("--content").trim() || "#ede9e3",
        accent: cs.getPropertyValue("--accent").trim() || "#e8452a",
      };
    };

    /**
     * Canvas font strings cannot take a CSS variable, and next/font hides the
     * family behind a generated name — so resolve it once, here.
     */
    const fontFamily = () => {
      const v = getComputedStyle(document.documentElement)
        .getPropertyValue("--font-display")
        .trim();
      return v ? `${v}, Archivo, Arial, sans-serif` : "Archivo, Arial, sans-serif";
    };

    const build = () => {
      const rect = wrap.getBoundingClientRect();
      width = Math.max(320, Math.floor(rect.width));
      // A tight block: each line is roughly 0.82 of its own cap height.
      height = Math.floor(width * 0.085 * lines.length * 2.4);

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Draw the text offscreen, then read which pixels it filled.
      const off = document.createElement("canvas");
      off.width = width;
      off.height = height;
      const octx = off.getContext("2d", { willReadFrequently: true });
      if (!octx) return;

      const family = fontFamily();
      const longest = lines.reduce((a, b) => (a.length >= b.length ? a : b));
      // Find the size that makes the longest line fill the width.
      let size = 10;
      for (let s = 10; s < 400; s += 2) {
        octx.font = `800 ${s}px ${family}`;
        if (octx.measureText(longest).width > width * 0.98) break;
        size = s;
      }

      octx.font = `800 ${size}px ${family}`;
      octx.fillStyle = "#fff";
      octx.textBaseline = "middle";
      octx.textAlign = "left";

      const lineH = height / lines.length;
      lines.forEach((line, i) => {
        octx.fillText(line, 0, lineH * i + lineH / 2);
      });

      const data = octx.getImageData(0, 0, width, height).data;

      // Dense enough to read as solid letters, coarse enough to stay cheap.
      const step = Math.max(2, Math.round(width / 360));
      const next: Particle[] = [];
      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          if (data[(y * width + x) * 4 + 3] > 128) {
            next.push({
              x: Math.random() * width,
              y: Math.random() * height,
              tx: x + (Math.random() - 0.5) * step,
              ty: y + (Math.random() - 0.5) * step,
              vx: 0,
              vy: 0,
              size: Math.random() < 0.22 ? 2 : 1.3,
              accent: Math.random() < 0.035,
            });
          }
        }
      }
      particles = next;
    };

    const draw = () => {
      const { content, accent } = styles();
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        if (!reduced) {
          // Spring toward the letter.
          p.vx += (p.tx - p.x) * 0.018;
          p.vy += (p.ty - p.y) * 0.018;

          // Shove away from the pointer.
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 9000 && d2 > 0.01) {
            const f = (9000 - d2) / 9000;
            const d = Math.sqrt(d2);
            p.vx += (dx / d) * f * 3.2;
            p.vy += (dy / d) * f * 3.2;
          }

          p.vx *= 0.86;
          p.vy *= 0.86;
          p.x += p.vx;
          p.y += p.vy;
        } else {
          p.x = p.tx;
          p.y = p.ty;
        }

        ctx.fillStyle = p.accent ? accent : content;
        ctx.globalAlpha = p.accent ? 1 : 0.86;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      }
      ctx.globalAlpha = 1;

      if (!reduced) raf = requestAnimationFrame(draw);
    };

    const onPointer = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      pointer.x = e.clientX - r.left;
      pointer.y = e.clientY - r.top;
    };
    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    const start = () => {
      build();
      cancelAnimationFrame(raf);
      draw();
    };

    // Wait for Archivo, or the sampled shapes are the fallback font's.
    if (document.fonts?.ready) {
      document.fonts.ready.then(start).catch(start);
    } else {
      start();
    }

    const ro = new ResizeObserver(() => start());
    ro.observe(wrap);
    canvas.addEventListener("pointermove", onPointer);
    canvas.addEventListener("pointerleave", onLeave);

    // The particle colours come from CSS variables, so a theme change redraws.
    const mo = new MutationObserver(() => {
      if (reduced) draw();
    });
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      mo.disconnect();
      canvas.removeEventListener("pointermove", onPointer);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, [lines]);

  return (
    <div ref={wrapRef} className="w-full">
      <canvas ref={canvasRef} aria-hidden className="block w-full touch-none" />
    </div>
  );
}
