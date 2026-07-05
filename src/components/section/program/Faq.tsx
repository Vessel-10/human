"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Program } from "@/data/programs";

export default function Faq({ program }: { program: Program }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-paper-raised py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <div className="mb-12 text-center">
          <p className="font-mono text-xs tracking-wider uppercase text-clay mb-3">
            FAQ
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal">
            Frequently asked questions
          </h2>
        </div>

        <div className="flex flex-col border-t border-ink/10">
          {program.faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.question} className="border-b border-ink/10">
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={open}
                >
                  <span className="font-display text-base md:text-lg font-semibold text-charcoal">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`text-charcoal/50 shrink-0 transition-transform duration-200 ${
                      open ? "rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>
                <div
                  className={`grid transition-all duration-200 ease-in-out ${
                    open ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm text-charcoal/65 leading-relaxed pr-8">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}