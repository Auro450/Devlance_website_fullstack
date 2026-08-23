import Link from "next/link";
import { ArrowLeft, ShieldCheck, Scale, FileText, Clock, HelpCircle } from "lucide-react";

export default function TermsOfServicePage() {
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
            Legal Agreement
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter uppercase leading-none">
            Terms of Service
          </h1>
          
          <div className="flex items-center gap-4 text-xs font-mono text-gray-500 pt-2 border-b border-white/10 pb-8">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> Effective: {lastUpdated}
            </span>
            <span>•</span>
            <span>Devlance Digital Agency</span>
          </div>
        </div>

        {/* Intro */}
        <section className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed font-light">
          <p>
            Welcome to <strong>Devlance</strong> (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). By accessing our website, initiating project consultations, submitting inquiries, or engaging our digital services (including Full-Stack Web Development, UI/UX Design, Digital Marketing, and AI Automation), you agree to comply with and be bound by the following Terms of Service.
          </p>
          <p>
            Please read these terms carefully before entering into any service agreement or submitting project requirements.
          </p>
        </section>

        {/* Clauses Grid */}
        <div className="space-y-12 divide-y divide-white/10">
          
          {/* 1. Services & Engagements */}
          <div className="pt-10 space-y-4">
            <div className="flex items-center gap-3 text-white">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-mono text-sm font-bold">
                01
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight uppercase">
                Scope of Services
              </h2>
            </div>
            <div className="text-gray-400 space-y-3 leading-relaxed text-sm sm:text-base font-light pl-11">
              <p>
                Devlance provides custom digital engineering services, including but not limited to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-300">
                <li>Bespoke Full-Stack Web Development (Next.js, Node.js, React, databases).</li>
                <li>E-commerce, Quick Commerce, Healthcare, and Food Delivery digital architectures.</li>
                <li>High-fidelity UI/UX design, wireframing, and interactive prototypes.</li>
                <li>AI Automation, custom chatbots, and automated sales/CRM workflows.</li>
                <li>Digital Marketing, Meta Ads campaign management, and influencer strategies.</li>
              </ul>
              <p>
                Exact project deliverables, milestones, turnaround timelines, and specifications are formalized in individual project statements of work (SOW) or written project briefs.
              </p>
            </div>
          </div>

          {/* 2. Pricing & Payments */}
          <div className="pt-10 space-y-4">
            <div className="flex items-center gap-3 text-white">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-mono text-sm font-bold">
                02
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight uppercase">
                Pricing, Invoicing & Payments
              </h2>
            </div>
            <div className="text-gray-400 space-y-3 leading-relaxed text-sm sm:text-base font-light pl-11">
              <p>
                Devlance champions accessible and affordable pricing for local and growing businesses:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-300">
                <li>Website development project fees start from as low as ₹10,000/- (subject to finalized scope).</li>
                <li>Monthly growth marketing and automation retainer packages begin at ₹12,000/- per month.</li>
              </ul>
              <p>
                Project commencement typically requires an advance milestone deposit as agreed upon in the project proposal. Final deliverables, source code access, and domain/server handovers are released upon settlement of all due balances.
              </p>
            </div>
          </div>

          {/* 3. Intellectual Property Rights */}
          <div className="pt-10 space-y-4">
            <div className="flex items-center gap-3 text-white">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-mono text-sm font-bold">
                03
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight uppercase">
                Intellectual Property & Ownership
              </h2>
            </div>
            <div className="text-gray-400 space-y-3 leading-relaxed text-sm sm:text-base font-light pl-11">
              <p>
                Upon complete receipt of full payment for the contracted project, full intellectual property rights and code ownership of custom-developed assets, brand graphics, and application logic are transferred to the client.
              </p>
              <p>
                Devlance reserves the right to display the completed work, project screenshots, and brand marks in our agency portfolio, case studies, and marketing materials, unless a strict Non-Disclosure Agreement (NDA) has been explicitly executed.
              </p>
            </div>
          </div>

          {/* 4. Client Responsibilities */}
          <div className="pt-10 space-y-4">
            <div className="flex items-center gap-3 text-white">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-mono text-sm font-bold">
                04
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight uppercase">
                Client Obligations & Content
              </h2>
            </div>
            <div className="text-gray-400 space-y-3 leading-relaxed text-sm sm:text-base font-light pl-11">
              <p>
                Clients agree to provide necessary text, assets, brand media, access credentials, and feedback in a timely manner. The client guarantees that all media and materials provided to Devlance do not infringe on any third-party copyrights or intellectual property laws.
              </p>
            </div>
          </div>

          {/* 5. Warranties & Limitation of Liability */}
          <div className="pt-10 space-y-4">
            <div className="flex items-center gap-3 text-white">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-mono text-sm font-bold">
                05
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight uppercase">
                Warranties & Limitation of Liability
              </h2>
            </div>
            <div className="text-gray-400 space-y-3 leading-relaxed text-sm sm:text-base font-light pl-11">
              <p>
                We deliver high-standard, bug-tested code engineered for speed and reliability. We provide post-launch support and bug fixes for the warranty period specified in your proposal.
              </p>
              <p>
                Devlance shall not be held liable for indirect, incidental, or third-party service outages (e.g., third-party hosting failures, domain registrar downtimes, or external API modifications by Meta, Google, or payment gateways).
              </p>
            </div>
          </div>

          {/* 6. Governing Law */}
          <div className="pt-10 space-y-4">
            <div className="flex items-center gap-3 text-white">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-mono text-sm font-bold">
                06
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight uppercase">
                Governing Law & Jurisdiction
              </h2>
            </div>
            <div className="text-gray-400 space-y-3 leading-relaxed text-sm sm:text-base font-light pl-11">
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of the State of West Bengal, India. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Kolkata, West Bengal.
              </p>
            </div>
          </div>

        </div>

        {/* Contact Block */}
        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-cyan-400" /> Have Questions Regarding Our Terms?
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed font-light">
            If you have any questions or require custom contractual terms for enterprise solutions, please reach out to our team:
          </p>
          <div className="pt-2 text-sm font-mono text-gray-300 space-y-1">
            <p><strong>Devlance Agency</strong></p>
            <p>Address: Db 23, Db block, Newtown Action Area 1, Kolkata 700156</p>
            <p>Phone: <a href="tel:+919547934724" className="text-cyan-400 hover:underline">+91 95479 34724</a></p>
          </div>
        </div>

      </div>
    </main>
  );
}
