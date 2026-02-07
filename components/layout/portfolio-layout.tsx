"use client";

import { useRef } from "react";
import { Header } from "@/components/common";
import { AboutCard, TechStackCard, ServicesCard } from "@/components/cards";
import { ContactSection } from "@/components/sections";
import { Footer } from "@/components/common";
import { useScrollListAnimation } from "@/hooks/use-scroll-list-animation";

interface PortfolioLayoutProps {
  id?: string;
}

export function PortfolioLayout({ id }: PortfolioLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const setCardsRef = useScrollListAnimation((el, tl) => {
    tl.set(el, {
      opacity: 0,
      y: 50,
    });
    tl.to(el, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power3.out",
    });
  });

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background text-foreground"
      id={id}
    >
      {/* Header full-width */}
      <Header id="portfolio-header" />

      {/* Main content */}
      <main className="container mx-auto px-4 py-8 max-w-7xl" id="main-content">
        <div
          className="cards-container grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12"
          id="cards-section"
        >
          <div
            id="about-card-container"
            ref={(ref) => setCardsRef(ref, 0)}
            className="opacity-0"
          >
            <AboutCard />
          </div>
          <div
            ref={(ref) => setCardsRef(ref, 1)}
            className="col-span-1 opacity-0"
            id="tech-stack-card-container"
          >
            <TechStackCard />
          </div>
          <div
            ref={(ref) => setCardsRef(ref, 2)}
            className="col-span-1 opacity-0"
            id="services-card-container"
          >
            <ServicesCard />
          </div>
        </div>
      </main>

      {/* Seção de contato full-width */}
      <div className="contact-section" id="contact-section">
        <ContactSection />
      </div>

      {/* Footer */}
      <Footer id="portfolio-footer" />
    </div>
  );
}
