import { Metadata } from "next";
import ogImage from "../public/og-image.png";

const BASE_URLS = [
  "https://eduardoaugusto.squareweb.app",
  "https://eduardoaugusto.is-a.dev",
];
const BASE_URL = BASE_URLS[0];
const OG_IMAGE_URL = ogImage.src;

interface PageProps {
  params: {
    allPaths?: string[];
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const path = params?.allPaths?.join("/") || "";

  let title = "Renan Rodríguez - Desenvolvedor Front-End";
  let description =
    "Portfólio de Renan Rodríguez, desenvolvedor web front-end especializado em React, Next.js e TypeScript";
  let url = BASE_URL;

  // Define specific metadata based on the path
  switch (path) {
    case "about":
      title = "Sobre - Renan Rodríguez - Desenvolvedor Front-End";
      description =
        "Saiba mais sobre Renan Rodríguez, desenvolvedor web front-end especializado em React, Next.js e TypeScript";
      url = `${BASE_URL}/about`;
      break;
    case "projects":
      title = "Projetos - Renan Rodríguez - Desenvolvedor Front-End";
      description =
        "Confira os projetos desenvolvidos por Renan Rodríguez, especializado em React, Next.js e TypeScript";
      url = `${BASE_URL}/projects`;
      break;
    case "contact":
      title = "Contato - Renan Rodríguez - Desenvolvedor Front-End";
      description =
        "Entre em contato com Renan Rodríguez, desenvolvedor web front-end especializado em React, Next.js e TypeScript";
      url = `${BASE_URL}/contact`;
      break;
    default:
      if (path) {
        title = `${
          path.charAt(0).toUpperCase() + path.slice(1)
        } - Renan Rodríguez`;
        url = `${BASE_URL}/${path}`;
      }
  }

  return {
    metadataBase: new URL(BASE_URL),
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: "pt_BR",
      siteName: "Renan Rodríguez Portfolio",
      images: [
        {
          url: OG_IMAGE_URL,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE_URL],
    },
  };
}

// This is just to satisfy the file structure - the actual page is in page.tsx
export default function DynamicPage() {
  return null;
}
