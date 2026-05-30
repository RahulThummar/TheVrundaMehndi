import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";
import MobileBottomCTA from "@/components/MobileBottomCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-accent",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Vrunda Mehndi | Luxury Bridal Mehndi in Surat",
  description: "Exquisite ultra-luxury bridal mehndi designs by The Vrunda Mehndi. Crafted with a premium Pinterest-wedding aesthetic, capturing deep rich dark stains and timeless bridal elegance in Surat.",
  metadataBase: new URL("https://thevrundamehndi.vercel.app"),
  keywords: [
    "Bridal",
    "Bridal Surat",
    "Bridal Mehndi Surat",
    "Bridal Mehndi in Surat",
    "Bridal in Surat",
    "Mehndi in Surat",
    "Mehndi Artist in Surat",
    "Luxury Henna Artist Surat",
    "Best Mehndi Artist in Surat",
    "Organic Henna Cones Surat",
    "Arabic Mehndi Designs Surat",
    "Minimalist Mandala Henna Surat",
    "The Vrunda Mehndi",
    "The Vrunda Mehndi in Surat",
    "Vrunda Mehndi Surat",
    "Wedding Henna Surat",
    "Natural Henna Stain Showcase"
  ],
  openGraph: {
    title: "The Vrunda Mehndi | Luxury Bridal Mehndi in Surat",
    description: "Exquisite ultra-luxury bridal mehndi designs by The Vrunda Mehndi. Crafted with a premium Pinterest-wedding aesthetic, capturing deep rich dark stains and timeless bridal elegance in Surat.",
    url: "https://thevrundamehndi.vercel.app",
    siteName: "The Vrunda Mehndi",
    images: [
      {
        url: "/baseLogo.png",
        width: 800,
        height: 800,
        alt: "The Vrunda Mehndi Logo - Luxury Bridal Mehndi in Surat"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Vrunda Mehndi | Luxury Bridal Mehndi in Surat",
    description: "Exquisite ultra-luxury bridal mehndi designs by The Vrunda Mehndi. Crafted with a premium Pinterest-wedding aesthetic, capturing deep rich dark stains and timeless bridal elegance in Surat.",
    images: ["/baseLogo.png"],
  },
  alternates: {
    canonical: "https://thevrundamehndi.vercel.app",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "The Vrunda Mehndi",
  "alternateName": "Vrunda Mehndi Surat",
  "image": "https://thevrundamehndi.vercel.app/baseLogo.png",
  "@id": "https://thevrundamehndi.vercel.app/#salon",
  "url": "https://thevrundamehndi.vercel.app",
  "telephone": "+919157342233",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Surat City Center",
    "addressLocality": "Surat",
    "addressRegion": "Gujarat",
    "postalCode": "395003",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 21.1702,
    "longitude": 72.8311
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "09:00",
    "closes": "21:00"
  },
  "sameAs": [
    "https://instagram.com/the_vrunda_mehndi"
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Luxury Mehndi Services by The Vrunda Mehndi",
  "description": "Premium organic bridal and custom mehndi design services in Surat, Gujarat.",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "name": "Royal Bridal Signature Package",
        "description": "Full customized intricate traditional story portraits with symmetrical royal cuff motifs.",
        "offers": {
          "@type": "Offer",
          "price": "2999",
          "priceCurrency": "INR"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Service",
        "name": "Arabic Fusion Mehndi",
        "description": "Modern floral and vine composition with highly stylized thick and thin symmetrical patterns.",
        "offers": {
          "@type": "Offer",
          "price": "299",
          "priceCurrency": "INR"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Service",
        "name": "Minimalist Chic Mandala",
        "description": "Elegant, contemporary geometric floral designs centered around hand symmetry.",
        "offers": {
          "@type": "Offer",
          "price": "499",
          "priceCurrency": "INR"
        }
      }
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does it take for organic bridal mehndi to stain?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our 100% organic henna takes 24 to 48 hours to naturally oxidize with skin heat and mature into a rich, deep mahogany or espresso brown stain. We recommend keeping the paste on for 6-8 hours and avoiding water contact for the first 24 hours."
      }
    },
    {
      "@type": "Question",
      "name": "Is your henna 100% natural and safe for sensitive skin?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, absolutely! The Vrunda Mehndi mixes henna cones fresh using triple-sifted organic henna powder, high-grade tea extracts, and pure cold-pressed essential oils. Our henna contains zero chemical additives, zero chemical dye (PPD), and zero ammonia, making it 100% safe for sensitive skin and pregnant women."
      }
    },
    {
      "@type": "Question",
      "name": "What is the starting price for bridal mehndi packages in Surat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Premium bridal mehndi packages start from ₹2,999, which includes complete design consultations, custom bridal story elements, a helper artist, and free organic aftercare oils."
      }
    },
    {
      "@type": "Question",
      "name": "How do I book a mehndi appointment with Vrunda Mehndi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Booking is quick and simple! Just fill out your event date and contact details in our booking studio on the website. The form compiles your details and opens a direct booking connection on WhatsApp with our atelier team."
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} ${playfair.variable} ${greatVibes.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-screen bg-luxury-gradient text-primary-text font-sans antialiased flex flex-col relative pb-16 md:pb-0">
        {/* Global Progress Indicator */}
        <ScrollProgress />
        
        {/* Main Transparent Navbar */}
        <Navbar />

        {/* Dynamic Pages Transition Container */}
        <div className="flex-1 flex flex-col">{children}</div>

        {/* Global Floating Elements */}
        <WhatsAppButton />
        <MobileBottomCTA />

        {/* Elegant Luxury Footer */}
        <Footer />
      </body>
    </html>
  );
}
