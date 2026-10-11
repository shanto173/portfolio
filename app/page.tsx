import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import Education from "@/components/Education";
import References from "@/components/References";
import Contact from "@/components/Contact";
import { person, hero, experience, education, stack } from "@/lib/content";
import { siteUrl } from "@/lib/site";

/** Tells search engines who this page is about. */
function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    url: siteUrl(),
    image: `${siteUrl()}${person.portrait}`,
    jobTitle: person.role,
    description: hero.headline,
    email: `mailto:${person.email}`,
    sameAs: [person.github, person.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Deggendorf",
      addressCountry: "DE",
    },
    worksFor: experience
      .filter((role) => role.period.includes("present"))
      .map((role) => ({ "@type": "Organization", name: role.org })),
    alumniOf: education.map((entry) => ({
      "@type": "EducationalOrganization",
      name: entry.school,
    })),
    knowsAbout: stack.flatMap((group) => [...group.items]),
  };

  return (
    <script
      type="application/ld+json"
      // The payload is built from this repo's own content, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function Home() {
  return (
    <>
      <PersonSchema />
      <Nav />
      <main>
        <Hero />
        <Impact />
        <Work />
        <Experience />
        <Stack />
        <Education />
        <References />
        <Contact />
      </main>
    </>
  );
}
