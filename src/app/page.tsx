import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Difference from "@/components/Difference";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location"; 
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Services />
      <Difference />
      <Testimonials />
      <Location />
      <Footer />
      <FloatingCTA />
    </div>
  );
}