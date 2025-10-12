import img1 from "../../assets/images/testimonial-1.png";
import img2 from "../../assets/images/testimonial-2.png";
import img3 from "../../assets/images/testimonial-3.jpg";
import img4 from "../../assets/images/testimonial-4.jpg";
import img5 from "../../assets/images/testimonial-5.jpg";
import img6 from "../../assets/images/testimonial-6.jpg";
import { Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Jibon Das",
    img: img1,
    jobTitle: "Small Business Owner",
    description:
      "Using EParcel has completely changed the way I handle deliveries for my online shop. The pickup scheduling is smooth, and tracking updates keep my customers informed every step of the way.",
  },
  {
    name: "Kamal Uddin",
    img: img2,
    jobTitle: "E-commerce Seller",
    description:
      "I’ve tried several delivery services before, but EParcel stands out for its reliability. Their delivery time is fast, and customer support is very responsive. Highly recommended for business owners.",
  },
  {
    name: "Micheal Reeves",
    img: img3,
    jobTitle: "Freelance Designer",
    description:
      "I send out product samples to clients often, and EParcel makes it effortless. Their real-time tracking and affordable pricing make it my go-to delivery partner.",
  },
  {
    name: "Rafi Ahmed",
    img: img4,
    jobTitle: "Corporate Executive",
    description:
      "EParcel’s same-day delivery service has been a lifesaver for urgent office deliveries. The interface is easy to use, and I always get notified when a parcel reaches its destination.",
  },
  {
    name: "Alif Islam",
    img: img5,
    jobTitle: "Boutique Owner",
    description:
      "Their service is fast, transparent, and affordable. What I love most is that my customers always receive their packages on time, which helps me maintain trust and repeat orders.",
  },
  {
    name: "Payel Khondokar",
    img: img6,
    jobTitle: "Online Store Manager",
    description:
      "EParcel has streamlined our order fulfillment process. Their API integration with our system made managing hundreds of deliveries every week completely stress-free.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 lg:py-32">
      <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl pb-12">
        What our clients say about us
      </h2>
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        speed={1000}
        breakpoints={{
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          960: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="relative  bg-white rounded-2xl shadow-sm text-center px-6 py-8 space-y-4 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              {/* Decorative Quotes */}
              <Quote
                strokeWidth={1}
                size={40}
                stroke="#10b981"
                fill="#10b981"
                className="rotate-180 absolute top-0 left-4 opacity-20"
              />
              <Quote
                strokeWidth={1}
                size={40}
                stroke="#10b981"
                fill="#10b981"
                className="absolute top-0 right-4 opacity-20"
              />

              {/* User Image */}
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto object-cover border-2 border-primary"
              />

              {/* Name */}
              <h3 className="font-semibold text-xl text-gray-900">
                {testimonial.name}
              </h3>

              {/* Job Title */}
              <p className="text-sm text-green-600 font-medium -mt-2">
                {testimonial.jobTitle}
              </p>

              {/* Description */}
              <blockquote className="text-gray-600 leading-relaxed italic">
                “{testimonial.description}”
              </blockquote>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
