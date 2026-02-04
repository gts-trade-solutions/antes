"use client";

import React from "react";
import { Button } from "../components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative w-screen overflow-hidden bg-white">
      {/* MOBILE/TABLET: fixed 16:9 */}
      <div className="relative w-screen bg-white lg:hidden">
        <div className="relative w-full aspect-video overflow-hidden bg-white">
          <video
            className="absolute inset-0 h-full w-full object-cover object-center"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source src="/f-1.mp4" type="video/mp4" />
          </video>

          {/* Light overlay */}
          <div className="absolute inset-0 bg-white/5" />

          {/* Optional content overlay */}
          <div className="relative z-10 flex h-full w-full items-center px-4 sm:px-6">
            <div className="max-w-2xl text-white">{/* keep empty or add text */}</div>
          </div>
        </div>
      </div>

      {/* DESKTOP: full hero height like before */}
      <div className="relative hidden w-screen overflow-hidden bg-white lg:block lg:h-[110vh]">
        <video
          className="absolute inset-0 h-full w-full bg-white object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="/f-1.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-white/5" />

        <div className="relative z-10 flex h-full w-full items-center px-4 sm:px-6 lg:px-12">
          <div className="max-w-2xl text-white">
            {/*
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight drop-shadow">
              India's Finest Cold Storage Solutions
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/90 drop-shadow">
              Turnkey cold rooms, blast freezers, and refrigeration systems built for performance.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button className="bg-white text-slate-900 hover:bg-white/90">Get Quote</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                View Projects
              </Button>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
}
