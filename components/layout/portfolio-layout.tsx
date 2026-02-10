"use client";

import { useRef } from "react";
import { Header } from "@/components/common";
import { AboutCard, TechStackCard, ServicesCard } from "@/components/cards";
import { ContactSection, HeroSection } from "@/components/sections";
// Importando a nova seção de projetos
import { ProjectsSection } from "@/components/sections/projects-section";
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
      className="min-h-screen bg-background text-foreground relative selection:bg-primary/20"
      id={id}
    >
      <div className="fixed inset-0 -z-10 h-full w-full bg-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[24px]"></div>

        <div className="absolute left-0 right-0 top-[-10%] h-250 w-250 rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#3b82f615,transparent)]"></div>

        <div className="absolute bottom-0 right-0 h-200 w-200 rounded-full bg-[radial-gradient(circle_800px_at_100%_200px,#a855f710,transparent)]"></div>
      </div>

      <Header id="portfolio-header" />
      <HeroSection />

      <main className="container mx-auto px-4 py-8 max-w-7xl relative z-10" id="main-content">
        <div
          className="cards-container grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-24 items-stretch"
          id="cards-section"
        >
          {/* Card Sobre */}
          <div
            id="about-card-container"
            ref={(ref) => setCardsRef(ref, 0)}
            className="opacity-0 h-full"
          >
            <AboutCard />
          </div>

          {/* Card Stack */}
          <div
            ref={(ref) => setCardsRef(ref, 1)}
            className="col-span-1 opacity-0 h-full"
            id="tech-stack-card-container"
          >
            <TechStackCard />
          </div>

          {/* Card Serviços/Competências */}
          <div
            ref={(ref) => setCardsRef(ref, 2)}
            className="col-span-1 opacity-0 h-full"
            id="services-card-container"
          >
            <ServicesCard />
          </div>
        </div>
      </main>

      <div className="relative z-10" id="projects-section">
        <ProjectsSection />
      </div>

      <div className="contact-section relative z-10" id="contact-section">
        <ContactSection />
      </div>

      <div className="relative z-10">
        <Footer id="portfolio-footer" />
      </div>
    </div>
  );
}