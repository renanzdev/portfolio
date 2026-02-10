import { Badge } from "@/components/ui/components";
import { User, Target, Code, TrendingUp, DatabaseBackup, ShieldCheck, Sparkles } from "lucide-react";
import { BaseCard } from "../base/index";
import AnimatedText, { SplitTypesEnum } from "../common/animated-text";
import { AnimatedList } from "../common/animated-list";

export function AboutCard() {
  const highlights = [
    { id: 1, icon: Target, text: "UX/UI Design System" },
    { id: 2, icon: Code, text: "Arquitetura Escalável" },
    { id: 3, icon: TrendingUp, text: "Alta Performance" },
    { id: 4, icon: User, text: "Engenharia de IA Aplicada" },
    { id: 5, icon: DatabaseBackup, text: "DevOps & Infraestrutura" },
    { id: 6, icon: ShieldCheck, text: "Segurança & Compliance" },
  ];

  return (
    <BaseCard
      title="Sobre Mim"
      icon={Sparkles}
      id="about-card"
      className="h-full flex flex-col relative overflow-hidden group/card bg-background/40 border-white/5"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      {/* Ambient Glow (Purple Theme) */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 blur-[100px] pointer-events-none group-hover/card:bg-purple-500/20 transition-all duration-700" />

      <div className="flex flex-col h-full gap-8 z-10 relative">
        <div className="flex-1 space-y-6">
          <AnimatedText
            splitType={SplitTypesEnum.words}
            wrapper="p"
            // "Engenheiro de Software focado em arquiteturas escaláveis e de alta performance. Especializado no desenvolvimento de sistemas críticos, como gateways de pagamento e integrações financeiras, uno robustez no Backend com experiências fluidas no Frontend. Desde 2022, utilizo tecnologia e IA para transformar desafios complexos em produtos digitais seguros e eficientes."
            text="Especializado no desenvolvimento de sistemas críticos, como gateways de pagamento e integrações financeiras, uno robustez no Backend com experiências fluidas no Frontend. Desde 2022, utilizo tecnologia e IA para transformar desafios complexos em produtos digitais seguros e eficientes."
            className="text-muted-foreground leading-relaxed text-sm sm:text-base text-pretty font-medium"
          />

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground/60 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
              Highlights
            </h4>
            <AnimatedList
              items={highlights}
              renderItem={(item) => (
                <div className="group flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-purple-500/30 hover:shadow-[0_0_20px_-10px_rgba(168,85,247,0.3)] transition-all duration-300">
                  <div className="p-2 rounded-lg bg-background/50 group-hover:bg-purple-500/20 transition-colors">
                    <item.icon className="w-4 h-4 text-white transition-colors" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                    {item.text}
                  </span>
                </div>
              )}
              className="grid grid-cols-2 gap-3"
            />
          </div>
        </div>

        <div className="pt-4 mt-auto flex items-center justify-center">
          <Badge variant="outline" className="px-4 py-1.5 text-[10px] sm:text-xs tracking-wider  bg-white/5 border border-white/5 hover:bg-white/10 text-white-300 hover:bg-white-500/10 transition-all backdrop-blur-md">
            <Sparkles className="w-3 h-3 mr-2" /> 3+ ANOS DE EXPERIÊNCIA
          </Badge>
        </div>
      </div>
    </BaseCard>
  );
}