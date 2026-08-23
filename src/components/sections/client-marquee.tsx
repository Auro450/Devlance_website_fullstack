"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextReveal } from "@/components/ui/text-reveal";

const row1 = ["Shopearthbags", "Jutebags", "Ray's Medical", "Taja Cart", "Jupiter Fresh", "Sg Garai Ev", "Multicon Group", "Jaywalking"];
const row2 = ["Anytime Fitness", "Meatigo", "Earthbags", "Jewel Box", "Falam Cafe", "Dada's Dhaba", "Cava Cafe"];

export function ClientMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const marquee1Ref = useRef<HTMLDivElement>(null);
  const marquee2Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Create seamless infinite loops for the marquees
      if (marquee1Ref.current && marquee2Ref.current) {
        gsap.to(marquee1Ref.current, {
          xPercent: -50,
          ease: "none",
          duration: 30,
          repeat: -1,
        });

        // For row 2 moving right, we start it at -50% and animate to 0%
        gsap.set(marquee2Ref.current, { xPercent: -50 });
        gsap.to(marquee2Ref.current, {
          xPercent: 0,
          ease: "none",
          duration: 35,
          repeat: -1,
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-24 md:py-32 overflow-hidden bg-zinc-950 border-t border-white/5">
      <div className="px-8 md:px-24 mb-16">
        <p className="text-sm text-gray-500 mb-2 uppercase tracking-widest font-mono">Our Network</p>
        <TextReveal className="text-3xl md:text-5xl font-semibold tracking-tight">
          Visionaries we call friends.
        </TextReveal>
      </div>

      <div className="relative flex flex-col gap-8 md:gap-12 w-[200vw] md:w-[200vw] -left-[10vw]">
        {/* Row 1 - Moves Left */}
        <div className="flex w-max" ref={marquee1Ref}>
          <div className="flex gap-8 md:gap-16 items-center px-4 md:px-8">
            {[...row1, ...row1, ...row1, ...row1].map((client, i) => (
              <h3 
                key={i} 
                className="text-5xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter uppercase text-transparent whitespace-nowrap transition-colors duration-300 hover:text-white cursor-default"
                style={{ WebkitTextStroke: "2px rgba(255,255,255,0.6)" }}
              >
                {client} <span className="text-white/20 mx-4 md:mx-8" style={{ WebkitTextStroke: "0px" }}>*</span>
              </h3>
            ))}
          </div>
        </div>

        {/* Row 2 - Moves Right */}
        <div className="flex w-max relative" ref={marquee2Ref}>
          <div className="flex gap-8 md:gap-16 items-center px-4 md:px-8">
            {[...row2, ...row2, ...row2, ...row2].map((client, i) => (
              <h3 
                key={i} 
                className="text-5xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter uppercase whitespace-nowrap text-white"
              >
                {client} <span className="text-white/20 mx-4 md:mx-8">*</span>
              </h3>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
