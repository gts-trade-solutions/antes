"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mr. Rony Tom",
    role: "Director, Jacme",
    quote:
      "Our firm Pristine Agro is engaged in manufacturing of Processed & Frozen FNV, Indian-Kerala Style Parotta’s & other ready to eat products. Antes Cold Storage Manufacturers in India has provided us the Freezing & Storage Solution for said project, which involves 2.5 TON Blast Freezer & 200 TON Capacity Storage Freezer. We Happy & Satisfied with the Performance of the equipment’s and the services rendered by Antes.",
    meta: "2.5 TON Blast Freezer • 200 TON Storage Freezer",
  },
  {
    name: "Mr. Nisar",
    role: "Director, Tcoco",
    quote:
      "Professional Cold Storage Construction team right from planning, design, installation and service for setting up of Blast Freezer & Freezer for our Coconut Pulp plant. After sales service response is prompt. During our Business Expansion, extended full support helping in commissioning of the New Plant in a very short notice.",
    meta: "Planning → Design → Installation → Service",
  },
  {
    name: "Mr. Biju Nair",
    role: "Director, Goan Fresh",
    quote:
      "Antes team has completed our Turnkey Project for 972 Pallets Racking Cold-store Warehousing at -18 to -20 DegC complete with MHE & Docking Solutions for our Seafood Export Business. We are Happy with timely completion & performance of the cold room. We are associated with Antes for past 3 years, so far they have installed 1500 MT capacity cold store, this itself makes the best Cold Storage Manufacturers in India. We are satisfied with product and services provided by Antes.",
    meta: "972 Pallets • -18 to -20°C • MHE + Docking",
  },
  {
    name: "Mr. Uday",
    role: "MD, Yashaswi",
    quote:
      "Antes had completed our new Cold Storage Project of 880 Pallet Racking, the project was a turnkey project. We are happy with timely completion and performance of the cold store. They are the most recommended Cold Storage Manufacturers in India, We are satisfied with the way project was executed.",
    meta: "880 Pallets • Turnkey delivery",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative bg-white py-10 sm:py-14">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xxl font-semibold uppercase tracking-widest text-[#002858]">
            Testimonials
          </p>

          <h3 className="mt-5 text-2xl font-semibold tracking-tight text-[#002858] sm:text-3xl lg:text-4xl">
            What clients say about Antes
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            Feedback from blast freezing, turnkey warehousing, racking, and cold storage execution.
          </p>

          <div className="mt-5 flex items-center justify-center gap-2 text-[#002858]">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span className="text-xs font-semibold text-slate-600">
              Trusted by repeat customers
            </span>
          </div>
        </div>

        {/* Slider */}
        <div className="mx-auto mt-10 max-w-6xl rounded-3xl border border-black/10 bg-white p-4 shadow-[0_22px_70px_rgba(2,6,23,0.10)] sm:p-6">
          <Swiper
            modules={[Autoplay, Pagination, A11y]}
            loop
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={16}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 12 },
              768: { slidesPerView: 2, spaceBetween: 14 },
              1024: { slidesPerView: 3, spaceBetween: 16 },
            }}
            className="pb-10"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx} className="!h-auto">
                <figure
                  className={[
                    "relative flex h-[360px] flex-col overflow-hidden rounded-3xl",
                    "bg-white border border-black/10 p-6",
                    "shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10",
                    "sm:h-[380px] lg:h-[400px]",
                  ].join(" ")}
                >
                  <div className="absolute right-5 top-5 text-[#002858]/10">
                    <Quote className="h-10 w-10" />
                  </div>

                  {t.meta && (
                    <div className="mb-4 inline-flex w-fit rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-semibold text-[#002858]">
                      {t.meta}
                    </div>
                  )}

                  <blockquote className="text-[15px] leading-7 text-slate-600 line-clamp-7">
                    “{t.quote}”
                  </blockquote>

                  <figcaption className="mt-auto flex items-center gap-3 border-t border-black/10 pt-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#002858] text-sm font-semibold text-white">
                      {t.name.split(" ")[1]?.[0] || t.name[0]}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#002858]">
                        {t.name}
                      </div>
                      <div className="text-xs text-slate-600">{t.role}</div>
                    </div>
                  </figcaption>

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-transparent via-[#30B0E0]/70 to-transparent opacity-90" />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* pagination colors */}
          <style jsx global>{`
            .swiper-pagination-bullet {
              background: rgba(148, 163, 184, 0.8) !important;
              opacity: 1 !important;
            }
            .swiper-pagination-bullet-active {
              background: rgba(0, 40, 88, 1) !important;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
