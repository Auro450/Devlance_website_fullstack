"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TextReveal } from "@/components/ui/text-reveal";
import { CtaButton } from "@/components/ui/cta-button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const portfolio = [
  { name: "Tajacart", role: "UI/UX • E-Commerce", image: "/images/tajacart-full.jpg", url: "https://www.tajacart.in" },
  { name: "Jaywalking", role: "UI/UX • Fashion", image: "/images/jaywalking-full.jpg", url: "https://www.jaywalking.in" },
  { name: "Shopearthbags", role: "UI/UX • Retail", image: "/images/earthbags-ecommerce.png", url: "https://shopearthbags.com" },
  { name: "Multicon Group", role: "UI/UX • Corporate", image: "/images/multicon-enterprise.png", url: "https://www.multicon.in" },
  { name: "Falam Cafe", role: "UI/UX • F&B", image: "/images/falam-full.jpg", url: "https://falam.in" },
  { name: "Cava Cafe", role: "UI/UX • F&B", image: "/images/cava-full.jpg", url: "https://cavaindia.com" }
];

export default function UiUxPage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reveal text elements with same aggressive easing
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
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    // Image Parallax
    gsap.utils.toArray(".parallax-img").forEach((el: any) => {
      gsap.to(el, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: el.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

  }, { scope: container });

  return (
    <main ref={container} className="min-h-screen bg-black text-white selection:bg-white selection:text-black pt-32 md:pt-48 pb-24">
      
      {/* Hero Section */}
      <section className="px-8 md:px-24 mb-32">
        <div className="max-w-6xl">
          <TextReveal delay={0.2} className="text-[12vw] md:text-[8vw] lg:text-[7rem] font-bold tracking-tighter leading-[0.9] uppercase mb-4 text-white">
            Flashy Design.
          </TextReveal>
          <TextReveal delay={0.4} className="text-[12vw] md:text-[8vw] lg:text-[7rem] font-bold tracking-tighter leading-[0.9] uppercase mb-12 text-gray-400">
            Accessible Scale.
          </TextReveal>
          
          <div className="border-t border-white/20 pt-8 mt-16 max-w-3xl reveal-text">
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
              We engineer expensive, premium-level UI/UX that feels incredibly fluid and user-friendly. No more monotonous designs—just catchy, highly interactive experiences that command attention.
            </p>
          </div>
        </div>
      </section>

      {/* The Quote Section */}
      <section className="py-32 md:py-48 px-8 md:px-24 bg-white text-black flex flex-col items-center justify-center text-center">
        <TextReveal className="text-[10vw] md:text-[8vw] lg:text-[6vw] font-bold tracking-tighter leading-[1] uppercase max-w-6xl">
          "Jo dikta hai
        </TextReveal>
        <TextReveal className="text-[10vw] md:text-[8vw] lg:text-[6vw] font-bold tracking-tighter leading-[1] uppercase max-w-6xl">
          wo hi bekta hai."
        </TextReveal>
      </section>

      {/* Value Proposition */}
      <section className="py-32 px-8 md:px-24">
        <div className="max-w-4xl mx-auto text-center reveal-text">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter uppercase mb-8">
            Premium aesthetics shouldn't burn a hole in your pocket.
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light mt-8">
            We've revolutionized agency pricing. Get world-class, flashy UI/UX tailored specifically for small brands and ambitious businesses with the vision to make it big online—all at an incredibly affordable price point.
          </p>
        </div>
      </section>

      {/* Portfolio Showcase Grid */}
      <section className="px-8 md:px-24 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24">
        {portfolio.map((item, i) => (
          <div key={i} className={`flex flex-col gap-6 reveal-text ${i % 2 !== 0 ? 'md:mt-32' : ''}`}>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-gray-900 group cursor-pointer block">
              <div className="absolute inset-0 z-10 bg-black/20 group-hover:bg-transparent transition-colors duration-700 pointer-events-none" />
              <Image 
                src={item.image} 
                alt={item.name} 
                fill
                unoptimized
                className="object-cover object-top scale-[1.2] parallax-img filter contrast-110 saturate-125 transition-transform duration-700 group-hover:scale-100"
              />
            </a>
            <div className="flex justify-between items-center border-t border-white/20 pt-4 px-2">
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter">{item.name}</h3>
              <p className="text-xs md:text-sm font-mono tracking-widest text-gray-500 uppercase">{item.role}</p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="py-32 md:py-48 px-8 md:px-24 text-center border-t border-white/10 mt-16 flex flex-col items-center justify-center">
        <TextReveal className="text-4xl md:text-7xl lg:text-[6vw] font-bold tracking-tighter leading-[0.9] uppercase mb-16 max-w-4xl mx-auto justify-center text-center">
          Need flashy UI/UX for your business?
        </TextReveal>
        
        <div className="reveal-text flex justify-center mt-12">
          <CtaButton>Create Yours</CtaButton>
        </div>
      </section>

    </main>
  );
}
