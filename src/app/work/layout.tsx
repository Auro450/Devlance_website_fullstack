import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies & Work | Best Web Development Agency",
  description:
    "Explore our portfolio of high-scale e-commerce, enterprise websites, quick commerce apps, and healthcare platforms built by Devlance.",
  keywords: [
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
    title: "Case Studies & Portfolio | Devlance",
    description:
      "A deep dive into our elite digital engineering projects: Tajacart, Jaywalking, Earthbags, Multicon, and more.",
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
