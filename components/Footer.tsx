"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Send, MapPin, Phone, Mail, Sparkles } from "lucide-react";
import baseLogo from "../public/baseLogo.png";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#18161f] to-[#0d0c11] text-neutral-300 pt-20 pb-12 border-t border-matte-gold/20 overflow-hidden">
      {/* Dynamic Gold Dust Background Glow */}
      <div className="absolute top-0 right-1/4 -translate-y-1/2 w-80 h-80 bg-matte-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 translate-y-1/2 w-96 h-96 bg-lavender-gray/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-6 sm:px-12 md:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          {/* Brand Info Area */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border border-matte-gold/30 bg-soft-white p-1 flex items-center justify-center shadow-[0_4px_20px_rgba(199,168,107,0.25)]">
                <Image
                  src={baseLogo}
                  alt="Bridal Mehndi Logo"
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold tracking-[0.2em] text-white">
                  THE VRUNDA MEHNDI
                </span>
                <span className="font-accent text-sm text-matte-gold tracking-wider -mt-1">
                  Celebrating Every Tradition
                </span>
              </div>
            </Link>
            
            <p className="text-sm text-neutral-400 font-serif leading-relaxed max-w-sm">
              Creating breathtaking, hand-crafted bridal henna masterworks. Embodying Surat's finest, most exquisite Pinterest-aesthetic luxury bridal designs.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://instagram.com/the_vrunda_mehndi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:border-matte-gold hover:text-matte-gold transition-all duration-300"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919157342233?text=Hello!%20I'd%20like%20to%20Book%20Your%20Appointment%20for%20a%20bridal%20Mehndi."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:border-matte-gold hover:text-matte-gold transition-all duration-300"
                aria-label="WhatsApp Direct Chat"
              >
                <Send className="w-4 h-4 rotate-45" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="font-display text-xs font-semibold tracking-[0.2em] text-white uppercase flex items-center gap-1.5">
              Explore Collections
              <Sparkles className="w-3 h-3 text-matte-gold" />
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link href="/portfolio/bridal" className="text-neutral-400 hover:text-matte-gold transition-colors duration-250 font-medium">
                  Bridal Masterpieces
                </Link>
              </li>
              <li>
                <Link href="/portfolio/arabic" className="text-neutral-400 hover:text-matte-gold transition-colors duration-250 font-medium">
                  Arabic Fusion
                </Link>
              </li>
              <li>
                <Link href="/portfolio/minimal" className="text-neutral-400 hover:text-matte-gold transition-colors duration-250 font-medium">
                  Minimalist Chic
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-neutral-400 hover:text-matte-gold transition-colors duration-250 font-medium">
                  Services & Packages
                </Link>
              </li>
              <li>
                <Link href="/stain-results" className="text-neutral-400 hover:text-matte-gold transition-colors duration-250 font-medium">
                  Stain Gallery 🤎
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="font-display text-xs font-semibold tracking-[0.2em] text-white uppercase flex items-center gap-1.5">
              Mehndi Studio
              <Sparkles className="w-3 h-3 text-matte-gold" />
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-matte-gold shrink-0 mt-0.5" />
                <span className="text-neutral-400 leading-relaxed">
                  Surat, Gujarat, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-matte-gold shrink-0" />
                <a href="tel:+919157342233" className="text-neutral-400 hover:text-matte-gold transition-colors">
                  +91 91573 42233
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Matte Gold Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-matte-gold/40 to-transparent w-full mb-8" />

        {/* Bottom copyright info */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-sans">
          <p>&copy; {new Date().getFullYear()} The Vrunda Mehndi. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-matte-gold transition-colors">Atelier philosophy</Link>
            <span>•</span>
            <Link href="/booking" className="hover:text-matte-gold transition-colors">Reserve Bridal slot</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
