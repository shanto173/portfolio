import { impact, impactFooter } from "@/lib/content";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Impact() {
  return (
    <Section
      id="impact"
      num="02"
      label="Impact"
      title="Measured where someone checks it afterwards."
      alt
    >
      <dl className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {impact.map((item, i) => (
          <Reveal
            key={item.label}
            delay={i * 90}
            className="border-t border-line pt-5"
          >
            <dt className="sr-only">{item.label}</dt>
            <dd>
              <span className="block font-display text-[clamp(3rem,7vw,4.6rem)] leading-none tracking-tight">
                {item.value}
              </span>
              <span className="mt-4 block text-[0.95rem] leading-snug text-ink">
                {item.label}
              </span>
              <span className="mt-3 block text-[0.85rem] leading-relaxed text-muted text-pretty">
                {item.note}
              </span>
            </dd>
          </Reveal>
        ))}
      </dl>

      <Reveal delay={120}>
        <p className="mt-14 max-w-xl font-display text-[1.35rem] leading-snug text-ink-soft md:mt-16">
          {impactFooter}
        </p>
      </Reveal>
    </Section>
  );
}
