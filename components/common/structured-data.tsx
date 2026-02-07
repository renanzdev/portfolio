"use client";

interface PersonStructuredData {
  "@context": string;
  "@type": string;
  name: string;
  jobTitle: string;
  url: string;
  image?: string;
  sameAs: string[];
  description: string;
}

interface OrganizationStructuredData {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  logo: string;
}

interface PortfolioStructuredData {
  "@context": string;
  "@type": string;
  mainEntityOfPage: string;
  headline: string;
  description: string;
  image: string;
  author: {
    "@type": string;
    name: string;
  };
  dateModified: string;
  datePublished: string;
}

const BASE_URLS = [
  "https://eduardoaugusto.squareweb.app",
  "https://eduardoaugusto.is-a.dev",
];
const BASE_URL = BASE_URLS[0];
const AVATAR_URLS = BASE_URLS.map((url) => `${url}/avatar.png`);
const LOGO_URLS = BASE_URLS.map((url) => `${url}/logo.svg`);
const OG_IMAGE_URLS = BASE_URLS.map((url) => `${url}/og-image.png`);

export function PersonStructuredData() {
  return (
    <>
      {BASE_URLS.map((url, i) => {
        const data: PersonStructuredData = {
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Renan Rodríguez",
          jobTitle: "Desenvolvedor Full-Stack",
          url,
          image: AVATAR_URLS[i],
          sameAs: [
            "https://github.com/d3veduardo",
            "https://instagram.com/eduardoaugustolb",
            "https://twitter.com/the_duh7",
            "https://youtube.com/@eduardo.developer",
          ],
          description:
            "Desenvolvedor apaixonado por criar soluções digitais que fazem a diferença",
        };
        return (
          <script
            key={url}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        );
      })}
    </>
  );
}

export function OrganizationStructuredData() {
  return (
    <>
      {BASE_URLS.map((url, i) => {
        const data: OrganizationStructuredData = {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Renan Rodríguez Portfolio",
          url,
          logo: LOGO_URLS[i],
        };
        return (
          <script
            key={url}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        );
      })}
    </>
  );
}

export function PortfolioStructuredData() {
  // For structured data, use a consistent date to avoid hydration issues
  // Using a static date that represents the last time the site content was modified
  return (
    <>
      {BASE_URLS.map((url, i) => {
        const data: PortfolioStructuredData = {
          "@context": "https://schema.org",
          "@type": "WebSite",
          mainEntityOfPage: url,
          headline: "Renan Rodríguez - Desenvolvedor Front-End",
          description:
            "Portfólio de Renan Rodríguez, desenvolvedor web front-end especializado em React, Next.js e TypeScript",
          image: OG_IMAGE_URLS[i],
          author: {
            "@type": "Person",
            name: "Renan Rodríguez",
          },
          dateModified: "2025-01-01T00:00:00.000Z", // Use a fixed date to prevent hydration mismatch
          datePublished: "2025-01-01",
        };
        return (
          <script
            key={url}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        );
      })}
    </>
  );
}
