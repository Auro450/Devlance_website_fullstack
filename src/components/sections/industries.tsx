"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextReveal } from "@/components/ui/text-reveal";
import { 
  ShoppingBag, 
  Utensils, 
  Sparkles, 
  Dumbbell, 
  ShoppingBasket, 
  HeartPulse, 
  Zap, 
  Cpu, 
  Building2 
} from "lucide-react";

const industries = [
  { name: "E-commerce", icon: ShoppingBag },
  { name: "Food & Beverage", icon: Utensils },
  { name: "Fashion", icon: Sparkles },
  { name: "Fitness & Gym", icon: Dumbbell },
  { name: "Grocery", icon: ShoppingBasket },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Electric Vehicles", icon: Zap },
  { name: "Electronics", icon: Cpu },
  { name: "Enterprise", icon: Building2 },
];

export function Industries() {
  const containerRef = useRef<HTMLDivElement>(null);
  const marquee1Ref = useRef<HTMLDivElement>(null);
  const marquee2Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (marquee1Ref.current && marquee2Ref.current) {
        gsap.to(marquee1Ref.current, {
          xPercent: -50,
          ease: "none",
          duration: 35,
          repeat: -1,
        });

        gsap.set(marquee2Ref.current, { xPercent: -50 });
        gsap.to(marquee2Ref.current, {
          xPercent: 0,
          ease: "none",
          duration: 40,
          repeat: -1,
        });
      }
    },
    { scope: containerRef }
  );

  const row1 = industries.slice(0, 5);
  const row2 = industries.slice(5);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-black relative overflow-hidden border-t border-white/10">
      <div className="px-8 md:px-24 mb-16 md:mb-24">
        <p className="text-sm text-gray-500 mb-4 uppercase tracking-widest font-mono">Our Domain</p>
        <TextReveal className="text-4xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter">
          Industries we transform.
        </TextReveal>
      </div>

      <div className="relative flex flex-col gap-12 md:gap-20 w-[200vw] md:w-[200vw] -left-[10vw]">
        {/* Row 1 - Moves Left */}
        <div className="flex w-max" ref={marquee1Ref}>
          <div className="flex gap-12 md:gap-24 items-center px-4 md:px-8">
            {[...row1, ...row1, ...row1, ...row1].map((industry, i) => {
              const Icon = industry.icon;
              return (
                <div key={i} className="flex items-center gap-4 md:gap-8 group cursor-default">
                  <Icon className="w-8 h-8 md:w-12 md:h-12 text-white/50 group-hover:text-white transition-colors duration-300" strokeWidth={1} />
                  <h3 
                    className="text-3xl md:text-5xl font-light tracking-wider uppercase text-transparent whitespace-nowrap transition-colors duration-300 group-hover:text-white" 
                    style={{ WebkitTextStroke: "1px rgba(255,255,255,0.6)" }}
                  >
                    {industry.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2 - Moves Right */}
        <div className="flex w-max relative" ref={marquee2Ref}>
          <div className="flex gap-12 md:gap-24 items-center px-4 md:px-8">
            {[...row2, ...row2, ...row2, ...row2, ...row2, ...row2].map((industry, i) => {
              const Icon = industry.icon;
              return (
                <div key={i} className="flex items-center gap-4 md:gap-8 group cursor-default">
                  <h3 
                    className="text-3xl md:text-5xl font-light tracking-wider uppercase whitespace-nowrap text-white transition-colors duration-300" 
                  >
                    {industry.name}
                  </h3>
                  <Icon className="w-8 h-8 md:w-12 md:h-12 text-white group-hover:text-white/50 transition-colors duration-300" strokeWidth={1} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
