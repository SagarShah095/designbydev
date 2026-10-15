"use client";

import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";

const FAQS = [
  {
    q: "How long does a typical website project take?",
    a: "Most bespoke websites take between 2 to 4 weeks from kickoff to launch. More complex web applications or comprehensive design systems typically take 4 to 6 weeks. We work in rapid, disciplined sprints so you see tangible progress every few days.",
  },
  {
    q: "Do you handle copywriting and asset creation?",
    a: "Yes! We provide full copywriting assistance, messaging refinement, custom 3D asset generation, and graphic creation so you never have to worry about missing content or writer’s block.",
  },
  {
    q: "What platforms and technologies do you build with?",
    a: "We specialize in Next.js, React, Tailwind CSS, Framer, and Webflow. We pick the technology that best matches your speed requirements, internal team workflows, and long-term maintenance preferences.",
  },
  {
    q: "What happens after the website goes live?",
    a: "We provide 30 days of post-launch hypercare support, full Loom training walkthroughs for your team, and optional monthly retainer partnerships for ongoing conversion optimization experiments and feature expansions.",
  },
  {
    q: "How does payment and billing structure work?",
    a: "Our standard terms are 50% deposit upon kickoff and 50% upon final sign-off prior to launch. For larger multi-phase projects, we can also split into milestone-based schedules.",
  },
  {
    q: "Can you redesign or improve my existing website?",
    a: "Absolutely. Over half our clients come to us with an existing website that isn’t converting or looks outdated. We perform a complete conversion audit and rebuild it for top-tier visual authority and speed.",
  },
];

export default function FaqSection({ scrollToSection }) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section
      id="faq"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-white/5 scroll-mt-24"
    >
      {/* Centered Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#ff4d28]" />
          <span className="text-xs font-semibold text-[#ff4d28] uppercase tracking-wider">
            Got Questions?
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto">
          Everything you need to know about working with us, timelines, and deliverables.
        </p>
      </div>

      {/* Accordion FAQ List */}
      <div className="space-y-3">
        {FAQS.map((faq, idx) => {
          const isOpen = openFaq === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "bg-[#101014] border-white/15"
                  : "bg-[#08080a] border-white/5 hover:border-white/10"
              }`}
            >
              <button
                onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className="text-sm sm:text-base font-semibold text-white">
                  {faq.q}
                </span>
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all shrink-0 ${
                    isOpen
                      ? "border-[#ff4d28] bg-[#ff4d28]/10 text-[#ff4d28]"
                      : "border-white/10 text-neutral-400"
                  }`}
                >
                  {isOpen ? (
                    <Minus className="w-3.5 h-3.5" />
                  ) : (
                    <Plus className="w-3.5 h-3.5" />
                  )}
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-400 leading-relaxed border-t border-white/5">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Below FAQ CTA Button */}
      <div className="text-center mt-12">
        <button
          onClick={() => scrollToSection && scrollToSection("contact")}
          className="group inline-flex items-center gap-3 bg-[#121216] hover:bg-[#1a1a22] border border-white/10 hover:border-white/20 text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full transition-all shadow-xl cursor-pointer"
        >
          <span>Have more questions? Let’s talk</span>
          <div className="w-6 h-6 rounded-full bg-[#ff4d28] flex items-center justify-center group-hover:translate-x-1 transition-transform">
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </div>
        </button>
      </div>
    </section>
  );
}
