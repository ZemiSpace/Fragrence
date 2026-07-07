"use client";

import { MessageCircle, ArrowUp } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  const handleScrollTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleFooterLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-950 border-t border-gold-900/15 pt-20 pb-8 text-charcoal-300 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-gold-900/10">
          {/* Logo & Tagline Column */}
          <div className="lg:col-span-5 space-y-6">
            <a
              href="#home"
              onClick={(e) => handleFooterLinkClick(e, "#home")}
              className="font-serif text-3xl font-semibold tracking-[0.2em] text-gold-100 uppercase block hover:text-gold-400 transition-colors"
            >
              {siteConfig.name}
            </a>
            
            <p className="text-sm font-light leading-relaxed max-w-sm text-charcoal-400">
              Surat&apos;s premier boutique destination for original luxury & designer perfumes, Concentrated Attars, and bespoke gift arrangements. Experience the legacy of scent curation since {siteConfig.established}.
            </p>

            {/* Social Handles Icons */}
            <div className="flex items-center space-x-4">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-charcoal-900 border border-gold-900/10 text-charcoal-400 hover:text-gold-400 hover:border-gold-500/40 transition-colors cursor-pointer flex items-center justify-center"
                aria-label="Follow Fragnence Surat on Instagram"
              >
                <svg
                  className="h-[18px] w-[18px] stroke-current fill-none stroke-[2]"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-charcoal-900 border border-gold-900/10 text-charcoal-400 hover:text-gold-400 hover:border-gold-500/40 transition-colors cursor-pointer flex items-center justify-center"
                aria-label="Follow Fragnence Surat on Facebook"
              >
                <svg
                  className="h-[18px] w-[18px] fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-charcoal-900 border border-gold-900/10 text-charcoal-400 hover:text-[#25D366] hover:border-[#25D366]/40 transition-colors cursor-pointer"
                aria-label="Chat with Fragnence Surat on WhatsApp"
              >
                <MessageCircle size={18} className="fill-current" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-gold-400">Boutique Directory</h4>
            <ul className="space-y-3.5">
              {[
                { href: "#home", label: "Home" },
                { href: "#products", label: "Product Catalog" },
                { href: "#choice", label: "Scent Finder Quiz" },
                { href: "#hampers", label: "Custom Hampers" },
                { href: "#encyclopedia", label: "Scent Encyclopedia" },
                { href: "#offers", label: "Festive Offers" },
                { href: "#why-us", label: "About Our Legacy" },
                { href: "#contact", label: "Send An Enquiry" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleFooterLinkClick(e, link.href)}
                    className="text-sm font-light text-charcoal-400 hover:text-gold-300 transition-colors cursor-pointer hover:underline underline-offset-4 decoration-gold-900/40"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* repeated Contact Details Column */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-gold-400">Visit Boutique</h4>
            <div className="space-y-4 text-sm font-light text-charcoal-400 leading-relaxed">
              <p>
                <strong className="text-gold-200 font-semibold block mb-0.5">Address:</strong>
                {siteConfig.address}
              </p>
              <p>
                <strong className="text-gold-200 font-semibold block mb-0.5">Phone:</strong>
                <a href={`tel:${siteConfig.phoneFormatted}`} className="hover:text-gold-300 transition-colors hover:underline">
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <strong className="text-gold-200 font-semibold block mb-0.5">Corporate Enquiries:</strong>
                {siteConfig.email}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom footer credit & Scroll-to-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal-500 font-light">
          <p className="mb-4 sm:mb-0">
            &copy; {currentYear} {siteConfig.name} Perfumes Surat. All Rights Reserved. Designed with Luxury.
          </p>
          
          <button
            onClick={handleScrollTop}
            className="p-3 rounded-full bg-charcoal-900 border border-gold-900/10 hover:border-gold-500/40 text-gold-500 hover:text-gold-400 hover:-translate-y-0.5 transition-all cursor-pointer shadow-lg"
            title="Scroll to Top"
            aria-label="Scroll back to top of page"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
