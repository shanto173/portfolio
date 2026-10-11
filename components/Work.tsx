import { projects } from "@/lib/content";
import ProjectMedia from "./ProjectMedia";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Work() {
  return (
    <Section
      id="projects"
      num="04"
      label="Projects"
      title="Five systems, five worlds."
      alt
    >
      <div>
        {projects.map((project, i) => (
          <article
            key={project.id}
            className={`border-b border-line py-12 md:py-16 ${
              i === 0 ? "border-t" : ""
            }`}
          >
            <Reveal className="grid gap-10 lg:grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,22rem)] lg:items-start lg:gap-12">
              <p className="label pt-2" style={{ color: project.accent }}>
                {project.num}
              </p>

              <div className="min-w-0">
                <h3 className="font-display text-[clamp(1.9rem,4.5vw,3rem)] font-bold leading-[1.02] tracking-[-0.035em]">
                  {project.title}
                </h3>

                <p className="label mt-3">
                  {project.org} · {project.period}
                </p>

                <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-content-soft text-pretty">
                  {project.summary}
                </p>

                <ul className="mt-6 space-y-3.5">
                  {project.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3.5">
                      <span
                        aria-hidden
                        className="mt-[0.65rem] h-px w-4 shrink-0"
                        style={{ backgroundColor: project.accent }}
                      />
                      <span className="max-w-2xl text-[0.95rem] leading-[1.75] text-muted text-pretty">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                <p
                  className="label mt-7 leading-[1.9]"
                  style={{ color: project.accent }}
                >
                  {project.tags.join("  ·  ")}
                </p>

                {project.note && (
                  <p className="mt-6 max-w-2xl border-l border-line pl-4 text-[0.825rem] leading-relaxed text-faint text-pretty">
                    {project.note}
                  </p>
                )}

                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="btn mt-7 inline-flex"
                  >
                    {project.hrefLabel ?? "View"} ↗
                  </a>
                )}
              </div>

              {project.album && (
                <ProjectMedia
                  album={project.album}
                  accent={project.accent}
                  shape={project.mockupShape ?? "screen"}
                  title={project.title}
                  slug={project.slug}
                />
              )}
            </Reveal>
          </article>
        ))}
      </div>
    </Section>
  );
}
