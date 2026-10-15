"use client";

import { useState } from "react";
import Image from "next/image";

const SOLUTIONS = [
  {
    number: "01",
    title: "Strategic Website Design",
    desc: "Your website is your 24/7 digital salesperson. We build lightning-fast, mobile optimized platforms engineered to rank high on Google. By blending trust-building design with foundational SEO, we ensure customers find you easily and are naturally guided to reach out.",
    image: "/service.png",
  },
  {
    number: "02",
    title: "Conversion-Focused Landing Pages",
    desc: "High-velocity sales funnels and campaign landing pages designed with behavioral psychology heuristics, aggressive page speed tuning, and clear conversion paths to maximize your advertising ROI.",
    image: "/service.png",
  },
  {
    number: "03",
    title: "Brand Identity & Positioning",
    desc: "A distinctive digital brand presence that commands trust from day one. We craft cohesive visual systems, bespoke typography scales, and strategic positioning assets that make your business instantly recognizable.",
    image: "/service.png",
  },
  {
    number: "04",
    title: "Website Showcase Videos",
    desc: "Cinematic 3D mockups and product walkthrough motion graphics that highlight your digital platform's premium craftsmanship across social media, pitch decks, and hero headers.",
    image: "/service.png",
  },
  {
    number: "05",
    title: "UX Strategy & Audits",
    desc: "Data-driven heuristic audits and user journey mapping to uncover where visitors drop off. We identify hidden bottlenecks, optimize page flows, and implement immediate UX enhancements that boost overall conversion rates.",
    image: "/service.png",
  },
];

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleSolution = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="services"
      className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#272727]/60 scroll-mt-24"
    >
      {/* ── Top Header / Frame 9 ── */}
      <div className="mb-14 sm:mb-20">
        {/* Badge: Dot + "Our Solutions" */}
        <div className="flex items-center gap-2.5 mb-4 sm:mb-6">
          <span className="w-2 h-2 rounded-full bg-[#ff4d28] shadow-[0_0_12px_#ff4d28]" />
          <span className="font-manrope text-base text-white font-normal">
            Our Solutions
          </span>
        </div>

        {/* Frame 42: Title & Description */}
        <div className="max-w-4xl">
          <h2 className="font-bricolage text-3xl sm:text-4xl lg:text-[44px] text-white font-normal tracking-tight leading-[1.12] mb-4">
            Everything You Need to Grow Online
          </h2>
          <p className="font-manrope text-lg sm:text-xl lg:text-[20px] text-[#c0c0c0] leading-relaxed max-w-2xl">
            We focus strictly on services that provide a clear return on your
            investment.
          </p>
        </div>
      </div>

      {/* ── Services List / framer-gjqny6 ── */}
      <div className="border-t border-[#272727]">
        {SOLUTIONS.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className="border-b border-[#272727] transition-colors duration-300"
            >
              {/* ── Closed Row (Smooth Collapse / Expand) ── */}
              <div
                className={`accordion-row ${
                  isOpen ? "accordion-row-open" : "accordion-row-closed"
                }`}
              >
                <button
                  onClick={() => toggleSolution(idx)}
                  className="w-full text-left py-7 sm:py-8 lg:py-9 flex items-center justify-between gap-6 cursor-pointer group focus:outline-none hover:bg-white/[0.015] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-bricolage text-xl sm:text-2xl lg:text-[30px] text-white font-normal tracking-tight group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300">
                    {item.title}
                  </span>

                  <span className="font-aboreto text-lg sm:text-xl lg:text-[20px] text-[#c0c0c0] tracking-[-0.48px] leading-[20px] group-hover:text-white transition-colors">
                    {item.number}
                  </span>
                </button>
              </div>

              {/* ── Open State (Smooth Grid Expand / Collapse) ── */}
              <div
                className={`accordion-grid ${
                  isOpen ? "accordion-grid-open" : "accordion-grid-closed"
                }`}
              >
                <div className="accordion-inner">
                  <div className="py-8 sm:py-10 lg:py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch">
                      {/* Left Column: Title + Number at Top, Body at Bottom */}
                      <div className="lg:col-span-6 flex flex-col justify-between py-1">
                        {/* Top: Title and Number */}
                        <button
                          onClick={() => toggleSolution(idx)}
                          className="text-left cursor-pointer group flex items-center gap-4 sm:gap-6 flex-wrap focus:outline-none"
                        >
                          <h3 className="font-bricolage text-xl sm:text-2xl lg:text-[30px] text-white font-normal tracking-tight leading-tight group-hover:text-neutral-200 transition-colors">
                            {item.title}
                          </h3>
                          <span className="font-aboreto text-lg sm:text-xl lg:text-[20px] text-[#c0c0c0] tracking-[-0.48px] leading-[20px]">
                            {item.number}
                          </span>
                        </button>

                        {/* Bottom: Paragraph description */}
                        <p className="font-manrope text-sm sm:text-base text-neutral-400 leading-relaxed max-w-lg mt-8 lg:mt-0">
                          {item.desc}
                        </p>
                      </div>

                      {/* Right Column: Rounded Mockup Image Card */}
                      <div className="lg:col-span-6">
                        <div
                          className={`relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0d0d10] border border-white/10 aspect-[16/10] lg:aspect-[4/3] shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            isOpen
                              ? "opacity-100 scale-100 translate-y-0"
                              : "opacity-0 scale-95 translate-y-4"
                          }`}
                        >
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover object-center hover:scale-[1.02] transition-transform duration-700 ease-out"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority={idx === 0}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
