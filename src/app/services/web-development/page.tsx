"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { CtaButton } from "@/components/ui/cta-button";
import { ArrowUpRight, ShoppingCart, Activity, Building2, Utensils } from "lucide-react";
import { TextReveal } from "@/components/ui/text-reveal";

export default function WebDevelopment() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // We wait a tiny bit for the page transition to finish
    const ctx = gsap.context(() => {
      
      // Hero Split Text Animation
      const heroLetters = gsap.utils.toArray(".hero-letter");
      gsap.fromTo(
        heroLetters,
        { y: 150, opacity: 0, rotateX: -45 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.05,
          ease: "power4.out",
          delay: 0.2 // subtle delay for smooth entry
        }
      );

      // Parallax Hero Text on scroll
      gsap.to(".hero-text-container", {
        yPercent: 30,
        opacity: 0,
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });

      // Standard Reveal for Text
      gsap.utils.toArray(".reveal-text").forEach((el: any) => {
        gsap.fromTo(el, 
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
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play reverse play reverse", // Plays going down, reverses when scrolling back up
            },
          }
        );
      });

      // Section Icons continuous slow breathing animation
      gsap.to(".section-icon", {
        rotate: 15,
        scale: 1.1,
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });
      
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Split text helper
  const SplitText = ({ text }: { text: string }) => {
    return (
      <span className="flex overflow-hidden pb-4">
        {text.split('').map((char, i) => (
          <span key={i} className="hero-letter inline-block transform origin-bottom">
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    );
  };

  return (
    <main ref={containerRef} className="min-h-screen bg-black text-white selection:bg-white selection:text-black pb-32">
      
      {/* Massive Hero Section */}
      <section className="hero-section h-[90vh] flex flex-col justify-end pb-12 md:pb-24 px-8 md:px-12 overflow-hidden relative border-b border-white/10">
        <div className="hero-text-container z-10 w-full">
          <h1 className="text-[14vw] md:text-[15vw] font-bold tracking-tighter uppercase leading-[0.75] m-0 p-0 flex flex-col">
            <SplitText text="DIGITAL" />
            <SplitText text="ECOSYSTEMS" />
          </h1>
        </div>
      </section>

      {/* The Overview (Sticky Layout) */}
      <section className="px-8 md:px-12 py-32 border-b border-white/10 relative">
        <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
          <div className="lg:w-1/3">
            <h2 className="text-sm font-bold font-mono text-white tracking-widest uppercase sticky top-32">The Core</h2>
          </div>
          <div className="lg:w-2/3 flex flex-col gap-32">
            <p className="text-3xl md:text-5xl lg:text-7xl font-light leading-tight tracking-tight reveal-text">
              We engineer custom, full-stack solutions. 
              Not just websites.
            </p>
            <div className="flex flex-col gap-16 border-l border-white/20 pl-8 md:pl-16">
              <div className="reveal-text">
                <h3 className="text-sm font-mono text-white tracking-widest uppercase mb-4">Infrastructure</h3>
                <p className="text-xl md:text-3xl font-light text-gray-400 leading-snug">Deployed on ultra-reliable AWS & Azure VPS for 99.99% uptime and limitless scalability.</p>
              </div>
              <div className="reveal-text">
                <h3 className="text-sm font-mono text-white tracking-widest uppercase mb-4">The Stack</h3>
                <p className="text-xl md:text-3xl font-light text-gray-400 leading-snug">Next.js, Node.js, PostgreSQL, MongoDB. Built to handle millions of queries with zero lag.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecommerce & Quick Commerce */}
      <section id="ecommerce" className="px-8 md:px-12 py-32 relative">
        <div className="flex flex-col lg:flex-row gap-16 md:gap-24 mb-32">
          <div className="lg:w-1/3">
            <h2 className="text-sm font-bold font-mono text-white tracking-widest uppercase sticky top-32 flex items-center gap-4">
              <ShoppingCart className="w-5 h-5 section-icon text-white/50" />
              Ecommerce / Quick Commerce
            </h2>
          </div>
          <div className="lg:w-2/3 flex flex-col gap-16">
            <p className="text-4xl md:text-6xl lg:text-[5vw] font-light leading-none tracking-tighter reveal-text uppercase">
              End-to-end architectures.
            </p>
            
            <div className="reveal-text">
              <p className="text-xl md:text-3xl font-light text-gray-400 leading-relaxed max-w-3xl">
                We build the entire ecosystem: Customer storefronts, Delivery Executive Apps, and AI-stacked Admin Dashboards. Featuring AI Chatbots, secure OTP, Google Maps integration, and live inventory management.
              </p>
            </div>
          </div>
        </div>

        {/* Typography Brand List */}
        <div className="flex flex-col w-full reveal-text">
          <BrandRow name="Shopearthbags" scope="Custom UI/UX • Shopify Int. • Full Stack" href="https://shopearthbags.com" />
          <BrandRow name="Jutebags" scope="Custom E-commerce • UI/UX" href="#" />
          <BrandRow name="Jaywalking" scope="High-Fashion E-commerce • Animation" href="https://www.jaywalking.in/?srsltid=AfmBOooLMEm8ujukjGIZ5og_4DAXKWKyFsmrQ8xMXKGTLvMxQ8krw2wA" />
          <BrandRow name="Tajacart" scope="Quick Commerce Web & App • Full Stack" href="https://www.tajacart.in" />
          <BrandRow name="Jupiter Fresh" scope="Grocery Delivery App • UI/UX" href="#" />
        </div>
      </section>

      {/* Healthcare Platforms */}
      <section id="healthcare" className="px-8 md:px-12 py-32 border-t border-white/10 relative">
        <div className="flex flex-col lg:flex-row gap-16 md:gap-24 mb-32">
          <div className="lg:w-1/3">
            <h2 className="text-sm font-bold font-mono text-white tracking-widest uppercase sticky top-32 flex items-center gap-4">
              <Activity className="w-5 h-5 section-icon text-white/50" />
              Healthcare Platforms
            </h2>
          </div>
          <div className="lg:w-2/3 flex flex-col gap-16">
            <p className="text-4xl md:text-6xl lg:text-[5vw] font-light leading-none tracking-tighter reveal-text uppercase">
              Digital convenience.
            </p>
            
            <div className="reveal-text">
              <p className="text-xl md:text-3xl font-light text-gray-400 leading-relaxed max-w-3xl">
                Comprehensive all-in-one clinic websites featuring doctor appointments, pathology home collection, medicine booking, and advanced admin workflows. Built like Tata 1mg and PharmEasy.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full reveal-text">
          <BrandRow name="Ray's Medical" scope="All-in-one Clinic • Appointments • Pathology • Medicine" href="https://www.raysmedical.co.in" />
        </div>
      </section>

      {/* Enterprise Websites */}
      <section id="enterprise" className="px-8 md:px-12 py-32 border-t border-white/10 relative">
        <div className="flex flex-col lg:flex-row gap-16 md:gap-24 mb-32">
          <div className="lg:w-1/3">
            <h2 className="text-sm font-bold font-mono text-white tracking-widest uppercase sticky top-32 flex items-center gap-4">
              <Building2 className="w-5 h-5 section-icon text-white/50" />
              Enterprise Websites
            </h2>
          </div>
          <div className="lg:w-2/3 flex flex-col gap-16">
            <p className="text-4xl md:text-6xl lg:text-[5vw] font-light leading-none tracking-tighter reveal-text uppercase">
              Multi-layered scale.
            </p>

            <div className="reveal-text">
              <p className="text-xl md:text-3xl font-light text-gray-400 leading-relaxed max-w-3xl">
                Complex, highly-secure architectures and bespoke CMS platforms engineered specifically for conglomerates and large-scale corporate entities.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full reveal-text">
          <BrandRow name="Multicon Group" scope="Enterprise Architecture • Custom CMS" href="https://www.multicon.in" />
        </div>
      </section>

      {/* Food Delivery Apps */}
      <section id="food" className="px-8 md:px-12 py-32 border-t border-white/10 relative">
        <div className="flex flex-col lg:flex-row gap-16 md:gap-24 mb-32">
          <div className="lg:w-1/3">
            <h2 className="text-sm font-bold font-mono text-white tracking-widest uppercase sticky top-32 flex items-center gap-4">
              <Utensils className="w-5 h-5 section-icon text-white/50" />
              Food Delivery Apps
            </h2>
          </div>
          <div className="lg:w-2/3 flex flex-col gap-16">
            <p className="text-4xl md:text-6xl lg:text-[5vw] font-light leading-none tracking-tighter reveal-text uppercase">
              Craving scale.
            </p>

            <div className="reveal-text">
              <p className="text-xl md:text-3xl font-light text-gray-400 leading-relaxed max-w-3xl">
                We engineer complete food delivery ecosystems like Swiggy and Zomato. Full stack architectures featuring high-fidelity UI/UX, built for both single-vendor and multi-vendor scalability.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full reveal-text">
          <BrandRow name="Cafe Bites" scope="Food Delivery App • Multi-vendor" href="https://cafe-prototype-drab.vercel.app/" />
          <BrandRow name="Falam Cafe" scope="Cafe & Restaurant • UI/UX" href="https://falam.in" />
          <BrandRow name="Cava Cafe" scope="Premium Cafe • Web Development" href="https://cavaindia.com" />
          <BrandRow name="Meatigo" scope="Meat Delivery • E-commerce" href="https://www.meatigo.com/?srsltid=AfmBOoqDmY5Vyxw6FVQd7TTgNv-2M0j6UcDJNOworI71WVk-cB0zoq4_" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-8 md:px-12 py-16 md:py-24 flex flex-col items-center justify-center text-center">
        <TextReveal className="text-4xl md:text-7xl lg:text-[7vw] font-bold tracking-tighter uppercase leading-[0.9] mb-8 max-w-5xl justify-center">
          Need a website for your business?
        </TextReveal>
        <div className="reveal-text">
          <CtaButton>Request now</CtaButton>
        </div>
      </section>

    </main>
  );
}

// Ultra-premium Typography Brand Row
export function BrandRow({ name, scope, href }: { name: string; scope: string; href: string }) {
  const isExternal = href && href.startsWith("http");

  return (
    <a
      href={href || "#"}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      onClick={(e) => {
        if (!href || href === "#") {
          e.preventDefault();
        }
      }}
      className="group flex flex-col lg:flex-row lg:items-center justify-between py-8 sm:py-10 md:py-14 border-b border-white/10 hover:border-white/40 transition-colors duration-500 cursor-pointer overflow-hidden block w-full"
    >
      {/* Brand Name - Rolling text on hover */}
      <div className="relative overflow-hidden inline-block h-[3.2rem] sm:h-[4.2rem] md:h-[5.5rem] lg:h-[6.8rem] mb-3 lg:mb-0">
        {/* Primary state */}
        <div className="flex text-4xl sm:text-5xl md:text-7xl lg:text-[6.5vw] font-bold tracking-tighter uppercase transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full whitespace-nowrap text-white/60 group-hover:text-white leading-none py-1">
          {name.split("").map((char, i) => (
            <span key={i} className="inline-block" style={{ transitionDelay: `${i * 0.015}s` }}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
        {/* Hover state (Slides up from bottom) */}
        <div className="flex text-4xl sm:text-5xl md:text-7xl lg:text-[6.5vw] font-bold tracking-tighter uppercase absolute top-full left-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full whitespace-nowrap text-white leading-none py-1">
          {name.split("").map((char, i) => (
            <span key={i} className="inline-block" style={{ transitionDelay: `${i * 0.015}s` }}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between lg:justify-end gap-4 lg:gap-8 opacity-80 group-hover:opacity-100 transition-all duration-500 lg:-translate-x-6 group-hover:translate-x-0">
        <span className="text-xs md:text-sm font-mono tracking-wider uppercase text-gray-400 group-hover:text-white transition-colors">
          {scope}
        </span>
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/[0.06] group-hover:bg-white text-white group-hover:text-black flex items-center justify-center transition-all duration-500 shrink-0">
          <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-500 group-hover:rotate-45" />
        </div>
      </div>
    </a>
  );
}
