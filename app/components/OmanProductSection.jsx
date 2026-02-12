"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PRODUCTS = [
  {
    title: "Cold Store Warehouse",
    desc: "For Cold Warehousing with Racking & MHE.",
    img: "/large-cold-storage-warehouse-supplier-india.webp",
    href: "/warehouse-turnkey-solution",
    tag: "Turnkey",
  },
  {
    title: "Blast Freezers",
    desc: "Portable and customised.",
    img: "/blast-freezers-suppliers.webp",
    href: "/blast-freezers",
    tag: "Freezing",
  },
  {
    title: "Walk-in Cold Rooms",
    desc: "Customized walk-in chillers & freezers",
    img: "/walkin-cold-rooms.webp",
    href: "/walkin-cold-rooms",
    tag: "Chillers",
  },
  {
    title: "Ice Cube Machines",
    desc: "Wide range of Ice machines",
    img: "/p-image-5.svg",
    href: "/icecube-machines",
    tag: "Ice",
  },
  {
    title: "Doors and Dockers",
    desc: "For Rooms and Warehousing",
    img: "/p-image-6.svg",
    href: "/dock-doors",
    tag: "Access",
  },
  {
    title: "Material Handling Equipment",
    desc: "Comprehensive Solutions for Effective Material Movement",
    img: "/mhetest.png",
    href: "/supermarket-display-chillers",
    tag: "MHE",
  },
  {
    title: "ASRS Cold Storage",
    desc: "Automated Cold Storage Solutions",
    img: "/asrctest.png",
    href: "/icecube-machines",
    tag: "Automation",
  },
];

export default function OmanProductSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f7fbff] via-[#f3f7ff] to-white" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#002858]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 right-[-80px] h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-5 py-2 text-xs font-semibold tracking-widest text-[#002858] shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#002858]" />
            SOLUTIONS
          </span>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-[#002858] sm:text-4xl">
            Cold Chain Solutions We Deliver
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Modular, scalable refrigeration systems engineered for performance,
            safety, and long-term efficiency across diverse industries.
          </p>
        </div>

        {/* Slider */}
        <div className="relative mt-14">
          {/* Nav Buttons */}
          <button
            aria-label="Previous"
            className="products-prev absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 -translate-x-6 md:flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-white/70 shadow-lg backdrop-blur transition hover:bg-white"
          >
            <ChevronLeft className="h-5 w-5 text-[#002858]" />
          </button>

          <button
            aria-label="Next"
            className="products-next absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 translate-x-6 md:flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-white/70 shadow-lg backdrop-blur transition hover:bg-white"
          >
            <ChevronRight className="h-5 w-5 text-[#002858]" />
          </button>

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            loop
            centeredSlides
            slideToClickedSlide
            autoplay={{ delay: 3200, disableOnInteraction: false }}
            speed={750}
            navigation={{ prevEl: ".products-prev", nextEl: ".products-next" }}
            pagination={{ clickable: true }}
            spaceBetween={26}
            breakpoints={{
              0: { slidesPerView: 1.08 },
              640: { slidesPerView: 2.15 },
              1024: { slidesPerView: 3.1 },
            }}
            className="pb-10"
          >
            {PRODUCTS.map((product, idx) => (
              <SwiperSlide key={idx} className="!h-auto">
                <ProductCard item={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Swiper pagination styling */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          opacity: 0.35;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}

/* ===================== */
/* Premium Product Card  */
/* ===================== */
function ProductCard({ item }) {
  return (
    <div className="group relative h-full overflow-hidden rounded-[28px] border border-slate-200/70 bg-white/80 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Top glow */}
      <div className="pointer-events-none absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#002858]/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

      {/* Image */}
      <div className="relative h-[230px] overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
        {/* soft overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,40,88,0.10),transparent_55%)] opacity-0 transition duration-500 group-hover:opacity-100" />

        <img
          src={item.img}
          alt={item.title}
          className="mx-auto h-full max-h-[175px] w-auto object-contain pt-7 transition-transform duration-500 group-hover:scale-[1.08]"
        />

        {/* Tag chip */}
        <div className="absolute left-5 top-5 inline-flex items-center rounded-full border border-white/60 bg-white/75 px-3 py-1 text-[11px] font-semibold tracking-wide text-[#002858] shadow-sm backdrop-blur">
          {item.tag || "Solution"}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-7 pt-6 text-center">
        <h3 className="text-lg font-bold tracking-tight text-[#002858]">
          {item.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-2">
          {item.desc}
        </p>

        {/* CTA */}
        <Link
          href={item.href}
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-[#002858] shadow-sm transition hover:border-[#002858]/30 hover:shadow-md"
        >
          Explore
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Bottom accent */}
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-[#002858] via-blue-600 to-[#002858] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}
