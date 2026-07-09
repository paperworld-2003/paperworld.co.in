"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Maximize,
  FileText,
  CheckCircle,
  Sliders,
  Palette,
} from "lucide-react";
import { fadeInUp } from "@/lib/utils";

const customizationOptions = [
  {
    id: "sizes",
    label: "Bag Sizes",
    icon: Maximize,
    title: "Tailored to Fit Your Products",
    description:
      "From miniature jewellery pouches to extra-large luxury apparel carriers, we manufacture bags in exact dimensional tolerances.",
    items: [
      "Small Boutique (8 × 10 × 4 in)",
      "Medium Fashion (12 × 16 × 4 in)",
      "Large Apparel (16 × 22 × 6 in)",
      "Custom Dimensions",
    ],
  },
  {
    id: "gsm",
    label: "Paper GSM",
    icon: Layers,
    title: "Optimal Load Carrying Capacity",
    description:
      "Select from a wide spectrum of paper thicknesses ensuring proper rigidity and premium hand feel.",
    items: [
      "Lightweight (100–120 GSM)",
      "Medium Duty (150–180 GSM)",
      "Heavy Duty (200–250 GSM)",
      "Premium Rigid (300–350 GSM)",
    ],
  },
  {
    id: "types",
    label: "Paper Types",
    icon: FileText,
    title: "Premium Source Materials",
    description:
      "Select from natural rustic krafts to pristine white clays or specialized textured luxury boards from FSC-certified mills.",
    items: [
      "Virgin Brown Kraft",
      "Bleached White Kraft",
      "Premium Art Card",
      "Specialty Textured Papers",
    ],
  },
  {
    id: "handles",
    label: "Handle Options",
    icon: Sliders,
    title: "Comfort & Aesthetic",
    description:
      "The handle defines how customers carry your brand. Choose from clean paper cords to luxury fabric options.",
    items: [
      "Paper Twisted Cord",
      "Flat Folded Paper",
      "Pure Cotton Rope",
      "Satin & Grosgrain Ribbon",
    ],
  },
  {
    id: "finishes",
    label: "Premium Finishes",
    icon: Palette,
    title: "Exquisite Embellishments",
    description:
      "Enhance your brand elements with luxurious surface accents that command attention and denote quality.",
    items: [
      "Matte & Gloss Lamination",
      "Metallic Hot Foil Stamping",
      "Spot UV Highlights",
      "Blind Embossing & Debossing",
    ],
  },
];

export default function Customization() {
  const [activeTab, setActiveTab] = useState("sizes");

  const activeData = customizationOptions.find(
    (opt) => opt.id === activeTab
  )!;

  return (
    <section
      id="customization"
      className="section-padding transition-colors duration-500"
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
            Bespoke Design
          </span>
          <h2 className="mt-5 text-foreground">
            Endless Customization
            <br />
            <span className="gradient-text">Tailored to Your Brand</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-lg mx-auto text-sm md:text-base leading-relaxed">
            Every brand is unique. We provide comprehensive customization to
            align your packaging with your visual identity.
          </p>
        </motion.div>

        {/* Interactive Tabs and Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Tabs Menu */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2.5 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none">
            {customizationOptions.map((opt) => {
              const Icon = opt.icon;
              const isActive = opt.id === activeTab;
              return (
                <button
                  key={opt.id}
                  onClick={() => setActiveTab(opt.id)}
                  className={`flex items-center gap-4 px-5 py-4 rounded-xl text-left font-medium transition-all duration-300 whitespace-nowrap lg:whitespace-normal w-full border ${
                    isActive
                      ? "bg-surface text-primary border-primary/15 shadow-sm"
                      : "text-muted-foreground border-transparent hover:bg-surface/50 hover:text-foreground"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg shrink-0 ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm">{opt.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{
                  duration: 0.35,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="p-8 md:p-12 rounded-2xl bg-surface border border-border relative overflow-hidden"
              >
                {/* Background decorative glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/4 rounded-full blur-3xl pointer-events-none" />

                <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground mb-3">
                  {activeData.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-8 leading-relaxed max-w-2xl">
                  {activeData.description}
                </p>

                {/* Items List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {activeData.items.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.06 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-muted/40 border border-border/60 hover:border-primary/15 transition-all duration-300"
                    >
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm font-medium text-foreground/85">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
