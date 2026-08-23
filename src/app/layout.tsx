import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingIcon } from "@/components/ui/floating-icon";
import { LeadFormProvider } from "@/components/providers/lead-form-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://devlance.in";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Devlance | Best Web Development & Digital Marketing Agency",
    template: "%s | Devlance",
  },
  description:
    "Devlance is the best and affordable website development & digital marketing agency in Kolkata, West Bengal. We build full stack web development, high-converting UI/UX design, AI automation & digital marketing at cheap rates and affordable pricing.",
  keywords: [
    "best web development agency",
    "affordable website development agency",
    "best digital marketing agency in west bengal",
    "affordable website development agency in kolkata",
    "full stack web development",
    "ui/ux development",
    "affordable pricing",
    "cheap rate website development",
    "best agency in kolkata",
    "best web development agency in west bengal",
    "custom web application development",
    "ai automation agency",
    "next.js agency",
    "ecommerce website development kolkata",
  ],
  authors: [
    { name: "Aurojyoti Kundu" },
    { name: "Somsubhra Abir Das" },
    { name: "Devlance" },
  ],
  creator: "Devlance",
  publisher: "Devlance",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Devlance | Best Web Development & Digital Marketing Agency",
    description:
      "Premier digital product, technology, AI automation & growth agency in Kolkata, West Bengal. Custom full-stack web applications and marketing at affordable pricing starting from ₹10,000.",
    url: siteUrl,
    siteName: "Devlance",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devlance | Best Web Development & Digital Marketing Agency",
    description:
      "Affordable website development, full-stack apps, UI/UX, and digital marketing agency in Kolkata, West Bengal.",
    creator: "@devlance",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-WB",
    "geo.placename": "Kolkata, West Bengal",
    "geo.position": "22.5726;88.3639",
    ICBM: "22.5726, 88.3639",
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Devlance",
      url: siteUrl,
      logo: `${siteUrl}/favicon.ico`,
      description:
        "Devlance is the best affordable website development and digital marketing agency in Kolkata, West Bengal specializing in full-stack web development, UI/UX, AI automation, and growth marketing.",
      telephone: "+919547934724",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kolkata",
        addressRegion: "West Bengal",
        addressCountry: "IN",
      },
      founders: [
        {
          "@type": "Person",
          name: "Aurojyoti Kundu",
        },
        {
          "@type": "Person",
          name: "Somsubhra Abir Das",
        },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "Devlance Digital Agency",
      url: siteUrl,
      image: `${siteUrl}/favicon.ico`,
      priceRange: "₹₹ (Affordable Pricing starting from ₹10,000)",
      telephone: "+919547934724",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kolkata",
        addressRegion: "West Bengal",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "22.5726",
        longitude: "88.3639",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "21:00",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Agency Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Full Stack Web Development",
              description:
                "Custom Next.js, Node.js & React web applications with scalable database architecture at affordable rates starting at ₹10,000.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "UI/UX Development",
              description:
                "Bespoke high-conversion user interfaces, prototypes, and mobile app design.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Digital Marketing & Growth",
              description:
                "Meta Ads, influencer collaborations, social media management, and WhatsApp marketing in West Bengal starting at ₹12,000/month.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Automation",
              description:
                "Custom AI chatbots, smart automated workflows, and LLM implementations.",
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className={`${inter.variable} antialiased bg-black`}>
        <LenisProvider>
          <LeadFormProvider>
            <Header />
            {children}
            <Footer />
            <FloatingIcon />
          </LeadFormProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
