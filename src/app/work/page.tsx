"use client";

import { useRef } from "react";
import Link from "next/link";
import { CtaButton } from "@/components/ui/cta-button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TextReveal } from "@/components/ui/text-reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const projects = [
  { name: "Jupiter Fresh", type: "Quick Commerce WebApp & APK", url: "https://www.jupiterfresh.co.in", desc: "A high-octane quick commerce ecosystem powered by a lightning-fast WebApp, native APK, and an autonomous dispatch architecture built for rapid in-house delivery." },
  { name: "Tajacart", type: "E-Commerce", url: "https://www.tajacart.in", desc: "A lightning-fast quick commerce platform built with a robust custom backend architecture and seamless mobile-first frontend experience." },
  { name: "Jaywalking", type: "High-Fashion E-commerce", url: "https://www.jaywalking.in", desc: "A premium, aggressive, animation-heavy e-commerce experience tailored for a high-end streetwear brand." },
  { name: "Shopearthbags", type: "Retail UI/UX", url: "https://shopearthbags.com", desc: "Complete UI/UX overhaul and custom Shopify integration focusing on conversion rate optimization and brand storytelling." },
  { name: "Multicon Group", type: "Corporate Enterprise", url: "https://www.multicon.in", desc: "Enterprise-grade architecture and custom CMS tailored for a massive real estate and logistics conglomerate." },
  { name: "Falam Cafe", type: "F&B • Cafe", url: "https://falam.in", desc: "A sleek, immersive dark-mode web experience designed to capture the luxury and ambiance of fine artisanal coffee." },
  { name: "Cava Cafe", type: "F&B • Fine Dining", url: "https://cavaindia.com", desc: "A high-end restaurant digital presence featuring 3D culinary elements and seamless table reservation flows." },
  { name: "Ray's Medical", type: "Healthcare", url: "https://www.raysmedical.co.in", desc: "An all-in-one clinic management portal with integrated appointments, pathology tracking, and medicine ordering." },
  { name: "Meatigo", type: "Meat Delivery • E-commerce", url: "https://www.meatigo.com/?srsltid=AfmBOoqDmY5Vyxw6FVQd7TTgNv-2M0j6UcDJNOworI71WVk-cB0zoq4_", desc: "A high-performance e-commerce and cold-chain logistics platform engineered to streamline seamless fresh meat ordering and on-demand delivery." },
  { name: "Cafe Bites", type: "Multi-vendor Delivery", url: "https://cafe-prototype-drab.vercel.app/", desc: "A fully custom multi-vendor food delivery app prototype with real-time tracking and aggressive UI scaling." },
  { name: "Jutebags", type: "E-commerce", desc: "Custom-built retail platform emphasizing sustainable materials with a highly optimized global checkout flow." }
];

