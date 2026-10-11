import { projects, smallerProjects } from "@/lib/content";
import Gallery from "./Gallery";
import Reveal from "./Reveal";
import Section from "./Section";

function Tags({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-2 gap-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="label border border-line px-2.5 py-1.5 text-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Work() {
  return (
    <Section
      id="work"
      num="03"
      label="Work"
      title="Four systems, and the small things in between."
    >
      <div className="space-y-24 md:space-y-32">
        {projects.map((project) => (
          <article key={project.id} className="border-t border-line pt-8">
            <div className="grid gap-10 lg:grid-cols-[0.32fr_0.68fr] lg:gap-16">
              <div>
                <Reveal>
                  <span className="label text-accent">{project.num}</span>
                  <h3 className="mt-5 font-display text-[clamp(1.75rem,3.4vw,2.5rem)] leading-tight">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-[0.9rem] leading-relaxed text-muted">
                    {project.org}
                    <span className="mx-2 text-line" aria-hidden>
                      /
                    </span>
                    {project.period}
                  </p>
                </Reveal>

                <Reveal delay={80}>
                  <div className="mt-7">
                    <Tags items={project.stack} />
                  </div>
                </Reveal>
              </div>

              <div>
                <Reveal>
                  <p className="max-w-2xl font-display text-[clamp(1.3rem,2.4vw,1.75rem)] leading-[1.35] text-ink text-pretty">
                    {project.summary}
                  </p>
                </Reveal>

                <Reveal delay={70}>
                  <ul className="mt-8 space-y-5">
                    {project.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-4">
                        <span
                          aria-hidden
                          className="mt-[0.6rem] h-px w-5 shrink-0 bg-accent-soft"
                        />
                        <span className="max-w-2xl text-[0.975rem] leading-[1.75] text-ink-soft text-pretty">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Reveal>

                {project.note && (
                  <Reveal delay={100}>
                    <p className="mt-8 max-w-2xl border-l border-line pl-5 text-[0.85rem] leading-relaxed text-muted text-pretty">
                      {project.note}
                    </p>
                  </Reveal>
                )}

                {project.href && (
                  <Reveal delay={120}>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="label mt-8 inline-block text-ink"
                    >
                      <span className="underline-grow">
                        {project.hrefLabel ?? project.href} ↗
                      </span>
                    </a>
                  </Reveal>
                )}

              </div>
            </div>

            {/* The boards get the full column width — they are dense. */}
            {project.images && (
              <Reveal delay={120} className="mt-14">
                <Gallery images={project.images} />
              </Reveal>
            )}
          </article>
        ))}
      </div>

      <div className="mt-24 border-t border-line pt-8 md:mt-32">
        <Reveal>
          <span className="label text-accent">03.5</span>
          <h3 className="mt-5 max-w-xl font-display text-[clamp(1.5rem,3vw,2.1rem)] leading-tight">
            Smaller things, still in use.
          </h3>
        </Reveal>

        <ul className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {smallerProjects.map((project, i) => (
            <li key={project.title}>
              <Reveal delay={i * 90} className="border-t border-line-soft pt-6">
                <h4 className="font-display text-[1.4rem] leading-snug">
                  {project.title}
                </h4>
                <p className="mt-4 text-[0.925rem] leading-[1.7] text-muted text-pretty">
                  {project.summary}
                </p>
                {"href" in project && project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="label mt-5 inline-block text-ink"
                  >
                    <span className="underline-grow">
                      {project.hrefLabel ?? project.href} ↗
                    </span>
                  </a>
                )}
                <div className="mt-6">
                  <Tags items={project.stack} />
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
