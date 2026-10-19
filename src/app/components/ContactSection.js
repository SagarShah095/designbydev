"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88M5.07 18.5h2.79v-8.37H5.07v8.37z" />
    </svg>
  );
}

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" {...props}>
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

export default function ContactSection() {
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
    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      const firstErrorField = Object.keys(errors)[0];
      const el = document.getElementById(`field-${firstErrorField}`);
      if (el) el.focus();
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
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
                href="mailto:hello@designbydev.com"
                className="hover:text-white transition-colors cursor-pointer"
              >
                hello@designbydev.com
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
                className="w-10 h-10 rounded-xl bg-[#101014] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/20 transition-all cursor-pointer"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#101014] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/20 transition-all cursor-pointer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#101014] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/20 transition-all cursor-pointer"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#101014] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/20 transition-all cursor-pointer"
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
                  className="group inline-flex items-center gap-2 text-xs font-semibold text-[#ff4d28] hover:text-[#ff6b4a] transition-colors cursor-pointer"
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
                        className={`text-xs font-medium px-3.5 py-2 rounded-xl border transition-all cursor-pointer ${
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
                        className={`text-xs font-medium px-3.5 py-2 rounded-xl border transition-all cursor-pointer ${
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
                  className="w-full group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#ff4d28] to-[#ff2a00] hover:from-[#ff5e3b] hover:to-[#ff3b14] disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold text-sm py-4 rounded-xl shadow-xl shadow-[#ff4d28]/25 hover:shadow-[#ff4d28]/40 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
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
  );
}
