"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Code2, ExternalLink, Github, Layers, Target } from "lucide-react";
import { Button, Badge } from "@/components/ui/components";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        title: "Gateway de Pagamentos Inteligente",
        description: "Gateway de pagamentos Full Stack construído do zero, com arquitetura multi-tenant, suporte a Cash In/Out, split de pagamentos e integração com múltiplos PSPs via APIs REST v1.",
        image: "/projects/project-11.png",
        tags: ["JavaScript","PHP", "MySQL", "HTML", "APIs REST", "VPS", "Webhooks"],
        demoLink: "https://kryonpay.com", 
        codeLink: "https://github.com/renanzdev",
        featured: true,
    },
    {
        id: 2,
        title: "Landing Page | KryonPay",
        description: "Plataforma de e-commerce desacoplada utilizando Shopify como backend e um frontend Next.js ultrarrápido com renderização híbrida.",
        image: "/projects/project-2.png",
        tags: ["React", "Shopify API", "Zustand", "Framer Motion"],
        demoLink: "https://demo.com",
        codeLink: "https://github.com/renanzdev",
    },
    {
        id: 3,
        title: "AI Content Generator SaaS",
        description: "Aplicação SaaS que utiliza a API da OpenAI para gerar posts de blog, copy para redes sociais e e-mails de marketing otimizados para SEO.",
        image: "/projects/project-3.jpg",
        tags: ["OpenAI API", "Node.js", "Express", "MongoDB", "Stripe"],
        demoLink: "https://demo.com",
        codeLink: null,
    },
    {
        id: 4,
        title: "Real-time Chat Application",
        description: "Sistema de chat global com salas privadas, suporte a envio de mídia e status de presença online utilizando WebSockets.",
        image: "/projects/project-4.jpg",
        tags: ["Socket.io", "React", "Redis", "Docker"],
        demoLink: null,
        codeLink: "https://github.com",
    },
];

export function ProjectsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
            });

            tl.from(".projects-header-text", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
            })
                .from(
                    ".projects-carousel-container",
                    {
                        y: 100,
                        opacity: 0,
                        duration: 1,
                        ease: "back.out(1.2)",
                    },
                    "-=0.4"
                );
        },
        { scope: sectionRef }
    );

    return (
        <section
            ref={sectionRef}
            className="relative min-h-[90vh] py-24 overflow-hidden bg-background/50"
        >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/5 via-background to-background -z-10" />
            <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none z-0 mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            <div className="container mx-auto px-4 max-w-7xl relative z-10 h-full flex flex-col justify-center">
                <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
                    <h4 className="projects-header-text text-sm font-bold uppercase tracking-widest bg-clip-text text-transparent bg-linear-to-r from-primary to-blue-400 flex items-center justify-center gap-2">
                        <Layers className="w-4 h-4 text-primary" />
                        Portfólio Selecionado
                    </h4>
                    <h2 className="projects-header-text text-4xl md:text-5xl font-bold tracking-tight text-balance">
                        Projetos que geram <br />
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-foreground to-muted-foreground">
                            impacto real.
                        </span>
                    </h2>
                    <p className="projects-header-text text-muted-foreground text-lg leading-relaxed">
                        Uma seleção de trabalhos recentes focados em resolver problemas complexos com arquitetura robusta e experiência de usuário excepcional.
                    </p>
                </div>

                <div className="projects-carousel-container relative group/carousel px-4 md:px-0">
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-background/50 backdrop-blur-md border-white/10 hover:bg-primary/20 hover:border-primary/50 transition-all opacity-0 group-hover/carousel:opacity-100 -translate-x-4 group-hover/carousel:translate-x-0 duration-300 hidden md:flex"
                        onClick={scrollPrev}
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-background/50 backdrop-blur-md border-white/10 hover:bg-primary/20 hover:border-primary/50 transition-all opacity-0 group-hover/carousel:opacity-100 translate-x-4 group-hover/carousel:translate-x-0 duration-300 hidden md:flex"
                        onClick={scrollNext}
                    >
                        <ChevronRight className="w-6 h-6" />
                    </Button>

                    <div className="overflow-hidden rounded-3xl cursor-grab active:cursor-grabbing" ref={emblaRef}>
                        <div className="flex touch-pan-y py-8 -ml-6">
                            {projects.map((project, index) => (
                                <div
                                    key={project.id}
                                    className="flex-[0_0_90%] md:flex-[0_0_60%] lg:flex-[0_0_45%] min-w-0 pl-6 relative"
                                >
                                    <div className="group h-112.5 md:h-137.5 rounded-4xl overflow-hidden relative border border-white/10 bg-card/30 shadow-2xl perspective-1000 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(var(--primary),0.15)]">
                                        <div className="absolute inset-0 bg-muted/20 transition-transform duration-700 group-hover:scale-105">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-all duration-500 group-hover:blur-md group-hover:brightness-50"
                                            />
                                        </div>

                                        <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                                        <div className="absolute inset-0 p-8 flex flex-col justify-end transition-all duration-500 translate-y-4 group-hover:translate-y-0">

                                            {/* Tags/Badges */}
                                            <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 translate-y-4 group-hover:translate-y-0">
                                                {project.tags.slice(0, 3).map((tag) => (
                                                    <Badge key={tag} variant="secondary" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-xs border-white/5">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                                {project.tags.length > 3 && (
                                                    <Badge variant="outline" className="text-xs border-white/10">+ {project.tags.length - 3}</Badge>
                                                )}
                                            </div>

                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-md">
                                                {project.title}
                                            </h3>
                                            <p className="text-white/80 leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 translate-y-4 group-hover:translate-y-0 line-clamp-3">
                                                {project.description}
                                            </p>

                                            <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 translate-y-4 group-hover:translate-y-0">
                                                {project.demoLink && (
                                                    <Button 
                                                        size="sm" 
                                                        className="rounded-full gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
                                                        asChild
                                                    >
                                                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                                                            <ExternalLink className="w-4 h-4" /> Ver Demo
                                                        </a>
                                                    </Button>
                                                )}
                                                {project.codeLink && (
                                                    <Button 
                                                        size="sm" 
                                                        variant="outline" 
                                                        className="rounded-full gap-2 bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 text-white"
                                                        asChild
                                                    >
                                                        <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                                                            <Github className="w-4 h-4" /> Código
                                                        </a>
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="md:hidden text-center mt-4 text-xs text-muted-foreground animate-pulse">
                    Deslize para ver mais &rarr;
                </div>
            </div>
        </section>
    );
}