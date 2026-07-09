"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeInUp } from "@/lib/utils";

const faqs = [
  {
    q: "What is the minimum order quantity (MOQ) for custom bags?",
    a: "Our standard minimum order quantity for fully custom bags varies from 1,000 to 5,000 bags depending on the bag category, materials, and sizes chosen. For ready-to-deliver bags, we can accommodate smaller requirements.",
  },
  {
    q: "What printing options do you support?",
    a: "We offer flexographic printing for bulk orders, high-definition offset CMYK for complex graphics, screen printing for luxury details, and digital printing. We also specialize in hot foil stamping, blind embossing, debossing, and Spot UV varnishes.",
  },
  {
    q: "Can I choose custom sizes and handle styles?",
    a: "Absolutely. All our paper bags can be fully tailored to your requested width, height, and gusset depth. We offer twisted paper handles, flat folded paper handles, premium cotton cords, and elegant satin/grosgrain ribbons.",
  },
  {
    q: "What paper GSM ranges are available?",
    a: "We provide paper thickness starting from 100 GSM kraft papers, going up to 150/180/200 GSM options, and luxury rigid art cards in 250, 300, and 350 GSM ranges. Our team will recommend the optimal GSM for your products.",
  },
  {
    q: "How long does production and delivery take?",
    a: "Standard customized orders are completed within 10–15 business days following design approval. Ready-to-deliver plain orders can be shipped within 24 hours.",
  },
  {
    q: "Are your paper bags environmentally friendly?",
    a: "Yes, 100%. We source papers from FSC-certified mills, print with water-based vegetable inks, and use biodegradable starch adhesives. We also offer plastic-free lamination alternatives.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="section-padding transition-colors duration-500"
    >
      <div className="container-premium max-w-3xl">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-primary font-semibold text-xs tracking-[0.25em] uppercase">
            Inquiries
          </span>
          <h2 className="mt-5 text-foreground">
            Frequently Asked
            <br />
            <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        {/* Accordions */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-border bg-surface overflow-hidden transition-colors duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-heading font-semibold text-foreground text-sm md:text-base hover:text-primary transition-colors duration-300 gap-4"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    >
                      <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export { faqs };
