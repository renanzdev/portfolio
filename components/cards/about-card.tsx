import { Badge } from "@/components/ui/components";
import { User, Target, Code, TrendingUp, DatabaseBackup, Globe, ShieldCheck } from "lucide-react";
import { BaseCard } from "../base/index";
import AnimatedText, { SplitTypesEnum } from "../common/animated-text";
import { AnimatedList } from "../common/animated-list";

export function AboutCard() {
  const highlights = [
    { id: 1, icon: Target, text: "UX/UI Design System" },
    { id: 2, icon: Code, text: "Arquitetura Escalável" },
    { id: 3, icon: TrendingUp, text: "Sistemas de Alta Performance" },
    { id: 4, icon: User, text: "Engenharia de IA Aplicada" },
    { id: 5, icon: DatabaseBackup, text: "DevOps & Infraestrutura" },
    { id: 6, icon: ShieldCheck, text: "Segurança & Compliance" },
  ];

  return (
    <BaseCard title="Sobre" icon={User} id="about-card">
      <div className="space-y-4">
        <AnimatedText
          splitType={SplitTypesEnum.words}
          wrapper="p"
          // "Engenheiro de Software focado em arquiteturas escaláveis e de alta performance. Especializado no desenvolvimento de sistemas críticos, como gateways de pagamento e integrações financeiras, uno robustez no Backend com experiências fluidas no Frontend. Desde 2022, utilizo tecnologia e IA para transformar desafios complexos em produtos digitais seguros e eficientes."
          text="Especializado no desenvolvimento de sistemas críticos, como gateways de pagamento e integrações financeiras, uno robustez no Backend com experiências fluidas no Frontend. Desde 2022, utilizo tecnologia e IA para transformar desafios complexos em produtos digitais seguros e eficientes."
          className="text-card-foreground leading-relaxed text-pretty"
        />

        <div className="space-y-3">
          <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
            Highlights
          </h4>
          <AnimatedList
            items={highlights}
            renderItem={(highlight) => (
              <div className="flex items-center gap-2 p-2 rounded-lg bg-secondary/50">
                <highlight.icon className="w-4 h-4 text-primary" />
                <span className="text-sm">{highlight.text}</span>
              </div>
            )}
            className="grid grid-cols-2 gap-2"
          />
        </div>

        <div className="pt-2">
          <Badge variant="secondary" className="text-xs">
            3+ anos de experiência
          </Badge>
        </div>
      </div>
    </BaseCard>
  );
}
