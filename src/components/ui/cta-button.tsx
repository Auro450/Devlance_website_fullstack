"use client";
import { useLeadForm } from "@/components/providers/lead-form-provider";
import { cn } from "@/utils/cn";
import React from "react";

interface CtaButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

export function CtaButton({ children, className, variant = "primary" }: CtaButtonProps) {
  const { openLeadForm } = useLeadForm();

  if (variant === "secondary") {
    return (
      <button 
        onClick={openLeadForm}
        className={cn("rounded-full border border-white px-8 py-4 text-sm font-mono uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300", className)}
      >
        {children}
      </button>
    );
  }

  return (
    <button 
      onClick={openLeadForm}
      className={cn("group relative overflow-hidden rounded-full border border-white/30 bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-widest transition-all hover:border-white inline-block", className)}
    >
      <span className="relative z-10 transition-colors group-hover:text-black">{children}</span>
      <div className="absolute inset-0 z-0 h-full w-full translate-y-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0"></div>
    </button>
  );
}
