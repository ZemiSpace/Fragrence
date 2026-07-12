"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Heart, X, Trash2, ShoppingBag, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/CartContext";
import { catalogProducts } from "@/data/catalog";
import { fetchProducts } from "@/lib/supabase";
import { useState, useEffect } from "react";

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WishlistDrawer({ isOpen, onClose }: WishlistDrawerProps) {
  const { wishlist, toggleWishlist, addToCart } = useCart();
  const [products, setProducts] = useState(catalogProducts);

  useEffect(() => {
    fetchProducts().then((data) => {
      if (data && data.length > 0) {
        setProducts(data);
      }
    });
  }, []);

  // Filter catalog items that are in the wishlist
  const favoritedProducts = products.filter((p) => wishlist.includes(p.id));

  const handleMoveToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.sizes[0].price,
      originalPrice: product.sizes[0].originalPrice,
      size: product.sizes[0].size,
      imagePath: product.imagePath
    }, 1);
    
    // Remove from wishlist after moving to bag
    toggleWishlist(product.id);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Slide-over Right Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-charcoal-900 border-l border-gold-900/30 flex flex-col justify-between shadow-2xl"
          >
            
            {/* Header */}
            <div className="p-6 border-b border-gold-900/10 flex items-center justify-between bg-charcoal-950/20">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 bg-gold-950 text-gold-500 rounded-lg border border-gold-900/20">
                  <Heart size={18} className="fill-current text-red-500" />
                </div>
                <div>
                  <h3 className="text-lg font-serif text-gold-100 font-semibold tracking-wide">
                    Your Wishlist
                  </h3>
                  <p className="text-[10px] text-charcoal-400 uppercase tracking-widest mt-0.5">
                    {favoritedProducts.length} saved favorites
                  </p>
                </div>
              </div>
              
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gold-500/10 text-charcoal-400 hover:text-gold-500 transition-colors cursor-pointer"
                aria-label="Close Wishlist"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable Favorites Items Container */}
            <div className="flex-grow overflow-y-auto p-6 space-y-5 scrollbar-thin">
              {favoritedProducts.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="p-6 rounded-full bg-charcoal-950 border border-gold-900/5 text-charcoal-500">
                    <Heart size={48} className="text-gold-900/30" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-gold-200 text-base">Your Wishlist is Empty</h4>
                    <p className="text-xs text-charcoal-400 max-w-xs font-light">
                      Add items to your favorites while exploring our designer collection to keep track of them here.
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="inline-flex items-center justify-center bg-transparent border border-gold-500 text-gold-300 hover:bg-gold-500 hover:text-charcoal-950 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 cursor-pointer"
                  >
                    Explore Products
                  </button>
                </div>
              ) : (
                favoritedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex space-x-4 p-4 rounded-xl bg-charcoal-950/40 border border-gold-900/5 hover:border-gold-900/15 transition-all relative overflow-hidden group"
                  >
                    {/* Item Thumbnail */}
                    <Link
                      href={`/product/${product.id}`}
                      onClick={onClose}
                      className="relative w-20 h-20 rounded-lg overflow-hidden border border-gold-900/10 shrink-0 bg-charcoal-900 cursor-pointer block"
                    >
                      <Image src={product.imagePath} alt={product.name} fill className="object-cover" />
                    </Link>

                    {/* Item Details */}
                    <div className="flex-grow flex flex-col justify-between min-w-0">
                      <div>
                        <div className="flex items-start justify-between">
                          <Link
                            href={`/product/${product.id}`}
                            onClick={onClose}
                            className="text-sm font-semibold text-gold-200 truncate pr-4 hover:underline cursor-pointer block"
                          >
                            {product.name}
                          </Link>
                          <button
                            onClick={() => toggleWishlist(product.id)}
                            className="p-1 rounded text-charcoal-500 hover:text-red-500 transition-colors cursor-pointer"
                            aria-label="Remove from wishlist"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                        <span className="text-[10px] uppercase tracking-widest text-gold-500/80 font-bold block mt-0.5">
                          {product.category}
                        </span>
                      </div>

                      {/* Convert/Move to Bag controls */}
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-gold-900/5">
                        <span className="text-sm font-serif font-bold text-gold-300">
                          ₹{product.sizes[0].price.toLocaleString("en-IN")}
                        </span>

                        <button
                          onClick={() => handleMoveToCart(product)}
                          className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-400 text-charcoal-950 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer"
                        >
                          <ShoppingBag size={10} className="mr-1" />
                          Add to Bag
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Quality badge in Footer */}
            {favoritedProducts.length > 0 && (
              <div className="p-6 border-t border-gold-900/10 bg-charcoal-950/40 text-center">
                <p className="text-[10px] text-charcoal-400 flex items-center justify-center">
                  <ShieldCheck size={12} className="text-gold-600 mr-1 shrink-0" />
                  Prices subject to seasonal offer tags
                </p>
              </div>
            )}

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
