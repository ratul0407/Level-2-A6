import Faq from "@/components/HomePage/FaqSection";
import Feature from "@/components/HomePage/Feature";
import HeroSection from "@/components/HomePage/HeroSection";
import OurStats from "@/components/HomePage/OurStats";
import Testimonials from "@/components/HomePage/Testimonials.tsx";
import OurServices from "@/components/HomePage/OurServices";

const HomePage = () => {
  return (
    <div className="min-h-screen mx-auto">
      <HeroSection
        heading="Let Us Take care of your parcels"
        description="Our delivery men's will deliver your belongings before you even know it"
        badge="About us"
      />
      <Feature />
      <Testimonials />
      <OurStats />

      <OurServices />
      <Faq />
    </div>
  );
};

export default HomePage;
