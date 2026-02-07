import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface UseScrollAnimationProps {
  animateOnScroll?: boolean;
  start?: string;
  toggleActions?: string;
  markers?: boolean;
}

export function useScrollAnimation<T extends HTMLElement>(
  animationFn: (element: T, tl: gsap.core.Timeline) => void,
  deps: React.DependencyList = [],
  options: UseScrollAnimationProps = {}
) {
  const {
    animateOnScroll = true,
    start = "top 90%",
    toggleActions = "play none none none",
    markers = false,
  } = options;
  const elementRef = useRef<T | null>(null);

  useGSAP(() => {
    const el = elementRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: animateOnScroll
          ? {
              trigger: el,
              start,
              toggleActions,
              markers,
            }
          : undefined,
      });
      animationFn(el, tl);
    }, el);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [animateOnScroll, start, toggleActions, animationFn, ...deps]);

  return elementRef;
}
