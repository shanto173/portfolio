import { education, credentials } from "@/lib/content";
import Reveal from "./Reveal";
import Section from "./Section";

function List({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div className="border-t border-line pt-5">
      <h3 className="label text-accent">{title}</h3>
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
      <ol>
        {education.map((entry, i) => (
          <li key={entry.degree}>
            <Reveal
              className={`grid gap-4 border-b border-line py-8 md:grid-cols-[14rem_1fr] md:gap-10 ${
                i === 0 ? "border-t" : ""
              }`}
            >
              <p className="label text-muted">{entry.period}</p>
              <div>
                <h3 className="font-display text-[1.35rem] font-bold leading-tight tracking-tight md:text-[1.7rem]">
                  {entry.degree}
                </h3>
                <p className="mt-2 text-[0.975rem]">
                  <span className="text-accent">{entry.school}</span>
                  <span className="text-faint"> · {entry.place}</span>
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

      <div className="mt-14 grid gap-9 md:grid-cols-3 md:gap-8">
        <Reveal>
          <List title="Awards" items={credentials.awards} />
        </Reveal>
        <Reveal delay={70}>
          <List title="Certifications" items={credentials.certifications} />
        </Reveal>
        <Reveal delay={140}>
          <List title="Languages" items={credentials.languages} />
        </Reveal>
      </div>
    </Section>
  );
}
