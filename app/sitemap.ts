import { MetadataRoute } from "next";

const BASE_URLS = [
  "https://eduardoaugusto.squareweb.app",
  "https://eduardoaugusto.is-a.dev",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return BASE_URLS.flatMap((BASE_URL) => [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]);
}
