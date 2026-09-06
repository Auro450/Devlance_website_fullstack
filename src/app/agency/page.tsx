"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { CtaButton } from "@/components/ui/cta-button";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextReveal } from "@/components/ui/text-reveal";
import { BrandRow } from "@/app/services/web-development/page";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PARTNER_BRANDS = [
  { name: "Shopearthbags", scope: "Custom UI/UX • Shopify Int. • Full Stack", href: "https://shopearthbags.com" },
  { name: "Jutebags", scope: "Custom E-commerce • UI/UX", href: "https://shopearthbags.com" },
  { name: "Jaywalking", scope: "High-Fashion E-commerce • Animation", href: "https://www.jaywalking.in/?srsltid=AfmBOooLMEm8ujukjGIZ5og_4DAXKWKyFsmrQ8xMXKGTLvMxQ8krw2wA" },
  { name: "Tajacart", scope: "Quick Commerce Web & App • Full Stack", href: "https://www.tajacart.in" },
  { name: "Jupiter Fresh", scope: "Grocery Delivery App • UI/UX", href: "https://www.jupiterfresh.co.in" },
  { name: "Ray's Medical", scope: "All-in-one Clinic • Appointments • Pathology • Medicine", href: "https://www.raysmedical.co.in" },
  { name: "Multicon Group", scope: "Enterprise Architecture • Custom CMS", href: "https://www.multicon.in" },
  { name: "Meatigo", scope: "Meat Delivery • E-commerce", href: "https://www.meatigo.com/?srsltid=AfmBOoqDmY5Vyxw6FVQd7TTgNv-2M0j6UcDJNOworI71WVk-cB0zoq4_" },
  { name: "Cafe Bites", scope: "Food Delivery App • Multi-vendor", href: "https://cafe-prototype-drab.vercel.app/" },
  { name: "Falam Cafe", scope: "Cafe & Restaurant • UI/UX", href: "https://falam.in" },
  { name: "Cava Cafe", scope: "Premium Cafe • Web Development", href: "https://cavaindia.com" },
];

