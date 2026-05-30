"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919157342233?text=Hello!%20I'd%20like%20to%20Book%20Your%20Appointment%20for%20a%20bridal%20Mehndi%20session."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-40 w-14 h-14 rounded-full bg-[#121016] text-[#c7a86b] border border-[#c7a86b]/40 flex items-center justify-center shadow-[0_4px_20px_rgba(199,168,107,0.3)] hover:shadow-[0_4px_30px_rgba(199,168,107,0.5)] cursor-pointer hover:scale-110 transition-transform duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ y: -4 }}
    >
      {/* Pulsing ring animation */}
      <span className="absolute inset-0 rounded-full border border-matte-gold/45 animate-ping opacity-75" />
      
      {/* Sparkles / Gold dust particles */}
      <Send className="w-6 h-6 rotate-45 transform translate-x-[-1px] translate-y-[1px]" />
      
      {/* Tooltip visible on hover */}
      <div className="absolute right-16 bg-neutral-900 text-[#f5f1eb] px-4 py-2 rounded-xl text-xs font-semibold tracking-wider whitespace-nowrap opacity-0 pointer-events-none hover:opacity-100 group-hover:opacity-100 transition-opacity duration-300 shadow-md border border-matte-gold/25 hidden md:block">
        Inquire Bridal Date ✨
      </div>
    </motion.a>
  );
}
