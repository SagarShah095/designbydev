"use client";

import { useState } from "react";
import Image from "next/image";

const SOLUTIONS = [
  {
    number: "01",
    title: "Brand Strategy & Visual Identity",
    desc: "We define your core market differentiation, tone of voice, typography, and premium visual aesthetics to position your brand at the top of your industry.",
    image: "/service.png",
  },
  {
    number: "02",
    title: "High-Converting Website Design",
    desc: "Bespoke digital experiences built from scratch to turn cold visitors into high-paying clients through psychology-backed UI/UX and clear hierarchy.",
    image: "/services-laptop.jpg",
  },
  {
    number: "03",
    title: "Full-Stack Web Development",
    desc: "Lightning-fast Next.js engineering with rigorous Core Web Vitals optimization, smooth micro-interactions, dynamic CMS integration, and seamless responsiveness.",
    image: "/service.png",
  },
  {
    number: "04",
    title: "Conversion Optimization & SEO",
    desc: "Strategic search engine foundations, technical performance audits, and frictionless conversion funnels engineered to maximize your organic growth and client bookings.",
    image: "/services-laptop.jpg",
  },
];

export default function ServicesSection({ scrollToSection }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleSolution = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="services"
      className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24"
    >
      {/* ── Section Header ── */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-14 sm:mb-20">
        <div>
          {/* Badge: Dot + "Our Capabilities" */}
          <div className="flex items-center gap-2.5 mb-4 sm:mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff4d28] shadow-[0_0_12px_#ff4d28]" />
            <span className="font-manrope text-base text-white font-normal">
              Our Capabilities
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-bricolage text-3xl sm:text-4xl lg:text-[44px] tracking-tight leading-[1.12]">
            <span className="text-white font-normal">Strategic Design </span>
            <span className="text-neutral-400 font-normal">&amp; </span>
            <br className="hidden sm:block" />
            <span className="text-white font-normal">
              Scalable Engineering.
            </span>
          </h2>
        </div>

        {/* Subtitle */}
        <p className="font-manrope text-base sm:text-lg text-[#c0c0c0] leading-relaxed max-w-md lg:pb-1">
          Everything your brand needs to stand out, command premium pricing,
          and convert traffic into committed revenue.
        </p>
      </div>

      {/* ── Services List ── */}
      <div className="border-t border-[#272727]">
        {SOLUTIONS.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className="border-b border-[#272727] transition-colors duration-300"
            >
              {/* ── Fixed Header Row (Title & Number NEVER shift position) ── */}
              <button
                onClick={() => toggleSolution(idx)}
                className="w-full text-left py-7 sm:py-8 lg:py-9 flex items-center justify-between gap-6 cursor-pointer group focus:outline-none hover:bg-white/[0.015] transition-colors"
                aria-expanded={isOpen}
              >
                <span className="font-bricolage text-xl sm:text-2xl lg:text-[30px] text-white font-normal tracking-tight group-hover:text-neutral-200 transition-colors">
                  {item.title}
                </span>

                <span className="font-aboreto text-lg sm:text-xl lg:text-[20px] text-[#c0c0c0] tracking-[-0.48px] leading-[20px] group-hover:text-white transition-colors">
                  {item.number}
                </span>
              </button>

              {/* ── Open State (Smooth Grid Expand Below Fixed Title) ── */}
              <div
                className={`accordion-grid ${
                  isOpen ? "accordion-grid-open" : "accordion-grid-closed"
                }`}
              >
                <div className="accordion-inner">
                  <div className="pb-8 sm:pb-10 lg:pb-12 pt-1 sm:pt-2">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                      {/* Left Column: Description paragraph */}
                      <div className="lg:col-span-6 flex flex-col justify-center">
                        <p className="font-manrope text-sm sm:text-base text-neutral-400 leading-relaxed max-w-lg">
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