export default function AgencyPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Aggressive Reveal Text 3D swing animation on scroll (plays going down, reverses going up)
      const revealElements = gsap.utils.toArray(".reveal-text");
      
      revealElements.forEach((el: any) => {
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

      // Sticky Titles slide-in animation
      const stickyTitles = gsap.utils.toArray(".sticky-title");
      stickyTitles.forEach((el: any) => {
        gsap.fromTo(el, 
          { x: -100, opacity: 0, scale: 0.8 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });

      // Aggressive 3D animation for each partner brand row
      gsap.utils.toArray(".reveal-brand").forEach((el: any) => {
        gsap.fromTo(el,
          {
            y: 140,
            opacity: 0,
            rotationX: -55,
            scale: 0.92,
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
              start: "top 92%",
              toggleActions: "play reverse play reverse", // Reverses when scrolling back up
            }
          }
        );
      });

    }, containerRef);

    // Refresh ScrollTrigger after animations settle
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);
    
    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <main ref={containerRef} className="bg-black text-white selection:bg-white selection:text-black pt-32 min-h-screen">
      
      {/* Hero Section */}
      <section className="px-8 md:px-12 py-12 md:py-24 relative">
        <div className="max-w-6xl w-full">
          <TextReveal delay={0.2} className="text-[12vw] md:text-[8vw] lg:text-[7rem] font-bold tracking-tighter leading-[0.9] uppercase mb-2 lg:mb-4">
            Big Vision.
          </TextReveal>
          <TextReveal delay={0.4} className="text-[12vw] md:text-[8vw] lg:text-[7rem] font-bold tracking-tighter leading-[0.9] uppercase text-gray-400 mb-2 lg:mb-4">
            Small Business.
          </TextReveal>
          <TextReveal delay={0.6} className="text-[12vw] md:text-[8vw] lg:text-[7rem] font-bold tracking-tighter leading-[0.9] uppercase mb-8 lg:mb-12">
            Zero Compromise.
          </TextReveal>
          
          <div className="reveal-text">
            <p className="text-xl md:text-3xl font-light text-gray-400 max-w-3xl leading-relaxed mt-12 md:mt-24">
              We believe that premium, high-performance digital experiences shouldn&apos;t be gated by massive enterprise budgets. We build for the ambitious.
            </p>
          </div>
        </div>
      </section>

      {/* The Ethos Section */}
      <section className="px-8 md:px-12 py-32 border-t border-white/10 relative mt-16">
        <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
          <div className="lg:w-1/3">
            <h2 className="sticky-title text-sm font-bold font-mono text-white tracking-widest uppercase lg:sticky lg:top-32">
              Custom. Not Cloned.
            </h2>
          </div>
          <div className="lg:w-2/3 flex flex-col gap-16">
            <p className="text-4xl md:text-6xl lg:text-[5vw] font-light leading-none tracking-tighter reveal-text uppercase">
              Beyond templates.
            </p>
            <div className="reveal-text">
              <p className="text-xl md:text-3xl font-light text-gray-400 leading-relaxed max-w-3xl">
                Forget rigid templates and hardcoded themes. We architect entirely custom, full-stack solutions tailored to your exact requirements. Everything we build is meticulously designed to be relentlessly user-friendly on the front end and powerfully admin-centric on the back end. 
                <span className="text-white block mt-6">
                  And we do it all at an <strong className="font-bold">affordable pricing</strong> point that empowers <strong className="font-bold">local small businesses</strong> to compete with industry giants. 
                  <strong className="font-bold block mt-4 text-white">Our website development charge begins from as low as 10,000/- Rs.</strong>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Vision Section */}
      <section className="px-8 md:px-12 py-32 border-t border-white/10 relative">
        <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
          <div className="lg:w-1/3">
            <h2 className="sticky-title text-sm font-bold font-mono text-white tracking-widest uppercase lg:sticky lg:top-32">
              Scale Without Limits
            </h2>
          </div>
          <div className="lg:w-2/3 flex flex-col gap-16">
            <p className="text-4xl md:text-6xl lg:text-[5vw] font-light leading-none tracking-tighter reveal-text uppercase text-gray-400">
              Future <span className="text-white">Proof</span>.
            </p>
            <div className="reveal-text">
              <p className="text-xl md:text-3xl font-light text-gray-400 leading-relaxed max-w-3xl">
                Your <strong className="font-bold text-white">local small business</strong> might be small today, but your online presence shouldn&apos;t look like it. We partner with founders who have the vision to make it big. By keeping our <strong className="font-bold text-white">affordable pricing</strong> aggressive, we ensure your budget goes towards scaling growth, not just getting off the ground.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="px-8 md:px-12 py-32 border-t border-white/10 relative">
        <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
          <div className="lg:w-1/3">
            <h2 className="sticky-title text-sm font-bold font-mono text-white tracking-widest uppercase lg:sticky lg:top-32">
              Leadership
            </h2>
          </div>
          <div className="lg:w-2/3 flex flex-col gap-16">
            <p className="text-4xl md:text-6xl lg:text-[5vw] font-light leading-none tracking-tighter reveal-text uppercase">
              The Founders.
            </p>
            <div className="reveal-text">
              <p className="text-xl md:text-3xl font-light text-gray-400 leading-relaxed max-w-3xl">
                Founded by <span className="text-white font-medium">Aurojyoti Kundu</span> and <span className="text-white font-medium">Somsubhra Abir Das</span>, Devlance was built on a singular vision: to democratize elite digital engineering and make world-class design accessible to ambitious businesses of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands & Partners Section */}
      <section className="px-8 md:px-12 py-32 border-t border-white/10 relative">
        <div className="flex flex-col lg:flex-row gap-16 md:gap-24 mb-24 md:mb-32">
          <div className="lg:w-1/3">
            <h2 className="sticky-title text-sm font-bold font-mono text-white tracking-widest uppercase lg:sticky lg:top-32">
              Brands We&apos;ve Empowered
            </h2>
          </div>
          <div className="lg:w-2/3 flex flex-col gap-8">
            <p className="text-4xl md:text-6xl lg:text-[5vw] font-light leading-none tracking-tighter reveal-text uppercase">
              Our Partners.
            </p>
          </div>
        </div>

        {/* List of Partner Brands with aggressive 3D scroll animation */}
        <div className="flex flex-col w-full">
          {PARTNER_BRANDS.map((partner) => (
            <div key={partner.name} className="reveal-brand w-full">
              <BrandRow name={partner.name} scope={partner.scope} href={partner.href} />
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-8 md:px-12 py-20 md:py-28 flex flex-col items-center justify-center text-center border-t border-white/10">
        <TextReveal className="text-4xl md:text-7xl lg:text-[7vw] font-bold tracking-tighter uppercase leading-[0.9] mb-8 max-w-5xl justify-center">
          Need a website for your business?
        </TextReveal>
        <div className="reveal-text">
          <CtaButton variant="secondary">Request Now</CtaButton>
        </div>
      </section>
    </main>
  );
}
