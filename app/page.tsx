import Hero from "@/components/sections/Hero";
import Categories from "@/components/sections/Categories";
import FragrenceChoice from "@/components/sections/FragrenceChoice";
import GiftHampers from "@/components/sections/GiftHampers";
import Encyclopedia from "@/components/sections/Encyclopedia";
import Offers from "@/components/sections/Offers";
import WhyUs from "@/components/sections/WhyUs";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex-grow">
      {/* 1. Hero Landing Block */}
      <Hero />
      
      {/* 2. Product Catalog Categories */}
      <Categories />
      
      {/* 3. Interactive Quiz scent recommendation */}
      <FragrenceChoice />
      
      {/* 4. Customized Gift Arrangement Hampers */}
      <GiftHampers />
      
      {/* 5. Educational Scent Encyclopedia */}
      <Encyclopedia />
      
      {/* 6. Active Promotions and Seasonal Benefits */}
      <Offers />
      
      {/* 7. Core Stat Credibility Grid */}
      <WhyUs />
      
      {/* 8. Founder Story & Ownership Legacy */}
      <About />
      
      {/* 9. Contact form, Click-to-call link and Google Maps */}
      <Contact />
    </main>
  );
}
