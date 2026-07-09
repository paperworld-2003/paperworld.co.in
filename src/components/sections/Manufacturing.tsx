"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Printer,
  Layers,
  Box,
  CheckSquare,
  ShieldAlert,
  Truck,
  ChevronRight,
  Scissors,
  Grip,
} from "lucide-react";
import { fadeInUp } from "@/lib/utils";

const steps = [
  {
    num: "01",
    name: "Printing",
    desc: "High-definition custom logo printing using flexo or offset methods with eco-friendly vegetable-based inks for vibrant, lasting results.",
    icon: Printer,
  },
  {
    num: "02",
    name: "Lamination",
    desc: "Application of matte, gloss, or soft-touch barrier films to enhance durability, tactile quality, and visual appeal.",
    icon: Layers,
  },
  {
    num: "03",
    name: "Punching",
    desc: "Precision die-cutting and creasing to establish accurate fold lines and define the bag's structural profile.",
    icon: Scissors,
  },
  {
    num: "04",
    name: "Side Pasting",
    desc: "Automated side-sealing using food-grade organic adhesives to ensure clean, uniform seams.",
    icon: ChevronRight,
  },
  {
    num: "05",
    name: "Bottom Profiling",
    desc: "Folding bottom envelopes cleanly to distribute weight load and create a stable, self-standing base.",
    icon: Box,
  },
  {
    num: "06",
    name: "Bottom Pasting",
    desc: "Heavy-strength base reinforcement to prevent structural failure under load.",
    icon: ChevronRight,
  },
  {
    num: "07",
    name: "Handle Making",
    desc: "Sizing and twisting natural paper fibers or cutting premium cotton ropes to exact lengths.",
    icon: Grip,
  },
  {
    num: "08",
    name: "Handle Pasting",
    desc: "Securing handle joints with strong-hold reinforced patches for reliable carrying comfort.",
    icon: ChevronRight,
  },
  {
    num: "09",
    name: "Quality Inspection",
    desc: "Individual weight checks, aesthetic audits, and structural stress testing to guarantee consistency.",
    icon: CheckSquare,
  },
  {
    num: "10",
    name: "Packing",
    desc: "Securing bags inside double-corrugated waterproof cartons for safe transit protection.",
    icon: ShieldAlert,
  },
  {
    num: "11",
    name: "Dispatch",
    desc: "Fast logistics delivery to clients across Bangalore, nationwide, and international markets.",
    icon: Truck,
  },
];

export default function Manufacturing() {
  const [activeStep, setActiveStep] = useState(0);

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
          className="text-center mb-16 md:mb-20"
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

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Timeline Sidebar */}
          <div className="lg:col-span-5 max-h-[520px] overflow-y-auto pr-2 scrollbar-thin flex flex-col gap-1.5">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <button
                  key={step.num}
                  onClick={() => setActiveStep(index)}
                  className={`flex items-center gap-4 px-4 py-3.5 rounded-xl text-left border transition-all duration-300 w-full ${
                    isActive
                      ? "bg-surface border-primary/15 text-primary shadow-sm"
                      : "border-transparent hover:bg-surface/40 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span
                    className={`text-xs font-heading font-bold tracking-widest min-w-[24px] ${
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground/50"
                    }`}
                  >
                    {step.num}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </button>
              );
            })}
          </div>

          {/* Detail View */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="p-8 md:p-12 rounded-2xl bg-surface border border-border relative overflow-hidden"
            >
              {/* Background step number */}
              <div className="absolute -bottom-6 -right-4 text-[140px] font-heading font-black text-muted/25 select-none pointer-events-none leading-none">
                {steps[activeStep].num}
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center mb-7 border border-primary/8">
                  {(() => {
                    const Icon = steps[activeStep].icon;
                    return <Icon className="w-7 h-7 text-primary" />;
                  })()}
                </div>

                <span className="text-[11px] uppercase tracking-widest text-primary font-semibold mb-2 block">
                  Step {steps[activeStep].num}
                </span>

                <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
                  {steps[activeStep].name}
                </h3>

                <p className="text-muted-foreground text-sm md:text-base max-w-xl leading-relaxed">
                  {steps[activeStep].desc}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
