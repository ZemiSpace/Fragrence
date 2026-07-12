"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Gift, Heart, Sparkles, Award, CheckCircle2 } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface HamperConcept {
  title: string;
  description: string;
  occasions: string[];
  features: string[];
}

const HAMPER_CONCEPTS: HamperConcept[] = [
  {
    title: "The Regal Celebration Trunk",
    description: "Presented in a hand-crafted faux-leather trunk with brass locks, featuring two full-size luxury perfumes, a pure attar vial, and dry floral decor.",
    occasions: ["Weddings", "Milestone Anniversaries", "Festive Hampers"],
    features: ["Double EDP Perfumes", "Premium Leather Trunk", "Custom Cardigraphy"]
  },
  {
    title: "The Velvet Signature Chest",
    description: "An elegant, velvet-lined gift drawer containing a designer perfume, a matching refreshing body mist, and a scented pocket spray.",
    occasions: ["Birthdays", "Festivals", "Special Occasions"],
    features: ["Designer EDP + Mist", "Plush Velvet Drawers", "Satin Ribbon Wrapping"]
  },
  {
    title: "The Corporate Gold Chest",
    description: "A minimal, professional matte charcoal box stamped with gold leaf, featuring a unisex fragrance set and a luxurious travel atomizer.",
    occasions: ["Corporate Events", "Client Appreciations", "Festivals"],
    features: ["Unisex Fragrance Set", "Matte Gold Foil Box", "Corporate Branding Space"]
  },
  {
    title: "The Bridal Silk Trunk",
    description: "An opulent silk-covered wooden chest featuring custom monogramming, holding a pair of bride-and-groom fragrances, a gilded hair mist, and a concentrated oil roll-on.",
    occasions: ["Weddings", "Bridal Showers", "Sangeet Ceremonies"],
    features: ["Bride & Groom Fragrances", "Pure Silk Chest Liner", "Gold Wax Sealed Message"]
  },
  {
    title: "The Oud Majesty Box",
    description: "A solid mahogany treasure box containing our signature Assam Oud wood oil, a crystal jar of raw agarwood incense chips, and a gold incense burner.",
    occasions: ["VIP Gifting", "Festivals", "Special Milestones"],
    features: ["Assam Oud Oil Concentrate", "Agarwood Incense Chips", "Mahogany Keepsake Box"]
  }
];

