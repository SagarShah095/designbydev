"use client";

import { useState } from "react";
import Image from "next/image";
import { Compass, Layers, Code2, Rocket } from "lucide-react";

const PROCESS_STEPS = [
  {
    title: "Discovery & Strategy",
    desc: "We map your exact business goals, target audience, and current revenue bottlenecks.",
    icon: Compass,
  },
  {
    title: "Architecture & Design",
    desc: "We engineer frictionless user journeys, conversion wireframes, and luxury visual UI design systems.",
    icon: Layers,
  },
  {
    title: "Development & SEO",
    desc: "Clean Next.js engineering with rigorous Core Web Vitals speed tuning and semantic Google indexing.",
    icon: Code2,
  },
  {
    title: "Launch & Handover",
    desc: "Zero-downtime deployment, complete team video walkthroughs, and 30 days of dedicated hypercare.",
    icon: Rocket,
  },
];

export default function ProcessSection({
  activeProcessStep: controlledStep,
  setActiveProcessStep: controlledSetStep,
}) {
  const [localStep, setLocalStep] = useState(0);
  const activeStep = controlledStep !== undefined ? controlledStep : localStep;
  const setActiveStep = controlledSetStep || setLocalStep;

  return (
    <section
      id="process"
      className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#272727]/60 scroll-mt-24"
    >
      {/* ── Section Header ── */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-14 sm:mb-20">
        <div>
          {/* Badge: Dot + "How We Work" */}
          <div className="flex items-center gap-2.5 mb-4 sm:mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff4d28] shadow-[0_0_12px_#ff4d28]" />
            <span className="font-manrope text-base text-white font-normal">
              How We Work
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-bricolage text-3xl sm:text-4xl lg:text-[44px] tracking-tight leading-[1.12]">
            <span className="text-white font-normal">A Simple Process </span>
            <span className="text-neutral-400 font-normal">Designed </span>
            <br className="hidden sm:block" />
            <span className="text-white font-normal">
              around collaboration.
            </span>
          </h2>
        </div>

        {/* Subtitle */}
        <p className="font-manrope text-base sm:text-lg text-[#c0c0c0] leading-relaxed max-w-md lg:pb-1">
          Four focused phases that take a project from raw idea to a polished
          launch — without losing momentum along the way.
        </p>
      </div>

      {/* ── Main Container: Two Columns Managed With Flex ── */}
      <div className="rounded-2xl sm:rounded-3xl bg-[#0a0a0c] overflow-hidden shadow-2xl">
        <div className="flex flex-col lg:flex-row items-stretch w-full">
          {/* Left Column: 4 Process Steps (Flex 5/12 on desktop) */}
          <div className="w-full lg:w-5/12 flex flex-col justify-between divide-y divide-white/10 border-b lg:border-b-0 lg:border-r border-white/10 shrink-0">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              const Icon = step.icon;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer transition-all duration-300 p-6 sm:p-7 lg:p-8 flex-1 flex flex-col justify-center ${
                    isActive ? "bg-white/[0.03]" : "hover:bg-white/[0.015]"
                  }`}
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* Icon Box */}
                    <div
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isActive
                          ? "bg-white text-black shadow-lg shadow-white/15"
                          : "text-neutral-400 group-hover:text-white"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 pt-1">
                      <h3
                        className={`font-bricolage text-xl sm:text-2xl transition-colors duration-200 ${
                          isActive
                            ? "text-white font-medium"
                            : "text-neutral-300 hover:text-white font-normal"
                        }`}
                      >
                        {step.title}
                      </h3>

                      {/* Animated expandable description without grid */}
                      <div
                        className={`overflow-hidden transition-all duration-400 ease-out ${
                          isActive
                            ? "max-h-48 opacity-100 mt-2.5"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="font-manrope text-sm text-neutral-400 leading-relaxed max-w-sm">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: /Container.png (Flex 7/12 on desktop) */}
          <div className="w-full lg:w-7/12 flex-1 relative min-h-[360px] sm:min-h-[440px] lg:min-h-full overflow-hidden bg-[#070709] group">
            <Image
              src="/Container.png"
              alt="Miro Agile Strategic Architecture Board"
              fill
              className="object-cover object-center group-hover:scale-[1.015] transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 58vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
