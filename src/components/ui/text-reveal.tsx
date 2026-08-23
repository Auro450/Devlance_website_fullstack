"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/utils/cn";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  wordAnimation?: boolean;
}

export function TextReveal({ children, className, delay = 0, wordAnimation = false }: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const elements = containerRef.current?.querySelectorAll(".reveal-text");

      if (elements && elements.length > 0) {
        gsap.fromTo(
          elements,
          {
            y: 150,
            opacity: 0,
            rotationX: -60,
            scale: 0.9,
            transformPerspective: 1000
          },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            scale: 1,
            duration: 1.2,
            stagger: 0.05,
            ease: "back.out(1.5)",
            delay: delay,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 95%",
              end: "bottom 5%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  // Split text by lines or words
  const words = children.split(" ");

  return (
    <div ref={containerRef} className={cn("overflow-hidden flex flex-wrap gap-[0.25em]", className)}>
      {words.map((word, index) => (
        <span key={index} className="inline-flex perspective-[1000px]">
          <span className="reveal-text origin-bottom inline-block">{word}</span>
        </span>
      ))}
    </div>
  );
}
