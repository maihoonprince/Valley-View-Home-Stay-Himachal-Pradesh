import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import Experience from "@/components/Experience";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-brand-cream min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Experience />
      <Gallery />
      <Testimonials />
      <Location />
      <Footer />
    </main>
  );
}
