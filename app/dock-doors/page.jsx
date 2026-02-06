"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhyChooseAntesBlastFreezers from "./Requirements";
import ElegantFAQSection from "./Faq";

// ===== HERO (bear) =====
const HERO_RIGHT_IMAGE = "/about-bear-image%20(1).png";
const HERO_RIGHT_ALT = "Antes bear visual";

// ===== CONTENTS FROM YOUR IMAGES =====
const HERO_TITLE = "Doors and Dock levelers";
const HERO_SUBTITLE = "Doors and docking solutions";

// ===== LEFT IMAGE (single) =====
const GALLERY_IMAGE = "/Doors 1.png";
const GALLERY_IMAGE_ALT = "Doors and dock levelers";

export default function BlastFreezersHeroSection() {
  return (
    <>
      <Header />

      <main className="bg-white">
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden bg-[#012F5B]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_35%,rgba(48,176,224,0.20),transparent_55%)]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/25" />

          {/* bear on right (HIDE ONLY ON MOBILE, DESKTOP UNCHANGED) */}
          <div className="pointer-events-none absolute right-0 bottom-0 hidden sm:block">
            <img
              src={HERO_RIGHT_IMAGE}
              alt={HERO_RIGHT_ALT}
              className="
                object-contain opacity-95 select-none
                h-[220px] w-[420px]
                sm:h-[250px] sm:w-[520px]
                md:h-[270px] md:w-[620px]
                lg:h-[300px] lg:w-[720px]
                translate-x-[36%] translate-y-[28%]
              "
              draggable={false}
              loading="eager"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </div>

          {/* centered content */}
          <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
                {HERO_TITLE}
              </h1>
              <p className="mt-4 text-lg font-normal text-white/85 sm:text-xl">
                {HERO_SUBTITLE}
              </p>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
        </section>

        {/* ================= CONTENT (EVEN HEIGHT / EVEN ALIGN) ================= */}
        <section className="relative">
          {/* soft background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
            <div className="absolute inset-0 opacity-[0.20] [background-image:linear-gradient(120deg,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(60deg,rgba(15,23,42,0.06)_1px,transparent_1px)] [background-size:120px_120px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
            {/* IMPORTANT: items-stretch + h-full makes both cards equal height */}
            <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
              {/* LEFT: Image Card */}
              <div className="relative h-full">
                <div className="h-full min-h-[420px] rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(2,6,23,0.10)] sm:p-8">
                  <div className="flex h-full items-center justify-center">
                    <div className="w-full max-w-[640px]">
                      {/* consistent visual frame */}
                      <div className="aspect-[4/3] w-full">
                        <img
                          src={GALLERY_IMAGE}
                          alt={GALLERY_IMAGE_ALT}
                          className="h-full w-full object-contain"
                          loading="lazy"
                          onError={(e) => (e.currentTarget.style.display = "none")}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pointer-events-none absolute -inset-6 -z-10 bg-[radial-gradient(circle_at_30%_25%,rgba(48,176,224,0.16),transparent_62%)]" />
              </div>

              {/* RIGHT: Text Card */}
              <div className="relative h-full">
                <div className="h-full min-h-[420px] rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_24px_80px_rgba(2,6,23,0.10)] sm:p-9">
                  {/* vertical centering for perfect balance */}
                  <div className="flex h-full flex-col justify-center text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight text-[#002858]">
                      Doors and Dock levelers
                    </h2>

                    <p className="mt-4 text-[15px] leading-7 text-slate-700">
                      Antes, a leading cold storage manufacturer in India,
                      offers a comprehensive range of doors and docking solutions
                      designed to meet the specific needs of cold rooms and warehouses.
                      Our solutions are engineered to provide optimal efficiency,
                      durability, and energy efficiency, ensuring seamless operations
                      in various temperature-controlled environments.
                    </p>
                  </div>
                </div>

                <div className="pointer-events-none absolute -inset-6 -z-10 bg-[radial-gradient(circle_at_70%_25%,rgba(48,176,224,0.12),transparent_62%)]" />
              </div>
            </div>

            <div className="mx-auto mt-12 h-px max-w-6xl bg-slate-200" />
          </div>
        </section>

        {/* your existing sections */}
        <WhyChooseAntesBlastFreezers />
        <ElegantFAQSection />
      </main>

      <Footer />
    </>
  );
}

function ChipLight({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
      {children}
    </span>
  );
}
