"use client";

import React from "react";
import { Button } from "../components/ui/button";
import Link from "next/link";
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
              <source src="/f-2.mp4" type="video/mp4" />
            </video>

            {/* ✅ LIGHT MODE overlays */}
            <div className="absolute inset-0 bg-white/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/15 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/10 to-transparent" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5" />
            <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_120px_rgba(255,255,255,0.10)]" />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center">
              <div className="w-full px-6 sm:px-10 lg:px-14">
                <div className="max-w-2xl text-slate-900">
                  {/* Title */}
                  <div className="hidden sm:inline-flex rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-700 backdrop-blur">
                    Services we provide
                  </div>


                  <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                    Complete Cold Chain &amp; Refrigeration Solutions
                  </h2>

                  <p className="mt-2 hidden text-sm leading-relaxed text-slate-700 sm:mt-4 sm:block sm:text-lg">
                    We deliver end-to-end design, supply, installation, and after-sales support for cold storage,
                    refrigeration systems, and temperature-controlled infrastructure across industries.
                  </p>


                  {/* Button */}
                  <div className="mt-6">
                    <Link href="/solutions-products">
                      <Button className="rounded-full bg-white text-slate-900 border border-black/10 px-6 hover:bg-slate-50">
                        More Info
                      </Button>
                    </Link>

                  </div>
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
