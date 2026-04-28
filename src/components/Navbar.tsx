"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const documentTop = document.documentElement?.getBoundingClientRect().top || 0;
      const bodyTop = document.body?.getBoundingClientRect().top || 0;
      const trueScroll = Math.abs(documentTop) > 50 || Math.abs(bodyTop) > 50 || window.scrollY > 50;
      setIsScrolled(trueScroll);
    };

    handleScroll();
    const interval = setInterval(handleScroll, 150);
    window.addEventListener("scroll", handleScroll, { passive: true, capture: true });
    
    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll, { capture: true });
    };
  }, []);

  const links = ["Home", "About", "Rooms", "Experiences", "Gallery", "Location", "Contact"];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-[#EAECE1]/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 bg-[#1B4332] rounded-full flex items-center justify-center border border-white/10 group-hover:scale-105 transition-transform">
            <span className="font-serif text-2xl text-[#E5C27C] leading-none mb-0.5">V</span>
          </div>
          <div className="flex flex-col justify-center transition-colors duration-300">
            <span className={`font-serif text-xl font-medium leading-none tracking-wide ${isScrolled ? "text-[#1B4332]" : "text-white"}`}>Valley View</span>
            <span className={`text-[10px] tracking-[0.25em] font-sans mt-1.5 leading-none ${isScrolled ? "text-[#1B4332]/70" : "text-white/80"}`}>HOME STAY</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-7 items-center">
          {links.map((link) => (
            <a
              key={link}
              href={link === "Home" ? "#" : `#${link.toLowerCase()}`}
              className={`text-[15px] font-medium transition-colors duration-300 ${
                isScrolled ? "text-[#1B4332]/90 hover:text-[#1B4332]" : "text-white/90 hover:text-white"
              }`}
            >
              {link}
            </a>
          ))}
          <a
            href="tel:+919805505056"
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-[15px] font-medium transition-all hover:-translate-y-0.5 ml-2 ${
              isScrolled 
                ? "bg-[#1B4332] text-white hover:bg-[#102B20]" 
                : "bg-white/20 backdrop-blur-sm text-white border border-white/50 hover:bg-white/30"
            }`}
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden ${isScrolled ? "text-[#1B4332]" : "text-white"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden border-t absolute w-full left-0 mt-3 sm:mt-4 shadow-xl transition-all duration-300 ${
          isScrolled ? "bg-[#EAECE1] border-[#1B4332]/10" : "bg-black/90 backdrop-blur-xl border-white/10"
        }`}>
          <div className="flex flex-col px-6 py-6 gap-5">
            {links.map((link) => (
              <a
                key={link}
                href={link === "Home" ? "#" : `#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium ${isScrolled ? "text-[#1B4332]" : "text-white"}`}
              >
                {link}
              </a>
            ))}
            <a
              href="tel:+919805505056"
              className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full text-lg font-medium mt-2 transition-colors ${
                isScrolled ? "bg-[#1B4332] text-white" : "bg-white/20 text-white border border-white/30"
              }`}
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
