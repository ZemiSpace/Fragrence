export interface ProductReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface ScentPyramid {
  top: string;
  heart: string;
  base: string;
}

export interface CatalogProduct {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  imagePath: string;
  rating: number;
  reviewCount: number;
  sizes: {
    size: string;
    price: number;
    originalPrice: number;
  }[];
  notes: ScentPyramid;
  reviews: ProductReview[];
  images?: string[];
}

export const catalogProducts: CatalogProduct[] = [
  {
    id: "celestial-oud",
    name: "Celestial Oud Extrait",
    category: "Oud Perfumes",
    tagline: "The Liquid Gold of the Orient",
    description: "Deep, mysterious agarwood treasures that capture the legendary soul of Arabian perfumery. Blending rich, animalic, and smoky Assam Oud wood oils with dry saffron strands, raw leather accords, and dark tobacco leaves. Formulated for extreme projection and longevity that lasts days on skin.",
    imagePath: "/images/oud_perfume.png",
    rating: 4.9,
    reviewCount: 142,
    sizes: [
      { size: "50ml", price: 5499, originalPrice: 7000 },
      { size: "100ml", price: 8499, originalPrice: 11000 }
    ],
    notes: {
      top: "Saffron, Nutmeg, Lavender",
      heart: "Assam Oud Wood, Labdanum Resin",
      base: "Sandalwood, Patchouli, Grey Amber"
    },
    images: [
      "/images/oud_perfume.png",
      "/images/celestial_oud_alternate.png",
      "/images/celestial_oud_ingredients.png"
    ],
    reviews: [
      {
        id: "r1",
        author: "Aarav Mehta",
        rating: 5,
        date: "June 14, 2026",
        comment: "This oud is absolutely royal. Projection is massive and it lingers for hours. Truly premium packaging.",
        verified: true
      },
      {
        id: "r2",
        author: "Fatima Al-Sayed",
        rating: 5,
        date: "May 28, 2026",
        comment: "Reminds me of luxury boutiques in Dubai. The saffron and nutmeg top notes blend beautifully into the smoky oud base.",
        verified: true
      }
    ]
  },
  {
    id: "velvet-bloom",
    name: "Velvet Bloom Extrait",
    category: "Floral Perfumes",
    tagline: "Blooms of Elegance & Romance",
    description: "Romantic, delicate orchestrations that capture the pristine atmosphere of early morning botanical gardens. Blending hand-picked Grasse jasmine, Bulgarian rose petals, and dew-covered peony buds with a soft base of cashmeran and white musk.",
    imagePath: "/images/floral_perfume.png",
    rating: 4.7,
    reviewCount: 98,
    sizes: [
      { size: "50ml", price: 2999, originalPrice: 4000 },
      { size: "100ml", price: 4799, originalPrice: 6000 }
    ],
    notes: {
      top: "Bulgarian Rose, White Peony, Pink Pepper",
      heart: "Grasse Jasmine, Lily of the Valley, Peach",
      base: "White Musk, Vanilla Extract, Cedarwood"
    },
    images: [
      "/images/floral_perfume.png",
      "/images/velvet_bloom_alternate.png",
      "/images/velvet_bloom_ingredients.png"
    ],
    reviews: [
      {
        id: "r3",
        author: "Priya Sharma",
        rating: 5,
        date: "June 20, 2026",
        comment: "Incredibly fresh rose scent, like walking through a damp garden. Very elegant and not overwhelming.",
        verified: true
      },
      {
        id: "r4",
        author: "Ananya Iyer",
        rating: 4,
        date: "May 10, 2026",
        comment: "Very soft and feminine. It makes a beautiful daywear scent. Will buy again.",
        verified: true
      }
    ]
  },
  {
    id: "imperial-gold",
    name: "Imperial Gold Crown",
    category: "Luxury Perfumes",
    tagline: "Ultra-Premium Niche Masterpiece",
    description: "Exclusive olfactory collections crafted by legendary, independent perfume houses. These formulations employ raw Taif rose oil, genuine grey ambergris, and double-distilled Oud oils, presented in heavy crystal art-glass decanters for royalty.",
    imagePath: "/images/luxury_perfume.png",
    rating: 5.0,
    reviewCount: 66,
    sizes: [
      { size: "50ml", price: 7499, originalPrice: 9500 },
      { size: "100ml", price: 11999, originalPrice: 15500 }
    ],
    notes: {
      top: "Calabrian Bergamot, Green Cardamom, Pink Pepper",
      heart: "Taif Rose Oil, Italian Orris Root Butter, Jasmine Absolute",
      base: "Grey Ambergris, White Oud Oil, Mysore Sandalwood, Musk"
    },
    images: [
      "/images/luxury_perfume.png",
      "/images/imperial_gold_alternate.png"
    ],
    reviews: [
      {
        id: "r5",
        author: "Madan Lal",
        rating: 5,
        date: "July 01, 2026",
        comment: "Pure perfection. The ambergris base is so warm and complex. It is the absolute jewel of my collection.",
        verified: true
      },
      {
        id: "r6",
        author: "Vikram Singhania",
        rating: 5,
        date: "June 11, 2026",
        comment: "The quality of the ingredients is undeniable. It shifts beautifully on skin. Exceptional niche perfumery.",
        verified: true
      }
    ]
  },
  {
    id: "mysore-forest",
    name: "Mysore Forest Sandal",
    category: "Woody Perfumes",
    tagline: "Earthy, Rich, and Grounded",
    description: "Warm, dry, and majestic forest scent architectures. These blends celebrate the complex and grounding resins of Virginia cedar wood, creamy Mysore sandalwood, and dry smoky vetiver for an authoritative, comforting aura.",
    imagePath: "/images/woody_perfume.png",
    rating: 4.8,
    reviewCount: 115,
    sizes: [
      { size: "50ml", price: 3299, originalPrice: 4500 },
      { size: "100ml", price: 5199, originalPrice: 6800 }
    ],
    notes: {
      top: "Violet Leaves, Cardamom, Cypress",
      heart: "Mysore Sandalwood, Virginia Cedar, Papyrus",
      base: "Haitian Vetiver, Suede Leather, Warm Amber"
    },
    images: [
      "/images/woody_perfume.png",
      "/images/mysore_forest_alternate.png"
    ],
    reviews: [
      {
        id: "r7",
        author: "Rohan Das",
        rating: 5,
        date: "May 15, 2026",
        comment: "Very relaxing and grounded. Smells like expensive wood carvings. Highly recommend for evening wear.",
        verified: true
      },
      {
        id: "r8",
        author: "Kabir Mehta",
        rating: 4,
        date: "April 29, 2026",
        comment: "Smoky, creamy sandalwood. Lasts about 8 hours. The cardamom opening is gorgeous.",
        verified: true
      }
    ]
  },
  {
    id: "mitti-attar",
    name: "Traditional Mitti Attar",
    category: "Pure Attars",
    tagline: "Concentrated Oil-Based Elixirs",
    description: "Authentic, alcohol-free perfume oils distilled through traditional wood-fired copper vessels. These thick, warm concentrates capture the exact, therapeutic aroma of baked clay after the monsoon's first rains.",
    imagePath: "/images/attar_bottle.png",
    rating: 4.9,
    reviewCount: 88,
    sizes: [
      { size: "6ml", price: 1899, originalPrice: 2500 },
      { size: "12ml", price: 3199, originalPrice: 4200 }
    ],
    notes: {
      top: "Baked River Silt, Sun-Baked Clay",
      heart: "Summer Earth, Fresh Monsoon Rain Accords",
      base: "Pure Sandalwood Oil Base"
    },
    images: [
      "/images/attar_bottle.png"
    ],
    reviews: [
      {
        id: "r9",
        author: "Devendra Patel",
        rating: 5,
        date: "June 25, 2026",
        comment: "Unbelievable. It smells exactly like dry soil after the first rains in Surat. So nostalgic and pure.",
        verified: true
      },
      {
        id: "r10",
        author: "Meera Nair",
        rating: 5,
        date: "June 05, 2026",
        comment: "Pure and concentrated. Just a drop on wrists lasts for two days. A true work of art.",
        verified: true
      }
    ]
  },
  {
    id: "citrus-breeze",
    name: "Misty Citrus Breeze",
    category: "Body Mists",
    tagline: "Light, Airy, and Refreshing",
    description: "Refreshing, cooling, and hydrating all-over body sprays formulated with active aloe hydration. Perfect for active lifestyles, post-workout refreshment, or a light, casual morning splash of clean mineral scent.",
    imagePath: "/images/body_mist.png",
    rating: 4.6,
    reviewCount: 132,
    sizes: [
      { size: "100ml", price: 1499, originalPrice: 2000 },
      { size: "150ml", price: 2299, originalPrice: 3000 }
    ],
    notes: {
      top: "Calabrian Bergamot, Green Lemon, Mint Leaves",
      heart: "Green Tea Extract, White Jasmine, Cucumber",
      base: "Solar Amber, Clean Cedarwood, Solar Woods"
    },
    images: [
      "/images/body_mist.png"
    ],
    reviews: [
      {
        id: "r11",
        author: "Rajesh Trivedi",
        rating: 4,
        date: "May 22, 2026",
        comment: "Excellent morning splash. Very fresh, zesty lemon and mint. Perfect for Surat summers.",
        verified: true
      },
      {
        id: "r12",
        author: "Siddharth Sen",
        rating: 5,
        date: "April 18, 2026",
        comment: "Light, hydrating, and smells very clean. I spray it post-shower every single day.",
        verified: true
      }
    ]
  },
  {
    id: "saffron-leather",
    name: "Saffron Leather Unisex",
    category: "Unisex Perfumes",
    tagline: "Shared Artistry without Borders",
    description: "Avant-garde olfactory compositions designed to transcend gender binaries. Mixing zesty spices, heavy woods, and crisp florals, they adapt uniquely to individual skin chemistries to create a highly custom signature aura.",
    imagePath: "/images/unisex_perfume.png",
    rating: 4.8,
    reviewCount: 104,
    sizes: [
      { size: "50ml", price: 3999, originalPrice: 5200 },
      { size: "100ml", price: 6499, originalPrice: 8500 }
    ],
    notes: {
      top: "Red Saffron, Raspberry, Thyme",
      heart: "Jasmine Blossom, White Suede Leather",
      base: "Black Leather Accord, Amberwood, Cedarwood"
    },
    images: [
      "/images/unisex_perfume.png"
    ],
    reviews: [
      {
        id: "r13",
        author: "Karan Johar",
        rating: 5,
        date: "June 30, 2026",
        comment: "Stunning blend of raspberry and dark leather. It feels powerful and extremely modern.",
        verified: true
      },
      {
        id: "r14",
        author: "Ritu Verma",
        rating: 4,
        date: "June 02, 2026",
        comment: "Very unique. The leather is smooth and warm, while the saffron adds a spicy punch.",
        verified: true
      }
    ]
  },
  {
    id: "regal-chest",
    name: "Royal Celebration Chest",
    category: "Premium Fragrance Gift Sets",
    tagline: "The Art of Giving Luxury",
    description: "Bespoke gift boxes hand-wrapped in heavy charcoal cardstock, stamped with custom gold-foil, and tied with silk ribbons. Combines full-sized perfumes, travel atomizers, and concentrated attar oils for your loved ones.",
    imagePath: "/images/luxury_hamper.png",
    rating: 4.9,
    reviewCount: 75,
    sizes: [
      { size: "Standard Set", price: 5999, originalPrice: 8000 },
      { size: "Signature Chest", price: 9999, originalPrice: 13000 }
    ],
    notes: {
      top: "Taif Rose, Bergamot",
      heart: "Imperial Sandalwood, Jasmine Accord",
      base: "Grey Ambergris, Pure Musk, Saffron"
    },
    images: [
      "/images/luxury_hamper.png"
    ],
    reviews: [
      {
        id: "r15",
        author: "Nilesh Patel",
        rating: 5,
        date: "June 18, 2026",
        comment: "Bought the Signature Chest for a wedding gift. The recipients were blown away by the velvet lining and personalized wax seal.",
        verified: true
      },
      {
        id: "r16",
        author: "Girish Patel",
        rating: 5,
        date: "May 25, 2026",
        comment: "Stunning presentation. The leather trunk makes it feel incredibly premium. Worth every rupee.",
        verified: true
      }
    ]
  }
];
