import Image from "next/image";
import { person, hero, boot } from "@/lib/content";
import ParticleName from "./ParticleName";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="system" aria-labelledby="system-heading" className="relative">
      <div className="mx-auto max-w-[1320px] px-5 pb-20 pt-24 md:px-8 md:pb-28 md:pt-28">
        <Reveal>
          <p className="eyebrow">
            <span className="text-accent">01</span>
            <span aria-hidden>/</span>
            <span>System</span>
          </p>
        </Reveal>

        <h1 id="system-heading" className="sr-only">
          {person.name} — {person.role}
        </h1>

        <div className="mt-10 md:mt-14">
          <ParticleName lines={["ARIFUL", "ISLAM"]} />
        </div>

        <div className="mt-10 grid gap-10 border-t border-line pt-8 lg:grid-cols-[1.6fr_1fr] lg:gap-16 lg:pt-10">
          {/* Grid items default to min-width:auto, which stops the track ever
              shrinking below its content. These two need to shrink on a phone. */}
          <Reveal className="min-w-0">
            <p className="max-w-2xl text-[1.0625rem] leading-relaxed text-content-soft text-pretty md:text-[1.1875rem]">
              {hero.lede}{" "}
              <span className="text-accent">{hero.ledeAccent}</span>
              {hero.ledeRest}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={`mailto:${person.email}`} className="btn btn-solid">
                Write to me
              </a>
              <a href={person.cv} download className="btn">
                Download CV ↓
              </a>
              <a href="#projects" className="btn">
                See the work →
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="min-w-0">
            <div className="flex items-start gap-5">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden border border-line md:h-24 md:w-24">
                <Image
                  src={person.portrait}
                  alt={`${person.name}, software developer`}
                  fill
                  priority
                  sizes="96px"
                  className="object-cover"
                />
              </div>

              <dl className="min-w-0 flex-1 space-y-2.5">
                {boot.map((row) => (
                  <div key={row.label} className="flex items-baseline gap-3">
                    <dt className="label w-20 shrink-0">{row.label}</dt>
                    <dd className="label min-w-0 flex-1 truncate text-content-soft">
                      {row.value}
                    </dd>
                  </div>
                ))}
                <div className="flex items-baseline gap-3 pt-1">
                  <dt className="label w-20 shrink-0">Status</dt>
                  <dd className="label flex min-w-0 flex-1 flex-wrap items-center gap-x-2 gap-y-1.5 text-content">
                    <span
                      aria-hidden
                      className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span className="whitespace-nowrap">{person.status}</span>
                    <span className="whitespace-nowrap">
                      · {person.locationShort}
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
