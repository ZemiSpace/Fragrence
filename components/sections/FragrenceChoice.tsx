"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, MessageCircle, RefreshCw, ChevronRight, HelpCircle, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

interface Question {
  id: number;
  text: string;
  options: {
    label: string;
    description: string;
    value: string;
  }[];
}

const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Which environment matches your primary vibe?",
    options: [
      { label: "Morning Freshness", description: "Zesty breezes, sunlit gardens, active outdoors", value: "fresh" },
      { label: "Elegant Ballroom", description: "Sophisticated soirées, corporate dinners, classics", value: "classic" },
      { label: "Mysterious Evening", description: "Smoky lounges, intimate dates, exotic spice paths", value: "mystical" },
      { label: "Festive Joy", description: "Traditional celebrations, warm hugs, rich sweet treats", value: "sweet" },
    ],
  },
  {
    id: 2,
    text: "Which scent character are you naturally drawn to?",
    options: [
      { label: "Floral & Blooms", description: "Jasmine, rose, peony, fresh cut petals", value: "floral" },
      { label: "Woody & Earthy", description: "Sandalwood, cedar, vetiver, forest moss", value: "woody" },
      { label: "Spicy & Oriental", description: "Amber, saffron, leather, warm resins", value: "oriental" },
      { label: "Oud & Luxury", description: "Deep agarwood, smoky elements, supreme agarwood oil", value: "oud" },
    ],
  },
  {
    id: 3,
    text: "What level of perfume longevity and projection do you prefer?",
    options: [
      { label: "Subtle & Intimate", description: "A close-to-skin scent, noticed only by those nearby", value: "subtle" },
      { label: "Radiant & Elegant", description: "Leaves a pleasant, professional trail in the room", value: "moderate" },
      { label: "Bold & Eternal", description: "A powerful signature that commands attention and lasts all day", value: "intense" },
    ],
  },
];

interface QuizResult {
  title: string;
  family: string;
  description: string;
  notes: string[];
  recommendation: string;
}

const RESULTS_MAP: Record<string, QuizResult> = {
  "fresh-floral": {
    title: "The Velvet Bloom",
    family: "Fresh Floral",
    description: "An airy, romantic composition reminiscent of a dew-kissed botanical sanctuary. It exudes crisp optimism and modern femininity.",
    notes: ["Bulgarian Rose", "Grasse Jasmine", "White Musk", "Calabrian Bergamot"],
    recommendation: "Eau de Parfum (EDP) for a radiant opening with solid longevity.",
  },
  "fresh-woody": {
    title: "The Coastal Vetiver",
    family: "Fresh Woody",
    description: "A clean, zesty opening that settles into dry cedarwood and earthy vetiver. Grounded yet fresh, it’s perfect for Surat's active daytime wear.",
    notes: ["Haitian Vetiver", "Virginia Cedar", "Sea Salt", "Grapefruit zest"],
    recommendation: "Eau de Toilette (EDT) or fresh EDP for an energetic, professional aura.",
  },
  "classic-floral": {
    title: "The Sovereign Rose",
    family: "Elegant Floral-Classic",
    description: "A majestic floral standard highlighting rich Taif rose and sweet iris. Sophisticated, timeless, and deeply elegant for formal occasions.",
    notes: ["Taif Rose", "Orris Root", "Damask Rose", "French Vanilla"],
    recommendation: "Pure Extrait de Parfum for standard-setting projection and luxury texture.",
  },
  "classic-woody": {
    title: "The Sandalwood Sovereign",
    family: "Warm Woody",
    description: "A creamy, smooth, and calming sandalwood base layered with light dry spices. A sophisticated signature that feels like a quiet library of leather-bound books.",
    notes: ["Mysore Sandalwood", "Cardamom", "Cashmeran", "Bergamot"],
    recommendation: "Eau de Parfum (EDP) or Pure Attar for smooth, long-lasting projection.",
  },
  "mystical-oriental": {
    title: "The Royal Saffron",
    family: "Spicy Oriental",
    description: "A warm, rich, and mysterious scent highlighting golden saffron, soft leather, and amber. Dark, sensual, and perfect for sunset encounters.",
    notes: ["Golden Saffron", "Rich Amber", "Italian Leather", "Patchouli"],
    recommendation: "Eau de Parfum (EDP) or Extrait de Parfum for unmatched evening depth.",
  },
  "mystical-oud": {
    title: "The Celestial Oud",
    family: "Regal Oud",
    description: "A powerful agarwood masterpiece blended with smoky tobacco notes and warm vanilla. Mysterious, authoritative, and deeply alluring.",
    notes: ["Assam Oud", "Smoky Tobacco", "Madagascar Vanilla", "Incense"],
    recommendation: "Pure Oud Attar or Extrait de Parfum for legendary longevity and scent-trail.",
  },
  "sweet-floral": {
    title: "The Nectar Dream",
    family: "Gourmand Floral",
    description: "A sweet, playful bouquet of cherry blossoms and creamy vanilla, accented with soft white musk. Joyful, festive, and deliciously attractive.",
    notes: ["Cherry Blossom", "Vanilla Pod", "Praline", "White Amber"],
    recommendation: "Eau de Parfum (EDP) for a delicious, sweet sillage.",
  },
  "sweet-oriental": {
    title: "The Amber Elixir",
    family: "Warm Gourmand",
    description: "A rich, honeyed amber fragrance with cinnamon spices and toasted tonka bean. Cozy, warm, and highly expressive.",
    notes: ["Warm Amber", "Cinnamon Bark", "Tonka Bean", "Benzoin Resin"],
    recommendation: "Extrait de Parfum or concentrated Attar for festive celebrations.",
  },
};

