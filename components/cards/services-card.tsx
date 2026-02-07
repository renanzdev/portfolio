import { Globe, Smartphone, Zap, Database, Code, Server, Webhook, LayoutTemplate, Link, ArrowRightLeft, ShieldCheck, CreditCard, Rocket } from "lucide-react";
import { BaseCard } from "@/components/base";
import { AnimatedList } from "@/components/common/animated-list";

export function ServicesCard() {
  const services = {
    frontend: [
      {
        id: "responsividade",
        name: "Mobile-First UI",
        icon: Globe,
        color: "text-blue-400",
      },
      {
        id: "apps-mobile",
        name: "Apps Mobile",
        icon: Smartphone,
        color: "text-green-400",
      },
      {
        id: "ui-ux",
        name: "UI/UX Design",
        icon: LayoutTemplate,
        color: "text-purple-400",
      },
    ],
    backend: [
      {
        id: "integracoes-pagamentos",
        name: "Gateways",
        icon: CreditCard,
        color: "text-yellow-400",
      },
      {
        id: "apis",
        name: "APIs RESTful",
        icon: Server,
        color: "text-orange-400",
      },
      {
        id: "banco-dados",
        name: "Arquitetura de Dados",
        icon: Database,
        color: "text-indigo-400",
      },
      {
        id: "webhooks",
        name: "Webhooks",
        icon: Webhook,
        color: "text-purple-400",
      },
      {
        id: "integracoes-sistemas",
        name: "Cash-in/Cash-out",
        icon: ArrowRightLeft,
        color: "text-red-400",
      },
      {
        id: "apis-terceiros",
        name: "Integrações Bancárias",
        icon: Link,
        color: "text-blue-400",
      },
    ],

    infradevops: [
      {
        id: "vps",
        name: "CI/CD & Deploy",
        icon: Rocket,
        color: "text-blue-400",
      },
      {
        id: "ssl-seguranca",
        name: "SSL & Segurança",
        icon: ShieldCheck,
        color: "text-green-400",
      },
    ],
  };

  return (
    <BaseCard
      title="Competências"
      icon={Globe}
      className="lg:text-2xl"
      id="services-card"
    >
      <div className="space-y-6">
        {/* Frontend Services */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4 text-blue-400" />
            <h4 className="font-semibold text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">
              Frontend
            </h4>
          </div>
          <AnimatedList
            items={services.frontend}
            renderItem={(service) => {
              const IconComponent = service.icon;
              return (
                <div className="flex items-center gap-2 p-2 sm:p-3 rounded-lg bg-secondary/50">
                  <IconComponent
                    className={`text-base sm:text-lg ${service.color}`}
                  />
                  <span className="text-xs sm:text-sm font-medium truncate">
                    {service.name}
                  </span>
                </div>
              );
            }}
            className="grid grid-cols-2 gap-2"
          />
        </div>

        {/* Backend Services */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Server className="w-4 h-4 text-green-400" />
            <h4 className="font-semibold text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">
              Backend
            </h4>
          </div>
          <AnimatedList
            items={services.backend}
            renderItem={(service) => {
              const IconComponent = service.icon;
              return (
                <div className="flex items-center gap-2 p-2 sm:p-3 rounded-lg bg-secondary/50">
                  <IconComponent
                    className={`text-base sm:text-lg ${service.color}`}
                  />
                  <span className="text-xs sm:text-sm font-medium truncate">
                    {service.name}
                  </span>
                </div>
              );
            }}
            className="grid grid-cols-2 gap-2"
          />
        </div>

        {/* Infra & DevOps Services */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Server className="w-4 h-4 text-orange-400" />
            <h4 className="font-semibold text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">
              Infra & DevOps
            </h4>
          </div>
          <AnimatedList
            items={services.infradevops}
            renderItem={(service) => {
              const IconComponent = service.icon;
              return (
                <div className="flex items-center gap-2 p-2 sm:p-3 rounded-lg bg-secondary/50">
                  <IconComponent
                    className={`text-base sm:text-lg ${service.color}`}
                  />
                  <span className="text-xs sm:text-sm font-medium truncate">
                    {service.name}
                  </span>
                </div>
              );
            }}
            className="grid grid-cols-2 gap-2"
          />
        </div>
      </div>
    </BaseCard>
  );
}
