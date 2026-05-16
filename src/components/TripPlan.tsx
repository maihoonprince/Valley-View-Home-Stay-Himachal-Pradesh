"use client";
import { useState } from "react";
import { 
  Compass, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Maximize2, 
  Sparkles,
  X 
} from "lucide-react";

const tripCategories = [
  {
    id: "raila",
    title: "Sainj & Raila Heritage Trail",
    subtitle: "Ancient Architecture & Secret Meadows",
    description: "Explore the timeless timber-and-stone architecture of the twin towers, hear the thundering cascade of the hidden Rupi Raila waterfall, and unwind on the pristine high-altitude Bhatkanda meadows.",
    duration: "4 - 5 Hours",
    distance: "12 km from Homestay",
    images: [
      { src: "/Trip Plan/Twin Tower of Raila.jpg", alt: "Twin Tower of Raila" },
      { src: "/Trip Plan/rupi raila waterfall.jpg", alt: "Rupi Raila Waterfall" },
      { src: "/Trip Plan/Bhatkanda Meadows Raila.jpg", alt: "Bhatkanda Meadows Raila" },
    ]
  },
  {
    id: "shangarh",
    title: "Shangarh Divine Meadows",
    subtitle: "Sacred Grounds & Dense Pines",
    description: "Wander through breathtaking lush green meadows enveloped by dense pine tree boundaries. Seek blessings at the revered historic wood-carved Shangchul Mahadev temple and visit the local waterfall.",
    duration: "3 - 4 Hours",
    distance: "15 km from Homestay",
    images: [
      { src: "/Trip Plan/Sangharh Valley.jpg", alt: "Shangarh Valley Meadow" },
      { src: "/Trip Plan/Shangchul Mahadev Temple Shangharh.jpg", alt: "Shangchul Mahadev Temple" },
      { src: "/Trip Plan/Shangharh Waterfall.jpg", alt: "Shangarh Waterfall" },
    ]
  },
  {
    id: "lakes",
    title: "Mystic Lakes & Tirthan Waters",
    subtitle: "Floating Islands & Trout Rivers",
    description: "Witness the sacred floating grass islands of Pundrik Lake nestled amidst dense forests, followed by a deeply relaxing scenic drive alongside the crystal-clear, trout-filled waters of Tirthan Valley.",
    duration: "Full Day Excursion",
    distance: "28 km from Homestay",
    images: [
      { src: "/Trip Plan/Pundrik Lake.jpg", alt: "Sacred Pundrik Lake" },
      { src: "/Trip Plan/Tirthan Valley.jpg", alt: "Scenic Tirthan Valley" },
      { src: "/Trip Plan/water fall raila.jpg", alt: "Serene Raila Streams" },
    ]
  },
  {
    id: "heights",
    title: "Iconic Heights & Shrines",
    subtitle: "Panoramic Ridgelines & Horizons",
    description: "Ascend to the breathtaking ridgeline shrine of Bijli Mahadev offering unhindered 360-degree panoramic views of the Kullu and Parvati valleys, or take a customized road excursion to the popular horizons of Manali.",
    duration: "Full Day Excursion",
    distance: "Customized Transit",
    images: [
      { src: "/Trip Plan/Bijli Mahadev Temple.jpg", alt: "Bijli Mahadev Temple" },
      { src: "/Trip Plan/Bijli Mahadev Temple 2.webp", alt: "Bijli Mahadev Scenic Ridge" },
      { src: "/Trip Plan/Manali.jpg", alt: "Manali Mountain Ranges" },
    ]
  }
];

