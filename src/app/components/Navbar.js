"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ scrollToSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (id) => {
    setMobileMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-12 pt-4 pb-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none select-none"
        >
          <div className="w-9 h-9 sm:w-9 sm:h-9 flex-shrink-0 flex items-center justify-center transition-transform group-hover:scale-105">
            <img
              src="/logo.svg"
              alt="DesignbyDev"
              className="w-full h-full object-contain"
            />
          </div>
          <div
            className="flex items-baseline tracking-tight font-arimo"
            style={{ fontFamily: "'Arimo', sans-serif" }}
          >
            <span className="text-2xl sm:text-[26px] font-semibold text-white leading-none">
              Design
            </span>
            <span className="text-[15px] sm:text-[16px] font-normal text-white/95 leading-none ml-0.5">
              byDev
            </span>
          </div>
        </a>

        {/* Center Floating Glass Pill Navbar */}
        <nav
          className="hidden md:flex items-center gap-1 bg-[#101013]/30 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 shadow-2xl shadow-black/80 font-manrope"
          style={{
            fontFamily: '"Manrope", sans-serif',
            fontOpticalSizing: "auto",
            fontStyle: "normal",
          }}
        >
          {[
            { label: "Problem", id: "problem" },
            { label: "Services", id: "services" },
            { label: "Process", id: "process" },
            { label: "Work", id: "work" },
            { label: "Results", id: "results" },
            { label: "FAQ", id: "faq" },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className="text-xs font-medium text-neutral-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors font-manrope"
              style={{
                fontFamily: '"Manrope", sans-serif',
                fontOpticalSizing: "auto",
                fontStyle: "normal",
              }}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Right Action: Video Camera Circular Button */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            onClick={() => handleNav("contact")}
            aria-label="Book a Call"
            title="Book a Call"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex bg-[#101013]/30 backdrop-blur-sm border items-center justify-center hover:bg-[#101013]/50 active:scale-95 border-white/15 shadow-lg shadow-black/40 hover:scale-105 transition-all duration-200 group cursor-pointer"
          >
            <img
              src="/Frame.svg"
              alt="Book a Call"
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain group-hover:scale-110 transition-transform duration-200"
            />
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-[#141417] border border-white/10 text-neutral-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div
          className="md:hidden mt-3 bg-[#0d0d10] border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 duration-200 font-manrope"
          style={{
            fontFamily: '"Manrope", sans-serif',
            fontOpticalSizing: "auto",
            fontStyle: "normal",
          }}
        >
          {[
            { label: "The Problem", id: "problem" },
            { label: "Services", id: "services" },
            { label: "Selected Work", id: "work" },
            { label: "Process", id: "process" },
            { label: "FAQ", id: "faq" },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className="text-left text-sm font-[400] text-neutral-300 hover:text-white py-2 px-3 rounded-lg hover:bg-white/5 font-manrope"
              style={{
                fontFamily: '"Manrope", sans-serif',
                fontOpticalSizing: "auto",
                fontStyle: "normal",
              }}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => handleNav("contact")}
            className="mt-2 w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#ff4d28] to-[#ff2a00] text-white text-sm font-semibold py-3 rounded-xl shadow-lg shadow-[#ff4d28]/30 transition-all"
          >
            <img
              src="/Frame.svg"
              alt=""
              className="w-4 h-4 object-contain brightness-200"
            />
            <span>Book a Call</span>
          </button>
        </div>
      )}
    </header>
  );
}
