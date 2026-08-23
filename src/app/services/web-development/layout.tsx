import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affordable Website Development Agency | Full Stack Web Development",
  description:
    "Devlance is the best affordable website development agency in Kolkata & West Bengal. We build high-speed, custom full-stack web applications, e-commerce, and healthcare platforms at cheap rates starting at ₹10,000.",
  keywords: [
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
    title: "Affordable Website Development Agency | Devlance",
    description:
      "Custom full-stack web applications, e-commerce, and cloud platforms engineered for scale at budget-friendly pricing.",
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
