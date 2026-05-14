"use client";
import { Calendar, PhoneCall, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Premium Overlays */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[40s] hover:scale-110"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop')" }}
      >
        {/* Deep rich dimming layer for text legibility and contrast */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Soft bottom gradient blending flawlessly into the brand green theme */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#102B20] via-black/30 to-transparent"></div>
        {/* Subtle vignette/radial glow for center subject emphasis */}
        <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/60"></div>
        {/* Top gradient to ensure navbar legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent h-48"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-brand-cream px-6 w-full max-w-7xl mx-auto mt-16 sm:mt-20">
        
        {/* Premium Capsule Tag */}
        <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md border border-[#E5C27C]/40 text-[#E5C27C] px-5 py-2 rounded-full text-xs sm:text-sm tracking-[0.25em] font-medium mb-8 shadow-2xl animate-fade-in">
          <Sparkles size={14} className="text-[#E5C27C] animate-pulse" />
          <span>LUXURY HIMALAYAN RETREAT</span>
        </div>
        
        {/* Main Striking Title */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.15] drop-shadow-2xl max-w-5xl mx-auto tracking-wide">
          Experience <span className="italic font-normal text-[#E5C27C] underline decoration-white/20 underline-offset-[10px]">Serenity</span><br/>
          in Sainj Valley
        </h1>
        
        {/* Subtitle / Descriptive Copy */}
        <p className="text-xl sm:text-2xl md:text-3xl font-light mb-12 max-w-3xl mx-auto drop-shadow-xl text-brand-cream/95 leading-relaxed tracking-wide">
          Your pristine home in the Himalayas. Reconnect with nature in our peaceful, premium retreat.
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center max-w-md mx-auto sm:max-w-none">
          <a
            href="https://wa.me/919805505056?text=I'm%20interested%20in%20booking%20a%20room%20at%20Valley%20View%20Home%20Stay"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#E5C27C] text-[#102B20] px-8 py-4 sm:py-4.5 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-2xl hover:-translate-y-1 w-full sm:w-auto tracking-wide group"
          >
            <Calendar size={22} className="text-[#102B20] group-hover:scale-110 transition-transform" />
            <span>Book Now</span>
          </a>
          <a
            href="tel:+919805505056"
            className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/40 text-white px-8 py-4 sm:py-4.5 rounded-full font-semibold text-lg hover:bg-white/20 hover:border-white transition-all duration-300 shadow-2xl hover:-translate-y-1 w-full sm:w-auto tracking-wide"
          >
            <PhoneCall size={22} />
            <span>Call Now</span>
          </a>
        </div>

      </div>
    </section>
  );
}
