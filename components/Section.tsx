import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  id: string;
  num: string;
  label: string;
  title?: string;
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
  // The section's heading is its title where there is one, otherwise the label.
  const LabelTag = title ? "span" : "h2";

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={alt ? "bg-paper-2" : undefined}>
      <div className="mx-auto max-w-[1180px] px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <div className="flex items-baseline gap-4 border-t border-line pt-5">
            <span className="label text-accent">{num}</span>
            <LabelTag className="label" id={title ? undefined : `${id}-heading`}>
              {label}
            </LabelTag>
          </div>

          {title && (
            <h2
              id={`${id}-heading`}
              className="mt-10 max-w-3xl font-display text-[clamp(1.9rem,4.4vw,3.15rem)] leading-[1.1] text-balance"
            >
              {title}
            </h2>
          )}

          {lede && (
            <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-muted text-pretty">
              {lede}
            </p>
          )}
        </Reveal>

        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  );
}
