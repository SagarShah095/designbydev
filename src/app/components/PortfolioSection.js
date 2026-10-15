"use client";

import Image from "next/image";

const PROJECTS = [
  {
    title: "Elite Chuffer",
    date: "Mar 30, 2025",
    category: "Web Design",
    image: "/work-elite-chuffer.jpg",
    initial: "v",
  },
  {
    title: "Aurelune cafe",
    date: "Mar 30, 2025",
    category: "Web Design",
    image: "/work-aurelune-cafe.jpg",
    initial: "v",
  },
  {
    title: "VEYLO",
    date: "Mar 30, 2025",
    category: "Web Design",
    image: "/work-phone-hand.jpg",
    initial: "v",
  },
  {
    title: "Urbanexa",
    date: "Mar 30, 2025",
    category: "Web Design",
    image: "/work-laptop-studio.jpg",
    initial: "v",
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="work"
      className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#272727]/60 scroll-mt-24"
    >
      {/* ── Section Header ── */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-14 sm:mb-20">
        <div>
          {/* Badge: Dot + "Our work" */}
          <div className="flex items-center gap-2.5 mb-4 sm:mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff4d28] shadow-[0_0_12px_#ff4d28]" />
            <span className="font-manrope text-base text-white font-normal">
              Our work
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-bricolage text-3xl sm:text-4xl lg:text-[44px] tracking-tight leading-[1.12]">
            <span className="text-white font-normal">See How We Build </span>
            <span className="text-neutral-400 font-normal">Revenue</span>
            <br className="hidden sm:block" />
            <span className="text-neutral-400 font-normal">Engines</span>
          </h2>
        </div>

        {/* Subtitle */}
        <p className="font-manrope text-base sm:text-lg text-[#c0c0c0] leading-relaxed max-w-md lg:pb-1">
          Step inside our exact design methodology. These digital environments
          showcase our strict standards for pairing high-end, minimalist UI/UX
          design with seamless, fast-loading performance.
        </p>
      </div>

      {/* ── 2x2 Project Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {PROJECTS.map((project, idx) => (
          <div key={idx} className="group cursor-pointer">
            {/* Card Image Container (Clean dark container, no orange design) */}
            <div className="relative aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0d0d10] border border-white/10 shadow-xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={idx < 2}
              />
            </div>

            {/* Bottom Info Row */}
            <div className="mt-4 sm:mt-5 flex items-center justify-between gap-4 px-1">
              {/* Left: Avatar + Title & Date */}
              <div className="flex items-center gap-3">
                {/* Circle Avatar */}
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#b87d4b] text-black font-bold text-xs flex items-center justify-center shrink-0 shadow-md">
                  {project.initial}
                </div>

                {/* Title & Date */}
                <div>
                  <h3 className="font-bricolage text-base sm:text-lg text-white font-medium leading-tight group-hover:text-neutral-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-manrope text-xs text-neutral-400 mt-0.5">
                    {project.date}
                  </p>
                </div>
              </div>

              {/* Right: Pill Badge */}
              <span className="px-4 py-1.5 rounded-full bg-[#101014] border border-white/10 text-xs text-neutral-300 font-medium group-hover:border-white/20 transition-colors">
                {project.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
