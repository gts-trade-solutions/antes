"use client";

import React, { useId, useState } from "react";
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
  { title: "Research ", icon: BookOpen },
  { title: "Hospitality", icon: BedDouble },
  { title: "Agriculture", icon: Trees },
  { title: "Special projects", icon: Ruler },
  { title: "3PL Logistics", icon: Truck },
  { title: "Seafood", icon: Fish },
  { title: "Meat", icon: Drumstick },
  { title: "Food processing", icon: Factory },
  { title: "Food manufacture", icon: Wine },
];

/**
 * ✅ Rounded Hexagon (clean + smooth)
 * Use this for both card + badge
 */
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

export default function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-20">
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
              320: { slidesPerView: 1.15, spaceBetween: 12 },
              480: { slidesPerView: 1.7, spaceBetween: 12 },
              640: { slidesPerView: 2.4, spaceBetween: 14 },
              768: { slidesPerView: 3.2, spaceBetween: 14 },
              1024: { slidesPerView: 4.2, spaceBetween: 16 },
              1280: { slidesPerView: 5, spaceBetween: 18 },
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="pb-2"
          >
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              const active = index === activeIndex;

              return (
                <SwiperSlide key={index} className="!h-auto flex">
                  <HexCard active={active}>
                    <div className="flex items-center justify-center">
                      <HexBadge active={active}>
                        <Icon className="h-5 w-5 text-white" />
                      </HexBadge>
                    </div>

                    <h3 className="mt-5 hex-title text-center text-[15px] font-semibold leading-snug tracking-tight text-slate-900 sm:text-base">
                      {industry.title}
                    </h3>

                    <p
                      className={[
                        "mt-2 text-center text-xs transition-all duration-300",
                        active ? "text-slate-600" : "text-slate-400/80",
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

      {/* ✅ Fix: prevent production global h3 styles from breaking/clipping */}
      <style jsx global>{`
        .hex-title {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;

          /* keep your exact design sizing even if global h3 CSS exists */
          font-size: 15px !important;
          line-height: 1.25 !important;
          font-weight: 600 !important;
          letter-spacing: -0.01em !important;
          margin: 0 !important;
        }
        @media (min-width: 640px) {
          .hex-title {
            font-size: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ============================= */
/* ✅ Rounded Hex Card (SVG) */
/* ✅ Fix: unique gradient IDs to avoid SVG ID collisions in prod */
/* ============================= */
function HexCard({ children, active }) {
  const uid = useId();
  const hexFillId = `hexFill-${uid}`;
  const hexSheenId = `hexSheen-${uid}`;

  return (
    <div className="group w-full">
      <div
        className={[
          "transition-all duration-500",
          active
            ? "scale-[1.02] opacity-100"
            : "scale-[0.98] opacity-[0.86] group-hover:opacity-100",
        ].join(" ")}
      >
        <div
          className={[
            "relative h-[180px] w-full",
            active
              ? "drop-shadow-[0_26px_70px_rgba(2,6,23,0.16)]"
              : "drop-shadow-[0_14px_36px_rgba(2,6,23,0.12)]",
          ].join(" ")}
        >
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id={hexFillId} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="55%" stopColor="#F8FAFC" />
                <stop offset="100%" stopColor="#EEF2FF" />
              </linearGradient>

              <linearGradient id={hexSheenId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(48,176,224,0.14)" />
                <stop offset="55%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
            </defs>

            {/* Fill */}
            <path d={ROUNDED_HEX_PATH} fill={`url(#${hexFillId})`} />
            {/* Sheen */}
            <path d={ROUNDED_HEX_PATH} fill={`url(#${hexSheenId})`} />

            {/* Border */}
            <path
              d={ROUNDED_HEX_PATH}
              fill="none"
              stroke={active ? "rgba(0,40,88,0.85)" : "rgba(0,40,88,0.65)"}
              strokeWidth="3.4"
              strokeLinejoin="round"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div
            className={[
              "relative flex h-[180px] w-full flex-col items-center justify-center px-7 py-6",
              "transition-all duration-300",
              active ? "bg-white/35" : "bg-transparent group-hover:bg-white/30",
            ].join(" ")}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================= */
/* ✅ Rounded Hex Badge (SVG) */
/* ✅ Fix: unique gradient ID to avoid collisions */
/* ============================= */
function HexBadge({ children, active }) {
  const uid = useId();
  const badgeFillId = `badgeFill-${uid}`;

  return (
    <div className="relative h-12 w-12 shrink-0">
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={badgeFillId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#002858" />
            <stop offset="100%" stopColor="#0B1220" />
          </linearGradient>
        </defs>

        <path d={ROUNDED_HEX_PATH} fill={`url(#${badgeFillId})`} />

        <path
          d={ROUNDED_HEX_PATH}
          fill="none"
          stroke={active ? "rgba(48,176,224,0.65)" : "rgba(255,255,255,0.18)"}
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
