"use client";

import React from "react";
import {
  Thermometer,
  Boxes,
  SlidersHorizontal,
  Leaf,
  ShieldCheck,
} from "lucide-react";

/**
 * ✅ Walk-in Cold Rooms - "Why Antes Global" section
 * + Adds 2 image-content blocks (as per screenshots):
 *   1) Turnkey Solutions for Cold Warehousing with Racking & MHE
 *   2) Temperature-Controlled Environments
 *
 * ✅ Update:
 * - Added MORE SPACE between the two Media Sections
 *   (controlled via wrapper: space-y-16 / sm:space-y-20 / lg:space-y-24)
 */

const SECTION_TITLE =
  "Why Choose Antes Global for Turnkey Cold Storage Solutions?";

const SECTION_DESC =
  "Antes Global’s mission is to offer clients personalized, affordable, and reliable cold storage services. A team of professional engineers at our disposal ensures that they take their time to understand the needs of the client and proceed to provide the necessary solutions. We integrate higher technology and top quality material in our walk in chillers and freezers to make them more durable and efficient. Here, we always aim to meet and even surpass the expectations of our clients while delivering the best services all through.";

const FEATURES_TITLE = "Key Features of Our Walk-in Cold Rooms:";

const FEATURES = [
  {
    title: "Comprehensive Support",
    desc:
      "We offer post construction services in a bid to guarantee the durability and efficiency of your cold storage facility.",
    icon: Thermometer,
  },
  {
    title: "Efficient Operations",
    desc:
      "All our solutions are aimed at the maximization of storage capacity, reduction of energy usage and general improvement of the system.",
    icon: Boxes,
  },
  {
    title: "High-Quality Equipment",
    desc:
      "In this regard, we obtain and incorporate the best and most reliable and durable equipment from reputable manufacturers.",
    icon: SlidersHorizontal,
  },
  {
    title: "Customized Designs",
    desc:
      "We also offer cold storage solutions that are solutions specific to a certain need, taking into account features such as the type of products, the storage capacity and temperature.",
    icon: Leaf,
  },
  {
    title: "Complete Solution",
    desc:
      "We provide full service solutions to help you achieve system integration of all the parts for maximum efficiency.",
    icon: ShieldCheck,
  },
];

// ✅ Replace these with your actual /public paths
const TURNKEY_IMAGE = "/turnkey1.jpg";
const TEMP_IMAGE = "/turnkey2.png";

const TURNKEY = {
  title: "Turnkey Solutions for Cold Warehousing with Racking & MHE",
  desc:
    "At Antes Global, we understand the critical role of racking and material handling equipment (MHE) in maximizing the storage capacity and efficiency of cold storage facilities. Our turnkey solutions include the design, supply, and installation of:",
  bullets: [
    {
      title: "Palletized Racking Systems",
      desc:
        "Some of the most common racking systems include the pallet racking, the drive-in racking and the push-back racking systems depending on the type of products and ways of storing them.",
    },
    {
      title: "Material Handling Equipment",
      desc:
        "MHE equipment offered by us are forklifts, reach trucks, order picker, and conveyors thereby offering the right tools for product handling and storage.",
    },
  ],
};

const TEMP = {
  title: "Temperature-Controlled Environments",
  desc:
    "Temperature ranging +10° to −40° C, storage capacity ranging from 1 Metric TON to 5000 Metric TON & above. Thus, our turnkey solutions cater to a wide range of temperature-controlled environments, including:",
  bullets: [
    {
      title: "Frozen Storage",
      desc:
        "For products requiring deep freezing, we provide solutions for temperatures as low as −40°C.",
    },
    {
      title: "Chilling Storage",
      desc:
        "For perishable goods that need to be kept at chilled temperatures, we offer solutions for temperatures ranging from +10°C to −18°C.",
    },
  ],
};

function MediaSection({ title, desc, bullets, imageSrc, imageAlt, reverse }) {
  return (
    <div>
      <div
        className={[
          "grid items-center gap-10",
          "lg:grid-cols-2",
          reverse ? "lg:[&>div:first-child]:order-2" : "",
        ].join(" ")}
      >
        {/* image */}
        <div className="relative">
          <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-[#30B0E0]/15 via-transparent to-[#002858]/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_55px_rgba(2,6,23,0.08)]">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-[320px] w-full object-cover sm:h-[380px] lg:h-[420px]"
              loading="lazy"
            />
          </div>
        </div>

        {/* content */}
        <div>
          <h3 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl mt-15">
            {title}
          </h3>

          <p className="mt-5 text-[15px] leading-7 text-slate-700 sm:text-base">
            {desc}
          </p>

          <div className="mt-7 space-y-6">
            {bullets.map((b, i) => (
              <div key={i} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#0B66FF]" />
                <div>
                  <p className="text-xl font-semibold text-[#002858]">
                    {b.title}
                  </p>
                  <p className="mt-2 text-[15px] leading-7 text-slate-600">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

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

        {/* features */}
        <div className="mx-auto mt-14 max-w-6xl">
          <h3 className="text-2xl font-semibold tracking-tight text-[#002858] sm:text-3xl">
            {FEATURES_TITLE}
          </h3>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, idx) => {
              const Icon = f.icon;

              // ✅ center last two cards on lg
              const lgPos =
                idx === 3 ? "lg:col-start-1" : idx === 4 ? "lg:col-start-2" : "";

              return (
                <div
                  key={idx}
                  className={[
                    "group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7",
                    "shadow-[0_18px_55px_rgba(2,6,23,0.06)] transition",
                    "hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(2,6,23,0.10)]",
                    lgPos,
                  ].join(" ")}
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#002858] via-[#30B0E0] to-transparent opacity-70" />

                  <div className="mb-4 flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#002858]/5 ring-1 ring-[#002858]/10">
                      <Icon className="h-5 w-5 text-[#002858]" />
                    </span>
                    <h4 className="text-lg font-semibold text-slate-900">
                      {f.title}
                    </h4>
                  </div>

                  <p className="text-[15px] leading-7 text-slate-600">{f.desc}</p>

                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#30B0E0]/10 blur-2xl opacity-0 transition group-hover:opacity-100" />
                </div>
              );
            })}
          </div>

          {/* ✅ Added sections (from screenshots) */}
          {/* ✅ EXTRA SPACE BETWEEN TURNKEY & TEMP is controlled here */}
          <div className="mt-16 space-y-16 sm:space-y-20 lg:space-y-24">
            <MediaSection
              title={TURNKEY.title}
              desc={TURNKEY.desc}
              bullets={TURNKEY.bullets}
              imageSrc={TURNKEY_IMAGE}
              imageAlt="Turnkey cold warehousing racking and MHE"
              reverse={false}
            />

            <MediaSection
              title={TEMP.title}
              desc={TEMP.desc}
              bullets={TEMP.bullets}
              imageSrc={TEMP_IMAGE}
              imageAlt="Temperature-controlled cold room"
              reverse={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
