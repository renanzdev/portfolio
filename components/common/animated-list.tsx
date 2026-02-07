import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

interface AnimatedListItem {
  id: string | number;
  [key: string]: any;
}

interface AnimatedListProps<T extends AnimatedListItem> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
  id?: string;
  animationDelay?: number;
  animationDuration?: number;
  staggerDelay?: number;
  horizontal?: boolean; // Nova propriedade para layout horizontal
  horizontalSpacing?: number; // Nova propriedade para espaçamento horizontal
  sameWidth?: boolean; // Nova propriedade para itens com mesma largura
  animateOnScroll?: boolean; // Nova propriedade para controlar animação
}

export function AnimatedList<T extends AnimatedListItem>({
  items,
  renderItem,
  className = "",
  id,
  animationDelay = 0,
  animationDuration = 0.8,
  staggerDelay = 0.05,
  horizontal = false, // Valor padrão
  horizontalSpacing = 0, // Valor padrão
  sameWidth = false, // Valor padrão
  animateOnScroll = true, // Valor padrão
}: AnimatedListProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll(
      ".animated-list-item"
    );

    // Configuração inicial
    gsap.set(elements, {
      y: 50,
      autoAlpha: 0,
      filter: "blur(10px)",
    });

    // Se animateOnScroll for false, anima imediatamente
    if (!animateOnScroll) {
      gsap.to(elements, {
        y: 0,
        autoAlpha: 1,
        duration: animationDuration,
        stagger: staggerDelay,
        ease: "power2.out",
        filter: "blur(0px)",
        delay: animationDelay,
      });
      return;
    }

    // Se animateOnScroll for true, usa ScrollTrigger
    gsap.to(elements, {
      y: 0,
      autoAlpha: 1,
      duration: animationDuration,
      stagger: staggerDelay,
      ease: "power2.out",
      filter: "blur(0px)",
      delay: animationDelay,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%", // Inicia quando o elemento chega a 80% da viewport
        toggleActions: "play none none none",
      },
    });
  }, [items, animateOnScroll]);

  // Classe para o container baseado nas props
  const containerClasses = `${className} ${horizontal ? "flex" : ""} ${horizontal && sameWidth ? "items-stretch w-full" : ""
    }`;

  // Remover margin do último item
  const getItemStyle = (index: number) => {
    const style: React.CSSProperties = {};
    if (horizontal && index < items.length - 1) {
      style.marginRight = `${horizontalSpacing}px`;
    }
    if (sameWidth && horizontal) {
      style.flex = "1";
      style.minWidth = "0"; // Permite que o flex item encolha corretamente
    }
    return style;
  };

  return (
    <div ref={containerRef} className={containerClasses} id={id}>
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`animated-list-item cursor-pointer ${sameWidth && !horizontal ? "w-full" : ""
            } ${horizontal ? "shrink-0" : ""}`}
          style={getItemStyle(index)}
        >
          {renderItem(item, index)}
        </div>
      ))}
    </div>
  );
}
