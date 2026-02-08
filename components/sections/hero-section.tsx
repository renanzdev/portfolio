"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Button } from "@/components/ui/components";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const nameRef = useRef<HTMLSpanElement>(null);
    const [currentName, setCurrentName] = useState("Renan");

    // Animação de Entrada do Hero
    useGSAP(
        () => {
            const tl = gsap.timeline();

            tl.from(".hero-text", {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power4.out",
            });

            gsap.to(".scroll-indicator", {
                y: 10,
                repeat: -1,
                yoyo: true,
                duration: 1.5,
                ease: "power1.inOut",
            });
        },
        { scope: containerRef }
    );

    // Animação de Troca de Nome (Renan <-> Rodríguez)
    useGSAP(() => {
        const swapName = () => {
            const tl = gsap.timeline({
                onComplete: () => {
                    gsap.delayedCall(3, swapName);
                },
            });

            tl.to(nameRef.current, {
                y: -50,
                opacity: 0,
                filter: "blur(10px)",
                duration: 0.5,
                ease: "power2.in",
                onComplete: () => {
                    setCurrentName((prev) => (prev === "Renan" ? "Rodríguez" : "Renan"));
                },
            })
                .set(nameRef.current, { y: 50, opacity: 0, filter: "blur(10px)" })
                .to(nameRef.current, {
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 0.8,
                    ease: "power2.out",
                });
        };

        gsap.delayedCall(2, swapName);
    }, []);

    const handleScrollToCards = () => {
        const cardsSection = document.getElementById("main-content");
        if (cardsSection) {
            cardsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            ref={containerRef}
            className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="z-10 space-y-6 max-w-4xl">
                <p className="hero-text text-muted-foreground text-sm md:text-base font-medium tracking-[0.2em] uppercase">
                    Bem-vindo ao meu portfólio
                </p>

                <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
                    Transformando ideias em <br className="hidden md:block" />
                    <span className="text-foreground">código </span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-primary animate-gradient">
                        & inovação.
                    </span>
                </h1>

                <div className="hero-text text-3xl md:text-5xl font-semibold text-muted-foreground mt-4 h-20 md:h-24 overflow-hidden flex items-center justify-center">
                    <span>Eu sou </span>
                    <span
                        ref={nameRef}
                        className="ml-3 md:ml-4 inline-block text-foreground bg-clip-text"
                    >
                        {currentName}
                    </span>
                    <span className="text-primary animate-pulse">_</span>
                </div>
            </div>

            {/* Indicador de Scroll */}
            <div className="hero-text absolute bottom-10 left-1/2 -translate-x-1/2 scroll-indicator">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleScrollToCards}
                    className="rounded-full hover:bg-transparent hover:text-primary transition-colors"
                >
                    <ArrowDown className="w-6 h-6 md:w-8 md:h-8 opacity-50" />
                    <span className="sr-only">Ver projetos</span>
                </Button>
            </div>
        </section>
    );
}