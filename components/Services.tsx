import Link from "next/link";
import { services } from "@/lib/extras";
import Faq from "./Faq";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Services() {
  return (
    <Section
      id="services"
      num="05"
      label="Services"
      title="Tell me what to build."
      lede="Eight things I am actually hired for. Each one has shipped at least once."
      alt
    >
      <ul className="grid gap-px border border-line bg-line md:grid-cols-2">
        {services.map((service, i) => (
          <li key={service.slug} className="bg-surface-2">
            <Reveal delay={(i % 2) * 60} className="h-full p-6 md:p-8">
              <p className="label text-accent">{service.num}</p>
              <h3 className="mt-4 font-display text-[1.25rem] font-bold leading-snug tracking-tight md:text-[1.45rem]">
                {service.title}
              </h3>
              <p className="mt-3 text-[0.925rem] leading-[1.7] text-muted text-pretty">
                {service.blurb}
              </p>
              <p className="label mt-5 leading-[1.9] text-faint">
                {service.tags.join("  ·  ")}
              </p>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal delay={80}>
        <Link href="/services" className="btn mt-10 inline-flex">
          All services, in detail ↗
        </Link>
      </Reveal>

      <div className="mt-20 md:mt-28">
        <Reveal>
          <p className="eyebrow">
            <span className="text-accent">05.9</span>
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
    </Section>
  );
}
