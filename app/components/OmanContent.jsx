"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function OmanContent() {
  return (
    <section className="w-full py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#0A2E57] mb-3">
          SOLUTIONS WE DELIVER
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed mb-6">
          We deliver end-to-end cold storage and refrigeration solutions in Oman,
          covering design, engineering, supply, installation, and after-sales support
          for temperature-controlled infrastructure across multiple industries.
        </p>

        {/* ✅ Our Solutions Button */}
        <div className="flex justify-center">
          <Link
            href="/solutions-products"
            className="inline-flex items-center gap-2 rounded-full bg-[#0A2E57] px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#083055] hover:shadow-md"
          >
            Our Solutions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
