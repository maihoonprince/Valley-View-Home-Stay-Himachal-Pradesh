"use client";
import { Leaf, Award, HeartHandshake } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-brand-cream text-brand-green">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        
        <div className="md:w-1/2 space-y-6">
          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            A Peaceful Retreat in the Himalayas
          </h2>
          <p className="text-lg leading-relaxed opacity-90">
            Valley View Home Stay, owned by Jhabe Ram, offers a tranquil haven nestled in the heart of Sainj Valley. Surrounded by lush greenery and breathtaking mountain vistas, it provides the perfect blend of modern comfort and pristine nature.
          </p>
          <p className="text-lg leading-relaxed opacity-90">
            Registered under the Himachal Pradesh Tourism Development & Registration Act, 2002. Experience true Himalayan hospitality.
          </p>
          
          <div className="pt-6 flex flex-wrap gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-brand-sky/30 p-3 rounded-full text-brand-green">
                <Leaf size={24} />
              </div>
              <span className="font-medium">Nature Immersed</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-brand-sky/30 p-3 rounded-full text-brand-green">
                <Award size={24} />
              </div>
              <span className="font-medium">Govt. Certified</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-brand-sky/30 p-3 rounded-full text-brand-green">
                <HeartHandshake size={24} />
              </div>
              <span className="font-medium">Hospitality</span>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=800" 
            alt="Valley View Homestay"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
          />
        </div>
        
      </div>
    </section>
  );
}
