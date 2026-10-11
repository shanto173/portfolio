import { stack } from "@/lib/content";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Stack() {
  return (
    <Section
      id="stack"
      num="05"
      label="Stack"
      title="What I reach for."
      lede="Roughly in the order I use it. Everything here has been in something that went to production, not only in a tutorial."
    >
      <dl className="grid gap-x-12 gap-y-10 md:grid-cols-2">
        {stack.map((group, i) => (
          <Reveal
            key={group.label}
            delay={(i % 2) * 70}
            className="border-t border-line pt-5"
          >
            <dt className="label text-ink">{group.label}</dt>
            {/* A flex row so every item is its own wrapping unit — the dotted
                separators are decoration and carry no break opportunity. */}
            <dd className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1.5 text-[1.0625rem] leading-[1.6] text-muted">
              {group.items.map((item, j) => (
                <span key={item} className="inline-flex items-baseline">
                  {item}
                  {j < group.items.length - 1 && (
                    <span className="ml-2 text-line" aria-hidden>
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
