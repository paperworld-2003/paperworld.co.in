"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils";

const testimonials = [
  {
    title: "Exquisite Packaging for Luxury Hospitality",
    quote:
      "PAPER WORLD has been exceptional! The quality of their custom bags matches our luxury standards perfectly. Their attention to detail, premium handle finishing, and punctual delivery make them our trusted packaging partner.",
    author: "JW Marriott",
    role: "Luxury Hospitality",
    rating: 5,
  },
  {
    title: "Superior Load Strength & Print Precision",
    quote:
      "One of the finest packaging manufacturers in Bangalore. The structural strength and high-definition printing quality they deliver is outstanding. They handle our high-volume retail orders with remarkable consistency.",
    author: "Wildcraft",
    role: "Garments & Travel Gear",
    rating: 5,
  },
  {
    title: "Precision Craftsmanship for Premium Retail",
    quote:
      "For executive accessories and luxury gifting, packaging aesthetics are everything. PAPER WORLD understood our brand guidelines flawlessly, delivering rich textures and immaculate hot-foil detailing that our customers love.",
    author: "William Penn",
    role: "Fine Writing & Luxury Retail",
    rating: 5,
  },
  {
    title: "Food-Grade Quality & Elegant Presentation",
    quote:
      "Customer-friendly team with great craftsmanship. From organic food-grade adhesives to custom artisanal bag profiles, their packaging elevates our confectionery presentation across all boutique stores.",
    author: "Smoor",
    role: "Chocolates & Cafés",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-padding transition-colors duration-500 overflow-hidden relative"
    >
      <div className="container-premium relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-primary font-semibold text-xs tracking-[0.25em] uppercase">
            Feedback
          </span>
          <h2 className="mt-5 text-foreground">
            What Our Clients
            <br />
            <span className="gradient-text">Are Saying</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="p-6 md:p-8 rounded-2xl bg-surface border border-border flex flex-col justify-between hover:border-primary/15 hover:shadow-[0_12px_36px_var(--shadow-color)] transition-all duration-500 relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/5 pointer-events-none" />

              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-primary text-primary"
                    />
                  ))}
                </div>

                <h3 className="text-base font-heading font-semibold text-foreground mb-3">
                  &ldquo;{t.title}&rdquo;
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="border-t border-border pt-4 flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-primary font-bold block">
                    {t.author}
                  </span>
                  <span className="text-[11px] text-muted-foreground font-medium">
                    {t.role}
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold border border-primary/20">
                  Verified Client
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
export { testimonials };
