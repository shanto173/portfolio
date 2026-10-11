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
];

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-ink text-paper">
      <div className="mx-auto max-w-[1180px] px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <div className="flex items-baseline gap-4 border-t border-paper/20 pt-5">
            <span className="label text-accent-soft">08</span>
            <span className="label text-paper/50">Contact</span>
          </div>

          <h2
            id="contact-heading"
            className="mt-10 max-w-3xl font-display text-[clamp(2.4rem,6vw,4.4rem)] leading-[1.05] text-balance"
          >
            Write to me.
          </h2>

          <p className="mt-7 max-w-xl text-[1.0625rem] leading-relaxed text-paper/65 text-pretty">
            I read everything. If you have an ERP report nobody trusts, a
            spreadsheet that four people maintain by hand, or a product that
            needs building properly — tell me what it is and I will tell you how
            I would approach it.
          </p>
        </Reveal>

        <ul className="mt-16 grid gap-x-12 border-t border-paper/15 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link, i) => (
            <li key={link.label}>
              <Reveal delay={i * 70}>
                <a
                  href={link.href}
                  target={link.download ? undefined : "_blank"}
                  rel={link.download ? undefined : "noreferrer"}
                  download={link.download}
                  className="group flex flex-col gap-3 border-b border-paper/15 py-6 transition-colors duration-300 hover:border-paper/50"
                >
                  <span className="label text-paper/45 transition-colors duration-300 group-hover:text-accent-soft">
                    {link.label}
                  </span>
                  <span className="break-words text-[1.05rem] leading-snug text-paper/90">
                    {link.value}
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={120}>
          <div className="mt-20 flex flex-col gap-4 border-t border-paper/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="label text-paper/40">
              © {person.name} — {person.location}
            </p>
            <p className="label text-paper/40">
              Next.js · Tailwind CSS · deployed on Vercel
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
