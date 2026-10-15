"use client";

import Image from "next/image";

export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
        {/* ── Left Column: Large Image ── */}
        <div className="relative rounded-3xl overflow-hidden bg-[#0a0a0a] aspect-[4/3] lg:aspect-auto lg:min-h-[480px] group shadow-2xl border border-white/[0.06]">
          <Image
            src="/problem-ribbon.png"
            alt="Glowing orange 3D wave form on dark background"
            fill
            className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          />
        </div>

        {/* ── Right Column: Badge · Heading · Body ── */}
        <div className="flex flex-col justify-between py-2 lg:py-4">
          {/* Top: Badge + Heading */}
          <div>
            <div className="flex items-center gap-2 mb-6 sm:mb-8">
              <span className="w-2 h-2 rounded-full bg-[#ff4d28]" />
              <span className="text-xs font-semibold text-[#ff4d28] uppercase tracking-wider">
                The Hidden Cost
              </span>
            </div>
            <h2 className="text-[clamp(2rem,4.5vw,3.6rem)] font-bold tracking-tight leading-[1.08] text-white">
              <span className="font-bold">Is Your Website </span>
              <span className="font-bold text-neutral-200">
                Actively Losing You Money?
              </span>
            </h2>
          </div>

          {/* Bottom: Body copy */}
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mt-10 lg:mt-0 max-w-md">
            If your site is hard to use on a phone, takes too long to load, or
            cannot be found on Google, you are handing your customers directly
            to your competitors. We fix the leaks in your digital setup so your
            website actually works for your business.
          </p>
        </div>
      </div>
    </section>
  );
}
