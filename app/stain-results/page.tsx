"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Calendar, Heart, ShieldAlert, Award, ShieldCheck } from "lucide-react";

export default function StainResults() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const isDragging = useRef(false);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <main className="flex-1 bg-luxury-gradient pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header Title */}
        <div className="text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-matte-gold block">
            Natural Organic Chemistry
          </span>
          <h1 className="font-display text-4xl sm:text-5.5xl font-extrabold text-primary-text leading-tight">
            Bridal Stain Results 🤎
          </h1>
          <p className="font-serif text-sm sm:text-base text-primary-text/75 max-w-md mx-auto">
            100% natural organic henna with absolutely zero chemical additives. Drag the slider to experience the breathtaking transition of our signature mahogany stain.
          </p>
        </div>

        {/* Before/After Interactive Slider */}
        <div
          className="relative aspect-video w-full rounded-3xl overflow-hidden border border-matte-gold/25 shadow-[0_15px_40px_rgba(3,2,6,0.06)] cursor-ew-resize select-none"
          onTouchMove={handleTouchMove}
          onMouseMove={handleMouseMove}
          onMouseDown={() => (isDragging.current = true)}
          onMouseUp={() => (isDragging.current = false)}
          onMouseLeave={() => (isDragging.current = false)}
        >
          {/* After (Dark Stain) */}
          <Image
            src="/stain_after.png"
            alt="Matured Dark Henna Stain"
            fill
            className="object-cover"
            sizes="(max-w-768px) 100vw, 800px"
          />
          <div className="absolute bottom-6 right-6 bg-primary-text/80 backdrop-blur-md text-soft-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider border border-matte-gold/30">
            Matured Dark Stain (After 48 Hours) 🤎
          </div>

          {/* Before (Fresh Green Paste) */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="absolute inset-y-0 left-0 w-[800px] h-[450px] max-w-none aspect-video">
              <Image
                src="/stain_before.png"
                alt="Fresh Green Henna Paste"
                fill
                className="object-cover"
                sizes="(max-w-768px) 100vw, 800px"
              />
              <div className="absolute bottom-6 left-6 bg-matte-gold/80 backdrop-blur-md text-primary-text px-4 py-1.5 rounded-full text-xs font-bold tracking-wider border border-white/30">
                Fresh Paste (Before) ✨
              </div>
            </div>
          </div>

          {/* Slider Handle Line */}
          <div
            className="absolute inset-y-0 w-1 bg-matte-gold shadow-lg"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-primary-text border border-matte-gold flex items-center justify-center text-matte-gold shadow-xl">
              ↔️
            </div>
          </div>
        </div>

        {/* Artistry Stain Guide */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start bg-soft-white/60 p-8 rounded-[2.5rem] border border-white/80 shadow-md">
          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold text-primary-text">
              The Stain Journey
            </h3>
            <p className="text-xs sm:text-sm text-primary-text/75 leading-relaxed font-sans">
              Our organic henna goes through a slow maturation process. When first scraped off, the stain is a bright pumpkin orange. Over the next 48 hours, it naturally oxidizes with your skin heat to darken into a rich, deep mahogany-red and finally a stunning espresso brown.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold text-primary-text flex items-center gap-1.5">
              <ShieldCheck className="w-5 h-5 text-matte-gold" /> Organic Aftercare Tips
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-primary-text/75 leading-relaxed font-sans list-disc list-inside">
              <li>Keep mehndi paste on for 6-8 hours.</li>
              <li>Scrape off dry paste; do not wash with water.</li>
              <li>Apply warm mustard oil or coconut oil.</li>
              <li>Avoid chlorinated water or heavy soap for 24 hours.</li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-4">
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 px-8 py-4.5 rounded-full bg-primary-text text-soft-white font-sans text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 transition-transform bg-gold-gradient text-black"
          >
            Reserve Your Bridal Slot
          </Link>
        </div>
      </div>
    </main>
  );
}
