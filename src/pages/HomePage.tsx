import Faq from "@/components/HomePage/FaqSection";
import Feature from "@/components/HomePage/Feature";
import HeroSection from "@/components/HomePage/HeroSection";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection
        heading="Grow your business with Parcels"
        description="Our delivery men's will delivery your belongings before you even know it"
        badge="About us"
      />
      <Feature />
      <Faq />
    </div>
  );
};

export default HomePage;
