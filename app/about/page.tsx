"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Calendar, Heart, ShieldAlert, Award } from "lucide-react";

export default function About() {
  return (
    <main className="flex-1 bg-luxury-gradient pt-32 pb-24 px-6 overflow-hidden">
      {/* Brand Story Hero */}
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-matte-gold block">
            The Atelier Philosophy
          </span>
          <h1 className="font-display text-4xl sm:text-5.5xl font-extrabold tracking-tight text-primary-text">
            Crafting Heritage & Beauty
          </h1>
          <p className="font-serif text-lg text-primary-text/75 italic">
            "Mehndi is not just an application; it is a sacred visual narrative of love, union, and blessings."
          </p>
        </div>

        {/* Story Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-8">
            <h2 className="font-display text-2xl sm:text-3.5xl font-bold text-primary-text leading-tight">
              Our Journey of <br />
              <span className="font-serif italic font-normal text-matte-gold">Timeless Elegance</span>
            </h2>
            
            <p className="text-sm text-primary-text/75 leading-relaxed font-sans">
              Founded on the values of pure artistry and authentic organic quality, The Vrunda Mehndi has grown into Surat’s most sought-after luxury bridal henna studio. Our signature style is a harmonious convergence of ancient heritage motifs and clean, modern Pinterest-worthy layouts.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-matte-gold/10 border border-matte-gold/20 flex items-center justify-center shrink-0 text-matte-gold">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-primary-text">100% Pure Organic Formulation</h4>
                  <p className="text-xs text-primary-text/60 leading-relaxed mt-0.5">
                    We hand-sift our henna powder three times and mix it with high-grade tea extracts and cold-pressed essential oils to ensure absolute safety and an incredibly dark, rich stain.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-matte-gold/10 border border-matte-gold/20 flex items-center justify-center shrink-0 text-matte-gold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-primary-text">Storytelling Bridal Motifs</h4>
                  <p className="text-xs text-primary-text/60 leading-relaxed mt-0.5">
                    From personalized portraits of the couple to symbols representing their unique love story, each line is drawn with precise intention and royal symmetry.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary-text text-soft-white font-sans text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 transition-transform bg-gold-gradient text-black"
              >
                Inquire For Your Wedding
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <motion.div
              className="relative w-full max-w-[450px] aspect-[4/5] rounded-[3rem] overflow-hidden border border-matte-gold/20 bg-soft-white/60 p-4 shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
                <Image
                  src="/arabic_mehndi.png"
                  alt="About Bridal Mehndi Artist"
                  fill
                  className="object-cover"
                  sizes="(max-w-768px) 100vw, 450px"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
