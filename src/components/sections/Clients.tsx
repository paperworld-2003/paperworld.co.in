"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/utils";

const row1 = [
  "Enamor",
  "Wildcraft",
  "Jockey",
  "Bugatti",
  "Speedo",
  "Fila",
  "Identify",
  "Aukera",
  "Raj Diamonds",
  "Bhima Jewellers",
  "William Penn",
  "Sheaffer",
  "Bose",
  "Imagine",
  "Harsha",
  "Sancha Tea Boutique",
  "Hard Rock Cafe",
  "JW Marriott",
];

const row2 = [
  "Toit",
  "Smoor",
  "Communiti",
  "The Oberoi",
  "Hatti Kaapi",
  "Amintiri",
  "Happy Belly",
  "Lamara Patisserie",
  "Fossil",
  "Q&Q",
  "Toys RVS",
  "LEGO",
  "KLM",
  "Deepam Silks",
  "P N Rao",
  "Velvet Sheen",
  "Prestige - The Man's Store",
  "ISKCON",
];

interface MarqueeRowProps {
  brands: string[];
  direction?: "left" | "right";
}

function MarqueeRow({ brands, direction = "left" }: MarqueeRowProps) {
  const animationClass =
    direction === "left" ? "animate-marquee" : "animate-marquee-reverse";

  return (
    <div className="flex w-full overflow-hidden py-2 select-none">
      <div
        className={`flex shrink-0 items-center ${animationClass}`}
        style={{
          animationName: direction === "left" ? "marquee" : "marquee-reverse",
          animationDuration: "48s",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          willChange: "transform",
        }}
      >
        {/* Track 1 */}
        <div className="flex shrink-0 items-center gap-10 md:gap-14 pr-10 md:pr-14">
          {brands.map((brand, index) => (
            <div key={`track1-${brand}-${index}`} className="flex items-center gap-10 md:gap-14">
              <span
                suppressHydrationWarning
                className="text-lg md:text-xl font-heading font-semibold tracking-wide text-foreground/35 hover:text-primary transition-colors duration-300 select-none cursor-default"
              >
                {brand}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-foreground/25 shrink-0 select-none" />
            </div>
          ))}
        </div>

        {/* Track 2 for seamless infinite loop */}
        <div className="flex shrink-0 items-center gap-10 md:gap-14 pr-10 md:pr-14" aria-hidden="true">
          {brands.map((brand, index) => (
            <div key={`track2-${brand}-${index}`} className="flex items-center gap-10 md:gap-14">
              <span
                suppressHydrationWarning
                className="text-lg md:text-xl font-heading font-semibold tracking-wide text-foreground/35 hover:text-primary transition-colors duration-300 select-none cursor-default"
              >
                {brand}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-foreground/25 shrink-0 select-none" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Clients() {
  return (
    <section
      id="clients"
      className="py-16 md:py-20 bg-muted/30 overflow-hidden border-y border-border transition-colors duration-500"
    >
      <div className="container-premium mb-8 md:mb-10">
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

      {/* Two-row Infinite Scrolling Marquee */}
      <div className="relative w-full overflow-hidden flex flex-col gap-3 md:gap-5">
        {/* Soft edge fade gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-36 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-36 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Row 1: Moves Left */}
        <MarqueeRow brands={row1} direction="left" />

        {/* Row 2: Moves Right */}
        <MarqueeRow brands={row2} direction="right" />
      </div>
    </section>
  );
}

export const clients = [...row1, ...row2];