export default function TripPlan() {
  const [activeTab, setActiveTab] = useState(tripCategories[0].id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const activeTrip = tripCategories.find((cat) => cat.id === activeTab) || tripCategories[0];

  return (
    <section id="trip-plan" className="py-24 px-6 md:px-12 bg-brand-cream text-brand-green relative z-0">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="uppercase tracking-[0.3em] text-xs font-bold mb-4 block text-[#6B8E70]">
            Curated Basecamp Itineraries
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#102B20]">
            Plan Your Trip<br />
            <span className="italic font-light text-[#102B20]/80">With Us</span>
          </h2>
          <p className="text-lg leading-relaxed text-[#102B20]/80 font-light">
            Make Valley View Home Stay your comfortable central hub. From pristine secret waterfalls to world-renowned divine meadows, let us organize your daily transits, local expert guides, and custom picnic setups.
          </p>
        </div>

        {/* Itinerary Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-5xl mx-auto">
          {tripCategories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full text-base font-medium transition-all flex items-center gap-2 border ${
                activeTab === tab.id
                  ? "bg-[#102B20] text-white border-[#102B20] shadow-lg scale-105"
                  : "bg-white/60 text-[#102B20]/80 border-black/5 hover:bg-white hover:text-[#102B20]"
              }`}
            >
              <Compass size={18} className={activeTab === tab.id ? "animate-spin-slow" : ""} />
              <span>{tab.title.split("&")[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* Active Itinerary Showcase Card */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-black/5 grid lg:grid-cols-12 gap-10 items-center mb-16 transition-all duration-500">
          
          {/* Left Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="inline-flex items-center gap-1.5 bg-brand-sky/20 text-[#102B20] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles size={14} className="text-[#6B8E70]" /> {activeTrip.subtitle}
              </span>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#102B20]">
                {activeTrip.title}
              </h3>
            </div>

            <p className="text-[#102B20]/80 text-base md:text-lg leading-relaxed font-light">
              {activeTrip.description}
            </p>

            <div className="pt-2 border-t border-black/5 grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-brand-cream rounded-xl text-[#6B8E70] mt-0.5">
                  <Clock size={18} />
                </div>
                <div>
                  <span className="text-xs text-[#102B20]/60 block font-light">Duration</span>
                  <span className="font-medium text-sm text-[#102B20]">{activeTrip.duration}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-brand-cream rounded-xl text-[#6B8E70] mt-0.5">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-xs text-[#102B20]/60 block font-light">Proximity</span>
                  <span className="font-medium text-sm text-[#102B20]">{activeTrip.distance}</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={`https://wa.me/919015011814?text=Hello%20Jhabe%20Ram%20ji,%20I%20would%20love%20to%20plan%20the%20${encodeURIComponent(activeTrip.title)}%20during%20my%20stay.%20Please%20guide%20me%20on%20transport%20and%20arrangements.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-transparent border-2 border-[#102B20] text-[#102B20] px-6 py-3 rounded-full font-medium hover:bg-[#102B20] hover:text-white transition-all group w-full sm:w-auto justify-center"
              >
                <MessageCircle size={18} className="text-[#6B8E70] group-hover:text-white transition-colors" />
                <span>Customize This Route</span>
              </a>
            </div>
          </div>

          {/* Right Images Column */}
          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4 h-full min-h-[280px]">
            {activeTrip.images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(img.src)}
                className={`relative rounded-2xl overflow-hidden shadow-md group cursor-pointer border border-black/5 bg-[#102B20]/5 ${
                  idx === 0 ? "sm:col-span-2 sm:row-span-2 h-64 sm:h-full" : "h-40 sm:h-auto"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3.5">
                  <div className="flex items-center justify-between w-full text-white">
                    <span className="text-xs font-medium tracking-wide drop-shadow line-clamp-1">{img.alt}</span>
                    <Maximize2 size={14} className="shrink-0 ml-1 drop-shadow opacity-80" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Direct Concierge Banner */}
        <div className="bg-gradient-to-r from-[#143224] to-[#102B20] rounded-3xl p-8 md:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
          <div className="relative z-10 max-w-xl text-center sm:text-left">
            <h4 className="font-serif text-2xl font-bold mb-2 tracking-wide text-[#E5C27C]">
              Need Seamless Travel Transport?
            </h4>
            <p className="text-brand-cream/80 text-sm md:text-base font-light leading-relaxed">
              We arrange direct pickup/drop setups from local bus hubs or airports, experienced private drivers, and reliable local guidance so your exploration stays absolutely stress-free.
            </p>
          </div>
          <a
            href="https://wa.me/919015011814?text=Hello%20Jhabe%20Ram%20ji,%20I%20need%20help%20planning%20my%20overall%20travel%20itinerary%20and%20local%20transport%20for%20Sainj%20Valley."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white text-[#102B20] px-6 py-3 rounded-full font-bold text-sm hover:bg-[#E5C27C] transition-all shadow-md hover:-translate-y-0.5 tracking-wide relative z-10 flex items-center gap-2"
          >
            <MessageCircle size={18} className="text-[#102B20]" />
            <span>Chat With Concierge</span>
          </a>
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
            aria-label="Close expanded itinerary view"
          >
            <X size={28} />
          </button>
          <img
            src={selectedImage}
            alt="Expanded itinerary destination"
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
