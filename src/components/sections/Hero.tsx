"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Keep text centered and fade it out as user scrolls down
  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);

  return (
    <section
      id="hero"
      ref={containerRef}
      style={{ height: "150vh" }}
      className="relative"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Hero Content Overlay */}
        <motion.div
          style={{ opacity, scale }}
          className="relative z-10 px-6 w-full md:w-max text-center flex flex-col items-center justify-center mt-32"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-surface/80 backdrop-blur-md border border-border shadow-sm text-xs md:text-sm font-semibold text-primary tracking-widest uppercase">
            The Art of Packaging
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-foreground leading-[1.25] md:leading-[1.3] drop-shadow-sm pb-4">
            Leading Paper Bag{" "}
            <span className="text-primary relative inline-block">
              Manufacturer
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-1 md:h-1.5 bg-primary rounded-full opacity-60"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1.5 }}
              />
            </span>
            <br className="hidden md:inline" /> & Wholesale Supplier
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
