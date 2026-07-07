"use client";

import { motion } from "framer-motion";
import { ShieldCheck, History, Award, HeartHandshake, Ribbon, Users } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

interface TrustFeature {
  title: string;
  stat: string;
  description: string;
  icon: React.ElementType;
}

const TRUST_FEATURES: TrustFeature[] = [
  {
    title: "Established Legacy",
    stat: "Since 2008",
    description: `Proudly serving perfume lovers in Surat, Gujarat for over 17 years. Our curation represents decades of olfactory expertise.`,
    icon: History
  },
  {
    title: "Daily Regular Customers",
    stat: "66+ Customers",
    description: `A loyal, recurring daily clientele built on deep trust, personalized customer care, and consistency in quality.`,
    icon: Users
  },
  {
    title: "Guaranteed Authenticity",
    stat: "100% Original",
    description: `We source directly from official distributors and authorized luxury houses. Absolute authenticity is our non-negotiable vow.`,
    icon: ShieldCheck
  },
  {
    title: "Signature Consulting",
    stat: "Personalized",
    description: `No blind buys. We evaluate your skin chemistry, scent family preferences, and lifestyle to find your true match.`,
    icon: Award
  },
  {
    title: "Artisanal Wrapping",
    stat: "Premium Finishes",
    description: `All fragrances are delivered in luxurious wax-sealed packaging with dried floral decorations. Giving becomes an art form.`,
    icon: Ribbon
  },
  {
    title: "Local Excellence",
    stat: "Surat, Gujarat",
    description: `Deeply rooted in Surat. We treat every client like family, building relationships that span across generations.`,
    icon: HeartHandshake
  }
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-charcoal-900 relative border-t border-gold-900/10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-radial from-gold-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-500 mb-3">
            Why Choose Us
          </h2>
          <p className="text-3xl md:text-5xl font-serif font-light tracking-wide text-gold-100 mb-6">
            Pillars of <span className="font-normal italic text-gold-400">Trust & Luxury</span>
          </p>
          <div className="h-[1px] w-24 bg-gold-900/40 mx-auto mb-6" />
          <p className="text-base text-charcoal-300 leading-relaxed max-w-xl mx-auto font-light">
            We don&apos;t just retail fragrances — we curate olfactory signatures, design customized memories, and guarantee absolute luxury.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRUST_FEATURES.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-8 rounded-2xl glass-panel relative overflow-hidden group hover:border-gold-500/40 transition-all duration-300"
              >
                {/* Accent line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-gold-600/0 via-gold-500/30 to-gold-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="p-3 w-fit rounded-xl bg-charcoal-950 border border-gold-900/25 text-gold-500 mb-6 group-hover:text-gold-100 group-hover:border-gold-500/30 transition-all duration-300">
                  <IconComponent size={24} className="stroke-[1.5]" />
                </div>

                <p className="text-2xl font-serif text-gold-400 font-medium mb-1 tracking-wide">
                  {feature.stat}
                </p>

                <h3 className="text-sm font-semibold tracking-wider text-gold-100 uppercase mb-3">
                  {feature.title}
                </h3>

                <p className="text-sm text-charcoal-300 font-light leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
