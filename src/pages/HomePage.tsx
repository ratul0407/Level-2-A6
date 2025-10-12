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
        description="Grow you business with E-parcel. Along side 300+ happy customers nationwide."
        badge="About us"
      />
      <Feature />
      <OurStats />

      <OurServices />
      <Testimonials />
      <Faq />
    </div>
  );
};

export default HomePage;
