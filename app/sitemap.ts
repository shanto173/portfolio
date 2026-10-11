import type { MetadataRoute } from "next";
import { projects } from "@/lib/content";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();

  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/know-me`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/services`, changeFrequency: "monthly", priority: 0.8 },
    ...projects.map((p) => ({
      url: `${base}/work/${p.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
