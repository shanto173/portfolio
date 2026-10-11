"use client";

import { useState } from "react";
import { faq } from "@/lib/extras";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="border-t border-line">
      {faq.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.q} className="border-b border-line">
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors duration-300 hover:text-accent"
              >
                <span className="font-display text-[1.05rem] font-bold tracking-tight md:text-[1.2rem]">
                  {item.q}
                </span>
                <span
                  aria-hidden
                  className={`shrink-0 text-accent transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={`faq-${i}`}
              hidden={!isOpen}
              className="max-w-2xl pb-6 text-[0.95rem] leading-[1.75] text-muted text-pretty"
            >
              {item.a}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
