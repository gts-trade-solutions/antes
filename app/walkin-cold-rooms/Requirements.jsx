"use client";

import React from "react";
import { Thermometer, Boxes, SlidersHorizontal, Leaf, ShieldCheck } from "lucide-react";

/**
 * ✅ Walk-in Cold Rooms - "Why Antes Global" section
 * - Uses EXACT content from your screenshots
 * - Premium, clean card layout (not copied look)
 * - Responsive: 3 cards top, 2 cards bottom centered
 */

const SECTION_TITLE =
  "Why Antes Global as Walk-in Cold Room Manufacturers in Kerala, India?";

const SECTION_DESC =
  "Antes Global’s mission is to offer clients personalized, affordable, and reliable cold storage services. A team of professional engineers at our disposal ensures that they take their time to understand the needs of the client and proceed to provide the necessary solutions. We integrate higher technology and top quality material in our walk in chillers and freezers to make them more durable and efficient. Here, we always aim to meet and even surpass the expectations of our clients while delivering the best services all through.";

const FEATURES_TITLE = "Key Features of Our Walk-in Cold Rooms:";

const FEATURES = [
  {
    title: "Temperature Control",
    desc:
      "Our walk-in chillers and freezers can maintain temperatures ranging from +15°C to -25°C, ensuring the safety and freshness of your products.",
    icon: Thermometer,
  },
  {
    title: "Capacity",
    desc:
      "We offer a wide range of storage capacities, from 1 ton to 50 tons and above, to accommodate various storage needs",
    icon: Boxes,
  },
  {
    title: "Customization",
    // Screenshot cuts off here, so keeping it exactly as visible.
    desc: "Our walk-in cold rooms can therefore be built to",
    icon: SlidersHorizontal,
  },
  {
    title: "Energy Efficiency",
    desc:
      "Energy is always conserved in our designs as we work towards bringing down operating expenses for you.",
    icon: Leaf,
  },
  {
    title: "Durability",
    desc:
      "Our cold storage systems are very robust and we have put our best effort to design the best cold storage solution with proper material used and latest technology involved in manufacturing it.",
    icon: ShieldCheck,
  },
];

export default function WhyChooseAntesWalkInColdRooms() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-18">
      {/* soft background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.35)_1px,transparent_0)] [background-size:26px_26px]" />
        <div className="absolute -top-24 right-[-140px] h-[340px] w-[340px] rounded-full bg-[#30B0E0]/10 blur-3xl" />
        <div className="absolute -bottom-24 left-[-140px] h-[340px] w-[340px] rounded-full bg-[#002858]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* heading */}
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {SECTION_TITLE}
          </h2>

          <p className="mx-auto mt-5 max-w-6xl text-[15px] leading-7 text-slate-700 sm:text-base">
            {SECTION_DESC}
          </p>
        </div>

        {/* features title */}
        <div className="mx-auto mt-14 max-w-6xl">
          <h3 className="text-2xl font-semibold tracking-tight text-[#002858] sm:text-3xl">
            {FEATURES_TITLE}
          </h3>

          {/* cards */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, idx) => {
              const Icon = f.icon;
              return (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_18px_55px_rgba(2,6,23,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(2,6,23,0.10)]"
                >
                  {/* top accent line */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#002858] via-[#30B0E0] to-transparent opacity-70" />

                  {/* icon + title */}
                  <div className="mb-4 flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#002858]/5 ring-1 ring-[#002858]/10">
                      <Icon className="h-5 w-5 text-[#002858]" />
                    </span>
                    <h4 className="text-lg font-semibold text-slate-900">{f.title}</h4>
                  </div>

                  <p className="text-[15px] leading-7 text-slate-600">{f.desc}</p>

                  {/* hover glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#30B0E0]/10 blur-2xl opacity-0 transition group-hover:opacity-100" />
                </div>
              );
            })}

            {/* center the last two cards on large screens */}
            <style jsx>{`
              @media (min-width: 1024px) {
                .lg\\:grid-cols-3 > :nth-child(4) {
                  grid-column: 1 / span 1;
                }
                .lg\\:grid-cols-3 > :nth-child(5) {
                  grid-column: 2 / span 1;
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}
