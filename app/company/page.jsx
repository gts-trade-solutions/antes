"use client";

import React, { useRef, useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Award, Users, MapPin, Users2, Handshake, Leaf, Check } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Company() {
  const milestones = [
    { number: "20+", label: "Years HVAC & Refrigeration Experience", icon: <Award className="w-10 h-10 text-slate-900" /> },
    { number: "India + GCC", label: "Operations: India • Oman • Qatar", icon: <MapPin className="w-10 h-10 text-slate-900" /> },
    { number: "SKS Model", label: "Design → Delivery → Projects → Installation → Support", icon: <Handshake className="w-10 h-10 text-slate-900" /> },
    { number: "Multi-Industry", label: "Food • Dairy • Seafood • Pharma • Logistics", icon: <Users2 className="w-10 h-10 text-slate-900" /> },
  ];

  const principles = [
    {
      title: "Efficiency & Safety",
      desc: "We design cold storage systems that ensure maximum product safety, smooth operations, and compliance with industry standards.",
      icon: <Users className="w-10 h-10 text-slate-900" />,
    },
    {
      title: "Eco-Friendly Innovation",
      desc: "Our solutions prioritize energy efficiency and sustainable refrigeration practices, enabling clients to reduce operating costs and environmental impact.",
      icon: <Leaf className="w-10 h-10 text-slate-900" />,
    },
    {
      title: "Commitment to Partnership",
      desc: "We work closely with clients as long-term partners, providing seamless support from system planning and installation to after-sales service.",
      icon: <Handshake className="w-10 h-10 text-slate-900" />,
    },
  ];

  const whyChoose = [
    {
      title: "Industry-Focused Expertise",
      desc: "Antes Global is a recognized cold storage solutions provider in India, serving industries such as food processing, dairy, seafood, poultry, pharmaceuticals, and cold logistics. Each solution is engineered to align with industry-specific requirements.",
    },
    {
      title: "Integrated Cold Storage Solutions",
      desc: "We offer a comprehensive range of blast freezers, walk-in cold rooms, processing cold rooms, doors, and docking solutions—delivering fully integrated cold storage systems tailored to project needs.",
    },
    {
      title: "Quality-Driven Execution",
      desc: "Our reputation is built on consistent quality. We follow proven engineering practices and use reliable technologies to ensure long-lasting performance and system dependability.",
    },
    {
      title: "Innovation & Energy Efficiency",
      desc: "By incorporating modern refrigeration technologies, we deliver cold storage solutions that improve operational efficiency while minimizing energy consumption.",
    },
    {
      title: "Customized Solutions with End-to-End Support",
      desc: "From consultation and system design to installation and ongoing service, Antes Global provides complete project support—ensuring reliable performance throughout the system lifecycle.",
    },
  ];

  const reels = ["/1.mp4", "/2.mp4", "/3.mp4", "/4.mp4", "/5.mp4", "/6.mp4", "/7.mp4", "/8.mp4", "/9.mp4", "/10.mp4", "/11.mp4", "/12.mp4","/13.mp4", "/14.mp4", "/15.mp4", "/16.mp4", "/17.mp4", "/18.mp4", "/19.mp4", "/20.mp4","21.mp4"];

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

  // ✅ container-fluid wrapper (Bootstrap style)
  // - full width always
  // - nice side padding on all screens
  const FLUID = "relative w-full px-4 sm:px-6 lg:px-10";

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* HERO / VIDEO CAROUSEL */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_15%_10%,rgba(56,189,248,0.10),transparent_55%),radial-gradient(900px_500px_at_85%_90%,rgba(15,23,42,0.08),transparent_55%)]" />

        <div className={FLUID}>
          <div className="text-center">
            <div className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-2 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-700 backdrop-blur">
              About Antes Global
            </div>

            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              End-to-end cold chain &amp; refrigeration solutions.
            </h1>

            <p className="mt-3 text-justify leading-relaxed text-slate-600 sm:text-lg">
              Antes Global is a fast-growing commercial refrigeration and cold chain solution provider, specializing in
              delivering integrated, end-to-end cold chain solutions tailored to the specific operational requirements
              of our clients. We support a diverse range of industries including food processing, cold storage and
              packaging, retail and quick-service restaurants, dairy, seafood exports, large multipurpose cold
              warehousing, hospitality, pharmaceuticals, process line cooling, and cold chain logistics.
            </p>

            <p className="mt-3 text-justify leading-relaxed text-slate-600 sm:text-lg">
              With active operations across India, Oman, and Qatar, Antes Global delivers region-specific cold chain
              solutions, backed by a deep understanding of local climatic conditions, regulatory compliance, and
              industry-specific performance standards.
            </p>

            <p className="mt-3 text-justify leading-relaxed text-slate-600 sm:text-lg">
              Our core strength lies in our in-house team of skilled and experienced professionals, operating under our
              proprietary “5KS” – Five Key Cross-Functional Specializations, enabling us to deliver seamless, reliable,
              and performance-driven cold chain solutions from concept to commissioning and beyond.
            </p>
          </div>

          <div className="mt-4 rounded-3xl border border-black/10 bg-white/70 p-3 shadow-[0_18px_55px_rgba(0,0,0,0.10)] backdrop-blur sm:p-5">
            <Swiper
              modules={[Navigation, Pagination, A11y, Keyboard]}
              navigation
              pagination={{ clickable: true }}
              keyboard={{ enabled: true }}
              grabCursor
              spaceBetween={20}
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
                0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 14 },
                480: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 16 },
                768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 18 },
                1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 20 },
                1280: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 20 },
              }}
              className="!px-1 sm:!px-2"
            >
              {reels.map((path, i) => {
                const sources = buildSources(path);
                const active = i === activeIndex;

                return (
                  <SwiperSlide key={`${path}-${i}`}>
                    <div className="h-full w-full">
                      <div
                        className={[
                          "rounded-[22px] bg-white p-2 ring-1 transition-all duration-300",
                          active
                            ? "ring-black/10 shadow-[0_18px_55px_rgba(0,0,0,0.18)]"
                            : "ring-black/5 hover:shadow-[0_18px_55px_rgba(0,0,0,0.14)] hover:-translate-y-0.5",
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
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <style>{`
              .swiper-pagination-bullet { background: #cbd5e1 !important; opacity: 1 !important; }
              .swiper-pagination-bullet-active { background: #0f172a !important; }
            `}</style>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="relative py-8 sm:py-20 bg-white">
        <div className={FLUID}>
          <div className="text-center">
            <div className="inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-700">
              About Us
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              About Antes Global
            </h2>

            <div className="mx-auto mt-4 h-px max-w-2xl bg-black/10" />
          </div>

          <div className="mt-4 rounded-3xl border border-black/10 bg-white p-7 shadow-sm sm:p-9">
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              Antes Global is a fast-growing commercial refrigeration and cold chain solution provider, specializing in
              delivering integrated, end-to-end cold chain solutions tailored to the specific operational requirements
              of our clients. We support a diverse range of industries including food processing, cold storage and
              packaging, retail and quick-service restaurants, dairy, seafood exports, large multipurpose cold
              warehousing, hospitality, pharmaceuticals, process line cooling, and cold chain logistics.
            </p>

            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              With active operations across India, Oman, and Qatar, Antes Global delivers region-specific cold chain
              solutions, backed by a deep understanding of local climatic conditions, regulatory compliance, and
              industry-specific performance standards.
            </p>

            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              Our core strength lies in our in-house team of skilled and experienced professionals, operating under our
              proprietary “5KS” – Five Key Cross-Functional Specializations, enabling us to deliver seamless, reliable,
              and performance-driven cold chain solutions from concept to commissioning and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* VISION + MISSION */}
    <section className="relative py-10 sm:py-20">
  <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

  <div className={FLUID}>
    <div className="mx-auto max-w-6xl">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        {/* <p className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#002858]">
          About Antes
        </p> */}

        <h2 className="text-3xl font-semibold tracking-tight text-[#002858] sm:text-4xl">
          Vision & Mission
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
          Our direction and commitment in delivering energy-saving refrigeration and cold chain solutions.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {/* Vision */}
        <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_70px_rgba(2,6,23,0.10)] sm:p-8">
          {/* soft background */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#30B0E0]/10 via-white to-slate-50" />
          {/* top accent */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#30B0E0]/80 to-transparent" />
          {/* inner ring */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-slate-200/60" />

          <div className="relative">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#002858] shadow-[0_12px_30px_rgba(0,40,88,0.22)]">
                {/* eye icon */}
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#002858]">Vision</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  Antes’ focus is on value engineering, supported by innovation and technological advancement to deliver
                  energy-saving refrigeration and cold chain solutions for our customers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_70px_rgba(2,6,23,0.10)] sm:p-8">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-[#30B0E0]/10" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#002858]/80 to-transparent" />
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-slate-200/60" />

          <div className="relative">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#30B0E0] shadow-[0_12px_30px_rgba(48,176,224,0.22)]">
                {/* target icon */}
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="8" />
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v3M22 12h-3M12 22v-3M2 12h3" />
                </svg>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#002858]">Mission</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  We build transparent, long-term client relationships based on honesty, trust, and strong commitment,
                  while delivering eco-friendly cold chain solutions through reliable technology partnerships and an
                  end-to-end integrated execution approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* subtle divider */}
      <div className="mx-auto mt-12 h-px max-w-6xl bg-slate-200" />
    </div>
  </div>
</section>


      {/* CORE PRINCIPLES */}
      <section className="relative py-8 sm:py-20 bg-white">
        <div className={FLUID}>
          <div className="text-center">
            <div className="inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-700">
              Our Core Principles
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Built for performance, efficiency and trust.
            </h2>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
            {principles.map((p) => (
              <div
                key={p.title}
                className="group rounded-3xl border border-black/10 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                    {React.cloneElement(p.icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MILESTONES */}

<section className="bg-white py-10 sm:py-12">
  <div className={FLUID}>
    {/* Heading */}
    <div className="text-center">
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        Our <span className="text-[#2B6EF3]">Journey</span>
      </h2>
      <p className="mt-1.5 text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
        From Vision to Industry Impact
      </p>
    </div>

    {(() => {
      const items = [
        {
          year: "2015",
          yearBlue: true,
          title: "The Beginning",
          desc:
            "Antes was\nfounded with a clear\nvision-to provide reliable,\nenergy-efficient, and\ncustomized cold\nstorage solutions\ntailored to industry\nneeds",
        },
        {
          year: "2017",
          title: "First Turnkey\nProject\nDelivered",
          desc:
            "Antes forays into large-\nscale turnkey solutions\nand successfully\ncompletes its first\nturnkey project.",
        },
        {
          year: "2022",
          title: "FIFA World Cup\n(Qatar)",
          desc:
            "Project of 147 Cold\nRooms Completed at a\ntime record of 57 Days",
        },
        {
          year: "2023",
          title: "Indias First\nAS/RS\nCold Storage",
          desc:
            "Antes, is committed to\ntransforming the cold\nchain industry by\nintroducing breakthrough\ntechnologies and\nend-to-end solutions\nthat redefine performance\nand reliability.",
        },
        {
          year: "2024",
          title: "Advancing\nLeadership\nin AS/RS\nSolutions",
          desc:
            "Antes strengthens its\nleadership position\nby successfully\ncompleting its second\nand third AS/RS cold\nstorage projects.",
        },
        {
          year: "2025",
          title: "10+ Years\nof\nExcellence",
          desc:
            "Today,\nAG Cooling Solutions PVT\nLTD\nstands as a trusted cold\nchain solutions partner,\ndelivering sustainable,\ntechnology-driven\nrefrigeration systems with\nprecision, performance,\nand long-term value.",
          highlight: true,
        },
      ];

      const Timeline = () => (
        <>
          {/* top line + markers */}
          <div className="relative h-[105px]">
            {/* main line */}
            <div className="absolute left-0 right-0 top-[58px] h-[4px] rounded-full bg-[#9DB6D3]" />

            {/* end dots */}
            <div className="absolute left-0 top-[56px] h-[9px] w-[9px] -translate-x-1 rounded-full bg-[#9DB6D3]" />
            <div className="absolute right-0 top-[56px] h-[9px] w-[9px] translate-x-1 rounded-full bg-[#9DB6D3]" />

            {/* points */}
            <div className="absolute inset-x-0 top-0 grid grid-cols-6">
              {items.map((m) => (
                <div key={m.year} className="relative flex justify-center">
                  {/* year */}
                  <div
                    className={[
                      "absolute top-0 text-[22px] font-extrabold",
                      m.yearBlue ? "text-[#2B6EF3]" : "text-slate-900",
                    ].join(" ")}
                  >
                    {m.year}
                  </div>

                  {/* circle */}
                  <div className="absolute top-[38px] flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#2F5FA8] shadow-[0_8px_14px_rgba(2,6,23,0.10)]">
                    <div className="h-[15px] w-[15px] rounded-full bg-[#BFD4F2]" />
                  </div>

                  {/* stem + bottom dot */}
                  <div className="absolute top-[78px] h-[30px] w-[3px] rounded-full bg-[#9DB6D3]" />
                  <div className="absolute top-[106px] h-[9px] w-[9px] rounded-full bg-[#9DB6D3]" />
                </div>
              ))}
            </div>
          </div>

          {/* cards */}
          <div className="mt-2 grid grid-cols-6 gap-5">
            {items.map((m) => (
              <div
                key={m.title}
                className="overflow-hidden bg-[#EAF2FB] rounded-t-[28px] rounded-b-[56px]"
              >
                {/* blue header strip for last card */}
                {m.highlight ? (
                  <div className="bg-[#9DB6D3] px-4 py-4">
                    <h3 className="whitespace-pre-line text-center text-[24px] font-extrabold leading-snug text-slate-900">
                      {m.title}
                    </h3>
                  </div>
                ) : (
                  <div className="px-4 pt-6">
                    <h3 className="whitespace-pre-line text-center text-[18px] font-extrabold leading-snug text-slate-900">
                      {m.title}
                    </h3>
                  </div>
                )}

                <div className={m.highlight ? "px-4 pt-4 pb-8" : "px-4 pt-3 pb-8"}>
                  <p className="whitespace-pre-line text-center text-[12px] leading-relaxed text-slate-800">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs font-semibold tracking-wide text-slate-700">
            Engineering Cold Storage Solutions for the Past Decade and Beyond
          </p>
        </>
      );

      return (
        <>
          {/* Desktop: smaller width so it fits */}
          <div className="mt-10 hidden lg:block">
            <div className="mx-auto w-[1320px]">
              <Timeline />
            </div>
          </div>

          {/* Mobile/Tablet */}
          <div className="mt-8 lg:hidden">
            <div className="mx-auto max-w-3xl space-y-4">
              {items.map((m, idx) => (
                <div
                  key={m.year}
                  className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="absolute left-0 top-0 h-full w-12 bg-slate-50" />

                  <div className="absolute left-6 top-7 -translate-x-1/2">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#9DB6D3]" />
                    {idx !== items.length - 1 && (
                      <div className="mx-auto mt-2 h-[calc(100%-12px)] w-[2px] bg-[#9DB6D3]/70" />
                    )}
                  </div>

                  <div className="flex gap-3 p-5 pl-16">
                    <div className="min-w-[58px]">
                      <div
                        className={[
                          "text-xl font-extrabold",
                          m.yearBlue ? "text-[#2B6EF3]" : "text-slate-900",
                        ].join(" ")}
                      >
                        {m.year}
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="overflow-hidden rounded-2xl bg-[#EAF2FB]">
                        {m.highlight ? (
                          <div className="bg-[#9DB6D3] px-4 py-3">
                            <h3 className="whitespace-pre-line text-base font-extrabold leading-snug text-slate-900">
                              {m.title}
                            </h3>
                          </div>
                        ) : (
                          <div className="px-4 pt-3">
                            <h3 className="whitespace-pre-line text-base font-extrabold leading-snug text-slate-900">
                              {m.title}
                            </h3>
                          </div>
                        )}

                        <div className="px-4 pb-4 pt-2">
                          <p className="whitespace-pre-line text-sm leading-relaxed text-slate-700">
                            {m.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <p className="pt-1 text-center text-xs font-semibold tracking-wide text-slate-700">
                Engineering Cold Storage Solutions for the Past Decade and Beyond
              </p>
            </div>
          </div>
        </>
      );
    })()}
  </div>
</section>







      {/* WHY CHOOSE */}
      <section className="relative py-8 sm:py-20 bg-white">
        <div className={FLUID}>
          <div className="text-center">
            <div className="inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-700">
              Why Choose Antes Global
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              A trusted cold storage solutions provider in India
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Industry-focused engineering, integrated delivery, and dependable service support—built around your
              operational needs.
            </p>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-black/10 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY STANDARDS */}
      <section className="py-8 sm:py-20 bg-slate-50">
        <div className={FLUID + " text-center"}>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Quality Standards</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-600 sm:text-lg">
            We follow strong engineering practices and continuously improve to ensure reliable performance and long-term
            value in every project.
          </p>

          <div className="mx-auto mt-5 grid max-w-4xl gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-black/10 bg-white p-8 text-left shadow-sm transition hover:shadow-lg">
              <h3 className="text-xl font-semibold text-slate-900">Quality Objectives</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Ensuring consistency and reliability in everything we create, from design to delivery.
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white p-8 text-left shadow-sm transition hover:shadow-lg">
              <h3 className="text-xl font-semibold text-slate-900">Quality Policy</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                A commitment to continuous improvement and outstanding customer value.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
