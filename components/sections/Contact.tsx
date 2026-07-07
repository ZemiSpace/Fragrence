"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone, MapPin, Clock, Mail, Send, CheckCircle2, MessageCircle, AlertCircle } from "lucide-react";
import { contactFormSchema, ContactFormData } from "@/lib/validators";
import { siteConfig } from "@/data/siteConfig";

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      enquiryType: "general",
      message: "",
    },
  });

  // Listen to cross-component pre-fill requests
  useEffect(() => {
    const handlePrefill = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) {
        if (customEvent.detail.type) {
          setValue("enquiryType", customEvent.detail.type);
        }
        if (customEvent.detail.message) {
          setValue("message", customEvent.detail.message);
        }
      }
    };
    window.addEventListener("select-enquiry-type", handlePrefill);
    return () => window.removeEventListener("select-enquiry-type", handlePrefill);
  }, [setValue]);

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);

    // Simulated API call / Backend Email trigger
    // ==========================================
    // To connect a real backend:
    // 1. You can swap this with a fetch request to your Next.js API Route, e.g.
    //    await fetch('/api/enquiry', { method: 'POST', body: JSON.stringify(data) })
    // 2. Or integrate a third-party form handler like Formspree or EmailJS:
    //    await fetch('https://formspree.io/f/your_form_id', { method: 'POST', ... })
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setLoading(false);
    setSuccess(true);
    reset();

    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-charcoal-900 relative border-t border-gold-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-500 mb-3">
            Get In Touch
          </h2>
          <p className="text-3xl md:text-5xl font-serif font-light tracking-wide text-gold-100 mb-6">
            Bespoke <span className="font-normal italic text-gold-400">Consultation & Enquiry</span>
          </p>
          <div className="h-[1px] w-24 bg-gold-900/40 mx-auto mb-6" />
          <p className="text-base text-charcoal-300 leading-relaxed max-w-xl mx-auto font-light">
            Have questions about a fragrance? Want to design a custom corporate gift hamper? Reach out, and our store associates will assist you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Store Info Card & Map Column */}
          <div className="lg:col-span-5 flex flex-col justify-start space-y-6 h-full">
            
            {/* Info details */}
            <div className="p-8 rounded-2xl glass-panel relative gold-border-glow space-y-6 shrink-0">
              <h3 className="text-xl font-serif text-gold-200 tracking-wide mb-2">Fragnence Boutique</h3>
              
              <div className="flex items-start text-sm">
                <MapPin className="text-gold-500 mr-4 shrink-0 mt-0.5" size={18} />
                <div>
                  <h4 className="font-semibold text-gold-100 uppercase tracking-wider text-xs mb-1">Our Location</h4>
                  <p className="text-charcoal-300 leading-relaxed font-light">{siteConfig.address}</p>
                </div>
              </div>

              {/* Click-to-call link for Mobile functionality */}
              <div className="flex items-start text-sm">
                <Phone className="text-gold-500 mr-4 shrink-0 mt-0.5" size={18} />
                <div>
                  <h4 className="font-semibold text-gold-100 uppercase tracking-wider text-xs mb-1">Call / WhatsApp</h4>
                  <a
                    href={`tel:${siteConfig.phoneFormatted}`}
                    className="text-gold-300 hover:text-gold-400 transition-colors font-medium text-base block mb-0.5 hover:underline"
                    title="Click to dial number"
                  >
                    {siteConfig.phone}
                  </a>
                  <a 
                    href={siteConfig.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-charcoal-400 hover:text-[#25D366] transition-colors inline-flex items-center"
                  >
                    <MessageCircle size={12} className="mr-1 fill-current" />
                    Chat instantly on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start text-sm">
                <Mail className="text-gold-500 mr-4 shrink-0 mt-0.5" size={18} />
                <div>
                  <h4 className="font-semibold text-gold-100 uppercase tracking-wider text-xs mb-1">Email Correspondence</h4>
                  <p className="text-charcoal-300 font-light">{siteConfig.email}</p>
                </div>
              </div>

              <div className="flex items-start text-sm">
                <Clock className="text-gold-500 mr-4 shrink-0 mt-0.5" size={18} />
                <div>
                  <h4 className="font-semibold text-gold-100 uppercase tracking-wider text-xs mb-1">Boutique Hours</h4>
                  <p className="text-charcoal-300 font-light">{siteConfig.hours}</p>
                </div>
              </div>
            </div>

            {/* Google Map Embedded Location */}
            <div className="w-full min-h-[300px] lg:min-h-[350px] flex-grow rounded-2xl overflow-hidden border border-gold-900/20 shadow-lg relative">
              <iframe
                src={siteConfig.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fragnence Perfumes Surat Store Map Location"
              />
            </div>
            
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-12 rounded-2xl glass-panel relative gold-border-glow h-full flex flex-col justify-start">
              
              {success && (
                <div className="p-5 rounded-xl bg-gold-950/40 border border-[#25D366]/40 text-[#25D366] flex items-start space-x-3 mb-6 animate-scale-up">
                  <CheckCircle2 className="shrink-0 mt-0.5" size={18} />
                  <div>
                    <h4 className="font-semibold text-sm">Enquiry Submitted Successfully</h4>
                    <p className="text-xs text-charcoal-300 mt-1 font-light leading-relaxed">
                      Thank you for contacting Fragnence. Our fragrance advisors in Surat will review your specifications and contact you on the phone number provided within 2-4 hours.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="name" className="text-xs uppercase tracking-widest font-semibold text-gold-400">
                      Full Name <span className="text-gold-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. Ester Lee"
                      {...register("name")}
                      className={`bg-charcoal-950 border ${
                        errors.name ? "border-red-500/40 focus:border-red-500" : "border-gold-900/30 focus:border-gold-500"
                      } rounded-xl p-3.5 text-sm text-gold-200 outline-none transition-colors`}
                      style={{ minHeight: "44px" }}
                    />
                    {errors.name && (
                      <span className="text-xs text-red-400 flex items-center mt-1">
                        <AlertCircle size={12} className="mr-1" />
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Phone Input */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="phone" className="text-xs uppercase tracking-widest font-semibold text-gold-400">
                      Contact Number <span className="text-gold-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      inputMode="tel"
                      placeholder="e.g. +91 98765 43210"
                      {...register("phone")}
                      className={`bg-charcoal-950 border ${
                        errors.phone ? "border-red-500/40 focus:border-red-500" : "border-gold-900/30 focus:border-gold-500"
                      } rounded-xl p-3.5 text-sm text-gold-200 outline-none transition-colors`}
                      style={{ minHeight: "44px" }}
                    />
                    {errors.phone && (
                      <span className="text-xs text-red-400 flex items-center mt-1">
                        <AlertCircle size={12} className="mr-1" />
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email Input (Optional) */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="email" className="text-xs uppercase tracking-widest font-semibold text-gold-400">
                      Email Address <span className="text-charcoal-500 text-[10px] lowercase">(optional)</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="e.g. name@email.com"
                      {...register("email")}
                      className={`bg-charcoal-950 border ${
                        errors.email ? "border-red-500/40 focus:border-red-500" : "border-gold-900/30 focus:border-gold-500"
                      } rounded-xl p-3.5 text-sm text-gold-200 outline-none transition-colors`}
                      style={{ minHeight: "44px" }}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-400 flex items-center mt-1">
                        <AlertCircle size={12} className="mr-1" />
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  {/* Enquiry Type Dropdown */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="enquiryType" className="text-xs uppercase tracking-widest font-semibold text-gold-400">
                      Enquiry Nature <span className="text-gold-500">*</span>
                    </label>
                    <select
                      id="enquiryType"
                      {...register("enquiryType")}
                      className="bg-charcoal-950 border border-gold-900/30 rounded-xl p-3.5 text-sm text-gold-200 focus:border-gold-500 outline-none transition-colors cursor-pointer"
                      style={{ minHeight: "44px" }}
                    >
                      <option value="general">General Store Enquiry</option>
                      <option value="recommendation">Fragrance Recommendation</option>
                      <option value="gift-hamper">Custom Gift Hamper</option>
                      <option value="corporate-bulk">Bulk / Corporate Order</option>
                    </select>
                    {errors.enquiryType && (
                      <span className="text-xs text-red-400 flex items-center mt-1">
                        <AlertCircle size={12} className="mr-1" />
                        {errors.enquiryType.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Message Input */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest font-semibold text-gold-400">
                    Your Specifications / Enquiry Details <span className="text-gold-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="e.g. Please suggest woody perfumes with strong projection. Or specify details of the gift hampers required."
                    {...register("message")}
                    className={`bg-charcoal-950 border ${
                      errors.message ? "border-red-500/40 focus:border-red-500" : "border-gold-900/30 focus:border-gold-500"
                    } rounded-xl p-3.5 text-sm text-gold-200 outline-none transition-colors resize-none`}
                  />
                  {errors.message && (
                    <span className="text-xs text-red-400 flex items-center mt-1">
                      <AlertCircle size={12} className="mr-1" />
                      {errors.message.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center bg-gold-500 hover:bg-gold-400 disabled:bg-gold-700 disabled:opacity-50 text-charcoal-950 py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(197,168,128,0.4)] active:scale-[0.98] cursor-pointer"
                  style={{ minHeight: "48px" }}
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-charcoal-950" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Transmitting Specifications...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Submit Store Enquiry
                      <Send size={12} className="ml-2" />
                    </span>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
