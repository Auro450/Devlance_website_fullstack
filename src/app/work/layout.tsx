import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | IT Solutions & Web Apps | Devlance",
  description:
    "Explore Devlance's portfolio of custom web apps, e-commerce platforms, IT app development near me, enterprise software solutions, and digital transformation case studies.",
  keywords: [
    "Devlance",
    "devlance",
    "dev-lance",
    "dev lance",
    "it app development near me",
    "freelance website development near me",
    "it services near me",
    "web apps",
    "web solutions",
    "it solutions",
    "data solutions",
    "best web development agency",
    "full stack web development",
    "case studies",
    "portfolio",
    "web development agency in kolkata",
    "custom software development",
  ],
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Case Studies & Portfolio | Devlance (dev-lance)",
    description:
      "A deep dive into our elite digital engineering projects: Tajacart, Jaywalking, Earthbags, Multicon, Ray's Medical, and more.",
    url: "https://devlance.in/work",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
