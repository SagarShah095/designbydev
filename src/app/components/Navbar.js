"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

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
        <a href="#" className="flex items-center gap-2.5 group focus:outline-none">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#ff4d28] via-[#e63b15] to-[#991b00] flex items-center justify-center p-0.5 shadow-lg shadow-[#ff4d28]/25 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0d0d0f] rounded-[10px] flex items-center justify-center">
              <span className="text-white font-black text-sm tracking-tighter">D</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-wider text-white uppercase">DOMINION</span>
            <span className="text-[10px] text-neutral-400 font-medium tracking-tight -mt-1">STUDIO</span>
          </div>
        </a>

        {/* Center Floating Glass Pill Navbar */}
        <nav className="hidden md:flex items-center gap-1 bg-[#101013]/30 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 shadow-2xl shadow-black/80">
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
              className="text-xs font-medium text-neutral-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors"
            >
              {label}
            </button>
          ))}

          <div className="h-4 w-px bg-white/10 mx-1" />

          <div className="flex items-center gap-1.5 px-3 py-1 bg-white/[0.04] rounded-full border border-white/5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-semibold text-neutral-300 tracking-tight">Available Q4</span>
          </div>
        </nav>

        {/* Right Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNav("contact")}
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-[#ff4d28] to-[#ff2a00] hover:from-[#ff5e3b] hover:to-[#ff3b14] text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-lg shadow-[#ff4d28]/25 hover:shadow-[#ff4d28]/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Book a Call</span>
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowRight className="w-3 h-3 text-white" />
            </div>
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-[#141417] border border-white/10 text-neutral-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 bg-[#0d0d10] border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 duration-200">
          {[
            { label: "The Problem", id: "problem" },
            { label: "Services", id: "services" },
            { label: "Process", id: "process" },
            { label: "Selected Work", id: "work" },
            { label: "Results & ROI", id: "results" },
            { label: "FAQ", id: "faq" },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className="text-left text-sm font-medium text-neutral-300 hover:text-white py-2 px-3 rounded-lg hover:bg-white/5"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => handleNav("contact")}
            className="mt-2 w-full flex items-center justify-center gap-2 bg-[#ff4d28] text-white text-sm font-semibold py-3 rounded-xl shadow-lg shadow-[#ff4d28]/30"
          >
            <span>Tell Us About Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