export default function WorkPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Timeline spine progress animation
    gsap.to(".timeline-progress", {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".timeline-container",
        start: "top center",
        end: "bottom center",
        scrub: true,
      }
    });

    // Aggressive entry animations for each row
    const rows = gsap.utils.toArray<HTMLElement>(".work-row");
    
    rows.forEach((row) => {
      const leftContent = row.querySelector(".left-content");
      const rightContent = row.querySelector(".right-content");
      const dot = row.querySelector(".timeline-dot");

      // Aggressive slam from left
      gsap.fromTo(
        leftContent,
        { x: -200, opacity: 0, rotateY: -45, scale: 0.8 },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          scale: 1,
          duration: 1.2,
          ease: "back.out(2.5)", // Extremely aggressive back ease
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          }
        }
      );

      // Aggressive slam from right
      gsap.fromTo(
        rightContent,
        { x: 200, opacity: 0, rotateY: 45, scale: 0.8 },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          scale: 1,
          duration: 1.2,
          ease: "back.out(2.5)",
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          }
        }
      );

      // Dot activation flash
      if (dot) {
        gsap.fromTo(
          dot,
          { scale: 0, backgroundColor: "black" },
          {
            scale: 1,
            backgroundColor: "white",
            duration: 0.5,
            ease: "back.out(3)",
            scrollTrigger: {
              trigger: row,
              start: "top center",
              toggleActions: "play reverse play reverse",
            }
          }
        );
      }
    });

    // Call to action animation
    gsap.fromTo(
      ".work-cta-btn",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: ".work-cta-btn",
          start: "top 95%",
          toggleActions: "play reverse play reverse",
        }
      }
    );

  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen bg-black pt-32 pb-32 overflow-hidden">
      {/* Header Section */}
      <section className="px-8 md:px-24 py-16 md:py-32 flex flex-col items-center text-center">
        <TextReveal className="text-5xl md:text-8xl lg:text-[8vw] font-bold tracking-tighter uppercase leading-none mb-8 justify-center text-center">
          Case Studies
        </TextReveal>
        <div className="max-w-2xl mt-8">
          <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
            A deep dive into our elite digital engineering. Bold, unapologetic, and relentlessly custom.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative w-full max-w-7xl mx-auto px-4 md:px-8 mt-16 timeline-container">
        {/* The Spine */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2 hidden md:block">
          <div className="timeline-progress absolute top-0 left-0 w-full h-full bg-white origin-top scale-y-0" />
        </div>

        {/* Project Rows */}
        <div className="flex flex-col gap-32 md:gap-0">
          {projects.map((project, i) => {
            const isEven = i % 2 === 0;

            const TitleBlock = () => (
              <div className="flex flex-col gap-2 group">
                <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter group-hover:text-gray-300 transition-colors duration-500">
                  {project.name}
                </h2>
                <p className="text-sm md:text-base font-mono tracking-widest text-gray-500 uppercase">
                  {project.type}
                </p>
                {project.url && (
                  <div className="mt-4 overflow-hidden w-max hidden md:block">
                    <span className="text-xs uppercase tracking-widest border-b border-white pb-1 group-hover:text-white group-hover:border-white transition-all inline-block translate-y-[120%] group-hover:translate-y-0 duration-300">
                      View Live Project
                    </span>
                  </div>
                )}
              </div>
            );

            const DescBlock = () => (
              <p className="text-lg md:text-2xl font-light text-gray-400 leading-relaxed max-w-md">
                {project.desc}
              </p>
            );

            const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
              if (project.url) {
                return (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="block w-full cursor-pointer">
                    {children}
                  </a>
                );
              }
              return <div className="block w-full">{children}</div>;
            };

            return (
              <div key={i} className="work-row relative flex flex-col md:grid md:grid-cols-2 md:gap-16 py-8 md:py-48 min-h-[50vh] md:min-h-[70vh] items-center text-center md:text-left">
                
                {/* Timeline Dot (Desktop Only) */}
                <div className="timeline-dot absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 border-black bg-white z-10 hidden md:block shadow-[0_0_20px_rgba(255,255,255,0.5)]" />

                {/* Left Side */}
                <div className={`left-content w-full md:pr-16 flex flex-col ${isEven ? 'md:items-end md:text-right' : 'md:items-end justify-center'} mb-8 md:mb-0`} style={{ perspective: '1000px' }}>
                  <ContentWrapper>
                    {isEven ? <TitleBlock /> : <DescBlock />}
                  </ContentWrapper>
                </div>

                {/* Right Side */}
                <div className={`right-content w-full md:pl-16 flex flex-col ${!isEven ? 'md:items-start md:text-left' : 'md:items-start justify-center'}`} style={{ perspective: '1000px' }}>
                  <ContentWrapper>
                    {!isEven ? <TitleBlock /> : <DescBlock />}
                  </ContentWrapper>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-8 md:px-12 py-32 mt-32 flex flex-col items-center justify-center text-center border-t border-white/10">
        <TextReveal className="text-4xl md:text-7xl lg:text-[7vw] font-bold tracking-tighter uppercase leading-[0.9] mb-12 max-w-5xl justify-center text-center">
          Ready to disrupt?
        </TextReveal>
        <div className="work-cta-btn overflow-hidden">
          <CtaButton variant="secondary">Start a Project</CtaButton>
        </div>
      </section>
    </main>
  );
}
