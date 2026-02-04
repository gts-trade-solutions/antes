"use client";

import React, { useRef, useState, useEffect } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Award, Users, MapPin, Users2, Heart, Handshake, Leaf } from "lucide-react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Company() {
  const milestones = [
    { number: "25+", label: "Years of Expertise", icon: <Award className="w-12 h-12 text-black" /> },
    { number: "200+", label: "Satisfied Clients", icon: <Handshake className="w-12 h-12 text-black" /> },
    { number: "5+", label: "Service Locations", icon: <MapPin className="w-12 h-12 text-black" /> },
    { number: "150+", label: "Skilled Team Members", icon: <Users2 className="w-12 h-12 text-black" /> },
  ];

  const values = [
    { title: "People", desc: "We care about our team, stakeholders, customers, and communities.", icon: <Users className="w-12 h-12 text-black" /> },
    { title: "Passion", desc: "Passion drives our culture, energizes our people, and fuels success.", icon: <Heart className="w-12 h-12 text-black" /> },
    { title: "Teamwork", desc: "We build collaborative teams that achieve excellence with precision.", icon: <Handshake className="w-12 h-12 text-black" /> },
    { title: "Environment", desc: "We take responsibility for our planet, ensuring a sustainable tomorrow.", icon: <Leaf className="w-12 h-12 text-black" /> },
  ];

  // Place these under /public/
  const reels = [
    "/1.mp4", "/2.mp4", "/3.mp4", "/4.mp4", "/5.mp4",
    "/6.mp4", "/7.mp4", "/8.mp4", "/9.mp4", "/10.mp4",
    "/11.mp4", "/12.mp4",
  ];

  const buildSources = (path) => {
    const base = path.replace(/\.(mp4|mov|webm)$/i, "");
    return [
      { src: `${base}.webm`, type: "video/webm" },
      { src: `${base}.mp4`, type: "video/mp4" },
      { src: `${base}.MOV`, type: "video/quicktime" },
      { src: `${base}.mov`, type: "video/quicktime" },
    ];
  };

  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const playOnly = (idx) => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === idx) {
        v.muted = true;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  };

  useEffect(() => {
    playOnly(activeIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />

      {/* Hero / Carousel Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-10" />

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-extrabold text-center mb-10">
            <span className="text-nrs-blue-light">About Us</span>
          </h2>

          {/* Portrait Video Carousel — Card Look, 5 per page on desktop */}
          <Swiper
            modules={[Navigation, Pagination, A11y, Keyboard]}
            navigation
            pagination={{ clickable: true }}
            keyboard={{ enabled: true }}
            centeredSlides={false}
            grabCursor
            spaceBetween={24}
            initialSlide={0}
            onSwiper={(swiper) => {
              setActiveIndex(swiper.realIndex);
              setTimeout(() => playOnly(swiper.realIndex), 0);
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
              playOnly(swiper.realIndex);
            }}
            breakpoints={{
              0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 16 },
              480: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 18 },
              768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 22 },
              1280: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 24 },
            }}
            className="!px-2 md:!px-4"
          >
            {reels.map((path, i) => {
              const sources = buildSources(path);
              const active = i === activeIndex;

              return (
                <SwiperSlide key={`${path}-${i}`}>
                  <div className="group h-full w-full">
                    <div
                      className={[
                        "rounded-[22px] bg-white/95 p-2 shadow-xl ring-1 transition-all duration-300",
                        active ? "ring-black/10 scale-[1.01]" : "ring-black/5 hover:shadow-2xl hover:-translate-y-0.5",
                      ].join(" ")}
                    >
                      <div className="relative aspect-[9/16] overflow-hidden rounded-[18px]">
                        <video
                          ref={(el) => (videoRefs.current[i] = el)}
                          className="absolute inset-0 h-full w-full object-cover"
                          playsInline
                          muted
                          loop
                          preload="metadata"
                          controls={!active}
                          autoPlay={active}
                          onLoadedMetadata={(e) => {
                            if (active) e.currentTarget.play().catch(() => {});
                          }}
                        >
                          {sources.map((s) => (
                            <source key={s.src} src={s.src} type={s.type} />
                          ))}
                          Your browser does not support the video tag.
                        </video>

                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <style>{`
            .swiper-pagination-bullet { background: #d1d5db !important; opacity: 1 !important; }
            .swiper-pagination-bullet-active { background: #111827 !important; }
            /* .swiper-button-next, .swiper-button-prev { display: none !important; } */
          `}</style>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-b from-white to-nrs-blue/5">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-stretch">
          <div className="p-10 rounded-3xl bg-gray-100 text-nrs-navy shadow-md hover:shadow-lg transition transform hover:scale-[1.02]">
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg leading-relaxed text-nrs-dark-gray">
              To be the most successful, trusted, and respected system integrator
              and solutions provider for our customers.
            </p>
          </div>
          <div className="p-10 rounded-3xl bg-gray-100 text-nrs-navy shadow-md hover:shadow-lg transition transform hover:scale-[1.02]">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed text-nrs-dark-gray">
              Harnessing superior thinking, teamwork, and attention to detail in
              delivering engineered products that enhance safety, reliability, and
              performance while reducing our carbon footprint.
            </p>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-nrs-blue text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
            Milestones in <span className="text-nrs-blue-light">Cold Chain Innovation</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg opacity-90 mb-12">
            Each count represents our success in delivering tailored refrigeration solutions
            across multiple sectors globally.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {milestones.map((m, i) => (
              <div
                key={i}
                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105"
              >
                <div className="mb-4 flex justify-center">{m.icon}</div>
                <h3 className="text-3xl font-bold text-nrs-navy mb-2">{m.number}</h3>
                <p className="text-nrs-dark-gray">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-nrs-navy mb-12">
            Our <span className="text-nrs-blue">Core Values</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div
                key={i}
                className="p-8 bg-nrs-blue/5 rounded-2xl border border-nrs-blue/20 shadow-md hover:shadow-lg hover:scale-105 transition"
              >
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold text-nrs-navy mb-2">{value.title}</h3>
                <p className="text-nrs-dark-gray">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-gradient-to-b from-nrs-blue/10 to-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-nrs-navy mb-8">
            Quality <span className="text-nrs-blue">Standards</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-nrs-dark-gray mb-16">
            We adhere to international benchmarks and continuously innovate to meet
            global standards of excellence in every solution we provide.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-10 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition text-left">
              <h3 className="text-2xl font-bold text-nrs-navy mb-4">Quality Objectives</h3>
              <p className="text-nrs-dark-gray">
                Ensuring consistency and reliability in everything we create, from design to delivery.
              </p>
            </div>
            <div className="p-10 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition text-left">
              <h3 className="text-2xl font-bold text-nrs-navy mb-4">Quality Policy 2024</h3>
              <p className="text-nrs-dark-gray">
                Our 2024 update strengthens our promise of continuous improvement and outstanding customer value.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
