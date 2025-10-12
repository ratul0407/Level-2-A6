import Faq from "@/components/HomePage/FaqSection";
import Feature from "@/components/HomePage/Feature";
import HeroSection from "@/components/HomePage/HeroSection";
import OurStats from "@/components/HomePage/OurStats";
import Testimonials from "@/components/HomePage/Testimonials.tsx";

const HomePage = () => {
  return (
    <div className="min-h-screen mx-auto">
      <HeroSection
        heading="Grow your business with Parcels"
        description="Our delivery men's will delivery your belongings before you even know it"
        badge="About us"
      />
      <Feature />
      <Testimonials />
      <OurStats />
      <Faq />
    </div>
  );
};

export default HomePage;
