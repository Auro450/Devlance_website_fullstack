"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Check, 
  User, 
  Phone, 
  Mail, 
  Building2, 
  Briefcase, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck,
  Globe,
  Smartphone,
  TrendingUp,
  Bot,
  MessageSquare
} from "lucide-react";
import { cn } from "@/utils/cn";

interface LeadFormModalProps {
  onClose: () => void;
}

const REQUIREMENTS = [
  { id: "Websites", label: "Websites", icon: Globe, desc: "High-performance web platforms" },
  { id: "Applications", label: "Applications", icon: Smartphone, desc: "iOS, Android & Web Apps" },
  { id: "Digital marketing", label: "Digital marketing", icon: TrendingUp, desc: "Growth & Brand Exposure" },
  { id: "Ai automation", label: "AI automation", icon: Bot, desc: "Smart workflows & LLMs" },
];

const SUGGESTED_BUSINESS_TYPES = [
  "SaaS / Tech",
  "E-Commerce",
  "Agency / Services",
  "Healthcare",
  "Real Estate",
  "Startup",
];

export function LeadFormModal({ onClose }: LeadFormModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessName: "",
    businessType: "",
  });
  const [selectedReqs, setSelectedReqs] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Strictly extract digits only and cap at 10 numbers
    const rawVal = e.target.value;
    const digitsOnly = rawVal.replace(/\D/g, "").slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: digitsOnly }));

    if (digitsOnly.length > 0 && digitsOnly.length < 10) {
      setPhoneError(`${10 - digitsOnly.length} more digit${10 - digitsOnly.length > 1 ? "s" : ""} needed`);
    } else {
      setPhoneError("");
    }
  };

  const toggleReq = (reqId: string) => {
    setSelectedReqs((prev) =>
      prev.includes(reqId) ? prev.filter((r) => r !== reqId) : [...prev, reqId]
    );
  };

  const selectBusinessType = (type: string) => {
    setFormData((prev) => ({ ...prev, businessType: type }));
  };

  const getWhatsAppUrl = () => {
    const targetNumber = "919547934724";
    const reqText = selectedReqs.length > 0 ? selectedReqs.join(", ") : "General Inquiry";
    const emailText = formData.email.trim() || "Not provided";
    
    const message = `🚀 *New Project Inquiry - Devlance*

👤 *Client Name:* ${formData.name.trim()}
📞 *Phone Number:* ${formData.phone.trim()}
✉️ *Email Address:* ${emailText}
🏢 *Business Name:* ${formData.businessName.trim()}
🏷️ *Business Type:* ${formData.businessType.trim()}
⚡ *Requirements:* ${reqText}

---
Sent via Devlance Website Contact Form`;

    return `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      setPhoneError("Phone number must be exactly 10 digits");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim() || undefined,
          businessName: formData.businessName.trim(),
          businessType: formData.businessType.trim(),
          requirements: selectedReqs,
        }),
      });

      if (!response.ok) throw new Error("Failed to submit");
      
      // Generate & launch WhatsApp chat with structured request details
      const waUrl = getWhatsAppUrl();
      window.open(waUrl, "_blank", "noopener,noreferrer");

      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop with ambient blur and dark vignette */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 16 }}
        transition={{ type: "spring", damping: 26, stiffness: 320 }}
        className="relative w-full max-w-2xl bg-neutral-950/95 border border-white/[0.12] rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_0_60px_rgba(0,0,0,0.9),0_0_40px_rgba(255,255,255,0.03)] backdrop-blur-2xl overflow-hidden my-auto max-h-[92vh] overflow-y-auto scrollbar-none"
      >
        {/* Ambient Top Glow Effect */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 bg-gradient-to-br from-cyan-500/20 via-purple-500/15 to-transparent rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-3xl" />

        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close modal"
          className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.15] border border-white/[0.08] text-white/70 hover:text-white transition-all duration-200 hover:rotate-90"
        >
          <X className="w-4 h-4" />
        </button>

        <AnimatePresence mode="wait">
          {isSuccess ? (
            /* SUCCESS STATE */
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex flex-col items-center justify-center py-12 md:py-16 text-center"
            >
              <div className="relative mb-8">
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl animate-pulse" />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 14, stiffness: 200, delay: 0.1 }}
                  className="relative w-24 h-24 bg-gradient-to-b from-emerald-500/20 to-emerald-500/5 text-emerald-400 rounded-full flex items-center justify-center border border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.25)]"
                >
                  <Check className="w-12 h-12 stroke-[2.5]" />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-3"
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
                  <Sparkles className="w-3.5 h-3.5" /> Request Submitted
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Thank You, {formData.name || "there"}!
                </h2>
                <p className="text-emerald-300 font-medium text-lg md:text-xl max-w-md mx-auto pt-2">
                  Our executive will get back to you shortly!
                </p>
                <p className="text-gray-400 text-sm max-w-sm mx-auto pt-1">
                  We have registered your project requirements and sent the details to our WhatsApp representative.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md"
              >
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                >
                  <MessageSquare className="w-4 h-4 fill-black" />
                  <span>Open WhatsApp Chat</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors border border-white/10"
                >
                  Close Window
                </button>
              </motion.div>
            </motion.div>
          ) : (
            /* FORM STATE */
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative z-10"
            >
              {/* Header */}
              <div className="mb-6 md:mb-8 pr-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] text-white/80 text-xs font-medium tracking-wide uppercase mb-3">
                  <Sparkles className="w-3 h-3 text-cyan-400" /> Start a Project
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                  Let&apos;s build your vision.
                </h2>
                <p className="text-gray-400 text-sm sm:text-base mt-1.5">
                  Fill in your details below and our team will get in touch with you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                {/* Contact & Personal Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="flex items-center gap-1.5 text-xs font-medium text-gray-300">
                      <User className="w-3.5 h-3.5 text-gray-400" />
                      <span>Full Name</span>
                      <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        required
                        type="text"
                        className="w-full bg-neutral-900/90 hover:bg-neutral-900 border border-white/[0.1] focus:border-white/40 focus:ring-1 focus:ring-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 transition-all outline-none"
                        placeholder="e.g. Aryan Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Phone Number - Locked strictly to 10 numerical digits */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="flex items-center gap-1.5 text-xs font-medium text-gray-300">
                        <Phone className="w-3.5 h-3.5 text-gray-400" />
                        <span>Phone Number</span>
                        <span className="text-red-400">*</span>
                      </label>
                      <span
                        className={cn(
                          "text-[11px] font-mono transition-colors",
                          formData.phone.length === 10
                            ? "text-emerald-400 font-semibold"
                            : formData.phone.length > 0
                            ? "text-amber-400"
                            : "text-gray-500"
                        )}
                      >
                        {formData.phone.length}/10 digits
                      </span>
                    </div>
                    <div className="relative">
                      <input
                        required
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]{10}"
                        maxLength={10}
                        className={cn(
                          "w-full bg-neutral-900/90 hover:bg-neutral-900 border rounded-xl px-4 py-3 text-sm text-white font-mono placeholder-gray-500 transition-all outline-none",
                          phoneError
                            ? "border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500/30"
                            : formData.phone.length === 10
                            ? "border-emerald-500/50 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30"
                            : "border-white/[0.1] focus:border-white/40 focus:ring-1 focus:ring-white/20"
                        )}
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                      />
                      {formData.phone.length === 10 && (
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>
                    {phoneError && (
                      <p className="text-[11px] text-red-400 pt-0.5">{phoneError}</p>
                    )}
                  </div>

                  {/* Email ID - OPTIONAL */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="flex items-center gap-1.5 text-xs font-medium text-gray-300">
                        <Mail className="w-3.5 h-3.5 text-gray-400" />
                        <span>Email Address</span>
                      </label>
                      <span className="text-[11px] text-gray-500 font-medium px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">
                        Optional
                      </span>
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        className="w-full bg-neutral-900/90 hover:bg-neutral-900 border border-white/[0.1] focus:border-white/40 focus:ring-1 focus:ring-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 transition-all outline-none"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Business Name */}
                  <div className="space-y-1.5">
                    <label className="flex items-center gap-1.5 text-xs font-medium text-gray-300">
                      <Building2 className="w-3.5 h-3.5 text-gray-400" />
                      <span>Business Name</span>
                      <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        required
                        type="text"
                        className="w-full bg-neutral-900/90 hover:bg-neutral-900 border border-white/[0.1] focus:border-white/40 focus:ring-1 focus:ring-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 transition-all outline-none"
                        placeholder="e.g. Nexa Dynamics"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                {/* Business Type / Industry */}
                <div className="space-y-2">
                  <label className="flex items-center gap-1.5 text-xs font-medium text-gray-300">
                    <Briefcase className="w-3.5 h-3.5 text-gray-400" />
                    <span>Business Type / Industry</span>
                    <span className="text-red-400">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full bg-neutral-900/90 hover:bg-neutral-900 border border-white/[0.1] focus:border-white/40 focus:ring-1 focus:ring-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 transition-all outline-none"
                    placeholder="e.g. E-Commerce, SaaS, Healthcare, Real Estate, Agency..."
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  />

                  {/* Quick Select Chips */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="text-[11px] text-gray-500 mr-1">Quick picks:</span>
                    {SUGGESTED_BUSINESS_TYPES.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => selectBusinessType(type)}
                        className={cn(
                          "px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200 border",
                          formData.businessType === type
                            ? "bg-white text-black border-white shadow-sm"
                            : "bg-white/[0.04] text-gray-400 border-white/[0.08] hover:border-white/20 hover:text-white"
                        )}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Requirements Multi-select */}
                <div className="space-y-2.5 pt-1">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-medium text-gray-300">
                      What are your requirements? (Select all that apply)
                    </label>
                    {selectedReqs.length > 0 && (
                      <span className="text-[11px] text-cyan-400 font-medium">
                        {selectedReqs.length} selected
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {REQUIREMENTS.map((req) => {
                      const isSelected = selectedReqs.includes(req.id);
                      const Icon = req.icon;
                      return (
                        <button
                          key={req.id}
                          type="button"
                          onClick={() => toggleReq(req.id)}
                          className={cn(
                            "flex items-start gap-3 p-3.5 rounded-2xl text-left transition-all duration-200 border relative group",
                            isSelected
                              ? "bg-white/[0.12] border-white text-white shadow-[0_0_20px_rgba(255,255,255,0.06)]"
                              : "bg-neutral-900/60 border-white/[0.08] text-gray-300 hover:border-white/20 hover:bg-neutral-900"
                          )}
                        >
                          <div
                            className={cn(
                              "w-8 h-8 rounded-xl flex items-center justify-center transition-colors shrink-0",
                              isSelected
                                ? "bg-white text-black"
                                : "bg-white/[0.06] text-gray-400 group-hover:text-white"
                            )}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-semibold text-white truncate">
                                {req.label}
                              </span>
                              {isSelected && (
                                <div className="w-4 h-4 rounded-full bg-white text-black flex items-center justify-center shrink-0 ml-1.5">
                                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                                </div>
                              )}
                            </div>
                            <p className="text-[11px] text-gray-400 truncate mt-0.5">
                              {req.desc}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Submit Action Area */}
                <div className="pt-3 space-y-3">
                  <button
                    type="submit"
                    disabled={isSubmitting || formData.phone.length !== 10}
                    className="w-full relative overflow-hidden group rounded-2xl bg-white text-black font-bold py-4 px-6 text-sm md:text-base transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
                  >
                    <div className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                          <span>Submitting Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Request</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </>
                      )}
                    </div>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-gray-500 text-[11px]">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Your information is safe and strictly confidential.</span>
                  </div>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
