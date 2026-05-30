"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, Instagram } from "lucide-react";

export default function MobileBottomCTA() {
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-40 bg-luxury-gradient/95 backdrop-blur-md border-t border-matte-gold/25 py-3.5 px-5 flex items-center justify-between gap-3 shadow-[0_-5px_30px_rgba(3,2,6,0.08)] md:hidden"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 25 }}
    >
      {/* Call Button */}
      <a
        href="tel:+919157342233"
        className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-full border border-matte-gold/45 text-primary-text font-sans text-[10px] font-bold uppercase tracking-wider bg-soft-white/60 active:scale-95 transition-transform"
      >
        <Phone className="w-3.5 h-3.5 text-matte-gold" />
        Call
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919157342233?text=Hello!%20I'd%20like%20to%20Book%20Your%20Appointment%20for%20a%20bridal%20Mehndi%20session."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-[1.5] flex items-center justify-center gap-1.5 py-3 rounded-full bg-primary-text text-soft-white font-sans text-[10px] font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(199,168,107,0.3)] bg-gold-gradient text-black active:scale-95 transition-transform"
      >
        <MessageCircle className="w-3.5 h-3.5 text-black" />
        WhatsApp
      </a>

      {/* Instagram Button */}
      <a
        href="https://instagram.com/the_vrunda_mehndi"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-full border border-matte-gold/45 text-primary-text font-sans text-[10px] font-bold uppercase tracking-wider bg-soft-white/60 active:scale-95 transition-transform"
      >
        <Instagram className="w-3.5 h-3.5 text-matte-gold" />
        Instagram
      </a>
    </motion.div>
  );
}
