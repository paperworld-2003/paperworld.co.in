"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight, Leaf, Award, CheckCircle2 } from "lucide-react";

interface SlideData {
  id: number;
  image: string;
  tagline: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  features: string[];
  highlights: string[];
  badgeIcon: typeof Sparkles;
}

const slides: SlideData[] = [
  {
    id: 1,
    image: "/hero/heroImage1.png",
    tagline: "LUXURY PACKAGING",
    titleLine1: "Crafting Luxury",
    titleLine2: "Paper Bags",
    description:
      "Exquisite bespoke shopping bags engineered with premium textures, hot foil stamping, and reinforced handles for high-end retail brands.",
    features: ["Hot Foil Finish", "Embossed Textures", "Twisted Handles"],
    highlights: [
      "Metallic Gold & Silver Foil Stamping",
      "Reinforced Turn-Top with Heavy Load Grip",
      "Low MOQ from 500 Pcs with Custom Art",
    ],
    badgeIcon: Sparkles,
  },
  {
    id: 2,
    image: "/hero/heroImage2.png",
    tagline: "100% ECO-FRIENDLY",
    titleLine1: "Sustainable",
    titleLine2: "Zero Plastic",
    description:
      "100% biodegradable and recyclable packaging crafted from virgin kraft paper. Completely plastic-free, food-safe, and environmentally conscious.",
    features: ["100% Biodegradable", "FSC Certified", "Zero Single-Use Plastic"],
    highlights: [
      "100% Unbleached Virgin Kraft Fibers",
      "Organic Food-Safe Starch Adhesives",
      "Compostable Inks & Biodegradable Infill",
    ],
    badgeIcon: Leaf,
  },
  {
    id: 3,
    image: "/hero/heroImage3.png",
    tagline: "WHOLESALE SCALE",
    titleLine1: "Manufacturing",
    titleLine2: "At Scale",
    description:
      "High-speed automated manufacturing delivering over 5 million custom paper bags monthly with precision embossing and pan-India logistics.",
    features: ["5M+ Monthly Output", "Factory Direct Rate", "Pan-India Shipping"],
    highlights: [
      "High-Speed Automatic Folding Lines",
      "Wholesale Direct-Factory Bulk Pricing",
      "Reliable Doorstep Delivery Across India",
    ],
    badgeIcon: Award,
  },
];

