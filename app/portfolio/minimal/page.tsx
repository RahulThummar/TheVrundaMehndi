"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, ZoomIn } from "lucide-react";

const MINIMAL_IMAGES = [
  { id: 1, src: "/images/portfolio/minimal/1.png", title: "Graceful Lotus Mandala", desc: "Symmetrical lotus patterns beautifully isolated in the center of the palm." },
  { id: 2, src: "/images/portfolio/minimal/2.png", title: "Modern Boho Bands", desc: "Boho-chic wrist bands combined with clean geometric finger designs." },
  { id: 3, src: "/images/portfolio/minimal/3.png", title: "Symmetrical Ring Mandala", desc: "Isolated finger bands and minimalist central wrist cuffs." },
  { id: 4, src: "/images/portfolio/minimal/4.png", title: "Clean Petal Clusters", desc: "Elegant floral negative spaces framing minimalist hand borders." },
];

export default function MinimalPortfolio() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <main className="flex-1 bg-luxury-gradient pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Navigation Breadcrumb */}
        <div className="flex gap-2 text-xs font-semibold uppercase tracking-wider text-primary-text/60">
          <Link href="/portfolio" className="hover:text-matte-gold transition-colors">Portfolio</Link>
          <span>/</span>
          <span className="text-matte-gold">Minimalist Chic</span>
        </div>

        <div className="space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-matte-gold block">
            Trendy & Clean
          </span>
          <h1 className="font-display text-4xl sm:text-5.5xl font-extrabold text-primary-text leading-tight">
            Minimalist Chic
          </h1>
          <p className="font-serif text-sm sm:text-base text-primary-text/75 max-w-xl">
            Delicate mandala compositions, clean lines, and geometric spacers. Perfectly suited for contemporary bridesmaids or elegant minimal statements.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MINIMAL_IMAGES.map((img) => (
            <motion.div
              key={img.id}
              className="relative rounded-3xl overflow-hidden border border-matte-gold/15 group shadow-sm bg-soft-white/60 p-3 hover:border-matte-gold/30 hover:shadow-md transition-all duration-300 cursor-pointer"
              onClick={() => setLightboxImg(img.src)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-[1.2s]"
                  sizes="(max-w-768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-primary-text/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="w-10 h-10 text-white" />
                </div>
              </div>

              <div className="p-3.5 space-y-1">
                <h3 className="font-display text-lg font-bold text-primary-text leading-tight group-hover:text-matte-gold transition-colors">
                  {img.title}
                </h3>
                <p className="text-xs text-primary-text/60 leading-relaxed font-sans">{img.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
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
