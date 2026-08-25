import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX Product Design & Web Solutions | Devlance (dev-lance)",
  description:
    "Devlance (dev-lance) provides luxury UI/UX design, mobile app interface design & web solutions. Get flashy, high-converting digital product design for small brands and ambitious startups at affordable pricing.",
  keywords: [
    "Devlance",
    "devlance",
    "dev-lance",
    "dev lance",
    "ui/ux development",
    "freelance website development near me",
    "it services near me",
    "web solutions",
    "digital transformation",
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
    title: "UI/UX Product Design & Web Solutions | Devlance",
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
