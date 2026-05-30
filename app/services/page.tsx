"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Check, Flame, Star, Award, Zap } from "lucide-react";

const PACKAGES = [
  {
    title: "Arabic Fusion",
    tagline: "Elegant Modern Outlines",
    price: "₹299",
    unit: "starting per hand",
    features: [
      "Modern floral & vine composition",
      "Thick & thin line symmetry",
      "Chemical-free organic henna paste",
      "Approx. 15-30 mins per hand",
    ],
    highlight: false,
    color: "rgba(199, 168, 107, 0.15)",
  },
  {
    title: "Royal Bridal Signature",
    tagline: "The Pinnacle of Bridal Luxury",
    price: "₹2,999",
    unit: "starting package",
    features: [
      "Intricate customized story portraits",
      "Full front & back hands coverage",
      "Symmetrical royal cuff motifs",
      "Includes secondary artist for relatives",
      "Complementary organic aftercare oil",
      "Complete design consultation",
    ],
    highlight: true,
    color: "rgba(199, 168, 107, 0.4)",
  },
  {
    title: "Organic Mehndi Cone",
    tagline: "Secret Formula Natural Stain",
    price: "₹15",
    unit: "per cone",
    features: [
      "100% natural chemical-free henna",
      "Triple-filtered premium powder",
      "Infused with therapeutic essential oils",
      "Guaranteed rich dark mahogany stain",
    ],
    highlight: false,
    color: "rgba(199, 168, 107, 0.15)",
  },
];

export default function Services() {
  return (
    <main className="flex-1 bg-luxury-gradient pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Title */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-matte-gold block">
            Artistry Pricing
          </span>
          <h1 className="font-display text-4xl sm:text-5.5xl font-extrabold text-primary-text leading-tight">
            Services & Packages
          </h1>
          <p className="font-serif text-sm sm:text-base text-primary-text/70">
            Reserving your special moments with premium artistry and organic care. Explore our tailored options for brides and guests.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg, idx) => (
            <motion.div
              key={idx}
              className={`relative rounded-3xl overflow-hidden glass-panel border p-8 flex flex-col justify-between transition-all duration-300 shadow-md ${
                pkg.highlight
                  ? "border-matte-gold shadow-[0_10px_35px_rgba(199,168,107,0.2)] bg-soft-white scale-105 z-10"
                  : "border-white/50 hover:border-matte-gold/30"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {/* Matte Gold Glowing Aura for the Royal Package */}
              {pkg.highlight && (
                <div className="absolute top-0 right-0 bg-gold-gradient text-[#030206] px-5 py-1.5 rounded-bl-2xl text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
                  <Award className="w-3.5 h-3.5" /> Popular Signature
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-matte-gold font-bold">
                    {pkg.tagline}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-primary-text mt-1">
                    {pkg.title}
                  </h3>
                </div>

                <div className="flex items-baseline gap-1.5 border-b border-matte-gold/15 pb-6">
                  <span className="font-display text-4xl sm:text-5xl font-extrabold text-primary-text">
                    {pkg.price}
                  </span>
                  <span className="text-xs text-primary-text/60 font-sans font-medium uppercase tracking-wider">
                    {pkg.unit}
                  </span>
                </div>

                <ul className="space-y-3.5 pt-2">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-primary-text/75 leading-relaxed">
                      <Check className="w-4 h-4 text-matte-gold shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-matte-gold/10">
                <Link
                  href="/booking"
                  className={`block w-full py-4 rounded-full font-sans text-xs font-bold uppercase tracking-wider text-center transition-all duration-300 shadow-sm ${
                    pkg.highlight
                      ? "bg-primary-text text-soft-white bg-gold-gradient text-black"
                      : "border border-matte-gold/30 hover:border-matte-gold text-primary-text hover:bg-white/30"
                  }`}
                >
                  Reserve Package
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
