"use client";

import { Badge } from "@/components/ui/components";
import {
  User, Target, Code, TrendingUp, DatabaseBackup,
  ShieldCheck, MapPin, Calendar, Zap
} from "lucide-react";
import { BaseCard } from "../base/index";
import AnimatedText, { SplitTypesEnum } from "../common/animated-text";
import { AnimatedList } from "../common/animated-list";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function AboutCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  const highlights = [
    { id: 1, icon: Target, text: "UX/UI Design System", color: "from-violet-500/20 to-purple-500/10", accent: "#a855f7" },
    { id: 2, icon: Code, text: "Arquitetura Escalável", color: "from-blue-500/20 to-cyan-500/10", accent: "#3b82f6" },
    { id: 3, icon: TrendingUp, text: "Alta Performance", color: "from-emerald-500/20 to-green-500/10", accent: "#10b981" },
    { id: 4, icon: User, text: "Engenharia de IA Aplicada", color: "from-amber-500/20 to-yellow-500/10", accent: "#f59e0b" },
    { id: 5, icon: DatabaseBackup, text: "DevOps & Infraestrutura", color: "from-rose-500/20 to-pink-500/10", accent: "#f43f5e" },
    { id: 6, icon: ShieldCheck, text: "Segurança & Compliance", color: "from-teal-500/20 to-cyan-500/10", accent: "#14b8a6" },
  ];

  const stats = [
    { value: "3+", label: "Anos exp." },
    { value: "20+", label: "Projetos" },
    { value: "100%", label: "Dedicação" },
  ];

  useGSAP(() => {
    if (!cardRef.current) return;

    gsap.to(".about-orb-1", {
      x: 15,
      y: -15,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    gsap.to(".about-orb-2", {
      x: -20,
      y: 10,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1,
    });
  }, []);

  return (
    <BaseCard
      title=""
      icon={undefined}
      id="about-card"
      className="h-full flex flex-col relative overflow-hidden group/card bg-[#0a0a0f] border border-white/[0.06] rounded-3xl shadow-2xl shadow-black/50"
    >
      <div className="about-orb-1 absolute -top-20 -right-20 w-56 h-56 rounded-full bg-violet-600/15 blur-[80px] pointer-events-none" />
      <div className="about-orb-2 absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-purple-500/10 blur-[70px] pointer-events-none" />

      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 flex flex-col h-full gap-6 p-1">
        <div className="flex items-start gap-4">
          <div className="relative shrink-0">
            <img
              src="/avatar.png"
              alt="Renan"
              className="w-14 h-14 rounded-2xl object-cover shadow-lg"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#0a0a0f] animate-pulse" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-white tracking-tight">Sobre Mim</h3>
            <div className="flex items-center gap-3 mt-1">
              <span className="flex items-center gap-1 text-xs text-white/40">
                <MapPin className="w-3 h-3" /> Brasil
              </span>
              <span className="flex items-center gap-1 text-xs text-white/40">
                <Calendar className="w-3 h-3" /> Desde 2022
              </span>
            </div>
          </div>
          <Badge
            variant="outline"
            className="shrink-0 px-2.5 py-1 text-[10px] font-semibold tracking-wider border-emerald-500/30 text-emerald-400 bg-emerald-500/10"
          >
            <Zap className="w-2.5 h-2.5 mr-1" /> DISPONÍVEL
          </Badge>
        </div>

        <AnimatedText
          splitType={SplitTypesEnum.words}
          wrapper="p"
          text="Especializado em sistemas críticos como gateways de pagamento e integrações financeiras. Uno robustez no Backend com experiências fluidas no Frontend, transformando desafios complexos em produtos digitais seguros e eficientes com IA."
          className="text-white/50 leading-relaxed text-sm text-pretty font-medium"
        />

        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-3 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.07] transition-colors"
            >
              <div className="text-xl font-black text-white tracking-tight">{stat.value}</div>
              <div className="text-[10px] text-white/35 mt-0.5 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex-1 space-y-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/25 flex items-center gap-2">
            <span className="flex-1 h-px bg-white/10" />
            Especialidades
            <span className="flex-1 h-px bg-white/10" />
          </p>
          <AnimatedList
            items={highlights}
            renderItem={(item) => (
              <div
                className={`group/item flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r ${item.color} border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 cursor-default`}
              >
                <div
                  className="p-1.5 rounded-lg shrink-0"
                  style={{ background: `${item.accent}20` }}
                >
                  <item.icon
                    className="w-3.5 h-3.5"
                    style={{ color: item.accent }}
                  />
                </div>
                <span className="text-xs font-semibold text-white/70 group-hover/item:text-white/90 transition-colors">
                  {item.text}
                </span>
              </div>
            )}
            className="grid grid-cols-2 gap-2"
          />
        </div>
      </div>
    </BaseCard>
  );
}