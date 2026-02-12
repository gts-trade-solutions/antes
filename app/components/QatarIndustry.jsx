"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
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
  { title: "Fast food chains", icon: Utensils },
  { title: "Retail", icon: Store },
  { title: "Super markets", icon: ShoppingCart },
  { title: "Restaurants", icon: Building2 },
  { title: "Pharmacy", icon: Hospital },
  { title: "Research", icon: BookOpen },
  { title: "Hospitality", icon: BedDouble },
  { title: "Agriculture", icon: Trees },
  { title: "Special projects", icon: Ruler },
  { title: "3PL Logistics", icon: Truck },
  { title: "Seafood", icon: Fish },
  { title: "Meat", icon: Drumstick },
  { title: "Food processing", icon: Factory },
  { title: "Food manufacture", icon: Wine },
];

/** Rounded Hex Path */
const ROUNDED_HEX_PATH =
  "M 24 14 " +
  "Q 28 6 38 6 " +
  "L 62 6 " +
  "Q 72 6 76 14 " +
  "L 92 42 " +
  "Q 96 50 92 58 " +
  "L 76 86 " +
  "Q 72 94 62 94 " +
  "L 38 94 " +
  "Q 28 94 24 86 " +
  "L 8 58 " +
  "Q 4 50 8 42 " +
  "Z";

