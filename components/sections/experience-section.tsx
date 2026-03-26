"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Briefcase,
    Calendar,
    MapPin,
    ExternalLink,
    Code2,
    Layers,
    Cpu,
    ArrowUpRight,
    Star,
    Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/components";
import AnimatedText, { SplitTypesEnum } from "@/components/common/animated-text";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    {
        id: 1,
        role: "Arquiteto de Sistemas & Desenvolvedor Full Stack",
        company: "RyzenPay",
        companyUrl: "https://app.ryzenpay.com.br",
        period: "2026 – Presente",
        type: "Full-time",
        location: "Remoto",
        icon: Cpu,
        accent: "#8b5cf6",
        accentBg: "rgba(139,92,246,0.10)",
        accentBorder: "rgba(139,92,246,0.25)",
        description:
            "Liderança técnica completa do gateway de pagamentos: projetei a arquitetura multi-tenant do zero, provisionei e configurei a VPS com aaPanel, conectei Cloudflare e domínios, estruturei ambientes de staging/produção com deploy automatizado via SSH. Responsável pelo desenvolvimento integral — frontend, backend, integrações com múltiplos PSPs via REST, split de pagamentos, Cash In/Out, webhooks e documentação técnica para clientes corporativos.",
        tags: ["JavaScript", "PHP", "MySQL", "REST APIs", "Webhooks", "VPS", "DevOps", "Cloudflare", "aaPanel"],
        highlight: true,
    },
    {
        id: 2,
        role: "Arquiteto & Desenvolvedor Full Stack Solo",
        company: "KryonPay",
        companyUrl: "https://kryonpay.com",
        period: "11/2025 – 01/2026",
        type: "Freelancer",
        location: "Remoto",
        icon: Code2,
        accent: "#3b82f6",
        accentBg: "rgba(59,130,246,0.10)",
        accentBorder: "rgba(59,130,246,0.22)",
        description:
            "Construção integral do gateway de pagamentos do zero: projetei a arquitetura multi-tenant, provisionei e configurei a VPS com aaPanel, conectei Cloudflare e domínios, estruturei pipelines de deploy via SSH com ambientes isolados de teste e produção. Desenvolvi frontend, backend, integrações com PSPs via REST, split de pagamentos e Cash In/Out — atuando como único responsável técnico do projeto.",
        tags: ["JavaScript", "PHP", "MySQL", "REST APIs", "Webhooks", "VPS", "DevOps", "Cloudflare", "aaPanel"],
        highlight: false,
    },
    {
        id: 3,
        role: "Desenvolvedor Frontend",
        company: "Freelancer",
        companyUrl: null,
        period: "02/2025 – 10/2025",
        type: "Freelance",
        location: "Remoto",
        icon: Code2,
        accent: "#3b82f6",
        accentBg: "rgba(59,130,246,0.10)",
        accentBorder: "rgba(59,130,246,0.22)",
        description:
            "Desenvolvimento de landing pages e sistemas web para clientes nacionais. Foco em performance, SEO técnico e experiências de usuário de alta conversão.",
        tags: ["React", "Next.js", "TypeScript", "Tailwind", "WordPress"],
        highlight: false,
    },
    {
        id: 4,
        role: "Início na Programação",
        company: "Autodidata",
        companyUrl: null,
        period: "2022",
        type: "Estudos",
        location: "Brasil",
        icon: Layers,
        accent: "#10b981",
        accentBg: "rgba(16,185,129,0.10)",
        accentBorder: "rgba(16,185,129,0.22)",
        description:
            "Imersão total em desenvolvimento web. Primeiros projetos com HTML, CSS e JavaScript puro. Base sólida em lógica de programação e fundamentos de backend.",
        tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        highlight: false,
    },
];

