"use client";

export default function Footer({ scrollToSection: controlledScroll }) {
  const handleScroll = (id) => {
    if (controlledScroll) {
      controlledScroll(id);
      return;
    }
    if (typeof document !== "undefined") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="w-full px-4 sm:px-6 lg:px-8 pt-8 pb-14 sm:pb-20 max-w-7xl mx-auto">
      {/* ── White Footer Container ── */}
      <div className="bg-white text-black rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column: Brand, Tagline, Socials */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Brand Logo */}
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center p-1">
                  <img
                    src="/logo.svg"
                    alt="DesignbyDev"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex items-baseline tracking-tight">
                  <span className="text-xl font-bold text-black leading-none">
                    Design
                  </span>
                  <span className="text-[13px] font-normal text-neutral-700 leading-none ml-0.5">
                    byDev
                  </span>
                </div>
              </div>

              {/* Tagline */}
              <p className="font-manrope text-sm text-neutral-600 max-w-xs leading-relaxed">
                Designing thoughtful digital experiences through strategy,
                design, and motion.
              </p>
            </div>

            {/* Connect on social */}
            <div className="mt-8 sm:mt-12">
              <span className="font-manrope text-sm font-semibold text-black block mb-3">
                Connect on social
              </span>
              <div className="flex items-center gap-2.5">
                {/* Coral Starburst */}
                <button
                  type="button"
                  className="w-10 h-10 rounded-2xl bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200/60 flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Social 1"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                  </svg>
                </button>

                {/* Lavender Sparkle */}
                <button
                  type="button"
                  className="w-10 h-10 rounded-2xl bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200/60 flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Social 2"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="#a855f7"
                    className="text-purple-500"
                  >
                    <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z" />
                  </svg>
                </button>

                {/* Circle Slash / Threads */}
                <button
                  type="button"
                  className="w-10 h-10 rounded-2xl bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200/60 flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Social 3"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#333"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                  </svg>
                </button>

                {/* Spiral Flower */}
                <button
                  type="button"
                  className="w-10 h-10 rounded-2xl bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200/60 flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Social 4"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#333"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 16a6 6 0 1 1 6-6 6 6 0 0 1-6 6z" />
                  </svg>
                </button>

                {/* Cyan Snowflake / Asterisk */}
                <button
                  type="button"
                  className="w-10 h-10 rounded-2xl bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200/60 flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Social 5"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#06b6d4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="2" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                    <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Navigation Columns */}
          <div className="md:col-span-6 lg:col-span-7 flex flex-col sm:flex-row justify-start sm:justify-end gap-12 sm:gap-16 lg:gap-24">
            {/* Quick link */}
            <div>
              <h4 className="font-bricolage text-base font-semibold text-black mb-4">
                Quick link
              </h4>
              <ul className="space-y-3 font-manrope text-sm text-neutral-600">
                <li>
                  <button
                    onClick={() => handleScroll("problem")}
                    className="hover:text-black transition-colors cursor-pointer text-left"
                  >
                    Problem
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScroll("services")}
                    className="hover:text-black transition-colors cursor-pointer text-left"
                  >
                    Service
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScroll("work")}
                    className="hover:text-black transition-colors cursor-pointer text-left"
                  >
                    Work
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScroll("process")}
                    className="hover:text-black transition-colors cursor-pointer text-left"
                  >
                    Process
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScroll("faq")}
                    className="hover:text-black transition-colors cursor-pointer text-left"
                  >
                    Faq&apos;s
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bricolage text-base font-semibold text-black mb-4">
                Services
              </h4>
              <ul className="space-y-3 font-manrope text-sm text-neutral-600">
                <li>
                  <button
                    onClick={() => handleScroll("services")}
                    className="hover:text-black transition-colors cursor-pointer text-left"
                  >
                    Strategic Website Design
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScroll("services")}
                    className="hover:text-black transition-colors cursor-pointer text-left"
                  >
                    Conversion-Focused Landing Pages
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScroll("services")}
                    className="hover:text-black transition-colors cursor-pointer text-left"
                  >
                    Brand Identity & Positioning
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScroll("services")}
                    className="hover:text-black transition-colors cursor-pointer text-left"
                  >
                    Website Showcase Videos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScroll("services")}
                    className="hover:text-black transition-colors cursor-pointer text-left"
                  >
                    UX Strategy & Audits
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── Bottom Divider & Legal Row ── */}
        <div className="border-t border-neutral-200 mt-12 sm:mt-16 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-manrope text-xs sm:text-sm text-neutral-500">
          <p>2026 Designbydev. All rights reserved</p>

          <div className="flex items-center gap-6 sm:gap-8">
            <a href="#" className="hover:text-black transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Privacy policy
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Membership Agreement
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
