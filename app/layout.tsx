import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import {
  PersonStructuredData,
  OrganizationStructuredData,
  PortfolioStructuredData,
} from "@/components/common/structured-data";
import { ThemeProvider } from "@/components/common/theme-provider"; // <--- IMPORTANTE

import ogImage from "../public/og-image.png";

const BASE_URLS = [
  "https://eduardoaugusto.squareweb.app",
  "https://eduardoaugusto.is-a.dev",
];
const BASE_URL = BASE_URLS[0];
const OG_IMAGE_URL = ogImage.src;

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Renan Rodríguez - Desenvolvedor Front-End",
    template: "%s | Renan Rodríguez - Desenvolvedor Front-End",
  },
  description:
    "Portfólio de Renan Rodríguez, desenvolvedor web front-end especializado em React, Next.js e TypeScript",
  keywords: [
    "desenvolvedor",
    "front-end",
    "react",
    "nextjs",
    "typescript",
    "Renan Rodríguez",
    "portfolio",
    "web development",
    "javascript",
    "programador",
  ],
  authors: BASE_URLS.map((url) => ({ name: "Renan Rodríguez", url })),
  creator: "Renan Rodríguez",
  publisher: "Renan Rodríguez",
  openGraph: {
    title: "Renan Rodríguez - Desenvolvedor Front-End",
    description:
      "Desenvolvedor apaixonado por criar soluções digitais que fazem a diferença",
    type: "website",
    locale: "pt_BR",
    url: BASE_URL,
    siteName: "Renan Rodríguez Portfolio",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Renan Rodríguez - Desenvolvedor Front-End",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Renan Rodríguez - Desenvolvedor Front-End",
    description:
      "Desenvolvedor apaixonado por criar soluções digitais que fazem a diferença",
    images: [OG_IMAGE_URL],
    creator: "@the_duh7",
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    yahoo: "",
    yandex: "",
    other: {},
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 1. Removi "className='dark'" e adicionei suppressHydrationWarning
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {BASE_URLS.map((url) => (
          <link key={url} rel="canonical" href={url} />
        ))}
      </head>
      <body className={`${bricolageGrotesque.variable} font-sans antialiased`}>
        {/* 2. Envolvi o conteúdo com o ThemeProvider */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <PersonStructuredData />
          <OrganizationStructuredData />
          <PortfolioStructuredData />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}