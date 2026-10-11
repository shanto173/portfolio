import { stack } from "@/lib/content";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Stack() {
  return (
    <Section
      id="stack"
      num="05"
      label="Stack"
      title="The stack, in depth."
      lede="Everything here has been in something that went to production, not only in a tutorial."
    >
      <dl className="grid gap-x-12 gap-y-9 md:grid-cols-2">
        {stack.map((group, i) => (
          <Reveal
            key={group.label}
            delay={(i % 2) * 60}
            className="border-t border-line pt-5"
          >
            <dt className="label text-accent">{group.label}</dt>
            <dd className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1.5 text-[1.0625rem] leading-[1.6] text-content-soft">
              {group.items.map((item, j) => (
                <span key={item} className="inline-flex items-baseline">
                  {item}
                  {j < group.items.length - 1 && (
                    <span className="ml-2 text-faint" aria-hidden>
                      ·
                    </span>
                  )}
                </span>
              ))}
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
