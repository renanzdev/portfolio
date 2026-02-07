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

export function useScrollListAnimation<T extends HTMLElement>(
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

  const refs = useRef<T[]>([]);

  useGSAP(() => {
    if (!refs.current.length) return;

    const triggers: ScrollTrigger[] = [];
    const ctx = gsap.context(() => {
      refs.current.forEach((el) => {
        if (!el) return;
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
        if (tl.scrollTrigger) triggers.push(tl.scrollTrigger);
      });
    });

    return () => {
      ctx.revert();
      triggers.forEach((t) => t.kill());
    };
  }, [animateOnScroll, start, toggleActions, animationFn, ...deps]);

  return (el: T | null, index: number) => {
    if (el) refs.current[index] = el;
  };
}
