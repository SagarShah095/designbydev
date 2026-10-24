"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const LOGOS = [
  { src: "/logos/logo1.png", alt: "LXA Group" },
  { src: "/logos/frame-146.png", alt: "Monte" },
  { src: "/logos/frame-146-1.png", alt: "Aurelune Café" },
  { src: "/logos/Link.png", alt: "Urbanexa" },
  { src: "/logos/mask-group.png", alt: "Brand" },
  { src: "/logos/VEYLO.png", alt: "Veylo" },
];

// Duplicate 4x to ensure uninterrupted, smooth infinite loop on all screen widths
const LOGOS_REPEATED = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

export default function HeroSection({ scrollToSection }) {
  return (
    <section className="relative p-[10px]">
      <div className="relative">
        {/* ── Background Image ── */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/website-bg.png"
            alt="Deep warm crimson fluted curtain texture"
            fill
            priority
            className="object-cover rounded-[12px] object-center h-screen"
            style={{ opacity: 0.92 }}
          />
          {/* Bottom fade */}
          <div
            className="absolute inset-0"
            style={{
              background: "",
            }}
          />
          {/* Left vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(5,4,4,0.55) 0%, transparent 60%)",
            }}
          />
        </div>

        {/* ── Hero Content — pinned to bottom-left ── */}
        <div className="relative z-10 flex flex-col justify-end min-h-screen h-[100svh] px-7 sm:px-12 md:px-[80px] pb-10 sm:pb-14">
          <div className="w-full">
            <h1 className="text-[64px] font-[500] text-white tracking-tight leading-[1.06] mb-4">
              Websites Designed to Grow
              <br className="hidden sm:block" /> Your Business.
            </h1>
            <p className="text-[20px] text-neutral-300/85 font-normal leading-relaxed max-w-2xl mb-8">
              Stop losing sales to a slow or confusing website. We design fast,
              search-optimized digital platforms that turn visitors into paying
              clients.
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className="group inline-flex py-[6px] items-center bg-white text-[#111] font-semibold text-sm rounded-full hover:shadow-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span className="text-[16px]  ml-[20px] mr-[10px]">
                Book a Free Strategy Call
              </span>
              <span className="w-[38px] h-[38px] mr-[6px]  rounded-full bg-gradient-to-br from-[#ff4d28] to-[#e63010] flex items-center justify-center group-hover:translate-x-0.5 transition-transform shadow-md shadow-[#ff4d28]/40">
                <img src="/button-1.svg" alt="" className="h-[24px] w-[24px]" />
              </span>
            </button>
          </div>
        </div>

        {/* ── Infinite Logo Ticker (bottom of hero) ── */}
        <div className="relative z-10 py-4">
          <div className="flex items-center gap-4 px-7 sm:px-12 md:px-14 mb-3">
            <div className="h-px flex-1 bg-white/[0.06]" />
          </div>
          <div className="marquee-wrapper">
            <div
              className="marquee-track"
              style={{
                display: "flex",
                width: "max-content",
                animation: "marquee 26s linear infinite",
                WebkitAnimation: "marquee 26s linear infinite",
              }}
            >
              {LOGOS_REPEATED.map((logo, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center px-10 sm:px-14 shrink-0"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="eager"
                    decoding="async"
                    draggable={false}
                    className="h-5 sm:h-6 w-auto max-w-none object-contain opacity-45 hover:opacity-90 transition-all duration-300 hover:scale-105"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Guaranteed cross-browser marquee animation styles */}
        <style jsx global>{`
          @keyframes marquee {
            0% {
              transform: translate3d(0px, 0px, 0px);
              -webkit-transform: translate3d(0px, 0px, 0px);
            }
            100% {
              transform: translate3d(-50%, 0px, 0px);
              -webkit-transform: translate3d(-50%, 0px, 0px);
            }
          }
          @-webkit-keyframes marquee {
            0% {
              -webkit-transform: translate3d(0px, 0px, 0px);
              transform: translate3d(0px, 0px, 0px);
            }
            100% {
              -webkit-transform: translate3d(-50%, 0px, 0px);
              transform: translate3d(-50%, 0px, 0px);
            }
          }
        `}</style>
      </div>
    </section>
  );
}
