"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppWidget() {
  const phoneNumber = "919015011814";
  const customMessage = "Hello Jhabe Ram ji, I am interested in booking a stay at Valley View Home Stay. Please guide me with room availability and details.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(customMessage)}`;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3 group">
      {/* Outer pulsing ring for strong premium visual cue */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none"
        aria-label="Chat with Jhabe Ram on WhatsApp"
      >
        {/* Subtle continuous pulsing background glow */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 duration-1000"></span>
        <FaWhatsapp size={32} className="relative z-10 drop-shadow-sm" />
      </a>

      {/* Premium capsule label sliding in on hover */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 bg-white/95 backdrop-blur-md text-[#102B20] text-xs font-semibold px-4 py-2.5 rounded-full shadow-xl border border-black/5 pointer-events-none group-hover:pointer-events-auto flex items-center gap-2"
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
        <span className="tracking-wide">Chat with Jhabe Ram</span>
      </a>
    </div>
  );
}
