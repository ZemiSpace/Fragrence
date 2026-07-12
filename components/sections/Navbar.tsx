"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Sun, Moon, Heart, ShoppingBag, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { useCart } from "@/lib/CartContext";
import { usePathname, useRouter } from "next/navigation";
import CartDrawer from "@/components/CartDrawer";
import WishlistDrawer from "@/components/WishlistDrawer";
import { cn } from "@/lib/utils";

// Removed "Fragrence Choice" from nav links as requested
const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#choice", label: "Fragrance Choice" },
  { href: "#hampers", label: "Gift Hampers" },
  { href: "#encyclopedia", label: "Encyclopedia" },
  { href: "#offers", label: "Offers" },
  { href: "#why-us", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  
  // Drawer states
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);

  const { cartCount, wishlist } = useCart();

  // Load and apply theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    
    const activeTheme = savedTheme || (systemPrefersLight ? "light" : "dark");
    setTheme(activeTheme);
    
    if (activeTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    
    if (nextTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (pathname !== "/") {
      router.push("/" + href);
    } else {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const offset = 80; // height of the navbar
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 w-full bg-[var(--navbar-bg)] backdrop-blur-md border-b border-[var(--navbar-border)] py-4 shadow-xl transition-all duration-300"
      >
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            
            {/* Unique Monogram Logo & Brand Wordmark */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "#home")}
              className="flex items-center group cursor-pointer"
            >
              {/* Unique Double-Diamond Monogram F Logo */}
              <svg
                className="w-9 h-9 text-gold-500 mr-3 transition-transform duration-500 group-hover:rotate-45"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Thin outer decorative border */}
                <path d="M50 5 L95 50 L50 95 L5 50 Z" strokeWidth="0.75" stroke="rgba(197, 168, 128, 0.4)" />
                {/* Inner double-diamond grid */}
                <path d="M50 12 L88 50 L50 88 L12 50 Z" />
                {/* Interlocking Monogram F letter */}
                <path d="M38 35 H62 M38 48 H55 M38 35 V68 M38 68 H46" strokeWidth="2.5" />
              </svg>
              
              <span className="font-serif text-xl md:text-2xl font-bold tracking-[0.18em] text-[var(--navbar-fg)] uppercase transition-colors group-hover:text-gold-500">
                {siteConfig.name}
              </span>
            </a>

            {/* Desktop Navigation Link Directory - Reduced spacing to space-x-4 xl:space-x-7 to prevent cramping */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-7">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="relative text-xs tracking-widest uppercase font-medium text-[var(--navbar-fg-muted)] hover:text-gold-500 transition-colors py-2 group cursor-pointer"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Theme Toggle, Wishlist, Cart & Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              
              {/* Wishlist Icon Button */}
              <button
                onClick={() => setWishlistOpen(true)}
                className="p-2.5 rounded-full hover:bg-gold-500/10 text-[var(--navbar-fg)] hover:text-gold-500 transition-colors cursor-pointer relative"
                aria-label="Open Wishlist"
              >
                <Heart size={18} className={cn(wishlist.length > 0 && "fill-current text-red-500")} />
                {wishlist.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-4 h-4 bg-red-500 text-white rounded-full flex items-center justify-center text-[8px] font-bold px-1 animate-pulse">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Shopping Bag Cart Icon Button */}
              <button
                onClick={() => setCartOpen(true)}
                className="p-2.5 rounded-full hover:bg-gold-500/10 text-[var(--navbar-fg)] hover:text-gold-500 transition-colors cursor-pointer relative"
                aria-label="Open Shopping Bag"
              >
                <ShoppingBag size={18} />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-4 h-4 bg-gold-500 text-charcoal-950 rounded-full flex items-center justify-center text-[8px] font-bold px-1">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-full hover:bg-gold-500/10 text-[var(--navbar-fg)] hover:text-gold-500 transition-colors cursor-pointer"
                aria-label="Toggle Color Theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>

            {/* Mobile Actions (Hamburger, Cart, Wishlist, Theme) */}
            <div className="flex items-center space-x-1 lg:hidden">
              
              {/* Wishlist Trigger */}
              <button
                onClick={() => setWishlistOpen(true)}
                className="p-2 text-[var(--navbar-fg)] hover:text-gold-500 transition-colors cursor-pointer relative"
                style={{ minWidth: "40px", minHeight: "40px" }}
                aria-label="Open Wishlist"
              >
                <Heart size={18} className={cn(wishlist.length > 0 && "fill-current text-red-500")} />
                {wishlist.length > 0 && (
                  <span className="absolute top-1 right-1 min-w-3.5 h-3.5 bg-red-500 text-white rounded-full flex items-center justify-center text-[7px] font-bold px-0.5">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Cart Trigger */}
              <button
                onClick={() => setCartOpen(true)}
                className="p-2 text-[var(--navbar-fg)] hover:text-gold-500 transition-colors cursor-pointer relative"
                style={{ minWidth: "40px", minHeight: "40px" }}
                aria-label="Open Shopping Bag"
              >
                <ShoppingBag size={18} />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 min-w-3.5 h-3.5 bg-gold-500 text-charcoal-950 rounded-full flex items-center justify-center text-[7px] font-bold px-0.5">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Theme Switch */}
              <button
                onClick={toggleTheme}
                className="p-2 text-[var(--navbar-fg)] hover:text-gold-500 transition-colors cursor-pointer rounded-lg"
                style={{ minWidth: "40px", minHeight: "40px" }}
                aria-label="Toggle Color Theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              
              {/* Menu Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[var(--navbar-fg)] hover:text-gold-500 transition-colors cursor-pointer rounded-lg"
                style={{ minWidth: "40px", minHeight: "40px" }}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[72px] z-30 bg-[var(--background)] flex flex-col p-6 lg:hidden border-t border-theme-gold/15 overflow-y-auto"
          >
            <div className="flex flex-col space-y-5 pt-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-base font-serif tracking-widest uppercase text-theme-title/90 hover:text-gold-500 transition-colors py-2 flex items-center justify-between border-b border-theme-gold/10"
                  style={{ minHeight: "44px" }}
                >
                  {link.label}
                  <ArrowRight size={14} className="text-gold-800" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Shopping Cart Slide-over Drawer */}
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      {/* Wishlist Slide-over Drawer */}
      <WishlistDrawer
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
      />
    </>
  );
}
