import { experience } from "@/lib/content";
import Reveal from "./Reveal";
import Section from "./Section";

/**
 * Laid out the way LinkedIn lays out a work history: a company tile, the role,
 * the company, dates and duration, the place, then what actually happened —
 * with nested positions hanging off the company that held them.
 */
export default function Experience() {
  return (
    <Section
      id="experience"
      num="02"
      label="Experience"
      title="Where it shipped."
      lede="Four years from analyst to developer — ERP dashboards on a factory floor, an encrypted platform, and a learning platform in Germany."
      alt
    >
      <ol className="space-y-0">
        {experience.map((role, i) => (
          <li key={role.id}>
            <Reveal
              className={`grid gap-5 py-10 md:grid-cols-[auto_1fr] md:gap-8 ${
                i === 0 ? "border-t border-line pt-10" : ""
              } border-b border-line`}
            >
              {/* Company tile */}
              <div
                aria-hidden
                className="grid h-14 w-14 shrink-0 place-items-center border border-line bg-panel font-display text-lg font-bold tracking-tight"
                style={{ color: role.accent }}
              >
                {role.orgShort}
              </div>

              <div className="min-w-0">
                <h3 className="font-display text-[1.6rem] font-bold leading-tight tracking-tight md:text-[2rem]">
                  {role.title}
                </h3>

                <p className="mt-1.5 text-[1rem] text-content-soft">
                  {role.org}
                  <span className="text-faint"> · {role.type}</span>
                </p>

                <p className="label mt-3 text-muted">
                  {role.period} · {role.duration}
                </p>
                <p className="label mt-2">{role.place}</p>

                {role.sub && (
                  <ol className="mt-6 space-y-3 border-l pl-5" style={{ borderColor: role.accent }}>
                    {role.sub.map((s) => (
                      <li key={s.title + s.period}>
                        <p className="text-[0.95rem] text-content">{s.title}</p>
                        <p className="label mt-1.5">
                          {s.period} · {s.place}
                        </p>
                      </li>
                    ))}
                  </ol>
                )}

                <ul className="mt-6 space-y-3.5">
                  {role.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3.5">
                      <span
                        aria-hidden
                        className="mt-[0.65rem] h-px w-4 shrink-0"
                        style={{ backgroundColor: role.accent }}
                      />
                      <span className="max-w-3xl text-[0.95rem] leading-[1.75] text-muted text-pretty">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-x-2 gap-y-2">
                  {role.skills.map((skill) => (
                    <li
                      key={skill}
                      className="label border border-line px-2.5 py-1.5 text-muted"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
