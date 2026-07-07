"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Star, Heart, ShoppingBag, Eye, Check } from "lucide-react";
import { catalogProducts, CatalogProduct } from "@/data/catalog";
import { useCart } from "@/lib/CartContext";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: CatalogProduct;
  index: number;
  isInWishlist: (id: string) => boolean;
  toggleWishlist: (id: string) => void;
  addedItemIds: string[];
  handleQuickAdd: (e: React.MouseEvent, product: CatalogProduct) => void;
  handleOpenDetails: (product: CatalogProduct) => void;
}

function ProductCard({
  product,
  index,
  isInWishlist,
  toggleWishlist,
  addedItemIds,
  handleQuickAdd,
  handleOpenDetails
}: ProductCardProps) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const productImages = product.images && product.images.length > 0
    ? product.images
    : [product.imagePath];

  // Auto cycle images on hover every 1.5 seconds (Mini Carousel)
  useEffect(() => {
    if (!isHovered || productImages.length <= 1) {
      setActiveImgIndex(0);
      return;
    }

    const interval = setInterval(() => {
      setActiveImgIndex((prev) => (prev + 1) % productImages.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [isHovered, productImages]);

  const isFavorite = isInWishlist(product.id);
  const isAdded = addedItemIds.includes(product.id);
  const defaultSize = product.sizes[0];
  const discountPercent = Math.round(
    ((defaultSize.originalPrice - defaultSize.price) / defaultSize.originalPrice) * 100
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onClick={() => handleOpenDetails(product)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col justify-between p-4 rounded-2xl glass-panel glass-panel-hover transition-all duration-500 cursor-pointer overflow-hidden gold-border-glow focus-within:ring-2 focus-within:ring-gold-500 outline-none"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleOpenDetails(product);
        }
      }}
    >
      {/* Product Image Panel with Wishlist Heart */}
      <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-5 border border-gold-900/10 bg-charcoal-950">
        <Image
          src={productImages[activeImgIndex]}
          alt={product.name}
          fill
          sizes="(max-w-768px) 100vw, 20vw"
          className="object-cover transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/40 via-transparent to-transparent" />
        
        {/* Heart Wishlist Trigger Badge */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // Stop opening details page
            toggleWishlist(product.id);
          }}
          className="absolute top-2.5 right-2.5 z-10 p-2 rounded-full bg-charcoal-950/90 border border-gold-900/15 text-gold-500 hover:border-gold-500/40 hover:text-gold-400 transition-all duration-300 shadow-md cursor-pointer"
          aria-label={isFavorite ? "Remove from Wishlist" : "Add to Wishlist"}
        >
          <Heart size={14} className={cn("transition-colors", isFavorite ? "fill-red-500 text-red-500" : "text-gold-500")} />
        </button>

        {/* Discount percentage tag */}
        <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-green-500/90 border border-green-500/20 text-white text-[9px] font-bold uppercase tracking-wider shadow-sm">
          {discountPercent}% OFF
        </div>

        {/* Mini Carousel Indicators (dots) without nav arrows */}
        {productImages.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1 z-10">
            {productImages.map((_, idx) => (
              <span
                key={idx}
                className={cn(
                  "w-1.5 h-1.5 rounded-full transition-all duration-300",
                  activeImgIndex === idx ? "bg-gold-500 w-3" : "bg-gold-950/50"
                )}
              />
            ))}
          </div>
        )}

      </div>

      {/* Scent Info details */}
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <span className="text-[8px] font-bold tracking-[0.2em] text-gold-500 uppercase block mb-1">
            {product.category}
          </span>
          <h3 className="text-base font-serif text-gold-100 font-medium tracking-wide mb-1 truncate group-hover:text-gold-400 transition-colors">
            {product.name}
          </h3>
          
          {/* Stars average indicator */}
          <div className="flex items-center space-x-1.5 mb-3">
            <div className="flex text-gold-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={10}
                  className={cn(i < Math.floor(product.rating) ? "fill-current" : "opacity-30")}
                />
              ))}
            </div>
            <span className="text-[9px] text-charcoal-400 font-semibold">({product.reviewCount})</span>
          </div>
        </div>

        {/* Price display row - Made larger and bolder for high readability */}
        <div className="flex items-baseline space-x-2.5 mb-4 pt-2 border-t border-gold-900/10">
          <span className="text-xl font-serif font-bold text-gold-300">
            ₹{defaultSize.price.toLocaleString("en-IN")}
          </span>
          <span className="text-xs text-charcoal-400 line-through">
            ₹{defaultSize.originalPrice.toLocaleString("en-IN")}
          </span>
        </div>
      </div>

      {/* Add to Bag CTA button */}
      <button
        onClick={(e) => handleQuickAdd(e, product)}
        className="w-full inline-flex items-center justify-center bg-transparent border border-gold-500 text-gold-200 group-hover:bg-gold-500 group-hover:text-charcoal-950 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer"
        style={{ minHeight: "36px" }}
      >
        {isAdded ? (
          <span className="flex items-center">
            <Check size={12} className="mr-1.5" /> Added to Bag
          </span>
        ) : (
          <span className="flex items-center">
            <ShoppingBag size={12} className="mr-1.5" /> Add to Bag
          </span>
        )}
      </button>
    </motion.div>
  );
}

export default function Categories() {
  const router = useRouter();
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const [addedItemIds, setAddedItemIds] = useState<string[]>([]);

  const handleOpenDetails = (product: CatalogProduct) => {
    router.push(`/product/${product.id}`);
  };

  const handleQuickAdd = (e: React.MouseEvent, product: CatalogProduct) => {
    e.stopPropagation(); // Prevent opening detail page
    
    addToCart({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.sizes[0].price,
      originalPrice: product.sizes[0].originalPrice,
      size: product.sizes[0].size,
      imagePath: product.imagePath
    }, 1);

    setAddedItemIds((prev) => [...prev, product.id]);
    setTimeout(() => {
      setAddedItemIds((prev) => prev.filter((id) => id !== product.id));
    }, 2500);
  };

  return (
    <section id="products" className="py-24 bg-charcoal-950 relative border-t border-gold-900/10">
      {/* Decorative side glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-radial from-gold-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-500 mb-3">
            Luxury Catalog
          </h2>
          <p className="text-3xl md:text-5xl font-serif font-light tracking-wide text-gold-100 mb-6">
            Bespoke <span className="font-normal italic text-gold-400">Olfactory Collections</span>
          </p>
          <div className="h-[1px] w-24 bg-gold-900/40 mx-auto mb-6" />
          <p className="text-base text-charcoal-300 leading-relaxed max-w-xl mx-auto font-light">
            Indulge your senses in our pristine portfolio of aromatic masterpieces. Tap on any product to view its ingredients pyramid, size options, and verified reviews.
          </p>
        </div>

        {/* Storefront Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {catalogProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              isInWishlist={isInWishlist}
              toggleWishlist={toggleWishlist}
              addedItemIds={addedItemIds}
              handleQuickAdd={handleQuickAdd}
              handleOpenDetails={handleOpenDetails}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
