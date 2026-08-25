import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT App Development & Web Solutions Agency | Devlance (dev-lance)",
  description:
    "Looking for IT app development near me or freelance website development near me? Devlance builds high-performance web apps, web solutions, data solutions & digital transformation for local business growth at affordable pricing from ₹10,000.",
  keywords: [
    "Devlance",
    "devlance",
    "dev-lance",
    "dev lance",
    "it app development near me",
    "freelance website development near me",
    "it services near me",
    "web development near me",
    "web apps",
    "web solutions",
    "it solutions",
    "data solutions",
    "digital transformation",
    "affordable website development agency",
    "best web development agency",
    "full stack web development",
    "affordable website development agency in kolkata",
    "cheap rate website development",
    "ecommerce website development kolkata",
    "custom web application development",
    "next.js agency kolkata",
  ],
  alternates: {
    canonical: "/services/web-development",
  },
  openGraph: {
    title: "IT App Development & Custom Web Solutions | Devlance",
    description:
      "Custom full-stack web applications, IT solutions, data solutions, e-commerce, and cloud platforms engineered for scale at budget-friendly pricing.",
    url: "https://devlance.in/services/web-development",
  },
};

export default function WebDevLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
