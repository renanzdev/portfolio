"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Button } from "@/components/ui/components";
import { ArrowDown, Download, Layers } from "lucide-react";

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const nameRef = useRef<HTMLSpanElement>(null);
    const [currentName, setCurrentName] = useState("Renan");

    useGSAP(
        () => {
            const tl = gsap.timeline();

            tl.from(".hero-text", {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
            });

            gsap.to(".scroll-indicator", {
                y: 8,
                repeat: -1,
                yoyo: true,
                duration: 1.5,
                ease: "power1.inOut",
            });
        },
        { scope: containerRef }
    );

    useGSAP(() => {
        const swapName = () => {
            const tl = gsap.timeline({
                onComplete: () => {
                    gsap.delayedCall(3, swapName);
                },
            });

            tl.to(nameRef.current, {
                y: -30,
                opacity: 0,
                filter: "blur(8px)",
                duration: 0.4,
                ease: "power2.in",
                onComplete: () => {
                    setCurrentName((prev) => (prev === "Renan" ? "Rodríguez" : "Renan"));
                },
            })
                .set(nameRef.current, { y: 30, opacity: 0, filter: "blur(8px)" })
                .to(nameRef.current, {
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 0.6,
                    ease: "power2.out",
                });
        };

        gsap.delayedCall(2, swapName);
    }, []);

    const handleScrollToProjects = () => {
        const projectsSection = document.getElementById("projects-section");
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleScrollToCards = () => {
        const cardsSection = document.getElementById("main-content");
        if (cardsSection) {
            cardsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            ref={containerRef}
            className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 pt-32 overflow-hidden"
        >
            <div className="absolute inset-0 -z-10 h-full w-full bg-background">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
                <div className="absolute left-0 right-0 top-[-10%] h-[800px] w-full rounded-full bg-[radial-gradient(circle_500px_at_50%_300px,#3b82f615,transparent)]"></div>
            </div>

            <div className="z-10 space-y-8 max-w-4xl relative flex flex-col items-center">
                <div className="hero-text inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary backdrop-blur-sm shadow-[0_0_15px_-5px_rgba(var(--primary),0.3)]">
                    <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                    Bem-vindo ao meu portfólio
                </div>

                <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
                    Transformando ideias em <br className="hidden md:block" />
                    <span className="text-foreground">código </span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-primary animate-gradient">
                        & inovação.
                    </span>
                </h1>

                <div className="hero-text text-3xl md:text-5xl font-semibold text-muted-foreground h-16 md:h-24 overflow-hidden flex items-center justify-center">
                    <span>Eu sou </span>
                    <span
                        ref={nameRef}
                        className="ml-3 md:ml-4 inline-block text-foreground bg-clip-text min-w-[120px] md:min-w-[240px] text-left"
                    >
                        {currentName}
                    </span>
                    <span className="text-primary animate-pulse">_</span>
                </div>

                <div className="hero-text flex flex-col sm:flex-row items-center gap-4 pt-6">
                    <Button
                        size="lg"
                        className="rounded-full h-12 px-8 text-base font-medium shadow-[0_0_30px_-10px_rgba(var(--primary),0.3)] hover:shadow-[0_0_40px_-10px_rgba(var(--primary),0.5)] transition-all hover:scale-105 bg-primary text-primary-foreground min-w-[180px]"
                        onClick={handleScrollToProjects}
                    >
                        <Layers className="mr-2 w-4 h-4" /> Explorar Projetos
                    </Button>

                    <Button
                        variant="outline"
                        size="lg"
                        className="rounded-full h-12 px-8 text-base bg-black/5 dark:bg-white/5 backdrop-blur-sm border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 text-foreground transition-all min-w-[180px] group"
                        asChild
                    >
                        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" download>
                            <Download className="mr-2 w-4 h-4 group-hover:animate-bounce" />
                            Download CV
                        </a>
                    </Button>
                </div>
            </div>

            <div className="hero-text mt-auto pb-12 scroll-indicator">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleScrollToCards}
                    className="rounded-full hover:bg-transparent text-muted-foreground hover:text-primary transition-colors opacity-50 hover:opacity-100"
                >
                    <ArrowDown className="w-6 h-6 md:w-8 md:h-8" />
                    <span className="sr-only">Rolar para baixo</span>
                </Button>
            </div>
        </section>
    );
}