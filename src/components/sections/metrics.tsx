"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Metrics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1 = useRef<HTMLDivElement>(null);
  const text2 = useRef<HTMLDivElement>(null);
  const text3 = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Scrubbed parallax for each row moving in opposite directions
    gsap.to(text1.current, {
      xPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1, // Smooth scrub
      }
    });

    gsap.to(text2.current, {
      xPercent: -15,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    });

    gsap.to(text3.current, {
      xPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 md:py-48 bg-black overflow-hidden flex flex-col justify-center border-t border-white/5 relative">
      
      {/* Absolute faint grid background for a highly engineered, technical feel */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Wrapping in a container wider than the screen to allow parallax scrolling */}
      <div className="flex flex-col gap-2 md:gap-6 whitespace-nowrap relative z-10 w-[200vw] -ml-[50vw]">
        
        {/* Row 1 */}
        <div ref={text1} className="flex gap-8 items-center text-[15vw] md:text-[9vw] font-bold tracking-tighter uppercase text-white -translate-x-[15vw]">
          <span>50+ Happy Clients</span>
          <span className="text-white/20 font-light">•</span>
          <span>50+ Happy Clients</span>
          <span className="text-white/20 font-light">•</span>
          <span>50+ Happy Clients</span>
          <span className="text-white/20 font-light">•</span>
          <span>50+ Happy Clients</span>
        </div>

        {/* Row 2 */}
        <div ref={text2} className="flex gap-8 items-center text-[15vw] md:text-[9vw] font-bold tracking-tighter uppercase text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.5)] translate-x-[5vw]">
          <span>Reliable Service</span>
          <span className="text-white/20 font-light [-webkit-text-stroke:0px]">•</span>
          <span>Reliable Service</span>
          <span className="text-white/20 font-light [-webkit-text-stroke:0px]">•</span>
          <span>Reliable Service</span>
          <span className="text-white/20 font-light [-webkit-text-stroke:0px]">•</span>
          <span>Reliable Service</span>
        </div>

        {/* Row 3 */}
        <div ref={text3} className="flex gap-8 items-center text-[15vw] md:text-[9vw] font-bold tracking-tighter uppercase text-white -translate-x-[20vw]">
          <span>Affordable Pricing</span>
          <span className="text-white/20 font-light">•</span>
          <span>Affordable Pricing</span>
          <span className="text-white/20 font-light">•</span>
          <span>Affordable Pricing</span>
          <span className="text-white/20 font-light">•</span>
          <span>Affordable Pricing</span>
        </div>

      </div>
    </section>
  );
}
