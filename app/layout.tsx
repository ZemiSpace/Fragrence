import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { siteConfig } from "@/data/siteConfig";
import "./globals.css";

import { CartProvider } from "@/lib/CartContext";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Luxury & Designer Perfume Boutique`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.seo.description,
  keywords: [
    "Perfume store Surat",
    "Luxury perfumes Surat",
    "Designer perfumes Gujarat",
    "Best attar store Surat",
    "Custom gift hampers Surat",
    "Fragrence Surat Ester Lee",
    "Magan Lal perfume Surat",
    "Surat perfume boutique",
    "Scent recommendation Surat"
  ],
  authors: [{ name: siteConfig.owner }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://fragrenceperfumes.com",
    title: `${siteConfig.name} | Luxury & Designer Perfume Boutique in Surat`,
    description: siteConfig.seo.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "https://fragrenceperfumes.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Perfumes Surat`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Luxury & Designer Perfume Boutique`,
    description: siteConfig.seo.description,
    images: ["https://fragrenceperfumes.com/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal?: React.ReactNode;
}>) {
  // LocalBusiness structured schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.name,
    "image": "https://fragrenceperfumes.com/images/luxury.jpg", // Fallback URL
    "@id": "https://fragrenceperfumes.com/#localbusiness",
    "url": "https://fragrenceperfumes.com",
    "telephone": siteConfig.phone,
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ground Floor, Luxury Arcade, Ghod Dod Road",
      "addressLocality": siteConfig.city,
      "addressRegion": siteConfig.state,
      "postalCode": "395007",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.159340,
      "longitude": 72.738228
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "10:00",
      "closes": "21:00"
    },
    "sameAs": [
      siteConfig.socials.instagram,
      siteConfig.socials.facebook
    ],
    "founder": {
      "@type": "Person",
      "name": siteConfig.founder
    },
    "owner": {
      "@type": "Person",
      "name": siteConfig.owner
    },
    "foundingDate": String(siteConfig.established)
  };

  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} scroll-smooth`}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* ANALYTICS INJECTION PLACEHOLDERS
            =================================
            Uncomment and replace with real IDs when deploying.

            1. Google Analytics (gtag.js)
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-XXXXXXXXXX', { page_path: window.location.pathname });
                `
              }}
            />

            2. Meta Pixel (Facebook Pixel)
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', 'XXXXXXXXXXXXXXXX');
                  fbq('track', 'PageView');
                `
              }}
            />
            <noscript>
              <img height="1" width="1" style={{ display: 'none' }}
                   src="https://www.facebook.com/tr?id=XXXXXXXXXXXXXXXX&ev=PageView&noscript=1" />
            </noscript>
        */}
      </head>
      <body className="bg-charcoal-950 text-gold-100 font-sans antialiased min-h-screen flex flex-col selection:bg-gold-500 selection:text-charcoal-950">
        <CartProvider>
          <Navbar />
          {children}
          {modal}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
