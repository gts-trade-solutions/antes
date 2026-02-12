"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

/* ---------------- BRANDS ---------------- */
const BRANDS = [
  { name: "Emerson", logo: "/brands/brand-image-one.png" },
  { name: "Danfoss", logo: "/brands/brand-image-two.png" },
  { name: "Bitzer", logo: "/brands/brand-image-three.png" },
  { name: "Fascol", logo: "/brands/brand-image-four.png" },
  { name: "LU-VE", logo: "/brands/brand-image-five.png" },
  { name: "Hyundai", logo: "/brands/brand-image-six.png" },
  { name: "Linde", logo: "/brands/brand-image-seven.png" },
  { name: "Isoflex", logo: "/brands/brand-image-eight.png" },
  { name: "Metaflex", logo: "/brands/brand-image-nine.png" },
  { name: "Nilkamal", logo: "/brands/brand-image-ten.png" },
  { name: "Kingspan", logo: "/brands/brand-image-eleven.png" },
];

/* ---------------- ICONS ---------------- */
const WHY_ICONS = {
  delivery: "/iteration.png",
  experience: "/reputation.png",
  temperature: "/temperature.png",
  aftersales: "/support_6358289.png",
  repeat: "/team_7773673.png",
  energy: "/cpu_8202384.png",
};

export default function QatarWhyWeChoose() {
  const pointsUI = [
    {
      title: "End-to-End Delivery",
      desc: "Highly skilled & competent team covering consultancy, design, supply, execution & after sales service.",
      icon: WHY_ICONS.delivery,
    },
    {
      title: "30+ Years Experience",
      desc: "Professionals with industry experience of more than three decades.",
      icon: WHY_ICONS.experience,
    },
    {
      title: "Wide Temperature Range",
      desc: "Industrial refrigeration systems from +25°C to -40°C.",
      icon: WHY_ICONS.temperature,
    },
    {
      title: "After-Sales Support",
      desc: "Reliable and responsive service support ensuring long-term performance.",
      icon: WHY_ICONS.aftersales,
    },
    {
      title: "Repeat Customers",
      desc: "Strong industry references and long-term partnerships.",
      icon: WHY_ICONS.repeat,
    },
    {
      title: "Energy-Efficient Tech",
      desc: "Innovative refrigeration technologies for sustainable operations.",
      icon: WHY_ICONS.energy,
    },
  ];

  return (
    <section className="relative bg-[#f4f7fb] py-24">

      <div className="mx-auto max-w-7xl px-6">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm tracking-widest uppercase text-[#30B0E0] font-semibold">
            Why Choose Antes
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#002858]">
            Your Trusted Cold Storage Partner
          </h2>

          <p className="mt-6 text-slate-600 leading-relaxed">
            Quality, reliability and customer satisfaction define our approach
            to delivering advanced refrigeration and cold chain solutions.
          </p>
        </div>


        {/* ================= FEATURE GRID ================= */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pointsUI.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(0,40,88,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,40,88,0.10)]"
            >
              {/* Top Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#30B0E0] to-[#002858]" />

              <div className="flex flex-col gap-6">

                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#30B0E0]/15 to-[#002858]/10 ring-1 ring-[#30B0E0]/20 transition duration-500 group-hover:scale-110">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="h-8 w-8 object-contain"
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-[#002858]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>


        {/* ================= BRANDS SECTION ================= */}
        <div className="mt-28 text-center">
          <h3 className="text-3xl font-bold text-[#002858]">
            Trusted <span className="text-[#30B0E0]">Brands</span>
          </h3>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            We collaborate with global refrigeration leaders to deliver high-performance and reliable solutions.
          </p>
        </div>

        {/* ================= SWIPER ================= */}
        <div className="relative mt-14 max-w-6xl mx-auto">

          {/* Nav Buttons */}
          <button className="brands-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10 z-20 hidden md:flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition">
            ‹
          </button>

          <button className="brands-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-10 z-20 hidden md:flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition">
            ›
          </button>

          <Swiper
            modules={[Autoplay, Navigation]}
            loop
            centeredSlides
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            speed={900}
            navigation={{
              prevEl: ".brands-prev",
              nextEl: ".brands-next",
            }}
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
          >
            {BRANDS.map((brand, index) => (
              <SwiperSlide key={index}>
                <div className="group flex items-center justify-center h-24 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-12 object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
