import { person } from "@/lib/content";
import Reveal from "./Reveal";

const links = [
  { label: "Email", value: person.email, href: `mailto:${person.email}` },
  { label: "LinkedIn", value: person.linkedinHandle, href: person.linkedin },
  { label: "GitHub", value: person.githubHandle, href: person.github },
  { label: "CV — one page", value: "PDF ↓", href: person.cv, download: true },
  {
    label: "CV — Europass",
    value: "PDF ↓",
    href: person.cvEuropass,
    download: true,
  },
  { label: "Based in", value: person.location, href: null },
];

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative">
      <div className="mx-auto max-w-[1320px] px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="eyebrow">
            <span className="text-accent">08</span>
            <span aria-hidden>/</span>
            <span>Contact</span>
          </p>

          <h2 id="contact-heading" className="h-section mt-7">
            Write to me.
          </h2>

          <p className="mt-7 max-w-xl text-[1.0625rem] leading-relaxed text-muted text-pretty">
            I read everything. If you have an ERP report nobody trusts, a
            spreadsheet four people maintain by hand, or a product that needs
            building properly — tell me what it is and I will tell you how I
            would approach it.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-x-10 border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link, i) => (
            <li key={link.label}>
              <Reveal delay={i * 55}>
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.download ? undefined : "_blank"}
                    rel={link.download ? undefined : "noreferrer"}
                    download={link.download}
                    className="group flex flex-col gap-3 border-b border-line py-6 transition-colors duration-300 hover:border-accent"
                  >
                    <span className="label transition-colors duration-300 group-hover:text-accent">
                      {link.label}
                    </span>
                    <span className="break-words text-[1rem] leading-snug text-content">
                      {link.value}
                    </span>
                  </a>
                ) : (
                  <div className="flex flex-col gap-3 border-b border-line py-6">
                    <span className="label">{link.label}</span>
                    <span className="text-[1rem] leading-snug text-content">
                      {link.value}
                    </span>
                  </div>
                )}
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={120}>
          <div className="mt-16 flex flex-col gap-3 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="label">
              © {person.name} — {person.locationShort}
            </p>
            <p className="label">Next.js · Tailwind · Vercel</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
