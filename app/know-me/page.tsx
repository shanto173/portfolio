import type { Metadata } from "next";
import Image from "next/image";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import { person, credentials } from "@/lib/content";
import { knowMe } from "@/lib/extras";

export const metadata: Metadata = {
  title: "Know me",
  description:
    "How Ariful Islam got from compiling spreadsheets in a zipper factory to building ERP dashboards, encrypted platforms and AI systems — and what he is looking for next.",
  alternates: { canonical: "/know-me" },
};

export default function KnowMePage() {
  return (
    <PageShell eyebrow="Know me" title={knowMe.title} lede={knowMe.lede}>
      <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-20">
        <div>
          {knowMe.sections.map((section, i) => (
            <Reveal
              key={section.num}
              delay={i * 50}
              className={`border-b border-line py-10 ${i === 0 ? "border-t" : ""}`}
            >
              <div className="grid gap-5 md:grid-cols-[3rem_minmax(0,1fr)] md:gap-8">
                <p className="label pt-2 text-accent">{section.num}</p>
                <div className="min-w-0">
                  <h2 className="font-display text-[1.5rem] font-bold leading-tight tracking-tight md:text-[2rem]">
                    {section.heading}
                  </h2>
                  <div className="mt-5 space-y-4">
                    {section.body.map((para, j) => (
                      <p
                        key={j}
                        className="max-w-2xl text-[1rem] leading-[1.8] text-muted text-pretty"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="lg:pt-10">
          <div className="relative aspect-[4/5] w-full max-w-[18rem] overflow-hidden border border-line">
            <Image
              src={person.portrait}
              alt={`${person.name}, software developer`}
              fill
              sizes="288px"
              className="object-cover"
            />
          </div>

          <dl className="mt-8 space-y-5">
            <div>
              <dt className="label text-accent">Based in</dt>
              <dd className="mt-2 text-[0.95rem] text-content">
                {person.location}
              </dd>
            </div>
            <div>
              <dt className="label text-accent">Languages</dt>
              <dd className="mt-2 space-y-1.5">
                {credentials.languages.map((l) => (
                  <span
                    key={l}
                    className="block text-[0.9rem] leading-snug text-muted"
                  >
                    {l}
                  </span>
                ))}
              </dd>
            </div>
            <div>
              <dt className="label text-accent">Reach me</dt>
              <dd className="mt-3 flex flex-wrap gap-2">
                <a href={`mailto:${person.email}`} className="btn">
                  Email
                </a>
                <a
                  href={person.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  WhatsApp
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </PageShell>
  );
}
