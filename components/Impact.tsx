import { impact, impactFooter } from "@/lib/content";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Impact() {
  return (
    <Section
      id="impact"
      num="03"
      label="Impact"
      title="Measured in production."
    >
      <dl className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {impact.map((item, i) => (
          <Reveal key={item.label} delay={i * 80}>
            <dt className="sr-only">{item.label}</dt>
            <dd>
              <span className="block font-display text-[clamp(3rem,6.5vw,4.5rem)] font-bold leading-none tracking-[-0.04em]">
                {item.value}
              </span>
              <span className="mt-4 block text-[0.95rem] font-medium leading-snug text-content">
                {item.label}
              </span>
              <span className="label mt-3 block leading-[1.6]">
                {item.highlight ? (
                  <>
                    {item.note.split(item.highlight)[0]}
                    <span className="text-accent">{item.highlight}</span>
                    {item.note.split(item.highlight)[1]}
                  </>
                ) : (
                  item.note
                )}
              </span>
            </dd>
          </Reveal>
        ))}
      </dl>

      <Reveal delay={120}>
        <p className="mt-16 max-w-2xl font-display text-[1.25rem] font-semibold leading-snug tracking-tight text-content-soft md:text-[1.5rem]">
          {impactFooter}
        </p>
      </Reveal>
    </Section>
  );
}
