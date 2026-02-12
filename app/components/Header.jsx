"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Menu, X, ChevronRight, ChevronDown, Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../components/ui/button";
import logo from "../../assets/logo-3.png";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/company" },
  { name: "Solutions & Products", href: "/solutions-products" },
  { name: "Projects", href: "/projects" },
];

const COUNTRIES = [
  { label: "India", href: "/" },
  { label: "Qatar", href: "/qatar" },
  { label: "Oman", href: "/oman" },
];

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);
  const countryRef = useRef(null);

  const activePath = useMemo(() => pathname || "/", [pathname]);

  useEffect(() => {
    setMobileOpen(false);
    setCountryOpen(false);
  }, [activePath]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (countryRef.current && !countryRef.current.contains(e.target)) {
        setCountryOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const go = (href) => {
    router.push(href);
  };

  const isActive = (href) => activePath === href;

  // Detect current country based on path prefix
  const currentCountry =
    COUNTRIES.find((c) =>
      c.href === "/"
        ? activePath === "/"
        : activePath.startsWith(c.href)
    )?.label || "India";

  return (
    <header className="sticky top-0 z-50">
      <div className="relative">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061427] via-[#071a33] to-[#061427]" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.25)_1px,transparent_0)] [background-size:18px_18px]" />

        <div className="relative">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-2">
            <div className="flex h-14 items-center justify-between">

              {/* Logo */}
              <button onClick={() => go("/")} className="flex items-center">
                <img
                  src={logo.src}
                  alt="antes"
                  className="h-9 w-auto object-contain"
                />
              </button>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-10">
                {NAV_ITEMS.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <button
                      key={item.name}
                      onClick={() => go(item.href)}
                      className={`relative py-2 text-[15px] font-medium transition-colors ${
                        active
                          ? "text-white"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {item.name}
                      <span
                        className={`absolute left-0 -bottom-[6px] h-[2px] w-full transition-transform ${
                          active
                            ? "scale-x-100 bg-white"
                            : "scale-x-0 bg-white/70"
                        }`}
                      />
                    </button>
                  );
                })}
              </nav>

              {/* Right Section */}
              <div className="flex items-center gap-3">

                {/* Country Dropdown */}
                <div className="relative hidden lg:block" ref={countryRef}>
                  <Button
                    variant="ghost"
                    onClick={() => setCountryOpen(!countryOpen)}
                    className="rounded-full text-white hover:bg-white/10 px-3"
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    <span className="text-sm">{currentCountry}</span>
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>

                  {countryOpen && (
                    <div className="absolute right-0 mt-2 w-44 rounded-xl border border-white/10 bg-[#071a33] shadow-xl">
                      {COUNTRIES.map((country) => (
                        <button
                          key={country.label}
                          onClick={() => {
                            go(country.href);
                            setCountryOpen(false);
                          }}
                          className={`w-full px-3 py-2 text-left text-sm transition ${
                            currentCountry === country.label
                              ? "bg-white text-[#061427]"
                              : "text-white/90 hover:bg-white/10"
                          }`}
                        >
                          {country.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Contact Button */}
                <Button
                  className="hidden lg:inline-flex rounded-full px-5 bg-white text-[#061427] hover:bg-white/90"
                  onClick={() => go("/contact")}
                >
                  Contact Us
                </Button>

                {/* Mobile Menu Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-white"
                  onClick={() => setMobileOpen(!mobileOpen)}
                >
                  {mobileOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </Button>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-white/10" />
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-gradient-to-r from-[#061427] via-[#071a33] to-[#061427] border-b border-white/10">
          <div className="px-4 py-4 space-y-3">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.name}
                onClick={() => go(item.href)}
                className="w-full text-left text-white/90 hover:bg-white/10 rounded-xl px-3 py-3"
              >
                {item.name}
              </button>
            ))}

            {/* Country Select Mobile */}
            <select
              value={currentCountry}
              onChange={(e) => {
                const selected = COUNTRIES.find(
                  (c) => c.label === e.target.value
                );
                if (selected) go(selected.href);
              }}
              className="w-full rounded-lg bg-white text-[#061427] px-3 py-3"
            >
              {COUNTRIES.map((country) => (
                <option key={country.label}>{country.label}</option>
              ))}
            </select>

            <Button
              className="w-full rounded-full bg-white text-[#061427]"
              onClick={() => go("/contact")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
