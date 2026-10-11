"use client";

import { useEffect, useState } from "react";
import { person, sections } from "@/lib/content";

export default function Nav() {
  const [active, setActive] = useState<string>(sections[0].id);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      setScrolled(window.scrollY > 24);

      // The active section is the last one whose top has passed under the bar.
      let current: string = sections[0].id;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.getBoundingClientRect().top <= 140) current = section.id;
      }

      // At the very bottom, the last section wins however short it is.
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

  // Close the mobile menu on Escape, and stop the page scrolling behind it.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  return (
    <>
      <a
        href="#profile"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[70] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled
            ? "border-b border-line bg-paper/85 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <nav
          aria-label="Sections"
          className="mx-auto flex h-16 max-w-[1180px] items-center justify-between gap-6 px-6 md:h-[4.5rem] md:px-10"
        >
          <a
            href="#profile"
            className="font-display text-[1.15rem] leading-none tracking-tight whitespace-nowrap"
          >
            {person.name}
          </a>

          <ul className="hidden items-center gap-6 lg:flex">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={active === section.id ? "true" : undefined}
                  className={`label transition-colors duration-300 hover:text-ink ${
                    active === section.id ? "text-ink" : ""
                  }`}
                >
                  <span
                    className={
                      active === section.id ? "text-accent" : "text-accent-soft"
                    }
                  >
                    {section.num}
                  </span>{" "}
                  {section.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={person.cv}
              className="label hidden border border-line px-3 py-2 text-ink transition-colors duration-300 hover:border-ink sm:inline-block"
              download
            >
              CV ↓
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="label border border-line px-3 py-2 text-ink lg:hidden"
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
          className="fixed inset-0 z-[65] flex flex-col bg-paper lg:hidden"
        >
          <div className="flex h-16 items-center justify-between px-6">
            <span className="font-display text-[1.15rem] leading-none">
              {person.name}
            </span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="label border border-line px-3 py-2 text-ink"
              autoFocus
            >
              Close ✕
            </button>
          </div>

          <ul className="flex-1 overflow-y-auto px-6 pb-10 pt-4">
            {sections.map((section) => (
              <li key={section.id} className="border-t border-line-soft">
                <a
                  href={`#${section.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-baseline gap-4 py-4"
                >
                  <span className="label text-accent">{section.num}</span>
                  <span className="font-display text-2xl">{section.label}</span>
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
                <span className="font-display text-2xl">Download CV</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
