import { prisma } from "@/lib/prisma";
import { Users, Phone, Mail, Building, Briefcase, Layers, Calendar } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-black text-white pt-28 sm:pt-32 px-4 sm:px-8 md:px-12 pb-24 selection:bg-white selection:text-black">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header with Stats */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] text-xs font-mono tracking-wider text-gray-300 uppercase mb-3">
              Admin Portal
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Inbound Leads
            </h1>
            <p className="text-gray-400 text-sm sm:text-base mt-1">
              Real-time feed of client project inquiries and requests.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2.5 rounded-2xl bg-neutral-900 border border-white/10 flex items-center gap-3">
              <Users className="w-4 h-4 text-cyan-400" />
              <div className="text-sm">
                <span className="text-gray-400">Total Leads: </span>
                <span className="font-bold text-white">{leads.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sheet / Table */}
        <div className="bg-neutral-950/80 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03] text-xs uppercase tracking-wider text-gray-400 font-mono">
                  <th className="py-5 px-6 font-medium whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" /> Date
                    </span>
                  </th>
                  <th className="py-5 px-6 font-medium whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" /> Client Name
                    </span>
                  </th>
                  <th className="py-5 px-6 font-medium whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5" /> Contact Details
                    </span>
                  </th>
                  <th className="py-5 px-6 font-medium whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5" /> Business & Sector
                    </span>
                  </th>
                  <th className="py-5 px-6 font-medium whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" /> Requirements
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-sm">
                {leads.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-16 text-center text-gray-500">
                      <div className="flex flex-col items-center justify-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 border border-white/10">
                          <Users className="w-5 h-5" />
                        </div>
                        <p className="font-medium text-gray-400">No leads received yet.</p>
                        <p className="text-xs text-gray-600">Submit a test inquiry from any CTA button on the website.</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-white/[0.03] transition-colors group">
                      <td className="py-5 px-6 whitespace-nowrap text-gray-400 font-mono text-xs">
                        {lead.createdAt.toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                        <div className="text-[10px] text-gray-600">
                          {lead.createdAt.toLocaleTimeString("en-US", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </div>
                      </td>
                      <td className="py-5 px-6 font-semibold text-white whitespace-nowrap">
                        {lead.name}
                      </td>
                      <td className="py-5 px-6 whitespace-nowrap">
                        <div className="flex flex-col gap-1">
                          <a
                            href={`tel:${lead.phone}`}
                            className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:underline font-mono"
                          >
                            <Phone className="w-3 h-3" /> +{lead.phone}
                          </a>
                          {lead.email ? (
                            <a
                              href={`mailto:${lead.email}`}
                              className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
                            >
                              <Mail className="w-3 h-3" /> {lead.email}
                            </a>
                          ) : (
                            <span className="text-[11px] text-gray-600 italic">No email provided</span>
                          )}
                        </div>
                      </td>
                      <td className="py-5 px-6">
                        <div className="font-medium text-white">{lead.businessName}</div>
                        <div className="inline-block mt-1 px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                          {lead.businessType}
                        </div>
                      </td>
                      <td className="py-5 px-6">
                        <div className="flex flex-wrap gap-1.5 max-w-xs">
                          {lead.requirements ? (
                            lead.requirements.split(", ").map((req, i) => (
                              <span
                                key={i}
                                className="px-2.5 py-1 bg-white/[0.08] hover:bg-white/[0.12] border border-white/10 rounded-full text-xs text-gray-200 whitespace-nowrap transition-colors"
                              >
                                {req}
                              </span>
                            ))
                          ) : (
                            <span className="text-gray-600 italic text-xs">General Inquiry</span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
