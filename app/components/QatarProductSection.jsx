"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const PRODUCTS = [
  {
    title: "Cold Store Warehouse",
    desc: "For Cold Warehousing with Racking & MHE.",
    img: "/large-cold-storage-warehouse-supplier-india.webp",
    href: "/warehouse-turnkey-solution",
  },
  {
    title: "Blast Freezers",
    desc: "Portable and customised.",
    img: "/blast-freezers-suppliers.webp",
    href: "/blast-freezers",
  },
  {
    title: "Walk-in Cold Rooms",
    desc: "Customized walk-in chillers & freezers",
    img: "/walkin-cold-rooms.webp",
    href: "/walkin-cold-rooms",
  },
  {
    title: "Ice Cube Machines",
    desc: "Wide range of Ice machines",
    img: "/p-image-5.svg",
    href: "/icecube-machines",
  },
  {
    title: "Doors and Dockers",
    desc: "For Rooms and Warehousing",
    img: "/p-image-6.svg",
    href: "/dock-doors",
  },
  {
    title: "Material Handling Equipment",
    desc: "Comprehensive Solutions for Effective Material Movement",
    img: "/mhetest.png",
    href: "/supermarket-display-chillers",
  },
  {
    title: "ASRS Cold Storage",
    desc: "Automated Cold Storage Solutions",
    img: "/asrctest.png",
    href: "/icecube-machines",
  },
];

export default function QatarProductSection() {
  return (
    <section className="relative bg-[#f4f7fb] py-16 sm:py-24">

      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block px-5 py-2 rounded-full bg-white border text-sm font-semibold tracking-wide text-[#002858] shadow-sm">
            SOLUTIONS
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-[#002858]">
            Cold Chain Solutions We Deliver
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Modular, scalable refrigeration systems engineered for performance,
            safety and long-term efficiency across diverse industries.
          </p>
        </div>

        {/* Slider */}
        <div className="relative mt-14">

          {/* Navigation Buttons */}
          <button className="products-prev absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 -translate-x-6 md:flex h-11 w-11 items-center justify-center rounded-full bg-white border shadow-md hover:shadow-lg transition">
            <ChevronLeft className="h-5 w-5 text-[#002858]" />
          </button>

          <button className="products-next absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 translate-x-6 md:flex h-11 w-11 items-center justify-center rounded-full bg-white border shadow-md hover:shadow-lg transition">
            <ChevronRight className="h-5 w-5 text-[#002858]" />
          </button>

          <Swiper
            modules={[Autoplay, Navigation]}
            loop
            centeredSlides
            slideToClickedSlide
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={800}
            navigation={{
              prevEl: ".products-prev",
              nextEl: ".products-next",
            }}
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1.1 },
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {PRODUCTS.map((product, idx) => (
              <SwiperSlide key={idx}>
                <ProductCard item={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}


/* ===================== */
/* Premium Product Card */
/* ===================== */
function ProductCard({ item }) {
  return (
    <div className="group relative rounded-3xl bg-white shadow-sm border border-slate-200 overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">

      {/* Image Section */}
      <div className="relative h-[220px] bg-gradient-to-b from-slate-50 to-white flex items-center justify-center overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          className="max-h-[160px] object-contain transition-transform duration-500 group-hover:scale-110"
        />

        {/* Hover overlay glow */}
        <div className="absolute inset-0 bg-[#002858]/0 group-hover:bg-[#002858]/5 transition duration-500" />
      </div>

      {/* Content */}
      <div className="px-6 py-7 text-center">
        <h3 className="text-lg font-semibold text-[#002858]">
          {item.title}
        </h3>

        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          {item.desc}
        </p>

        <Link
          href={item.href}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#1D4ED8] transition hover:text-[#002858]"
        >
          Read More
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#002858] transition-all duration-300 group-hover:w-full" />
    </div>
  );
}
