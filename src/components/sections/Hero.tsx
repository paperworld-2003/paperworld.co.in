"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useSpring, useMotionValue, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SlideData {
  id: number;
  image: string;
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    image: "/hero/heroImage1.webp",
    eyebrow: "CUSTOM PAPER PACKAGING",
    titleLine1: "Crafting Luxury",
    titleLine2: "Paper Bags",
    description: "Premium paper bags crafted for retail, gifting, and growing brands.",
  },
  {
    id: 2,
    image: "/hero/heroImage2.webp",
    eyebrow: "SUSTAINABLE PACKAGING",
    titleLine1: "Eco-Friendly",
    titleLine2: "Kraft Carriers",
    description: "Biodegradable, recyclable, and plastic-free packaging made with care.",
  },
  {
    id: 3,
    image: "/hero/heroImage3.webp",
    eyebrow: "DIRECT-FACTORY PRODUCTION",
    titleLine1: "Manufacturing",
    titleLine2: "At Scale",
    description: "High-volume precision manufacturing tailored for your brand merchandise.",
  },
];

const SLIDE_DURATION_MS = 6000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);

  // Restrained desktop mouse parallax (gentle ±8px)
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);
  const smoothMouseX = useSpring(rawMouseX, { stiffness: 70, damping: 25, mass: 0.5 });
  const smoothMouseY = useSpring(rawMouseY, { stiffness: 70, damping: 25, mass: 0.5 });

  const bgParallaxX = useTransform(smoothMouseX, [-1, 1], [-8, 8]);
  const bgParallaxY = useTransform(smoothMouseY, [-1, 1], [-6, 6]);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Carousel autoplay
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION_MS);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  // Preload next slides
  useEffect(() => {
    if (typeof window === "undefined") return;
    const preloadTimer = setTimeout(() => {
      slides.slice(1).forEach((slide) => {
        const img = new window.Image();
        img.src = slide.image;
      });
    }, 1000);
    return () => clearTimeout(preloadTimer);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (prefersReducedMotion || typeof window === "undefined") return;
      if (window.matchMedia("(pointer: coarse)").matches) return;

      const rect = heroRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

      rawMouseX.set(x);
      rawMouseY.set(y);
    },
    [rawMouseX, rawMouseY, prefersReducedMotion]
  );

  const handleMouseLeave = useCallback(() => {
    rawMouseX.set(0);
    rawMouseY.set(0);
    setIsPaused(false);
  }, [rawMouseX, rawMouseY]);

  const activeSlide = slides[current];

  return (
    <section id="hero" className="relative w-full">
      {/* ──────────────────────────────────────────────────────────────────────────
          MOBILE HERO (< md screens):
          Strictly follows the requested structure:
          1. Compact navigation header (in Header.tsx)
          2. Rectangular hero image frame immediately below header
          3. Functional image carousel controls directly below the image
          4. Hero content below the carousel (headline, supporting text, clear CTAs)
          ────────────────────────────────────────────────────────────────────────── */}
      <div className="block md:hidden w-full pt-[76px] pb-10 px-4 sm:px-6 bg-background transition-colors duration-200">
        <div className="max-w-md mx-auto flex flex-col gap-3.5">
          {/* 1. Rectangular Hero Image Frame */}
          <div className="relative w-full aspect-[16/10.5] rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-neutral-100 dark:bg-neutral-900 shadow-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={`mobile-img-${activeSlide.id}`}
                className="relative w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <Image
                  src={activeSlide.image}
                  alt={`Paper World Packaging - ${activeSlide.titleLine1} ${activeSlide.titleLine2}`}
                  fill
                  priority
                  className="object-cover object-center w-full h-full"
                  sizes="(max-width: 768px) 100vw, 480px"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 2. Functional Image Carousel directly below the hero image */}
          <div className="flex items-center justify-between px-1 py-1">
            {/* Slide counter */}
            <span className="text-xs font-mono font-semibold text-muted-foreground tracking-wider">
              0{current + 1} / 0{slides.length}
            </span>

            {/* Small slide indicator dots */}
            <div className="flex items-center gap-1.5">
              {slides.map((s, idx) => (
                <button
                  key={`m-dot-${s.id}`}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                    idx === current
                      ? "w-6 bg-[#D97028]"
                      : "w-1.5 bg-black/20 dark:bg-white/25 hover:bg-black/40 dark:hover:bg-white/40"
                  )}
                />
              ))}
            </div>

            {/* Compact previous / next controls */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="w-8 h-8 rounded-full flex items-center justify-center border border-border bg-surface text-foreground hover:bg-muted active:scale-95 transition-all cursor-pointer shadow-xs"
              >
                <ChevronLeft className="w-4 h-4 text-foreground" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="w-8 h-8 rounded-full flex items-center justify-center border border-border bg-surface text-foreground hover:bg-muted active:scale-95 transition-all cursor-pointer shadow-xs"
              >
                <ChevronRight className="w-4 h-4 text-foreground" />
              </button>
            </div>
          </div>

          {/* 3. Hero content below the carousel */}
          <div className="flex flex-col gap-2 pt-1 text-left">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#D97028] uppercase">
              {activeSlide.eyebrow}
            </span>

            <h1 className="text-2xl sm:text-3xl font-heading font-black text-foreground uppercase tracking-tight leading-tight">
              {activeSlide.titleLine1}
              <br />
              <span className="text-foreground">{activeSlide.titleLine2}</span>
            </h1>

            <p className="text-sm text-muted-foreground leading-relaxed mt-1">
              {activeSlide.description}
            </p>

            {/* Clear Quotation & Product Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5 pt-3">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#D97028] hover:bg-[#C2631F] text-white text-xs font-bold tracking-wider uppercase transition-colors shadow-sm cursor-pointer"
              >
                <span className="text-white">REQUEST A QUOTE</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>

              <a
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center py-3.5 px-6 rounded-xl border border-border bg-surface text-foreground hover:bg-muted text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer"
              >
                <span>EXPLORE PRODUCTS</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────────────────────
          DESKTOP HERO (md: screens and above):
          - Realistic full-bleed product photography, continuous to the bottom edge.
          - No artificial black mask patch, no bottom white gradient!
          - Restrained translucent text surface on the left for pristine readability.
          - The paper bags on the right remain 100% visible and vivid.
          - Clean slide indicators and controls at bottom.
          ────────────────────────────────────────────────────────────────────────── */}
      <div
        ref={heroRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={handleMouseLeave}
        aria-label="Desktop Hero Showcase"
        className="hidden md:flex relative w-full h-[100dvh] min-h-[640px] max-h-[1020px] overflow-hidden select-none items-center"
      >
        {/* Full-bleed photography background - continuous to bottom edge */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
          <AnimatePresence mode="sync">
            {slides.map((slide, idx) => {
              if (idx !== current) return null;
              return (
                <motion.div
                  key={`desktop-bg-${slide.id}`}
                  className="absolute inset-0 w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0.3 : 0.7, ease: "easeInOut" }}
                >
                  <motion.div
                    className="relative w-full h-full origin-center"
                    style={{
                      x: prefersReducedMotion ? 0 : bgParallaxX,
                      y: prefersReducedMotion ? 0 : bgParallaxY,
                    }}
                  >
                    <Image
                      src={slide.image}
                      alt={`Paper World Packaging - ${slide.titleLine1} ${slide.titleLine2}`}
                      fill
                      priority={idx === 0}
                      fetchPriority={idx === 0 ? "high" : "auto"}
                      className="object-cover object-center w-full h-full"
                      sizes="100vw"
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Subtle top shade strictly for navbar contrast */}
          <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
        </div>

        {/* Desktop Content: Left-aligned restrained luxury card with light frosted glassmorphism */}
        <div className="container-premium relative z-10 w-full px-6 lg:px-12 xl:px-16">
          <div className="max-w-xl p-8 lg:p-10 rounded-3xl hero-frosted-glass-card flex flex-col gap-3.5 text-left transition-all duration-300">
            <span className="text-xs font-bold tracking-[0.22em] text-[#D97028] uppercase">
              {activeSlide.eyebrow}
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={`d-text-${current}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex flex-col gap-2.5"
              >
                <h1 className="hero-card-title text-4xl lg:text-5xl font-heading font-black text-neutral-950 uppercase tracking-tight leading-[1.08]">
                  <span className="hero-title-text block text-neutral-950">{activeSlide.titleLine1}</span>
                  <span className="hero-title-text block mt-1 text-neutral-900">
                    {activeSlide.titleLine2}
                  </span>
                </h1>

                <p className="hero-card-description text-base text-neutral-800 font-medium leading-relaxed max-w-lg mt-1">
                  {activeSlide.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Clear Quotation & Product CTAs */}
            <div className="flex items-center gap-3.5 pt-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#D97028] hover:bg-[#C2631F] text-white text-xs font-bold tracking-wider uppercase transition-colors shadow-md group cursor-pointer"
              >
                <span className="text-white">REQUEST A QUOTE</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#products"
                className="hero-frosted-btn-secondary inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all cursor-pointer"
              >
                <span>EXPLORE PRODUCTS</span>
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Bottom Carousel Controls */}
        <div className="absolute bottom-6 left-0 right-0 z-20 px-6 lg:px-12 xl:px-16 pointer-events-auto">
          <div className="container-premium flex items-center justify-between">
            {/* Slide counter & brand tag in clean frosted glass pill */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-full hero-frosted-glass-pill text-neutral-950 shadow-md">
              <span className="brand-header-logo font-brand font-black text-xs tracking-wider uppercase">
                <span className="text-[#D97028] font-black">PAPER</span>{" "}
                <span className="text-neutral-950 font-black">WORLD</span>
              </span>
              <span className="text-neutral-400 text-xs">•</span>
              <span className="text-xs font-mono font-bold tracking-wider text-neutral-800">
                0{current + 1} <span className="text-neutral-400">/ 0{slides.length}</span>
              </span>
            </div>

            {/* Interactive slide indicators & chevrons */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-full hero-frosted-glass-pill shadow-md">
                {slides.map((s, idx) => (
                  <button
                    key={`d-dot-${s.id}`}
                    onClick={() => setCurrent(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300 cursor-pointer",
                      idx === current
                        ? "w-8 bg-[#D97028]"
                        : "w-2 bg-neutral-900/25 hover:bg-neutral-900/50"
                    )}
                  />
                ))}
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="w-9 h-9 rounded-full flex items-center justify-center hero-frosted-glass-pill hover:bg-white/95 text-neutral-950 active:scale-95 transition-all cursor-pointer shadow-md"
                >
                  <ChevronLeft className="w-4 h-4 text-neutral-950" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="w-9 h-9 rounded-full flex items-center justify-center hero-frosted-glass-pill hover:bg-white/95 text-neutral-950 active:scale-95 transition-all cursor-pointer shadow-md"
                >
                  <ChevronRight className="w-4 h-4 text-neutral-950" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
