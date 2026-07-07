"use client";

import { motion } from "framer-motion";
import { BookOpen, Sparkles, GraduationCap, FlameKindling, Info } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { perfumeNotesData, fragranceFamiliesData, concentrationsData } from "@/data/encyclopedia";

export default function Encyclopedia() {
  return (
    <section id="encyclopedia" className="py-24 bg-charcoal-900 relative border-t border-gold-900/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-500 mb-3">
            Scent Education
          </h2>
          <p className="text-3xl md:text-5xl font-serif font-light tracking-wide text-gold-100 mb-6">
            Fragrance <span className="font-normal italic text-gold-400">Encyclopedia</span>
          </p>
          <div className="h-[1px] w-24 bg-gold-900/40 mx-auto mb-6" />
          <p className="text-base text-charcoal-300 leading-relaxed max-w-xl mx-auto font-light">
            Scent is a language. Demystify the notes, learn the families, and discover the exact concentrations that match your lifestyle.
          </p>
        </div>

        {/* Desktop & Mobile Combined Tabs Container */}
        <Tabs defaultValue="notes" className="w-full flex flex-col items-center">
          {/* Centered Tabs Triggers */}
          <div className="w-full overflow-x-auto pb-4 flex justify-start md:justify-center scrollbar-none px-4">
            <TabsList className="flex-nowrap shrink-0">
              <TabsTrigger value="notes" className="flex items-center">
                <Sparkles size={14} className="mr-1.5" />
                Scent Notes
              </TabsTrigger>
              <TabsTrigger value="families" className="flex items-center">
                <BookOpen size={14} className="mr-1.5" />
                Fragrance Families
              </TabsTrigger>
              <TabsTrigger value="strengths" className="flex items-center">
                <GraduationCap size={14} className="mr-1.5" />
                Concentrations
              </TabsTrigger>
              <TabsTrigger value="care" className="flex items-center">
                <FlameKindling size={14} className="mr-1.5" />
                Scent Care & Guide
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Scent Notes Tab Content */}
          <TabsContent value="notes" className="w-full mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 p-8 rounded-2xl bg-charcoal-950 border border-gold-900/10 gold-border-glow">
                <h4 className="text-2xl font-serif text-gold-100 mb-3">{perfumeNotesData.title}</h4>
                <p className="text-xs font-semibold text-gold-500 tracking-wider uppercase mb-4">{perfumeNotesData.subtitle}</p>
                <p className="text-sm text-charcoal-300 leading-relaxed font-light">
                  {perfumeNotesData.description} Expanding the notes below allows you to see how your fragrance changes over the hours.
                </p>
              </div>
              <div className="lg:col-span-8 p-6 md:p-8 rounded-2xl glass-panel">
                <Accordion type="single" collapsible defaultValue="item-0">
                  {perfumeNotesData.details.map((note, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>{note.label}</AccordionTrigger>
                      <AccordionContent>{note.text}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </TabsContent>

          {/* Fragrance Families Tab Content */}
          <TabsContent value="families" className="w-full mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 p-8 rounded-2xl bg-charcoal-950 border border-gold-900/10 gold-border-glow">
                <h4 className="text-2xl font-serif text-gold-100 mb-3">{fragranceFamiliesData.title}</h4>
                <p className="text-xs font-semibold text-gold-500 tracking-wider uppercase mb-4">{fragranceFamiliesData.subtitle}</p>
                <p className="text-sm text-charcoal-300 leading-relaxed font-light">
                  {fragranceFamiliesData.description} Find which personality resonates with you most to narrow down your preferences.
                </p>
              </div>
              <div className="lg:col-span-8 p-6 md:p-8 rounded-2xl glass-panel">
                <Accordion type="single" collapsible defaultValue="item-0">
                  {fragranceFamiliesData.details.map((fam, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>{fam.label}</AccordionTrigger>
                      <AccordionContent>{fam.text}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </TabsContent>

          {/* concentrations Tab Content */}
          <TabsContent value="strengths" className="w-full mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 p-8 rounded-2xl bg-charcoal-950 border border-gold-900/10 gold-border-glow">
                <h4 className="text-2xl font-serif text-gold-100 mb-3">{concentrationsData.title}</h4>
                <p className="text-xs font-semibold text-gold-500 tracking-wider uppercase mb-4">{concentrationsData.subtitle}</p>
                <p className="text-sm text-charcoal-300 leading-relaxed font-light">
                  {concentrationsData.description} Knowing concentration levels allows you to purchase with clarity on how far the scent projects.
                </p>
              </div>
              <div className="lg:col-span-8 p-6 md:p-8 rounded-2xl glass-panel">
                <Accordion type="single" collapsible defaultValue="item-0">
                  {concentrationsData.details.map((strength, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>{strength.label}</AccordionTrigger>
                      <AccordionContent>{strength.text}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </TabsContent>

          {/* Care & Application Tab Content (NEW Lengthy Content!) */}
          <TabsContent value="care" className="w-full mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 p-8 rounded-2xl bg-charcoal-950 border border-gold-900/10 gold-border-glow">
                <h4 className="text-2xl font-serif text-gold-100 mb-3">Scent Care & Guide</h4>
                <p className="text-xs font-semibold text-gold-500 tracking-wider uppercase mb-4">Application & Preservation</p>
                <p className="text-sm text-charcoal-300 leading-relaxed font-light">
                  Perfume is a delicate chemical composition. Heat, sunlight, and friction can break down olfactory molecules, causing valuable extracts to spoil.
                </p>
              </div>
              <div className="lg:col-span-8 p-6 md:p-8 rounded-2xl glass-panel">
                <Accordion type="single" collapsible defaultValue="item-0">
                  <AccordionItem value="item-0">
                    <AccordionTrigger>Where to Apply: The Pulse Points</AccordionTrigger>
                    <AccordionContent>
                      Spray perfume directly on warm areas of the skin where blood vessels run closest to the surface. These include the wrists, base of the neck, behind the ears, and inside the elbows. The warmth radiates the scent outward throughout the day.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-1">
                    <AccordionTrigger>The Wrist Mistake: Do Not Rub</AccordionTrigger>
                    <AccordionContent>
                      Never rub your wrists together after spraying perfume. Rubbing creates heat and friction, which breaks down the top notes and alters the intended evolution of the scent pyramid. Instead, let the spray dry naturally on your skin.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>How to Store: Keep in Dark & Cool Places</AccordionTrigger>
                    <AccordionContent>
                      Avoid storing your luxury crystal bottles on bathroom shelves or windowsills. Humidity and sunlight oxidize active fragrance molecules, altering the color and fragrance note accuracy. Store bottles inside their boxes or in cool, dark drawers.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Layering for Extreme Longevity</AccordionTrigger>
                    <AccordionContent>
                      To double your perfume&apos;s lifespan, apply an unscented moisturizer or body oil to your skin before spraying. Dry skin absorbs the perfume oils, making the scent vanish faster. Hydrated skin holds the oils on the surface, releasing the notes slowly.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Quote overlay */}
        <div className="mt-16 text-center">
          <p className="text-sm italic text-charcoal-400 font-light max-w-lg mx-auto">
            &quot;Perfume is like a new garment, it makes you quite simply marvelous.&quot; — Estée Lauder
          </p>
        </div>

      </div>
    </section>
  );
}
