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
    title: "Supermarket Display Chiller",
    desc: "Freezers and Chillers",
    img: "/supermarket-chiller-supplier.webp",
    href: "/supermarket-display-chillers",
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
    desc: "Automated Cold Storage Solutions for Streamlined Inventory Management",
    img: "/asrctest.png",
    href: "/icecube-machines",
  },
];

export default function ProductsPaletteSection() {
  return (
    <section className="relative bg-white py-10 sm:py-16">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xxl font-semibold uppercase tracking-widest text-[#002858]">
            Solutions
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#002858] sm:text-4xl">
            Cold Chain Solutions We Deliver
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            Modular, scalable refrigeration solutions designed for performance, safety, and efficiency.
          </p>
        </div>

        {/* Slider wrapper */}
        <div className="relative mx-auto mt-10 max-w-6xl">
          {/* Nav buttons */}
          <button
            className="products-prev absolute left-0 top-[150px] z-20 hidden h-10 w-10 -translate-x-5 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition hover:shadow-md md:flex"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5 text-slate-700" />
          </button>

          <button
            className="products-next absolute right-0 top-[150px] z-20 hidden h-10 w-10 translate-x-5 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition hover:shadow-md md:flex"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5 text-slate-700" />
          </button>

          <Swiper
            modules={[Autoplay, Navigation]}
            loop
            centeredSlides
            slideToClickedSlide
            autoplay={{ delay: 2600, disableOnInteraction: false }}
            speed={700}
            navigation={{
              prevEl: ".products-prev",
              nextEl: ".products-next",
            }}
            spaceBetween={18}
            breakpoints={{
              0: { slidesPerView: 1.1, centeredSlides: true, spaceBetween: 14 },
              480: { slidesPerView: 1.6, centeredSlides: true, spaceBetween: 16 },
              640: { slidesPerView: 2.3, centeredSlides: true, spaceBetween: 18 },
              768: { slidesPerView: 2.8, centeredSlides: true, spaceBetween: 18 },
              1024: { slidesPerView: 3.2, centeredSlides: true, spaceBetween: 20 },
            }}
            className="pb-2"
          >
            {PRODUCTS.map((p, idx) => (
              <SwiperSlide key={idx} className="!h-auto">
                <ProductItem item={p} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white via-white/70 to-transparent md:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white via-white/70 to-transparent md:w-16" />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- */
/* Item (NO image background card) */
/* ---------------------------- */
function ProductItem({ item }) {
  return (
    <div className="group mx-auto flex max-w-[360px] flex-col items-center text-center">
      {/* ✅ Image only (no card, no border, no bg) */}
      <div className="relative flex h-[230px] w-full items-center justify-center sm:h-[250px]">
        <img
          src={item.img}
          alt={item.title}
          loading="lazy"
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <h3 className="mt-5 text-lg font-semibold tracking-tight text-[#002858] sm:text-xl">
        {item.title}
      </h3>

      <p className="mt-2 max-w-[32ch] text-sm leading-relaxed text-slate-600">
        {item.desc}
      </p>

      <Link
        href={item.href}
        className={[
          "mt-5 inline-flex items-center justify-center gap-2",
          "rounded-md border border-[#002858]/25 bg-white px-6 py-2.5",
          "text-sm font-semibold text-[#1D4ED8]",
          "shadow-sm transition-all duration-300",
          "hover:-translate-y-0.5 hover:border-[#002858]/35 hover:shadow-md",
          "focus:outline-none focus:ring-2 focus:ring-[#30B0E0]/40",
        ].join(" ")}
      >
        Read More <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