export function ExperienceSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            // Eyebrow label
            gsap.fromTo(
                ".exp-eyebrow",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );

            // Cards stagger in
            gsap.fromTo(
                ".exp-card",
                { y: 60, opacity: 0, filter: "blur(6px)" },
                {
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 0.75,
                    stagger: 0.18,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".exp-timeline",
                        start: "top 82%",
                        toggleActions: "play none none none",
                    },
                }
            );

            // Vertical line draw
            gsap.fromTo(
                ".timeline-track",
                { scaleY: 0, transformOrigin: "top center" },
                {
                    scaleY: 1,
                    duration: 1.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".exp-timeline",
                        start: "top 82%",
                        toggleActions: "play none none none",
                    },
                }
            );

            // CTA fade
            gsap.fromTo(
                ".exp-cta",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".exp-cta",
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                }
            );
        },
        { scope: sectionRef }
    );

    return (
        <section
            ref={sectionRef}
            className="relative py-24 overflow-hidden"
            id="experience-section"
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 rounded-full pointer-events-none -z-10" />

            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                {/* ── Header ── */}
                <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
                    <h4 className="exp-eyebrow text-sm font-bold uppercase tracking-widest bg-clip-text text-transparent bg-linear-to-r from-primary to-blue-400 flex items-center justify-center gap-2">
                        <Briefcase className="w-4 h-4 text-primary" />
                        Trajetória Profissional
                    </h4>

                    <AnimatedText
                        wrapper="h2"
                        text="Experiência & Evolução"
                        splitType={SplitTypesEnum.words}
                        className="text-4xl md:text-5xl font-bold tracking-tight text-balance"
                    />

                    <AnimatedText
                        wrapper="p"
                        text="Do zero ao desenvolvimento de sistemas financeiros críticos — arquitetura, infraestrutura e produto."
                        splitType={SplitTypesEnum.words}
                        className="text-muted-foreground text-lg leading-relaxed"
                    />
                </div>

                {/* ── Timeline ── */}
                <div className="exp-timeline relative">
                    {/* Vertical connector line (desktop only) */}
                    <div
                        className="hidden md:block absolute left-7.75 top-8 bottom-8 w-px overflow-hidden"
                        aria-hidden="true"
                    >
                        <div className="timeline-track w-full h-full bg-linear-to-b from-violet-500/50 via-blue-500/30 to-emerald-500/20" />
                    </div>

                    <div className="flex flex-col gap-6">
                        {experiences.map((exp) => {
                            const Icon = exp.icon;
                            return (
                                <div key={exp.id} className="exp-card relative md:pl-[5.5rem]">

                                    {/* ── Timeline node (desktop) ── */}
                                    <div className="hidden md:flex absolute left-0 top-5 w-[62px] justify-center">
                                        <div
                                            className="relative w-[62px] h-[62px] rounded-2xl flex items-center justify-center border shadow-lg"
                                            style={{
                                                background: exp.accentBg,
                                                borderColor: exp.accentBorder,
                                                boxShadow: `0 4px 24px ${exp.accent}20`,
                                            }}
                                        >
                                            <Icon className="w-6 h-6" style={{ color: exp.accent }} />
                                            {exp.highlight && (
                                                <div
                                                    className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center border-2 border-background z-10"
                                                    style={{ background: exp.accent }}
                                                >
                                                    <Star className="w-2.5 h-2.5 text-white fill-white" />
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* ── Card ── */}
                                    <div className="group/exp relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-6 shadow-sm backdrop-blur-sm transition-all duration-500 hover:border-border hover:-translate-y-1 hover:bg-card/70 hover:shadow-lg">

                                        {/* Bottom accent line on hover */}
                                        <div
                                            className="absolute bottom-0 left-0 h-0.5 w-0 group-hover/exp:w-full transition-[width] duration-700"
                                            style={{
                                                background: `linear-gradient(to right, ${exp.accent}60, transparent)`,
                                            }}
                                        />

                                        <div className="relative z-10">
                                            {/* Mobile: icon + role row */}
                                            <div className="flex items-start gap-3 mb-3 md:hidden">
                                                <div
                                                    className="w-10 h-10 rounded-xl flex items-center justify-center border shrink-0 mt-0.5"
                                                    style={{ background: exp.accentBg, borderColor: exp.accentBorder }}
                                                >
                                                    <Icon className="w-4.5 h-4.5" style={{ color: exp.accent }} />
                                                </div>
                                                <div>
                                                    <h3 className="text-base font-bold text-foreground tracking-tight leading-tight">
                                                        {exp.role}
                                                    </h3>
                                                    <span className="text-sm font-semibold" style={{ color: exp.accent }}>
                                                        {exp.company}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Desktop: header row */}
                                            <div className="hidden md:flex items-start justify-between gap-4 mb-3">
                                                <div>
                                                    <h3 className="text-lg font-bold text-foreground tracking-tight">
                                                        {exp.role}
                                                    </h3>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <span className="text-sm font-semibold" style={{ color: exp.accent }}>
                                                            {exp.company}
                                                        </span>
                                                        {exp.companyUrl && (
                                                            <a
                                                                href={exp.companyUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-muted-foreground/35 hover:text-muted-foreground/70 transition-colors"
                                                            >
                                                                <ExternalLink className="w-3.5 h-3.5" />
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="flex flex-col items-end gap-1.5 shrink-0">
                                                    <div className="flex items-center gap-2">
                                                        {exp.highlight && (
                                                            <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border"
                                                                style={{
                                                                    color: exp.accent,
                                                                    borderColor: exp.accentBorder,
                                                                    background: exp.accentBg,
                                                                }}
                                                            >
                                                                <Zap className="w-2.5 h-2.5" />
                                                                Atual
                                                            </span>
                                                        )}
                                                        <Badge
                                                            variant="outline"
                                                            className="text-[10px] font-bold border-border/50 text-muted-foreground/50 bg-muted/30 tracking-wider"
                                                        >
                                                            {exp.type}
                                                        </Badge>
                                                    </div>
                                                    <div className="flex items-center gap-1 text-[11px] text-muted-foreground/35 font-medium">
                                                        <Calendar className="w-3 h-3" />
                                                        {exp.period}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Location */}
                                            <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground/35 mb-4">
                                                <MapPin className="w-3 h-3" />
                                                {exp.location}
                                                {/* Mobile: period inline */}
                                                <span className="md:hidden flex items-center gap-1 ml-3">
                                                    <Calendar className="w-3 h-3" />
                                                    {exp.period}
                                                </span>
                                            </div>

                                            {/* Description */}
                                            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                                                {exp.description}
                                            </p>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2">
                                                {exp.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-2.5 py-1 rounded-lg text-[10px] font-semibold tracking-wide border transition-colors"
                                                        style={{
                                                            background: `${exp.accent}10`,
                                                            borderColor: `${exp.accent}25`,
                                                            color: exp.accent,
                                                        }}
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ── CTA ── */}
                <div className="exp-cta mt-14 text-center">
                    <a
                        href="mailto:renangd.dev@gmail.com"
                        className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold
                       text-foreground border border-border/50 bg-muted/20
                       hover:bg-primary/10 hover:border-primary/40
                       transition-all duration-300 group/cta
                       hover:shadow-[0_0_40px_-10px_rgba(var(--primary),0.35)]"
                    >
                        Vamos construir algo incrível juntos
                        <ArrowUpRight
                            className="w-4 h-4 transition-transform duration-300
                         group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}