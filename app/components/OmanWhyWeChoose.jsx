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

export default function OmanWhyWeChoose() {
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
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(1100px_520px_at_50%_-90px,rgba(0,40,88,0.16),transparent_60%),linear-gradient(to_bottom,#f8fbff,#f3f7ff,white)]" />
      <div className="pointer-events-none absolute -top-28 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#30B0E0]/12 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-[-140px] h-[620px] w-[620px] rounded-full bg-[#002858]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-5 py-2 text-xs font-semibold tracking-[0.18em] text-[#002858] shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#30B0E0]" />
            WHY CHOOSE ANTES
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#002858]">
            Your Trusted Cold Storage Partner
          </h2>

          <p className="mt-4 text-slate-600 leading-relaxed">
            Quality, reliability and customer satisfaction define our approach
            to delivering advanced refrigeration and cold chain solutions.
          </p>
        </div>

        {/* ================= FEATURE GRID (Premium) ================= */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pointsUI.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[28px] border border-white/50 bg-white/70 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:bg-white/85 hover:shadow-[0_30px_90px_rgba(15,23,42,0.14)]"
            >
              {/* corner glow */}
              <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#30B0E0]/15 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* top accent line */}
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#30B0E0] via-blue-600 to-[#002858]" />

              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(48,176,224,0.28),transparent_55%),linear-gradient(to_bottom,rgba(0,40,88,0.12),rgba(0,40,88,0.04))] ring-1 ring-[#30B0E0]/20 transition duration-500 group-hover:scale-110">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="h-8 w-8 object-contain"
                  />
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-[#002858]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* subtle inline CTA */}
                  <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#002858] opacity-70 transition group-hover:opacity-100">
                    Learn more
                    <span className="inline-block h-[1px] w-10 bg-[#002858]/50 transition-all group-hover:w-14" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= BRANDS SECTION ================= */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#002858]">
            Trusted <span className="text-[#30B0E0]">Brands</span>
          </h3>

          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            We collaborate with global refrigeration leaders to deliver
            high-performance and reliable solutions.
          </p>
        </div>

        {/* ================= BRANDS SWIPER (Better UI) ================= */}
        <div className="relative mt-12 max-w-6xl mx-auto">
          {/* Nav Buttons */}
          <button
            aria-label="Previous brand"
            className="brands-prev absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 -translate-x-7 md:flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/70 shadow-lg backdrop-blur transition hover:bg-white hover:shadow-xl"
          >
            ‹
          </button>

          <button
            aria-label="Next brand"
            className="brands-next absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 translate-x-7 md:flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/70 shadow-lg backdrop-blur transition hover:bg-white hover:shadow-xl"
          >
            ›
          </button>

          <Swiper
            modules={[Autoplay, Navigation]}
            loop
            autoplay={{ delay: 1800, disableOnInteraction: false }}
            speed={900}
            navigation={{
              prevEl: ".brands-prev",
              nextEl: ".brands-next",
            }}
            spaceBetween={18}
            breakpoints={{
              0: { slidesPerView: 2.1 },
              640: { slidesPerView: 3.2 },
              1024: { slidesPerView: 4.2 },
              1280: { slidesPerView: 5.2 },
            }}
            className="pb-2"
          >
            {BRANDS.map((brand, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <div className="group relative flex h-24 items-center justify-center overflow-hidden rounded-[22px] border border-white/60 bg-white/70 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl">
                  {/* hover sheen */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                    <div className="absolute -left-1/3 top-0 h-full w-1/2 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                  </div>

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

        {/* Optional divider */}
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>
    </section>
  );
}
