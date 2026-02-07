import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

export default function AnimatedLogoSvg() {
  const logoSvgRef = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    if (!logoSvgRef.current) return;

    const paths = logoSvgRef.current.querySelectorAll("path");

    // Estado inicial
    gsap.set(paths, {
      fill: "#fff",
      stroke: "none",
    });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.8 });

    // Fade leve no fill
    tl.to(paths, {
      fill: "#ffffff90",
      duration: 1,
      ease: "sine.inOut",
    });

    // Calcular comprimentos dos paths e setup stroke
    const pathLengths = Array.from(paths).map((path) => ({
      path,
      length: path.getTotalLength() + 2, // folguinha marota
    }));

    pathLengths.forEach(({ path, length }) => {
      gsap.set(path, {
        stroke: "#fff",
        strokeWidth: 3,
        strokeDasharray: length,
        strokeDashoffset: length,
      });
    });

    // Desenhar contorno suave
    pathLengths.forEach(({ path }, i) => {
      tl.to(
        path,
        {
          strokeDashoffset: 0.0001,
          duration: 1.6,
          ease: "power4.inOut",
        },
        i === 0 ? "+=0.2" : "<+=0.3"
      );
    });

    // Brilho suave no fill
    tl.to(
      paths,
      {
        fill: "#ffffff",
        duration: 0.8,
        ease: "expo.inOut",
      },
      "-=0.4"
    );

    // Stroke some de volta
    pathLengths.forEach(({ path, length }) => {
      tl.to(
        path,
        {
          strokeDashoffset: length,
          duration: 1.2,
          ease: "sine.inOut",
        },
        "-=0.8"
      );
    });

    // Reset fill suave
    tl.to(paths, {
      fill: "#fff",
      duration: 0.6,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <svg
      ref={logoSvgRef}
      xmlns="http://www.w3.org/2000/svg"
      width="410"
      height="480"
      viewBox="0 0 410 480"
      fill="none"
    >
      <g clipPath="url(#clip0_2053_14)">
        <path d="M0 47.9C0 74.3545 21.4291 95.8 47.8632 95.8H350.085C376.52 95.8 397.949 74.3545 397.949 47.9C397.949 21.4456 376.52 0 350.085 0H47.8632C21.4292 0 0 21.4456 0 47.9Z" />
        <path d="M131.342 190.231C58.8041 190.231 0 249.08 0 321.675V334.616C0 414.356 64.5935 479 144.274 479H349.627C376.315 479 397.949 457.349 397.949 430.645C397.949 403.937 376.315 382.287 349.631 382.287H142.515C116.207 382.287 94.8807 360.944 94.8807 334.616C94.8807 308.288 116.207 286.945 142.515 286.945H214.365C241.051 286.945 262.685 265.295 262.685 238.588C262.685 211.882 241.051 190.231 214.365 190.231H131.342Z" />
      </g>
      <defs>
        <clipPath id="clip0_2053_14">
          <rect width="410" height="480" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
