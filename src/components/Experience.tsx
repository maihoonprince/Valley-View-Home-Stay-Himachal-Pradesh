"use client";
import { Flame, Map, Droplets, Home, Tent, Landmark, Building, TreePine, Mountain } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Bonfire Nights",
      desc: "Cozy evenings under the starry Himalayan sky.",
      icon: <Flame size={32} />,
      image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Trekking Trails",
      desc: "Explore the hidden paths and lush green forests.",
      icon: <Map size={32} />,
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "River Nearby",
      desc: "Listen to the soothing sounds of the flowing river.",
      icon: <Droplets size={32} />,
      image: "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Village Lifestyle",
      desc: "Experience authenticity in traditional Sainj homes.",
      icon: <Home size={32} />,
      image: "/Village Lifestyle/village.jpg",
    },
    {
      title: "Sainj Ground",
      desc: "The heart of the valley, perfect for peaceful walks and relaxation.",
      icon: <Tent size={32} />,
      image: "/Sainj Ground/Ground.jpg",
    },
    {
      title: "Laxmi Narayan Temple",
      desc: "Seek blessings at this ancient, beautifully carved historic temple.",
      icon: <Landmark size={32} />,
      image: "/Laxmi Narayan Tample/1.jpg",
    },
    {
      title: "Raila Twin Tower",
      desc: "Witness the historic and unique architectural marvel of the valley.",
      icon: <Building size={32} />,
      image: "/Raila Twin Tower/Twin Tower.jpg",
    },
    {
      title: "Shangarh Meadow",
      desc: "A breathtaking lush green meadow surrounded by dense pines.",
      icon: <TreePine size={32} />,
      image: "/Shangadh/meadow.jpg",
    },
    {
      title: "Sainj Village",
      desc: "Our beautiful village, surrounded by gorgeous mountains from all directions.",
      icon: <Mountain size={32} />,
      image: "/Sainj Village/Village.jpg",
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-brand-cream text-brand-green">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Curated Experiences</h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Beyond just a stay, we offer memories that last a lifetime. Discover what awaits you in Sainj Valley.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden h-80 shadow-lg cursor-pointer"
            >
              <img 
                src={exp.image} 
                alt={exp.title} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute inset-x-0 bottom-0 p-6 text-brand-cream transform transition-transform duration-300 group-hover:-translate-y-2">
                <div className="mb-3 text-brand-sky">{exp.icon}</div>
                <h3 className="font-serif text-2xl font-bold mb-2 drop-shadow-md">{exp.title}</h3>
                <p className="text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto drop-shadow-sm">
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
