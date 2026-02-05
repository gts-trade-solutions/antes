"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhyChooseAntesBlastFreezers from "./Requirements";
import ElegantFAQSection from "./Faq";

// ===== HERO (bear) =====
const HERO_RIGHT_IMAGE = "/about-bear-image%20(1).png";
const HERO_RIGHT_ALT = "Antes bear visual";

// ✅ CONTENTS FROM YOUR IMAGES
const HERO_TITLE = "Walk-in Cold Rooms";
const HERO_SUBTITLE = "Customized walk-in chillers & freezers";

// ===== LEFT IMAGE (single) =====
const GALLERY_IMAGE = "/Blast.png"; // change if you have walk-in cold room image
const GALLERY_IMAGE_ALT = "Walk-in Cold Rooms equipment";

export default function BlastFreezersHeroSection() {
  return (
    <>
      <Header />

      <main className="bg-white">
        {/* ================= HERO (CENTERED like Walk-in Cold Rooms) ================= */}
        <section className="relative overflow-hidden bg-[#012F5B]">
          {/* subtle glow */}
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

          {/* divider */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
        </section>

        {/* ================= CONTENT (UPDATED HEADINGS + STYLE) ================= */}
        <section className="relative">
          {/* soft hex-ish background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
            {/* light “hex tile” vibe */}
            <div className="absolute inset-0 opacity-[0.20] [background-image:linear-gradient(120deg,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(60deg,rgba(15,23,42,0.06)_1px,transparent_1px)] [background-size:120px_120px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              {/* LEFT: Single Image Card */}
              <div className="relative">
                <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(2,6,23,0.10)]">
                  <div className="flex items-center justify-center">
                    <img
                      src={GALLERY_IMAGE}
                      alt={GALLERY_IMAGE_ALT}
                      className="w-full max-w-[720px] h-auto object-contain"
                      loading="lazy"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  </div>
                </div>

                <div className="pointer-events-none absolute -inset-6 -z-10 bg-[radial-gradient(circle_at_30%_25%,rgba(48,176,224,0.16),transparent_62%)]" />
              </div>

              {/* RIGHT: Text (contents from your images) */}
              <div className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_24px_80px_rgba(2,6,23,0.10)] sm:p-9">
                <div className="text-center lg:text-left">
                  {/* small heading */}
                  <div className="text-xl font-medium tracking-tight text-[#002858]">
                    Walk-in Cold Rooms
                  </div>

                  <p className="mt-4 text-[15px] leading-7 text-slate-700">
                    Antes Global, a leading walk-in cold room manufacturer in India,
                    offers customized walk-in chillers and freezers to cater to a wide
                    range of industries. Our cold room suppliers in India are designed
                    to meet the specific requirements of our customers, ensuring optimal
                    preservation of perishable products.
                  </p>

                  {/* big heading */}
                  <h2 className="mt-8 text-3xl font-semibold tracking-tight text-[#002858] sm:text-4xl">
                    Customized Walk-in Chillers & Freezers
                  </h2>

                  <p className="mt-4 text-[15px] leading-7 text-slate-700">
                    Whether you're in the hospitality, medical, food processing, or
                    pharmaceutical sector, Antes Global has the expertise to design and
                    build a walk-in cold room that perfectly suits your needs. Our team
                    of engineers works closely with clients to understand their unique
                    requirements and provide tailored solutions.
                  </p>

                  <div className="mt-7 flex flex-wrap justify-center gap-2 text-xs text-slate-600 lg:justify-start">
                    <ChipLight>Customized solutions</ChipLight>
                    <ChipLight>Walk-in chillers</ChipLight>
                    <ChipLight>Walk-in freezers</ChipLight>
                  </div>
                </div>
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
