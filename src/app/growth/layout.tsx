import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Agency Near Me | AI & Digital Automation | Devlance",
  description:
    "Devlance (dev-lance) provides digital marketing near me, digital automation, AI chatbots, WhatsApp automation & Meta Ads to help local businesses grow rapidly at affordable pricing starting at ₹12,000/month.",
  keywords: [
    "Devlance",
    "devlance",
    "dev-lance",
    "dev lance",
    "digital marketing agency near me",
    "digital marketing near me",
    "digital automation",
    "ai automation agency",
    "whatsapp automation",
    "helping local business to grow",
    "best digital marketing agency in west bengal",
    "digital marketing agency in kolkata",
    "meta ads agency",
    "affordable pricing",
    "cheap rate marketing agency",
    "best agency in west bengal",
  ],
  alternates: {
    canonical: "/growth",
  },
  openGraph: {
    title: "Digital Marketing & Automation Agency Near Me | Devlance",
    description:
      "Laser-targeted Meta Ads, AI automation, and high-impact digital growth marketing for local business scaling.",
    url: "https://devlance.in/growth",
  },
};

export default function GrowthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
