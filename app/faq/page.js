"use client";

import React, { useMemo, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ChevronDown, Search } from "lucide-react";

const FAQ_DATA = [
  {
    section: "Company Overview",
    items: [
      {
        q: "What is Antes?",
        a: "Antes is a fast-growing commercial refrigeration and cold chain solutions company specializing in customized end-to-end cold storage systems. We serve industries such as food processing, dairy, seafood, retail & fast food, pharma, hospitality, cold chain logistics, and large multipurpose warehousing.",
      },
      {
        q: "Where does Antes operate?",
        a: "We operate across India, Oman, and Qatar, delivering end-to-end cold chain solutions through our in-house team.",
      },
      {
        q: "What does your SKS delivery model include?",
        a: "Our SKS model covers Design, Cold Solution Delivery, Customized Projects, Installation, and Reliable After-Sales Support.",
      },
      {
        q: "What industries do you serve?",
        a: "We serve food processing, dairy, seafood, retail & fast food chains, pharma, hospitality, cold chain logistics, and large warehousing, along with additional industry-specific requirements for temperature-controlled operations.",
      },
    ],
  },
  {
    section: "Vision, Mission & Core Principles",
    items: [
      {
        q: "What is Antes’s vision?",
        a: "To become a trusted cold storage solutions partner in India, delivering advanced, efficient, and eco-friendly cold room systems that help businesses preserve quality, improve performance, and grow sustainably across food, dairy, seafood, pharma, and processing industries.",
      },
      {
        q: "What is Antes’s mission?",
        a: "To deliver custom-built, reliable, and energy-efficient cold storage solutions that support clients’ growth and product integrity—through smart design, quality installation, and long-term service support.",
      },
      {
        q: "What are your core principles?",
        a: "Efficiency & Safety, Eco-Friendly Innovation, and Commitment to Partnership—from design to installation and after-sales service.",
      },
    ],
  },
  {
    section: "Solutions & Services",
    items: [
      {
        q: "What cold chain solutions do you provide in Kerala, India?",
        a: "We provide commercial refrigeration and freezer installations, cold storage construction, blast freezer solutions, and customized cold chain solutions. We deliver turnkey projects or customized services based on customer requirements.",
      },
      {
        q: "Do you offer turnkey cold storage warehouse solutions?",
        a: "Yes. We deliver turnkey cold storage solutions covering system design, supply coordination, installation, and ongoing maintenance of insulated panels, refrigeration systems, palletized racking, material handling equipment (MHE), and automation solutions.",
      },
      {
        q: "What temperature ranges do your systems support?",
        a: "We support temperature-controlled environments from +10°C down to -40°C, depending on the application (chilling, frozen storage, deep freeze).",
      },
      {
        q: "What storage capacities do you support?",
        a: "We support cold storage capacities from 1 metric ton up to 5,000 metric tons and above, depending on the project scope and design.",
      },
    ],
  },
  {
    section: "ASRS Cold Storage",
    items: [
      {
        q: "What is ASRS cold storage?",
        a: "ASRS (Automated Storage and Retrieval System) cold storage combines automation with controlled temperature environments to reduce manual handling, improve inventory control, maximize storage density, and maintain consistent product conditions.",
      },
      {
        q: "Why choose ASRS cold storage by Antes?",
        a: "Our ASRS solutions are designed for precise temperature control, automated storage and retrieval (reducing frequent door openings), space optimization through vertical storage, and improved energy efficiency—helping lower operational costs while maintaining product quality.",
      },
      {
        q: "What are the key features of your ASRS cold storage?",
        a: "Precise temperature control, automated storage and retrieval, space optimization (high-density vertical storage), and energy-efficient operation.",
      },
      {
        q: "What types of automated storage systems do you provide?",
        a: "We provide high-density racking, shuttle-based systems, and dynamic flow racks—based on the product profile, throughput, and facility layout.",
      },
      {
        q: "Can automation work in extreme cold environments?",
        a: "Yes. Our solutions are designed for sub-zero environments using advanced automation such as guided vehicles (AGVs), robotic palletizers, and pick-and-place robots to ensure efficiency and reliability.",
      },
      {
        q: "Which industries typically use ASRS cold storage?",
        a: "Pharmacy, seafood, dairy, food processing, and other temperature-sensitive supply chains requiring high-density storage and efficient inventory movement.",
      },
    ],
  },
  {
    section: "Material Handling Equipment (MHE)",
    items: [
      {
        q: "Do you supply material handling equipment for cold storage?",
        a: "Yes. We supply and support material handling solutions including pallet trucks, forklifts, stackers, conveyor systems, reach trucks, and order pickers tailored for cold storage operations.",
      },
      {
        q: "Why choose Antes for MHE solutions?",
        a: "Our equipment is designed to meet industry standards for durability and performance, with services including installation, maintenance, and technical assistance to ensure long-term operational efficiency.",
      },
      {
        q: "Is your equipment suitable for freezing temperatures?",
        a: "Yes. We provide cold-resistant builds suitable for chilled and frozen environments, with energy-efficient operation and operator-friendly designs for safety and comfort.",
      },
    ],
  },
  {
    section: "Blast Freezers",
    items: [
      {
        q: "Do you provide portable and customized blast freezers?",
        a: "Yes. We provide portable and customized blast freezer solutions designed for rapid and uniform freezing.",
      },
      {
        q: "What temperature and capacity ranges do your blast freezers support?",
        a: "Typically -35°C to -40°C, with capacities from 50 kg up to 10 metric tons depending on the model and design.",
      },
      {
        q: "What are the key features of your blast freezers?",
        a: "Rapid freezing times, even temperature distribution, energy-efficient operation, robust construction, and easy cleaning/maintenance.",
      },
      {
        q: "Which industries use blast freezers?",
        a: "Dairy, poultry, seafood, food processing, food & drinks manufacturing, and research & education.",
      },
    ],
  },
  {
    section: "Walk-In Cold Rooms",
    items: [
      {
        q: "Do you offer walk-in chillers and walk-in freezers?",
        a: "Yes. We provide customized walk-in cold rooms designed for stable temperature control, flexible sizing/configurations, and indoor/outdoor installations.",
      },
      {
        q: "Can you customize walk-in cold rooms based on site requirements?",
        a: "Yes. Our engineering team designs solutions based on site conditions, capacity needs, and target temperature ranges to ensure reliable, energy-efficient performance.",
      },
      {
        q: "Which industries typically use walk-in cold rooms?",
        a: "Food processing, FMCG, hospitality, pharmaceuticals, hotels, pharmacies, fruits & vegetables, seafood, dairy, poultry, fast food chains, meat, food & drinks manufacturing, and research & education.",
      },
    ],
  },
  {
    section: "Ice Machines",
    items: [
      {
        q: "What types of ice machines do you offer?",
        a: "We offer flake ice machines, block ice machines, and cube ice machines designed for reliable, energy-efficient ice production.",
      },
      {
        q: "Which industries use your ice machines?",
        a: "Seafood, supermarkets, hotels, and fast food chains.",
      },
      {
        q: "Do you provide installation and service support for ice machines?",
        a: "Yes. We support with installation, maintenance, and technical assistance for long-term performance.",
      },
    ],
  },
  {
    section: "Doors & Docking Solutions",
    items: [
      {
        q: "What doors and docking solutions do you provide?",
        a: "We provide sliding doors, swing doors, roll-up doors, sectional doors, and flip-flap doors, along with docking solutions for cold rooms and temperature-controlled warehouses.",
      },
      {
        q: "How do doors and docking solutions improve cold storage performance?",
        a: "They reduce temperature loss, improve operational efficiency, enhance durability, and support energy savings through better sealing and reliable access control.",
      },
      {
        q: "Are your solutions suitable for cold rooms and warehouses?",
        a: "Yes. We design solutions specifically for cold room temperature retention and for secure, efficient warehouse access.",
      },
    ],
  },
  {
    section: "Why Choose Antes",
    items: [
      {
        q: "Why is Antes considered a leading cold storage solutions provider in India?",
        a: "We combine industry-leading expertise, an integrated product portfolio (blast freezers, walk-in cold rooms, display chillers, doors, docking solutions), high-quality equipment, innovation, and tailored end-to-end support.",
      },
      {
        q: "Do you provide after-sales support?",
        a: "Yes. Reliable after-sales support is part of our delivery model, ensuring long-term performance and operational continuity.",
      },
      {
        q: "Can you deliver customized solutions for specific industries?",
        a: "Yes. We design solutions based on product type, storage capacity, throughput, and target temperature requirements.",
      },
    ],
  },
  {
    section: "Testimonials",
    items: [
      {
        q: "What do your customers say about Antes?",
        a: "Customers highlight timely execution, strong performance of equipment, professional planning/design/installation, and prompt after-sales service support across blast freezers, turnkey cold stores, and racking warehouses.",
      },
    ],
  },
  {
    section: "Contact & Locations",
    items: [
      {
        q: "How can I contact Antes (India)?",
        a: "India: 74/460-C, RIGA BUILDING, Near Edakkal Bhagavathy Temple, Beach Road, Calicut 673 021. Email: sales.in@antesglobal.com. Contact: 0495-2526797 / 8714650444.",
      },
      {
        q: "How can I contact Antes (Qatar)?",
        a: "Qatar: Antes International WLL, C.R.NO:78049 , P.O.BOX:37794 , BUILDING 91 , ZONE 91 STREET 3083 , BIRKAT AL AWAMER , DOHA , QATAR. Email: tisson@antesglobal.com. Contact: +974 3000 6550.",
      },
      {
        q: "How can I contact Antes (Oman)?",
        a: "Oman: Opening shortly. Email: sales.in@antesglobal.com. Contact: +968 9173 7705.",
      },
     
    ],
  },
];