// Fallback result for unmatched combinations
const DEFAULT_RESULT: QuizResult = {
  title: "The Signature Synthesis",
  family: "Balanced Unisex Blend",
  description: "An elegant combination of zesty citrus, soft florals, and smooth woods designed to adapt uniquely to your skin chemistry.",
  notes: ["Pink Pepper", "Bergamot", "Sandalwood", "Ambergris"],
  recommendation: "Eau de Parfum (EDP) for versatile, everyday luxury.",
};

export default function FragrenceChoice() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [result, setResult] = useState<QuizResult | null>(null);

  const handleOptionSelect = (value: string) => {
    const newAnswers = { ...answers, [currentStep]: value };
    setAnswers(newAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: Record<number, string>) => {
    const env = finalAnswers[0];   // fresh, classic, mystical, sweet
    const note = finalAnswers[1];  // floral, woody, oriental, oud
    
    // Formulate a lookup key based on (vibe + note direction)
    // E.g. fresh-floral, classic-woody
    let lookupKey = `${env}-${note}`;
    
    // Resolve minor mappings
    if (note === "oud") {
      lookupKey = `mystical-oud`;
    } else if (env === "mystical" && note === "floral") {
      lookupKey = `classic-floral`;
    } else if (env === "sweet" && note === "woody") {
      lookupKey = `classic-woody`;
    }

    const calculatedResult = RESULTS_MAP[lookupKey] || DEFAULT_RESULT;
    setResult(calculatedResult);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setResult(null);
  };

  const handleEnquireScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
          type: "recommendation",
          message: `Hi Fragrence! I took the Scent Quiz and matched with ${result?.title} (${result?.family}). I would love to try this fragrance!`
        }
      });
      window.dispatchEvent(event);
    }
  };

  const whatsappMessage = result
    ? `Hi Fragrence! I completed your Scent Quiz and got matched with "${result.title}" (${result.family}). I would love to know if you have this in stock or could recommend a perfume in this family! Thank you.`
    : "Hi Fragrence! I would like to get a personalized fragrance consultation.";

  const whatsappLink = `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="choice" className="py-24 bg-charcoal-900 relative overflow-hidden border-t border-gold-900/10">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-radial from-gold-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-gold-500 mb-3">
            Signature Service
          </h4>
          <p className="text-3xl md:text-5xl font-serif font-light tracking-wide text-gold-100 mb-6">
            Fragrence <span className="font-normal italic text-gold-400">Choice</span>
          </p>
          <div className="h-[1px] w-24 bg-gold-900/40 mx-auto mb-6" />
          <p className="text-base text-charcoal-300 max-w-xl mx-auto font-light leading-relaxed">
            Find your custom olfactory profile. Answer 3 quick lifestyle questions to identify the fragrance families that match your skin chemistry and spirit.
          </p>
        </div>

        {/* Main Quiz Card */}
        <div className="glass-panel rounded-3xl p-6 md:p-12 shadow-2xl relative overflow-hidden gold-border-glow">
          <AnimatePresence mode="wait">
            {!result ? (
              // Quiz Active Steps
              <motion.div
                key={`step-${currentStep}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full"
              >
                {/* Progress bar */}
                <div className="flex items-center justify-between mb-8 text-xs font-semibold uppercase tracking-widest text-gold-600">
                  <span className="flex items-center">
                    <HelpCircle size={14} className="mr-1.5 text-gold-500" />
                    Question {currentStep + 1} of {QUIZ_QUESTIONS.length}
                  </span>
                  <span>{Math.round(((currentStep) / QUIZ_QUESTIONS.length) * 100)}% Complete</span>
                </div>

                <div className="w-full bg-charcoal-950 h-1.5 rounded-full overflow-hidden mb-8 border border-gold-900/5">
                  <div
                    className="bg-gold-500 h-full transition-all duration-500"
                    style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                  />
                </div>

                {/* Question Text */}
                <h3 className="text-xl md:text-2xl font-serif text-gold-100 tracking-wide mb-8">
                  {QUIZ_QUESTIONS[currentStep].text}
                </h3>

                {/* Options List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
                    <button
                      key={option.value}
                      onClick={() => handleOptionSelect(option.value)}
                      className="group flex flex-col items-start p-5 rounded-xl bg-charcoal-950/60 border border-gold-900/10 hover:border-gold-500/40 text-left transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-1 focus:ring-gold-500 cursor-pointer"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleOptionSelect(option.value);
                        }
                      }}
                    >
                      <div className="flex items-center justify-between w-full mb-1">
                        <span className="font-medium text-gold-200 group-hover:text-gold-100 text-base">
                          {option.label}
                        </span>
                        <ChevronRight
                          size={14}
                          className="text-gold-900/40 group-hover:text-gold-500 group-hover:translate-x-1 transition-all"
                        />
                      </div>
                      <span className="text-xs text-charcoal-400 font-light leading-relaxed group-hover:text-charcoal-300">
                        {option.description}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              // Quiz Results View
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col text-center"
              >
                {/* Result Crown Icon */}
                <div className="mx-auto p-4 rounded-full bg-gold-950/60 border border-gold-900/20 text-gold-400 mb-6 flex items-center justify-center animate-bounce-slow">
                  <Sparkles size={32} />
                </div>

                <h4 className="text-xs sm:text-sm font-bold tracking-[0.25em] text-gold-500 uppercase mb-2">
                  Your Olfactory Profile
                </h4>

                {/* Scent Title */}
                <h3 className="text-3xl md:text-5xl font-serif text-gold-100 tracking-wide mb-1 italic font-light">
                  {result.title}
                </h3>
                
                <p className="text-sm font-semibold tracking-widest text-gold-600 uppercase mb-6">
                  Fragrance Family: {result.family}
                </p>

                <p className="text-base text-charcoal-200 font-light max-w-xl mx-auto leading-relaxed mb-8">
                  {result.description}
                </p>

                {/* Suggested Ingredients */}
                <div className="mb-8">
                  <h4 className="text-xs sm:text-sm font-semibold text-charcoal-400 tracking-widest uppercase mb-4">
                    Key Matching Notes
                  </h4>
                  <div className="flex flex-wrap items-center justify-center gap-2 max-w-lg mx-auto">
                    {result.notes.map((note) => (
                      <span
                        key={note}
                        className="text-xs font-medium px-4 py-2 rounded-full bg-charcoal-950 border border-gold-900/20 text-gold-300 tracking-wider"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Strength recommendation note */}
                <div className="p-4 rounded-xl bg-charcoal-950/40 border border-gold-900/5 max-w-lg mx-auto mb-10 text-xs md:text-sm text-charcoal-300 leading-relaxed font-light">
                  <span className="font-semibold text-gold-400">Expert Suggestion:</span> {result.recommendation}
                </div>

                {/* Action CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20ba56] text-white px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all hover:shadow-[0_0_15px_rgba(37,211,102,0.3)] active:scale-[0.98] cursor-pointer"
                  >
                    <MessageCircle size={16} className="mr-2 fill-current" />
                    Consult on WhatsApp
                  </a>

                  <a
                    href="#contact"
                    onClick={handleEnquireScroll}
                    className="w-full inline-flex items-center justify-center bg-transparent border border-gold-500 text-gold-100 hover:bg-gold-500 hover:text-charcoal-950 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 active:scale-[0.98] cursor-pointer"
                  >
                    Send Store Enquiry
                    <ArrowRight size={14} className="ml-2" />
                  </a>
                </div>

                {/* Restart Button */}
                <button
                  onClick={handleReset}
                  className="mt-8 text-xs font-semibold text-charcoal-400 hover:text-gold-400 transition-colors uppercase tracking-widest inline-flex items-center justify-center mx-auto cursor-pointer p-2 rounded focus:outline-none"
                >
                  <RefreshCw size={12} className="mr-1.5" />
                  Retake Scent Quiz
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
