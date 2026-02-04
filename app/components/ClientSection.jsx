"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";
import "swiper/css";

const clients = [
  { name: "AFDC", logo: "/clients/afdc.png" },
  { name: "Afghan Brothers", logo: "/clients/afghan brothers.png" },
  { name: "Alshaya", logo: "/clients/alshaya.svg" },
  { name: "Bakemart", logo: "/clients/bakemart-logo.png" },
  { name: "Burger King", logo: "/clients/burgerKing.png" },
  { name: "Dominos", logo: "/clients/dominos.png" },
  { name: "Goan Fresh", logo: "/clients/GoanFresh.png" },
  { name: "Grand", logo: "/clients/grand.png" },
  { name: "GWC", logo: "/clients/gwc.svg" },
  { name: "Jacme", logo: "/clients/jacme.webp" },
  { name: "KFC", logo: "/clients/kfc.svg" },
  { name: "LG", logo: "/clients/lg-logo-14412.png" },
  { name: "Lulu", logo: "/clients/LuLu-Logo.png" },
  { name: "Milma", logo: "/clients/Milma.png" },
  { name: "MRA", logo: "/clients/mra.png" },
  { name: "Nesto", logo: "/clients/nesto.png" },
  { name: "Papa John’s", logo: "/clients/papajohns.svg" },
  { name: "Parisons", logo: "/clients/parisons.png" },
  { name: "Qadco", logo: "/clients/qadcoo.png" },
  { name: "Qatar University", logo: "/clients/qatarUcity.svg" },
  { name: "Snowy Ice Creams", logo: "/clients/snowyicecreams-removebg-preview.png" },
  { name: "T-Coco", logo: "/clients/Tcoco.png" },
  { name: "Yashaswi Surimi", logo: "/clients/yashaswisurimi.png" },
  { name: "2", logo: "/clients/2.png" },
  { name: "3", logo: "/clients/3.png" },
  { name: "4", logo: "/clients/4.png" },
  { name: "5", logo: "/clients/5.png" },
  { name: "6", logo: "/clients/6.webp" },
  { name: "7", logo: "/clients/7.png" },
  { name: "8", logo: "/clients/8.png" },
  { name: "9", logo: "/clients/9.png" },
  { name: "11", logo: "/clients/11.png" },
];

export default function ClientsSection() {
  return (
    <section className="relative bg-white py-10 sm:py-14">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xxxl font-semibold uppercase tracking-widest text-[#002858]">
            Our Clients
          </p>

          <h2 className="mt-5 text-2xl font-semibold tracking-tight text-[#002858] sm:text-3xl lg:text-4xl">
            Trusted by leading brands
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            We are proud to partner with global leaders and trusted local names across food, retail, hospitality,
            logistics, and industrial refrigeration.
          </p>
        </div>

        {/* Slider */}
        <div className="mx-auto mt-8 max-w-7xl">
          <Swiper
            modules={[Autoplay, A11y]}
            spaceBetween={22}
            loop
            autoplay={{ delay: 1800, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 6 },
            }}
          >
            {clients.map((client, index) => (
              <SwiperSlide key={`${client.name}-${index}`} className="!h-auto">
                <div className="mx-auto flex h-28 w-full max-w-[180px] items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="h-14 w-32 sm:h-16 sm:w-36">
                    <img
                      src={client.logo}
                      alt={client.name}
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mx-auto mt-12 h-px max-w-6xl bg-slate-200" />
      </div>
    </section>
  );
}