const SLIDE_DURATION_MS = 3000; // Auto-advance every 3 seconds

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // 3-second automatic slide transition
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION_MS);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  const activeSlide = slides[current];
  const BadgeIcon = activeSlide.badgeIcon;

  return (
    <div id="hero" className="relative w-full">
      {/* ──────────────────────────────────────────────────────────────────────────
          MOBILE HERO (< md screens):
          - Seamless Home Page Background: Ambient slide glow blending with page theme.
          - Slideshow Image right at the TOP (below header).
          - Rich content BELOW: Badge, Headline, Description, Features, Buttons & Trust metrics.
          - Strictly BLACK typography on bright frosted glass containers.
          ────────────────────────────────────────────────────────────────────────── */}
      <section
        aria-label="Mobile Hero Section"
        className="relative block md:hidden w-full min-h-[100dvh] flex flex-col justify-between overflow-hidden select-none pt-[92px] sm:pt-[106px] pb-3.5 sm:pb-5 px-4 sm:px-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Mobile Ambient Background: Soft blurred reflection of active slide that blends seamlessly with home page theme */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <AnimatePresence mode="sync">
            {slides.map((slide, idx) => {
              if (idx !== current) return null;
              return (
                <motion.div
                  key={`m-ambient-${slide.id}`}
                  className="absolute inset-0 w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <Image
                    src={slide.image}
                    alt="Ambient slide background"
                    fill
                    className="object-cover blur-3xl scale-125 opacity-35 dark:opacity-25"
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
          {/* Subtle frosted wash to ensure seamless theme background */}
          <div className="absolute inset-0 bg-background/85 backdrop-blur-xl" />
        </div>

        <div className="max-w-md mx-auto w-full flex-1 flex flex-col gap-2 sm:gap-3">
          {/* 1. TOP: Slideshow Image Frame */}
          <div className="relative w-full aspect-[16/10.5] max-h-[195px] sm:max-h-[240px] rounded-2xl overflow-hidden shadow-xl border border-black/10 dark:border-white/15 bg-neutral-100 dark:bg-neutral-900 shrink-0">
            <AnimatePresence mode="sync">
              {slides.map((slide, idx) => {
                if (idx !== current) return null;
                return (
                  <motion.div
                    key={`mobile-img-${slide.id}`}
                    className="absolute inset-0 w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <motion.div
                      className="relative w-full h-full"
                      initial={{ scale: 1 }}
                      animate={{ scale: 1.04 }}
                      transition={{ duration: SLIDE_DURATION_MS / 1000 + 0.5, ease: "linear" }}
                    >
                      <Image
                        src={slide.image}
                        alt={`Paper World Packaging - ${slide.titleLine1}`}
                        fill
                        priority={idx === 0}
                        className="object-cover object-center w-full h-full brightness-[1.05] contrast-[1.10]"
                        sizes="(max-width: 768px) 100vw, 450px"
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Bottom Controls Bar on Image Frame */}
            <div className="absolute bottom-2 left-3 right-3 z-10 flex items-center justify-between pointer-events-auto">
              <span className="brand-header-logo font-brand font-black text-xs tracking-wider uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                <span className="text-primary font-black">PAPER</span>{" "}
                <span className="text-white font-black" style={{ color: "#ffffff" }}>WORLD</span>
              </span>

              {/* Mobile Progress Bar (Glass Pill) */}
              <div className="hero-glass-pill flex items-center gap-1.5 px-2.5 py-1 rounded-full">
                {slides.map((slide, idx) => {
                  const isActive = idx === current;
                  return (
                    <button
                      key={`m-dot-${slide.id}`}
                      onClick={() => setCurrent(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300 flex items-center"
                      style={{ width: isActive ? "24px" : "8px" }}
                    >
                      <span className="absolute inset-0 bg-black/20 rounded-full" />
                      {isActive && (
                        <motion.span
                          key={`m-prog-${current}`}
                          className="absolute inset-y-0 left-0 bg-primary rounded-full"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: SLIDE_DURATION_MS / 1000, ease: "linear" }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              <span className="text-[11px] font-mono font-extrabold tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]" style={{ color: "#ffffff" }}>
                0{current + 1}<span style={{ color: "rgba(255,255,255,0.85)" }}>/0{slides.length}</span>
              </span>
            </div>
          </div>

          {/* 2. CONTENTS BELOW: Expanded Glassmorphic Container */}
          <div className="hero-glass-container w-full flex-1 p-3 sm:p-5 rounded-2xl flex flex-col justify-between text-left shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`mobile-text-${current}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex flex-col gap-1.5 sm:gap-2"
              >
                {/* Badge */}
                <div className="hero-glass-pill inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:py-1 rounded-full w-max shadow-sm">
                  <BadgeIcon className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span
                    className="hero-text-contrast-sm text-[10px] font-extrabold tracking-wider uppercase text-black"
                    style={{ color: "#000000" }}
                  >
                    {activeSlide.tagline}
                  </span>
                </div>

                {/* Headline - strictly black in both light and dark mode */}
                <h1
                  className="hero-headline hero-text-contrast font-heading font-black uppercase tracking-normal text-black text-lg sm:text-2xl leading-snug"
                  style={{ color: "#000000" }}
                >
                  <span className="block text-black" style={{ color: "#000000" }}>
                    {activeSlide.titleLine1}
                  </span>
                  <span className="block mt-0.5 text-black" style={{ color: "#000000" }}>
                    {activeSlide.titleLine2}
                  </span>
                </h1>

                {/* Rich Supporting Description */}
                <p className="text-xs sm:text-sm text-neutral-800 font-medium leading-relaxed" style={{ color: "#1c1917" }}>
                  {activeSlide.description}
                </p>

                {/* Key Feature Badges */}
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {activeSlide.features.map((feat, fIdx) => (
                    <span
                      key={`feat-${fIdx}`}
                      className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white/70 dark:bg-white/80 text-black border border-black/10 shadow-sm"
                      style={{ color: "#000000" }}
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                {/* Key Specifications & Quality Highlights - Fills empty space with high-value USPs */}
                <div className="flex flex-col gap-1 pt-1 border-t border-black/10">
                  {activeSlide.highlights.map((h, hIdx) => (
                    <div
                      key={`hl-${hIdx}`}
                      className="flex items-center gap-2 text-[10.5px] font-semibold text-neutral-800"
                      style={{ color: "#1c1917" }}
                    >
                      <CheckCircle2 className="w-3 h-3 text-primary shrink-0" />
                      <span className="line-clamp-1">{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Actions & Stats Strip anchored to card base */}
            <div className="flex flex-col gap-2 sm:gap-2.5 pt-1.5">
              {/* Permanent Action Buttons */}
              <div className="flex flex-row gap-2.5">
                <a
                  href="#contact"
                  className="flex-1 py-2.5 sm:py-3 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs font-bold tracking-wider uppercase text-center shadow-lg shadow-primary/30 flex items-center justify-center gap-1.5 transition-all active:scale-95"
                  style={{ color: "#ffffff" }}
                >
                  Enquire Now
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="#products"
                  className="hero-glass-pill flex-1 py-2.5 sm:py-3 rounded-xl text-xs font-bold tracking-wider uppercase text-center flex items-center justify-center transition-all active:scale-95 hover:bg-white/40"
                >
                  <span
                    className="hero-text-contrast-sm text-black font-extrabold"
                    style={{ color: "#000000" }}
                  >
                    View Products
                  </span>
                </a>
              </div>

              {/* Micro Trust Stats Strip to utilize vertical mobile space */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-black/10 text-center">
                <div>
                  <p className="text-xs font-black text-primary">50M+</p>
                  <p className="text-[9px] font-semibold text-neutral-700" style={{ color: "#292524" }}>Bags Made</p>
                </div>
                <div>
                  <p className="text-xs font-black text-primary">100%</p>
                  <p className="text-[9px] font-semibold text-neutral-700" style={{ color: "#292524" }}>Eco Friendly</p>
                </div>
                <div>
                  <p className="text-xs font-black text-primary">500+</p>
                  <p className="text-[9px] font-semibold text-neutral-700" style={{ color: "#292524" }}>B2B Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────────
          DESKTOP HERO (md: screens and above):
          - PERMANENT PARALLEL THEME: Identical regardless of dark/light theme toggle.
          - ALL CONTAINERS use unified white glassmorphism (.hero-glass-container, .hero-glass-pill).
          - PURE WHITE TYPOGRAPHY (both lines are 100% white with deep drop-shadow).
          - STATIONARY CONTAINER aligned to the left: never jumps or fades on slide change.
          - ALL BOTTOM BAR CONTAINERS (Brand, Progress, Arrows) use white glassmorphism.
          ────────────────────────────────────────────────────────────────────────── */}
      <section
        aria-label="Desktop Hero Slideshow"
        className="hidden md:block relative w-full h-[100dvh] min-h-[640px] max-h-[1080px] overflow-hidden select-none bg-neutral-950 text-white"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Background Slides: Full-Screen Bright & High Contrast */}
        <AnimatePresence mode="sync">
          {slides.map((slide, idx) => {
            if (idx !== current) return null;
            return (
              <motion.div
                key={`desktop-img-${slide.id}`}
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                <motion.div
                  className="relative w-full h-full"
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.04 }}
                  transition={{ duration: SLIDE_DURATION_MS / 1000 + 0.7, ease: "linear" }}
                >
                  <Image
                    src={slide.image}
                    alt={`Paper World Packaging - ${slide.titleLine1}`}
                    fill
                    priority={idx === 0}
                    className="object-cover object-center w-full h-full brightness-[1.08] contrast-[1.12] saturate-[1.10]"
                    sizes="100vw"
                    quality={95}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Desktop Container Dragged Directly to the Left Side */}
        <div className="relative z-20 w-full h-full flex items-center pl-6 sm:pl-10 md:pl-12 lg:pl-14 xl:pl-16">
          <div className="hero-glass-container w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[490px] shrink-0 p-6 sm:p-7 lg:p-7 rounded-3xl flex flex-col gap-3.5 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={`desktop-text-${current}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-2.5"
              >
                {/* White Glass Badge */}
                <div className="hero-glass-pill inline-flex items-center gap-2 px-3 py-1 rounded-full w-max">
                  <BadgeIcon className="w-3.5 h-3.5 text-primary animate-pulse" />
                  <span
                    className="hero-text-contrast-sm text-[10px] sm:text-[11px] font-extrabold tracking-[0.16em] uppercase text-black"
                    style={{ color: "#000000" }}
                  >
                    {activeSlide.tagline}
                  </span>
                </div>

                {/* Headline: Guaranteed Fit — ALWAYS pure black in light and dark mode */}
                <h1
                  className="hero-headline hero-text-contrast font-heading font-black uppercase tracking-normal text-black"
                  style={{ color: "#000000" }}
                >
                  <span className="block text-black" style={{ color: "#000000" }}>
                    {activeSlide.titleLine1}
                  </span>
                  <span className="block mt-0.5 text-black" style={{ color: "#000000" }}>
                    {activeSlide.titleLine2}
                  </span>
                </h1>
              </motion.div>
            </AnimatePresence>

            {/* Permanent Action Buttons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="#contact"
                className="px-5 sm:px-6 py-3 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_8px_25px_rgba(217,112,40,0.45)] flex items-center justify-center gap-1.5 group shrink-0"
                style={{ color: "#ffffff" }}
              >
                Enquire Now
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#products"
                className="hero-glass-pill px-5 sm:px-6 py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-white/40 flex items-center justify-center shrink-0"
              >
                <span
                  className="hero-text-contrast-sm text-black font-extrabold"
                  style={{ color: "#000000" }}
                >
                  View Products
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Slide Navigation Bar (Bottom Controls Bar Aligned with Left Padding) */}
        <div className="absolute bottom-6 left-0 right-0 z-30 px-6 sm:px-10 md:px-12 lg:px-14 xl:px-16 flex items-center justify-between pointer-events-auto">
          {/* 1. Brand Tag — Darker readable glassmorphism pill */}
          <div className="hero-glass-pill-readable flex items-center gap-3 px-4 py-2 rounded-full">
            <span className="brand-header-logo font-brand font-black text-sm md:text-base tracking-widest uppercase drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
              <span className="text-primary font-black">PAPER</span>{" "}
              <span className="font-black drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]" style={{ color: "#ffffff" }}>WORLD</span>
            </span>
            <span className="text-white/70 text-xs font-bold">•</span>
            <span className="text-xs font-mono font-bold tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]" style={{ color: "#ffffff" }}>
              0{current + 1} / 0{slides.length}
            </span>
          </div>

          {/* 2. Interactive Progress Indicators in White Glassmorphism Pill */}
          <div className="hero-glass-pill flex items-center gap-2 px-4 py-2 rounded-full">
            {slides.map((slide, idx) => {
              const isActive = idx === current;
              return (
                <button
                  key={`d-indicator-${slide.id}`}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className="relative h-2 rounded-full overflow-hidden transition-all duration-300 flex items-center"
                  style={{ width: isActive ? "38px" : "12px" }}
                >
                  <span className="absolute inset-0 bg-black/20 rounded-full" />
                  {isActive && (
                    <motion.span
                      key={`d-prog-${current}`}
                      className="absolute inset-y-0 left-0 bg-primary rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: SLIDE_DURATION_MS / 1000, ease: "linear" }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* 3. Prev / Next Arrows in White Glassmorphism Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="hero-glass-pill w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 active:scale-90 hover:bg-white/60 text-black shadow-md"
              style={{ color: "#000000" }}
            >
              <ChevronLeft className="w-5 h-5 text-black" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="hero-glass-pill w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 active:scale-90 hover:bg-white/60 text-black shadow-md"
              style={{ color: "#000000" }}
            >
              <ChevronRight className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
