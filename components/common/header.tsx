import { Button } from "@/components/ui/components";
import { Avatar, AvatarFallback } from "@/components/ui/components";
import { Github, Mail, Instagram, Twitter, Youtube } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import { AvatarImage } from "@radix-ui/react-avatar";
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
          opacity: 0,
          y: -80,
        });
        gsap.to(headerRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power1.inOut",
        });
      }
    },
    { scope: headerRef }
  );

  return (
    <header
      ref={headerRef}
      className="w-full bg-card/50 backdrop-blur-sm border-b border-border sticky top-0 z-50"
      style={{
        opacity: 0,
        transform: "translateY(-80px)",
      }}
      id={id}
    >
      <div className="container mx-auto spacing-fluid-md max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-fluid-md">

          {/* Avatar e informações principais */}
          <div className="flex items-center gap-fluid-sm w-full md:w-auto">
            <div className="relative shrink-0">
              <Avatar
                className="w-12 h-12 md:w-16 md:h-16 border-2 border-border"
                style={{
                  width: `clamp(3rem, 3rem + 1 * ((100vw - 23.4375rem) / 96.5625), 4rem)`,
                  height: `clamp(3rem, 3rem + 1 * ((100vw - 23.4375rem) / 96.5625), 4rem)`,
                }}
              >
                <AvatarImage src={avatarImage.src} />
                <AvatarFallback className="bg-primary text-primary-foreground text-fluid-lg font-bold">
                  EA
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="font-bold text-balance leading-tight">
                Renan Rodríguez
              </h1>
              <p className="text-muted-foreground text-fluid-lg leading-tight">
                Desenvolvedor Full-Stack
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center xs:justify-start md:justify-end gap-fluid-md w-full md:w-auto">
            <Button
              variant="default"
              size="sm"
              className="shimmer hover:scale-105 transition-transform text-fluid-sm"
              asChild
            >
              <a href="mailto:renangd.dev@gmail.com">
                <Mail
                  style={{
                    width: `clamp(0.75rem, 0.75rem + 0.25 * ((100vw - 23.4375rem) / 96.5625), 1rem)`,
                    height: `clamp(0.75rem, 0.75rem + 0.25 * ((100vw - 23.4375rem) / 96.5625), 1rem)`,
                  }}
                  className="mr-2"
                />
                Contato
              </a>
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="hover:scale-105 transition-transform bg-transparent text-fluid-sm"
              asChild
            >
              <a
                href="https://github.com/renanzdev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github
                  style={{
                    width: `clamp(0.75rem, 0.75rem + 0.25 * ((100vw - 23.4375rem) / 96.5625), 1rem)`,
                    height: `clamp(0.75rem, 0.75rem + 0.25 * ((100vw - 23.4375rem) / 96.5625), 1rem)`,
                  }}
                  className="mr-2"
                />
                GitHub
              </a>
            </Button>

              <Button
                variant="ghost"
                size="sm"
                className="hover:scale-110 transition-transform text-muted-foreground hover:text-foreground"
                style={{
                  padding: `clamp(0.375rem, 0.375rem + 0.125 * ((100vw - 23.4375rem) / 96.5625), 0.5rem)`,
                }}
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/renanzdev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="clamp(0.75rem, 0.75rem + 0.25 * ((100vw - 23.4375rem) / 96.5625), 1rem)"
                    height="clamp(0.75rem, 0.75rem + 0.25 * ((100vw - 23.4375rem) / 96.5625), 1rem)"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.768 0-1.003.784-1.768 1.75-1.768.966 0 1.75.784 1.75 1.768 0 1.024-.787 1.768-1.75 1.768zm13.5 11.268h-3v-5.604c0-1.337-.026-3.062-1.867-3.062-1.868 0-2.154 1.459-2.154 2.965v5.701h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.562 2.839-1.562 3.037 0 3.6 2 3.6 4.594v5.601z" />
                  </svg>
                </a>
              </Button>

              <ModeToggle />

            </div>
          </div>
        </div>
    </header>
  );
}
