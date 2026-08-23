"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useLenis } from "lenis/react";

export function FloatingIcon() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<HTMLButtonElement>(null);
  
  // Free fall scroll effect
  useLenis(({ velocity }) => {
    if (wrapperRef.current) {
      const targetY = velocity * 1.5;
      
      gsap.to(wrapperRef.current, {
        y: targetY,
        rotation: velocity * 0.05,
        duration: 0.6,
        ease: "power2.out",
      });
    }
  });

  // Drag logic
  useEffect(() => {
    const el = dragRef.current;
    if (!el) return;

    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let currentX = 0; 
    let currentY = 0;
    let initialPointerX = 0;
    let initialPointerY = 0;

    const handlePointerDown = (e: PointerEvent) => {
      isDragging = true;
      initialPointerX = e.clientX;
      initialPointerY = e.clientY;
      startX = e.clientX - currentX;
      startY = e.clientY - currentY;
      el.setPointerCapture(e.pointerId);
      gsap.to(el, { scale: 1.1, duration: 0.3, ease: "back.out(2)" });
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      currentX = e.clientX - startX;
      currentY = e.clientY - startY;
      
      gsap.set(el, { x: currentX, y: currentY });
    };

    const handlePointerUp = (e: PointerEvent) => {
      isDragging = false;
      el.releasePointerCapture(e.pointerId);
      gsap.to(el, { scale: 1, duration: 0.3, ease: "power2.out" });
      
      // Determine if it was a click or a drag
      const dx = Math.abs(e.clientX - initialPointerX);
      const dy = Math.abs(e.clientY - initialPointerY);
      if (dx < 5 && dy < 5) {
        // It was a click, open WhatsApp
        window.open('https://wa.me/919547934724', '_blank', 'noopener,noreferrer');
      }
    };

    el.addEventListener("pointerdown", handlePointerDown);
    el.addEventListener("pointermove", handlePointerMove);
    el.addEventListener("pointerup", handlePointerUp);
    el.addEventListener("pointercancel", handlePointerUp);

    return () => {
      el.removeEventListener("pointerdown", handlePointerDown);
      el.removeEventListener("pointermove", handlePointerMove);
      el.removeEventListener("pointerup", handlePointerUp);
      el.removeEventListener("pointercancel", handlePointerUp);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-[100] perspective-[1000px]">
      <div ref={wrapperRef}>
        <button 
          ref={dragRef}
          className="relative group flex items-center justify-center cursor-grab active:cursor-grabbing hover:scale-110 transition-transform duration-300"
          style={{ touchAction: "none" }} // Prevents page scroll when dragging on touch devices
        >
          <div className="relative z-10 w-full h-full flex items-center justify-center text-white/50 hover:text-white transition-colors duration-500">
            <svg viewBox="0 0 100 100" className="w-8 h-8 md:w-10 md:h-10 overflow-visible drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.6)]" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
              {/* D curve */}
              <path d="M 15,20 C 55,20 55,80 15,80" />
              {/* A inverted V */}
              <path d="M 50,80 L 72.5,20 L 95,80" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}
