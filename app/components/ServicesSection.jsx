"use client";

import React from "react";
import { Button } from "../components/ui/button";

export default function ServiceSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Video card */}
        <div className="relative my-8 md:my-12 overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
          {/* ✅ Mobile: 16:9 ratio only | Desktop: keep your original heights */}
          <div className="relative w-full aspect-video sm:aspect-auto sm:h-[560px] md:h-[620px] lg:h-[680px]">
            {/* Background Video */}
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/videos/v-2-poster.jpg"
            >
              <source src="/videos/v-2.webm" type="video/webm" />
              <source src="/services.mp4" type="video/mp4" />
            </video>

            {/* ✅ LIGHT MODE overlays (remove dark layers) */}
            <div className="absolute inset-0 bg-white/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/15 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent" />

            {/* Optional: soft bottom fade (light) */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/10 to-transparent" />

            {/* Border + subtle vignette (light) */}
            <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5" />
            <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_120px_rgba(255,255,255,0.10)]" />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center">
              <div className="w-full px-6 sm:px-10 lg:px-14">
                <div className="max-w-2xl text-slate-900">
                  {/* Your content stays commented as-is */}
                </div>
              </div>
            </div>
          </div>
          {/* No extra bottom div */}
        </div>
      </div>
    </section>
  );
}
