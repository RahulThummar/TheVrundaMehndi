"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Calendar, Heart, ShieldAlert, Award, ShieldCheck } from "lucide-react";

const TIMELINE_STAGES = [
  {
    hours: "Hour 0",
    title: "Paste Scrape-Off",
    colorName: "Pumpkin Orange",
    color: "#e67e22",
    desc: "When first scraped off, the fresh stain appears as a bright, neon pumpkin orange. This is the natural reaction of organic henna bonding with the lawsone proteins in your skin. Do not worry—it is exactly where the stain starts!",
    proTip: "Strictly avoid water! Use a butter knife or card to scrape the dry paste off, and apply coconut oil instead."
  },
  {
    hours: "Hour 12",
    title: "Heat Oxidation Starts",
    colorName: "Warm Amber",
    color: "#d35400",
    desc: "Over the next 12 hours, the lawsone molecule interacts with oxygen and your skin heat. The orange begins to deepen into a warm, cozy amber tone. Symmetrical details start to show beautiful contrast.",
    proTip: "Keep your hands warm! Wrap them in a soft cloth or gloves, or sit in a warm room to speed up maturation."
  },
  {
    hours: "Hour 24",
    title: "Deep Mahogany Red",
    colorName: "Deep Mahogany",
    color: "#78281f",
    desc: "By the second day, your stain transforms into a breathtaking, rich mahogany-red, showing great depth. The symmetrical outlines and storytelling portraits look incredibly bold and sharp.",
    proTip: "Apply a light layer of balm or mustard oil before bathing to create a natural water-resistant shield."
  },
  {
    hours: "Hour 48",
    title: "Ultimate Mature Stain",
    colorName: "Royal Espresso",
    color: "#3d1a04",
    desc: "The absolute crown jewel pinnacle of organic henna! After 48 hours, the stain matures to its maximum depth—a deeply saturated, ultra-dark royal espresso-brown that looks stunning next to gold wedding jewelry.",
    proTip: "Moisturize daily. Avoid harsh chlorine pools or heavy exfoliating soaps to keep the mature stain lasting up to 2 weeks."
  }
];

export default function StainResults() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeStep, setActiveStep] = useState(0);
  const isDragging = useRef(false);

  const handleTouchStart = () => {
    isDragging.current = true;
  };

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
          className="relative aspect-video w-full rounded-3xl overflow-hidden border border-matte-gold/25 shadow-[0_15px_40px_rgba(3,2,6,0.06)] cursor-ew-resize select-none touch-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => (isDragging.current = false)}
          onTouchCancel={() => (isDragging.current = false)}
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

        {/* Interactive Mature Timeline */}
        <div className="space-y-8 bg-soft-white/60 p-8 sm:p-12 rounded-[2.5rem] border border-white/80 shadow-md">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-matte-gold block">
              Maturation Timeline
            </span>
            <h2 className="font-display text-2xl sm:text-3.5xl font-bold text-primary-text">
              The 48-Hour Stain Progression 🤎
            </h2>
            <p className="font-sans text-xs sm:text-sm text-primary-text/70">
              Click each timeline stage below to explore the chemical maturation, color transitions, and specialized pro tips for maximum longevity.
            </p>
          </div>

          {/* Timeline tabs navigation */}
          <div className="relative flex flex-wrap sm:flex-nowrap gap-2 items-center border-b border-matte-gold/15 pb-6">
            {TIMELINE_STAGES.map((stage, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`flex-1 min-w-[80px] py-3 px-4 rounded-xl font-sans text-xs font-bold uppercase tracking-wider text-center transition-all cursor-pointer ${
                  activeStep === idx
                    ? "bg-gold-gradient text-black shadow-md scale-105"
                    : "bg-white/40 border border-matte-gold/10 hover:border-matte-gold/30 text-primary-text"
                }`}
              >
                {stage.hours}
              </button>
            ))}
          </div>

          {/* Active timeline card deck */}
          <div className="min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                {/* Left column: exact color swatch display */}
                <div className="md:col-span-4 flex flex-col items-center justify-center space-y-3.5">
                  <div
                    className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-xl transition-transform duration-500 scale-105"
                    style={{
                      backgroundColor: TIMELINE_STAGES[activeStep].color,
                      boxShadow: `0 15px 30px ${TIMELINE_STAGES[activeStep].color}33, inset 0 0 20px rgba(0,0,0,0.15)`
                    }}
                  />
                  <div className="text-center">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-primary-text/60">Estimated Tone</span>
                    <h4 className="font-display text-sm font-extrabold text-primary-text mt-0.5">{TIMELINE_STAGES[activeStep].colorName}</h4>
                  </div>
                </div>

                {/* Right column: detailed description */}
                <div className="md:col-span-8 space-y-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-matte-gold">{TIMELINE_STAGES[activeStep].hours} • {TIMELINE_STAGES[activeStep].title}</span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-primary-text mt-1">{TIMELINE_STAGES[activeStep].title}</h3>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-primary-text/75 leading-relaxed">
                    {TIMELINE_STAGES[activeStep].desc}
                  </p>
                  
                  {/* Pro Tip Box */}
                  <div className="bg-matte-gold/10 border-l-4 border-matte-gold p-4 rounded-r-xl space-y-1">
                    <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-primary-text flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-matte-gold" /> Pro Aftercare Tip
                    </h4>
                    <p className="text-xs text-primary-text/75 leading-relaxed font-sans">
                      {TIMELINE_STAGES[activeStep].proTip}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
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
