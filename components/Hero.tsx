import Image from "next/image";
import { person, hero, about } from "@/lib/content";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="profile" aria-labelledby="profile-heading">
      <div className="mx-auto max-w-[1180px] px-6 pb-20 pt-28 md:px-10 md:pb-28 md:pt-40">
        <Reveal>
          <div className="flex items-baseline gap-4 border-t border-line pt-5">
            <span className="label text-accent">01</span>
            <span className="label">Profile</span>
            <span className="label ml-auto hidden sm:inline">
              {person.location}
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-14 lg:mt-16 lg:grid-cols-[1.5fr_0.8fr] lg:gap-20">
          <div>
            <Reveal>
              <h1
                id="profile-heading"
                className="max-w-[16ch] font-display text-[clamp(2.6rem,7.2vw,5.1rem)] leading-[1.02] text-balance"
              >
                {hero.headlineLead}{" "}
                <em className="not-italic text-accent">{hero.headlineEmphasis}</em>
              </h1>
            </Reveal>

            <Reveal delay={90}>
              <p className="mt-9 max-w-xl text-[1.125rem] leading-relaxed text-ink-soft text-pretty">
                {hero.standfirst}
              </p>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3">
                <span className="inline-flex items-center gap-2 label text-ink">
                  <span
                    aria-hidden
                    className="inline-block h-1.5 w-1.5 rounded-full bg-accent"
                  />
                  {person.status}
                </span>
                <span className="label">{person.disciplines}</span>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${person.email}`}
                  className="label border border-ink bg-ink px-5 py-3 text-paper transition-opacity duration-300 hover:opacity-85"
                >
                  Write to me
                </a>
                <a
                  href={person.cv}
                  download
                  className="label border border-line px-5 py-3 text-ink transition-colors duration-300 hover:border-ink"
                >
                  Download CV ↓
                </a>
                <a
                  href="#work"
                  className="label border border-transparent px-2 py-3 text-ink"
                >
                  <span className="underline-grow">See the work →</span>
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:pt-3">
            <figure>
              <div className="relative aspect-[4/5] w-full max-w-[340px] overflow-hidden bg-paper-3 ring-1 ring-line lg:max-w-none">
                <Image
                  src={person.portrait}
                  alt={`${person.name}, software developer`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 340px, (min-width: 640px) 340px, 72vw"
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="mt-4 max-w-[340px] label leading-[1.7] lg:max-w-none">
                {person.name} — {person.location}
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-8 border-t border-line pt-10 md:mt-28 md:grid-cols-3 md:gap-12">
          {about.map((paragraph, i) => (
            <Reveal key={i} delay={i * 80}>
              <p className="text-[0.975rem] leading-[1.75] text-muted text-pretty">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
