import { Code, Server, Wrench } from "lucide-react";
import { BaseCard } from "@/components/base";
import {
  SiJavascript,
  SiPhp,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiNodedotjs,
  SiFastify,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiMysql,
  SiGit,
  SiVite,
  SiReactquery,
  SiReacthookform,
  SiDocker,
  SiNginx,
  SiApache,
  SiRedis,
  SiLinux,
  SiOwasp,
} from "react-icons/si";
import { AnimatedList } from "@/components/common/animated-list";

export function TechStackCard() {
  const techStack = {

    // Frontend
    frontend: [
      {
        id: "react",
        name: "React",
        icon: SiReact,
        color: "text-[#61DAFB]"
      },
      {
        id: "javascript",
        name: "JavaScript",
        icon: SiJavascript,
        color: "text-[#F7DF1E]"
      },
      {
        id: "nextjs",
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-foreground",
      },
      {
        id: "typescript",
        name: "TypeScript",
        icon: SiTypescript,
        color: "text-[#3178C6]",
      },
      {
        id: "tailwind",
        name: "TailwindCSS",
        icon: SiTailwindcss,
        color: "text-[#06B6D4]",
      },
      { id: "html5", name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
    ],

    // Backend
    backend: [
      {
        id: "php",
        name: "PHP",
        icon: SiPhp,
        color: "text-[#777BB4]"
      },
      {
        id: "nodejs",
        name: "Node.js",
        icon: SiNodedotjs,
        color: "text-[#339933]",
      },
      {
        id: "MySQL",
        name: "MySQL",
        icon: SiMysql,
        color: "text-[#4479A1]",
      },
      {
        id: "mongodb",
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-[#47A248]",
      },
      { id: "prisma", name: "Prisma", icon: SiPrisma, color: "text-[#2D3748]" },
      {
        id: "redis",
        name: "Redis",
        icon: SiRedis,
        color: "text-[#DC382D]",
      }
    ],

    // Ferramentas
    tools: [
      { id: "git", name: "Git", icon: SiGit, color: "text-[#F05032]" },
      { id: "vite", name: "Vite", icon: SiVite, color: "text-[#646CFF]" },
    ],

    // Infra & DevOps
    infra: [
      { id: "apache", name: "Apache", icon: SiApache, color: "text-[#D22128]" },
      { id: "nginx", name: "Nginx", icon: SiNginx, color: "text-[#009639]" },
      { id: "docker", name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
      { id: "linux", name: "Linux", icon: SiLinux, color: "text-[#FCC624]" },
    ],
  };

  return (
    <BaseCard
      title="Stack Tecnológica"
      icon={Code}
      className="lg:text-2xl"
      id="tech-stack-card"
    >
      <div className="space-y-6">
        {/* Frontend */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4 text-blue-400" />
            <h4 className="font-semibold text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">
              Frontend
            </h4>
          </div>
          <AnimatedList
            items={techStack.frontend}
            renderItem={(tech) => {
              const IconComponent = tech.icon;
              return (
                <div className="flex items-center gap-2 p-2 sm:p-3 rounded-lg bg-secondary/50">
                  <IconComponent
                    className={`text-base sm:text-lg ${tech.color}`}
                  />
                  <span className="text-xs sm:text-sm font-medium truncate">
                    {tech.name}
                  </span>
                </div>
              );
            }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-2"
          />
        </div>

        {/* Backend */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Server className="w-4 h-4 text-green-400" />
            <h4 className="font-semibold text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">
              Backend
            </h4>
          </div>
          <AnimatedList
            items={techStack.backend}
            renderItem={(tech) => {
              const IconComponent = tech.icon;
              return (
                <div className="flex items-center gap-2 p-2 sm:p-3 rounded-lg bg-secondary/50">
                  <IconComponent
                    className={`text-base sm:text-lg ${tech.color}`}
                  />
                  <span className="text-xs sm:text-sm font-medium truncate">
                    {tech.name}
                  </span>
                </div>
              );
            }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-2"
          />
        </div>

        {/* Ferramentas */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Wrench className="w-4 h-4 text-orange-400" />
            <h4 className="font-semibold text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">
              Ferramentas
            </h4>
          </div>
          <AnimatedList
            items={techStack.tools}
            renderItem={(tech) => {
              const IconComponent = tech.icon;
              return (
                <div className="flex items-center gap-2 p-2 sm:p-3 rounded-lg bg-secondary/50">
                  <IconComponent
                    className={`text-base sm:text-lg ${tech.color}`}
                  />
                  <span className="text-xs sm:text-sm font-medium truncate">
                    {tech.name}
                  </span>
                </div>
              );
            }}
            className="grid grid-cols-2 gap-2"
          />
        </div>

        {/* Infra & DevOps */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Server className="w-4 h-4 text-red-400" />
            <h4 className="font-semibold text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">
              Infra & DevOps
            </h4>
          </div>
          <AnimatedList
            items={techStack.infra}
            renderItem={(tech) => {
              const IconComponent = tech.icon;
              return (
                <div className="flex items-center gap-2 p-2 sm:p-3 rounded-lg bg-secondary/50">
                  <IconComponent
                    className={`text-base sm:text-lg ${tech.color}`}
                  />
                  <span className="text-xs sm:text-sm font-medium truncate">
                    {tech.name}
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
