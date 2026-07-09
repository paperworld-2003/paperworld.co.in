"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { products } from "@/data/products";
import { fadeInUp, staggerContainer } from "@/lib/utils";

import { useDynamicGallery } from "@/hooks/useDynamicGallery";

/* ── Image Slider Sub-component ── */
function ProductImageSlider({ slug, initialImage, title }: { slug: string; initialImage: string; title: string }) {
  const gallery = useDynamicGallery(slug, initialImage);
  const [current, setCurrent] = useState(0);

  const goNext = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setCurrent((prev) => (prev + 1) % gallery.length);
    },
    [gallery.length]
  );

  const goPrev = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setCurrent((prev) => (prev - 1 + gallery.length) % gallery.length);
    },
    [gallery.length]
  );

  return (
    <div className="relative aspect-[4/3] bg-beige overflow-hidden group/slider">
      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={gallery[current]}
          alt={`${title} — view ${current + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />

      {/* Navigation arrows — visible on hover */}
      {gallery.length > 1 && (
        <>
          <button
            onClick={goPrev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-md flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:bg-white dark:hover:bg-black/70 shadow-sm border border-white/20"
          >
            <ChevronLeft className="w-4 h-4 text-charcoal dark:text-white" />
          </button>
          <button
            onClick={goNext}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-md flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:bg-white dark:hover:bg-black/70 shadow-sm border border-white/20"
          >
            <ChevronRight className="w-4 h-4 text-charcoal dark:text-white" />
          </button>
        </>
      )}

      {/* Dot indicators */}
      {gallery.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
          {gallery.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrent(idx);
              }}
              aria-label={`View image ${idx + 1}`}
              className={`rounded-full transition-all duration-300 ${
                idx === current
                  ? "w-5 h-1.5 bg-primary"
                  : "w-1.5 h-1.5 bg-white/60 hover:bg-white/90"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Main Products Section ── */
export default function Products() {
  return (
    <section
      id="products"
      className="section-padding transition-colors duration-500 scroll-mt-20"
    >
      <div className="container-premium">
        {/* Section header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl mb-16 md:mb-20"
        >
          <span className="text-primary font-semibold text-xs tracking-[0.25em] uppercase">
            Our Collection
          </span>
          <h2 className="mt-5 text-foreground leading-[1.08]">
            Premium Packaging
            <br />
            <span className="gradient-text">Solutions</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
            Explore our curated range of paper bags — from everyday kraft to
            ultra-luxury bespoke packaging.
          </p>
        </motion.div>

        {/* Product Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.slug}
              variants={fadeInUp}
              className="group flex flex-col rounded-2xl bg-surface border border-border overflow-hidden transition-all duration-500 hover:border-primary/15 hover:shadow-[0_16px_48px_var(--shadow-lg)]"
            >
              {/* Image Slider */}
              <ProductImageSlider
                slug={product.slug}
                initialImage={product.image}
                title={product.title}
              />

              <div className="p-6 md:p-8 flex flex-col justify-between flex-1 gap-5">
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {product.shortDescription}
                  </p>
                </div>

                <Link
                  href={`/products/${product.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300 self-start"
                >
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
