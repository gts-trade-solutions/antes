"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-screen overflow-hidden bg-white">
      {/* ✅ Mobile: 16:9 | ✅ Desktop: same as your current (60/70/90vh) */}
      <div className="relative w-screen overflow-hidden bg-white aspect-video sm:aspect-auto sm:h-[70vh] h-auto lg:h-[90vh]">
        <video
          className="absolute inset-0 h-full w-full object-cover object-[70%_20%] sm:object-[75%_15%] lg:object-[80%_10%]"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="/f-1.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-white/5" />
      </div>
    </section>
  );
}
