import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Devlance (dev-lance) | IT Services & Digital Transformation Agency",
  description:
    "Learn about Devlance (dev-lance), a leading IT services, app development, data solutions & digital transformation agency in Kolkata, West Bengal founded by Aurojyoti Kundu & Somsubhra Abir Das.",
  keywords: [
    "Devlance",
    "devlance",
    "dev-lance",
    "dev lance",
    "devlance.in",
    "it services near me",
    "it solutions",
    "data solutions",
    "digital transformation",
    "affordable website development agency in kolkata",
    "best web development agency",
    "best agency in kolkata",
    "affordable pricing",
    "cheap rate website development",
    "devlance agency",
    "aurojyoti kundu",
    "somsubhra abir das",
  ],
  alternates: {
    canonical: "/agency",
  },
  openGraph: {
    title: "About Devlance | IT Services & Digital Transformation Agency",
    description:
      "Democratizing elite IT services, custom web solutions & digital transformation for ambitious businesses at affordable rates.",
    url: "https://devlance.in/agency",
  },
};

export default function AgencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
