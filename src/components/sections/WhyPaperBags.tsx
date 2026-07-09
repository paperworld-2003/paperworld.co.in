"use client";

import { motion } from "framer-motion";
import { Leaf, RefreshCw, ShieldCheck, Recycle } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils";

const cards = [
  {
    icon: Leaf,
    title: "100% Biodegradable",
    description:
      "Naturally decomposes within weeks without leaving toxic residues, returning safely to earth.",
  },
  {
    icon: RefreshCw,
    title: "Highly Reusable",
    description:
      "Built with high tensile strength and durable seams to ensure multiple cycles of use.",
  },
  {
    icon: ShieldCheck,
    title: "Heavy-Duty Durability",
    description:
      "Engineered with superior thickness (up to 350 GSM) and reinforced bottom pastes to carry heavy loads.",
  },
  {
    icon: Recycle,
    title: "Eco-Recyclable",
    description:
      "Easily processed by standard paper mill systems, enabling circular economy solutions.",
  },
];

export default function WhyPaperBags() {
  return (
    <section
      id="why-paper-bags"
      className="section-padding transition-colors duration-500"
    >
      <div className="container-premium">
        {/* Section header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-primary font-semibold text-xs tracking-[0.25em] uppercase">
            Why Choose Paper?
          </span>
          <h2 className="mt-5 text-foreground">
            The Sustainable Edge
            <br />
            <span className="gradient-text">For Modern Brands</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-lg mx-auto text-sm md:text-base leading-relaxed">
            Align your brand values with premium packaging that supports the
            ecosystem without sacrificing utility.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeInUp}
              className="group relative p-6 md:p-8 rounded-2xl bg-surface border border-border hover:border-primary/15 transition-all duration-500 hover:shadow-[0_12px_40px_var(--shadow-color)] flex flex-col justify-between"
            >
              <div>
                {/* Icon wrapper */}
                <div className="w-11 h-11 rounded-xl bg-muted border border-border flex items-center justify-center mb-6 group-hover:scale-105 group-hover:border-primary/15 transition-all duration-300">
                  <card.icon className="w-5 h-5 text-primary" />
                </div>

                <h3 className="text-base font-heading font-semibold text-foreground mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Card visual detail */}
              <div className="w-8 h-[2px] bg-border group-hover:bg-primary group-hover:w-14 transition-all duration-500 rounded-full mt-8" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
