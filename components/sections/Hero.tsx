"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ShieldCheck, MapPin, Users, Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

// Vintage Botanical Rose Outline Doodle (Top-Left)
const RoseDoodle = () => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    className="w-48 h-48 sm:w-64 sm:h-64 text-gold-500/15 stroke-current stroke-[0.5] pointer-events-none select-none"
  >
    <path d="M20,100 C30,90 40,75 45,60 C48,50 42,40 40,30 C38,20 48,10 60,15 C70,18 75,28 72,38 C68,48 55,55 50,65 C45,75 52,85 60,90" />
    <path d="M45,60 C40,55 30,58 25,52 C20,46 22,35 32,38 C42,40 45,50 45,60 Z" />
    <path d="M48,50 C55,45 65,48 70,42 C75,36 73,25 63,28 C53,30 50,40 48,50 Z" />
    <path d="M60,15 C55,10 45,12 42,20 C40,28 50,30 60,15 Z" />
    <path d="M60,15 C65,10 75,12 78,20 C80,28 70,30 60,15 Z" />
    <path d="M30,85 C25,80 18,82 15,75 C12,68 20,62 25,70 C30,78 30,85 30,85 Z" />
    <path d="M38,72 C42,68 48,70 50,65 C52,60 45,55 40,62 C35,70 38,72 38,72 Z" />
  </svg>
);

// Vintage Lavender Outline Doodle (Top-Right)
const LavenderDoodle = () => (
  <svg
    viewBox="0 0 100 150"
    fill="none"
    className="w-40 h-60 sm:w-56 sm:h-80 text-gold-500/15 stroke-current stroke-[0.5] pointer-events-none select-none"
  >
    <path d="M50,140 Q45,80 50,20" />
    <path d="M47,120 C40,118 38,110 45,112 C48,113 49,118 47,120 Z" />
    <path d="M46,100 C38,98 36,90 43,92 C47,93 48,98 46,100 Z" />
    <path d="M45,80 C36,78 34,70 42,72 C45,73 47,78 45,80 Z" />
    <path d="M45,60 C36,58 34,50 42,52 C45,53 47,58 45,60 Z" />
    <path d="M46,40 C38,38 36,30 43,32 C47,33 48,38 46,40 Z" />
    <path d="M53,120 C60,118 62,110 55,112 C52,113 51,118 53,120 Z" />
    <path d="M54,100 C62,98 64,90 57,92 C53,93 52,98 54,100 Z" />
    <path d="M55,80 C64,78 66,70 58,72 C55,73 53,78 55,80 Z" />
    <path d="M55,60 C64,58 66,50 58,52 C55,53 53,58 55,60 Z" />
    <path d="M54,40 C62,38 64,30 57,32 C53,33 52,38 54,40 Z" />
    <path d="M50,20 C45,15 55,15 50,20 Z" />
  </svg>
);

// Jasmine Outline Doodle (Bottom-Left)
const JasmineDoodle = () => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    className="w-36 h-36 sm:w-48 sm:h-48 text-gold-500/10 stroke-current stroke-[0.5] pointer-events-none select-none"
  >
    <path d="M10,80 Q30,70 50,50 Q70,30 90,10" />
    <path d="M50,50 C40,40 30,45 35,35 C40,25 45,35 50,50 Z" fill="currentColor" className="fill-gold-500/[0.02]" />
    <path d="M50,50 C60,60 70,55 65,65 C60,75 55,65 50,50 Z" fill="currentColor" className="fill-gold-500/[0.02]" />
    <path d="M30,65 C20,60 15,68 22,72 C30,75 35,70 30,65 Z" />
    <path d="M70,35 C80,40 85,32 78,28 C70,25 65,30 70,35 Z" />
  </svg>
);

// Scent Wave Outline Doodle (Floating backdrop)
const ScentWaveDoodle = () => (
  <svg
    viewBox="0 0 400 100"
    fill="none"
    className="w-full max-w-4xl h-24 text-gold-500/10 stroke-current stroke-[0.5] pointer-events-none select-none opacity-30"
  >
    <path d="M10,50 Q100,20 200,50 T390,50" />
    <path d="M10,65 Q100,35 200,65 T390,65" strokeDasharray="3,3" />
  </svg>
);

// Vintage Celestial Astrolabe Pattern
const CelestialDoodle = () => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    className="w-96 h-96 text-gold-500/[0.03] stroke-current stroke-[0.5] pointer-events-none select-none"
  >
    <circle cx="100" cy="100" r="80" />
    <circle cx="100" cy="100" r="76" strokeDasharray="2,4" />
    <circle cx="100" cy="100" r="50" />
    <circle cx="100" cy="100" r="20" />
    <line x1="100" y1="10" x2="100" y2="190" />
    <line x1="10" y1="100" x2="190" y2="100" />
    <line x1="36.36" y1="36.36" x2="163.64" y2="163.64" />
    <line x1="36.36" y1="163.64" x2="163.64" y2="36.36" />
    <circle cx="100" cy="40" r="2.5" fill="currentColor" />
    <circle cx="100" cy="160" r="2.5" fill="currentColor" />
    <circle cx="40" cy="100" r="2.5" fill="currentColor" />
    <circle cx="160" cy="100" r="2.5" fill="currentColor" />
  </svg>
);

