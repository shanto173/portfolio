import { references, referencesNote } from "@/lib/content";
import Reveal from "./Reveal";
import Section from "./Section";

export default function References() {
  return (
    <Section
      id="references"
      num="07"
      label="References"
      title="People who have watched me work."
      lede="Four colleagues who can speak to what I actually did — the ERP work at Tex, the platform work at OmniDevX, and the learning platform at Exzellent."
    >
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {references.map((reference, i) => (
          <li key={reference.name}>
            <Reveal
              delay={i * 70}
              className="flex h-full flex-col border-t border-line pt-6"
            >
              <span
                aria-hidden
                className="grid h-11 w-11 place-items-center border border-line font-mono text-[0.7rem] tracking-[0.1em] text-accent"
              >
                {reference.initials}
              </span>

              <h3 className="mt-5 font-display text-[1.2rem] font-bold leading-snug tracking-tight">
                {reference.name}
              </h3>
              <p className="mt-2 text-[0.9rem] leading-snug text-content-soft">
                {reference.title}
              </p>
              <p className="label mt-2 text-accent">{reference.org}</p>

              <p className="mt-4 flex-1 text-[0.875rem] leading-[1.7] text-muted text-pretty">
                {reference.detail}
              </p>

              {reference.linkedin && (
                <a
                  href={reference.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn mt-5 self-start"
                >
                  LinkedIn ↗
                </a>
              )}
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal delay={120}>
        <p className="mt-12 max-w-xl text-[0.9rem] leading-relaxed text-muted text-pretty">
          {referencesNote}
        </p>
      </Reveal>
    </Section>
  );
}
