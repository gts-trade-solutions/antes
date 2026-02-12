"use client";

import React from "react";
import QatarHeader from "../components/QatarHeader";
import QatarFooter from "../components/QatarFooter";
import { Eye, Handshake, Leaf, ShieldCheck, Target } from "lucide-react";

function AboutQatar() {
  return (
    <>
    <QatarHeader/>
    <div className="bg-[#f4f7fb] text-gray-700">

      {/* ================= HERO / ABOUT ================= */}
      <section className="py-28 px-6 text-center bg-gradient-to-b from-white to-[#eef3f9]">
        <div className="max-w-5xl mx-auto">

          <span className="inline-block px-6 py-2 rounded-full bg-white border text-sm font-medium text-[#0A2E57] mb-6 shadow-sm">
            ABOUT ANTES
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2E57] mb-6">
            End-to-End Cold Chain & Refrigeration Solutions
          </h1>

          <div className="space-y-6 text-lg leading-relaxed text-gray-600">
            <p>
              Antes is a fast-growing commercial refrigeration and cold chain solution provider,
              delivering integrated, end-to-end cold chain systems tailored to the specific
              operational requirements of our clients.
            </p>

            <p>
              We support industries including food processing, cold storage and packaging,
              retail and quick-service restaurants, dairy, seafood exports, multipurpose
              cold warehousing, hospitality, pharmaceuticals, process line cooling,
              and cold chain logistics.
            </p>

            <p>
              With active operations across India, Oman, and Qatar, Antes delivers
              region-specific solutions backed by deep understanding of local climatic
              conditions, regulatory compliance, and industry performance standards.
            </p>

            <p>
              Our core strength lies in our in-house team operating under our proprietary
              <strong> “5KS” – Five Key Cross-Functional Specializations</strong>,
              enabling seamless, reliable, and performance-driven execution
              from concept to commissioning and beyond.
            </p>
          </div>
        </div>
      </section>


      {/* ================= VISION & MISSION ================= */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-[#0A2E57] mb-4">
            Vision & Mission
          </h2>

          <p className="text-gray-600 mb-16">
            Our direction and commitment in delivering energy-saving refrigeration and cold chain solutions.
          </p>

          <div className="grid md:grid-cols-2 gap-10 text-left">

            {/* Vision */}
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-200 hover:shadow-md transition">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-[#0A2E57] flex items-center justify-center text-white">
                  <Eye size={22} />
                </div>
                <h3 className="text-2xl font-semibold text-[#0A2E57]">
                  Vision
                </h3>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Antes’ focus is on value engineering supported by innovation
                and technological advancement to deliver energy-efficient
                refrigeration and cold chain solutions.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-200 hover:shadow-md transition">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-[#2da9c8] flex items-center justify-center text-white">
                  <Target size={22} />
                </div>
                <h3 className="text-2xl font-semibold text-[#0A2E57]">
                  Mission
                </h3>
              </div>

              <p className="text-gray-600 leading-relaxed">
                We build transparent, long-term client relationships based on
                honesty and trust while delivering eco-friendly cold chain
                systems through reliable technology partnerships and
                integrated execution.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ================= CORE PRINCIPLES ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">

          <span className="inline-block mb-4 px-5 py-2 rounded-full bg-[#eef3f9] border text-sm font-medium text-[#0A2E57]">
            OUR CORE PRINCIPLES
          </span>

          <h2 className="text-4xl font-bold text-[#0A2E57] mb-16">
            Built for performance, efficiency and trust.
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-left">

            <div className="bg-[#f7f9fc] rounded-3xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition">
              <div className="flex items-center gap-4 mb-6">
                <ShieldCheck className="text-[#0A2E57]" size={28} />
                <h3 className="text-xl font-semibold text-[#0A2E57]">
                  Efficiency & Safety
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We design systems ensuring maximum product safety,
                smooth operations, and compliance with industry standards.
              </p>
            </div>

            <div className="bg-[#f7f9fc] rounded-3xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition">
              <div className="flex items-center gap-4 mb-6">
                <Leaf className="text-[#0A2E57]" size={28} />
                <h3 className="text-xl font-semibold text-[#0A2E57]">
                  Eco-Friendly Innovation
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Energy-efficient refrigeration technologies reducing
                operating costs and environmental impact.
              </p>
            </div>

            <div className="bg-[#f7f9fc] rounded-3xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition">
              <div className="flex items-center gap-4 mb-6">
                <Handshake className="text-[#0A2E57]" size={28} />
                <h3 className="text-xl font-semibold text-[#0A2E57]">
                  Commitment to Partnership
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Long-term collaboration with seamless support from
                system planning to after-sales service.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ================= WHY CHOOSE ANTES (QATAR) ================= */}
      <section className="py-28 px-6 bg-[#f4f7fb]">
        <div className="max-w-6xl mx-auto text-center">

          <span className="inline-block px-6 py-2 rounded-full bg-white border text-sm font-medium text-[#0A2E57] mb-6">
            WHY CHOOSE ANTES
          </span>

          <h2 className="text-4xl font-bold text-[#0A2E57] mb-6">
            A Trusted Cold Storage Solutions Provider in Qatar
          </h2>

          <p className="max-w-4xl mx-auto text-lg text-gray-600 mb-16">
            Delivering engineering excellence, integrated execution, and dependable
            service tailored to Qatar’s operational and climatic requirements.
          </p>

          <div className="grid md:grid-cols-2 gap-12 text-left">

            <div>
              <h3 className="font-semibold text-[#0A2E57] mb-3">
                Industry-Focused Cold Storage Expertise
              </h3>
              <p>
                Custom solutions for food processing, dairy, seafood,
                poultry, pharmaceuticals, hospitality, and logistics sectors.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#0A2E57] mb-3">
                Integrated Cold Storage & Refrigeration Solutions
              </h3>
              <p>
                Blast freezers, walk-in cold rooms, insulated doors,
                docking systems, and turnkey coordination.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#0A2E57] mb-3">
                Quality-Driven Engineering & Execution
              </h3>
              <p>
                Proven engineering practices ensuring durability,
                safety, and long-term performance.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#0A2E57] mb-3">
                Energy-Efficient & Innovative Systems
              </h3>
              <p>
                Modern refrigeration technologies reducing energy
                consumption and operating costs.
              </p>
            </div>

            <div className="md:col-span-2">
              <h3 className="font-semibold text-[#0A2E57] mb-3">
                Customized Solutions with End-to-End Support
              </h3>
              <p>
                From consultation and system design to installation,
                commissioning, and after-sales service, we provide
                complete turnkey cold storage solutions.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
    <QatarFooter/>
    </>
  );
}

export default AboutQatar;
