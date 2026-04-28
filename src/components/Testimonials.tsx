"use client";
import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      text: "Woke up to the sound of the river and a view I'll never forget. Jhabe ji treated us like family.",
      name: "Ananya S.",
      location: "Delhi"
    },
    {
      text: "The bonfire night was magical. Simple, clean rooms and genuinely warm hospitality — exactly what the mountains should feel like.",
      name: "Rohan M.",
      location: "Mumbai"
    },
    {
      text: "Found our quiet corner of the Himalayas. The balcony view is worth every rupee, and then some.",
      name: "Priya & Arjun",
      location: "Bengaluru"
    },
    {
      text: "A completely untouched paradise. The home-cooked Himachali meals were a highlight of our entire trip!",
      name: "Vikram T.",
      location: "Chandigarh"
    },
    {
      text: "If you want to disconnect from city life and wake up to misty pine forests, this is the absolute best place.",
      name: "Sarah L.",
      location: "London, UK"
    },
    {
      text: "Such a peaceful stay. Jhabe Ram took us on a village walk that ended up being the most memorable part of our holiday.",
      name: "Neha & Amit",
      location: "Pune"
    }
  ];

  /* Reusable Card Component to prevent code duplication inside the marquee groups */
  const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
    <div className="w-[320px] md:w-[420px] shrink-0 border border-white/5 rounded-[1.5rem] p-8 md:p-10 bg-[#224432]/40 backdrop-blur-md shadow-2xl hover:bg-[#224432]/60 hover:-translate-y-2 transition-all duration-300">
      <div className="flex gap-1.5 mb-8">
        {[...Array(5)].map((_, idx) => (
          <Star key={idx} size={18} className="fill-[#7cc095] text-[#7cc095]" />
        ))}
      </div>
      <p className="font-serif italic text-[1.1rem] leading-relaxed mb-10 text-[#edf2e8] font-light tracking-wide whitespace-normal">
        "{review.text}"
      </p>
      <p className="text-sm font-semibold tracking-wide text-white">
        {review.name} <span className="opacity-60 font-medium ml-1">· {review.location}</span>
      </p>
    </div>
  );

  return (
    <section className="bg-gradient-to-br from-[#1C3A2C] via-[#162F23] to-[#12281D] py-24 relative z-10 overflow-hidden">
      
      {/* Background Glows for depth */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-white/5 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-black/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 px-6 md:px-12">
          <span className="uppercase tracking-[0.3em] text-[11px] font-bold mb-6 block text-[#7cc095]">
            Guest Stories
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-[#f3f5ef] tracking-wide mb-2 drop-shadow-md">
            Words from our
          </h2>
          <h2 className="font-serif text-5xl md:text-6xl text-[#dce6d3] italic tracking-wide drop-shadow-md">
            family of travellers
          </h2>
        </div>

        {/* Infinite Marquee Slider */}
        <div 
          className="relative overflow-hidden w-full py-4 mt-8" 
          style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
        >
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] group">
            
            {/* Group 1 */}
            <div className="flex gap-6 md:gap-8 px-3 md:px-4">
              {reviews.map((review, i) => (
                <ReviewCard key={`group1-${i}`} review={review} />
              ))}
            </div>

            {/* Group 2 (Duplicate for seamless loop) */}
            <div className="flex gap-6 md:gap-8 px-3 md:px-4">
              {reviews.map((review, i) => (
                <ReviewCard key={`group2-${i}`} review={review} />
              ))}
            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
}
