"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ChevronDown,
  Plus,
  Minus,
  CheckCircle2,
  Sparkles,
  Zap,
  TrendingUp,
  Clock,
  ShieldCheck,
  Globe,
  Layers,
  Palette,
  Code2,
  Search,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

function TwitterIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="16"
      height="16"
      {...props}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="16"
      height="16"
      {...props}
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88M5.07 18.5h2.79v-8.37H5.07v8.37z" />
    </svg>
  );
}

function GithubIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="16"
      height="16"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function DribbbleIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="16"
      height="16"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </svg>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: "Full Website Design",
    budget: "$5,000 - $10,000",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Please enter your name.";
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters.";
    }
    if (!formData.email.trim()) {
      errors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      errors.message = "Please tell us about your project.";
    } else if (formData.message.trim().length < 20) {
      errors.message = "Please provide at least 20 characters of detail.";
    }
    return errors;
  };

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error on change
    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const services = [
    {
      title: "Full Page Website Design",
      desc: "Custom tailored modern website designs crafted to captivate your audience, convey your brand value proposition, and convert visitors into paying clients.",
      tags: [
        "Bespoke UI/UX",
        "Component Library",
        "Interactive Prototypes",
        "Responsive Layouts",
      ],
      icon: Layers,
    },
    {
      title: "Conversion Rate Landing Pages",
      desc: "High-impact, single-page sales funnels engineered specifically to maximize ad spend, sign-ups, and product launches using proven conversion psychology.",
      tags: [
        "A/B Test Ready",
        "Fast Funnels",
        "Compelling Copy Guidance",
        "Pixel Optimization",
      ],
      icon: Zap,
    },
    {
      title: "Brand Identity & Design System",
      desc: "End-to-end visual identities including typography scales, custom iconography, cohesive color palettes, and tokenized design systems for multi-platform scale.",
      tags: [
        "Logo & Monograms",
        "Typography Systems",
        "Design Tokens",
        "Brand Guidelines",
      ],
      icon: Palette,
    },
    {
      title: "Webflow & Modern Web Development",
      desc: "Production-ready, blazingly fast Next.js, Framer, and Webflow builds engineered for lightning speed, clean semantics, and effortless CMS editing.",
      tags: [
        "Next.js & React",
        "Framer & Webflow",
        "Clean Semantics",
        "Instant CMS",
      ],
      icon: Code2,
    },
    {
      title: "SEO Strategy & Optimization",
      desc: "Technical Core Web Vitals optimization, semantic structured data, speed tuning, and discoverability architecture that propels you to page one.",
      tags: [
        "Technical Audit",
        "Core Web Vitals",
        "Schema Markup",
        "On-Page SEO",
      ],
      icon: Search,
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      subtitle: "Market audit & conversion roadmap",
      desc: "We analyze your business model, target audience personas, competitor landscape, and growth bottlenecks to engineer a data-backed design strategy.",
    },
    {
      number: "02",
      title: "Wireframing & UX Architecture",
      subtitle: "Frictionless conversion journeys",
      desc: "We structure high-converting page flows, layout hierarchies, and information architecture before touching visual styling to guarantee high retention.",
    },
    {
      number: "03",
      title: "Visual UI Design & Motion",
      subtitle: "High-fidelity bespoke aesthetics",
      desc: "Transforming blueprints into stunning, luxury dark interfaces with custom micro-animations, typography, and interactive responsive prototypes.",
    },
    {
      number: "04",
      title: "Build & Seamless Launch",
      subtitle: "Pixel perfection & speed tuning",
      desc: "Developing on clean modern frameworks, rigorous QA across 25+ viewports, speed optimization, and launch support with zero downtime.",
    },
  ];

  const portfolioProjects = [
    {
      title: "Architectural Form",
      category: "Minimalist Architecture & Interior",
      image: "/project-1.jpg",
      stat: "+185% Inquiries",
      year: "2024",
      scope: "Full Website & UX Strategy",
    },
    {
      title: "Volt Audio Experience",
      category: "Pro Audio & Immersive Stage Brand",
      image: "/project-2.jpg",
      stat: "3.2x Checkout Lift",
      year: "2024",
      scope: "E-Commerce & 3D Web Experience",
    },
    {
      title: "Plura Workspace App",
      category: "Next-Gen Productivity Suite",
      image: "/project-3.jpg",
      stat: "4.9★ App Store Rating",
      year: "2024",
      scope: "Product Website & App UI",
    },
    {
      title: "Monocle Alpine Retreats",
      category: "Ultra-Luxury Hospitality Platform",
      image: "/project-4.jpg",
      stat: "+240% Direct Bookings",
      year: "2024",
      scope: "Bespoke Booking Engine & UI",
    },
  ];

  const faqs = [
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      // Scroll to the first error
      const firstErrorField = Object.keys(errors)[0];
      const el = document.getElementById(`field-${firstErrorField}`);
      if (el) el.focus();
      return;
    }
    setIsSubmitting(true);
    // Simulate async submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-[#f0f0f0] font-sans antialiased selection:bg-[#ff4d28] selection:text-white">
      {/* =========================================================================
          TOP FLOATING NAVIGATION BAR
         ========================================================================= */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-12 pt-4 pb-3 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#ff4d28] via-[#e63b15] to-[#991b00] flex items-center justify-center p-0.5 shadow-lg shadow-[#ff4d28]/25 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0d0d0f] rounded-[10px] flex items-center justify-center">
                <span className="text-white font-black text-sm tracking-tighter">
                  D
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-wider text-white uppercase">
                DOMINION
              </span>
              <span className="text-[10px] text-neutral-400 font-medium tracking-tight -mt-1">
                STUDIO
              </span>
            </div>
          </a>

          {/* Center Floating Glass Pill Navbar */}
          <nav className="hidden md:flex items-center gap-1 bg-[#101013]/80 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2 shadow-2xl shadow-black/80">
            <button
              onClick={() => scrollToSection("problem")}
              className="text-xs font-medium text-neutral-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors"
            >
              Problem
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-xs font-medium text-neutral-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-xs font-medium text-neutral-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className="text-xs font-medium text-neutral-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("results")}
              className="text-xs font-medium text-neutral-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors"
            >
              Results
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-xs font-medium text-neutral-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors"
            >
              FAQ
            </button>

            <div className="h-4 w-px bg-white/10 mx-1" />

            <div className="flex items-center gap-1.5 px-3 py-1 bg-white/[0.04] rounded-full border border-white/5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-semibold text-neutral-300 tracking-tight">
                Available Q4
              </span>
            </div>
          </nav>

          {/* Right Action Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-[#ff4d28] to-[#ff2a00] hover:from-[#ff5e3b] hover:to-[#ff3b14] text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-lg shadow-[#ff4d28]/25 hover:shadow-[#ff4d28]/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Book a Call</span>
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowRight className="w-3 h-3 text-white" />
              </div>
            </button>

            {/* Mobile Hamburger Button */}
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
          <div className="md:hidden mt-3 bg-[#0d0d10] border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 duration-200">
            <button
              onClick={() => scrollToSection("problem")}
              className="text-left text-sm font-medium text-neutral-300 hover:text-white py-2 px-3 rounded-lg hover:bg-white/5"
            >
              The Problem
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-left text-sm font-medium text-neutral-300 hover:text-white py-2 px-3 rounded-lg hover:bg-white/5"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-left text-sm font-medium text-neutral-300 hover:text-white py-2 px-3 rounded-lg hover:bg-white/5"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className="text-left text-sm font-medium text-neutral-300 hover:text-white py-2 px-3 rounded-lg hover:bg-white/5"
            >
              Selected Work
            </button>
            <button
              onClick={() => scrollToSection("results")}
              className="text-left text-sm font-medium text-neutral-300 hover:text-white py-2 px-3 rounded-lg hover:bg-white/5"
            >
              Results & ROI
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-left text-sm font-medium text-neutral-300 hover:text-white py-2 px-3 rounded-lg hover:bg-white/5"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="mt-2 w-full flex items-center justify-center gap-2 bg-[#ff4d28] text-white text-sm font-semibold py-3 rounded-xl shadow-lg shadow-[#ff4d28]/30"
            >
              <span>Tell Us About Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </header>

      {/* =========================================================================
          HERO SECTION
          Full-bleed hero card with fluted red bg, bottom-left content, logo bar
         ========================================================================= */}
      <section className="relative">
        {/* Hero Card Frame */}
        <div className="relative bg-[#0a0a0c] min-h-screen h-[100svh]">
          {/* ── Background Image ── */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-bg.png"
              alt="Deep warm crimson fluted curtain texture"
              fill
              priority
              className="object-cover object-center h-screen"
              style={{ opacity: 0.92 }}
            />
            {/* Bottom fade so text is always legible */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(5,4,4,0.88) 0%, rgba(5,4,4,0.35) 45%, rgba(5,4,4,0.10) 100%)",
              }}
            />
            {/* Subtle left vignette */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(5,4,4,0.55) 0%, transparent 60%)",
              }}
            />
          </div>

          {/* ── Hero Content — pinned to bottom-left ── */}
          <div className="relative z-10 flex flex-col justify-end min-h-screen h-[100svh] px-7 sm:px-12 md:px-14 pb-10 sm:pb-14">
            <div className="max-w-2xl">
              {/* Giant Heading */}
              <h1 className="text-[clamp(2.1rem,5.5vw,4.4rem)] font-bold text-white tracking-tight leading-[1.06] mb-4">
                Websites Designed to Grow
                <br className="hidden sm:block" /> Your Business.
              </h1>

              {/* Sub-copy */}
              <p className="text-[clamp(0.85rem,1.4vw,1.05rem)] text-neutral-300/85 font-normal leading-relaxed max-w-lg mb-8">
                Stop losing sales to a slow or confusing website. We design
                fast, search-optimized digital platforms that turn visitors into
                paying clients.
              </p>

              {/* CTA */}
              <button
                onClick={() => scrollToSection("contact")}
                className="group inline-flex items-center gap-3 bg-white text-[#111] font-semibold text-sm px-5 py-3 rounded-full shadow-xl shadow-black/30 hover:shadow-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Book a Free Strategy Call</span>
                <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#ff4d28] to-[#e63010] flex items-center justify-center group-hover:translate-x-0.5 transition-transform shadow-md shadow-[#ff4d28]/40">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                </span>
              </button>
            </div>
          </div>

          {/* ── Social Proof / Logo Bar ── */}
          <div className="relative z-10 border-t border-white/[0.09] bg-black/55 backdrop-blur-xl px-7 sm:px-12 md:px-14 py-5">
            <div className="flex flex-wrap items-center gap-x-10 gap-y-3 sm:gap-x-14">
              {[
                {
                  label: "LXA GROUP",
                  symbol: (
                    <span className="w-4 h-4 rounded border border-current flex items-center justify-center text-[8px] font-bold leading-none">
                      LX
                    </span>
                  ),
                },
                { label: "monte", symbol: null },
                { label: "aurelune café", symbol: null },
                { label: "urbanexa", symbol: null },
                { label: "VEYLO", symbol: null },
                { label: "urbanexa", symbol: null },
              ].map((brand, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-neutral-400/70 hover:text-neutral-200/90 transition-colors"
                  style={{
                    fontWeight: 700,
                    fontSize: "0.78rem",
                    letterSpacing: "0.04em",
                    textTransform:
                      i === 3 || i === 4 || i === 5 ? "lowercase" : "none",
                  }}
                >
                  {brand.symbol}
                  <span
                    className={
                      i === 4 ? "tracking-widest uppercase text-[0.72rem]" : ""
                    }
                  >
                    {brand.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: THE PROBLEM
          ("Is Your Website Actively Losing You Money?")
         ========================================================================= */}
      <section
        id="problem"
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24"
      >
        {/* Section Pill Badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#ff4d28]" />
          <span className="text-xs font-semibold text-[#ff4d28] uppercase tracking-wider">
            The Problem
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Glowing Amber Ribbon Wave Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0d0d10] aspect-[4/3] group shadow-2xl">
              <Image
                src="/problem-ribbon.png"
                alt="3D flowing glowing orange wave ribbon through dark void"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Floating Stat Chip */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#121215]/80 backdrop-blur-xl border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-neutral-400 block font-medium">
                    Industry Average
                  </span>
                  <span className="text-base font-bold text-white">
                    72% of Visitors Bounce within 4s
                  </span>
                </div>
                <div className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-semibold border border-red-500/30">
                  Leaking Revenue
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Heading & Agitation Points */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Is Your Website Actively Losing You Money?
            </h2>

            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed mb-8">
              Most websites look okay on the surface, but suffer from high
              bounce rates, slow load times, and poor conversion architecture
              that silently turns potential clients away.
            </p>

            {/* Pain Points Breakdown */}
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#0d0d10] border border-white/5 hover:border-white/15 transition-colors">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-red-400 font-bold text-xs">✕</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">
                      Lagging Load Speeds Drain Leads
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-normal">
                      Every single second of page delay slashes mobile
                      conversion rates by up to 20%. Cluttered templates bleed
                      valuable prospects before they see your pitch.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0d0d10] border border-white/5 hover:border-white/15 transition-colors">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-red-400 font-bold text-xs">✕</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">
                      Generic Templates Lack Authority
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-normal">
                      Cookie-cutter themes fail to articulate your distinct
                      value proposition, driving buyers to compare you strictly
                      on price against inferior competitors.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0d0d10] border border-white/5 hover:border-white/15 transition-colors">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-red-400 font-bold text-xs">✕</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">
                      Broken Funnels Cause Drop-Off
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-normal">
                      Without strategic conversion funnels and clear visual
                      cues, qualified traffic abandons the journey before
                      booking an inquiry or making a purchase.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: SERVICES
          ("Everything You Need to Succeed Online")
         ========================================================================= */}
      <section
        id="services"
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 scroll-mt-24"
      >
        {/* Section Header Split */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#ff4d28]" />
              <span className="text-xs font-semibold text-[#ff4d28] uppercase tracking-wider">
                Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Everything You Need to Succeed Online
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 max-w-md leading-relaxed">
            Comprehensive digital solutions built for ambitious brands wanting
            real market impact and measurable conversion growth.
          </p>
        </div>

        {/* Services Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Services Accordion / List */}
          <div className="lg:col-span-6 space-y-3">
            {services.map((item, idx) => {
              const isActive = activeService === idx;
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveService(idx)}
                  className={`cursor-pointer rounded-2xl transition-all duration-300 border ${
                    isActive
                      ? "bg-[#121215] border-[#ff4d28]/40 shadow-xl shadow-[#ff4d28]/5"
                      : "bg-[#0a0a0d] border-white/5 hover:border-white/15"
                  } p-5`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                          isActive
                            ? "bg-[#ff4d28] text-white shadow-md shadow-[#ff4d28]/30"
                            : "bg-white/5 text-neutral-400"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3
                        className={`text-base font-semibold transition-colors ${
                          isActive ? "text-white" : "text-neutral-300"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>

                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all ${
                        isActive
                          ? "border-[#ff4d28] bg-[#ff4d28]/10 text-[#ff4d28] rotate-90"
                          : "border-white/10 text-neutral-400"
                      }`}
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Expanded Content for Active Service */}
                  {isActive && (
                    <div className="mt-4 pt-4 border-t border-white/10 animate-in fade-in duration-300">
                      <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                        {item.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-neutral-300 border border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Explore All Services CTA Pill */}
            <div className="pt-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="group inline-flex items-center gap-2.5 bg-[#141418] hover:bg-[#1a1a20] border border-white/10 hover:border-white/20 text-white text-xs font-semibold px-5 py-3 rounded-full transition-all"
              >
                <span>Explore all custom services</span>
                <div className="w-5 h-5 rounded-full bg-[#ff4d28] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-3 h-3 text-white" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Sleek Laptop Display Mockup */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0d0d10] aspect-[4/3] shadow-2xl group">
              <Image
                src="/services-laptop.jpg"
                alt="Laptop displaying bespoke high-converting website design"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              {/* Dynamic Overlay Info for Currently Selected Service */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#101014]/85 backdrop-blur-xl border border-white/10 shadow-2xl">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs font-semibold text-white tracking-wide uppercase">
                      Featured Deliverable
                    </span>
                  </div>
                  <span className="text-xs text-neutral-400 font-mono">
                    Sprint 01
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">
                  {services[activeService].title}
                </h4>
                <p className="text-xs text-neutral-400 line-clamp-2">
                  {services[activeService].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: PROCESS
          ("A Simple Process Designed Around Collaboration")
         ========================================================================= */}
      <section
        id="process"
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 scroll-mt-24"
      >
        {/* Section Header Split */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#ff4d28]" />
              <span className="text-xs font-semibold text-[#ff4d28] uppercase tracking-wider">
                Process
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              A Simple Process Designed around collaboration.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 max-w-md leading-relaxed">
            Transparent, agile, and results-focused from initial concept to
            launch day. No surprises, no black boxes.
          </p>
        </div>

        {/* Process Step Grid / Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: 4 Step Cards */}
          <div className="lg:col-span-6 space-y-4">
            {processSteps.map((step, idx) => {
              const isSelected = activeProcessStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveProcessStep(idx)}
                  className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 ${
                    isSelected
                      ? "bg-[#121216] border-[#ff4d28]/40 shadow-xl shadow-[#ff4d28]/5"
                      : "bg-[#0a0a0c] border-white/5 hover:border-white/15"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-sm shrink-0 transition-colors ${
                        isSelected
                          ? "bg-[#ff4d28] text-white shadow-md shadow-[#ff4d28]/30"
                          : "bg-white/5 text-neutral-400 border border-white/10"
                      }`}
                    >
                      {step.number}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 sm:gap-2">
                        <h3 className="text-base font-semibold text-white">
                          {step.title}
                        </h3>
                        <span className="text-xs text-neutral-400 font-medium sm:shrink-0">
                          {step.subtitle}
                        </span>
                      </div>
                      <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Collaboration Digital Whiteboard Mockup */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0d0d10] aspect-[4/3] shadow-2xl group">
              <Image
                src="/process-board.jpg"
                alt="Agile strategy design sprint workflow whiteboard canvas with sticky notes and flow nodes"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              {/* Floating Status Badges */}
              <div className="absolute top-5 right-5 flex items-center gap-2 bg-[#121216]/90 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-semibold text-neutral-200">
                  Live Sprint Canvas
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0f0f13]/85 backdrop-blur-xl border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-neutral-400 block font-medium">
                    Sprint Cadence
                  </span>
                  <span className="text-sm font-bold text-white">
                    Weekly Demos & Real-time Slack Channel
                  </span>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#ff4d28]/20 text-[#ff4d28] text-xs font-semibold border border-[#ff4d28]/30">
                  100% On Time
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: SELECTED WORK / PORTFOLIO
          ("See How We Make a Difference for Clients")
         ========================================================================= */}
      <section
        id="work"
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 scroll-mt-24"
      >
        {/* Section Header Split */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#ff4d28]" />
              <span className="text-xs font-semibold text-[#ff4d28] uppercase tracking-wider">
                Portfolio
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              See How We Make a Difference for Clients.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 max-w-md leading-relaxed">
            Take a look at some of our recent flagship client transformations
            and growth metrics.
          </p>
        </div>

        {/* 2x2 Project Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {portfolioProjects.map((project, idx) => (
            <div
              key={idx}
              className="group rounded-3xl overflow-hidden border border-white/10 bg-[#0d0d10] hover:border-white/20 transition-all duration-500 shadow-2xl flex flex-col"
            >
              {/* Project Image Frame */}
              <div className="relative aspect-[16/11] overflow-hidden bg-[#141418]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                {/* Floating Metric Badge */}
                <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-xs font-bold text-emerald-400 shadow-lg">
                  {project.stat}
                </div>
              </div>

              {/* Project Details Footer */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 bg-[#0c0c0f]">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="text-xs text-[#ff4d28] font-semibold tracking-wider uppercase">
                      {project.category}
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#ff4d28] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-2 font-medium">
                    Scope: {project.scope}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-medium text-neutral-400 group-hover:text-white transition-colors">
                    View Case Study
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#ff4d28] group-hover:border-[#ff4d28] transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300 group-hover:text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: RESULTS & WHY US
          ("A Team Built Perfectly for Your Growth")
         ========================================================================= */}
      <section
        id="results"
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 scroll-mt-24"
      >
        {/* Section Header Split */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#ff4d28]" />
              <span className="text-xs font-semibold text-[#ff4d28] uppercase tracking-wider">
                Results
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              A Team Built Perfectly for Your Growth
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 max-w-md leading-relaxed">
            We combine boutique agency attention with enterprise-grade quality
            and proven speed.
          </p>
        </div>

        {/* 3 Value Cards (Card 2 is Highlighted with Orange Mesh Gradient) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: 98% Satisfaction */}
          <div className="rounded-3xl p-8 bg-[#0c0c0f] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="text-5xl sm:text-6xl font-bold tracking-tight text-white block mb-3">
                98%
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                Client Satisfaction Rate
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Direct collaboration with senior designers and engineers. No
                account managers, no layers of bureaucracy, and unlimited
                revisions within sprint scope.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 text-xs text-neutral-400">
              Verified across 40+ project launches
            </div>
          </div>

          {/* Card 2: Featured Radiant Orange Gradient Card (ROI 3.5x) */}
          <div className="relative rounded-3xl p-8 overflow-hidden bg-gradient-to-b from-[#ff4d28] via-[#e63a15] to-[#7a1804] border border-[#ff6b47]/50 shadow-2xl shadow-[#ff4d28]/25 flex flex-col justify-between text-white group">
            {/* Ambient Background Grid Pattern */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center mb-8">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                  ROI
                </span>
                <span className="text-5xl sm:text-6xl font-black tracking-tight text-white">
                  3.5x
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Average Conversion Lift
              </h3>
              <p className="text-sm text-white/90 leading-relaxed">
                Our design decisions are rooted in real buyer behavior and
                psychological heuristics to ensure your new site yields
                tangible, recurring revenue.
              </p>
            </div>
            <div className="relative z-10 mt-8 pt-4 border-t border-white/20 text-xs text-white/80 font-medium">
              Calculated 90 days post-launch
            </div>
          </div>

          {/* Card 3: Rapid Turnaround Speed */}
          <div className="rounded-3xl p-8 bg-[#0c0c0f] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                <Clock className="w-6 h-6 text-[#ff4d28]" />
              </div>
              <span className="text-5xl sm:text-6xl font-bold tracking-tight text-white block mb-3">
                2-4 Wk
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                Rapid Sprint Turnaround
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Disciplined, focused execution gets your brand in front of
                customers in weeks rather than delayed quarters, giving you
                immediate market velocity.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 text-xs text-neutral-400">
              Guaranteed sprint timeline commitments
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: FREQUENTLY ASKED QUESTIONS (FAQ)
         ========================================================================= */}
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
            Everything you need to know about working with us, timelines, and
            deliverables.
          </p>
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
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
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
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
            onClick={() => scrollToSection("contact")}
            className="group inline-flex items-center gap-3 bg-[#121216] hover:bg-[#1a1a22] border border-white/10 hover:border-white/20 text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full transition-all shadow-xl"
          >
            <span>Have more questions? Let’s talk</span>
            <div className="w-6 h-6 rounded-full bg-[#ff4d28] flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </div>
          </button>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: CONTACT / LET'S TALK
          ("Let's make your website work for you")
         ========================================================================= */}
      <section
        id="contact"
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 scroll-mt-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Bio, Direct Contact Links */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#ff4d28]" />
              <span className="text-xs font-semibold text-[#ff4d28] uppercase tracking-wider">
                Contact
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Let’s make your website work for you
            </h2>

            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-8">
              Ready to scale your digital presence? Fill out the brief or reach
              out to our team directly. We review every submission within 24
              business hours.
            </p>

            {/* Direct Contact Info */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-neutral-300 text-sm">
                <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff4d28]">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href="mailto:hello@dominionstudio.com"
                  className="hover:text-white transition-colors"
                >
                  hello@dominionstudio.com
                </a>
              </div>

              <div className="flex items-center gap-3 text-neutral-300 text-sm">
                <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff4d28]">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-neutral-300">+1 (555) 382-9014</span>
              </div>

              <div className="flex items-center gap-3 text-neutral-300 text-sm">
                <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff4d28]">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-neutral-300">
                  New York, NY & Remote Worldwide
                </span>
              </div>
            </div>

            {/* Social Links Row */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-3">
                Follow our work
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#101014] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/20 transition-all"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#101014] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/20 transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#101014] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/20 transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#101014] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/20 transition-all"
                  aria-label="Dribbble"
                >
                  <DribbbleIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-6 sm:p-8 lg:p-10 bg-[#0d0d10] border border-white/10 shadow-2xl relative">
              {isSubmitted ? (
                /* ── Success State ── */
                <div className="py-10 sm:py-16 text-center flex flex-col items-center justify-center">
                  {/* Animated Success Ring */}
                  <div className="relative mb-8">
                    <div className="w-24 h-24 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center animate-in zoom-in-75 duration-500">
                      <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center">
                        <CheckCircle2 className="w-9 h-9 text-emerald-400" />
                      </div>
                    </div>
                    {/* Orbiting dots */}
                    <span className="absolute top-1 right-1 w-3 h-3 rounded-full bg-emerald-400/60 animate-ping" />
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                      Inquiry Sent Successfully
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    We&apos;ve Got Your Message!
                  </h3>
                  <p className="text-sm text-neutral-400 max-w-sm leading-relaxed mb-2">
                    Thank you,{" "}
                    <span className="text-white font-semibold">
                      {formData.name || "there"}
                    </span>
                    ! Your inquiry about{" "}
                    <span className="text-[#ff4d28] font-medium">
                      {formData.serviceType}
                    </span>{" "}
                    has been received.
                  </p>
                  <p className="text-xs text-neutral-500 mb-8">
                    Our team will respond to{" "}
                    <span className="text-neutral-300">{formData.email}</span>{" "}
                    within 24 business hours.
                  </p>

                  {/* Summary Chips */}
                  <div className="flex flex-wrap justify-center gap-2 mb-8">
                    <span className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-neutral-300">
                      📋 {formData.serviceType}
                    </span>
                    <span className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-neutral-300">
                      💰 {formData.budget}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormErrors({});
                      setFormData({
                        name: "",
                        email: "",
                        serviceType: "Full Website Design",
                        budget: "$5,000 - $10,000",
                        message: "",
                      });
                    }}
                    className="group inline-flex items-center gap-2 text-xs font-semibold text-[#ff4d28] hover:text-[#ff6b4a] transition-colors"
                  >
                    <span>Submit another inquiry</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              ) : (
                /* ── Contact Form ── */
                <form
                  onSubmit={handleFormSubmit}
                  className="space-y-5 sm:space-y-6"
                  noValidate
                >
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="field-name"
                        className="text-xs font-semibold text-neutral-300 uppercase tracking-wider block mb-2"
                      >
                        Your Name <span className="text-[#ff4d28]">*</span>
                      </label>
                      <input
                        id="field-name"
                        type="text"
                        placeholder="Sarah Connor"
                        value={formData.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        className={`w-full bg-[#121216] border rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                          formErrors.name
                            ? "border-red-500/70 focus:border-red-500"
                            : "border-white/10 focus:border-[#ff4d28]"
                        }`}
                      />
                      {formErrors.name && (
                        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                          <span className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center text-[8px] font-bold shrink-0">
                            !
                          </span>
                          {formErrors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="field-email"
                        className="text-xs font-semibold text-neutral-300 uppercase tracking-wider block mb-2"
                      >
                        Your Email <span className="text-[#ff4d28]">*</span>
                      </label>
                      <input
                        id="field-email"
                        type="email"
                        placeholder="sarah@company.com"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        className={`w-full bg-[#121216] border rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                          formErrors.email
                            ? "border-red-500/70 focus:border-red-500"
                            : "border-white/10 focus:border-[#ff4d28]"
                        }`}
                      />
                      {formErrors.email && (
                        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                          <span className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center text-[8px] font-bold shrink-0">
                            !
                          </span>
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Project Service Type Selector */}
                  <div>
                    <label className="text-xs font-semibold text-neutral-300 uppercase tracking-wider block mb-2.5">
                      What are you looking to build?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Full Website Design",
                        "Landing Page",
                        "Brand & System",
                        "Webflow/Code",
                        "Other",
                      ].map((item) => (
                        <button
                          type="button"
                          key={item}
                          onClick={() => updateField("serviceType", item)}
                          className={`text-xs font-medium px-3.5 py-2 rounded-xl border transition-all ${
                            formData.serviceType === item
                              ? "bg-[#ff4d28] text-white border-[#ff4d28] shadow-md shadow-[#ff4d28]/20"
                              : "bg-[#121216] text-neutral-300 border-white/10 hover:border-white/25"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="text-xs font-semibold text-neutral-300 uppercase tracking-wider block mb-2.5">
                      Approximate Budget
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "< $5,000",
                        "$5,000 - $10,000",
                        "$10,000 - $20,000",
                        "$20,000+",
                      ].map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => updateField("budget", b)}
                          className={`text-xs font-medium px-3.5 py-2 rounded-xl border transition-all ${
                            formData.budget === b
                              ? "bg-[#ff4d28] text-white border-[#ff4d28] shadow-md shadow-[#ff4d28]/20"
                              : "bg-[#121216] text-neutral-300 border-white/10 hover:border-white/25"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label
                      htmlFor="field-message"
                      className="text-xs font-semibold text-neutral-300 uppercase tracking-wider block mb-2"
                    >
                      Tell us about your project{" "}
                      <span className="text-[#ff4d28]">*</span>
                    </label>
                    <textarea
                      id="field-message"
                      rows={4}
                      placeholder="Share your goals, current website link, timeline, or key deliverables..."
                      value={formData.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      className={`w-full bg-[#121216] border rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors resize-none ${
                        formErrors.message
                          ? "border-red-500/70 focus:border-red-500"
                          : "border-white/10 focus:border-[#ff4d28]"
                      }`}
                    />
                    <div className="flex items-center justify-between mt-1.5">
                      {formErrors.message ? (
                        <p className="text-xs text-red-400 flex items-center gap-1">
                          <span className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center text-[8px] font-bold shrink-0">
                            !
                          </span>
                          {formErrors.message}
                        </p>
                      ) : (
                        <span />
                      )}
                      <span
                        className={`text-xs tabular-nums ${
                          formData.message.length < 20
                            ? "text-neutral-500"
                            : "text-emerald-400"
                        }`}
                      >
                        {formData.message.length} / 20+
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#ff4d28] to-[#ff2a00] hover:from-[#ff5e3b] hover:to-[#ff3b14] disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold text-sm py-4 rounded-xl shadow-xl shadow-[#ff4d28]/25 hover:shadow-[#ff4d28]/40 transition-all hover:scale-[1.01] active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="w-4 h-4 animate-spin text-white/80"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        <span>Sending your inquiry…</span>
                      </>
                    ) : (
                      <>
                        <span>Send Project Inquiry</span>
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                          <ArrowRight className="w-3.5 h-3.5 text-white" />
                        </div>
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-neutral-500">
                    We respect your privacy. No spam — ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FOOTER
         ========================================================================= */}
      <footer className="border-t border-white/10 bg-[#050507] pt-12 sm:pt-16 pb-10 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-[#ff4d28] flex items-center justify-center font-bold text-white text-xs">
                D
              </div>
              <span className="text-base font-bold tracking-wider text-white uppercase">
                DOMINION STUDIO
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed mb-6">
              Websites designed to grow your business. Engineered with aesthetic
              precision, modern speed, and high-converting architecture.
            </p>
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Accepting new client engagements for Q4</span>
            </div>
          </div>

          {/* Nav Column 1: Services */}
          <div className="md:col-span-2 col-span-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Website Design
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Landing Pages
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Brand Systems
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Webflow & Framer
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  SEO Optimization
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Column 2: Studio */}
          <div className="md:col-span-2 col-span-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Studio
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="hover:text-white transition-colors"
                >
                  Our Process
                </a>
              </li>
              <li>
                <a
                  href="#results"
                  className="hover:text-white transition-colors"
                >
                  ROI & Results
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Column 3: Legal & Back To Top */}
          <div className="md:col-span-3 col-span-12 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
                Office & Inquiries
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                440 Broadway, Suite 800
                <br />
                New York, NY 10013
                <br />
                hello@dominionstudio.com
              </p>
            </div>

            <div className="pt-6">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 hover:text-white py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <span>Back to top</span>
                <ArrowRight className="w-3.5 h-3.5 -rotate-90" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© 2025 Dominion Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-neutral-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-neutral-400 transition-colors">
              Security
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
