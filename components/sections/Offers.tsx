"use client";

import { motion } from "framer-motion";
import { Sparkles, Calendar, Tag, ArrowRight, Gift, Percent, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

interface OfferTier {
  title: string;
  requirement: string;
  discount: string;
  gift: string;
  perks: string[];
}

const OFFER_TIERS: OfferTier[] = [
  {
    title: "Signature Tier",
    requirement: "Orders above ₹5,000",
    discount: "10% OFF Selection",
    gift: "Complimentary Calligraphy card",
    perks: ["Premium Wax-Sealed Wrap", "Complimentary custom calligraphy card", "1 Perfume scent tester vial"]
  },
  {
    title: "Elite Gold Tier",
    requirement: "Orders above ₹10,000",
    discount: "15% OFF Selection",
    gift: "Complimentary Travel Atomizer",
    perks: ["Complimentary travel atomizer spray", "Premium velvet-lined luxury chest", "2 Niche sample tester vials"]
  },
  {
    title: "Royal Sovereign Tier",
    requirement: "Orders above ₹25,000",
    discount: "Custom Bulk Margin",
    gift: "Personalized Wood-Burned Trunk",
    perks: ["Custom monogrammed wood-burned gift trunk", "Free doorstep courier delivery inside Gujarat", "Private consultation with Ester Lee"]
  }
];

export default function Offers() {
  const handleOffersScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Dispatch event to prefill contact form
      const event = new CustomEvent("select-enquiry-type", {
        detail: {
          type: "general",
          message: "Hi Fragrence! I'm interested in knowing more about your current active offers or seasonal discounts on luxury perfumes and custom hampers."
        }
      });
      window.dispatchEvent(event);
    }
  };

  return (
    <section id="offers" className="py-24 bg-charcoal-950 relative overflow-hidden border-t border-gold-900/10">
      {/* Background Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-radial from-gold-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-gold-500 mb-3">
            Exclusive Benefits
          </h4>
          <p className="text-3xl md:text-5xl font-serif font-light tracking-wide text-gold-100 mb-6">
            Seasonal <span className="font-normal italic text-gold-400">Privileges & Offers</span>
          </p>
          <div className="h-[1px] w-24 bg-gold-900/40 mx-auto mb-6" />
        </div>

        {/* Golden Banner */}
        <div className="glass-panel rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden gold-border-glow bg-gradient-to-r from-charcoal-900 via-gold-950/20 to-charcoal-900 mb-16">
          {/* Decorative Corner Golden Ribbon effect */}
          <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden pointer-events-none hidden sm:block">
            <div className="absolute top-6 -right-10 w-44 bg-gradient-to-r from-gold-600 to-gold-400 text-charcoal-950 text-xs font-bold uppercase tracking-widest text-center py-1.5 rotate-45 shadow-md">
              Special Privilege
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Promotion Details */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-gold-950/60 border border-gold-900/30 text-gold-400 text-xs font-bold uppercase tracking-widest">
                <Tag size={14} className="text-gold-500" />
                <span>Evergreen Store Privilege</span>
              </div>

              <h3 className="text-2xl md:text-4xl font-serif text-gold-100 font-light leading-tight tracking-wide">
                Festive Collection & <span className="font-normal italic text-gold-400">Hamper Privileges</span>
              </h3>

              <p className="text-sm md:text-base text-charcoal-300 font-light leading-relaxed max-w-2xl">
                Celebrate key moments in luxury style. Enjoy tailored pricing on custom wedding packages, bulk corporate gifts, and festive hampers. We proudly offer premium wax-sealed gift wrapping on all designer fragrance selections at no extra charge.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center text-xs text-charcoal-300">
                  <div className="h-2 w-2 rounded-full bg-gold-500 mr-2.5" />
                  Complementary Calligraphy Greeting Card
                </div>
                <div className="flex items-center text-xs text-charcoal-300">
                  <div className="h-2 w-2 rounded-full bg-gold-500 mr-2.5" />
                  Premium Wax-Sealed Wrap & Dry Flowers
                </div>
                <div className="flex items-center text-xs text-charcoal-300">
                  <div className="h-2 w-2 rounded-full bg-gold-500 mr-2.5" />
                  Bulk Gifting Privileges (Corporate & Weddings)
                </div>
                <div className="flex items-center text-xs text-charcoal-300">
                  <div className="h-2 w-2 rounded-full bg-gold-500 mr-2.5" />
                  Personalized Fragrance Matching Assistance
                </div>
              </div>
            </div>

            {/* CTA Column */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-gold-900/10 lg:pl-8">
              <div className="text-center lg:text-right mb-6">
                <p className="text-xs uppercase tracking-widest text-gold-600 font-semibold mb-1">Inquire Today For</p>
                <p className="text-xl font-serif text-gold-300 font-medium">Active Festive Benefits</p>
              </div>

              <a
                href="#contact"
                onClick={handleOffersScroll}
                className="w-full inline-flex items-center justify-center bg-gold-500 hover:bg-gold-400 text-charcoal-950 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(197,168,128,0.4)] active:scale-[0.98] cursor-pointer"
              >
                Inquire For Offers
                <ArrowRight size={14} className="ml-2" />
              </a>
            </div>
            
          </div>
        </div>

        {/* Dynamic Discount Offer Tiers (NEW Lengthy Content!) */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold-500 mb-2">Privilege Gifting</h4>
            <p className="text-xl md:text-2xl font-serif text-gold-100 font-light">Purchase Tiers & Complimentary Gifts</p>
            <div className="h-[1.5px] w-12 bg-gold-900/40 mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {OFFER_TIERS.map((tier, idx) => (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-8 rounded-2xl relative flex flex-col justify-between border-t-4 border-t-gold-500"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gold-500 block mb-1">
                    {tier.requirement}
                  </span>
                  <h4 className="text-lg font-serif text-gold-100 font-semibold tracking-wide mb-4">
                    {tier.title}
                  </h4>

                  <div className="p-4 rounded-xl bg-charcoal-950/60 border border-gold-900/10 mb-6">
                    <p className="text-sm font-bold text-gold-400 flex items-center mb-1">
                      <Percent size={14} className="mr-1.5" />
                      {tier.discount}
                    </p>
                    <p className="text-xs sm:text-sm text-charcoal-300 leading-relaxed font-light">
                      <strong className="text-gold-200">Gifting perk:</strong> {tier.gift}
                    </p>
                  </div>

                  <ul className="space-y-2.5">
                    {tier.perks.map((perk, i) => (
                      <li key={i} className="text-xs sm:text-sm text-charcoal-400 flex items-start leading-relaxed">
                        <ShieldCheck size={12} className="mr-2 text-gold-600 shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Seasonal Styling Calendar Outline */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <p className="text-sm uppercase tracking-widest font-semibold text-gold-600">Surat Festive Calendar</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Wedding Season", period: "Nov – Mar", detail: "Royal Hampers" },
              { title: "Diwali Special", period: "Oct – Nov", detail: "Gold Leaf Packaging" },
              { title: "Eid Celebration", period: "Apr – May", detail: "Traditional Attar Sets" },
              { title: "Corporate Occasions", period: "Year-Round", detail: "Bespoke Bulk Deals" },
            ].map((item) => (
              <div 
                key={item.title}
                className="p-5 rounded-xl bg-charcoal-900/60 border border-gold-900/5 text-center flex flex-col justify-center items-center"
              >
                <Calendar size={18} className="text-gold-700 mb-2.5" />
                <h4 className="text-xs uppercase tracking-wider font-bold text-gold-200 mb-0.5">{item.title}</h4>
                <p className="text-xs sm:text-sm text-gold-500 tracking-widest uppercase mb-1">{item.period}</p>
                <p className="text-xs text-charcoal-400 font-light">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
