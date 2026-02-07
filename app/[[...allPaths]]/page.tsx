"use client";

import { PortfolioLayout } from "@/components/layout";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  return (
    <>
      <PortfolioLayout id="portfolio-container" />
    </>
  );
}
