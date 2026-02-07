import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import { useRef, ElementType, ComponentProps } from "react";

type AllowedElements = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

export enum SplitTypesEnum {
  chars = "chars",
  words = "words",
  lines = "lines",
}

type PropsType<T extends AllowedElements> = {
  text: string;
  wrapper: T;
  splitType?: SplitTypesEnum;
  animateOnScroll?: boolean; // Nova prop para controlar animação
} & Omit<ComponentProps<T>, "children" | "ref">;

export default function AnimatedText<T extends AllowedElements>({
  wrapper,
  text,
  splitType = SplitTypesEnum.chars,
  animateOnScroll = true, // Valor padrão
  ...props
}: PropsType<T>) {
  const textRef = useRef<HTMLElementTagNameMap[T]>(null);
  const Wrapper = wrapper as ElementType;

  useGSAP(() => {
    if (!textRef.current) return;

    const split = new SplitText(textRef.current, {
      type: "chars,words,lines",
      charsClass: "animated-text-chars",
    });

    // Configuração inicial
    gsap.set(split[splitType], {
      y: 50,
      autoAlpha: 0,
      filter: "blur(10px)",
    });

    // Se animateOnScroll for false, anima imediatamente
    if (!animateOnScroll) {
      gsap.to(split[splitType], {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        stagger: 0.05,
        ease: "power2.out",
        filter: "blur(0px)",
      });
      return;
    }

    // Se animateOnScroll for true, usa ScrollTrigger
    gsap.to(split[splitType], {
      y: 0,
      autoAlpha: 1,
      duration: 0.8,
      stagger: 0.05,
      ease: "power2.out",
      filter: "blur(0px)",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      split.revert();
    };
  }, [text, animateOnScroll]);

  return (
    <Wrapper ref={textRef} {...props}>
      {text}
    </Wrapper>
  );
}
