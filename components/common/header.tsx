"use client";

import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/components";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/components";
import { Github, Mail, Linkedin } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ModeToggle } from "@/components/common/mode-toggle";

interface HeaderProps {
  id?: string;
}

export function Header({ id }: HeaderProps) {
  const headerRef = useRef<HTMLElement>(null);
  const [lang, setLang] = useState<"pt" | "en">("pt");

  useEffect(() => {
    if (typeof window !== "undefined" && navigator.language) {
      const browserLang = navigator.language.split("-")[0];
      if (browserLang === "en") {
        setLang("en");
      }
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === "pt" ? "en" : "pt";
    setLang(newLang);
  };

  useGSAP(
    () => {
      if (headerRef.current) {
        gsap.set(headerRef.current, { y: -100, opacity: 0 });
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

  const FlagBR = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-full h-full object-cover">
      <circle cx="256" cy="256" r="256" fill="#009b3a" />
      <polygon points="256,53.3 458.7,256 256,458.7 53.3,256" fill="#fedf00" />
      <circle cx="256" cy="256" r="114.7" fill="#002776" />
      <path d="M103.1,256c0-84.4,68.4-152.9,152.9-152.9c84.4,0,152.9,68.4,152.9,152.9" fill="none" stroke="#fff" strokeWidth="22" transform="rotate(-15 256 256)" />
    </svg>
  );

  const FlagUS = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-full h-full object-cover">
      <mask id="us-mask"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
      <g mask="url(#us-mask)">
        <rect width="512" height="512" fill="#bf0a30" />
        <path d="M0,39.4h512M0,118.1h512M0,196.9h512M0,275.7h512M0,354.5h512M0,433.2h512" stroke="#fff" strokeWidth="39.4" />
        <rect width="236.3" height="275.7" fill="#002868" />
        <g fill="#fff">
          <circle cx="50" cy="50" r="15" /><circle cx="118" cy="50" r="15" /><circle cx="186" cy="50" r="15" />
          <circle cx="84" cy="100" r="15" /><circle cx="152" cy="100" r="15" />
          <circle cx="50" cy="150" r="15" /><circle cx="118" cy="150" r="15" /><circle cx="186" cy="150" r="15" />
          <circle cx="84" cy="200" r="15" /><circle cx="152" cy="200" r="15" />
          <circle cx="50" cy="250" r="15" /><circle cx="118" cy="250" r="15" /><circle cx="186" cy="250" r="15" />
        </g>
      </g>
    </svg>
  );

  return (
    <header
      ref={headerRef}
      id={id}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center items-center px-4 pointer-events-none"
    >
      <div className="pointer-events-auto flex items-center gap-2 p-2 rounded-full border border-black/5 dark:border-white/10 bg-background/60 backdrop-blur-xl shadow-xl shadow-black/5 dark:shadow-black/10 ring-1 ring-black/5 dark:ring-white/5 transition-all duration-300 hover:ring-black/10 dark:hover:ring-white/10 hover:bg-background/80">

        <div className="pl-1 pr-1">
          <Avatar className="w-10 h-10 border border-black/5 dark:border-white/10 shadow-sm transition-transform hover:scale-105">
            <AvatarImage src="/avatar.png" alt="Renan" />
            <AvatarFallback className="bg-primary/10 text-primary text-xs font-bold">RR</AvatarFallback>
          </Avatar>
        </div>

        <div className="h-5 w-px bg-border/50" />

        <nav className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10 transition-all" asChild>
            <a href="https://github.com/renanzdev" target="_blank" rel="noopener noreferrer"><Github className="w-5 h-5" /></a>
          </Button>
          <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full text-muted-foreground hover:text-blue-500 dark:hover:text-blue-400 hover:bg-blue-500/10 dark:hover:bg-blue-400/10 transition-all" asChild>
            <a href="https://www.linkedin.com/in/renanzdev/" target="_blank" rel="noopener noreferrer"><Linkedin className="w-5 h-5" /></a>
          </Button>
          <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10 transition-all" asChild>
            <a href="mailto:renangd.dev@gmail.com"><Mail className="w-5 h-5" /></a>
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

        <div className="h-5 w-px bg-border/50 hidden sm:block" />
        <div className="flex items-center gap-1 pl-1 pr-1">

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="w-10 h-10 rounded-full p-0 overflow-hidden border border-transparent transition-all hover:scale-105 relative group"
            title={lang === "pt" ? "Switch to English" : "Mudar para Português"}
          >
            {lang === "pt" ? <FlagBR /> : <FlagUS />}

            <div className="absolute inset-0 bg-transparent group-hover:bg-black/5 dark:group-hover:bg-white/10 transition-colors"></div>
          </Button>
          <div className="w-10 h-10 flex items-center justify-center">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}