"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Star, Heart, ShoppingBag, Check, ArrowLeft, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { catalogProducts, CatalogProduct } from "@/data/catalog";
import { useCart } from "@/lib/CartContext";
import { cn } from "@/lib/utils";
import { fetchProductById } from "@/lib/supabase";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: PageProps) {
  const { id } = use(params);
  const router = useRouter();
  
  const [product, setProduct] = useState<CatalogProduct | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedNotification, setAddedNotification] = useState(false);

  const { addToCart, toggleWishlist, isInWishlist } = useCart();

  // Find product from catalog / Supabase
  useEffect(() => {
    // Set fallback immediately
    const foundProduct = catalogProducts.find((p) => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
    }

    // Fetch from Supabase
    fetchProductById(id).then((dbProduct) => {
      if (dbProduct) {
        setProduct(dbProduct);
      }
    });

    setActiveImageIndex(0);
    setSelectedSizeIndex(0);
    setQuantity(1);
    setAddedNotification(false);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-charcoal-950 flex flex-col items-center justify-center text-center p-6">
        <h1 className="font-serif text-3xl text-gold-200 mb-4">Product Not Found</h1>
        <p className="text-charcoal-400 mb-8 font-light max-w-sm">
          The fragrance profile you are looking for may have been archived or is out of stock in our Surat boutique.
        </p>
        <Link
          href="/#products"
          className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-400 text-charcoal-950 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all"
        >
          <ArrowLeft size={14} className="mr-2" /> Back to Products
        </Link>
      </div>
    );
  }

  // Get product images (use primary imagePath as fallback list if images list is empty)
  const productImages = product.images && product.images.length > 0
    ? product.images
    : [product.imagePath];

  const currentSizeObj = product.sizes[selectedSizeIndex];
  const isFavorite = isInWishlist(product.id);
  const discountPercent = Math.round(
    ((currentSizeObj.originalPrice - currentSizeObj.price) / currentSizeObj.originalPrice) * 100
  );

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      category: product.category,
      price: currentSizeObj.price,
      originalPrice: currentSizeObj.originalPrice,
      size: currentSizeObj.size,
      imagePath: product.imagePath
    }, quantity);

    setAddedNotification(true);
    setTimeout(() => {
      setAddedNotification(false);
    }, 3000);
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <div className="min-h-screen bg-charcoal-950 pt-28 pb-20 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-radial from-gold-500/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-radial from-gold-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back navigation button */}
        <div className="mb-8">
          <Link
            href="/#products"
            className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-gold-500 hover:text-gold-400 transition-colors group"
          >
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Olfactory Collections
          </Link>
        </div>

        {/* E-Commerce Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Image Carousel Section */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Main Interactive Carousel Showcase */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-gold-900/20 bg-charcoal-900 shadow-2xl group/carousel">
              
              <Image
                src={productImages[activeImageIndex]}
                alt={`${product.name} - View ${activeImageIndex + 1}`}
                fill
                sizes="(max-w-768px) 100vw, 40vw"
                className="object-cover transition-all duration-700 hover:scale-105"
                priority
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/20 via-transparent to-transparent pointer-events-none" />

              {/* Wishlist Heart Toggle */}
              <button
                onClick={() => toggleWishlist(product.id)}
                className="absolute top-4 right-4 z-10 p-3 rounded-full bg-charcoal-900/80 border border-gold-900/15 text-gold-500 hover:border-gold-500/40 transition-all duration-300 shadow-md cursor-pointer"
                aria-label={isFavorite ? "Remove from Wishlist" : "Add to Wishlist"}
              >
                <Heart
                  size={20}
                  className={cn(
                    "transition-colors duration-300",
                    isFavorite ? "fill-red-500 text-red-500" : "text-gold-500"
                  )}
                />
              </button>

              {/* Discount Badge */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded bg-green-500/90 border border-green-500/20 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                {discountPercent}% OFF
              </div>

              {/* Carousel Next / Prev Navigation Buttons (Visible when multi-image) */}
              {productImages.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-charcoal-950/80 border border-gold-900/20 text-gold-400 hover:text-gold-500 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 cursor-pointer shadow-lg"
                    aria-label="Previous Image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-charcoal-950/80 border border-gold-900/20 text-gold-400 hover:text-gold-500 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 cursor-pointer shadow-lg"
                    aria-label="Next Image"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              {/* Carousel Indicators (Dots) */}
              {productImages.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {productImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-300",
                        activeImageIndex === idx ? "bg-gold-500 w-5" : "bg-gold-900/50 hover:bg-gold-900"
                      )}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Thumbnail Selectors Grid */}
            {productImages.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {productImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={cn(
                      "relative aspect-square rounded-xl overflow-hidden border bg-charcoal-900 transition-all duration-300 cursor-pointer",
                      activeImageIndex === idx
                        ? "border-gold-500 ring-2 ring-gold-500/20 scale-[1.02]"
                        : "border-gold-900/20 hover:border-gold-900/50 opacity-60 hover:opacity-100"
                    )}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} thumbnail ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Quality Seals */}
            <div className="p-6 rounded-2xl glass-panel relative gold-border-glow space-y-3.5 mt-2">
              <div className="flex items-center text-xs text-charcoal-300">
                <ShieldCheck size={16} className="text-gold-500 mr-3 shrink-0" />
                100% Authentic Product Sourced Directly
              </div>
              <div className="flex items-center text-xs text-charcoal-300">
                <ShieldCheck size={16} className="text-gold-500 mr-3 shrink-0" />
                Surat Boutique Pick-up or Premium Hand-Packed Shipping
              </div>
              <div className="flex items-center text-xs text-charcoal-300">
                <ShieldCheck size={16} className="text-gold-500 mr-3 shrink-0" />
                Wax-Sealed Gift Wrap & Personalized Calligraphy Cards Available
              </div>
            </div>

          </div>

          {/* Right Column: E-Commerce Product Specifications */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            
            {/* Header */}
            <div>
              <span className="text-xs font-bold tracking-[0.25em] text-gold-500 uppercase block mb-2">
                {product.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-serif font-light text-gold-100 tracking-wide mb-3 leading-tight">
                {product.name}
              </h1>
              <p className="text-sm md:text-base italic text-gold-400 mb-4">{product.tagline}</p>

              {/* Rating metrics */}
              <div className="flex items-center space-x-3.5 py-3 border-y border-gold-900/10">
                <div className="flex items-center text-gold-500 bg-gold-950/40 border border-gold-900/30 px-2.5 py-0.5 rounded text-xs font-bold">
                  <span className="mr-1">{product.rating.toFixed(1)}</span>
                  <Star size={12} className="fill-current" />
                </div>
                <span className="text-xs text-charcoal-300">
                  {product.reviewCount} verified client ratings
                </span>
              </div>
            </div>

            {/* Pricing Section (Make it big and readable as requested!) */}
            <div className="p-6 rounded-2xl glass-panel relative gold-border-glow bg-gradient-to-r from-charcoal-900 to-charcoal-950/20 space-y-2">
              <div className="flex items-baseline space-x-4">
                {/* Enlarged typography for pricing as requested */}
                <span className="text-3xl md:text-4xl font-serif font-bold text-gold-300">
                  ₹{currentSizeObj.price.toLocaleString("en-IN")}
                </span>
                <span className="text-base md:text-lg text-charcoal-400 line-through">
                  ₹{currentSizeObj.originalPrice.toLocaleString("en-IN")}
                </span>
                <span className="text-xs font-bold text-green-500 bg-green-500/10 border border-green-500/20 px-3 py-1 rounded uppercase tracking-wider">
                  {discountPercent}% OFF
                </span>
              </div>
              <p className="text-xs text-charcoal-400 font-light">Inclusive of all Surat boutique taxes & regional courier fees.</p>
            </div>

            {/* Volume strength selector */}
            <div>
              <h4 className="text-xs uppercase tracking-widest font-semibold text-gold-400 mb-3">Select Scent Volume Strength</h4>
              <div className="flex gap-3">
                {product.sizes.map((s, idx) => (
                  <button
                    key={s.size}
                    onClick={() => setSelectedSizeIndex(idx)}
                    className={cn(
                      "px-6 py-3 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-sm",
                      selectedSizeIndex === idx
                        ? "bg-gold-500 text-charcoal-950 border-gold-500"
                        : "bg-charcoal-950 border-gold-900/20 text-gold-300 hover:border-gold-500/40"
                    )}
                  >
                    {s.size}
                  </button>
                ))}
              </div>
            </div>

            {/* Olfactory profile description */}
            <div>
              <h4 className="text-xs uppercase tracking-widest font-semibold text-gold-400 mb-2.5">Olfactory Profile</h4>
              <p className="text-sm md:text-base text-charcoal-300 leading-relaxed font-light">
                {product.description}
              </p>
            </div>

            {/* Scent Pyramid grid */}
            <div className="p-6 rounded-2xl glass-panel relative gold-border-glow space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-bold text-gold-200 border-b border-gold-900/10 pb-2 flex items-center">
                <span>Olfactory Pyramid Structure</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="space-y-1 md:border-r border-gold-900/10 pr-2">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-gold-500 block">Top Notes (Opening)</span>
                  <p className="text-sm text-charcoal-200 font-light leading-relaxed">{product.notes.top}</p>
                </div>
                <div className="space-y-1 md:border-r border-gold-900/10 pr-2">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-gold-500 block">Heart Notes (Core)</span>
                  <p className="text-sm text-charcoal-200 font-light leading-relaxed">{product.notes.heart}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-gold-500 block">Base Notes (Longevity)</span>
                  <p className="text-sm text-charcoal-200 font-light leading-relaxed">{product.notes.base}</p>
                </div>
              </div>
            </div>

            {/* Quantity Selector & Add to Bag */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              
              {/* Quantity Picker */}
              <div className="flex items-center border border-gold-900/20 bg-charcoal-950 rounded-xl overflow-hidden self-stretch sm:self-auto justify-between sm:justify-start">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-5 py-4 text-gold-500 hover:bg-gold-500/10 active:bg-gold-500/20 transition-all font-semibold text-sm cursor-pointer"
                  style={{ minWidth: "48px" }}
                >
                  -
                </button>
                <span className="px-6 text-sm font-semibold text-gold-200">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-5 py-4 text-gold-500 hover:bg-gold-500/10 active:bg-gold-500/20 transition-all font-semibold text-sm cursor-pointer"
                  style={{ minWidth: "48px" }}
                >
                  +
                </button>
              </div>

              {/* Add to Bag CTA */}
              <button
                onClick={handleAddToCart}
                className="flex-grow w-full inline-flex items-center justify-center bg-gold-500 hover:bg-gold-400 text-charcoal-950 py-4 px-8 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(197,168,128,0.4)] active:scale-[0.98] cursor-pointer"
              >
                {addedNotification ? (
                  <span className="flex items-center text-charcoal-950">
                    <Check size={16} className="mr-2" />
                    Added to Shopping Bag!
                  </span>
                ) : (
                  <span className="flex items-center text-charcoal-950">
                    <ShoppingBag size={16} className="mr-2" />
                    Add to Shopping Bag
                  </span>
                )}
              </button>
              
            </div>

            {/* Customer Testimonials reviews list */}
            <div className="border-t border-gold-900/15 pt-8 space-y-6">
              <h3 className="text-lg font-serif text-gold-200 tracking-wide">
                Verified Client Testimonials
              </h3>
              
              <div className="space-y-4">
                {product.reviews.map((rev) => (
                  <div key={rev.id} className="p-5 rounded-2xl glass-panel relative gold-border-glow space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2.5">
                        <span className="text-sm font-semibold text-gold-200">{rev.author}</span>
                        <div className="inline-flex items-center text-[9px] text-[#25D366] bg-[#25D366]/5 px-2 py-0.5 rounded font-bold border border-[#25D366]/20 uppercase tracking-wide">
                          <ShieldCheck size={10} className="mr-1" />
                          Verified Client
                        </div>
                      </div>
                      <span className="text-[10px] text-charcoal-400 font-semibold">{rev.date}</span>
                    </div>

                    {/* rating Stars */}
                    <div className="flex text-gold-500">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} size={11} className="fill-current" />
                      ))}
                    </div>

                    <p className="text-xs md:text-sm text-charcoal-300 font-light leading-relaxed italic">
                      &quot;{rev.comment}&quot;
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
