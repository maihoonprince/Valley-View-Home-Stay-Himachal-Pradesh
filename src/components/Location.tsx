"use client";
import { MapPin, Phone, MessageCircle } from "lucide-react";

export default function Location() {
  return (
    <section id="location" className="py-24 px-6 md:px-12 bg-brand-cream relative z-0">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.3em] text-sm font-bold mb-4 block text-[#6B8E70]">
            Find Us
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-[#102B20]">
            Tucked into <span className="italic">Sainj Valley</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* Map Left Component */}
          <div className="lg:w-7/12 w-full h-[500px] lg:h-auto rounded-[2rem] overflow-hidden shadow-2xl relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108920.89311667!2d77.20786!3d31.7699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390457635661a337%3A0xe5a3637175fba1!2sSainj%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '500px' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location for Valley View Home Stay"
            ></iframe>
          </div>

          {/* Address Right Component */}
          <div className="lg:w-5/12 bg-white rounded-[2rem] p-8 md:p-12 shadow-xl flex flex-col justify-center border border-black/5">
            <div className="bg-[#102B20] w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-md shrink-0">
               <MapPin size={22} className="text-white" />
            </div>
            
            <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-[#102B20]">
              Our Address
            </h3>
            
            <p className="text-[#102B20]/80 leading-relaxed mb-10 text-lg">
               Valley View Home Stay<br />
               Village: Sainj<br />
               P.O. & Tehsil: Sainj<br />
               District: Kullu<br />
               Himachal Pradesh, India
            </p>
            
            <div className="flex flex-col gap-4">
              <a 
                href="tel:+919805505056" 
                className="flex items-center px-6 py-4 bg-[#102B20] text-white rounded-full font-medium hover:bg-[#143224] transition-all shadow-lg group"
              >
                <Phone size={18} className="mr-3" />
                <span>Call +91 98055 05056</span>
              </a>
              
              <a 
                href="https://maps.google.com/?q=Sainj,Kullu,Himachal+Pradesh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-6 py-4 border border-[#102B20] text-[#102B20] rounded-full font-medium hover:bg-[#102B20]/5 transition-all group"
              >
                <MapPin size={18} className="mr-3" />
                <span>View on Google Maps</span>
              </a>
              
              <a 
                href="https://wa.me/919805505056" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-6 py-4 border border-[#102B20] text-[#102B20] rounded-full font-medium hover:bg-[#102B20]/5 transition-all group"
              >
                <MessageCircle size={18} className="mr-3" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
