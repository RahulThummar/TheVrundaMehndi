"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, Send, Heart } from "lucide-react";
import baseLogo from "../public/baseLogo.png";
import NextImage from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Story", href: "/about" },
  {
    label: "Portfolio",
    href: "#",
    submenu: [
      { label: "Bridal Masterpieces", href: "/portfolio/bridal", desc: "Exquisite royal traditional designs" },
      { label: "Arabic Fusion", href: "/portfolio/arabic", desc: "Contemporary bold & flowing patterns" },
      { label: "Minimalist Chic", href: "/portfolio/minimal", desc: "Modern delicate and elegant lines" },
      { label: "Completed Client Work", href: "/portfolio/completed", desc: "Real recent client masterpieces" },
    ],
  },
  { label: "Artistry & Services", href: "/services" },
  { label: "Stain Results 🤎", href: "/stain-results" },
  { label: "Contact Inquiry", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer on path change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        className={`fixed left-0 right-0 z-50 transition-all duration-500 flex justify-center ${isScrolled ? "top-4 py-0" : "top-0 py-6"
          }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className={`transition-all duration-500 flex items-center justify-between ${isScrolled
            ? "w-[92%] max-w-6xl rounded-full border border-white/60 bg-white/70 backdrop-blur-xl shadow-[0_20px_40px_rgba(3,2,6,0.08),0_0_1px_rgba(199,168,107,0.2)] px-6 py-2.5"
            : "w-full px-6 sm:px-12 md:px-16"
            }`}
        >
          {/* Logo Brand area */}
          <Link href="/" className="flex items-center gap-3 group relative">
            <div className="relative w-11 h-11 md:w-12 md:h-12 rounded-full overflow-hidden border border-matte-gold/30 bg-soft-white p-1 flex items-center justify-center shadow-[0_2px_10px_rgba(199,168,107,0.15)] transition-all duration-500 group-hover:border-matte-gold/60 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(199,168,107,0.35)]">
              <NextImage
                src={baseLogo}
                alt="Bridal Mehndi Logo"
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-sm md:text-base font-extrabold tracking-[0.2em] text-primary-text transition-all duration-300 group-hover:text-matte-gold flex items-center gap-1">
                THE VRUNDA MEHNDI
                <Sparkles className="w-3.5 h-3.5 text-matte-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow" />
              </span>
              <span className="font-accent text-[10px] md:text-xs text-matte-gold tracking-wider -mt-1 pl-0.5">
                Celebrating Every Tradition
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-2">
            {NAV_LINKS.map((link, idx) => {
              const isActive = pathname === link.href;
              const isHovered = hoveredIndex === idx;

              if (link.submenu) {
                const isSubmenuActive = pathname.startsWith("/portfolio");
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => {
                      setPortfolioDropdownOpen(true);
                      setHoveredIndex(idx);
                    }}
                    onMouseLeave={() => {
                      setPortfolioDropdownOpen(false);
                      setHoveredIndex(null);
                    }}
                  >
                    <button
                      className={`relative px-4 py-2 rounded-full flex items-center gap-1.5 font-sans text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer z-10 ${isSubmenuActive ? "text-matte-gold" : "text-primary-text/80 hover:text-primary-text"
                        }`}
                    >
                      <span className="relative z-10 flex items-center gap-1">
                        {link.label}
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-300 ${portfolioDropdownOpen ? "rotate-180 text-matte-gold" : ""
                            }`}
                        />
                      </span>
                      {isHovered && (
                        <motion.span
                          className="absolute inset-0 rounded-full bg-matte-gold/10 backdrop-blur-[2px] -z-0"
                          layoutId="navbarHoverBg"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                    <AnimatePresence>
                      {portfolioDropdownOpen && (
                        <motion.div
                          className="absolute left-1/2 -translate-x-1/2 mt-3 w-80 rounded-2xl overflow-hidden bg-white/95 backdrop-blur-xl border border-white shadow-[0_20px_50px_rgba(3,2,6,0.15)] p-4"
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="text-[10px] font-bold tracking-[0.15em] text-matte-gold uppercase mb-3 border-b border-matte-gold/10 pb-1.5 px-2">
                            Portfolio Collections
                          </div>
                          <div className="flex flex-col gap-1.5">
                            {link.submenu.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                className={`group/item flex flex-col px-3 py-2.5 rounded-lg transition-all duration-200 ${
                                  pathname === item.href ? "bg-matte-gold/10 shadow-sm" : "hover:bg-neutral-50"
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <span
                                    className={`text-xs font-semibold tracking-wide transition-colors ${pathname === item.href
                                      ? "text-matte-gold font-bold"
                                      : "text-primary-text/90 group-hover/item:text-matte-gold"
                                      }`}
                                  >
                                    {item.label}
                                  </span>
                                  {pathname === item.href ? (
                                    <Sparkles className="w-3.5 h-3.5 text-matte-gold animate-pulse" />
                                  ) : (
                                    <Sparkles className="w-3 h-3 text-matte-gold/0 group-hover/item:text-matte-gold/60 group-hover/item:translate-x-0.5 transition-all" />
                                  )}
                                </div>
                                {item.desc && (
                                  <span className="text-[10px] text-primary-text/50 group-hover/item:text-primary-text/60 mt-0.5 font-normal">
                                    {item.desc}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full font-sans text-[11px] font-bold uppercase tracking-wider transition-colors duration-300 ${isActive ? "text-matte-gold font-extrabold" : "text-primary-text/80 hover:text-primary-text"
                    }`}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isHovered && (
                    <motion.span
                      className="absolute inset-0 rounded-full bg-matte-gold/10 backdrop-blur-[2px] -z-0"
                      layoutId="navbarHoverBg"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {isActive && !isHovered && (
                    <motion.span
                      className="absolute bottom-1 left-4 right-4 h-[1.5px] bg-matte-gold/60 -z-0"
                      layoutId="navbarActiveUnderline"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Booking CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/booking"
              className="relative group overflow-hidden px-6 py-3 rounded-full bg-primary-text text-soft-white font-sans text-xs font-semibold uppercase tracking-wider shadow-[0_4px_15px_rgba(3,2,6,0.15)] hover:shadow-[0_4px_25px_rgba(199,168,107,0.3)] hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book Bridal Date
                <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/25 opacity-40 group-hover:animate-shine pointer-events-none" />
            </Link>
          </div>

          {/* Hamburger Menu Icon */}
          <button
            className="lg:hidden p-2 text-primary-text hover:text-matte-gold transition-colors focus:outline-none relative group z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation drawer"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end relative overflow-hidden">
              <span
                className={`h-[2px] bg-primary-text rounded-full transition-all duration-300 ${isOpen ? "w-6 rotate-45 translate-y-[9px]" : "w-6"
                  }`}
              />
              <span
                className={`h-[2px] bg-primary-text rounded-full transition-all duration-300 ${isOpen ? "w-0 opacity-0" : "w-4 group-hover:w-6"
                  }`}
              />
              <span
                className={`h-[2px] bg-primary-text rounded-full transition-all duration-300 ${isOpen ? "w-6 -rotate-45 -translate-y-[9px]" : "w-5 group-hover:w-6"
                  }`}
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-luxury-gradient/98 backdrop-blur-2xl flex flex-col pt-28 pb-8 px-6 lg:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Background floating circles for premium mobile visual depth */}
            <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-matte-gold/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-lavender-gray/20 blur-3xl pointer-events-none" />

            <div className="flex-1 flex flex-col justify-center gap-5 overflow-y-auto no-scrollbar relative z-10 py-6">
              {NAV_LINKS.map((link, idx) => {
                if (link.submenu) {
                  return (
                    <div key={link.label} className="space-y-2.5">
                      <p className="font-display text-xs font-bold tracking-[0.15em] text-matte-gold uppercase">
                        {link.label}
                      </p>
                      <div className="pl-4 flex flex-col gap-2.5 border-l border-matte-gold/25">
                        {link.submenu.map((item, sIdx) => (
                          <motion.div
                            key={item.label}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1 + (idx + sIdx) * 0.04 }}
                          >
                            <Link
                              href={item.href}
                              className={`block font-serif text-lg transition-colors ${pathname === item.href
                                ? "text-matte-gold font-bold"
                                : "text-primary-text/80 active:text-matte-gold"
                                }`}
                            >
                              <div className="flex flex-col">
                                <span className="flex items-center gap-1.5">
                                  {item.label}
                                  {pathname === item.href && <Sparkles className="w-3.5 h-3.5 text-matte-gold" />}
                                </span>
                                {item.desc && (
                                  <span className="text-[10px] text-primary-text/40 font-sans mt-0.5 font-normal">
                                    {item.desc}
                                  </span>
                                )}
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  );
                }

                const isActive = pathname === link.href;

                return (
                  <motion.div
                    key={link.label}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + idx * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      className={`block font-display text-2.5xl font-semibold tracking-wide hover:text-matte-gold transition-colors ${isActive ? "text-matte-gold font-extrabold" : "text-primary-text/90"
                        }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              className="mt-auto space-y-4 text-center border-t border-matte-gold/15 pt-6 relative z-10"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              <Link
                href="/booking"
                className="relative group overflow-hidden block w-full py-3.5 rounded-full bg-primary-text text-soft-white font-sans text-xs font-semibold uppercase tracking-wider shadow-lg transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Inquire & Book Bridal Date
                  <Send className="w-3.5 h-3.5" />
                </span>
                <div className="absolute inset-0 bg-gold-gradient" />
              </Link>
              <div className="flex flex-col gap-1 text-[11px] font-medium text-primary-text/50">
                <div className="flex justify-center items-center gap-1.5">
                  <span className="text-matte-gold">📍</span>
                  <span>Surat, Gujarat, India</span>
                  <span>•</span>
                  <span className="text-matte-gold">📞</span>
                  <span>+91 91573 42233</span>
                </div>
                <div className="text-[10px] text-matte-gold/70 mt-1 flex justify-center items-center gap-1 font-accent">
                  <Heart className="w-3.5 h-3.5 text-matte-gold animate-pulse fill-matte-gold" />
                  <span>Crafting stories in bridal stains</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
