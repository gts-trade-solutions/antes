"use client";

import React, { useMemo, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  ThermometerSnowflake,
  Boxes,
  Warehouse,
  Zap,
  ShieldCheck,
  Truck,
  PackageCheck,
  ArrowRight,
  Snowflake,
  Factory,
  Check,
  Plus,
  Minus,
} from "lucide-react";

export default function SolutionsProducts() {
  const [openFaq, setOpenFaq] = useState(0);

  const asrsFeatures = [
    {
      title: "Precise Temperature Control",
      desc: "Consistent, specific temperatures for food, pharmaceuticals, and perishables.",
      icon: <ThermometerSnowflake className="h-5 w-5" />,
    },
    {
      title: "Automated Storage & Retrieval",
      desc: "Reduced door openings and manual handling for stable temps and faster operations.",
      icon: <Boxes className="h-5 w-5" />,
    },
    {
      title: "Space Optimization",
      desc: "High-density vertical storage without increasing building footprint.",
      icon: <Warehouse className="h-5 w-5" />,
    },
    {
      title: "Energy Efficiency",
      desc: "Designed to lower operating cost while supporting environmental goals.",
      icon: <Zap className="h-5 w-5" />,
    },
  ];

  const asrsSystems = [
    { title: "High-Density Racking", desc: "Maximize storage in compact spaces." },
    { title: "Shuttle-Based Systems", desc: "Quick, accurate handling for high volumes." },
    { title: "Dynamic Flow Racks", desc: "Ideal for fast-moving products needing quick access." },
  ];

  const asrsAutomation = [
    { title: "Guided Vehicles (AGVs)", desc: "Efficient movement through the facility." },
    { title: "Robotic Palletizers", desc: "Automated stacking and loading." },
    { title: "Pick-and-Place Robots", desc: "Speed and precision for order handling." },
  ];

  const mheRange = [
    {
      title: "Pallet Trucks",
      desc: "Durable and easy to use for moving heavy loads safely.",
      icon: <Truck className="h-5 w-5" />,
    },
    {
      title: "Forklifts",
      desc: "Reliable handling across storage, logistics and transport operations.",
      icon: <PackageCheck className="h-5 w-5" />,
    },
    {
      title: "Conveyor Systems",
      desc: "Automate product movement and streamline workflows.",
      icon: <ArrowRight className="h-5 w-5" />,
    },
    {
      title: "Stackers",
      desc: "Optimize space with secure stacking for organized warehousing.",
      icon: <Boxes className="h-5 w-5" />,
    },
  ];

  const turnkeyWhy = [
    {
      title: "Comprehensive Support",
      desc: "Post-construction services to ensure durability and efficiency.",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
    {
      title: "Efficient Operations",
      desc: "Maximize storage capacity and reduce energy usage.",
      icon: <Zap className="h-5 w-5" />,
    },
    {
      title: "High-Quality Equipment",
      desc: "Reliable equipment from reputable manufacturers.",
      icon: <PackageCheck className="h-5 w-5" />,
    },
    {
      title: "Customized Designs",
      desc: "Based on product type, capacity, and temperature needs.",
      icon: <Factory className="h-5 w-5" />,
    },
  ];

  const blastFeatures = [
    "Rapid freezing times",
    "Even temperature distribution",
    "Energy-efficient operation",
    "Robust construction",
    "Easy to clean and maintain",
  ];

  const walkinFeatures = [
    "Stable and uniform temperature control",
    "Flexible room sizes and configurations",
    "Suitable for indoor and outdoor installations",
  ];

  const iceTypes = [
    {
      title: "Flake Ice Machines",
      desc: "Fine flaky ice for seafood, poultry and food processing to preserve freshness.",
    },
    {
      title: "Block Ice Machines",
      desc: "Perfect blocks for large-scale storage and transportation applications.",
    },
    {
      title: "Cube Ice Machines",
      desc: "Clear, shaped ice cubes for bars, restaurants and hotels.",
    },
  ];

  const doorsRange = [
    { title: "Sliding Doors", desc: "Best for limited space—easy and smooth to operate." },
    { title: "Swing Doors", desc: "Functional doors for inside or outside installation." },
    { title: "Roll-up Doors", desc: "Quick access for busy operational areas." },
    { title: "Sectional Doors", desc: "Insulated and durable for large openings." },
    { title: "Flip-Flap Doors", desc: "Ideal for intensive traffic and frequent movement." },
  ];

  const faqs = useMemo(
    () => [
      {
        q: "What exactly are turnkey cold storage solutions?",
        a: "Turnkey cold storage means we handle the complete project—design, supply, installation, testing, and support—so you get a ready-to-operate facility without coordinating multiple vendors.",
      },
      {
        q: "Who benefits most from turnkey cold storage projects?",
        a: "Food processing, seafood, dairy, meat, FMCG, 3PL cold logistics, hospitality, pharmaceuticals, and multipurpose cold stores benefit—especially when timelines and reliability are critical.",
      },
      {
        q: "Do you offer custom cold storage solutions?",
        a: "Yes. We design systems based on product type, throughput, storage density, temperature range, site constraints, and future expansion—so performance matches your operation, not a template.",
      },
      {
        q: "What temperature ranges do your cold storage solutions support?",
        a: "We support chilling and frozen storage across common ranges—from about +10°C down to -40°C—depending on the application, insulation, refrigeration design, and product requirement.",
      },
      {
        q: "What is ASRS cold storage and why is it used?",
        a: "ASRS (Automated Storage & Retrieval System) cold storage uses automated pallet handling to improve inventory accuracy, reduce manual movement, increase storage density, and minimize door openings.",
      },
      {
        q: "What is the purpose of a blast freezer or blast chiller?",
        a: "Blast systems reduce product temperature rapidly to protect texture, freshness, and food safety. They help control bacterial growth and improve shelf-life in processing operations.",
      },
      {
        q: "What maintenance do blast freezers typically require?",
        a: "Routine cleaning, checking door seals, monitoring airflow, inspecting fans and refrigeration components, and periodic servicing. Preventive maintenance keeps freezing times stable and energy use efficient.",
      },
      {
        q: "Do you provide cold room doors and docking solutions?",
        a: "Yes. We supply and install insulated doors (sliding, swing, roll-up, sectional, flip-flap) and docking solutions designed to reduce temperature loss and support smooth logistics movement.",
      },
      {
        q: "Can you integrate racking and material handling equipment (MHE)?",
        a: "Yes. We design layouts and supply racking, forklifts, pallet trucks, stackers, conveyors, and related systems to match product flow, safety requirements, and cold-room operating conditions.",
      },
    ],
    []
  );

  // ✅ container-fluid wrapper: full width + padding (like Bootstrap container-fluid)
  const Fluid = ({ children, className = "" }) => (
    <div className={["w-full px-4 sm:px-6 lg:px-10", className].join(" ")}>{children}</div>
  );

  const Section = ({ eyebrow, title, desc, children, alt = false }) => (
    <section className={["py-14 sm:py-16", alt ? "bg-slate-50" : "bg-white"].join(" ")}>
      <Fluid>
        <div className="text-center">
          {eyebrow ? (
            <div className="inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-700">
              {eyebrow}
            </div>
          ) : null}

          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>

          {desc ? <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{desc}</p> : null}
        </div>

        <div className="mt-10">{children}</div>
      </Fluid>
    </section>
  );

  const FeatureRow = ({ icon, title, desc }) => (
    <div className="flex gap-4 rounded-2xl border border-black/10 bg-white p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">{icon}</div>
      <div>
        <div className="text-sm font-semibold text-slate-900">{title}</div>
        <div className="mt-1 text-sm leading-relaxed text-slate-600">{desc}</div>
      </div>
    </div>
  );

  const BulletRow = ({ title, desc }) => (
    <div className="flex gap-3">
      <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white">
        <Check className="h-4 w-4" />
      </div>
      <div>
        <div className="text-sm font-semibold text-slate-900">{title}</div>
        <div className="text-sm text-slate-600">{desc}</div>
      </div>
    </div>
  );

  const FAQRow = ({ idx, q, a }) => {
    const isOpen = openFaq === idx;
    return (
      <div className="border-b border-black/10 py-6">
        <button
          type="button"
          onClick={() => setOpenFaq(isOpen ? -1 : idx)}
          className="flex w-full items-start justify-between gap-6 text-left"
          aria-expanded={isOpen}
        >
          <div className="text-lg sm:text-xl font-semibold text-slate-900 leading-snug">{q}</div>
          <div className="mt-1 flex h-8 w-8 items-center justify-center text-slate-900">
            {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
          </div>
        </button>

        {isOpen ? (
          <p className="mt-4 max-w-5xl text-base leading-relaxed text-slate-600">{a}</p>
        ) : null}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_15%_10%,rgba(56,189,248,0.10),transparent_55%),radial-gradient(900px_500px_at_85%_90%,rgba(15,23,42,0.08),transparent_55%)]" />

        <Fluid className="relative">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-700 backdrop-blur">
              Solutions
            </div>

            <h1 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Cold chain systems, turnkey delivery, reliable performance.
            </h1>

            <p className="mt-4 text-justify leading-relaxed text-slate-600 sm:text-lg">
              Antes Global is a leading cold storage system integrator and solutions provider in Kerala, India,
              specializing in commercial refrigeration and freezer installations. With 20+ years of HVAC and cold chain
              experience, we deliver reliable, energy-efficient, turnkey solutions for temperature-controlled facilities
              across India.
            </p>

            <p className="mt-4 text-justify leading-relaxed text-slate-600 sm:text-lg">
              Our services include cold storage construction, commercial refrigeration and freezer installation, blast
              freezer solutions, and customized cold chain systems—delivered as turnkey projects or modular services
              based on your requirements.
            </p>
          </div>
        </Fluid>
      </section>

      {/* ASRS */}
      <Section
        eyebrow="ASRS Cold Storage"
        title="ASRS automation built for temperature-controlled environments"
        desc="Automated storage and retrieval with advanced temperature control—reduced handling, higher density storage, and better inventory flow."
        alt
      >
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-black/10 bg-white p-7">
              <h3 className="text-lg font-semibold text-slate-900">Why choose ASRS Cold Storage by Antes Global?</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Our ASRS cold storage systems reduce manual handling, improve inventory control, maximize storage
                capacity and lower operational cost—while maintaining consistent temperatures to protect product quality.
              </p>

              <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                <div className="text-sm font-semibold text-slate-900">Temperature range</div>
                <div className="mt-1 text-sm text-slate-600">Deep Freeze to -40°C • Chilling +10°C to -18°C</div>
              </div>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-7">
            {asrsFeatures.map((f) => (
              <FeatureRow key={f.title} icon={f.icon} title={f.title} desc={f.desc} />
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-base font-semibold text-slate-900">Intelligent storage systems</h3>
            <div className="mt-4 space-y-3">
              {asrsSystems.map((x) => (
                <BulletRow key={x.title} title={x.title} desc={x.desc} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">Automation that works in extreme cold</h3>
            <div className="mt-4 space-y-3">
              {asrsAutomation.map((x) => (
                <BulletRow key={x.title} title={x.title} desc={x.desc} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* MATERIAL HANDLING */}
      <Section
        eyebrow="Material Handling Equipment"
        title="Material handling systems designed for cold storage performance"
        desc="Cold-resistant builds, energy-efficient operations, operator-friendly designs—built for temperature-controlled workflows."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {mheRange.map((x) => (
            <FeatureRow key={x.title} icon={x.icon} title={x.title} desc={x.desc} />
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-black/10 bg-slate-50 p-7">
          <h3 className="text-base font-semibold text-slate-900">Industries served</h3>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Food processing, Retail, Food & Drinks manufacturing, Warehousing.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            As a trusted material handling solutions provider in India, we deliver durable, high-performing systems
            tailored to commercial and industrial requirements—with installation, maintenance and technical support.
          </p>
        </div>
      </Section>

      {/* TURNKEY */}
      <Section
        eyebrow="Turnkey solutions for cold storage warehouses"
        title="End-to-end delivery for complete cold storage facilities"
        desc="System design, supply coordination, installation and ongoing maintenance—panels, refrigeration, racking, MHE and automation."
        alt
      >
        <div className="grid gap-4 md:grid-cols-2">
          {turnkeyWhy.map((x) => (
            <FeatureRow key={x.title} icon={x.icon} title={x.title} desc={x.desc} />
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-start">
          <div className="rounded-3xl border border-black/10 bg-white p-7 lg:col-span-7">
            <h3 className="text-base font-semibold text-slate-900">
              Turnkey solutions for cold warehousing with racking & MHE
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              We design, supply and install palletized racking systems (pallet racking, drive-in, push-back) and
              material handling equipment (forklifts, reach trucks, order picker, conveyors) based on product flow,
              storage density and operational requirements.
            </p>

            <div className="mt-5 rounded-2xl bg-slate-50 p-5">
              <div className="text-sm font-semibold text-slate-900">Temperatureemperature & capacity</div>
              <div className="mt-1 text-sm text-slate-600">+10°C to -40°C • 1 MT to 5000 MT &amp; above</div>
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-7 lg:col-span-5">
            <h3 className="text-base font-semibold text-slate-900">Industries served</h3>

            <div className="mt-5 space-y-3">
              <div className="flex gap-3">
                <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white">
                  <Check className="h-4 w-4" />
                </div>
                <div className="text-sm text-slate-600">
                  <span className="font-semibold text-slate-900">Frozen Storage:</span> solutions as low as -40°C
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white">
                  <Check className="h-4 w-4" />
                </div>
                <div className="text-sm text-slate-600">
                  <span className="font-semibold text-slate-900">Chilling Storage:</span> +10°C to -18°C
                </div>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-slate-600">
              3PL, Multipurpose Cold Store, Food processing, Seafood, Research & Education, Meat.
            </p>
          </div>
        </div>
      </Section>

      {/* BLAST FREEZERS */}
      <Section
        eyebrow="Portable & Customized Blast Freezers"
        title="Rapid, uniform freezing engineered for product integrity"
        desc="Operating range -35°C to -40°C • Capacity 50 kg to 10 MT • Reliable, energy-efficient performance."
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-black/10 bg-white p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <Snowflake className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Why choose Antes Global?</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Customized solutions, portable options, high-quality construction, energy efficiency, and expert
                after-sales support.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-slate-50 p-7 lg:col-span-7">
            <h3 className="text-base font-semibold text-slate-900">Key features</h3>
            <ul className="mt-4 space-y-2">
              {blastFeatures.map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* WALK-IN */}
      <Section
        eyebrow="Walk-In Cold Rooms"
        title="Walk-in chillers & freezers tailored to your operations"
        desc="Reliable, energy-efficient cold room solutions customized for site conditions and performance needs."
        alt
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="rounded-3xl border border-black/10 bg-white p-7 lg:col-span-6">
            <h3 className="text-base font-semibold text-slate-900">Key features</h3>
            <ul className="mt-4 space-y-2">
              {walkinFeatures.map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-7 lg:col-span-6">
            <h3 className="text-base font-semibold text-slate-900">Industries served</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Food Processing, FMCG, Hospitality, Pharmaceutical, Hotels, Pharmacy, Fruits & Vegetables, Seafood, Dairy,
              Poultry, Fast food chains, Meat, Food & Drinks manufacturing, Research & Education.
            </p>
          </div>
        </div>
      </Section>

      {/* ICE MACHINES */}
      <Section
        eyebrow="Ice Machines"
        title="Ice-making solutions for consistent, high-quality output"
        desc="Energy-efficient, reliable systems built for industrial and commercial use."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {iceTypes.map((x) => (
            <div key={x.title} className="rounded-3xl border border-black/10 bg-white p-7">
              <h3 className="text-base font-semibold text-slate-900">{x.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{x.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-600">
          Industries served: Seafood, Supermarkets, Hotels, Fast food chains.
        </p>
      </Section>

      {/* DOORS & DOCK */}
      <Section
        eyebrow="Doors & Dock Levellers"
        title="Doors and docking solutions for cold rooms and warehousing"
        desc="High-efficiency, durable, energy-saving solutions for seamless controlled-environment operations."
        alt
      >
        <div className="rounded-3xl border border-black/10 bg-white p-7">
          <div className="grid gap-5 md:grid-cols-2">
            {doorsRange.map((x) => (
              <div key={x.title} className="flex gap-3">
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{x.title}</div>
                  <div className="mt-1 text-sm text-slate-600">{x.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-2xl bg-slate-50 p-6">
            <h3 className="text-sm font-semibold text-slate-900">Designed for cold rooms and warehouses</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Cold room doors minimize temperature loss to protect product quality. Warehouse doors and docking systems
              support secure, smooth access for reliable logistics and operations.
            </p>

            <p className="mt-4 text-sm text-slate-600">
              Industries: Poultry, Dairy, Food processing, Seafood, Food & Drinks manufacturing.
            </p>
          </div>
        </div>
      </Section>

    
      <Footer />
    </div>
  );
}
