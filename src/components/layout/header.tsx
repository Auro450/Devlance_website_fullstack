"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { ChevronDown, Menu, X } from "lucide-react";

const services = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "UI/UX Design", href: "/services/ui-ux" },
  { name: "Ecommerce and Quick Commerce", href: "/services/web-development#ecommerce" },
  { name: "Enterprise Website", href: "/services/web-development#enterprise" },
  { name: "Healthcare Website", href: "/services/web-development#healthcare" },
  { name: "Food Delivery App", href: "/services/web-development#food" },
  { name: "Ai Automation", href: "/growth" },
  { name: "Digital Marketing", href: "/growth" },
];

// Highly premium per-letter rolling text animation
function RollingTextLink({ text, href = "#" }: { text: string; href?: string }) {
  return (
    <Link href={href} className="group/link relative overflow-hidden flex items-center h-8 md:h-10 w-max">
      {/* Primary Text (Faded, moves up on hover) */}
      <div className="flex text-xl md:text-2xl font-light tracking-tight text-white/40 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover/link:-translate-y-full whitespace-nowrap">
        {text.split("").map((char, i) => (
          <span key={i} className="inline-block">{char === " " ? "\u00A0" : char}</span>
        ))}
      </div>
      
      {/* Secondary Text (Solid white, staggers in from below on hover) */}
      <div className="absolute top-0 left-0 flex text-xl md:text-2xl font-medium tracking-tight text-white whitespace-nowrap">
        {text.split("").map((char, i) => (
          <span 
            key={i} 
            className="inline-block transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover/link:translate-y-0"
            style={{ transitionDelay: `${i * 0.015}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </Link>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [logoOpacity, setLogoOpacity] = useState(1);

  const router = useRouter();
  const pathname = usePathname();
  const lenis = useLenis();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (pathname === "/") {
      const contactEl = document.getElementById("contact");
      if (contactEl && lenis) {
        lenis.scrollTo(contactEl, { duration: 1.8, offset: 0 });
      } else if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/#contact");
    }
  };

  // Gradual fade with scroll position
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          // Fade from 1 to 0.2 over the first 600px of scrolling
          const newOpacity = Math.max(0.2, 1 - scrollY / 600);
          setLogoOpacity(newOpacity);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initialize on mount
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 text-white">
      {/* Main Nav Bar */}
      <div className="flex justify-between items-center px-8 py-6 relative z-50">
        <Link 
          href="/" 
          style={{ opacity: logoOpacity }}
          className="text-2xl font-bold tracking-tighter uppercase relative z-50 hover:!opacity-100 transition-opacity duration-300"
        >
          Devlance
        </Link>
        
        <div className="hidden lg:flex gap-8 text-sm uppercase tracking-widest font-mono items-center relative z-50">
          <Link href="/work" className="hover:opacity-70 transition-opacity py-4">Work</Link>
          
          <div className="group">
            <button className="hover:opacity-70 transition-opacity py-4 flex items-center gap-2 cursor-pointer uppercase tracking-widest font-mono">
              Services
              <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform duration-500" />
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-max h-auto pt-4 pb-8 pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] -z-10 flex opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto">
              
              <div className="flex flex-col gap-y-2 text-center md:text-left -translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]">
                {services.map((service, i) => (
                  <RollingTextLink key={i} text={service.name} href={service.href} />
                ))}
              </div>

            </div>
          </div>

          <Link href="/growth" className="hover:opacity-70 transition-opacity py-4">Growth</Link>
          <Link href="/agency" className="hover:opacity-70 transition-opacity py-4">Agency</Link>
          <a
            href="/#contact"
            onClick={handleContactClick}
            className="hover:opacity-70 transition-opacity py-4 cursor-pointer"
          >
            Contact
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="lg:hidden relative z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 h-[100dvh] bg-black z-40 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] flex flex-col pt-32 px-8 overflow-y-auto overscroll-contain pb-12 ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col gap-8 text-4xl font-light tracking-tight mt-8 pb-12">
          <Link href="/work" className="hover:opacity-70 transition-opacity" onClick={() => setMobileMenuOpen(false)}>Work</Link>
          
          <div className="flex flex-col gap-6">
            <button 
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between text-left hover:opacity-70 transition-opacity"
            >
              <span>Services</span>
              <ChevronDown className={`w-8 h-8 transition-transform duration-500 ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            
            <div className={`flex flex-col gap-6 pl-6 border-l border-white/20 overflow-hidden transition-all duration-500 ${mobileServicesOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}>
              {services.map((service, i) => (
                <Link 
                  key={i} 
                  href={service.href} 
                  className="text-2xl text-white/70 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
          
          <Link href="/growth" className="hover:opacity-70 transition-opacity" onClick={() => setMobileMenuOpen(false)}>Growth</Link>
          <Link href="/agency" className="hover:opacity-70 transition-opacity" onClick={() => setMobileMenuOpen(false)}>Agency</Link>
          <a
            href="/#contact"
            onClick={handleContactClick}
            className="hover:opacity-70 transition-opacity cursor-pointer"
          >
            Contact
          </a>
        </div>
      </div>

    </nav>
  );
}
