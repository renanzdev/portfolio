import { Button } from "@/components/ui/components";
import { Mail, Github, Instagram, Twitter, Youtube } from "lucide-react";
import AnimatedText, { SplitTypesEnum } from "../common/animated-text";
import { AnimatedList } from "../common/animated-list";
import { useScrollAnimation } from "../common";
import { BaseCard } from "../base";
import { gsap } from "gsap";

interface ContactSectionProps {
  id?: string;
}

export function ContactSection({ id }: ContactSectionProps) {
  // Anchor de email com animação
  const sendEmailAnchorRef = useScrollAnimation<HTMLAnchorElement>(
    (el, tl) => {
      gsap.set(el, { autoAlpha: 0, y: 60 });
      tl.to(el, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
      });
    },
    [],
    { animateOnScroll: true, start: "top 90%" }
  );

  // Card inteiro com animação
  const contactCardRef = useScrollAnimation<HTMLDivElement>(
    (el, tl) => {
      gsap.set(el, { autoAlpha: 0, y: 60 });
      tl.to(el, { autoAlpha: 1, y: 0, duration: 1, ease: "power2.out" });
    },
    [],
    { animateOnScroll: true, start: "top 90%" }
  );

  const socialLinks = [
    {
      id: "github",
      icon: Github,
      label: "GitHub",
      href: "https://github.com/renanzdev",
      color: "hover:text-gray-400",
    },
    {
      id: "instagram",
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/renann7d",
      color: "hover:text-pink-400",
    },
    {
      id: "twitter",
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/#",
      color: "hover:text-blue-400",
    },
    {
      id: "youtube",
      icon: Youtube,
      label: "YouTube",
      href: "https://youtube.com/@renanzdev",
      color: "hover:text-red-400",
    },
  ];

  return (
    <section className="w-full bg-secondary/20 py-16" id={id}>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <AnimatedText
            className="text-3xl md:text-4xl font-bold mb-4 text-balance"
            text="Vamos trabalhar juntos?"
            wrapper="h2"
            splitType={SplitTypesEnum.chars}
          />
          <AnimatedText
            className="text-lg text-muted-foreground text-pretty"
            text="Estou sempre aberto a novos projetos e oportunidades interessantes"
            wrapper="p"
            splitType={SplitTypesEnum.words}
          />
        </div>

        <BaseCard ref={contactCardRef} className="opacity-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Informações de contato */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div>
                  <AnimatedText
                    className="font-semibold"
                    text="Email"
                    wrapper="h3"
                  />
                  <AnimatedText
                    className="text-muted-foreground"
                    text="renangd.dev@gmail.com"
                    wrapper="p"
                  />
                </div>
              </div>
              <Button
                size="lg"
                className="w-full shimmer hover:scale-105"
                asChild
              >
                <a
                  ref={sendEmailAnchorRef}
                  href="mailto:renangd.dev@gmail.com"
                  className="flex items-center justify-center gap-2 w-full"
                >
                  <Mail className="w-6 h-6 text-zinc-50" />
                  <p className="text-zinc-50">Enviar Email</p>
                </a>
              </Button>
            </div>

            {/* Botões de redes sociais */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div>
                  <AnimatedText
                    wrapper="h3"
                    className="font-semibold"
                    text="Redes Sociais"
                  />
                  <AnimatedText
                    className="text-muted-foreground"
                    text="Conecte-se comigo nas redes"
                    wrapper="p"
                  />
                </div>
              </div>

              <AnimatedList
                items={socialLinks}
                renderItem={(social) => (
                  <Button
                    variant="secondary"
                    size="sm"
                    className={`hover:scale-105 transition-all ${social.color} w-full`}
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="w-4 h-4 mr-2" />
                      {social.label}
                    </a>
                  </Button>
                )}
                className="grid grid-cols-2 gap-2"
              />
            </div>
          </div>
        </BaseCard>
      </div>
    </section>
  );
}
