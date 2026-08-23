import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX Development & Product Design Agency | Affordable Pricing",
  description:
    "Get flashy, high-converting, and luxury UI/UX development for small brands and ambitious startups at affordable pricing. Best UI/UX design agency in West Bengal.",
  keywords: [
    "ui/ux development",
    "affordable website development agency",
    "best agency in kolkata",
    "ui/ux design agency west bengal",
    "product design agency",
    "affordable pricing",
    "cheap rate design",
  ],
  alternates: {
    canonical: "/services/ui-ux",
  },
  openGraph: {
    title: "UI/UX Development & Product Design | Devlance",
    description:
      "World-class flashy UI/UX tailored specifically for small brands and ambitious businesses with affordable pricing.",
    url: "https://devlance.in/services/ui-ux",
  },
};

export default function UiUxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
