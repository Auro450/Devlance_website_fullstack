import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, Eye, Clock, HelpCircle, UserCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  const lastUpdated = "August 2026";

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black pt-32 pb-24 px-6 sm:px-12 md:px-24">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Back Link & Header */}
        <div className="space-y-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          
          <div className="inline-block px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-mono tracking-wider text-gray-300 uppercase">
            Data Protection & Trust
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter uppercase leading-none">
            Privacy Policy
          </h1>
          
          <div className="flex items-center gap-4 text-xs font-mono text-gray-500 pt-2 border-b border-white/10 pb-8">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> Effective Date: {lastUpdated}
            </span>
            <span>•</span>
            <span>Devlance Digital Agency</span>
          </div>
        </div>

        {/* Intro */}
        <section className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed font-light">
          <p>
            At <strong>Devlance</strong>, we hold your privacy and data security in the highest regard. This Privacy Policy outlines how we collect, process, store, and protect personal and business information when you visit our website, submit lead inquiries, or collaborate with us on digital engineering projects.
          </p>
          <p>
            By using our website and services, you consent to the data practices described in this policy.
          </p>
        </section>

        {/* Clauses Grid */}
        <div className="space-y-12 divide-y divide-white/10">
          
          {/* 1. Information We Collect */}
          <div className="pt-10 space-y-4">
            <div className="flex items-center gap-3 text-white">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-mono text-sm font-bold">
                01
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight uppercase">
                Information We Collect
              </h2>
            </div>
            <div className="text-gray-400 space-y-3 leading-relaxed text-sm sm:text-base font-light pl-11">
              <p>We may collect information you provide directly through our contact and project inquiry forms:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-300">
                <li><strong>Contact Information:</strong> Full name, 10-digit mobile number, and optional email address.</li>
                <li><strong>Business Details:</strong> Business/company name, industry/business sector, and project requirements (Websites, Apps, Digital Marketing, AI Automation).</li>
                <li><strong>Technical & Usage Data:</strong> Anonymized browser type, device information, and interaction metrics to optimize our website performance and Core Web Vitals.</li>
              </ul>
            </div>
          </div>

          {/* 2. How We Use Your Data */}
          <div className="pt-10 space-y-4">
            <div className="flex items-center gap-3 text-white">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-mono text-sm font-bold">
                02
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight uppercase">
                How We Use Your Information
              </h2>
            </div>
            <div className="text-gray-400 space-y-3 leading-relaxed text-sm sm:text-base font-light pl-11">
              <p>We use the collected information strictly for legitimate business purposes:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-300">
                <li>To connect with you and provide custom project quotes and consultations.</li>
                <li>To structure and execute your development, design, and marketing deliverables.</li>
                <li>To send project updates, invoices, and technical communications.</li>
                <li>To monitor, analyze, and protect the security of our web infrastructure.</li>
              </ul>
              <p className="text-white font-medium">
                We never sell, rent, or trade your personal or business data to third-party advertisers.
              </p>
            </div>
          </div>

          {/* 3. Data Storage & Security */}
          <div className="pt-10 space-y-4">
            <div className="flex items-center gap-3 text-white">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-mono text-sm font-bold">
                03
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight uppercase">
                Data Storage & Security Standards
              </h2>
            </div>
            <div className="text-gray-400 space-y-3 leading-relaxed text-sm sm:text-base font-light pl-11">
              <p>
                All inbound inquiries are stored in secure, encrypted databases protected by modern access controls and HTTPS encryption protocols. Only authorized team executives have access to submitted project details.
              </p>
            </div>
          </div>

          {/* 4. Third-Party Services & Integrations */}
          <div className="pt-10 space-y-4">
            <div className="flex items-center gap-3 text-white">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-mono text-sm font-bold">
                04
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight uppercase">
                Third-Party Services & Tools
              </h2>
            </div>
            <div className="text-gray-400 space-y-3 leading-relaxed text-sm sm:text-base font-light pl-11">
              <p>
                To provide seamless experiences, we may utilize trusted third-party services:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-300">
                <li><strong>WhatsApp Direct Connect:</strong> To facilitate instant customer support and project messaging.</li>
                <li><strong>Hosting & Analytics:</strong> High-security cloud infrastructure providers (e.g. AWS, Vercel, Google Analytics).</li>
              </ul>
              <p>
                These third-party platforms operate under their own independent privacy policies.
              </p>
            </div>
          </div>

          {/* 5. Your Data Rights */}
          <div className="pt-10 space-y-4">
            <div className="flex items-center gap-3 text-white">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-mono text-sm font-bold">
                05
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight uppercase">
                Your Privacy Rights
              </h2>
            </div>
            <div className="text-gray-400 space-y-3 leading-relaxed text-sm sm:text-base font-light pl-11">
              <p>
                You have the right to request a copy of your stored personal information, request corrections, or ask for the complete deletion of your submitted lead records from our systems at any time.
              </p>
            </div>
          </div>

        </div>

        {/* Contact Block */}
        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-cyan-400" /> Privacy Enquiries & Data Deletion
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed font-light">
            If you have questions about how we handle your privacy, or if you wish to update or delete your submitted information, contact us:
          </p>
          <div className="pt-2 text-sm font-mono text-gray-300 space-y-1">
            <p><strong>Devlance Agency</strong></p>
            <p>Address: Db 23, Db block, Newtown Action Area 1, Kolkata 700156</p>
            <p>Direct Line: <a href="tel:+919547934724" className="text-cyan-400 hover:underline">+91 95479 34724</a></p>
          </div>
        </div>

      </div>
    </main>
  );
}
