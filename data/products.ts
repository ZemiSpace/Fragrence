export interface ProductCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  iconName: "Gem" | "Crown" | "Flower" | "Trees" | "Flame" | "Droplet" | "Wind" | "Users" | "Gift";
  imagePath: string;
  notes: string[];
}

export const productCategories: ProductCategory[] = [
  {
    id: "luxury-perfumes",
    name: "Luxury Perfumes",
    tagline: "Ultra-Premium Niche Masterpieces",
    description: "Exclusive olfactory collections crafted by legendary, independent perfume houses. These formulations employ raw TAIF rose oil, genuine grey ambergris, and double-distilled Oud oils, presented in heavy crystal art-glass decanters.",
    iconName: "Gem",
    imagePath: "/images/luxury_perfume.png",
    notes: ["Pure Oud", "Grey Ambergris", "Taif Rose", "Orris Root Butter"]
  },
  {
    id: "designer-perfumes",
    name: "Designer Perfumes",
    tagline: "Couture Fashion House Classics",
    description: "Iconic, high-fashion creations sourced directly from the fashion houses of Paris, Milan, and New York. Representing refined sophistication, confidence, and modern design trends for red carpets and high-society occasions.",
    iconName: "Crown",
    imagePath: "/images/designer_perfume.png",
    notes: ["French Jasmine", "Madagascar Vanilla", "Calabrian Bergamot", "Neroli Essence"]
  },
  {
    id: "floral-perfumes",
    name: "Floral Perfumes",
    tagline: "Blooms of Elegance & Romance",
    description: "Romantic, delicate orchestrations that capture the pristine atmosphere of early morning botanical gardens. Blending hand-picked Grasse jasmine, Bulgarian rose petals, and dew-covered peony buds for a soft, airy elegance.",
    iconName: "Flower",
    imagePath: "/images/floral_perfume.png",
    notes: ["Bulgarian Rose", "Grasse Jasmine", "White Peony", "Cherry Blossom"]
  },
  {
    id: "woody-perfumes",
    name: "Woody Perfumes",
    tagline: "Earthy, Rich, and Grounded",
    description: "Warm, dry, and majestic forest scent architectures. These blends celebrate the complex and grounding resins of Virginia cedar wood, creamy Mysore sandalwood, and dry smoky vetiver for an authoritative, comforting aura.",
    iconName: "Trees",
    imagePath: "/images/woody_perfume.png",
    notes: ["Mysore Sandalwood", "Virginia Cedar", "Haitian Vetiver", "Oakmoss Resin"]
  },
  {
    id: "oud-perfumes",
    name: "Oud Perfumes",
    tagline: "The Liquid Gold of the Orient",
    description: "Deep, mysterious agarwood treasures that capture the legendary soul of Arabian perfumery. Blending rich, animalic, and smoky Assam Oud wood oils with dry saffron strands, raw leather accords, and dark tobacco leaves.",
    iconName: "Flame",
    imagePath: "/images/oud_perfume.png",
    notes: ["Assam Oud Wood", "Golden Saffron", "Rich Suede Leather", "Dark Tobacco"]
  },
  {
    id: "attars",
    name: "Pure Attars",
    tagline: "Concentrated Oil-Based Elixirs",
    description: "Authentic, alcohol-free perfume oils distilled through traditional wood-fired copper vessels. These thick, warm concentrates are applied using glass rods to pulse points, offering unmatched longevity that lasts on skin for days.",
    iconName: "Droplet",
    imagePath: "/images/attar_bottle.png",
    notes: ["Mitti Attar", "Ruh Khus (Vetiver)", "Shamama Accord", "Warm Musk Oil"]
  },
  {
    id: "body-mists",
    name: "Body Mists",
    tagline: "Light, Airy, and Refreshing",
    description: "Refreshing, cooling, and hydrating all-over body sprays formulated with active aloe hydration. Perfect for active lifestyles, post-workout refreshment, or a light, casual morning splash of clean mineral scent.",
    iconName: "Wind",
    imagePath: "/images/body_mist.png",
    notes: ["Mineral Sea Salt", "Cucumber Mint Extract", "Coconut Water", "White Musk"]
  },
  {
    id: "unisex-perfumes",
    name: "Unisex Perfumes",
    tagline: "Shared Artistry without Borders",
    description: "Avant-garde olfactory compositions designed to transcend gender binaries. Mixing zesty spices, heavy woods, and crisp florals, they adapt uniquely to individual skin chemistries to create a signature aura.",
    iconName: "Users",
    imagePath: "/images/unisex_perfume.png",
    notes: ["Green Cardamom", "Pink Pepper", "Bergamot Zest", "Cashmeran Woods"]
  },
  {
    id: "gift-sets",
    name: "Premium Fragrance Gift Sets",
    tagline: "The Art of Giving Luxury",
    description: "Bespoke gift boxes hand-wrapped in heavy charcoal cardstock, stamped with custom gold-foil, and tied with silk ribbons. Combines full-sized perfumes, travel atomizers, and concentrated attar oils for your loved ones.",
    iconName: "Gift",
    imagePath: "/images/luxury_hamper.png",
    notes: ["Curated Perfume Sets", "Custom Gift Trunks", "Wax-Sealed Greeting Cards"]
  }
];
