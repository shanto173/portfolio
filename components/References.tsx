import { references, referencesNote } from "@/lib/content";
import Reveal from "./Reveal";
import Section from "./Section";

function initials(name: string) {
  return name
    .replace(/^Md\.\s*/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

export default function References() {
  return (
    <Section
      id="references"
      num="07"
      label="References"
      title="People who have watched me work."
      lede="Three colleagues who can speak to what I actually did — the ERP work at Tex, and the platform work at OmniDevX."
    >
      <ul className="grid gap-10 md:grid-cols-3 md:gap-8">
        {references.map((reference, i) => (
          <li key={reference.name}>
            <Reveal
              delay={i * 90}
              className="flex h-full flex-col border-t border-line pt-6"
            >
              <span
                aria-hidden
                className="flex h-12 w-12 items-center justify-center rounded-full border border-line font-display text-[1.05rem] text-accent"
              >
                {initials(reference.name)}
              </span>

              <h3 className="mt-6 font-display text-[1.45rem] leading-snug">
                {reference.name}
              </h3>
              <p className="mt-2 text-[0.95rem] leading-snug text-ink-soft">
                {reference.title}
              </p>
              <p className="mt-1 text-[0.95rem] leading-snug text-accent">
                {reference.org}
              </p>

              <p className="mt-5 flex-1 text-[0.9rem] leading-[1.7] text-muted text-pretty">
                {reference.detail}
              </p>

              <a
                href={reference.linkedin}
                target="_blank"
                rel="noreferrer"
                className="label mt-6 inline-block self-start text-ink"
              >
                <span className="underline-grow">LinkedIn ↗</span>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal delay={120}>
        <p className="mt-14 max-w-xl text-[0.9rem] leading-relaxed text-muted text-pretty">
          {referencesNote}
        </p>
      </Reveal>
    </Section>
  );
}
