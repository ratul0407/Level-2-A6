import {
  Code,
  Globe,
  Headphones,
  Leaf,
  MapPin,
  Truck,
  Wallet,
} from "lucide-react";

import fastImg from "../../assets/images/fast-delivery.jpg";
import trackingImg from "../../assets/images/tracking.jpg";
import affordableImg from "../../assets/images/affordable.jpg";
import supportImg from "../../assets/images/support.jpg";
import coverageImg from "../../assets/images/coverage.jpg";
import seamLessImg from "../../assets/images/seamless.jpg";
import ecoImg from "../../assets/images/eco.jpg";
const ourServices = [
  {
    title: "Fast & Reliable Delivery",
    description:
      "We ensure your parcels reach their destination safely and on time with our trusted delivery network.",
    icon: Truck,
    img: fastImg,
  },
  {
    title: "Real-Time Tracking",
    description:
      "Stay updated every step of the way with live parcel tracking accessible anytime, anywhere.",
    icon: MapPin,
    img: trackingImg,
  },
  {
    title: "Affordable Pricing",
    description:
      "We offer transparent and competitive rates with no hidden fees — get the best value for every shipment.",
    icon: Wallet,
    img: affordableImg,
  },
  {
    title: "24/7 Customer Support",
    description:
      "Our dedicated support team is available around the clock to assist with your delivery queries or concerns.",
    icon: Headphones,
    img: supportImg,
  },
  {
    title: "Nationwide Coverage",
    description:
      "Deliver to any corner of the country — from cities to remote towns — with our extensive logistics network.",
    icon: Globe,
    img: coverageImg,
  },
  {
    title: "Seamless Integration",
    description:
      "Integrate our delivery API into your e-commerce platform for automated order fulfillment and updates.",
    icon: Code,
    img: seamLessImg,
  },
  {
    title: "Eco-Friendly Delivery",
    description:
      "We care about the environment. Our delivery system optimizes routes to reduce fuel consumption and uses eco-packaging to minimize waste.",
    icon: Leaf,
    img: ecoImg,
  },
];

const gridClasses = [
  "lg:col-span-5",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-3",
  "lg:col-start-9 lg:col-end-[-1] lg:row-start-1 lg:row-end-4",
];

const OurServices = () => {
  return (
    <section className="py-16 lg:py-24 container mx-auto">
      <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl pb-12">
        Our Services
      </h2>
      <div className="grid grid-cols-12 gap-6 items-stretch">
        {" "}
        {ourServices.map((item, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${item.img})` }}
            className={`${gridClasses[index]} bg-no-repeat bg-cover bg-center rounded-xl relative overflow-hidden transition-transform duration-500 hover:scale-[1.02] hover:shadow-lg border shadow-sm col-span-12 sm:col-span-6 flex flex-col justify-between`}
          >
            <div className="absolute bg-black/60 inset-0"></div>
            <div className="p-4 relative z-20 ">
              <div className="bg-primary/20 rounded-xl border border-primary p-2 w-fit">
                <item.icon size={20} strokeWidth={1} className="text-primary" />
              </div>
            </div>
            <div className="p-6 text-white relative z-20">
              <h3 className="font-bold text-4xl">{item.title}</h3>
              <p className="text-lg ">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
