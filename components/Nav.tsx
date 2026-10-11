"use client";

import { useEffect, useState } from "react";
import { person, sections } from "@/lib/content";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const [active, setActive] = useState<string>(sections[0].id);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      setScrolled(window.scrollY > 24);

      let current: string = sections[0].id;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.getBoundingClientRect().top <= 140) current = section.id;
      }

      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 8;
      setActive(atBottom ? sections[sections.length - 1].id : current);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <a
        href="#system"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[80] focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled
            ? "border-b border-line bg-surface/90 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <nav
          aria-label="Sections"
          className="mx-auto flex h-16 max-w-[1320px] items-center justify-between gap-5 px-5 md:px-8"
        >
          <a href="#system" className="flex shrink-0 items-center gap-3">
            <span className="grid h-7 w-7 place-items-center border border-line font-mono text-[0.6rem] tracking-[0.1em] text-content">
              {person.monogram}
            </span>
            <span className="label hidden text-content sm:inline">
              {person.name}
            </span>
          </a>

          <ul className="hidden items-center gap-5 lg:flex">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={active === section.id ? "true" : undefined}
                  title={section.label}
                  className={`label border-b-2 pb-1 transition-colors duration-300 hover:text-content ${
                    active === section.id
                      ? "border-accent text-content"
                      : "border-transparent"
                  }`}
                >
                  {section.num}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-2">
            <a href={person.cv} download className="btn hidden sm:inline-flex">
              CV ↓
            </a>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="btn lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              Menu
            </button>
          </div>
        </nav>
      </header>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[70] flex flex-col bg-surface lg:hidden"
        >
          <div className="flex h-16 items-center justify-between px-5">
            <span className="label text-content">{person.name}</span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="btn"
              autoFocus
            >
              Close ✕
            </button>
          </div>

          <ul className="flex-1 overflow-y-auto px-5 pb-10">
            {sections.map((section) => (
              <li key={section.id} className="border-t border-line-soft">
                <a
                  href={`#${section.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-baseline gap-4 py-4"
                >
                  <span className="label text-accent">{section.num}</span>
                  <span className="font-display text-2xl font-bold tracking-tight">
                    {section.label}
                  </span>
                </a>
              </li>
            ))}
            <li className="border-t border-line-soft">
              <a
                href={person.cv}
                download
                onClick={() => setMenuOpen(false)}
                className="flex items-baseline gap-4 py-4"
              >
                <span className="label text-accent">↓</span>
                <span className="font-display text-2xl font-bold tracking-tight">
                  Download CV
                </span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
