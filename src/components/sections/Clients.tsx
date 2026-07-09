"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/utils";

const clients = [
  "Smoor Chocolate",
  "Ruosh Premium",
  "Memoriesalive Gifts",
  "Dream Desert Events",
  "Luxury Boutiques",
  "Royal Garments",
  "Classic Gifting",
  "Craft & Carton",
  "Smoor Chocolate",
  "Ruosh Premium",
  "Memoriesalive Gifts",
  "Dream Desert Events",
  "Luxury Boutiques",
  "Royal Garments",
  "Classic Gifting",
  "Craft & Carton",
];

export default function Clients() {
  return (
    <section
      id="clients"
      className="py-14 bg-muted/30 overflow-hidden border-y border-border transition-colors duration-500"
    >
      <div className="container-premium mb-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-primary font-semibold text-xs tracking-[0.3em] uppercase">
            Trusted By Leading Brands
          </span>
        </motion.div>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex w-max gap-14 whitespace-nowrap animate-marquee py-4">
          {clients.map((client, index) => (
            <span
              key={`${client}-${index}`}
              className="text-lg md:text-xl font-heading font-bold tracking-wide text-foreground/25 hover:text-primary transition-colors duration-300 select-none cursor-default"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
export { clients };
