"use client";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const images = [
  "/gallery/IMG-20260428-WA0041.jpg",
  "/gallery/IMG20260107104221.jpg",
  "/gallery/IMG20260113085626.jpg",
  "/gallery/IMG20260113091007.jpg",
  "/gallery/IMG20260115152548.jpg",
  "/gallery/IMG20260115152604.jpg",
  "/gallery/IMG20260124084241.jpg",
  "/gallery/IMG20260124085712.jpg",
  "/gallery/IMG20260124092649.jpg",
  "/gallery/IMG20260124093909.jpg",
  "/gallery/IMG20260124094112.jpg",
  "/gallery/IMG20260124094123.jpg",
  "/gallery/IMG20260124095323.jpg",
  "/gallery/IMG20260124095559_01.jpg",
  "/gallery/IMG20260124095839.jpg",
  "/gallery/IMG20260124114604.jpg",
  "/gallery/IMG20260124114738.jpg",
  "/gallery/IMG20260124114808.jpg",
  "/gallery/IMG20260128084838.jpg",
  "/gallery/IMG20260128084843.jpg",
  "/gallery/IMG20260128084902.jpg",
  "/gallery/IMG20260128084927.jpg",
  "/gallery/IMG20260128160030.jpg",
  "/gallery/IMG20260128182015.jpg",
  "/gallery/IMG20260129075141.jpg",
  "/gallery/IMG20260129075155.jpg",
  "/gallery/IMG20260129075206.jpg",
  "/gallery/IMG20260316134108.jpg",
  "/gallery/IMG20260316151527.jpg",
  "/gallery/IMG20260317103552.jpg",
  "/gallery/IMG20260317103736.jpg",
  "/gallery/IMG20260317103930.jpg",
  "/gallery/IMG20260323091105.jpg",
  "/gallery/IMG20260323094359.jpg",
  "/gallery/IMG20260323094759.jpg"
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
              className={`relative overflow-hidden rounded-2xl md:rounded-[2rem] shadow-sm group cursor-pointer ${layoutClasses[index % layoutClasses.length]}`}
              onClick={() => setSelectedImg(img)}
            >
              <img 
                src={img} 
                alt={`Gallery ${index}`} 
                loading="lazy"
                decoding="async"
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
          className="fixed inset-0 z-50 bg-[#102B20]/95 flex items-center justify-center p-4 cursor-pointer transition-opacity backdrop-blur-sm animate-fade-in"
        >
          <button 
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black/60 hover:bg-black border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95 shadow-2xl z-50"
            onClick={() => setSelectedImg(null)}
            aria-label="Close enlarged view"
          >
            <X size={28} />
          </button>
          <img
            src={selectedImg}
            alt="Enlarged view"
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
