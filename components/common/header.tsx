"use client";

import { Button } from "@/components/ui/components";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/components";
import { Github, Mail, Linkedin } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import { ModeToggle } from "@/components/common/mode-toggle";
import avatarImage from "../../public/avatar.png";

interface HeaderProps {
  id?: string;
}

export function Header({ id }: HeaderProps) {
  const headerRef = useRef(null);

  useGSAP(
    () => {
      if (headerRef.current) {
        gsap.set(headerRef.current, {
          y: -100,
          opacity: 0,
        });
        gsap.to(headerRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.5,
        });
      }
    },
    { scope: headerRef }
  );

  return (
    <header
      ref={headerRef}
      id={id}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <div className="pointer-events-auto flex items-center gap-2 p-2 rounded-full border border-white/10 bg-background/60 backdrop-blur-xl shadow-xl shadow-black/10 ring-1 ring-white/5 transition-all duration-300 hover:ring-white/10 hover:bg-background/80">

        {/* Avatar */}
        <div className="pl-1 pr-1">
          <Avatar className="w-10 h-10 border border-white/10 shadow-sm transition-transform hover:scale-105">
            <AvatarImage src={avatarImage.src} alt="Renan" />
            <AvatarFallback className="bg-primary/10 text-primary text-xs font-bold">RR</AvatarFallback>
          </Avatar>
        </div>

        <div className="h-5 w-px bg-border/50" />

        {/* Links Sociais */}
        <nav className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="w-10 h-10 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
            asChild
          >
            <a href="https://github.com/renanzdev" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="w-10 h-10 rounded-full text-muted-foreground hover:text-blue-400 hover:bg-blue-400/10 transition-all"
            asChild
          >
            <a href="https://www.linkedin.com/in/renanzdev/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="w-10 h-10 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
            asChild
          >
            <a href="mailto:renangd.dev@gmail.com">
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
        </nav>

        <div className="h-5 w-px bg-border/50" />

        <Button
          variant="default"
          size="sm"
          className="rounded-full h-10 px-5 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/20 hidden sm:flex transition-transform hover:scale-105 active:scale-95"
          asChild
        >
          <a href="mailto:renangd.dev@gmail.com">
            Vamos conversar?
          </a>
        </Button>

        {/* Toggle de Tema */}
        <div className="pl-1 pr-1">
          <div className="w-10 h-10 flex items-center justify-center">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}