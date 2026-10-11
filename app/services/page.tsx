import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Faq from "@/components/Faq";
import Reveal from "@/components/Reveal";
import { person } from "@/lib/content";
import { services } from "@/lib/extras";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Odoo ERP development, data pipelines, AI and LLM integration, React Native apps, backends, web dashboards, e-commerce and real-time encrypted systems.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <PageShell
      eyebrow="Services"
      title="Tell me what to build."
      lede="Eight things I am actually hired for, with what each one involves and where it has already shipped."
    >
      <ol>
        {services.map((service, i) => (
          <li key={service.slug} id={service.slug}>
            <Reveal
              delay={i * 40}
              className={`grid gap-6 border-b border-line py-12 md:grid-cols-[4rem_minmax(0,1fr)] md:gap-10 ${
                i === 0 ? "border-t" : ""
              }`}
            >
              <p className="label pt-2 text-accent">{service.num}</p>

              <div className="min-w-0">
                <h2 className="font-display text-[1.6rem] font-bold leading-tight tracking-tight md:text-[2.25rem]">
                  {service.title}
                </h2>

                <p className="mt-4 max-w-2xl text-[1.0625rem] leading-relaxed text-content-soft text-pretty">
                  {service.blurb}
                </p>

                <ul className="mt-7 space-y-3.5">
                  {service.detail.map((d, j) => (
                    <li key={j} className="flex gap-3.5">
                      <span
                        aria-hidden
                        className="mt-[0.65rem] h-px w-4 shrink-0 bg-accent"
                      />
                      <span className="max-w-2xl text-[0.95rem] leading-[1.75] text-muted text-pretty">
                        {d}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="mt-7 max-w-2xl border-l border-accent pl-4 text-[0.9rem] leading-relaxed text-content-soft text-pretty">
                  {service.proof}
                </p>

                <p className="label mt-6 leading-[1.9] text-faint">
                  {service.tags.join("  ·  ")}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <div className="mt-20">
        <Reveal>
          <p className="eyebrow">
            <span className="text-accent">FAQ</span>
            <span aria-hidden>/</span>
            <span>Questions people ask</span>
          </p>
        </Reveal>
        <Reveal delay={60}>
          <div className="mt-8">
            <Faq />
          </div>
        </Reveal>
      </div>

      <Reveal delay={80}>
        <div className="mt-20 border-t border-line pt-10">
          <h2 className="font-display text-[1.75rem] font-bold tracking-tight md:text-[2.5rem]">
            Tell me the idea.
          </h2>
          <p className="mt-4 max-w-xl text-[1rem] leading-relaxed text-muted text-pretty">
            A paragraph about the problem is enough. If it is a fit I will come
            back with how I would build it and roughly what it takes.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={`mailto:${person.email}`} className="btn btn-solid">
              Write to me
            </a>
            <a
              href={person.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              WhatsApp {person.whatsappLabel}
            </a>
          </div>
        </div>
      </Reveal>
    </PageShell>
  );
}
