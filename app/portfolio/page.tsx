"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, ZoomIn, Calendar } from "lucide-react";

const PORTFOLIO_IMAGES = [
  { id: 1, src: "/images/portfolio/bridal/1.png", category: "bridal" },
  { id: 2, src: "/images/portfolio/arabic/1.png", category: "arabic" },
  { id: 3, src: "/images/portfolio/minimal/1.png", category: "minimal" },
  { id: 4, src: "/images/portfolio/bridal/2.png", category: "bridal" },
  { id: 5, src: "/images/portfolio/arabic/2.png", category: "arabic" },
  { id: 6, src: "/images/portfolio/minimal/2.png", category: "minimal" },
  { id: 7, src: "/images/portfolio/bridal/3.png", category: "bridal" },
  { id: 8, src: "/images/portfolio/bridal/4.png", category: "bridal" },
  { id: 9, src: "/images/portfolio/arabic/3.png", category: "arabic" },
  { id: 10, src: "/images/portfolio/minimal/3.png", category: "minimal" },
  { id: 11, src: "/images/portfolio/arabic/1.png", category: "arabic" },
  { id: 12, src: "/images/portfolio/minimal/1.png", category: "minimal" },
];

const CATEGORY_TAGS: Record<string, string> = {
  bridal: "Signature Bridal",
  arabic: "Contemporary Arabic",
  minimal: "Minimalist Chic",
};

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const filteredImages = filter === "all"
    ? PORTFOLIO_IMAGES
    : PORTFOLIO_IMAGES.filter((img) => img.category === filter);

  return (
    <main className="flex-1 bg-luxury-gradient pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Title */}
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-matte-gold block">
            Our Work
          </span>
          <h1 className="font-display text-4xl sm:text-5.5xl font-extrabold text-primary-text">
            The Henna Treasury
          </h1>
          <p className="font-serif text-sm sm:text-base text-primary-text/70 max-w-md mx-auto">
            Browse through our premium collections of hand-drawn masterpieces crafted for lifetime celebrations.
          </p>
        </div>

        {/* Filter Navigation Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3">
          {["all", "bridal", "arabic", "minimal"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                filter === cat
                  ? "bg-primary-text text-soft-white shadow-md bg-gold-gradient text-black"
                  : "glass-panel text-primary-text/80 hover:text-primary-text border border-white/50"
              }`}
            >
              {cat === "all" ? "All Masterpieces" : cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Gallery */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid relative rounded-3xl overflow-hidden border border-matte-gold/15 group shadow-sm bg-soft-white/60 p-3 hover:border-matte-gold/30 hover:shadow-md transition-all duration-300 cursor-pointer"
                onClick={() => setLightboxImg(img.src)}
              >
                <div className="relative w-full rounded-2xl overflow-hidden">
                  <img
                    src={img.src}
                    alt={`Mehndi Design - ${CATEGORY_TAGS[img.category] || img.category}`}
                    className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-primary-text/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="w-10 h-10 text-white" />
                  </div>
                </div>

                <div className="p-3.5 space-y-1">
                  <span className="text-[9px] uppercase tracking-widest text-matte-gold font-bold">
                    {CATEGORY_TAGS[img.category] || img.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Dialog / Portal */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            className="fixed inset-0 z-50 bg-[#030206]/95 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-matte-gold p-2 transition-colors"
              onClick={() => setLightboxImg(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              className="relative max-w-3xl w-full max-h-[80vh] aspect-[4/5] rounded-2xl overflow-hidden border border-white/10"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImg}
                alt="Enlarged Henna Art"
                fill
                className="object-contain"
                sizes="800px"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
