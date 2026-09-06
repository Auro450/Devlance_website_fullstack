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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://devlance.online";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Devlance | IT Services, App Development & Web Solutions Agency Near Me",
    template: "%s | Devlance",
  },
  description:
    "Devlance (dev-lance) is the best IT services, freelance app development & website development agency in Kolkata, West Bengal. We specialize in custom web apps, web solutions, IT & data solutions, digital transformation, AI automation & digital marketing to help local businesses grow at affordable pricing starting from ₹10,000.",
  keywords: [
    "Devlance",
    "devlance",
    "dev-lance",
    "dev lance",
    "devlance.online",
    "Devlance agency",
    "it services near me",
    "it app development near me",
    "freelance website development near me",
    "web development near me",
    "digital marketing agency near me",
    "website design company near me",
    "software development agency near me",
    "freelance web developer near me",
    "app developers near me",
    "it solutions near me",
    "data solutions near me",
    "web apps",
    "web solutions",
    "websites",
    "it solutions",
    "data solutions",
    "digital transformation",
    "digital automation",
    "digital marketing",
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
    "helping local business to grow",
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
    title: "Devlance | IT Services, App Development & Web Solutions Agency",
    description:
      "Looking for IT services, app development or freelance website development near me? Devlance builds custom web apps, IT solutions, data solutions & digital transformation for growing businesses.",
    url: siteUrl,
    siteName: "Devlance",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devlance | IT Services, App Development & Web Solutions Agency",
    description:
      "Affordable IT services, freelance app development, custom web solutions, digital automation & marketing agency in Kolkata, West Bengal.",
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
    "geo.placename": "Kolkata, West Bengal, India",
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
      alternateName: ["devlance", "dev-lance", "dev lance", "Devlance Agency", "Devlance IT Solutions"],
      url: siteUrl,
      logo: `${siteUrl}/favicon.ico`,
      description:
        "Devlance is an IT services, web development, app development, and digital marketing agency in Kolkata, West Bengal specializing in full-stack web solutions, IT & data solutions, digital transformation, and AI automation for local business growth.",
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
      sameAs: [
        "https://wa.me/919547934724",
        "https://devlance.online",
      ],
    },
    {
      "@type": ["ProfessionalService", "LocalBusiness", "ITService"],
      "@id": `${siteUrl}/#service`,
      name: "Devlance IT Services & Digital Agency",
      alternateName: ["devlance", "dev-lance", "dev lance"],
      url: siteUrl,
      image: `${siteUrl}/favicon.ico`,
      priceRange: "₹₹ (Affordable Pricing starting from ₹10,000)",
      telephone: "+919547934724",
      areaServed: [
        "Kolkata",
        "West Bengal",
        "India",
        "Worldwide",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Db 23, Db block, Newtown Action Area 1",
        addressLocality: "Kolkata",
        addressRegion: "West Bengal",
        postalCode: "700156",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 22.5726,
        longitude: 88.3639,
      },
      knowsAbout: [
        "Devlance",
        "dev-lance",
        "IT services near me",
        "IT app development near me",
        "freelance website development near me",
        "web apps",
        "web solutions",
        "IT solutions",
        "data solutions",
        "digital transformation",
        "digital automation",
        "digital marketing",
      ],
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
        name: "Devlance IT & Digital Solutions",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Full Stack Web Development & Web Apps",
              description:
                "Custom Next.js, Node.js & React web applications, web solutions, and freelance website development at affordable rates starting at ₹10,000.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "IT Solutions & App Development",
              description:
                "Custom mobile and web app development, IT solutions, and software architecture tailored for growing businesses.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Data Solutions & Digital Transformation",
              description:
                "Data architecture, modernizing legacy systems, cloud integrations, and business digital transformation.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "UI/UX Development",
              description:
                "Bespoke high-conversion user interfaces, interactive prototypes, and mobile app design.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Digital Marketing & Growth",
              description:
                "Meta Ads, influencer collaborations, social media management, and WhatsApp marketing starting at ₹12,000/month.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Automation & Digital Workflows",
              description:
                "Custom AI chatbots, smart automated workflows, LLM implementations, and WhatsApp automation.",
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
