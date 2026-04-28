"use client";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const images = [
  // 1. Hut (Large 2x2)
  "https://images.unsplash.com/photo-1542314831-c6a4d14eff50?auto=format&fit=crop&q=80&w=1200",
  // 2. Bonfire (1x1)
  "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=800",
  // 3. Mountains (1x1)
  "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800",
  // 4. Bedroom (1x1)
  "https://images.unsplash.com/photo-1522771731470-ea433e3e8f67?auto=format&fit=crop&q=80&w=800",
  // 5. Log Cabin Exterior (2x1)
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
  // 6. Balcony view (1x1)
  "https://images.unsplash.com/photo-1544325796-096057a62174?auto=format&fit=crop&q=80&w=800",
  // 7. Trekking (1x1)
  "https://images.unsplash.com/photo-1525328437458-0c4d4db7cab4?auto=format&fit=crop&q=80&w=800",
  // 8. River isolated (1x1)
  "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?auto=format&fit=crop&q=80&w=800"
];

// Exact CSS grid spans to recreate the mockup layout
const layoutClasses = [
  "md:col-span-2 md:row-span-2 col-span-2", // 0
  "md:col-span-1 col-span-1", // 1
  "md:col-span-1 col-span-1", // 2
  "md:col-span-1 col-span-1 md:col-start-3", // 3 (leaves col 4 blank automatically)
  "md:col-span-2 col-span-2", // 4
  "md:col-span-1 col-span-1", // 5
  "md:col-span-1 col-span-1", // 6
  "md:col-span-1 col-span-1"  // 7
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 px-6 md:px-12 bg-brand-cream relative z-0">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.3em] text-xs font-bold mb-6 block text-[#102B20]/60">
            Gallery
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-[#102B20]">
            A glimpse into<br />
            <span className="italic text-[#102B20]/80">your mountain days</span>
          </h2>
        </div>

        {/* CSS Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[260px]">
          {images.map((img, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl md:rounded-[2rem] shadow-sm group cursor-pointer ${layoutClasses[index]}`}
              onClick={() => setSelectedImg(img)}
            >
              <img 
                src={img} 
                alt={`Gallery ${index}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-[#102B20]/0 group-hover:bg-[#102B20]/30 transition-colors flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity scale-50 group-hover:scale-100 duration-300" size={48} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          className="fixed inset-0 z-50 bg-[#102B20]/95 flex items-center justify-center p-4 cursor-pointer transition-opacity"
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-brand-sky transition-colors backdrop-blur-md bg-white/10 rounded-full p-2"
            onClick={() => setSelectedImg(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImg}
            alt="Enlarged view"
            className="max-w-[90vw] max-h-[90vh] rounded-2xl shadow-2xl transition-transform object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
