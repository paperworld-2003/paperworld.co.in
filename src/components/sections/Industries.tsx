"use client";

import { motion } from "framer-motion";
import {
  ShoppingBag,
  Gem,
  Shirt,
  Briefcase,
  Award,
  Palette,
  Coffee,
  Utensils,
  Calendar,
  Star,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils";

const industries = [
  {
    name: "Retail",
    icon: ShoppingBag,
    desc: "Premium shopping bags for clothing, electronics, and general merchandise.",
  },
  {
    name: "Jewellery",
    icon: Gem,
    desc: "Compact luxury pouches with gold foil and premium finishes.",
  },
  {
    name: "Garments",
    icon: Shirt,
    desc: "Sturdy high-dimension bags built to carry clothing and suits.",
  },
  {
    name: "Corporate",
    icon: Briefcase,
    desc: "Branded envelopes for folders, brochures, and media kits.",
  },
  {
    name: "Boutiques",
    icon: Award,
    desc: "Textured papers to elevate curated designer collections.",
  },
  {
    name: "Fashion",
    icon: Palette,
    desc: "Modern prints matching seasonal collections for brand recall.",
  },
  {
    name: "Hospitality",
    icon: Coffee,
    desc: "Eco-friendly room service and premium resort souvenirs.",
  },
  {
    name: "Food Industry",
    icon: Utensils,
    desc: "Greaseproof kraft papers for takeaways and bakery items.",
  },
  {
    name: "Events",
    icon: Calendar,
    desc: "Promotional bags for marketing collateral and freebies.",
  },
  {
    name: "Luxury Brands",
    icon: Star,
    desc: "Double-thick art cards with matte lamination and ribbon ties.",
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
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
            Sectors We Serve
          </span>
          <h2 className="mt-5 text-foreground">
            Packaging For
            <br />
            <span className="gradient-text">Every Industry</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-lg mx-auto text-sm md:text-base leading-relaxed">
            No matter your business segment, we design and produce bags
            tailored to your needs.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.name}
                variants={fadeInUp}
                className="group p-6 rounded-2xl bg-surface border border-border hover:border-primary/15 hover:shadow-[0_8px_28px_var(--shadow-color)] transition-all duration-500 hover:-translate-y-0.5 text-center flex flex-col items-center"
              >
                <div className="w-10 h-10 rounded-xl bg-muted group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300 flex items-center justify-center mb-4 text-muted-foreground">
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-sm font-heading font-semibold text-foreground mb-1.5">
                  {ind.name}
                </h3>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  {ind.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
