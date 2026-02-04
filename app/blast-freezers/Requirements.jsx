"use client";

import React from "react";
import { Wrench, Move, ShieldCheck, Zap, Headset } from "lucide-react";

/**
 * ✅ Same content, new premium design
 * - Center heading + soft gradient background
 * - 5 cards with icon badge + hover lift
 * - Clean spacing, better typography
 */

const FEATURES = [
  {
    title: "Customized Solutions",
    desc:
      "Our major focus is in creating blast freezers that we believe can meet your individual needs and requirements effectively.",
    icon: Wrench,
  },
  {
    title: "Portable Options",
    desc:
      "The portable blast freezers we provide come with benefits and versatility in that they can be relocated to other areas as needed.",
    icon: Move,
  },
  {
    title: "High-Quality Construction",
    desc:
      "The materials used in construction of our blast freezers are the best and the parts used are also of high quality hence lasting longer.",
    icon: ShieldCheck,
  },
  {
    title: "Energy Efficiency",
    desc:
      "Energy efficiency is central in designs hence lowering your operating costs. This is the main feature of our commercial freezer installation.",
    icon: Zap,
  },
  {
    title: "Expert Support",
    desc:
      "The team of professionals working in the company offer their service and support to the customers and post sale services.",
    icon: Headset,
  },
];

export default function WhyChooseAntesBlastFreezers() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-18">
      {/* background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.35)_1px,transparent_0)] [background-size:26px_26px]" />
        <div className="absolute -top-24 right-[-120px] h-[320px] w-[320px] rounded-full bg-[#30B0E0]/10 blur-3xl" />
        <div className="absolute -bottom-24 left-[-120px] h-[320px] w-[320px] rounded-full bg-[#002858]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Why choose Antes Global for your{" "}
            <span className="text-[#002858]">Blast Freezer</span> requirements?
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Designed for performance, durability, and efficient cold-chain operations.
          </p>
        </div>

        {/* grid */}
        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_55px_rgba(2,6,23,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(2,6,23,0.10)]"
              >
                {/* top accent */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#002858] via-[#30B0E0] to-transparent opacity-70" />

                {/* icon badge */}
                <div className="mb-4 inline-flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#002858]/5 ring-1 ring-[#002858]/10">
                    <Icon className="h-5 w-5 text-[#002858]" />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {f.title}
                  </h3>
                </div>

                <p className="text-[15px] leading-7 text-slate-600">
                  {f.desc}
                </p>

                {/* hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#30B0E0]/10 blur-2xl opacity-0 transition group-hover:opacity-100" />
              </div>
            );
          })}

          {/* ✅ Make 5th card centered on large screens */}
          <style jsx>{`
            @media (min-width: 1024px) {
              .lg\\:grid-cols-3 > :nth-child(5) {
                grid-column: 2 / span 1;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
