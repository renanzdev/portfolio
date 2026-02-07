"use client";

import { useEffect, useState } from "react";
import AnimatedLogoSvg from "../../components/common/animated-logo-svg";

export default function Loading() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Quando o componente for desmontado, aciona o fade out
    return () => {
      setFadeOut(true);
    };
  }, []);

  // Como o Next.js desmonta imediatamente, precisamos atrasar o unmount
  // Usando um hack: renderiza o fadeOut por 1s antes de desmontar
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (fadeOut) {
      timeout = setTimeout(() => {}, 1000);
    }
    return () => clearTimeout(timeout);
  }, [fadeOut]);

  return (
    <div
      className={`flex flex-col justify-center items-center h-screen w-screen bg-black text-white transition-all duration-1000 ease-in-out ${
        fadeOut
          ? "opacity-0 blur-md pointer-events-none"
          : "opacity-100 blur-none"
      }`}
    >
      <div className="scale-[25%]">
        <AnimatedLogoSvg />
      </div>
    </div>
  );
}
