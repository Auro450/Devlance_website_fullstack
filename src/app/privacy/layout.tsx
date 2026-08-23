import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Devlance",
  description:
    "Learn how Devlance collects, uses, protects, and handles client and user data.",
  alternates: {
    canonical: "/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
