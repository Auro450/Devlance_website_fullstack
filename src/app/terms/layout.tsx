import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Devlance",
  description:
    "Review the Terms of Service and client engagement agreements for Devlance digital agency.",
  alternates: {
    canonical: "/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
