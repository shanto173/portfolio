import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import CaseAlbum from "@/components/CaseAlbum";
import Reveal from "@/components/Reveal";
import { person, projects } from "@/lib/content";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { title: project.title, description: project.summary },
  };
}

export default async function CaseStudy({ params }: Params) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <PageShell
      eyebrow={`${project.num} — Case study`}
      title={project.title}
      lede={project.summary}
    >
      <Reveal className="flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-line py-5">
        <span className="label">
          <span className="text-faint">Client</span>{" "}
          <span className="text-content">{project.org}</span>
        </span>
        <span className="label">
          <span className="text-faint">When</span>{" "}
          <span className="text-content">{project.period}</span>
        </span>
        {project.role && (
          <span className="label">
            <span className="text-faint">Role</span>{" "}
            <span className="text-content">{project.role}</span>
          </span>
        )}
      </Reveal>

      {project.outcomes && (
        <Reveal delay={60}>
          <dl className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-3">
            {project.outcomes.map((o) => (
              <div key={o.label}>
                <dt className="sr-only">{o.label}</dt>
                <dd>
                  <span
                    className="block font-display text-[clamp(2.2rem,5vw,3.5rem)] font-bold leading-none tracking-[-0.04em]"
                    style={{ color: project.accent }}
                  >
                    {o.value}
                  </span>
                  <span className="mt-3 block text-[0.9rem] leading-snug text-muted">
                    {o.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      )}

      {project.album && (
        <Reveal delay={80}>
          <div className="mt-16">
            <CaseAlbum
              album={project.album}
              accent={project.accent}
              title={project.title}
            />
          </div>
        </Reveal>
      )}

      {project.story && (
        <div className="mt-20">
          {project.story.map((part, i) => (
            <Reveal
              key={part.heading}
              delay={i * 40}
              className={`grid gap-5 border-b border-line py-10 md:grid-cols-[4rem_minmax(0,1fr)] md:gap-10 ${
                i === 0 ? "border-t" : ""
              }`}
            >
              <p className="label pt-2 text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <div className="min-w-0">
                <h2 className="font-display text-[1.45rem] font-bold leading-tight tracking-tight md:text-[1.9rem]">
                  {part.heading}
                </h2>
                <p className="mt-4 max-w-2xl text-[1rem] leading-[1.8] text-muted text-pretty">
                  {part.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      )}

      <Reveal delay={60}>
        <div className="mt-14">
          <p className="label text-accent">Built with</p>
          <p className="label mt-4 leading-[2]">{project.tags.join("  ·  ")}</p>
          {project.note && (
            <p className="mt-6 max-w-2xl border-l border-line pl-4 text-[0.875rem] leading-relaxed text-faint text-pretty">
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
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-20 border-t border-line pt-10">
          <p className="eyebrow">
            <span className="text-accent">Next</span>
          </p>
          <ul className="mt-7 grid gap-px border border-line bg-line sm:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug} className="bg-surface">
                <Link
                  href={`/work/${o.slug}`}
                  className="group flex h-full flex-col gap-3 p-6 transition-colors duration-300 hover:bg-surface-2"
                >
                  <span className="label" style={{ color: o.accent }}>
                    {o.num}
                  </span>
                  <span className="font-display text-[1.2rem] font-bold leading-snug tracking-tight">
                    {o.title}
                  </span>
                  <span className="label mt-auto text-faint transition-colors group-hover:text-accent">
                    Case study ↗
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href={`mailto:${person.email}`} className="btn btn-solid">
              Write to me
            </a>
            <Link href="/" className="btn">
              ← All work
            </Link>
          </div>
        </div>
      </Reveal>
    </PageShell>
  );
}
