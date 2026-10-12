"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Printer,
  Layers,
  Box,
  CheckSquare,
  ShieldAlert,
  Truck,
  ChevronRight,
  ChevronLeft,
  Scissors,
  Grip,
  ArrowRight,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import { fadeInUp } from "@/lib/utils";

const steps = [
  {
    num: "01",
    name: "Printing",
    tag: "High-Definition Flexo & Offset",
    desc: "High-definition custom logo printing using flexo or offset methods with eco-friendly vegetable-based inks for vibrant, lasting results.",
    icon: Printer,
  },
  {
    num: "02",
    name: "Lamination",
    tag: "Matte & Gloss Barrier Films",
    desc: "Application of matte, gloss, or soft-touch barrier films to enhance durability, tactile quality, and visual appeal.",
    icon: Layers,
  },
  {
    num: "03",
    name: "Punching",
    tag: "Precision Structural Die-Cut",
    desc: "Precision die-cutting and creasing to establish accurate fold lines and define the bag's structural profile.",
    icon: Scissors,
  },
  {
    num: "04",
    name: "Side Pasting",
    tag: "Food-Grade Adhesive Sealing",
    desc: "Automated side-sealing using food-grade organic adhesives to ensure clean, uniform seams.",
    icon: ChevronRight,
  },
  {
    num: "05",
    name: "Bottom Profiling",
    tag: "Self-Standing Geometry",
    desc: "Folding bottom envelopes cleanly to distribute weight load and create a stable, self-standing base.",
    icon: Box,
  },
  {
    num: "06",
    name: "Bottom Pasting",
    tag: "Heavy-Strength Reinforcement",
    desc: "Heavy-strength base reinforcement to prevent structural failure under load.",
    icon: ChevronRight,
  },
  {
    num: "07",
    name: "Handle Making",
    tag: "Twisted & Cotton Cord Sizing",
    desc: "Sizing and twisting natural paper fibers or cutting premium cotton ropes to exact lengths.",
    icon: Grip,
  },
  {
    num: "08",
    name: "Handle Pasting",
    tag: "Reinforced Patch Attachment",
    desc: "Securing handle joints with strong-hold reinforced patches for reliable carrying comfort.",
    icon: ChevronRight,
  },
  {
    num: "09",
    name: "Quality Inspection",
    tag: "Multi-Point QA Stress Testing",
    desc: "Individual weight checks, aesthetic audits, and structural stress testing to guarantee consistency.",
    icon: CheckSquare,
  },
  {
    num: "10",
    name: "Packing",
    tag: "Transit-Ready Corrugated Protection",
    desc: "Securing bags inside double-corrugated waterproof cartons for safe transit protection.",
    icon: ShieldAlert,
  },
  {
    num: "11",
    name: "Dispatch",
    tag: "Global & Domestic Logistics",
    desc: "Fast logistics delivery to clients across Bangalore, nationwide, and international markets.",
    icon: Truck,
  },
];

