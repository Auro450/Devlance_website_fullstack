"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const projects = [
  {
    id: 1,
    title: "Healthcare Platform",
    category: "Website Development",
    image: "/images/rays-medical-hd.png",
    href: "/services/web-development#healthcare"
  },
  {
    id: 2,
    title: "Enterprise Portfolio Website",
    category: "Corporate Platform",
    image: "/images/multicon-enterprise.png",
    imagePosition: "object-top",
    href: "/services/web-development#enterprise"
  },
  {
    id: 3,
    title: "E-Commerce Experience",
    category: "Web Development",
    image: "/images/earthbags-ecommerce.png",
    imagePosition: "object-top",
    href: "/services/web-development#ecommerce"
  },
  {
    id: 4,
    title: "AI Automation",
    category: "Intelligent Systems",
    image: "/images/ai-automation-sleek.jpg",
    imagePosition: "object-top",
    href: "/growth"
  },
  {
    id: 5,
    title: "Digital Marketing",
    category: "Growth & Strategy",
    image: "/images/anytime-fitness.png",
    imagePosition: "object-top",
    href: "/growth"
  },
];

export function HorizontalScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      // Aggressive Title Animation
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          {
            scale: 8,
            opacity: 0,
            rotationX: 90,
            y: 300,
            transformOrigin: "left center"
          },
          {
            scale: 1,
            opacity: 1,
            rotationX: 0,
            y: 0,
            duration: 1.5,
            ease: "expo.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              toggleActions: "play reverse play reverse",
            }
          }
        );
      }

      mm.add("(min-width: 768px)", () => {
        const pinWrap = scrollRef.current;
        const pinWrapWidth = pinWrap?.offsetWidth || 0;
        const vw = window.innerWidth;

        gsap.to(pinWrap, {
          x: () => -(pinWrapWidth - vw),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${pinWrapWidth}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="overflow-hidden bg-black text-white relative h-screen flex flex-col justify-center perspective-[1000px]">
      <div className="absolute top-12 left-6 md:left-24 z-10">
        <h2 ref={titleRef} className="text-4xl md:text-7xl font-bold tracking-tighter origin-left">Services</h2>
      </div>
      
      <div className="w-full h-full overflow-x-auto md:overflow-visible snap-x snap-mandatory pt-20 touch-pan-x" data-lenis-prevent="true" style={{ WebkitOverflowScrolling: 'touch' }}>
        <div ref={scrollRef} className="flex gap-6 md:gap-24 px-6 md:px-24 w-max items-center h-full">
          {projects.map((project, i) => (
            <Link href={project.href || "#"} key={project.id} className="w-[85vw] md:w-[50vw] shrink-0 snap-center group block cursor-pointer">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-6">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                unoptimized
                className={`object-cover ${project.imagePosition || "object-center"} transition-transform duration-700 group-hover:scale-105 contrast-110 saturate-125`}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="flex justify-between items-end border-b border-white/20 pb-4">
              <div>
                <p className="text-sm text-gray-400 mb-2 uppercase tracking-widest font-mono">0{i+1} — {project.category}</p>
                <h3 className="text-3xl md:text-5xl font-semibold tracking-tight">{project.title}</h3>
              </div>
              <button className="rounded-full border border-white p-4 hover:bg-white hover:text-black transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </Link>
        ))}
        </div>
      </div>
    </section>
  );
}
