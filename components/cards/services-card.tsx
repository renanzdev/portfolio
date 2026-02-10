import { Globe, Smartphone, LayoutTemplate, Database, Webhook, ArrowRightLeft, Link, Rocket, ShieldCheck, Zap, Layers } from "lucide-react";
import { BaseCard } from "@/components/base";
import { AnimatedList } from "@/components/common/animated-list";

export function ServicesCard() {
  const services = {
    frontend: [
      { id: "ui", name: "Interfaces Imersivas", icon: Globe, color: "text-emerald-400" },
      { id: "app", name: "Web Apps Progressivos", icon: Smartphone, color: "text-teal-400" },
      { id: "ux", name: "Design Systems", icon: LayoutTemplate, color: "text-cyan-400" },
    ],
    backend: [
      { id: "api", name: "APIs de Alta Disponibilidade", icon: Zap, color: "text-amber-400" },
      { id: "db", name: "Arquitetura de Dados", icon: Database, color: "text-emerald-500" },
      { id: "pay", name: "Gateways & Pagamentos", icon: ArrowRightLeft, color: "text-lime-400" },
    ],
    infra: [
      { id: "deploy", name: "CI/CD Automatizado", icon: Rocket, color: "text-orange-400" },
      { id: "sec", name: "Blindagem & Segurança", icon: ShieldCheck, color: "text-green-500" },
    ],
  };

  const ServiceGroup = ({ label, items }: { label: string, items: any[] }) => (
    <div className="space-y-4">
      <h4 className="text-xs font-bold uppercase tracking-widest text-foreground/60 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
        {label}
      </h4>
      <AnimatedList
        items={items}
        renderItem={(item) => {
          const Icon = item.icon;
          return (
            <div className="group relative overflow-hidden flex items-center gap-4 p-3.5 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-[0_4px_20px_-10px_rgba(16,185,129,0.2)] hover:-translate-y-0.5">

              <div className={`p-2.5 rounded-xl bg-background/50 shadow-inner group-hover:scale-110 group-hover:bg-emerald-500/10 transition-all duration-300 relative overflow-hidden`}>
                <Icon className={`w-5 h-5 ${item.color} relative z-10`} />
              </div>

              <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground tracking-tight transition-colors">
                {item.name}
              </span>

              <div className="absolute right-4 opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-300 text-emerald-500">
                <Zap className="w-4 h-4" />
              </div>
            </div>
          );
        }}
        className="grid grid-cols-1 gap-3"
      />
    </div>
  );

  return (
    <BaseCard
      title="Domínios de Atuação"
      icon={Layers}
      className="h-full flex flex-col relative overflow-hidden group/card bg-background/40 border-white/5"
      id="services-card"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      {/* Ambient Glow (Emerald Theme) */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-500/10 blur-[100px] pointer-events-none group-hover/card:bg-emerald-500/20 transition-all duration-700" />

      <div className="flex-1 grid grid-cols-1 gap-8 content-start relative z-10">
        <ServiceGroup label="Frontend" items={services.frontend} />
        <ServiceGroup label="Backend" items={services.backend} />
        <ServiceGroup label="Infraestrutura Ágil" items={services.infra} />
      </div>
    </BaseCard>
  );
}