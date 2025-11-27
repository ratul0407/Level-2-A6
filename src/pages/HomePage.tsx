import Faq from "@/components/HomePage/FaqSection";
import Feature from "@/components/HomePage/Feature";

import OurStats from "@/components/HomePage/OurStats";
import Testimonials from "@/components/HomePage/Testimonials.tsx";
import OurServices from "@/components/HomePage/OurServices";
import Process from "@/components/HomePage/Process";
import Hero from "@/components/HomePage/Hero";

const HomePage = () => {
  return (
    <div className="min-h-screen mx-auto px-8">
      <Hero />
      <Feature />
      <OurStats />

      <OurServices />
      <Testimonials />
      <Process />
      <Faq />
    </div>
  );
};

export default HomePage;
