"use client";
import { Calendar, PhoneCall } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Premium Overlays */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[40s] hover:scale-110"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop')" }}
      >
        {/* Base dimming layer for text legibility */}
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Soft bottom gradient blending flawlessly into the brand green theme */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#102B20] via-black/20 to-transparent"></div>
        {/* Top gradient to ensure navbar legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent h-48"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-brand-cream px-6 w-full max-w-7xl mx-auto mt-20">
        <span className="uppercase tracking-[0.3em] text-sm md:text-base font-semibold mb-6 block drop-shadow-md text-brand-sky">
          WELCOME TO VALLEY VIEW HOMESTAY
        </span>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight drop-shadow-2xl whitespace-nowrap">
          Experience Serenity<br/>in Sainj Valley
        </h1>
        
        <p className="text-lg md:text-2xl font-light mb-12 max-w-2xl mx-auto drop-shadow-lg text-brand-cream/90">
          Your luxury home in the Himalayas. Reconnect with nature in our peaceful, premium retreat.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a
            href="https://wa.me/919805505056?text=I'm%20interested%20in%20booking%20a%20room%20at%20Valley%20View%20Home%20Stay"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-cream text-[#102B20] px-8 py-4 rounded-full font-bold hover:bg-white transition-all shadow-2xl hover:-translate-y-1 w-full sm:w-auto justify-center tracking-wide"
          >
            <Calendar size={20} />
            Book Now
          </a>
          <a
            href="tel:+919805505056"
            className="flex items-center gap-2 bg-black/20 backdrop-blur-md border border-brand-cream/50 text-brand-cream px-8 py-4 rounded-full font-semibold hover:bg-black/40 hover:border-white transition-all shadow-2xl hover:-translate-y-1 w-full sm:w-auto justify-center tracking-wide"
          >
            <PhoneCall size={20} />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
