"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, X, Trash2, ShieldCheck, ArrowRight, MessageSquare, Heart } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/lib/CartContext";
import { cn } from "@/lib/utils";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, removeFromCart, updateQuantity, cartTotal, whatsappCheckout, clearCart } = useCart();

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
                  <ShoppingBag size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-serif text-gold-100 font-semibold tracking-wide">
                    Shopping Bag
                  </h3>
                  <p className="text-[10px] text-charcoal-400 uppercase tracking-widest mt-0.5">
                    {cart.length} unique scent selections
                  </p>
                </div>
              </div>
              
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gold-500/10 text-charcoal-400 hover:text-gold-500 transition-colors cursor-pointer"
                aria-label="Close Shopping Bag"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable Items Container */}
            <div className="flex-grow overflow-y-auto p-6 space-y-5 scrollbar-thin">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="p-6 rounded-full bg-charcoal-950 border border-gold-900/5 text-charcoal-500">
                    <ShoppingBag size={48} className="text-gold-900/30" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-gold-200 text-base">Your Bag is Empty</h4>
                    <p className="text-xs text-charcoal-400 max-w-xs font-light">
                      Browse our product catalog to select fragrances, concentrated attar oils, or wedding hampers.
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="inline-flex items-center justify-center bg-transparent border border-gold-500 text-gold-300 hover:bg-gold-500 hover:text-charcoal-950 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 cursor-pointer"
                  >
                    Continue Browsing
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="flex space-x-4 p-4 rounded-xl bg-charcoal-950/40 border border-gold-900/5 hover:border-gold-900/15 transition-all relative overflow-hidden group"
                  >
                    {/* Item Thumbnail */}
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden border border-gold-900/10 shrink-0 bg-charcoal-900">
                      <Image src={item.imagePath} alt={item.name} fill className="object-cover" />
                    </div>

                    {/* Item Details */}
                    <div className="flex-grow flex flex-col justify-between min-w-0">
                      <div>
                        <div className="flex items-start justify-between">
                          <h4 className="text-sm font-semibold text-gold-200 truncate pr-4">
                            {item.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.id, item.size)}
                            className="p-1 rounded text-charcoal-500 hover:text-red-500 transition-colors cursor-pointer"
                            aria-label="Remove item"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                        <span className="text-[10px] uppercase tracking-widest text-gold-500/80 font-bold block mt-0.5">
                          Size: {item.size}
                        </span>
                      </div>

                      {/* Quantity Toggles & Price row */}
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-gold-900/5">
                        <div className="flex items-center border border-gold-900/25 bg-charcoal-950 rounded-lg overflow-hidden shrink-0">
                          <button
                            onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                            className="px-2.5 py-1 text-gold-500 hover:bg-gold-500/10 transition-colors font-bold text-xs cursor-pointer"
                          >
                            -
                          </button>
                          <span className="px-2 text-xs font-semibold text-gold-300">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                            className="px-2.5 py-1 text-gold-500 hover:bg-gold-500/10 transition-colors font-bold text-xs cursor-pointer"
                          >
                            +
                          </button>
                        </div>

                        <span className="text-sm font-serif font-bold text-gold-300">
                          ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-gold-900/10 bg-charcoal-950/40 space-y-4">
                {/* Price calculations */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-charcoal-400">
                    <span>Scent Selections Subtotal</span>
                    <span className="text-gold-200">₹{cartTotal.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between text-xs text-charcoal-400">
                    <span>Surat Boutique Gifting Courier</span>
                    <span className="text-green-500 font-bold uppercase tracking-wider text-[10px]">Free Delivery</span>
                  </div>
                  <div className="h-[1px] w-full bg-gold-900/10 my-2" />
                  <div className="flex justify-between text-sm font-semibold">
                    <span className="text-gold-100">Estimated Total Order</span>
                    <span className="text-lg font-serif font-bold text-gold-300">
                      ₹{cartTotal.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                {/* Checkout Trigger */}
                <div className="space-y-3">
                  <button
                    onClick={whatsappCheckout}
                    className="w-full inline-flex items-center justify-center bg-gold-500 hover:bg-gold-400 text-charcoal-950 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(197,168,128,0.4)] active:scale-[0.98] cursor-pointer"
                    style={{ minHeight: "48px" }}
                  >
                    <span>Send Order to WhatsApp</span>
                    <ArrowRight size={12} className="ml-2" />
                  </button>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={clearCart}
                      className="text-[10px] text-charcoal-500 hover:text-gold-500 transition-colors uppercase tracking-widest font-bold cursor-pointer"
                    >
                      Clear All Selections
                    </button>
                    
                    <span className="text-[9px] text-charcoal-400 flex items-center">
                      <ShieldCheck size={12} className="text-gold-600 mr-1" />
                      Orders completed via WhatsApp
                    </span>
                  </div>
                </div>
              </div>
            )}

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
