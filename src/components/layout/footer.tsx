"use client";

import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const brandName = "Devlance";
  const pathname = usePathname();

  useGSAP(() => {
    // Typewriter effect using a robust clipPath reveal to avoid layout collapse
    gsap.fromTo(
      ".typewriter-text-container",
      { clipPath: "inset(0 100% 0 0)" },
      {
        clipPath: "inset(0 0% 0 0)",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".typewriter-text-container",
          start: "top 95%",
          toggleActions: "restart none none reverse",
        },
      }
    );
  }, { scope: containerRef, dependencies: [pathname] });

  return (
    <footer id="contact" ref={containerRef} className="pt-32 pb-8 px-8 md:px-24 bg-black border-t border-white/10 flex flex-col justify-between min-h-[60vh] text-white overflow-hidden scroll-mt-24">
      <div className="flex-grow flex flex-col md:flex-row justify-between items-start md:items-end w-full pb-8 gap-8 md:gap-0">
        
        <Link href="/" className="group order-last md:order-first text-[11vw] md:text-[10vw] font-bold tracking-tighter uppercase leading-none text-white flex items-center h-[11vw] md:h-[10vw] w-max cursor-pointer hover:opacity-80 transition-opacity">
          <div className="typewriter-text-container overflow-hidden whitespace-nowrap border-r-0">
            <span className="group-hover:text-gray-300 transition-colors">
              {brandName}
            </span>
          </div>
        </Link>
        
        {/* Contact Info (Right Side) */}
        <div className="order-first md:order-last flex flex-row md:flex-col justify-between md:justify-start gap-4 md:gap-8 w-full md:w-auto text-left md:text-right md:translate-y-2 mb-8 md:mb-0">
          <div className="w-1/2 md:w-auto">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-mono mb-2">Phone</p>
            <a href="tel:+919547934724" className="text-sm md:text-lg text-white font-light hover:opacity-70 transition-opacity block">
              +91 95479<br className="md:hidden" /> 34724
            </a>
          </div>
          <div className="w-1/2 md:w-auto">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-mono mb-2">Address</p>
            <p className="text-sm md:text-lg text-white font-light leading-relaxed">
              Db 23, Db block,<br />
              Newtown Action Area 1,<br />
              Kolkata 700156
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-4 border-t border-white/10 pt-8 gap-4">
        <div className="text-xs md:text-sm font-mono text-gray-500 uppercase">
          © {new Date().getFullYear()} Devlance. All rights reserved.
        </div>
        <div className="flex gap-6 text-xs md:text-sm font-mono text-gray-500 uppercase">
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
