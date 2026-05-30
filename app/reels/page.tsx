"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Instagram, Play, Flame, Heart, MessageCircle } from "lucide-react";

const REELS_DATA = [
  { id: 1, title: "Royal Rajkumari Portrait Application ✨", views: "102k", likes: "12k", src: "/bridal_hero.png" },
  { id: 2, title: "Intricate Arabic Mandalas in 30 Seconds 🌸", views: "85k", likes: "8k", src: "/arabic_mehndi.png" },
  { id: 3, title: "Natural Dark Organic Stain Matured 🤎", views: "154k", likes: "19k", src: "/stain_after.png" },
  { id: 4, title: "Delicate Minimal Mandala Symmetry 💫", views: "65k", likes: "6k", src: "/minimalist_mehndi.png" },
];

export default function Reels() {
  return (
    <main className="flex-1 bg-luxury-gradient pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header Title */}
        <div className="text-center space-y-4 max-w-xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-matte-gold block flex items-center justify-center gap-1.5">
            <Instagram className="w-3.5 h-3.5" /> Reels Inspiration
          </span>
          <h1 className="font-display text-4xl sm:text-5.5xl font-extrabold text-primary-text leading-tight">
            Cinematic Highlights
          </h1>
          <p className="font-serif text-sm sm:text-base text-primary-text/75">
            Watch our viral masterpieces and step-by-step applications. Designed for highly visually addictive Pinterest and Instagram storytelling.
          </p>
        </div>

        {/* Vertical Reel Grid (Mobile Snapping Layout compatible) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REELS_DATA.map((reel, idx) => (
            <motion.div
              key={reel.id}
              className="group relative rounded-[2.5rem] overflow-hidden aspect-[9/16] bg-primary-text/10 border border-matte-gold/20 shadow-lg flex flex-col justify-between p-6 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {/* Overlay Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-text via-primary-text/15 to-transparent z-10" />
              
              <Image
                src={reel.src}
                alt={reel.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                sizes="(max-w-768px) 100vw, 400px"
              />

              {/* Top Row: Play & View Counter */}
              <div className="relative z-20 flex justify-between items-start">
                <div className="w-10 h-10 rounded-full bg-soft-white/30 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                  <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                </div>
                <span className="text-[10px] bg-matte-gold/90 text-primary-text px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                  {reel.views} views
                </span>
              </div>

              {/* Bottom Row: Text & Micro Interactions */}
              <div className="relative z-20 space-y-4">
                <p className="font-serif text-base sm:text-lg font-bold text-white leading-snug">
                  {reel.title}
                </p>
                <div className="flex items-center justify-between text-xs text-white/90 pt-2 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                      {reel.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4 text-white" />
                      {idx * 3 + 24} comments
                    </span>
                  </div>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] uppercase font-bold text-matte-gold tracking-widest hover:text-white transition-colors"
                  >
                    Open Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
