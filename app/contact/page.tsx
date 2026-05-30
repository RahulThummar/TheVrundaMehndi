"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Instagram, CheckCircle, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert("Please fill in all mandatory fields.");
      return;
    }
    setIsSubmitted(true);

    // Redirect to WhatsApp with pre-filled message compile
    setTimeout(() => {
      const text = `Hello! I have a new inquiry for The Vrunda Mehndi.
Name: ${formData.name}
Message: ${formData.message}`;

      const encodedText = encodeURIComponent(text);
      window.open(`https://wa.me/919157342233?text=${encodedText}`, "_blank");
    }, 1500);
  };

  return (
    <main className="flex-1 bg-luxury-gradient pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Title */}
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-matte-gold block">
            Connect With Us
          </span>
          <h1 className="font-display text-4xl sm:text-5.5xl font-extrabold text-primary-text leading-tight">
            The Vrunda Mehndi Studio
          </h1>
          <p className="font-serif text-sm sm:text-base text-primary-text/75">
            Visit our creative hub in Surat or reach out directly for bookings, collaborations, and bridal consultations.
          </p>
        </div>

        {/* Contact Info and Form Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Studio Info Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-bold text-primary-text">
                Studio Directory
              </h2>
              <p className="text-sm text-primary-text/70 leading-relaxed font-serif">
                Our creative studio is based in Surat. We welcome visitors by appointment only to maintain privacy for our ongoing bridal trials.
              </p>
            </div>

            <div className="space-y-6 text-sm">
              {/* Studio Location */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full border border-matte-gold/25 bg-soft-white/60 flex items-center justify-center text-matte-gold shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-primary-text">Studio Location</h4>
                  <p className="text-xs text-primary-text/60 leading-relaxed mt-0.5">
                    Surat, Gujarat, India
                  </p>
                </div>
              </div>

              {/* Call Directly */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full border border-matte-gold/25 bg-soft-white/60 flex items-center justify-center text-matte-gold shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-primary-text">Call Directly</h4>
                  <p className="text-xs text-primary-text/60 leading-relaxed mt-0.5">
                    <a href="tel:+919157342233" className="hover:text-matte-gold transition-colors font-bold">+91 91573 42233</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Socials Connection */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-matte-gold/15 w-full">
              <a
                href="https://instagram.com/the_vrunda_mehndi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-matte-gold/30 hover:border-matte-gold bg-soft-white/60 text-xs font-bold uppercase tracking-wider text-primary-text transition-colors shadow-sm w-full sm:w-auto"
              >
                <Instagram className="w-4 h-4 text-matte-gold" />
                @the_vrunda_mehndi
              </a>
              <a
                href="https://wa.me/919157342233?text=Hello!%20I'd%20like%20to%20Book%20Your%20Appointment%20for%20a%20bridal%20Mehndi%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-primary-text text-[#030206] text-xs font-bold uppercase tracking-wider transition-colors shadow-sm bg-gold-gradient w-full sm:w-auto font-bold"
              >
                <MessageSquare className="w-4 h-4" />
                Book Your Appointment
              </a>
            </div>
          </div>

          {/* Contact Inquiry Form */}
          <div className="lg:col-span-7 glass-panel border border-white/60 p-8 rounded-[2.5rem] shadow-xl">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  exit={{ opacity: 0 }}
                >
                  <h3 className="font-display text-xl font-bold text-primary-text">
                    Send An Inquiry
                  </h3>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-primary-text/60">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 rounded-full bg-soft-white border border-matte-gold/20 focus:border-matte-gold focus:outline-none text-sm text-primary-text shadow-inner transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-primary-text/60">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-5 py-4 rounded-3xl bg-soft-white border border-matte-gold/20 focus:border-matte-gold focus:outline-none text-sm text-primary-text shadow-inner transition-colors resize-none"
                      placeholder="Your message details"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#030206] bg-gold-gradient shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 font-bold"
                  >
                    <MessageSquare className="w-4 h-4 text-[#030206]" />
                    Submit via WhatsApp
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  className="flex flex-col items-center justify-center py-12 text-center space-y-6"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle className="w-20 h-20 text-matte-gold animate-bounce" />
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-bold text-primary-text">Redirecting to WhatsApp...</h3>
                    <p className="font-serif text-sm text-primary-text/75 max-w-sm">
                      Your inquiry has been compiled. We are launching WhatsApp to connect you directly with our studio team.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Embedded Google Maps */}
        <div className="w-full rounded-[2.5rem] overflow-hidden border border-matte-gold/20 shadow-lg aspect-[21/9] min-h-[300px] relative">
          <iframe
            src="https://maps.google.com/maps?q=Surat%2C%20Gujarat%2C%20India&t=&z=12&ie=UTF8&iwloc=&output=embed"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="The Vrunda Mehndi Surat Location"
          />
        </div>
      </div>
    </main>
  );
}