export default function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement | HTMLDivElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-36 pb-12 overflow-hidden bg-charcoal-950"
    >
      {/* Delicate Vintage Couture Label Header - Positioned relatively to avoid overlaps */}
      <div className="w-full relative z-20 flex justify-center items-center pointer-events-none select-none px-4 mb-6">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-wrap justify-center items-center gap-3 text-[9px] sm:text-xs font-semibold text-gold-500/40 uppercase tracking-[0.45em] text-center"
        >
          <span>• Haute Parfumerie Française •</span>
          <span className="hidden md:inline h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
          <span>Surat Collection Est. {siteConfig.established}</span>
        </motion.div>
      </div>

      {/* Floating Vintage Doodles (Gold Sketch Art) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top-Left Floating Rose Branch */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -15, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 1.5, delay: 0.2, y: { repeat: Infinity, duration: 8, ease: "easeInOut" }, rotate: { repeat: Infinity, duration: 12, ease: "easeInOut" } }}
          className="absolute top-24 left-[-4%] sm:left-[2%] lg:left-[5%] origin-top-left"
        >
          <RoseDoodle />
        </motion.div>

        {/* Top-Right Floating Lavender Stem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, 15, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 1.5, delay: 0.4, y: { repeat: Infinity, duration: 10, ease: "easeInOut" }, rotate: { repeat: Infinity, duration: 14, ease: "easeInOut" } }}
          className="absolute top-24 right-[-4%] sm:right-[2%] lg:right-[5%] origin-top-right"
        >
          <LavenderDoodle />
        </motion.div>

        {/* Bottom-Left Jasmine Branch */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.8, scale: 1, y: [0, 10, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 1.5, delay: 0.6, y: { repeat: Infinity, duration: 9, ease: "easeInOut" }, rotate: { repeat: Infinity, duration: 11, ease: "easeInOut" } }}
          className="absolute bottom-28 left-[2%] lg:left-[8%] origin-bottom-left"
        >
          <JasmineDoodle />
        </motion.div>

        {/* Scent Wave floating near the bottom */}
        <div className="absolute bottom-28 left-1/2 -translate-x-1/2 w-full flex justify-center">
          <ScentWaveDoodle />
        </div>

        {/* Celestial Pattern behind the bottle */}
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: 360 }}
          transition={{ duration: 2, delay: 0.6, rotate: { repeat: Infinity, duration: 120, ease: "linear" } }}
          className="absolute top-[20%] left-[25%] lg:left-[35%] -translate-x-1/2 opacity-60"
        >
          <CelestialDoodle />
        </motion.div>

        {/* Cinematic Backdrop Lighting Orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[800px] md:w-[1200px] h-[800px] md:h-[1200px] rounded-full bg-radial from-gold-600/15 via-gold-900/5 to-transparent blur-[120px] animate-pulse-glow" />
        <div className="absolute top-[30%] right-[-20%] w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] rounded-full bg-radial from-amber-500/10 via-gold-500/5 to-transparent blur-[100px]" />
        
        {/* Soft floating light particles */}
        <div className="absolute top-[40%] right-[30%] w-32 h-32 rounded-full bg-gold-400/20 blur-[40px] animate-[bounceSlow_4s_infinite_ease-in-out]" />
        <div className="absolute bottom-[20%] left-[20%] w-48 h-48 rounded-full bg-gold-300/15 blur-[50px] animate-[bounceSlow_6s_infinite_ease-in-out_1s]" />
      </div>

      {/* Main Content Boundless Container */}
      <div className="w-full max-w-[1500px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 flex-grow flex items-center my-auto">
        
        {/* Grid layout with vertical center alignment, standard grid span to prevent collision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          
          {/* Left Column: Typography & CTAs (Fitted perfectly to grid) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1 pt-4 lg:pt-0">
            
            {/* Elegant Contact Line */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="flex items-center space-x-3 text-xs sm:text-sm font-semibold text-gold-500 uppercase tracking-[0.25em] mb-6 mt-6 lg:mt-0"
            >
              <Phone size={14} className="text-gold-500 shrink-0" />
              <span>Boutique Orders:</span>
              <a
                href={`tel:${siteConfig.phoneFormatted}`}
                className="text-gold-300 hover:text-gold-400 underline decoration-gold-500/30 hover:decoration-gold-400 underline-offset-8 transition-colors font-bold"
              >
                {siteConfig.phone}
              </a>
            </motion.div>

            {/* Headline (Optimized sizing to prevent overlapping of the image column) */}
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-serif font-light text-gold-100 tracking-tight leading-[1.1] mb-8"
            >
              Masterpiece <br />
              <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-200 block mt-2">
                Fragrances
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl text-charcoal-200 font-light leading-relaxed tracking-wide max-w-2xl mb-12"
            >
              Surat&apos;s most prestigious destination for authentic luxury perfumes, raw attar concentrates, and bespoke olfactory legacies since {siteConfig.established}.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
            >
              <a
                href="#products"
                onClick={(e) => handleScrollTo(e, "#products")}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-charcoal-950 px-10 py-5 rounded-full text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_0_30px_rgba(197,168,128,0.3)] hover:shadow-[0_0_40px_rgba(197,168,128,0.5)] active:scale-[0.98] group cursor-pointer"
              >
                Explore Collection
                <ArrowRight size={18} className="ml-3 transition-transform group-hover:translate-x-2" />
              </a>
              
              <a
                href="#choice"
                onClick={(e) => handleScrollTo(e, "#choice")}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border-2 border-gold-500/50 text-gold-100 hover:bg-gold-500/10 hover:border-gold-400 px-10 py-5 rounded-full text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 active:scale-[0.98] cursor-pointer"
              >
                Find Your Scent
              </a>
            </motion.div>

          </div>

          {/* Right Column: Heroic Floating Bottle (Constrained inside lg:col-span-5 to prevent grid overlaps) */}
          <div className="lg:col-span-5 flex justify-center items-center relative h-[350px] sm:h-[450px] md:h-[500px] w-full order-1 lg:order-2 z-10 mt-6 lg:mt-0">
            
            {/* Background rotating gold orbital rings */}
            <div className="absolute w-[280px] sm:w-[360px] md:w-[440px] lg:w-[480px] h-[280px] sm:h-[360px] md:h-[440px] lg:h-[480px] border-[1px] border-dashed border-gold-500/25 rounded-full animate-[spin_60s_linear_infinite]" />
            <div className="absolute w-[220px] sm:w-[300px] md:w-[360px] lg:w-[400px] h-[220px] sm:h-[300px] md:h-[360px] lg:h-[400px] border-[1px] border-gold-500/15 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
            
            {/* Pure unconstrained image floating */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.4, type: "spring", stiffness: 50 }}
              className="relative w-full h-full max-w-[240px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[440px] z-20 flex items-center justify-center animate-[bounceSlow_5s_infinite_ease-in-out]"
            >
              <Image
                src="/images/luxury_perfume.png"
                alt="Fragnence Signature Perfume Decanter"
                fill
                sizes="(max-w-1024px) 80vw, 40vw"
                className="object-contain drop-shadow-[0_35px_45px_rgba(0,0,0,0.75)]"
                priority
              />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Floating Trust Pills at the bottom (replaces the boxy grid) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
        className="w-full relative z-20 pb-4 pt-8 flex flex-wrap justify-center gap-4 sm:gap-6 px-4"
      >
        <div className="flex items-center space-x-3 bg-charcoal-900/60 backdrop-blur-xl border border-gold-900/30 px-6 py-3 rounded-full shadow-2xl">
          <ShieldCheck size={18} className="text-gold-500" />
          <div className="flex flex-col">
            <span className="text-gold-100 font-serif font-medium leading-none mb-1 text-sm sm:text-base">Est. {siteConfig.established}</span>
            <span className="text-gold-500/70 text-[9px] uppercase tracking-widest leading-none">17+ Years Legacy</span>
          </div>
        </div>

        <div className="flex items-center space-x-3 bg-charcoal-900/60 backdrop-blur-xl border border-gold-900/30 px-6 py-3 rounded-full shadow-2xl">
          <Users size={18} className="text-gold-500" />
          <div className="flex flex-col">
            <span className="text-gold-100 font-serif font-medium leading-none mb-1 text-sm sm:text-base">{siteConfig.dailyCustomers}</span>
            <span className="text-gold-500/70 text-[9px] uppercase tracking-widest leading-none">Daily Regulars</span>
          </div>
        </div>

        <div className="flex items-center space-x-3 bg-charcoal-900/60 backdrop-blur-xl border border-gold-900/30 px-6 py-3 rounded-full shadow-2xl">
          <MapPin size={18} className="text-gold-500" />
          <div className="flex flex-col">
            <span className="text-gold-100 font-serif font-medium leading-none mb-1 text-sm sm:text-base">Surat</span>
            <span className="text-gold-500/70 text-[9px] uppercase tracking-widest leading-none">Gujarat, India</span>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
