"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Calendar, User, Phone, CheckCircle, Send, MessageSquare } from "lucide-react";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    date: "",
    type: "Bridal Signature",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile || !formData.date) {
      alert("Please fill in all mandatory fields.");
      return;
    }

    // Success animation trigger
    setIsSubmitted(true);

    // WhatsApp redirection deep link compiling form values
    setTimeout(() => {
      const text = `Hello! I'd like to book a Mehndi session.
Name: ${formData.name}
Mobile: ${formData.mobile}
Event Date: ${formData.date}
Mehndi Type: ${formData.type}
Message: ${formData.message}`;

      const encodedText = encodeURIComponent(text);
      window.open(`https://wa.me/919157342233?text=${encodedText}`, "_blank");
    }, 1500);
  };

  return (
    <main className="flex-1 bg-luxury-gradient pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-xl mx-auto space-y-12">
        
        {/* Header Title */}
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-matte-gold block flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Reservation Studio
          </span>
          <h1 className="font-display text-4xl sm:text-5.5xl font-extrabold text-primary-text leading-tight">
            Reserve Your Date
          </h1>
          <p className="font-serif text-sm sm:text-base text-primary-text/75">
            Reserving bridal slots for the upcoming wedding season. Input your details to book instantly via WhatsApp.
          </p>
        </div>

        {/* Glassmorphic Form Card */}
        <div className="glass-panel border border-white/60 p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-6"
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-primary-text/80 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-matte-gold" /> Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 rounded-full bg-soft-white border border-matte-gold/20 focus:border-matte-gold focus:outline-none text-sm text-primary-text shadow-inner transition-colors"
                  />
                </div>

                {/* Mobile Number */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-primary-text/80 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-matte-gold" /> Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter 10-digit mobile number"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full px-5 py-4 rounded-full bg-soft-white border border-matte-gold/20 focus:border-matte-gold focus:outline-none text-sm text-primary-text shadow-inner transition-colors"
                  />
                </div>

                {/* Event Date */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-primary-text/80 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-matte-gold" /> Event Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-5 py-4 rounded-full bg-soft-white border border-matte-gold/20 focus:border-matte-gold focus:outline-none text-sm text-primary-text shadow-inner transition-colors"
                  />
                </div>

                {/* Mehndi Type Dropdown */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-primary-text/80 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-matte-gold" /> Mehndi Style Category
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-5 py-4 rounded-full bg-soft-white border border-matte-gold/20 focus:border-matte-gold focus:outline-none text-sm text-primary-text shadow-sm transition-colors cursor-pointer"
                  >
                    <option value="Bridal Signature">Bridal Signature starting ₹2999</option>
                    <option value="Arabic Fusion">Arabic Fusion starting ₹299</option>
                    <option value="Minimalist Chic">Minimalist Chic starting ₹499</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-primary-text/80 flex items-center gap-1.5">
                    Special Inquiries & Location details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Enter additional details (e.g. Surat location, guest count, etc.)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 rounded-3xl bg-soft-white border border-matte-gold/20 focus:border-matte-gold focus:outline-none text-sm text-primary-text shadow-inner transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-gold-gradient shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Confirm and Book on WhatsApp
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                className="flex flex-col items-center justify-center py-12 text-center space-y-6"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                >
                  <CheckCircle className="w-20 h-20 text-matte-gold" />
                </motion.div>
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-bold text-primary-text">
                    Form Compiled!
                  </h3>
                  <p className="font-serif text-sm text-primary-text/75 max-w-sm">
                    Opening WhatsApp to send your direct slot inquiry details to the artist. Thank you!
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