export default function Manufacturing() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
  };

  const progressPercentage = ((activeStep + 1) / steps.length) * 100;

  return (
    <section
      id="manufacturing"
      className="section-padding transition-colors duration-500 scroll-mt-20"
    >
      <div className="container-premium">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-14 md:mb-18"
        >
          <span className="text-primary font-semibold text-xs tracking-[0.25em] uppercase">
            Process Journey
          </span>
          <h2 className="mt-5 text-foreground">
            Precision Manufacturing
            <br />
            <span className="gradient-text">Step by Step</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-lg mx-auto text-sm md:text-base leading-relaxed">
            See how our advanced facility converts raw paper into premium
            branded bags.
          </p>
        </motion.div>

        {/* Timeline Grid: Full List + Sticky Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Full Steps List (All 11 steps fully visible with connected timeline, zero scrollbars) */}
          <div className="lg:col-span-5 flex flex-col gap-2 relative">
            {/* Connected vertical guideline */}
            <div className="absolute left-[29px] top-4 bottom-4 w-px bg-border -z-0" />
            <div
              className="absolute left-[29px] top-4 w-px bg-primary transition-all duration-500 ease-out -z-0"
              style={{
                height: `${(activeStep / (steps.length - 1)) * 94}%`,
              }}
            />

            {steps.map((step, index) => {
              const isActive = activeStep === index;
              const isPast = activeStep > index;

              return (
                <button
                  key={step.num}
                  onClick={() => setActiveStep(index)}
                  className={`group relative flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left border transition-all duration-300 w-full z-10 ${
                    isActive
                      ? "bg-surface border-primary/30 text-primary shadow-sm ring-1 ring-primary/20 backdrop-blur-sm"
                      : "bg-surface/30 border-border/50 hover:bg-surface/70 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    {/* Step number badge */}
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-heading font-bold transition-all duration-300 shrink-0 ${
                        isActive
                          ? "bg-primary text-white shadow-sm shadow-primary/30"
                          : isPast
                          ? "bg-primary/15 text-primary"
                          : "bg-muted text-muted-foreground/70 group-hover:bg-muted group-hover:text-foreground"
                      }`}
                    >
                      {step.num}
                    </div>

                    <span
                      className={`text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? "text-foreground font-semibold"
                          : "group-hover:text-foreground"
                      }`}
                    >
                      {step.name}
                    </span>
                  </div>

                  {/* Active Indicator Chevron */}
                  <ChevronRight
                    className={`w-4 h-4 transition-all duration-300 ${
                      isActive
                        ? "text-primary translate-x-0 opacity-100"
                        : "text-muted-foreground/30 -translate-x-1 opacity-0 group-hover:opacity-70 group-hover:translate-x-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Detail View (Sticky on Desktop) */}
          <div className="lg:col-span-7 lg:sticky lg:top-28">
            <div className="rounded-2xl bg-surface border border-border relative overflow-hidden shadow-sm">
              {/* Top Progress Bar */}
              <div className="h-1 w-full bg-border/40 relative overflow-hidden">
                <motion.div
                  className="h-full bg-primary"
                  initial={false}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>

              {/* Card Body */}
              <div className="p-7 md:p-10 relative">
                {/* Background Large Step Number */}
                <div className="absolute -bottom-6 -right-2 text-[130px] md:text-[160px] font-heading font-black text-foreground/[0.03] select-none pointer-events-none leading-none">
                  {steps[activeStep].num}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                  >
                    {/* Header Row: Icon & Tag */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/15 text-primary shadow-sm shadow-primary/5">
                        {(() => {
                          const Icon = steps[activeStep].icon;
                          return <Icon className="w-7 h-7 text-primary" />;
                        })()}
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/15">
                          <Sparkles className="w-3 h-3" />
                          {steps[activeStep].tag}
                        </span>
                      </div>
                    </div>

                    {/* Step Subtitle */}
                    <span className="text-[11px] uppercase tracking-widest text-primary font-semibold mb-2 block">
                      Phase {steps[activeStep].num} of {steps.length}
                    </span>

                    {/* Step Name */}
                    <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
                      {steps[activeStep].name}
                    </h3>

                    {/* Step Description */}
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 max-w-xl">
                      {steps[activeStep].desc}
                    </p>

                    {/* Footer Controls */}
                    <div className="pt-6 border-t border-border flex items-center justify-between gap-4 flex-wrap">
                      {/* Step Indicator Dots */}
                      <div className="flex items-center gap-1.5">
                        {steps.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveStep(idx)}
                            aria-label={`Go to step ${idx + 1}`}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              activeStep === idx
                                ? "w-6 bg-primary"
                                : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                            }`}
                          />
                        ))}
                      </div>

                      {/* Navigation Buttons */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={handlePrev}
                          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-muted-foreground hover:text-foreground bg-muted/50 hover:bg-muted border border-border transition-all duration-200"
                        >
                          <ArrowLeft className="w-3.5 h-3.5" />
                          <span>Prev</span>
                        </button>

                        <button
                          onClick={handleNext}
                          className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-primary hover:bg-primary-dark shadow-sm shadow-primary/25 transition-all duration-200"
                        >
                          <span>
                            {activeStep === steps.length - 1
                              ? "Restart Journey"
                              : "Next Step"}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
