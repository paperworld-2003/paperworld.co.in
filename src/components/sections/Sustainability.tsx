"use client";

import { motion } from "framer-motion";
import { Leaf, Award, Recycle, ShieldCheck } from "lucide-react";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/utils";

const items = [
  {
    title: "FSC Certified Paper",
    desc: "Raw papers sourced exclusively from FSC-certified sustainable forest mills, guaranteeing responsible reforestation.",
    icon: Leaf,
  },
  {
    title: "Vegetable-Based Inks",
    desc: "Organic soy and water-based printing inks eliminate toxic heavy metal chemicals from packaging waste.",
    icon: Award,
  },
  {
    title: "Recyclable Handles",
    desc: "Paper cords and twisted handles constructed from recycled kraft fibers, keeping the entire bag organic.",
    icon: Recycle,
  },
  {
    title: "Zero Plastic Option",
    desc: "Modern starch-based aqueous coatings that dissolve naturally, keeping bags fully recyclable.",
    icon: ShieldCheck,
  },
];

export default function Sustainability() {
  return (
    <section
      id="sustainability"
      className="section-padding transition-colors duration-500 overflow-hidden relative scroll-mt-20"
    >
      <div className="container-premium relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Narrative description */}
          <div className="lg:col-span-6">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="text-primary font-semibold text-xs tracking-[0.25em] uppercase">
                Ecological Responsibility
              </span>
              <h2 className="mt-5 text-foreground mb-6">
                Redefining Packaging
                <br />
                <span className="gradient-text">With Green Materials</span>
              </h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-5">
                At Paper World, sustainability isn&apos;t just a tagline — it
                is a core manufacturing standard. We recognize that packaging
                acts as your brand&apos;s physical footprint, which is why we
                refine our raw supplies to be fully biodegradable and circular.
              </p>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                By investing in high-grade water-based printing and natural
                starch adhesives, we ensure every bag carries your goods
                without harming local ecosystems.
              </p>
            </motion.div>
          </div>

          {/* Green Pillars */}
          <div className="lg:col-span-6">
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-2xl bg-surface border border-border hover:border-primary/15 hover:shadow-[0_8px_28px_var(--shadow-color)] transition-all duration-500"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/8 text-primary flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-heading font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
