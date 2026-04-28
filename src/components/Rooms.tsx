"use client";
import { BedDouble, Mountain, Sparkles } from "lucide-react";

const roomsData = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  title: "Deluxe Mountain View Room",
  price: "₹2000",
  image: `/rooms/${(i % 3) + 1}.jpg`,
}));

export default function Rooms() {
  return (
    <section id="rooms" className="py-24 px-6 md:px-12 bg-white text-brand-green">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Accommodations</h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Experience comfort with a scenic view. We offer 6 cozy, well-appointed deluxe double bedrooms designed for your complete relaxation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomsData.map((room) => (
            <div
              key={room.id}
              className="bg-brand-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group border border-brand-green/10"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-brand-cream/90 backdrop-blur text-brand-green px-4 py-2 rounded-full font-bold shadow-md">
                  {room.price} <span className="text-xs font-normal">/ night</span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="font-serif text-2xl font-bold mb-4">{room.title}</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 opacity-90"><BedDouble size={20} className="text-brand-green" /> Double Bed</li>
                  <li className="flex items-center gap-3 opacity-90"><Mountain size={20} className="text-brand-green" /> Mountain View</li>
                  <li className="flex items-center gap-3 opacity-90"><Sparkles size={20} className="text-brand-green" /> Clean & Comfortable</li>
                </ul>
                <a 
                  href={`https://wa.me/919805505056?text=I'm%20interested%20in%20booking%20a%20${encodeURIComponent(room.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 text-center bg-transparent border-2 border-brand-green text-brand-green rounded-full font-medium hover:bg-brand-green hover:text-brand-cream transition-colors"
                >
                  Check Availability
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
