import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Digital Marketing Agency in West Bengal | AI Automation & Growth",
  description:
    "Devlance is the best digital marketing agency in West Bengal. Meta Ads, social media management, AI chatbots, and WhatsApp automation starting at an affordable pricing of ₹12,000/month.",
  keywords: [
    "best digital marketing agency in west bengal",
    "digital marketing agency in kolkata",
    "ai automation agency",
    "whatsapp automation",
    "meta ads agency",
    "affordable pricing",
    "cheap rate marketing agency",
    "best agency in west bengal",
  ],
  alternates: {
    canonical: "/growth",
  },
  openGraph: {
    title: "Best Digital Marketing Agency in West Bengal | Devlance",
    description:
      "Laser-targeted Meta Ads, AI automation, and high-impact growth marketing starting at ₹12,000/month.",
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
