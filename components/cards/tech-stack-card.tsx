import { TerminalSquare, Code2, Database, Wrench, Cpu } from "lucide-react";
import { BaseCard } from "@/components/base";
import {
  SiJavascript, SiPhp, SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiHtml5, SiNodedotjs, SiMysql, SiMongodb, SiPrisma, SiRedis, SiGit,
  SiVite, SiDocker, SiLinux
} from "react-icons/si";
import { AnimatedList } from "@/components/common/animated-list";

export function TechStackCard() {
  const techStack = {
    frontend: [
      { id: "react", name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { id: "next", name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
      { id: "ts", name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
      { id: "js", name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
      { id: "tailwind", name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { id: "html", name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
    ],
    backend: [
      { id: "node", name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
      { id: "php", name: "PHP", icon: SiPhp, color: "text-[#777BB4]" },
      { id: "mysql", name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
      { id: "mongo", name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
      { id: "prisma", name: "Prisma", icon: SiPrisma, color: "text-foreground" },
      { id: "redis", name: "Redis", icon: SiRedis, color: "text-[#DC382D]" }
    ],
    tools: [
      { id: "git", name: "Git", icon: SiGit, color: "text-[#F05032]" },
      { id: "docker", name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
      { id: "linux", name: "Linux", icon: SiLinux, color: "text-[#FCC624]" },
      { id: "vite", name: "Vite", icon: SiVite, color: "text-[#646CFF]" },
    ],
  };

  const Section = ({ title, icon: Icon, items }: { title: string, icon: any, items: any[] }) => (
    <div className="space-y-3">
      <div className="flex items-center gap-2 pb-2 mb-2 border-b border-white/5">
        <Icon className="w-4 h-4 text-blue-400" />
        <h4 className="text-xs font-bold uppercase tracking-widest text-foreground/70">
          {title}
        </h4>
      </div>
      <AnimatedList
        items={items}
        renderItem={(tech) => {
          const IconComponent = tech.icon;
          return (
            <div className="group flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 hover:shadow-[0_4px_20px_-5px_rgba(59,130,246,0.15)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 cursor-default border border-transparent hover:border-blue-500/20">
              <div className="relative flex items-center justify-center h-8 w-8">
                {/* Glow atrás do ícone */}
                <div className={`absolute inset-0 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 ${tech.color.replace('text-', 'bg-')}`}></div>
                <IconComponent className={`text-2xl relative z-10 ${tech.color} transition-transform group-hover:scale-110 drop-shadow-lg`} />
              </div>
              <span className="text-[10px] font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
            </div>
          );
        }}
        className="grid grid-cols-3 sm:grid-cols-4 gap-3"
      />
    </div>
  );

  return (
    <BaseCard
      title="Stack Tecnológica"
      icon={Cpu}
      className="h-full flex flex-col relative overflow-hidden group/card bg-background/40 border-white/5"
      id="tech-stack-card"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      {/* Ambient Glow (Blue Theme) */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 blur-[100px] pointer-events-none group-hover/card:bg-blue-500/20 transition-all duration-700" />
      <div className="flex-1 space-y-8 relative z-10">
        <Section title="Frontend" icon={Code2} items={techStack.frontend} />
        <Section title="Backend" icon={Database} items={techStack.backend} />
        <Section title="DevOps & Tools" icon={Wrench} items={techStack.tools} />
      </div>
    </BaseCard>
  );
}