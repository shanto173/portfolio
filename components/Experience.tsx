import { experience } from "@/lib/content";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Experience() {
  return (
    <Section
      id="experience"
      num="04"
      label="Experience"
      title="Where it shipped."
      alt
    >
      <ol className="space-y-16 md:space-y-20">
        {experience.map((role) => (
          <li key={`${role.org}-${role.period}`}>
            <Reveal className="grid gap-6 border-t border-line pt-7 md:grid-cols-[0.28fr_0.72fr] md:gap-12">
              <div>
                <p className="label text-ink">{role.period}</p>
                <p className="mt-3 text-[0.85rem] leading-relaxed text-muted">
                  {role.place}
                </p>
              </div>

              <div>
                <h3 className="font-display text-[clamp(1.4rem,2.6vw,1.95rem)] leading-tight">
                  {role.role}
                </h3>
                <p className="mt-2 text-[0.95rem] text-accent">{role.org}</p>

                <ul className="mt-6 space-y-4">
                  {role.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-4">
                      <span
                        aria-hidden
                        className="mt-[0.6rem] h-px w-5 shrink-0 bg-accent-soft"
                      />
                      <span className="max-w-2xl text-[0.95rem] leading-[1.75] text-ink-soft text-pretty">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                {"sub" in role && role.sub && (
                  <p className="mt-6 text-[0.825rem] leading-relaxed text-faint">
                    {role.sub}
                  </p>
                )}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
