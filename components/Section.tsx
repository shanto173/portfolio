import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  id: string;
  num: string;
  label: string;
  title: string;
  lede?: string;
  alt?: boolean;
  children: ReactNode;
};

export default function Section({
  id,
  num,
  label,
  title,
  lede,
  alt = false,
  children,
}: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`relative ${alt ? "bg-surface-2" : ""}`}
    >
      <div className="mx-auto max-w-[1320px] px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="eyebrow">
            <span className="text-accent">{num}</span>
            <span aria-hidden>/</span>
            <span>{label}</span>
          </p>

          <h2 id={`${id}-heading`} className="h-section mt-7 max-w-4xl text-balance">
            {title}
          </h2>

          {lede && (
            <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-muted text-pretty">
              {lede}
            </p>
          )}
        </Reveal>

        <div className="mt-14 md:mt-20">{children}</div>
      </div>
    </section>
  );
}
