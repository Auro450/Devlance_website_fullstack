import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    
    // Convert array of requirements to string before saving
    const requirementsString = Array.isArray(data.requirements) 
      ? data.requirements.join(", ") 
      : data.requirements || "";

    const lead = await prisma.lead.create({
      data: {
        name: data.name?.trim() || "Anonymous",
        phone: data.phone?.trim() || "",
        email: data.email?.trim() || null,
        businessName: data.businessName?.trim() || "",
        businessType: data.businessType?.trim() || "",
        requirements: requirementsString,
      },
    });

    return NextResponse.json(lead, { status: 201 });
  } catch (error) {
    console.error("Failed to create lead:", error);
    return NextResponse.json({ error: "Failed to create lead" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(leads);
  } catch (error) {
    console.error("Failed to fetch leads:", error);
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}
