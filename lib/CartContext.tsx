"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { siteConfig } from "@/data/siteConfig";

export interface CartItem {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  size: string;
  quantity: number;
  imagePath: string;
}

interface CartContextType {
  cart: CartItem[];
  wishlist: string[];
  addToCart: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeFromCart: (id: string, size: string) => void;
  updateQuantity: (id: string, size: string, quantity: number) => void;
  toggleWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  clearCart: () => void;
  whatsappCheckout: () => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  // Load cart and wishlist from LocalStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("fragnence_cart");
    const savedWishlist = localStorage.getItem("fragnence_wishlist");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Error parsing cart storage:", e);
      }
    }
    if (savedWishlist) {
      try {
        setWishlist(JSON.parse(savedWishlist));
      } catch (e) {
        console.error("Error parsing wishlist storage:", e);
      }
    }
    setMounted(true);
  }, []);

  // Save cart and wishlist to LocalStorage on updates
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("fragnence_cart", JSON.stringify(cart));
    }
  }, [cart, mounted]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("fragnence_wishlist", JSON.stringify(wishlist));
    }
  }, [wishlist, mounted]);

  const addToCart = (newItem: Omit<CartItem, "quantity">, quantity = 1) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.id === newItem.id && item.size === newItem.size
      );

      if (existingIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingIndex].quantity += quantity;
        return updatedCart;
      }

      return [...prevCart, { ...newItem, quantity }];
    });
  };

  const removeFromCart = (id: string, size: string) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.id === id && item.size === size))
    );
  };

  const updateQuantity = (id: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id, size);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.size === size ? { ...item, quantity } : item
      )
    );
  };

  const toggleWishlist = (id: string) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.includes(id)) {
        return prevWishlist.filter((item) => item !== id);
      }
      return [...prevWishlist, id];
    });
  };

  const isInWishlist = (id: string) => {
    return wishlist.includes(id);
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const whatsappCheckout = () => {
    if (cart.length === 0) return;

    let message = `Hi Fragnence! I would like to place an order from your Surat Boutique boutique:\n\n`;
    cart.forEach((item) => {
      message += `• *${item.name}* (${item.size}) - ${item.quantity}x @ ₹${item.price.toLocaleString("en-IN")}\n`;
    });
    message += `\n*Total Order Value:* ₹${cartTotal.toLocaleString("en-IN")}\n\n`;
    message += `Please confirm my order and share delivery details!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${siteConfig.phoneFormatted.replace(/[^0-9]/g, "")}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleWishlist,
        isInWishlist,
        clearCart,
        whatsappCheckout,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
