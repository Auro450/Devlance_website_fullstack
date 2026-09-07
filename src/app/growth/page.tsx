"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TextReveal } from "@/components/ui/text-reveal";

import Image from "next/image";
import { CtaButton } from "@/components/ui/cta-button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const services = [
  { title: "Meta Ads Mastery", desc: "Laser-targeted lead generation and high-converting purchase/sales campaigns." },
  { title: "Influencer Collaboration", desc: "Strategic partnerships with high-impact creators to rapidly scale brand awareness." },
  { title: "Social Media Management", desc: "Curated grid aesthetics, community management, and algorithmic growth." },
  { title: "Content Ideation", desc: "Viral-engineered short-form content, campaign strategies, and raw storytelling." },
  { title: "AI Automation", desc: "Custom AI Chatbots and automated workflows that close sales while you sleep." },
  { title: "WhatsApp Automation", desc: "Seamless WhatsApp integrations to completely automate your customer interactions and sales." }
];

const clients = [
  { name: "EARTHBAGS", src: "/clients/earthbags.png" },
  { name: "TAJA CART", src: "/clients/tajacart-v2.png" },
  { name: "MULTICON GROUP", src: "/clients/multicon-group.png" },
  { name: "PUGAS MOTORS", src: "/clients/pugas-motors.png" },
  { name: "JUTEBAGS", src: "/clients/jutebags-v2.png" },
  { name: "JUPITER FRESH", src: "/clients/falam-v2.png" },
  { name: "CAVA", src: "/clients/cava.png" },
  { name: "FALAM CAFE", src: "/clients/jupiter-v2.png" },
  { name: "ANYTIME FITNESS", src: "/clients/anytime-fitness-v3.png" },
  { name: "RAY'S MEDICAL", src: null }
];

export default function GrowthPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Aggressive hero entry
    gsap.fromTo(
      ".hero-text",
      { y: 100, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        stagger: 0.2,
        ease: "back.out(2)",
      }
    );

    // Aggressive service cards
    gsap.utils.toArray<HTMLElement>(".service-card").forEach((card) => {
      gsap.fromTo(
        card,
        { y: 150, opacity: 0, rotateX: -45 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          ease: "back.out(2.5)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          }
        }
      );
    });

    // Aggressive entry for pricing block
    gsap.fromTo(
      ".pricing-text",
      { y: 50, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: ".pricing-container",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        }
      }
    );
    // Pitch text aggressive animation
    gsap.fromTo(
      ".pitch-text",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: ".pitch-text",
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        }
      }
    );

    // Infinite Marquee
    gsap.to(".marquee-content", {
      xPercent: -50,
      ease: "none",
      duration: 20,
      repeat: -1,
    });

  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen bg-black pt-32 pb-32 overflow-hidden">
      
      {/* Hero Section */}
      <section className="px-8 md:px-24 py-16 md:py-32 flex flex-col justify-center min-h-[70vh]">
        <TextReveal className="text-[15vw] md:text-[12vw] font-bold tracking-tighter leading-[0.8] uppercase text-white mb-8">
          Growth.
        </TextReveal>
        <div className="max-w-4xl mt-8">
          <p className="text-2xl md:text-5xl text-gray-400 font-light leading-tight tracking-tight hero-text">
            Comprehensive Digital Marketing, <span className="text-white font-medium">AI Automation</span>, and WhatsApp Automation ecosystems built to scale your revenue.
          </p>
        </div>
      </section>

      {/* The Pitch */}
      <section className="px-8 md:px-24 py-32 flex flex-col items-start gap-16">
        <div className="max-w-5xl">
          <p className="text-3xl md:text-6xl font-light text-gray-400 leading-tight tracking-tighter pitch-text">
            We engineer the online success of <strong className="font-bold text-white uppercase tracking-tighter">local small brands</strong> through aggressive, data-driven strategies and next-gen AI implementation.
          </p>
        </div>
        
        <div className="pricing-container mt-16 md:mt-32 w-full flex flex-col items-start">
          <h2 className="text-sm md:text-base font-mono tracking-widest text-gray-500 uppercase mb-8 pricing-text">
            The Commitment
          </h2>
          <div className="flex flex-col gap-2 pricing-text">
            <span className="text-4xl md:text-8xl font-bold text-white tracking-tighter uppercase leading-none">
              Affordable Pricing
            </span>
            <span className="text-2xl md:text-4xl font-light text-gray-400 mt-4 tracking-tight">
              Starting at just <strong className="text-white font-medium">Rs 12,000/- per month</strong>
            </span>
          </div>
        </div>
      </section>

      {/* Services Grid (The Arsenal) */}
      <section className="px-8 md:px-24 py-32 border-t border-white/10 relative">
        <h2 className="text-sm font-bold font-mono text-gray-500 tracking-widest uppercase mb-16">Our Arsenal</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
          {services.map((service, i) => (
            <div key={i} className="service-card flex flex-col gap-6 border-l-2 border-white/20 pl-6 hover:border-white transition-colors duration-500 py-4" style={{ perspective: '1000px' }}>
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 font-light leading-relaxed text-lg">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* The Network (Client Logos) */}
      <section className="py-32 border-t border-white/10 overflow-hidden relative flex flex-col items-center">
        <h2 className="text-xl md:text-2xl font-bold font-mono text-gray-400 tracking-widest uppercase mb-24 px-8 text-center">Brands Scaling With Us</h2>
        
        {/* Infinite Scrolling Marquee */}
        <div className="relative w-full flex overflow-hidden whitespace-nowrap py-12 md:py-24">
          <div className="marquee-content flex gap-24 md:gap-48 items-center px-16">
            {/* Double the array to create seamless loop */}
            {[...clients, ...clients, ...clients].map((client, i) => (
              <div key={i} className="flex-shrink-0 flex items-center justify-center min-w-[200px]">
                {client.src ? (
                  <Image 
                    src={client.src} 
                    alt={client.name} 
                    width={200} 
                    height={100} 
                    className="object-contain h-12 md:h-20 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300" 
                    style={{ filter: "grayscale(100%) brightness(0) invert(1)" }} 
                  />
                ) : (
                  <span className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white opacity-70 hover:opacity-100 transition-opacity duration-300" style={{ fontFamily: 'var(--font-inter)' }}>
                    {client.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-8 md:px-12 py-32 mt-16 flex flex-col items-center justify-center text-center border-t border-white/10">
        <TextReveal className="text-4xl md:text-7xl lg:text-[7vw] font-bold tracking-tighter uppercase leading-[0.9] mb-12 max-w-5xl justify-center text-center">
          Dominate Your Market
        </TextReveal>
        <div className="overflow-hidden">
          <CtaButton variant="secondary">Start Scaling Now</CtaButton>
        </div>
      </section>

    </main>
  );
}
