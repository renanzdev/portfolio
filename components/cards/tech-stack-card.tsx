"use client";

import { Cpu, Code2, Database, Wrench, ChevronRight } from "lucide-react";
import { BaseCard } from "@/components/base";
import {
  SiJavascript, SiPhp, SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiMysql, SiRedis, SiGit,
  SiVite, SiDocker, SiLinux, SiLaravel, SiNginx, SiApache, SiPostman, SiComposer,
  SiPostgresql, SiFastify, SiPrisma, SiRedux, SiDbeaver, SiVercel, SiNgrok, SiPuppeteer, SiCloudflare
} from "react-icons/si";
import { AnimatedList } from "@/components/common/animated-list";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function TechStackCard() {
  const [activeTab, setActiveTab] = useState<"frontend" | "backend" | "tools">("frontend");
  const indicatorRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const techStack = {
    frontend: [
      { id: "react", name: "React", icon: SiReact, color: "#61DAFB", bg: "rgba(97,218,251,0.1)" },
      { id: "next", name: "Next.js", icon: SiNextdotjs, color: "#ffffff", bg: "rgba(255,255,255,0.08)" },
      { id: "ts", name: "TypeScript", icon: SiTypescript, color: "#3178C6", bg: "rgba(49,120,198,0.1)" },
      { id: "js", name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", bg: "rgba(247,223,30,0.1)" },
      { id: "tailwind", name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", bg: "rgba(6,182,212,0.1)" },
      { id: "vite", name: "Vite", icon: SiVite, color: "#646CFF", bg: "rgba(100,108,255,0.1)" },
      { id: "redux", name: "Redux", icon: SiRedux, color: "#764ABC", bg: "rgba(118,74,188,0.1)" },
    ],
    backend: [
      { id: "node", name: "Node.js", icon: SiNodedotjs, color: "#339933", bg: "rgba(51,153,51,0.1)" },
      { id: "php", name: "PHP", icon: SiPhp, color: "#8993BE", bg: "rgba(137,147,190,0.1)" },
      { id: "laravel", name: "Laravel", icon: SiLaravel, color: "#FF2D20", bg: "rgba(255,45,32,0.1)" },
      { id: "mysql", name: "MySQL", icon: SiMysql, color: "#4479A1", bg: "rgba(68,121,161,0.1)" },
      { id: "prisma", name: "Prisma", icon: SiPrisma, color: "#FF3FC1", bg: "rgba(255,63,193,0.1)" },
      { id: "postgresql", name: "PostgreSQL", icon: SiPostgresql, color: "#336791", bg: "rgba(51,103,145,0.1)" },
      { id: "fastify", name: "Fastify", icon: SiFastify, color: "#fff", bg: "rgba(255,255,255,0.05)" },
      { id: "redis", name: "Redis", icon: SiRedis, color: "#DC382D", bg: "rgba(220,56,45,0.1)" },
    ],
    tools: [
      { id: "git", name: "Git", icon: SiGit, color: "#F05032", bg: "rgba(240,80,50,0.1)" },
      { id: "docker", name: "Docker", icon: SiDocker, color: "#2496ED", bg: "rgba(36,150,237,0.1)" },
      { id: "linux", name: "Linux", icon: SiLinux, color: "#FCC624", bg: "rgba(252,198,36,0.1)" },
      { id: "nginx", name: "Nginx", icon: SiNginx, color: "#009639", bg: "rgba(0,150,57,0.1)" },
      { id: "apache", name: "Apache", icon: SiApache, color: "#D22128", bg: "rgba(210,33,40,0.1)" },
      { id: "postman", name: "Postman", icon: SiPostman, color: "#FF6C37", bg: "rgba(255,108,55,0.1)" },
      { id: "composer", name: "Composer", icon: SiComposer, color: "#8D6748", bg: "rgba(141,103,72,0.1)" },
      { id: "dbeaver", name: "DBeaver", icon: SiDbeaver, color: "#4A4A4A", bg: "rgba(74,74,74,0.1)" },
      { id: "vercel", name: "Vercel", icon: SiVercel, color: "#fff", bg: "rgba(255,255,255,0.08)" },
      { id: "ngrok", name: "Ngrok", icon: SiNgrok, color: "#29BEB0", bg: "rgba(41,190,176,0.1)" },
      { id: "puppeteer", name: "Puppeteer", icon: SiPuppeteer, color: "#00BFFF", bg: "rgba(0,191,255,0.1)" },
      { id: "cloudflare", name: "Cloudflare", icon: SiCloudflare, color: "#F38020", bg: "rgba(243,128,32,0.1)" },
    ],
  };

  const tabs = [
    { key: "frontend" as const, label: "Frontend", icon: Code2, count: techStack.frontend.length },
    { key: "backend" as const, label: "Backend", icon: Database, count: techStack.backend.length },
    { key: "tools" as const, label: "DevOps", icon: Wrench, count: techStack.tools.length },
  ];

  const handleTabChange = (tab: "frontend" | "backend" | "tools") => {
    if (tab === activeTab) return;

    // Animate content out
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        opacity: 0,
        y: 10,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          setActiveTab(tab);
          gsap.fromTo(
            contentRef.current,
            { opacity: 0, y: -10 },
            { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
          );
        },
      });
    }
  };

  const currentTechs = techStack[activeTab];

  return (
    <BaseCard
      title=""
      icon={undefined}
      id="tech-stack-card"
      className="h-full flex flex-col relative overflow-hidden group/card bg-[#080c14] border border-white/[0.06] rounded-3xl shadow-2xl shadow-black/50"
    >
      {/* Background effects */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-blue-600/10 blur-[100px] pointer-events-none transition-all duration-700 group-hover/card:bg-blue-600/18" />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-cyan-500/8 blur-[80px] pointer-events-none" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 flex flex-col h-full gap-5 p-1">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">Stack Tecnológica</h3>
              <p className="text-[11px] text-white/35 font-medium">Ferramentas & Tecnologias</p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-white/25 text-xs">
            <ChevronRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Tab switcher */}
        <div
          ref={tabsRef}
          className="flex p-1 rounded-2xl bg-white/[0.04] border border-white/[0.06] gap-1"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer ${isActive
                  ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30"
                  : "text-white/35 hover:text-white/60 hover:bg-white/[0.05]"
                  }`}
              >
                <Icon className="w-3 h-3" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${isActive ? "bg-white/20 text-white" : "bg-white/8 text-white/30"
                    }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tech grid */}
        <div ref={contentRef} className="flex-1">
          <AnimatedList
            key={activeTab}
            items={currentTechs}
            renderItem={(tech) => {
              const IconComp = tech.icon;
              return (
                <div
                  className="group/tech relative flex flex-col items-center justify-center gap-2.5 p-4 rounded-2xl border border-white/[0.06] hover:border-white/[0.15] transition-all duration-300 hover:-translate-y-1 cursor-default overflow-hidden"
                  style={{ background: tech.bg }}
                >
                  {/* Glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-500 blur-xl"
                    style={{ background: `${tech.color}15` }}
                  />

                  <div className="relative z-10 flex items-center justify-center w-10 h-10">
                    <IconComp
                      className="text-3xl transition-all duration-300 group-hover/tech:scale-110 drop-shadow-lg"
                      style={{ color: tech.color }}
                    />
                  </div>
                  <span className="relative z-10 text-[11px] font-semibold text-white/50 group-hover/tech:text-white/80 transition-colors tracking-wide">
                    {tech.name}
                  </span>
                </div>
              );
            }}
            className="grid grid-cols-3 gap-2.5"
          />
        </div>

        {/* Bottom label */}
        <div className="flex items-center gap-2 pt-1 border-t border-white/[0.05]">
          <div className="flex -space-x-1">
            {currentTechs.slice(0, 4).map((t, i) => (
              <div
                key={t.id}
                className="w-5 h-5 rounded-full border border-[#080c14] flex items-center justify-center text-[8px]"
                style={{ background: `${t.color}30`, zIndex: 4 - i }}
              >
                <t.icon style={{ color: t.color }} className="text-xs" />
              </div>
            ))}
          </div>
          <span className="text-[10px] text-white/25 font-medium">
            +{currentTechs.length} tecnologias em {tabs.find(t => t.key === activeTab)?.label}
          </span>
        </div>
      </div>
    </BaseCard>
  );
}