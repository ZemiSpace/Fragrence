"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { Landmark, Heart, History, Award, CheckCircle2 } from "lucide-react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "2008",
    title: "The Genesis of Fragrence",
    description: "Founder Magan Lal establishes the boutique in Surat, Gujarat. Eager to bring pure French absolute extractions and authentic oud oils to local fragrance connoisseurs."
  },
  {
    year: "2013",
    title: "Exclusive Niche Sourcing",
    description: "Fragrence expands its importing network, forming direct alliances with boutique, family-run fragrance distillers in Grasse, France and Florence, Italy."
  },
  {
    year: "2018",
    title: "Legacy Handover & Gifting Launch",
    description: "Ester Lee assumes ownership. Launching our signature custom-wrapping hampers service, blending modern luxury designs with legacy scent curation."
  },
  {
    year: "2024 - Present",
    title: "Surat's Niche Scent Authority",
    description: "Reaching a milestone of 66+ daily recurring customers, cementing our reputation as the region's trusted destination for authentic perfume mastery."
  }
];

export default function About() {
  return (
    <section className="py-24 bg-charcoal-950 relative overflow-hidden border-t border-gold-900/10">
      {/* Decorative Glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-radial from-gold-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Crystal Bottle Image Side */}
          <div className="lg:col-span-5 relative w-full h-[320px] md:h-[550px] rounded-2xl overflow-hidden shadow-2xl border border-gold-900/20 gold-border-glow order-2 lg:order-1">
            <Image
              src="/images/luxury_perfume.png"
              alt="Luxury designer crystal perfume bottle displaying gold fragrance oil inside"
              fill
              sizes="(max-w-768px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Soft decorative shadow/border glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/40 to-transparent" />
          </div>

          {/* Text Story Side */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-gold-500">
              Our Legacy
            </h4>
            
            <p className="text-3xl md:text-5xl font-serif font-light tracking-wide text-gold-100 leading-tight">
              A Family Legacy in <br />
              <span className="font-normal italic text-gold-400">Sensory Artistry</span>
            </p>
            
            <div className="h-[1px] w-24 bg-gold-900/40 my-6" />

            <div className="space-y-4 text-sm md:text-base text-charcoal-300 font-light leading-relaxed">
              <p>
                Established in <span className="text-gold-400 font-semibold">{siteConfig.established}</span> by visionary founder <span className="text-gold-400 font-semibold">{siteConfig.founder}</span>, Fragrence began as a humble perfume house in Surat, Gujarat. Driven by a deep passion for natural raw oils and niche European brands, Magan Lal dedicated himself to introducing the world&apos;s finest olfactory traditions to local perfume lovers.
              </p>
              
              <p>
                Today, the legacy continues under the ownership of <span className="text-gold-400 font-semibold">{siteConfig.owner}</span>. Keeping the core principles of trust, warmth, and individualized consultations intact, Ester Lee has expanded Fragrence into a premier boutique destination for rare oud blends, couture designer brands, and customized gifting.
              </p>

              <p>
                For over 17 years, we have built relationships that go far beyond a transaction. We believe a perfume is not merely a cosmetic accessory; it is an invisible signature, a container of memories, and a reflection of your spirit.
              </p>
            </div>

            {/* Quick credentials icons */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gold-900/10">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-lg bg-charcoal-900 border border-gold-900/20 text-gold-500">
                  <Landmark size={20} />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm uppercase tracking-wider font-bold text-gold-200">Surat Born</h4>
                  <p className="text-xs text-charcoal-400 font-light">Serving Gujarat since 2008</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-lg bg-charcoal-900 border border-gold-900/20 text-gold-500">
                  <Heart size={20} />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm uppercase tracking-wider font-bold text-gold-200">66+ Daily Regulars</h4>
                  <p className="text-xs text-charcoal-400 font-light">Clientele built on trust</p>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>

        {/* Timeline Section (Adds Length & Quality) */}
        <div className="border-t border-gold-900/10 pt-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-500 mb-2">Our Milestones</h3>
            <p className="text-2xl md:text-4xl font-serif text-gold-100 font-light tracking-wide">
              Timeline of <span className="font-normal italic text-gold-400">Olfactory Curation</span>
            </p>
            <div className="h-[1px] w-20 bg-gold-900/40 mx-auto mt-4" />
          </div>

          <div className="relative border-l border-gold-900/25 max-w-4xl mx-auto pl-6 md:pl-10 space-y-12">
            {TIMELINE_EVENTS.map((event, idx) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Bullet dot */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-gold-500 border-4 border-charcoal-950 shadow-md" />

                <div className="glass-panel p-6 rounded-2xl">
                  <span className="text-lg font-serif font-bold text-gold-400 tracking-wide block mb-1">
                    {event.year}
                  </span>
                  <h4 className="text-base font-semibold text-gold-100 uppercase tracking-wider mb-2">
                    {event.title}
                  </h4>
                  <p className="text-sm text-charcoal-300 leading-relaxed font-light">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