export default function QatarIndustry() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    // ✅ force SAME colors in light/dark
    <section className="industries-section relative overflow-hidden bg-white py-10 sm:py-20 text-slate-900">
      {/* Background */}
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.25)_1px,transparent_0)] [background-size:18px_18px]" />

      <div className="relative mx-auto max-w-7xl px-2 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xxl font-semibold uppercase tracking-[0.22em] text-slate-700">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-900/70" />
            Industries
          </div>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Industry We Serve
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            As cold storage suppliers in India, Antes specializes in innovative cold storage building solutions for
            diverse industries to meet the need for efficient and safe storage of perishable goods.
          </p>
        </div>

        {/* Slider panel */}
        <div className="mx-auto mt-10 max-w-6xl rounded-[34px] border border-slate-200 bg-white p-4 shadow-[0_22px_70px_rgba(2,6,23,0.08)] sm:p-6">
          <Swiper
            modules={[Autoplay]}
            loop
            centeredSlides
            slideToClickedSlide
            watchSlidesProgress
            speed={650}
            autoplay={{ delay: 2200, disableOnInteraction: false }}
            spaceBetween={18}
            breakpoints={{
              320: { slidesPerView: 1.05, spaceBetween: 12 },
              380: { slidesPerView: 1.15, spaceBetween: 12 },
              480: { slidesPerView: 1.45, spaceBetween: 12 },
              640: { slidesPerView: 2.4, spaceBetween: 14 },
              768: { slidesPerView: 3.2, spaceBetween: 14 },
              1024: { slidesPerView: 4.2, spaceBetween: 16 },
              1280: { slidesPerView: 5, spaceBetween: 18 },
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="pb-2 industries-swiper"
          >
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              const active = index === activeIndex;

              return (
                <SwiperSlide key={index} className="!h-auto industries-slide">
                  <HexCard active={active}>
                    <div className="flex items-center justify-center">
                      <HexBadge active={active}>
                        <Icon className="h-5 w-5 text-white" />
                      </HexBadge>
                    </div>

                    <h3 className="mt-5 hex-title text-center text-[15px] font-semibold leading-snug tracking-tight text-slate-900 sm:text-base">
                      {industry.title}
                    </h3>

                    {/* ✅ mobile: 2 lines */}
                    <p
                      className={[
                        "hex-sub mt-2 text-center text-xs transition-all duration-300",
                        active ? "text-slate-600" : "text-slate-500",
                      ].join(" ")}
                    >
                      Cold storage &amp; refrigeration solutions
                    </p>

                    <div
                      className={[
                        "mx-auto mt-4 h-[3px] w-10 rounded-full transition-all duration-300",
                        active ? "bg-[#002858]/85" : "bg-slate-200",
                      ].join(" ")}
                    />
                  </HexCard>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      {/* Scoped styles */}
      <style jsx global>{`
        /* keep this section light even if site is dark */
        .industries-section,
        .industries-section * {
          color-scheme: light;
        }

        .hex-title {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;

          font-size: 15px !important;
          line-height: 1.25 !important;
          font-weight: 600 !important;
          letter-spacing: -0.01em !important;
          margin: 0 !important;
          color: #0f172a !important;
        }
        @media (min-width: 640px) {
          .hex-title {
            font-size: 16px !important;
          }
        }

        /* ✅ MOBILE ONLY: centered + correct hex + reduce height a bit */
        @media (max-width: 639px) {
          .industries-swiper {
            padding-left: 10px;
            padding-right: 10px;
          }
          .industries-slide {
            display: flex !important;
            justify-content: center !important;
          }

          .hex-card-wrap {
            max-width: 360px !important;
            width: 100% !important;
          }

          /* reduce height slightly (your request) */
          .hex-card-h {
            height: 188px !important;
          }

          /* force subtitle 2 lines */
          .hex-sub {
            max-width: 175px;
            margin-left: auto;
            margin-right: auto;
            white-space: normal !important;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-wrap: balance;
            line-height: 1.25 !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ============================= */
/* ✅ Hex Card (NO <defs> ids → NO production clone collision) */
/* Mobile: preserveAspectRatio meet */
/* Desktop: preserveAspectRatio none */
/* ============================= */
function HexCard({ children, active }) {
  return (
    <div className="group w-full hex-card-wrap">
      <div
        className={[
          "transition-all duration-500",
          active ? "scale-[1.02]" : "scale-[0.985] group-hover:scale-[1.0]",
        ].join(" ")}
      >
        <div
          className={[
            "relative h-[180px] w-full hex-card-h",
            active
              ? "drop-shadow-[0_26px_70px_rgba(2,6,23,0.16)]"
              : "drop-shadow-[0_14px_36px_rgba(2,6,23,0.12)]",
          ].join(" ")}
        >
          {/* MOBILE SVG */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 h-full w-full sm:hidden"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            {/* base fill */}
            <path d={ROUNDED_HEX_PATH} fill="#F8FAFC" />
            {/* soft sheen (no gradient id) */}
            <path d={ROUNDED_HEX_PATH} fill="rgba(48,176,224,0.10)" />
            {/* border */}
            <path
              d={ROUNDED_HEX_PATH}
              fill="none"
              stroke={active ? "rgba(0,40,88,0.85)" : "rgba(0,40,88,0.55)"}
              strokeWidth="3.4"
              strokeLinejoin="round"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* DESKTOP SVG */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 h-full w-full hidden sm:block"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d={ROUNDED_HEX_PATH} fill="#F8FAFC" />
            <path d={ROUNDED_HEX_PATH} fill="rgba(48,176,224,0.10)" />
            <path
              d={ROUNDED_HEX_PATH}
              fill="none"
              stroke={active ? "rgba(0,40,88,0.85)" : "rgba(0,40,88,0.55)"}
              strokeWidth="3.4"
              strokeLinejoin="round"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div
            className={[
              "relative flex w-full flex-col items-center justify-center px-7 py-6",
              "h-[180px] sm:h-[180px]",
              "transition-all duration-300",
              active ? "bg-white/35" : "bg-white/25 group-hover:bg-white/30",
            ].join(" ")}
            style={{ color: "#0f172a" }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================= */
/* ✅ Hex Badge (NO <defs> ids) */
/* ============================= */
function HexBadge({ children, active }) {
  return (
    <div className="relative h-12 w-12 shrink-0">
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        {/* solid dark fill (same as your correct image) */}
        <path d={ROUNDED_HEX_PATH} fill="#0B1220" />
        <path
          d={ROUNDED_HEX_PATH}
          fill="none"
          stroke={active ? "rgba(48,176,224,0.65)" : "rgba(255,255,255,0.22)"}
          strokeWidth="2.2"
          strokeLinejoin="round"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div
        className={[
          "relative flex h-full w-full items-center justify-center transition-transform duration-300",
          active ? "scale-[1.05]" : "group-hover:scale-[1.07]",
        ].join(" ")}
      >
        {children}
      </div>
    </div>
  );
}
