"use client";

import { useEffect } from "react";
import { useLenis } from "lenis/react";
import { TextReveal } from "@/components/ui/text-reveal";
import { CtaButton } from "@/components/ui/cta-button";
import { TextWipe } from "@/components/ui/text-wipe";
import { HorizontalScroll } from "@/components/ui/horizontal-scroll";
import { ClientMarquee } from "@/components/sections/client-marquee";
import { Industries } from "@/components/sections/industries";
import { Testimonials } from "@/components/sections/testimonials";
import { Metrics } from "@/components/sections/metrics";

export default function Home() {
  const lenis = useLenis();

  useEffect(() => {
    // If user arrived with #contact in URL, smoothly scroll past pinned sections straight to footer
    if (typeof window !== "undefined" && window.location.hash === "#contact") {
      const timer = setTimeout(() => {
        const contactEl = document.getElementById("contact");
        if (contactEl && lenis) {
          lenis.scrollTo(contactEl, { duration: 1.8, offset: 0 });
        } else if (contactEl) {
          contactEl.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [lenis]);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-end pb-24 px-8 md:px-24 pt-48 relative">
        <div className="max-w-6xl w-full">
          <TextReveal delay={0.2} className="text-[14vw] md:text-[10vw] lg:text-[8rem] font-bold tracking-tighter leading-[0.9] uppercase mb-2 lg:mb-4">
            Building the
          </TextReveal>
          <TextReveal delay={0.4} className="text-[14vw] md:text-[10vw] lg:text-[8rem] font-bold tracking-tighter leading-[0.9] uppercase text-gray-400 mb-2 lg:mb-4">
            next generation
          </TextReveal>
          <TextReveal delay={0.6} className="text-[14vw] md:text-[10vw] lg:text-[8rem] font-bold tracking-tighter leading-[0.9] uppercase mb-8 lg:mb-12">
            of digital products.
          </TextReveal>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/20 pt-8">
            <TextWipe delay={0.8} className="block">
              <p className="text-lg md:text-xl text-gray-400 max-w-md">
                Devlance is a premier digital agency specializing in full-stack web applications, mobile applications, striking UI/UX, AI automation, and digital marketing for growth.
              </p>
            </TextWipe>
            <div className="flex md:justify-end items-start">
              <CtaButton>Start a Project</CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 md:py-48 px-8 md:px-24 bg-black flex justify-center text-center">
        <TextReveal className="text-3xl md:text-5xl lg:text-7xl font-medium tracking-tight leading-[1.1] max-w-6xl">
          We partner with visionary brands to design their full-stack websites that demand attention, powered by AI automation and digital marketing for growth.
        </TextReveal>
      </section>

      {/* Clients Section */}
      <ClientMarquee />

      {/* Horizontal Scroll Work Section */}
      <HorizontalScroll />

      {/* Industries Section */}
      <Industries />

      {/* Reviews Section */}
      <Testimonials />

      {/* Metrics Section */}
      <Metrics />
    </main>
  );
}