export default function GiftHampers() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [occasion, setOccasion] = useState("Birthday");
  const [budget, setBudget] = useState("Premium (₹5,000 - ₹10,000)");

  const handleCustomizeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setModalOpen(false);
      
      // Also scroll to contact to follow up or confirm
      const contactSection = document.querySelector("#contact");
      if (contactSection) {
        const offset = 80;
        const elementPosition = contactSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }, 2500);
  };

  return (
    <section id="hampers" className="py-24 bg-charcoal-950 relative border-t border-gold-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-gold-500 mb-3">
            Bespoke Gifting
          </h4>
          <p className="text-3xl md:text-5xl font-serif font-light tracking-wide text-gold-100 mb-6">
            Premium <span className="font-normal italic text-gold-400">Gift Hampers</span>
          </p>
          <div className="h-[1px] w-24 bg-gold-900/40 mx-auto mb-6" />
          <p className="text-base text-charcoal-300 leading-relaxed max-w-xl mx-auto font-light">
            Elevate the art of giving. Our customized perfume hampers blend the world&apos;s finest scents with royal packaging to create unforgettable sensory greetings.
          </p>
        </div>

        {/* Highlight Banner & Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Text and Features column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-serif text-gold-100 mb-6 tracking-wide">
              Hand-Curated Luxury for Every Occasion
            </h3>
            
            <p className="text-sm md:text-base text-charcoal-300 leading-relaxed font-light mb-8">
              At Fragrence, we understand that a gift is a reflection of your esteem. We offer custom curation where you select the fragrance profile, packaging chest, and custom calligraphy cards. Our design specialists pack each hamper in Surat with pristine precision.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="p-1 rounded-full bg-gold-950 text-gold-500 mr-3 mt-0.5">
                  <Award size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gold-200">Custom Fragrance Curation</h4>
                  <p className="text-xs text-charcoal-400 mt-0.5">Blend luxury scents, mists, and attars tailored to their taste.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-1 rounded-full bg-gold-950 text-gold-500 mr-3 mt-0.5">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gold-200">Primacy of Packaging</h4>
                  <p className="text-xs text-charcoal-400 mt-0.5">Velvet draw chests, luxury trunks, or golden metal filigree boxes.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-1 rounded-full bg-gold-950 text-gold-500 mr-3 mt-0.5">
                  <Heart size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gold-200">Personalized Detailing</h4>
                  <p className="text-xs text-charcoal-400 mt-0.5">Wax-sealed notes, calligraphy greetings, and matching dried floral stems.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-1 rounded-full bg-gold-950 text-gold-500 mr-3 mt-0.5">
                  <Gift size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gold-200">Occasion Ready</h4>
                  <p className="text-xs text-charcoal-400 mt-0.5">Tailored concepts for weddings, anniversaries, corporate, or festivals.</p>
                </div>
              </div>
            </div>

            {/* Customizer CTA Trigger Modal */}
            <div className="self-start">
              <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                <DialogTrigger asChild>
                  <button className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-400 text-charcoal-950 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(197,168,128,0.4)] cursor-pointer">
                    Customize Your Hamper
                    <Gift size={14} className="ml-2" />
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Bespoke Hamper Customizer</DialogTitle>
                    <DialogDescription>
                      Design a custom fragrance box. Choose your theme and budget, and our Surat design specialists will contact you to finalize the scents.
                    </DialogDescription>
                  </DialogHeader>

                  {!submitted ? (
                    <form onSubmit={handleCustomizeSubmit} className="space-y-4 mt-2">
                      <div className="flex flex-col space-y-1.5">
                        <label className="text-xs uppercase tracking-widest font-semibold text-gold-400">Select Gifting Occasion</label>
                        <select 
                          value={occasion} 
                          onChange={(e) => setOccasion(e.target.value)}
                          className="bg-charcoal-950 border border-gold-900/30 rounded-lg p-3 text-sm text-gold-200 focus:border-gold-500 outline-none"
                        >
                          <option>Wedding Gifting</option>
                          <option>Birthday Celebration</option>
                          <option>Corporate Gifting</option>
                          <option>Anniversary / Special Occasion</option>
                          <option>Festive Hampers (Diwali/Eid)</option>
                        </select>
                      </div>

                      <div className="flex flex-col space-y-1.5">
                        <label className="text-xs uppercase tracking-widest font-semibold text-gold-400">Approximate Budget Per Hamper</label>
                        <select 
                          value={budget} 
                          onChange={(e) => setBudget(e.target.value)}
                          className="bg-charcoal-950 border border-gold-900/30 rounded-lg p-3 text-sm text-gold-200 focus:border-gold-500 outline-none"
                        >
                          <option>Classic (₹3,000 - ₹5,000)</option>
                          <option>Premium (₹5,000 - ₹10,000)</option>
                          <option>Elite Signature (₹10,000 - ₹25,000+)</option>
                        </select>
                      </div>

                      <div className="flex flex-col space-y-1.5">
                        <label className="text-xs uppercase tracking-widest font-semibold text-gold-400">Custom Notes / Special Instructions</label>
                        <textarea 
                          placeholder="e.g. Include 1 woody perfume, 1 floral perfume, packed in a royal blue velvet box." 
                          rows={3}
                          className="bg-charcoal-950 border border-gold-900/30 rounded-lg p-3 text-sm text-gold-200 focus:border-gold-500 outline-none resize-none"
                          required
                        />
                      </div>

                      <button 
                        type="submit"
                        className="w-full bg-gold-500 hover:bg-gold-400 text-charcoal-950 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all mt-4 cursor-pointer"
                      >
                        Submit Gifting Request
                      </button>
                    </form>
                  ) : (
                    <div className="py-12 flex flex-col items-center justify-center text-center">
                      <div className="p-3.5 rounded-full bg-gold-950 text-gold-400 border border-gold-900/20 mb-4 animate-scale-up">
                        <CheckCircle2 size={36} className="text-[#25D366]" />
                      </div>
                      <h4 className="text-lg font-serif text-gold-100 font-semibold mb-2">Request Saved Successfully</h4>
                      <p className="text-sm text-charcoal-300 max-w-sm font-light">
                        We have recorded your {occasion} hamper request at the {budget} budget. Redirecting you to finish the form details...
                      </p>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Luxury Hamper Image with premium styling */}
          <div className="lg:col-span-5 relative w-full h-[320px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-gold-900/20 gold-border-glow">
            <Image
              src="/images/luxury_hamper.png"
              alt="Luxury Custom Perfume Gift Hamper styling concept"
              fill
              sizes="(max-w-768px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
            {/* Elegant Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent flex flex-col justify-end p-6">
              <h4 className="text-xs sm:text-sm font-bold tracking-[0.25em] text-gold-400 uppercase mb-1">Concept Styling</h4>
              <h4 className="text-xl font-serif text-gold-100 font-medium">Velvet Floral Anniversary Hamper</h4>
            </div>
          </div>
        </div>

        {/* Hamper Concepts Cards Grid (Now 5 items for visual length!) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {HAMPER_CONCEPTS.map((concept, index) => (
            <motion.div
              key={concept.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl glass-panel relative flex flex-col justify-between"
            >
              <div>
                <h4 className="text-lg font-serif text-gold-200 font-medium tracking-wide mb-3">
                  {concept.title}
                </h4>
                
                <p className="text-sm text-charcoal-300 font-light leading-relaxed mb-6">
                  {concept.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {concept.occasions.map((occ) => (
                    <span 
                      key={occ} 
                      className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-gold-950/30 text-gold-500 border border-gold-900/10"
                    >
                      {occ}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="space-y-2 border-t border-gold-900/10 pt-4 mt-auto">
                {concept.features.map((feat) => (
                  <li key={feat} className="text-xs text-charcoal-400 flex items-center">
                    <CheckCircle2 size={10} className="mr-2 text-gold-600 shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
