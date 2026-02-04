"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { Plus, Minus, CheckCircle2 } from "lucide-react";

/**
 * ✅ Updated design (NOT a copy)
 * - Key Features: soft “glass” panel + left accent rail + pill bullets
 * - Kerala CTA: premium gradient + inner border + softer circles + compact button
 * - FAQ: new “timeline” style accordions (left rail + number chip) + different icon button
 *
 * Keep your content exactly as you wrote.
 */

const FEATURES_IMAGE = "/banner.png"; // your image
const FEATURES_ALT = "Blast freezer room";

const FEATURES = [
  "Rapid freezing times",
  "Even temperature distribution",
  "Energy-efficient operation",
  "Robust construction",
  "Easy to clean and maintain",
];

const FAQS = [
  {
    q: "What maintenance do blast freezers require?",
    a: "To keep your blast freezer in top condition, regularly clean the interior and exterior, check the door seals, and ensure there's adequate airflow. Regular temperature monitoring and routine inspections are also vital for optimal performance.",
  },
  {
    q: "Where can I find reliable blast freezer manufacturers in India?",
    a: "You can find reputable blast freezer manufacturers in India through online searches, industry directories, or by reaching out to our company, which specializes in high-quality blast freezers tailored to your specific needs.",
  },
  {
    q: "Are there energy-efficient options available for blast freezers?",
    a: "Yes, many modern blast freezers are designed with energy efficiency in mind. Look for models with advanced insulation, energy-saving features, and certifications that indicate lower energy use. This can significantly reduce your operational costs and environmental impact.",
  },
  {
    q: "What is the purpose of a blast chiller?",
    a: "A blast chiller is designed to cool food down super fast, which helps keep it fresh and tasty. By quickly lowering the temperature, it stops bacteria from growing and preserves the food's flavor and texture. It's especially useful in restaurants and catering, where maintaining quality is key to serving great meals!",
  },
];

export default function BlastFreezersContentWithFAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const items = useMemo(() => FAQS, []);

  return (
    <>
      {/* ===================== KEY FEATURES (NEW LOOK) ===================== */}
      <section className="relative py-14 sm:py-18">
        {/* subtle background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,rgba(2,6,23,0.35)_1px,transparent_0)] [background-size:28px_28px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            {/* image */}
            <div className="relative">
              <div className="overflow-hidden rounded-[26px] bg-white shadow-[0_22px_70px_rgba(2,6,23,0.10)] ring-1 ring-slate-200">
                <div className="aspect-[4/3] w-full bg-slate-100">
                  <img
                    src={FEATURES_IMAGE}
                    alt={FEATURES_ALT}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              </div>

              {/* glow */}
              <div className="pointer-events-none absolute -inset-10 -z-10 bg-[radial-gradient(circle_at_30%_30%,rgba(48,176,224,0.14),transparent_62%)]" />
            </div>

            {/* text panel */}
            <div className="relative">
              {/* left accent rail */}
              <div className="absolute left-0 top-2 hidden h-[calc(100%-16px)] w-[3px] rounded-full bg-gradient-to-b from-[#30B0E0] via-[#002858] to-transparent sm:block" />

              <div className="rounded-[26px] border border-slate-200 bg-white/80 p-6 shadow-[0_18px_55px_rgba(2,6,23,0.06)] backdrop-blur sm:p-8 sm:pl-10">
                <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Key Features of Our Blast Freezers
                </h2>

                <p className="mt-3 text-sm text-slate-600 sm:text-base">
                  Built for consistent performance, fast pull-down, and long-term reliability.
                </p>

                <ul className="mt-7 flex flex-col gap-3 text-[16px] text-slate-700">
                  {FEATURES.map((t, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
                    >
                      <span className="mt-0.5 grid h-8 w-8 place-items-center rounded-xl bg-[#002858]/5 ring-1 ring-[#002858]/10">
                        <CheckCircle2 className="h-5 w-5 text-[#30B0E0]" />
                      </span>
                      <span className="leading-7">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== DARK CTA (NEW LOOK) ===================== */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        {/* background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#012F5B] via-[#002A52] to-[#012F5B]" />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-28 bottom-[-150px] h-[340px] w-[340px] rounded-full bg-white/8 blur-[1px]" />
          <div className="absolute -right-28 top-[-160px] h-[360px] w-[360px] rounded-full bg-white/8 blur-[1px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(48,176,224,0.22),transparent_55%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/25" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-[30px] border border-white/12 bg-white/5 p-8 text-center shadow-[0_30px_90px_rgba(0,0,0,0.22)] backdrop-blur sm:p-12">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Blast Freezer Manufacturers in Kerala, India
            </h2>

            <p className="mx-auto mt-5 max-w-4xl text-base leading-7 text-white/85 sm:text-lg">
              Whether you are in need of high end quality or reasonably priced blast
              freezers in India, Antes Global can be of great help to you. Please get
              in touch with us to let you know your specific needs and to find out
              more about our portfolio of blast freezer services.
            </p>

            <p className="mx-auto mt-8 max-w-4xl text-base leading-7 text-white/85 sm:text-lg">
              As a prominent blast freezer manufacturer in India, Antes Global is proud
              to serve customers in Kerala. Our blast freezers are ideal for businesses
              in Kerala&apos;s diverse industries, including seafood processing, dairy farming,
              and food manufacturing. You can contact us for Commercial refrigeration and
              freezer installation in india.
            </p>

            <div className="mt-10 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-sm font-semibold text-[#012F5B] shadow-[0_18px_55px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:bg-white/95 focus:outline-none focus:ring-2 focus:ring-[#30B0E0]/50"
              >
                Contact Us Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FAQ (NEW LOOK) ===================== */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        {/* background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,rgba(2,6,23,0.35)_1px,transparent_0)] [background-size:28px_28px]" />
          <div className="absolute -top-24 right-[-120px] h-[320px] w-[320px] rounded-full bg-[#30B0E0]/12 blur-3xl" />
          <div className="absolute -bottom-24 left-[-120px] h-[320px] w-[320px] rounded-full bg-[#002858]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Frequently Asked Questions (FAQ)
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Clear answers to help you choose the right blast freezer solution.
            </p>
          </div>

          {/* timeline rail */}
          <div className="mx-auto mt-10 max-w-4xl sm:mt-12">
            <div className="relative">
              <div className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-slate-200 sm:block" />

              <div className="space-y-4">
                {items.map((item, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="relative overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_18px_55px_rgba(2,6,23,0.06)] transition hover:shadow-[0_24px_80px_rgba(2,6,23,0.10)]"
                    >
                      {/* left number chip */}
                      <div className="absolute left-4 top-5 hidden sm:flex">
                        <div className="grid h-8 w-8 place-items-center rounded-xl bg-[#002858]/5 ring-1 ring-[#002858]/10">
                          <span className="text-xs font-bold text-[#002858]">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                        className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left sm:px-6 sm:pl-16"
                      >
                        <div>
                          <div className="text-[15px] font-semibold text-slate-900 sm:text-base">
                            {item.q}
                          </div>
                          <div className="mt-1 text-xs text-slate-500">
                            {isOpen ? "Tap to collapse" : "Tap to expand"}
                          </div>
                        </div>

                        {/* Different icon button (not square like before) */}
                        <span
                          className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition ${
                            isOpen
                              ? "border-[#30B0E0]/30 bg-[#30B0E0]/10 text-[#002858]"
                              : "border-slate-200 bg-white text-slate-700"
                          }`}
                        >
                          {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                        </span>
                      </button>

                      <div
                        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-5 pb-6 pt-0 sm:px-6 sm:pl-16">
                            <div className="h-px w-full bg-slate-200/70" />
                            <p className="mt-4 text-[15px] leading-7 text-slate-600">
                              {item.a}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
