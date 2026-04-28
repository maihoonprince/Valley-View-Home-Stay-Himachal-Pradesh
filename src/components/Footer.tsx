"use client";
import { Mountain, MapPin, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#143224] text-brand-cream/90 py-16 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-16">
        
        {/* Left Col - Brand */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Mountain size={28} className="text-white" />
            <h3 className="font-serif text-2xl font-bold text-white tracking-wide">Valley View Home Stay</h3>
          </div>
          <p className="text-brand-cream/90 max-w-sm leading-relaxed mb-6 font-light">
            A quiet Himalayan retreat in Sainj Valley — run with love by Jhabe Ram and family.
          </p>
          <p className="text-xs text-brand-cream/50 tracking-wide">
            Registered under HP Tourism Act, 2002
          </p>
        </div>
        
        {/* Middle Col - Location */}
        <div>
          <h4 className="font-sans text-xl mb-6 text-brand-cream/80 tracking-wide">Visit</h4>
          <div className="flex items-start gap-4 text-brand-cream/90 font-light">
             <MapPin size={20} className="shrink-0 mt-1 opacity-70" />
             <p className="leading-relaxed">
               Vill: Sainj, P.O. & Tehsil: Sainj<br />
               District Kullu, Himachal Pradesh
             </p>
          </div>
        </div>
        
        {/* Right Col - Contact */}
        <div>
          <h4 className="font-sans text-xl mb-6 text-brand-cream/80 tracking-wide">Reach Out</h4>
          <div className="flex flex-col gap-5 text-brand-cream/90 font-light">
             <a href="tel:+919805505056" className="flex items-center gap-4 hover:text-white transition-colors">
               <Phone size={18} className="opacity-70" />
               +91 98055 05056
             </a>
             <a href="https://wa.me/919805505056" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-white transition-colors">
               <MessageCircle size={18} className="opacity-70" />
               WhatsApp Booking
             </a>
          </div>
        </div>
        
      </div>
      
      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-brand-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between text-brand-cream/60 text-xs tracking-wide">
        <p>&copy; {new Date().getFullYear()} Valley View Home Stay. All rights reserved.</p>
        <p className="mt-4 md:mt-0 italic font-light tracking-wide text-brand-cream/50">Made with love in the mountains.</p>
      </div>

    </footer>
  );
}
