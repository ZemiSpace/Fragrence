export interface EncyclopediaItem {
  title: string;
  subtitle: string;
  description: string;
  details: { label: string; text: string }[];
}

export const perfumeNotesData: EncyclopediaItem = {
  title: "Understanding Perfume Notes",
  subtitle: "The Olfactory Pyramid",
  description: "Perfumes are constructed as a three-part symphony. As time passes, the scent evolves through three distinct phases: Top, Middle, and Base notes.",
  details: [
    {
      label: "Top Notes (Opening)",
      text: "The initial burst you smell immediately upon spraying. They are light, volatile, and last for 5 to 15 minutes. Common examples include Citrus (Bergamot, Lemon), Green Notes, and light herbs."
    },
    {
      label: "Middle/Heart Notes (Core)",
      text: "The true personality of the fragrance, emerging as the top notes fade. They last 2 to 4 hours and act as the bridge. Common examples are Florals (Rose, Jasmine), Spices (Cinnamon, Cardamom), and fruits."
    },
    {
      label: "Base Notes (Longevity)",
      text: "The foundation of the fragrance that anchors it to your skin. They are rich, deep, and can last from 6 hours to several days. Common examples are Sandalwood, Oud, Vanilla, Patchouli, Amber, and Musk."
    }
  ]
};

export const fragranceFamiliesData: EncyclopediaItem = {
  title: "Fragrance Families",
  subtitle: "Finding Your Vibe",
  description: "Fragrances are grouped into major olfactory families. Finding your favorite family helps narrow down the search for your signature scent.",
  details: [
    {
      label: "Floral",
      text: "Romantically feminine or elegantly soft. Smells like fresh-cut flowers. Sub-families include floral-oriental and soft floral. Classic examples: Rose, Jasmine, Tuberose, and Lily."
    },
    {
      label: "Woody",
      text: "Warm, dry, and mysterious. Often blended with cedar, sandalwood, vetiver, and patchouli. Highly sought after for its refined, grounding character and stellar longevity."
    },
    {
      label: "Fresh / Citrus",
      text: "Clean, energetic, and zesty. Think ocean breeze, fresh-cut grass, or sliced lemons. Perfect for daytime wear, sports, and hot Surat summer months."
    },
    {
      label: "Oriental / Amber",
      text: "Sensual, exotic, and rich. Blends heavy vanilla, amber, resins, and sweet spices. Ideal for evening wear, luxury events, and cooler seasons."
    },
    {
      label: "Oud / Woody-Oriental",
      text: "A regal category blending deep, dark, and animalic agarwood with saffron, rose, or leather. Bold, intense, and traditional in high-end Arabian perfumery."
    }
  ]
};

export const concentrationsData: EncyclopediaItem = {
  title: "Perfume Concentrations",
  subtitle: "Understanding Strength & Longevity",
  description: "A perfume's strength depends on the concentration of pure fragrance oils dissolved in alcohol/oil. This determines how long a spray will last.",
  details: [
    {
      label: "Parfum (Extrait de Parfum)",
      text: "20% to 40% concentration. The most luxurious, expensive, and long-lasting format. Lasts 8 to 12+ hours on skin. Has a rich, intimate projection and is less irritating for sensitive skin."
    },
    {
      label: "Eau de Parfum (EDP)",
      text: "15% to 20% concentration. The industry standard for luxury scents. Lasts 6 to 8 hours, offering an excellent balance of bold projection, longevity, and price."
    },
    {
      label: "Eau de Toilette (EDT)",
      text: "5% to 15% concentration. Lighter and more top-note focused. Lasts 3 to 5 hours. Ideal for daily casual wear, refreshing morning sprays, or summer wear."
    },
    {
      label: "Eau de Cologne (EDC) / Mists",
      text: "2% to 5% concentration. Ultra-light, refreshing, and clean. Lasts 1 to 2 hours. Often used for post-bath splashes or quick refreshments."
    }
  ]
};
