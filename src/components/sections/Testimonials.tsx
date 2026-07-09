"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils";

const testimonials = [
  {
    title: "Amazing Quality",
    quote:
      "Paper World has been amazing! The quality of the bags is really good. They understood our brand guidelines and designed our layout very neatly, and the print quality is the best we got.",
    author: "Smoor Chocolates",
    rating: 5,
  },
  {
    title: "Best Paper Bags Provider",
    quote:
      "One of the best paper bag providers in Bangalore, the print quality they give is the best. It's almost been a year working with them. Timely delivery & flexibility to take on orders in the last minute.",
    author: "Ruosh Premium",
    rating: 5,
  },
  {
    title: "Friendly Staff & Great Effort",
    quote:
      "Customer friendly staff, I like this place to visit again and again for printing my company bags. Special thanks to the team for their great effort to finish my job in the given time.",
    author: "Memoriesalive Gifts",
    rating: 5,
  },
  {
    title: "Highly Responsive & Creative",
    quote:
      "I have worked with Paper World on merchandise production for many events. The team has been highly responsive and responsible in addition to suggesting the best options for our needs.",
    author: "Dream Desert Events",
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

              <div className="border-t border-border pt-4">
                <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                  {t.author}
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
