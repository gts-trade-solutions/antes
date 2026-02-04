"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { Plus, Minus, CheckCircle2 } from "lucide-react";

/**
 * ✅ Same UI component — updated with the exact CONTENT from your screenshots
 * - CTA section text updated (Walk-In Cold Room Manufacturers in Kerala, India)
 * - FAQ questions + answers updated (4 items)
 *
 * Note: You can also rename the component/file as you like.
 */

// (Optional) keep / change this image + features list if you use this section
const FEATURES_IMAGE = "/banner.png";
const FEATURES_ALT = "Cold room installation";
const FEATURES = [
  "Temperature stability for sensitive products",
  "Efficient insulation & airflow design",
  "Optimized energy consumption",
  "Durable panels and reliable construction",
  "Easy to clean and maintain",
];

/** ✅ CONTENT FROM YOUR IMAGES */
const CTA_TITLE = "Ice Cube Machine Manufacturers in Kerala, India.";
const CTA_SUBTITLE =
  "Ice cube makers are some of the most important apparatus that any company would need especially when dealing in foods and beverages. With our extensive product range, superior quality, and exceptional customer support, Antes Global is your trusted partner for Ice Cube Machine Manufacturers in Kerala, India. Contact us today to learn more about our Ice Cube Machine and how we can help you optimize your operations";
const CTA_BUTTON = "Contact Us Now";

const FAQS = [
  {
    q: "What is an Ice Cube Machine, and how does it work?",
    a: "An Ice Cube Machine is a unique kitchen appliance that melts ice every day and provides ice cubes for you. You just need to link it to water and the rest is done by the machine - they freeze water and save the ice cubes in a bin awaiting for use. It is especially useful for establishments retailing such commodities as ice, liquids and food items such as restaurants, bars and hotels.",
  },
  {
    q: "How do I choose the right Ice Cube Machine for my business?",
    a: "Choosing the right machine depends on how much ice you need daily and how much space you have. We offer a variety of sizes, from compact models to larger ones that produce more ice. Our team at one of the top Ice Cube Machine Manufacturers in Kerala, India, can guide you to find the perfect fit for your business.",
  },
  {
    q: "How long does it take to make ice?",
    a: "Most of our machines start producing ice within 10 to 20 minutes. Once they’re up and running, they continue making ice as long as there’s room in the storage bin.",
  },
  {
    q: "What types of ice cubes can your machines make?",
    a: "They can make the regular cubes, the crescent cubes as well as gourmet ice. It can be selected according to the nature of the business as well as the type of model which has been developed.",
  },
];

export default function WalkInColdRoomsContentWithFAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const items = useMemo(() => FAQS, []);

  return (
    <>
      {/* ===================== KEY FEATURES (OPTIONAL) ===================== */}
      

      {/* ===================== DARK CTA (CONTENT FROM IMAGE) ===================== */}
      <section className="relative overflow-hidden py-16 sm:py-20">
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
              {CTA_TITLE}
            </h2>

            <p className="mx-auto mt-5 max-w-4xl text-base leading-7 text-white/85 sm:text-lg">
              {CTA_SUBTITLE}
            </p>

            <div className="mt-10 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-sm font-semibold text-[#012F5B] shadow-[0_18px_55px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:bg-white/95 focus:outline-none focus:ring-2 focus:ring-[#30B0E0]/50"
              >
                {CTA_BUTTON}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FAQ (CONTENT FROM IMAGE) ===================== */}
      <section className="relative overflow-hidden py-16 sm:py-20">
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
          </div>

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
                        <div className="text-[15px] font-semibold text-slate-900 sm:text-base">
                          {item.q}
                        </div>

                        <span
                          className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition ${
                            isOpen
                              ? "border-[#30B0E0]/30 bg-[#30B0E0]/10 text-[#002858]"
                              : "border-slate-200 bg-white text-slate-700"
                          }`}
                        >
                          {isOpen ? (
                            <Minus className="h-5 w-5" />
                          ) : (
                            <Plus className="h-5 w-5" />
                          )}
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
