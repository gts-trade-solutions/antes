"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhyChooseAntesBlastFreezers from "./Requirements";
import ElegantFAQSection from "./Faq";

const HERO_RIGHT_IMAGE = "/about-bear-image%20(1).png";
const HERO_RIGHT_ALT = "Antes bear visual";


const GALLERY_IMAGE = "/Blast.png"; 
const GALLERY_IMAGE_ALT = "Blast Freezers equipment";

export default function BlastFreezersHeroSection() {
  return (
    <>
      <Header />

      <main className="bg-white">
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden bg-[#012F5B]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(48,176,224,0.18),transparent_55%)]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/25" />

          {/* bear */}
          <div className="pointer-events-none absolute right-0 bottom-0">
            <img
              src={HERO_RIGHT_IMAGE}
              alt={HERO_RIGHT_ALT}
              className="
                object-contain opacity-95 select-none
                h-[230px] w-[420px]
                sm:h-[260px] sm:w-[520px]
                md:h-[290px] md:w-[600px]
                lg:h-[320px] lg:w-[700px]
                translate-x-[34%] translate-y-[28%]
              "
              draggable={false}
              loading="eager"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
                Blast Freezers Suppliers
              </h1>
              <p className="mt-4 text-lg font-normal text-white/85 sm:text-xl">
                Portable and customised
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-2 text-xs text-white/80">
                <ChipDark>-35°C to -40°C</ChipDark>
                <ChipDark>50KG to 10T capacity</ChipDark>
                <ChipDark>Portable & customised</ChipDark>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
        </section>

        {/* ================= CONTENT ================= */}
        <section className="relative">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
            <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.40)_1px,transparent_0)] [background-size:26px_26px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              {/* LEFT: HEX GALLERY CARD (SINGLE BIG IMAGE) */}
              <div className="relative">
                <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_24px_80px_rgba(2,6,23,0.10)]">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-[#002858]">
                        Equipment Gallery
                      </div>
                      <div className="text-xs text-slate-500">
                        Portable & customised systems
                      </div>
                    </div>
                    {/* <div className="hidden sm:flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#30B0E0]" />
                      <span className="text-xs font-medium text-slate-500">
                        Antes
                      </span>
                    </div> */}
                  </div>

                  {/* ✅ BIG SINGLE IMAGE */}
                  <div className="flex items-center justify-center">
                    <img
                      src={GALLERY_IMAGE}
                      alt={GALLERY_IMAGE_ALT}
                      className="
                        w-full max-w-[760px]
                        h-auto object-contain
                      "
                      loading="lazy"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  </div>
                </div>

                <div className="pointer-events-none absolute -inset-6 -z-10 bg-[radial-gradient(circle_at_30%_25%,rgba(48,176,224,0.18),transparent_60%)]" />
              </div>

              {/* RIGHT: TEXT CARD */}
              <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(2,6,23,0.10)] sm:p-8">
                <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-[#002858]">
                  Blast Freezers
                </div>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#002858]">
                  Blast Freezers
                </h2>

                <div className="mt-5 space-y-5 text-[15px] leading-7 text-slate-700">
                  <p>
                    Antes is a leading provider of high-quality portable
                    and customized Blast Freezers in India. Our blast freezers
                    are designed and manufactured to meet the stringent
                    requirements of various industries, including dairy,
                    seafood, poultry, and food processing.
                  </p>

                  <p>
                    We understand the importance of efficient and effective
                    freezing processes in preserving the freshness and quality
                    of perishable products. Our blast freezers offer exceptional
                    freezing capabilities, ensuring that your products are frozen
                    quickly and evenly.
                  </p>

                  <p>
                    With temperatures ranging from{" "}
                    <span className="font-semibold text-slate-900">
                      -35°C to -40°C
                    </span>{" "}
                    and capacities from{" "}
                    <span className="font-semibold text-slate-900">
                      50KG to 10 metric tons
                    </span>
                    , our blast freezers can accommodate a wide range of freezing
                    needs.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2 text-xs text-slate-600">
                  <ChipLight>-35°C to -40°C</ChipLight>
                  <ChipLight>50KG to 10T capacity</ChipLight>
                  <ChipLight>Portable & customised</ChipLight>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-12 h-px max-w-6xl bg-slate-200" />
          </div>
        </section>
      </main>
      <WhyChooseAntesBlastFreezers />
        <ElegantFAQSection />              
      <Footer />
    </>
  );
}

function ChipDark({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1">
      {children}
    </span>
  );
}

function ChipLight({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
      {children}
    </span>
  );
}
