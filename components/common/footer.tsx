import { Quote } from "lucide-react";
import AnimatedText, { SplitTypesEnum } from "./animated-text";
import { useScrollAnimation } from "../../hooks/use-scroll-animation";
import { gsap } from "gsap";

interface FooterProps {
  id?: string;
}

export function Footer({ id }: FooterProps) {
  const quoteDivRef = useScrollAnimation<HTMLDivElement>(
    (el, tl) => {
      gsap.set(el, { autoAlpha: 0, y: 40 }); // elemento começa invisível e deslocado
      tl.to(el, { autoAlpha: 1, y: 0, duration: 1, ease: "power2.out" }); // surge e sobe
    },
    [],
    { animateOnScroll: true, start: "top 90%" }
  );

  return (
    <footer className="w-full bg-card/30 border-t border-border py-12" id={id}>
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Citação motivacional */}
        <div className="text-center mb-8">
          <div ref={quoteDivRef} className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Quote className="w-6 h-6 text-primary" />
            </div>
          </div>

          <AnimatedText
            text="'Cada pequena melhoria tem um impacto gigantesco no resultado
            final!'"
            wrapper="span"
            className="text-xl md:text-2xl font-medium text-balance mb-4"
            splitType={SplitTypesEnum.words}
          />
          <AnimatedText
            text="— Renan Rodríguez"
            wrapper="span"
            className="text-muted-foreground"
          />
        </div>

        {/* Informações do footer */}
        <div className="text-center space-y-2 text-sm text-muted-foreground">
          <AnimatedText
            text="© 2026 Renan Rodríguez. Todos os direitos reservados."
            wrapper="p"
            splitType={SplitTypesEnum.words}
          />
          <AnimatedText
            text="Desenvolvedor Full-Stack • Desde 2022"
            wrapper="p"
            splitType={SplitTypesEnum.words}
          />
        </div>
      </div>
    </footer>
  );
}
