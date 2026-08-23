"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextReveal } from "@/components/ui/text-reveal";
import { Quote } from "lucide-react";

const reviews = [
  {
    brand: "Earthbags",
    name: "Anurag Himatsinga",
    role: "Founder & Director",
    content: "Devlance completely transformed our digital presence. Their targeted lead generation and social media strategies didn't just boost our metrics—they drove real, measurable growth. Their team understands the pulse of modern digital marketing like no one else."
  },
  {
    brand: "Shopearthbags",
    name: "Anurag Himatsinga",
    role: "Founder & Director",
    content: "The UI/UX overhaul and seamless Shopify integration they delivered for Shopearthbags was extraordinary. Coupled with their highly optimized Meta campaigns, our online sales have skyrocketed. They built an experience that actually converts."
  },
  {
    brand: "Ray's Medical",
    name: "Rajib Roy",
    role: "Owner",
    content: "We needed a complex, all-in-one healthcare platform to handle appointments, pathology, and an online pharmacy. Devlance engineered a flawless full-stack solution and amplified it with brilliant Meta ads. They didn't just build a website; they built the backbone of our digital operations."
  },
  {
    brand: "Taja Cart",
    name: "Papai Banik",
    role: "Founder",
    content: "Building a quick-commerce platform requires absolute precision and speed. Devlance delivered an incredibly robust Web and Android app for Taja Cart, and their targeted ad campaigns brought us our very first surge of loyal customers. Truly exceptional execution."
  },
  {
    brand: "Multicon Group",
    name: "Dilip Singh Mehta",
    role: "CEO & Founder",
    content: "As an enterprise with a rich legacy and multiple ventures, we needed a digital platform that commanded respect and showcased our diverse portfolio. Devlance designed a dynamic, high-performance architecture that perfectly encapsulates our vision and heritage."
  },
  {
    brand: "Jupiter Fresh",
    name: "Benu Sekh",
    role: "Owner",
    content: "The full-stack quick commerce application Devlance developed for Jupiter Fresh is nothing short of revolutionary. Their deep understanding of user experience, combined with hyper-targeted Meta sales campaigns, scaled our daily orders beyond expectations."
  },
  {
    brand: "Cava Cafe",
    name: "Simran Agarwal",
    role: "Owner",
    content: "Devlance captured the soul of Cava Cafe beautifully. The bespoke UI/UX and seamless full-stack app they designed tells our brand story perfectly while making the menu experience effortless for our customers. They are true digital artisans."
  }
];

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP(
    () => {
      // Intro fade in for the whole section
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });

      // Infinite Horizontal Marquee for the cards
      if (trackRef.current) {
        // The track holds two identical sets of cards. We translate it by exactly half its scroll width.
        const totalWidth = trackRef.current.scrollWidth / 2;
        
        gsap.to(trackRef.current, {
          x: -totalWidth,
          ease: "none",
          duration: 60,
          repeat: -1,
        });
      }
    },
    { scope: containerRef }
  );

  const handleMouseEnter = contextSafe(() => {
    gsap.getTweensOf(trackRef.current).forEach(t => t.pause());
  });

  const handleMouseLeave = contextSafe(() => {
    gsap.getTweensOf(trackRef.current).forEach(t => t.play());
  });

  // We duplicate the array so the marquee loops seamlessly
  const doubledReviews = [...reviews, ...reviews];

  return (
    <section ref={containerRef} className="py-32 bg-black relative overflow-hidden">
      <div className="px-8 md:px-24 mb-20 md:mb-32">
        <p className="text-sm text-gray-500 mb-4 uppercase tracking-widest font-mono">The Impact</p>
        <TextReveal className="text-4xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter">
          Echoes of success.
        </TextReveal>
      </div>

      {/* Full bleed horizontal slider */}
      <div 
        className="w-full relative flex items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Subtle gradient overlays to fade the edges into black */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div 
          ref={trackRef} 
          className="flex gap-8 px-4 w-max"
        >
          {doubledReviews.map((review, i) => (
            <div 
              key={i} 
              className="w-[85vw] md:w-[700px] flex-shrink-0 flex flex-col p-8 md:p-12 opacity-40 hover:opacity-100 transition-opacity duration-700 cursor-grab active:cursor-grabbing"
            >
              <Quote className="w-8 h-8 md:w-10 md:h-10 text-white mb-10" strokeWidth={1} />
              
              <p className="text-2xl md:text-4xl text-white font-light leading-snug mb-16">
                "{review.content}"
              </p>
              
              <div className="flex flex-col mt-auto">
                <span className="text-white font-normal text-lg tracking-widest uppercase mb-1">{review.brand}</span>
                <span className="text-gray-500 text-sm">{review.name} — {review.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
