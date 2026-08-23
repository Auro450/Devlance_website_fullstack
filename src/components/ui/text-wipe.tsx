"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/utils/cn";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface TextWipeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function TextWipe({ children, className, delay = 0 }: TextWipeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (containerRef.current) {
        gsap.fromTo(
          containerRef.current,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1.5,
            ease: "power2.out",
            delay: delay,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 95%",
              end: "bottom top",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={cn("inline-block", className)}>
      {children}
    </div>
  );
}
