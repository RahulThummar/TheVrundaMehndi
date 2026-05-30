"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Sparkles, Calendar, ArrowRight, Instagram, Phone, MessageSquare, ChevronRight, Award, Flame, UserCheck } from "lucide-react";
import baseLogo from "../public/baseLogo.png";

export default function Home() {
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

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
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

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const portfolioItems = [
    { src: "/images/portfolio/bridal/2.png", title: "Royal Rajkumari Bridal", category: "Bridal", tag: "Signature" },
    { src: "/arabic_mehndi.png", title: "Intricate Arabic Vine", category: "Arabic", tag: "Modern" },
    { src: "/images/portfolio/arabic/1.png", title: "Minimalist Lotus Mandala", category: "Minimal", tag: "Trendy" },
    { src: "/minimalist_mehndi.png", title: "Minimalist Lotus Mandala", category: "Minimal", tag: "Trendy" },
  ];

  const services = [
    { title: "Bridal Mehndi", desc: "Intricate royal wedding motifs covering hands and arms with storytelling details.", price: "₹2,999+", img: "/images/portfolio/bridal/3.png" },
    { title: "Arabic Fusion", desc: "Bold, modern fluid lines blended with elegant geometric spaces.", price: "₹299+", img: "/images/portfolio/arabic/5.png" },
    { title: "Minimalist Mandala", desc: "Chic, contemporary elements centered around geometric patterns.", price: "₹99+", img: "/images/portfolio/minimal/2.png" },
    { title: "Premium Mehndi Cones", desc: "100% organic, triple-sifted chemical-free henna cones for dark stains.", price: "₹15", img: "/cons.png" },
  ];




  return (
    <main className="flex-1 overflow-x-hidden">
      {/* Cinematic Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-20 px-6 overflow-hidden">
        {/* Soft Lavender & Beige Pastel Gradient Background */}
        <div className="absolute inset-0 bg-luxury-gradient z-0" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-matte-gold/5 blur-3xl pointer-events-none" />

        {/* Floating Gold Particles Dust Effect */}
        <div className="absolute inset-0 pointer-events-none z-10 opacity-70">
          <div className="absolute top-[20%] left-[10%] w-2.5 h-2.5 bg-matte-gold/40 rounded-full blur-[1px] animate-float-slow" />
          <div className="absolute top-[60%] left-[85%] w-1.5 h-1.5 bg-matte-gold/60 rounded-full blur-[1.5px] animate-float-medium" />
          <div className="absolute top-[75%] left-[25%] w-3 h-3 bg-matte-gold/30 rounded-full blur-[1px] animate-float-slow" />
          <div className="absolute top-[35%] right-[15%] w-2 h-2 bg-matte-gold/50 rounded-full blur-[2px] animate-float-medium" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-25 w-full">
          {/* Hero Content */}
          <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left space-y-8">
            <motion.div
              className="inline-flex self-center lg:self-start items-center gap-2 px-4.5 py-2 rounded-full glass-panel border border-matte-gold/20 text-matte-gold text-xs font-bold uppercase tracking-[0.2em]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Limited Bridal Slots Available
            </motion.div>

            <motion.h1
              className="font-display text-4xl sm:text-5xl lg:text-6.5xl font-extrabold tracking-tight leading-[1.1] text-primary-text"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              Luxury Bridal <br />
              <span className="font-serif italic font-normal text-matte-gold pr-2">Mehndi in Surat</span>
            </motion.h1>

            <motion.p
              className="max-w-xl mx-auto lg:mx-0 font-serif text-lg text-primary-text/75 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Crafting Timeless Bridal Elegance. Infusing rich, 100% natural organic deep mahogany stains with exquisite storytelling motifs tailored for modern brides.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              <Link
                href="/booking"
                className="w-full sm:w-auto px-8 py-4.5 rounded-full bg-primary-text text-soft-white font-sans text-xs font-bold uppercase tracking-wider text-center shadow-[0_10px_25px_rgba(3,2,6,0.15)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-4 h-4 text-matte-gold" />
                Book Appointment
              </Link>
              <a
                href="https://instagram.com/the_vrunda_mehndi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4.5 rounded-full border border-matte-gold/40 hover:border-matte-gold glass-panel text-primary-text font-sans text-xs font-bold uppercase tracking-wider text-center shadow-sm hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
              >
                DM To Book
                <ArrowRight className="w-4 h-4 text-matte-gold" />
              </a>
            </motion.div>
          </div>

          {/* Hero Portrait Display */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <motion.div
              className="relative w-full max-w-[450px] aspect-[4/5] rounded-[3rem] overflow-hidden border border-matte-gold/20 shadow-[0_15px_45px_rgba(3,2,6,0.08)] bg-soft-white/60 p-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
                <Image
                  src="/bridal_hero.png"
                  alt="Luxury Bridal Mehndi Hand close up"
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-[1.5s]"
                  sizes="(max-w-768px) 100vw, 450px"
                />
                
                {/* Gold Shimmer and Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-text/45 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 bg-[#030206]/75 backdrop-blur-md border border-white/10 rounded-2xl p-4.5 text-soft-white shadow-xl">
                  <span className="text-xs uppercase tracking-widest text-matte-gold font-extrabold flex items-center gap-1.5 mb-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Featured Royal Signature
                  </span>
                  <p className="font-display text-lg font-bold leading-tight text-white">Bridal Storytelling Hands</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Portfolio Section */}
      <section className="py-24 bg-soft-white/60 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-matte-gold">
              The Master Gallery
            </span>
            <h2 className="font-display text-3xl sm:text-4.5xl font-extrabold text-primary-text">
              Featured Artistry
            </h2>
          </div>

          {/* Pinterest-inspired Masonry/Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, idx) => (
              <motion.div
                key={idx}
                className="group relative rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(3,2,6,0.03)] border border-matte-gold/15 bg-neutral-900/5 aspect-[4/5] cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-[1s]"
                  sizes="(max-w-768px) 100vw, 300px"
                />
                
                {/* Floating category tag */}
                <div className="absolute top-4 left-4 bg-primary-text/80 backdrop-blur-md border border-matte-gold/20 text-soft-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  {item.tag}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-primary-text/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-xs font-semibold text-matte-gold uppercase tracking-widest mb-1">
                    {item.category} Collection
                  </span>
                  <h3 className="font-display text-lg font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-luxury-gradient relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 max-w-xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-matte-gold">
              Elegant Creations
            </span>
            <h2 className="font-display text-3xl sm:text-4.5xl font-extrabold text-primary-text">
              Our Bridal Offerings
            </h2>
            <p className="font-serif text-primary-text/70">
              Each bridal design is formulated with precise composition and natural ingredients to create memorable milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                className="glass-panel rounded-3xl overflow-hidden border border-white/60 p-5 space-y-4 hover:border-matte-gold/30 hover:-translate-y-1.5 transition-all duration-300 group shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-matte-gold/10">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-[1.2s]"
                    sizes="250px"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-display text-lg font-bold text-primary-text leading-tight group-hover:text-matte-gold transition-colors">
                      {service.title}
                    </h3>
                    <span className="text-xs font-bold text-matte-gold bg-matte-gold/10 px-2 py-0.5 rounded">
                      {service.price}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-primary-text/60 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                
                <Link
                  href="/services"
                  className="flex items-center gap-1.5 text-[10px] font-bold text-primary-text group-hover:text-matte-gold transition-colors uppercase tracking-wider"
                >
                  View Details &rarr;
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before vs After Stain Showcase */}
      <section className="py-24 bg-soft-white/60 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-4 mb-12">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-matte-gold">
              100% Organic Henna Art
            </span>
            <h2 className="font-display text-3xl sm:text-4.5xl font-extrabold text-primary-text">
              Natural Dark Stain Showcase 🤎
            </h2>
            <p className="font-serif text-sm text-primary-text/75 max-w-md mx-auto">
              Drag the luxury slider to view the transformation from freshly applied wet mehndi paste to our mature, ultra-dark mahogany bridal stain.
            </p>
          </div>

          {/* Interactive Before/After Image Slider Container */}
          <div
            className="relative aspect-video w-full rounded-3xl overflow-hidden border border-matte-gold/25 shadow-[0_15px_40px_rgba(3,2,6,0.06)] cursor-ew-resize select-none touch-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => (isDragging.current = false)}
            onTouchCancel={() => (isDragging.current = false)}
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={() => (isDragging.current = false)}
            onMouseLeave={() => (isDragging.current = false)}
          >
            {/* After Image (Dark Stain) */}
            <Image
              src="/stain_after.png"
              alt="Matured Dark Henna Stain"
              fill
              className="object-cover"
              sizes="(max-w-768px) 100vw, 800px"
            />

            {/* Before Image (Fresh Green Paste) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div 
                className="absolute inset-y-0 left-0 h-full max-w-none aspect-video"
                style={{ width: `${sliderPosition > 0 ? (100 / sliderPosition) * 100 : 100}%` }}
              >
                <Image
                  src="/stain_before.png"
                  alt="Fresh Green Henna Paste"
                  fill
                  className="object-cover"
                  sizes="(max-w-768px) 100vw, 800px"
                />
              </div>
            </div>

            {/* Floating Non-Clipping Corner Labels */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-20 bg-matte-gold/80 backdrop-blur-md text-primary-text px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-wider border border-white/30 whitespace-nowrap pointer-events-none select-none">
              <span className="hidden sm:inline">Fresh Paste (Before) ✨</span>
              <span className="inline sm:hidden">Fresh Paste ✨</span>
            </div>

            <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-20 bg-primary-text/80 backdrop-blur-md text-soft-white px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-wider border border-matte-gold/30 whitespace-nowrap pointer-events-none select-none">
              <span className="hidden sm:inline">Matured Dark Stain (After 48 Hours) 🤎</span>
              <span className="inline sm:hidden">Matured Stain 🤎</span>
            </div>

            {/* Slider Handle Line */}
            <div
              className="absolute inset-y-0 w-1 bg-matte-gold shadow-lg z-30"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Slider Thumb Circle */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-primary-text border border-matte-gold flex items-center justify-center text-matte-gold shadow-xl">
                ↔️
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Luxury Final CTA Booking Section */}
      <section className="py-24 bg-gradient-to-b from-soft-white/60 to-[#18161f] text-neutral-100 relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="glass-panel-dark rounded-[3rem] p-10 sm:p-16 border border-white/5 shadow-2xl relative overflow-hidden flex flex-col items-center text-center space-y-8">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Award className="w-40 h-40 text-matte-gold" />
            </div>

            <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-matte-gold flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Limited Bridal Slots Available
            </span>

            <h2 className="font-display text-4xl sm:text-5.5xl font-extrabold tracking-tight text-white leading-tight">
              Book Your Bridal Date ✨
            </h2>

            <p className="max-w-md font-serif text-neutral-300 leading-relaxed">
              Reserving dates for this wedding season. Slots fill quickly. Reach out today to schedule a consultation and lock in Surat's premium mehndi experience.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
              <a
                href="https://wa.me/919157342233?text=Hello!%20I'd%20like%20to%20Book%20Your%20Appointment%20for%20a%20bridal%20Mehndi%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4.5 rounded-full bg-gold-gradient text-[#030206] font-sans text-xs font-bold uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform"
              >
                <MessageSquare className="w-4 h-4" />
                Book Your Appointment
              </a>
              <a
                href="tel:+919157342233"
                className="w-full sm:w-auto px-8 py-4.5 rounded-full border border-white/20 hover:border-matte-gold bg-white/5 text-white font-sans text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:scale-105 transition-transform"
              >
                <Phone className="w-4 h-4 text-matte-gold" />
                Call Atelier
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
