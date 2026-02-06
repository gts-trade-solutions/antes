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
const CTA_TITLE = "Doors and Docking Solutions in Kerala";
const CTA_SUBTITLE =
  "Whether you are looking for Doors and Docking Solutions in Kerala or other regions of India, Antes is your trusted partner. Our commitment to quality, reliability, and customer satisfaction ensures that you receive the best possible solutions for your cold storage needs. Contact us today to learn more about our Doors and Dockers and how we can help you optimize your operations";
const CTA_BUTTON = "Contact Us Now";

const FAQS = [
  {
    q: "What exactly are Doors and Docking Solutions?",
    a: "Doors and Docking Solutions are anticipated to enhance the logistics work of moving items in and out of warehouses and Industrial facilities. They range from sectional doors for industrial purposes to dock levellers, shelters and seals through which trucks can easily load and off-load goods without being affected by weather conditions.",
  },
  {
    q: "Why are Dock Shelters and Seals important?",
    a: "Dock Shelters and Seals help keep your loading and unloading area protected from external elements like rain, wind, or even insects. They help maintain cleanliness and ensure that your goods are kept safe, especially if you’re handling sensitive products. We provide customized Doors and Docking Solutions in Kerala to ensure these are perfect for your specific environment.",
  },
  {
    q: "Do you provide installation and after-sales support?",
    a: "Of course, we handle our installation services to the letter, to make sure that everything is in order and running as it should. We also have value added services for the Doors and Docking Solutions which will provide maintenance, repair and other service annualised for the DOORS and Docking Solutions in India.",
  },
  {
    q: "How do Dock Levelers work?",
    a: "Dock Levelers at Antes automatically adjust to the height of the truck, creating a stable platform for forklifts and workers. This makes loading and unloading much safer and faster.",
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
