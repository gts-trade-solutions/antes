"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Phone, Mail, MapPin, Building2, Globe, Flag } from "lucide-react";

export default function Contact() {
  const offices = [
    {
      country: "Qatar",
      badge: "Antes International WLL",
      address: ["C.R.NO:78049 , P.O.BOX:37794 , BUILDING 91 , ZONE 91 STREET 3083 , BIRKAT AL AWAMER , DOHA , QATAR"],
      email: "tisson@antesglobal.com",
      phones: ["+974 3000 6550"],
    },
    {
      country: "Oman",
      badge: "AL Arab Global Cooling Solution",
      address: [
        "CR NO.1426490 , UNIT NO.41 , BUILDING NO.698 , BLOCK NO . 164 , WAY-5007 , GHALA , MUSCAT - SULTANATE OF OMAN",
      ],
      email: "service.oman@antesglobal.com , accounts.oman@antesglobal.com",
      phones: ["+968 9173 7705"],
    },
  ];

  // ✅ If India is not needed, make the first office the "primary" head office
  const headOffice = offices[0];
  const branches = offices.slice(1);

  const pageBg = "bg-white text-slate-900";
  const heroBg = "bg-white";
  const sectionBg = "bg-white";
  const cardBg = "bg-white";

  const inputBase =
    "w-full rounded-2xl border border-black/10 bg-white text-slate-900 placeholder:text-slate-400 shadow-sm " +
    "focus-visible:ring-2 focus-visible:ring-slate-900/10 focus-visible:ring-offset-0";

  const selectBase =
    "w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none " +
    "focus:ring-2 focus:ring-slate-900/10";

  const OfficeCard = ({ o, big }) => {
    if (!o) return null; // ✅ extra safety

    return (
      <div
        className={[
          "rounded-3xl border border-black/10 bg-white shadow-sm hover:shadow-md transition",
          big ? "p-7 sm:p-8 w-full" : "p-6 sm:p-7",
          big ? "ring-1 ring-slate-900/5" : "",
        ].join(" ")}
      >
        <div className="flex items-start gap-4">
          <div
            className={[
              "flex items-center justify-center bg-slate-900 text-white",
              big ? "h-12 w-12 rounded-2xl" : "h-11 w-11 rounded-2xl",
            ].join(" ")}
          >
            {big ? <Building2 className="h-6 w-6" /> : <Flag className="h-5 w-5" />}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <div className={[big ? "text-xl" : "text-base", "font-semibold text-slate-900"].join(" ")}>
                {o.country}
              </div>

              <span
                className={[
                  "inline-flex items-center rounded-full border border-black/10 bg-white text-xs font-semibold text-slate-700",
                  big ? "px-3.5 py-1.5" : "px-3 py-1",
                ].join(" ")}
              >
                {o.badge}
              </span>

              {big ? (
                <span className="inline-flex items-center rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700">
                  Primary location
                </span>
              ) : null}
            </div>

            <div className={[big ? "mt-5" : "mt-4", "space-y-3 text-sm text-slate-700"].join(" ")}>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-slate-400" />
                <div className="leading-relaxed">
                  {(o.address || []).map((line, idx) => (
                    <div key={idx} className="break-words">
                      {line}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-slate-400" />
                <div className="leading-relaxed break-words">{o.email}</div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-slate-400" />
                <div className="leading-relaxed">
                  {(o.phones || []).map((p, idx) => (
                    <div key={idx} className="break-words">
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {big ? (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm">
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Sales Email</div>
                  <div className="mt-1 font-semibold text-slate-900 break-words">{o.email}</div>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm">
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Support</div>
                  <div className="mt-1 font-semibold text-slate-900 break-words">ajay@antesglobal.com</div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen ${pageBg}`}>
      <Header />

      {/* HERO */}
      <section className={`py-14 sm:py-16 ${heroBg}`}>
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-700">
              Contact
            </div>

            <h1 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Let’s discuss your cold chain requirement.
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg text-justify">
              Reach our team in Qatar and Oman. We’ll help you with design, execution, and long-term support.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className={`py-12 sm:py-14 ${sectionBg}`}>
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-6xl">
            {/* Form */}
            <div className={`rounded-3xl border border-black/10 ${cardBg} p-6 sm:p-8 shadow-sm`}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900">Send us a message</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 text-justify">
                    Share your project details. We’ll respond by email or phone.
                  </p>
                </div>

                <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  <Globe className="h-6 w-6" />
                </div>
              </div>

              <form className="mt-6 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 mb-2">
                      First name *
                    </label>
                    <Input className={inputBase} required />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 mb-2">
                      Last name *
                    </label>
                    <Input className={inputBase} required />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 mb-2">
                      Email *
                    </label>
                    <Input type="email" className={inputBase} required />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 mb-2">
                      Phone
                    </label>
                    <Input type="tel" className={inputBase} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 mb-2">
                    Company
                  </label>
                  <Input className={inputBase} />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 mb-2">
                    Service required
                  </label>
                  <select className={selectBase}>
                    <option value="">Select a service</option>
                    <option value="asrs">ASRS Cold Storage</option>
                    <option value="turnkey">Turnkey Cold Storage Warehouses</option>
                    <option value="blast-freezer">Blast Freezers</option>
                    <option value="walk-in">Walk-In Cold Rooms</option>
                    <option value="ice-machines">Ice Machines</option>
                    <option value="doors-docks">Doors & Docking Solutions</option>
                    <option value="mhe">Material Handling Equipment</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 mb-2">
                    Message *
                  </label>
                  <Textarea
                    required
                    className={[inputBase, "min-h-36"].join(" ")}
                    placeholder="Please describe your project requirements…"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-2xl bg-slate-900 py-6 text-base font-semibold text-white hover:bg-slate-800"
                >
                  Send Message
                </Button>

                <p className="text-xs text-slate-500">
                  For direct inquiries, email: <span className="font-semibold">ajay@antesglobal.com</span>
                </p>
              </form>
            </div>

            {/* Offices BELOW */}
            <div className="mt-10">
              <div className="rounded-3xl border border-black/10 bg-white p-6 sm:p-7">
                <h3 className="text-lg font-semibold text-slate-900">Offices & Contacts</h3>
                <p className="mt-2 text-sm text-slate-600 text-justify">
                  Primary location is highlighted below. Branch offices are listed after it.
                </p>
              </div>

              {/* ✅ FULL-WIDTH PRIMARY OFFICE (Qatar) */}
              <div className="mt-6">
                <OfficeCard o={headOffice} big />
              </div>

              {/* ✅ Branches section only if there are branches */}
              {branches.length > 0 ? (
                <>
                  <div className="mt-8 flex items-center justify-between gap-4">
                    <h4 className="text-base sm:text-lg font-semibold text-slate-900">Branches</h4>
                    <div className="h-px w-full bg-black/10" />
                  </div>

                  <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                    {branches.map((o) => (
                      <OfficeCard key={o.country} o={o} />
                    ))}
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
