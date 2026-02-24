"use client";

import {
  Globe, Smartphone, LayoutTemplate, Database,
  ArrowRightLeft, Rocket, ShieldCheck, Zap, Layers, Cpu, CheckCircle2, ArrowRight
} from "lucide-react";
import { BaseCard } from "@/components/base";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function ServicesCard() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      id: "frontend",
      category: "Frontend",
      icon: Globe,
      gradient: "from-violet-600 to-purple-600",
      glow: "rgba(139,92,246,0.2)",
      accent: "#8b5cf6",
      description: "Interfaces imersivas e de alta performance",
      items: ["Design Systems & UI Kits", "Web Apps Progressivos (PWA)", "Animações e Motion Design"],
    },
    {
      id: "backend",
      category: "Backend",
      icon: Database,
      gradient: "from-blue-600 to-cyan-600",
      glow: "rgba(59,130,246,0.2)",
      accent: "#3b82f6",
      description: "APIs robustas e arquiteturas escaláveis",
      items: ["APIs REST de Alta Disponibilidade", "Gateways & Integrações de Pagamento", "Arquitetura Multi-tenant"],
    },
    {
      id: "fintech",
      category: "Fintech",
      icon: ArrowRightLeft,
      gradient: "from-emerald-600 to-teal-600",
      glow: "rgba(16,185,129,0.2)",
      accent: "#10b981",
      description: "Soluções financeiras críticas e seguras",
      items: ["Split de Pagamentos", "Cash In / Cash Out", "Webhooks & PSPs"],
    },
    {
      id: "infra",
      category: "DevOps",
      icon: Rocket,
      gradient: "from-orange-600 to-rose-600",
      glow: "rgba(249,115,22,0.2)",
      accent: "#f97316",
      description: "Deploy, segurança e infraestrutura ágil",
      items: ["CI/CD Automatizado", "Segurança & Compliance", "Monitoramento & Logs"],
    },
  ];

  return (
    <BaseCard
      title=""
      icon={undefined}
      id="services-card"
      className="h-full flex flex-col relative overflow-hidden group/card bg-[#090d0a] border border-white/[0.06] rounded-3xl shadow-2xl shadow-black/50"
    >
      {/* Background effects */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-emerald-600/10 blur-[90px] pointer-events-none transition-all duration-700 group-hover/card:bg-emerald-600/15" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-80 h-40 rounded-full bg-green-500/6 blur-[80px] pointer-events-none" />

      {/* Subtle diagonal lines */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 20px)`,
        }}
      />

      <div ref={cardRef} className="relative z-10 flex flex-col h-full gap-5 p-1">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
            <Layers className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white tracking-tight">Domínios de Atuação</h3>
            <p className="text-[11px] text-white/35 font-medium">Serviços & Especialidades</p>
          </div>
        </div>

        {/* Services list */}
        <div className="flex-1 flex flex-col gap-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredService === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className="group/service relative overflow-hidden rounded-2xl border border-white/[0.06] transition-all duration-400 cursor-default"
                style={{
                  background: isHovered
                    ? `linear-gradient(135deg, ${service.glow} 0%, transparent 60%)`
                    : "rgba(255,255,255,0.03)",
                  borderColor: isHovered ? `${service.accent}40` : "rgba(255,255,255,0.06)",
                }}
              >
                <div className="p-4">
                  <div className="flex items-start gap-3.5">
                    {/* Icon */}
                    <div
                      className={`relative shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg transition-transform duration-300 ${isHovered ? "scale-110" : ""}`}
                      style={{
                        boxShadow: isHovered ? `0 4px 20px ${service.accent}50` : "none",
                      }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-white">{service.category}</span>
                        <ArrowRight
                          className={`w-3.5 h-3.5 transition-all duration-300 ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}`}
                          style={{ color: service.accent }}
                        />
                      </div>
                      <p className="text-[11px] text-white/35 font-medium mb-2.5 leading-snug">
                        {service.description}
                      </p>

                      {/* Sub-items */}
                      <div
                        className="flex flex-col gap-1.5 overflow-hidden transition-all duration-400"
                        style={{
                          maxHeight: isHovered ? "120px" : "0px",
                          opacity: isHovered ? 1 : 0,
                        }}
                      >
                        {service.items.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-[11px] text-white/60"
                          >
                            <CheckCircle2
                              className="w-3 h-3 shrink-0"
                              style={{ color: service.accent }}
                            />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] transition-all duration-500"
                  style={{
                    width: isHovered ? "100%" : "0%",
                    background: `linear-gradient(to right, ${service.accent}, transparent)`,
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="flex items-center justify-between pt-2 border-t border-white/[0.05]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] text-white/35 font-medium">Disponível para novos projetos</span>
          </div>
          <div className="flex items-center gap-1 text-emerald-400 text-[10px] font-semibold">
            <Zap className="w-3 h-3" />
            FULL STACK
          </div>
        </div>
      </div>
    </BaseCard>
  );
}