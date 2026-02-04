"use client";

import React from "react";
import { Thermometer, Boxes, SlidersHorizontal } from "lucide-react";

/**
 * ✅ Supermarket Display Chillers section
 * ✅ Adds "Budget-Friendly Commercial Freezers" BELOW the cards
 */

const SECTION_TITLE = "Why Antes as Supermarket Display Chiller Suppliers in India?";

const SECTION_DESC =
  "We boast of having a one-stop-shop approach for cold storage services and products. We offer a great variety of supermarket display chillers and freezers in India suitable for companies of any size. Understanding that each store is unique, our products are designed to be tailored to meet your store's specific design and imaging needs.Our equipment's working principle and design prioritize energy conservation and lower running expenses, making them efficient and economical. As a core aspect of our products, we carefully select materials and technology that ensure durability.Moreover, our professional staff is always ready to assist you throughout your time with our company, ensuring you receive the best service possible.";

const FEATURES_TITLE = "Our range of supermarket chillers and freezers option include:";

const FEATURES = [
  {
    title: "Open Chillers",
    desc: "Showcase fresh produce, dairy products, and other perishable items in an open and inviting manner.",
    icon: Thermometer,
  },
  {
    title: "Island Freezers",
    desc: "Provide ample storage space for frozen foods while creating a visually appealing display.",
    icon: Boxes,
  },
  {
    title: "Meat Display Chillers and Freezers",
    desc: "Maintain the quality and freshness of meat products in a hygienic and attractive environment",
    icon: SlidersHorizontal,
  },
];

/** ✅ Replace this with your actual /public image path */
const BUDGET_IMAGE = "/bottle-chillers.jpg";

const BUDGET = {
  title: "Budget-Friendly Commercial Freezers",
  para1:
    "At Antes Global, we understand that quality cold storage services should not be a preserve of large enterprises. That is why we provide affordable commercial refrigeration installation while still providing top-notch quality and functionality. Our team of professionals will consult with you and determine your precise needs in order to provide you with the best proposals.",
  para2:
    "Our solutions are designed to create a seamless and efficient shopping experience, from backend storage to front-end display. We offer both 1-to-1 display systems and multiple display systems connected to centralized refrigeration systems, ensuring optimal performance and energy efficiency.",
};

function BudgetFriendlyBlock() {
  return (
    <div className="mt-10">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        {/* Image (left) */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-[34px] bg-gradient-to-br from-[#30B0E0]/18 via-transparent to-[#002858]/12 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_22px_75px_rgba(2,6,23,0.10)]">
            <img
              src={BUDGET_IMAGE}
              alt="Budget-friendly commercial freezer"
              className="h-[340px] w-full object-cover sm:h-[420px] lg:h-[520px]"
              loading="lazy"
            />
          </div>
        </div>

        {/* Content (right) */}
        <div>
          <h3 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            {BUDGET.title}
          </h3>

          <p className="mt-6 text-[15px] leading-7 text-slate-700 sm:text-base">
            {BUDGET.para1}
          </p>

          <p className="mt-6 text-[15px] leading-7 text-slate-700 sm:text-base">
            {BUDGET.para2}
          </p>
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
          </div>

          {/* ✅ ADD BELOW the cards */}
          <BudgetFriendlyBlock />
        </div>
      </div>
    </section>
  );
}
