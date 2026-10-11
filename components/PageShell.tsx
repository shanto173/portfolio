import Link from "next/link";
import type { ReactNode } from "react";
import { person } from "@/lib/content";
import Cursor from "./Cursor";
import ScrollProgress from "./ScrollProgress";
import ThemeToggle from "./ThemeToggle";

/** The frame every page other than the home page sits in. */
export default function PageShell({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  children: ReactNode;
}) {
  return (
    <>
      <ScrollProgress />
      <Cursor />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-surface/90 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-[1320px] items-center justify-between gap-5 px-5 md:px-8">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <span className="grid h-7 w-7 place-items-center border border-line font-mono text-[0.6rem] tracking-[0.1em]">
              {person.monogram}
            </span>
            <span className="label hidden text-content sm:inline">
              {person.name}
            </span>
          </Link>

          <div className="flex shrink-0 items-center gap-2">
            <Link href="/" className="btn">
              ← Back
            </Link>
            <a href={person.cv} download className="btn hidden sm:inline-flex">
              CV ↓
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="relative z-10">
        <div className="mx-auto max-w-[1320px] px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-36">
          <p className="eyebrow">
            <span className="text-accent">{eyebrow}</span>
          </p>
          <h1 className="h-section mt-7 max-w-4xl text-balance">{title}</h1>
          {lede && (
            <p className="mt-7 max-w-2xl text-[1.0625rem] leading-relaxed text-muted text-pretty">
              {lede}
            </p>
          )}

          <div className="mt-16 md:mt-20">{children}</div>
        </div>
      </main>

      <footer className="relative z-10 border-t border-line">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-4 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
          <p className="label">
            © {person.name} — {person.locationShort}
          </p>
          <div className="flex flex-wrap gap-2">
            <Link href="/" className="btn">
              Home
            </Link>
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
          </div>
        </div>
      </footer>
    </>
  );
}
