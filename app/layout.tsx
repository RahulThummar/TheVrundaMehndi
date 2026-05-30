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
  metadataBase: new URL("https://thevrundamehndi.com"),
  openGraph: {
    title: "The Vrunda Mehndi | Luxury Bridal Mehndi in Surat",
    description: "Exquisite ultra-luxury bridal mehndi designs by The Vrunda Mehndi. Crafted with a premium Pinterest-wedding aesthetic, capturing deep rich dark stains and timeless bridal elegance.",
    images: [{ url: "/baseLogo.png", width: 800, height: 800, alt: "The Vrunda Mehndi Logo" }],
  },
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
