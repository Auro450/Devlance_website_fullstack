import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Devlance | Affordable Website Development Agency in Kolkata",
  description:
    "Devlance is an elite digital engineering and growth agency based in Kolkata, West Bengal. Founded by Aurojyoti Kundu & Somsubhra Abir Das, democratizing premium web development from ₹10,000.",
  keywords: [
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
    title: "About Devlance | Digital Agency Kolkata",
    description:
      "Democratizing elite digital engineering and world-class design for ambitious businesses at affordable rates.",
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
