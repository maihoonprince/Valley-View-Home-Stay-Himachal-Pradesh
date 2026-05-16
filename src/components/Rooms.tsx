"use client";
import { useState } from "react";
import { 
  BedDouble, 
  Mountain, 
  Sparkles, 
  CheckCircle2, 
  Wifi, 
  Coffee, 
  MessageCircle, 
  Maximize2,
  X 
} from "lucide-react";

const roomImages = [
  { src: "/rooms & views/Room.jpg", alt: "Deluxe Bedroom Interior", category: "interior" },
  { src: "/rooms & views/room2.jpg", alt: "Cozy Double Bed Setup", category: "interior" },
  { src: "/rooms & views/room3.jpg", alt: "Spacious Room Layout", category: "interior" },
  { src: "/rooms & views/room 4.jpg", alt: "Comfortable Bedroom Details", category: "interior" },
  { src: "/rooms & views/room5.jpg", alt: "Elegant Room Setup", category: "interior" },
  { src: "/rooms & views/room toilet.jpg", alt: "Attached Clean Washroom", category: "interior" },
  { src: "/rooms & views/balcony view 1.jpg", alt: "Misty Mountain Balcony View", category: "view" },
  { src: "/rooms & views/balcony view 2.jpg", alt: "Scenic Green Valley Horizon", category: "view" },
  { src: "/rooms & views/balcony view 8.jpg", alt: "Golden Hour Mountain Vistas", category: "view" },
  { src: "/rooms & views/balcony view 3.jpg", alt: "Lush Tree Line from Balcony", category: "view" },
  { src: "/rooms & views/balcony view 10.jpg", alt: "Expansive Balcony Panorama", category: "view" },
];

const amenities = [
  { icon: <BedDouble size={20} className="text-[#6B8E70]" />, text: "Plush Double Bedding" },
  { icon: <Mountain size={20} className="text-[#6B8E70]" />, text: "Private Panoramic Balcony" },
  { icon: <Sparkles size={20} className="text-[#6B8E70]" />, text: "Attached Modern Washroom" },
  { icon: <Wifi size={20} className="text-[#6B8E70]" />, text: "High-Speed Wi-Fi Access" },
  { icon: <Coffee size={20} className="text-[#6B8E70]" />, text: "Electric Kettle & Tea Setup" },
  { icon: <CheckCircle2 size={20} className="text-[#6B8E70]" />, text: "Immaculate Housekeeping" },
];

export default function Rooms() {
  const [activeTab, setActiveTab] = useState<"all" | "interior" | "view">("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = roomImages.filter(
    (img) => activeTab === "all" || img.category === activeTab
  );

  return (
    <section id="rooms" className="py-24 px-6 md:px-12 bg-white text-brand-green relative z-0">
      <div className="max-w-7xl mx-auto">
        
        {/* Narrative Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="uppercase tracking-[0.3em] text-xs font-bold mb-4 block text-[#6B8E70]">
            The Stay Experience
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#102B20]">
            Your Private Sanctuary<br />
            <span className="italic font-light text-[#102B20]/80">Above the Clouds</span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-[#102B20]/80 font-light">
            We believe true luxury lies in simplicity, comfort, and an unhindered connection with nature. Rather than overwhelming choices, Valley View Home Stay offers a curated standard of <span className="font-medium text-[#102B20]">six meticulously kept deluxe mountain-view double bedrooms</span>. Each room is designed as a peaceful haven where you can wake up to misty pine slopes, sip your morning tea overlooking the valley, and unwind in pristine comfort.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="bg-brand-cream rounded-[2rem] p-8 md:p-12 mb-16 shadow-xl border border-black/5">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-center mb-10 text-[#102B20]">
            Unified Premium Standards Across All Rooms
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {amenities.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white/60 backdrop-blur-sm p-4 md:p-5 rounded-2xl border border-white shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 bg-[#102B20]/5 rounded-xl shrink-0">
                  {item.icon}
                </div>
                <span className="font-medium text-[#102B20]/90 text-base">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Visual Showcase */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10">
            <div>
              <h3 className="font-serif text-3xl font-bold text-[#102B20]">
                Rooms & Views Gallery
              </h3>
              <p className="text-sm text-[#102B20]/70 mt-1">
                Click any image to expand and view the serene details
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex bg-brand-cream p-1.5 rounded-full border border-black/5 shadow-inner self-stretch sm:self-auto justify-center">
              {(["all", "interior", "view"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all capitalize ${
                    activeTab === tab
                      ? "bg-[#102B20] text-white shadow-md"
                      : "text-[#102B20]/70 hover:text-[#102B20]"
                  }`}
                >
                  {tab === "all" ? "All Photos" : `${tab}s`}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(img.src)}
                className="relative h-72 rounded-2xl overflow-hidden shadow-md group cursor-pointer border border-black/5 bg-[#102B20]/5"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div className="flex items-center justify-between text-white">
                    <span className="text-sm font-medium tracking-wide drop-shadow">{img.alt}</span>
                    <Maximize2 size={16} className="shrink-0 ml-2 drop-shadow" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transparent Pricing & Unified Booking CTA Banner */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#102B20] via-[#143224] to-[#1B4332] text-white p-8 md:p-14 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Subtle Background Glows */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-sky/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-xl text-center md:text-left">
            <span className="inline-block bg-[#E5C27C]/20 border border-[#E5C27C]/40 text-[#E5C27C] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
              Best Guaranteed Rates
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-bold mb-3 tracking-wide">
              Reserve Your Himalayan Home
            </h3>
            <p className="text-brand-cream/80 text-base md:text-lg font-light leading-relaxed">
              Skip the booking fees and automated platforms. Chat directly with host Jhabe Ram to confirm dates, arrange custom meal setups, and experience authentic hospitality.
            </p>
          </div>

          <div className="relative z-10 shrink-0 flex flex-col items-center md:items-end gap-3 w-full md:w-auto">
            <div className="text-center md:text-right mb-2">
              <span className="text-xs text-brand-cream/70 uppercase tracking-widest block font-light">Starting At</span>
              <div className="flex items-baseline justify-center md:justify-end gap-1.5">
                <span className="font-serif text-4xl md:text-5xl font-bold text-[#E5C27C]">₹2,000</span>
                <span className="text-sm text-brand-cream/80 font-light">/ night</span>
              </div>
            </div>

            <a
              href="https://wa.me/919015011814?text=Hello%20Jhabe%20Ram%20ji,%20I%20am%20interested%20in%20booking%20a%20Deluxe%20Mountain%20View%20Room%20at%20Valley%20View%20Home%20Stay.%20Please%20let%20me%20know%20the%20availability."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#E5C27C] text-[#102B20] px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all shadow-xl hover:-translate-y-1 w-full md:w-auto tracking-wide group"
            >
              <MessageCircle size={22} className="fill-[#102B20] text-[#E5C27C] group-hover:fill-[#102B20] transition-colors" />
              <span>Check Availability</span>
            </a>
            <span className="text-xs text-brand-cream/60 italic font-light">Instant WhatsApp Response</span>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-[#102B20]/95 flex items-center justify-center p-4 cursor-pointer transition-opacity backdrop-blur-sm animate-fade-in"
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black/60 hover:bg-black border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95 shadow-2xl z-50"
            onClick={() => setSelectedImage(null)}
            aria-label="Close expanded view"
          >
            <X size={28} />
          </button>
          <img
            src={selectedImage}
            alt="Expanded view"
            loading="lazy"
            decoding="async"
            className="max-w-[90vw] max-h-[90vh] rounded-2xl shadow-2xl transition-all object-contain animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
