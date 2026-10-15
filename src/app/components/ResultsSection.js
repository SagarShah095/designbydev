"use client";

import Image from "next/image";

export default function ResultsSection() {
  return (
    <section
      id="results"
      className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#272727]/60 scroll-mt-24"
    >
      {/* ── Section Header ── */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-14 sm:mb-20">
        <div>
          {/* Badge: Dot + "The Experts" */}
          <div className="flex items-center gap-2.5 mb-4 sm:mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff4d28] shadow-[0_0_12px_#ff4d28]" />
            <span className="font-manrope text-base text-white font-normal">
              The Experts
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-bricolage text-3xl sm:text-4xl lg:text-[44px] tracking-tight leading-[1.12]">
            <span className="text-white font-normal">A Team Built Entirely for </span>
            <span className="text-neutral-400 font-normal">Your</span>
            <br className="hidden sm:block" />
            <span className="text-neutral-400 font-normal">Growth</span>
          </h2>
        </div>

        {/* Subtitle */}
        <p className="font-manrope text-base sm:text-lg text-[#c0c0c0] leading-relaxed max-w-md lg:pb-1">
          We blend deep consumer psychology with premium design to ensure every
          layout, button, and headline is strategically positioned to turn casual
          traffic into paying clients.
        </p>
      </div>

      {/* ── 3 Value Cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {/* Card 1: Not Just Designers. Business Partners. */}
        <div className="rounded-3xl p-8 sm:p-10 bg-[#0a0a0c] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] shadow-xl">
          <div>
            <h3 className="font-bricolage text-2xl sm:text-[26px] lg:text-[28px] font-normal text-white leading-snug tracking-tight">
              Not Just Designers. Business Partners.
            </h3>
          </div>
          <div>
            <p className="font-manrope text-sm text-neutral-400 leading-relaxed">
              We are digital strategists, not just designers. We partner directly
              with founders to eliminate bottlenecks and build platforms that
              drive growth.
            </p>
          </div>
        </div>

        {/* Card 2: ROI Is Our Only Metric (Centered with /Roi.png background) */}
        <div className="relative rounded-3xl p-8 sm:p-10 overflow-hidden border border-white/15 shadow-2xl shadow-[#ff4d28]/10 flex flex-col justify-between min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] group transition-all duration-500">
          {/* Background image: /Roi.png */}
          <Image
            src="/Roi.png"
            alt="ROI Metric Textured Backdrop"
            fill
            className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            priority
          />

          {/* Ambient subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Top: ROI Headline */}
          <div className="relative z-10">
            <div className="flex items-baseline gap-2.5 flex-wrap">
              <span className="font-bricolage text-4xl sm:text-5xl font-normal tracking-tight text-white">
                ROI
              </span>
              <span className="font-manrope text-sm sm:text-base text-white/90 font-normal">
                Is Our Only Metric.
              </span>
            </div>
          </div>

          {/* Bottom: Description */}
          <div className="relative z-10">
            <p className="font-manrope text-sm text-white/90 leading-relaxed">
              We measure success entirely by your financial growth. We ignore
              vanity metrics to focus strictly on increasing your inquiries and
              revenue.
            </p>
          </div>
        </div>

        {/* Card 3: Collective Intelligence. */}
        <div className="rounded-3xl p-8 sm:p-10 bg-[#0a0a0c] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] shadow-xl">
          <div>
            <h3 className="font-bricolage text-2xl sm:text-[26px] lg:text-[28px] font-normal text-white leading-snug tracking-tight">
              Collective Intelligence.
            </h3>
          </div>
          <div>
            <p className="font-manrope text-sm text-neutral-400 leading-relaxed">
              No junior account managers. You work directly with a lean, senior
              collective of digital architects for expert execution from day one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