function normalize(s) {
  return (s || "").toLowerCase().trim();
}

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white">
      <button
        type="button"
        onClick={onToggle}
        className="w-full px-5 py-4 flex items-start justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <span className="text-[15px] sm:text-base font-semibold text-slate-900">
          {q}
        </span>
        <ChevronDown
          className={[
            "mt-0.5 h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200",
            open ? "rotate-180" : "rotate-0",
          ].join(" ")}
        />
      </button>

      {open && (
        <div className="px-5 pb-5 -mt-1">
          <p className="text-sm sm:text-[15px] leading-relaxed text-slate-600">
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  const [query, setQuery] = useState("");
  const [openKey, setOpenKey] = useState("");

  const filtered = useMemo(() => {
    const q = normalize(query);
    if (!q) return FAQ_DATA;

    return FAQ_DATA.map((sec) => {
      const items = sec.items.filter((it) => {
        const hay = `${it.q} ${it.a}`.toLowerCase();
        return hay.includes(q);
      });
      return { ...sec, items };
    }).filter((sec) => sec.items.length > 0);
  }, [query]);

  const totalResults = useMemo(
    () => filtered.reduce((sum, s) => sum + s.items.length, 0),
    [filtered]
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* HERO (NO background patterns) */}
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-700">
              FAQ
            </div>

            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
              Frequently asked questions
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Answers about Antes, cold storage solutions, ASRS, blast freezers,
              walk-in cold rooms, ice machines, doors & docking, and more.
            </p>

            {/* Search */}
            <div className="mt-7">
              <div className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-4 py-3">
                <Search className="h-5 w-5 text-slate-500" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search questions… (e.g., ASRS, blast freezer, Qatar)"
                  className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 outline-none text-sm sm:text-[15px]"
                />
              </div>
              <div className="mt-2 text-xs text-slate-500">
                Showing {totalResults} results
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CONTENT (NO dark background) */}
      <section className="flex-1 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-12">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Left: Sections list (desktop) */}
            <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-24 rounded-3xl border border-black/10 bg-white p-5">
                <div className="text-sm font-semibold text-slate-900">
                  Sections
                </div>
                <div className="mt-3 space-y-2">
                  {filtered.map((sec) => (
                    <a
                      key={sec.section}
                      href={`#${sec.section.replace(/\s+/g, "-").toLowerCase()}`}
                      className="block rounded-xl px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition"
                    >
                      {sec.section}
                      <span className="ml-2 text-slate-400">
                        ({sec.items.length})
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </aside>

            {/* Right: FAQ accordions */}
            <main className="lg:col-span-8 space-y-10">
              {filtered.length === 0 ? (
                <div className="rounded-3xl border border-black/10 bg-white p-8 text-slate-600">
                  No results found. Try a different keyword.
                </div>
              ) : (
                filtered.map((sec) => (
                  <div
                    key={sec.section}
                    id={sec.section.replace(/\s+/g, "-").toLowerCase()}
                    className="scroll-mt-24"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                        {sec.section}
                      </h2>
                      <span className="text-xs sm:text-sm text-slate-500">
                        {sec.items.length} items
                      </span>
                    </div>

                    <div className="mt-4 space-y-3">
                      {sec.items.map((it) => {
                        const key = `${sec.section}::${it.q}`;
                        const open = openKey === key;
                        return (
                          <FaqItem
                            key={key}
                            q={it.q}
                            a={it.a}
                            open={open}
                            onToggle={() => setOpenKey(open ? "" : key)}
                          />
                        );
                      })}
                    </div>
                  </div>
                ))
              )}
            </main>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
