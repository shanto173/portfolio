import { education, credentials } from "@/lib/content";
import Reveal from "./Reveal";
import Section from "./Section";

function List({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div className="border-t border-line pt-5">
      <h3 className="label text-ink">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="text-[0.95rem] leading-relaxed text-muted">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Education() {
  return (
    <Section
      id="education"
      num="06"
      label="Education"
      title="Studying it as well as doing it."
      alt
    >
      <ol className="space-y-12">
        {education.map((entry) => (
          <li key={entry.degree}>
            <Reveal className="grid gap-5 border-t border-line pt-7 md:grid-cols-[0.28fr_0.72fr] md:gap-12">
              <p className="label text-ink">{entry.period}</p>
              <div>
                <h3 className="font-display text-[clamp(1.35rem,2.4vw,1.8rem)] leading-tight">
                  {entry.degree}
                </h3>
                <p className="mt-2 text-[0.95rem] text-accent">
                  {entry.school}
                  <span className="mx-2 text-line" aria-hidden>
                    /
                  </span>
                  <span className="text-muted">{entry.place}</span>
                </p>
                {"note" in entry && entry.note && (
                  <p className="mt-4 max-w-2xl text-[0.9rem] leading-relaxed text-muted text-pretty">
                    {entry.note}
                  </p>
                )}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
        <Reveal>
          <List title="Awards" items={credentials.awards} />
        </Reveal>
        <Reveal delay={80}>
          <List title="Certifications" items={credentials.certifications} />
        </Reveal>
        <Reveal delay={160}>
          <List title="Languages" items={credentials.languages} />
        </Reveal>
      </div>
    </Section>
  );
}
