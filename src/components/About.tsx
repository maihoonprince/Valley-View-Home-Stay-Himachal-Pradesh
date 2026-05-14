"use client";
import { Leaf, Award, HeartHandshake } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-brand-cream text-brand-green">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        
        <div className="md:w-1/2 space-y-6">
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-wide">
            Best Premium Homestay in Sainj Valley, Himachal Pradesh
          </h2>
          <p className="text-lg leading-relaxed opacity-95">
            Welcome to <span className="font-medium">Valley View Home Stay</span>, an idyllic mountain haven hosted by Jhabe Ram. Located in the pristine heights of Kullu district, our signature homestay in valley settings provides the perfect fusion of traditional Himachali warmth and modern comforts. Whether you are searching for a serene home stay in India, planning peaceful living in Himachal, or looking for an inspiring high-speed Wi-Fi base to work from home in Himachal, you have found your ultimate sanctuary.
          </p>
          <p className="text-lg leading-relaxed opacity-95">
            Officially registered under the Himachal Pradesh Tourism Development & Registration Act, 2002. Experience authentic homestay in Kullu hospitality, organic farm-fresh meals, and breathtaking mountain vistas.
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
            src="/homestay/2.jpg" 
            alt="Valley View Home Stay in Sainj Valley Kullu Himachal Pradesh"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
          />
        </div>
        
      </div>
    </section>
  );
}
