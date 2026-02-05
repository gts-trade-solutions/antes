"use client";

import React, { useMemo, useState } from "react";
import { Button } from "../components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Page() {
  const slides = useMemo(
    () => [
      {
        title: "Automated Cold Storage (ASRS) Warehousing Solutions",
        desc:
          "Design, Engineering & Installation of Smart ASRS Cold Stores for Meat, Vegetables, Fish, Fruits, Medicine, Pharma & Cold Chain Logistics",
      },
      {
        title: "ASRS Cold Storage Solution Providers in India",
        desc:
          "Specialised in High-Density Pallet Racking, MHE & Integrated Refrigeration Solutions",
      },
      {
        title:
          "Semi-Automatic Cold Cost-Effective Cold Storage Warehousing Solutions",
        desc:
          "Integrated with Optimised Racking Systems and Material Handling Equipment.",
      },
      {
        title: "System Integrator for Cold Storage Racking & MHE Specialists",
        desc:
          "Pallet Racking, Shuttle Systems, Conveyors & Customised Material Handling for Automated & Semi-Automated Cold Stores",
      },
      {
        title: "Turnkey Projects Solution Company",
        desc:
          "From Concept to Commissioning to AMC for ASRS, Semi-Automatic Cold Storage, Fish Processing Units, Vegetable Processing Units etc.",
      },
      {
        title: "Trusted Cold Storage Solution Providers in India",
        desc:
          "Delivering Scalable, Energy-Efficient & Technology-Driven Cold Warehousing Solutions Across Retail, Pharma, Fishery, Dairy and Poultry Industries.",
      },
      {
        title: "Industry-Specific Cold Chain Solutions",
        desc:
          "Customized ASRS & Semi-Automatic Cold Storage Solutions for Seafood, Meat Processing, Fruits & Vegetables, Dairy, Pharma, FMCG & Agri-Exports",
      },
      {
        title: "Energy-Efficient & Sustainable Cold Storage Systems",
        desc:
          "Advanced Refrigeration Technologies Designed to Reduce Power Consumption, Optimize Performance & Ensure Long-Term Operational Savings",
      },
      {
        title: "Large-Scale Cold Storage Project Execution Expertise",
        desc:
          "Proven capabilities in executing high-capacity ASRS and cold storage warehousing projects with precision engineering, safety compliance, and operational reliability.",
      },
      {
        title: "End-to-End Cold Storage Engineering & Support",
        desc:
          "Expert Consulting, Design, Installation, Automation Integration & After-Sales Service for Reliable, High-Performance Cold Warehousing Solutions",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <>
    <Header />
    <main className="min-h-[70vh] bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Slider card */}
        <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
          {/* soft background */}
          <div className="absolute inset-0 bg-[radial-gradient(700px_380px_at_20%_20%,rgba(43,110,243,0.12),transparent_60%),radial-gradient(650px_360px_at_80%_85%,rgba(15,23,42,0.10),transparent_60%)]" />
          <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />

          {/* content */}
          <div className="relative px-6 py-10 sm:px-10 sm:py-12">
            {/* top row */}
            <div className="flex items-center justify-between gap-4">
              <div className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-700 backdrop-blur">
                Slide {index + 1} / {slides.length}
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  onClick={prev}
                  className="h-10 w-10 rounded-full border-black/10 bg-white/80 p-0 hover:bg-white"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-5 w-5 text-slate-900" />
                </Button>
                <Button
                  variant="outline"
                  onClick={next}
                  className="h-10 w-10 rounded-full border-black/10 bg-white/80 p-0 hover:bg-white"
                  aria-label="Next"
                >
                  <ChevronRight className="h-5 w-5 text-slate-900" />
                </Button>
              </div>
            </div>

            {/* slide */}
            <div className="mt-8">
              <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                {slides[index].title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
                {slides[index].desc}
              </p>
            </div>

            {/* dots */}
            <div className="mt-10 flex flex-wrap items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={[
                    "h-2.5 rounded-full transition-all",
                    i === index ? "w-10 bg-slate-900" : "w-2.5 bg-slate-300",
                  ].join(" ")}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* optional CTA */}
           
          </div>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}
