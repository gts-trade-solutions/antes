"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // 👈 removed Navigation
import "swiper/css";

import {
  Utensils,
  Store,
  ShoppingCart,
  Building2,
  Hospital,
  BookOpen,
  BedDouble,
  Trees,
  Ruler,
  Truck,
  Fish,
  Drumstick,
  Factory,
  Wine,
} from "lucide-react";

const industries = [
  { title: "Fast food chains", icon: <Utensils className="w-10 h-10" /> },
  { title: "Retail", icon: <Store className="w-10 h-10" /> },
  { title: "Super & Hyper markets", icon: <ShoppingCart className="w-10 h-10" /> },
  { title: "Restaurants", icon: <Building2 className="w-10 h-10" /> },
  { title: "Pharmacy", icon: <Hospital className="w-10 h-10" /> },
  { title: "Research & Education", icon: <BookOpen className="w-10 h-10" /> },
  { title: "Hospitality", icon: <BedDouble className="w-10 h-10" /> },
  { title: "Agriculture", icon: <Trees className="w-10 h-10" /> },
  { title: "Special projects", icon: <Ruler className="w-10 h-10" /> },
  { title: "3PL Logistics", icon: <Truck className="w-10 h-10" /> },
  { title: "Seafood", icon: <Fish className="w-10 h-10" /> },
  { title: "Meat", icon: <Drumstick className="w-10 h-10" /> },
  { title: "Food processing", icon: <Factory className="w-10 h-10" /> },
  { title: "Food & Drinks manufacture", icon: <Wine className="w-10 h-10" /> },
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-nrs-blue/90 to-nrs-navy/90 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-10"></div>

      <div className="container mx-auto px-6 relative">
        {/* Title + Intro */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Industry We Serve
          </h2>
          <p className="text-white/90 leading-relaxed text-lg">
            As cold storage suppliers in India, NRS specializes in innovative cold storage building
            solutions for diverse industries to meet the need for efficient and safe storage of perishable goods. 
            We cater to fast food chains, retail, super & hypermarkets, restaurants, pharmacies, hospitality, 
            logistics, food processing, and many more — ensuring quality, reliability, and customer satisfaction.
          </p>
        </div>

        {/* Industry Carousel */}
        <Swiper
          modules={[Autoplay]} // 👈 no Navigation
          spaceBetween={30}
          slidesPerView={5}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          className="max-w-6xl"
        >
          {industries.map((industry, index) => (
            <SwiperSlide key={index}>
              <div className="h-44 flex flex-col items-center justify-center bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center group">
                <div className="text-nrs-blue mb-4 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-nrs-navy font-semibold text-lg">
                  {industry.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AboutSection;
