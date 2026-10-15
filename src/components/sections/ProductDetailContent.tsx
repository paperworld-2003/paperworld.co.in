"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Check,
  ChevronRight,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import { products, type Product } from "@/data/products";
import { fadeInUp } from "@/lib/utils";

import { useDynamicGallery } from "@/hooks/useDynamicGallery";

/* ── Product Gallery with Thumbnail Strip ── */
function ProductGallery({ product }: { product: Product }) {
  const gallery = useDynamicGallery(product.slug, product.image);
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-beige border border-border">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIdx}
            src={gallery[activeIdx]}
            alt={`${product.title} — view ${activeIdx + 1}`}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Thumbnail Strip */}
      {gallery.length > 1 && (
        <div className="flex gap-3">
          {gallery.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              aria-label={`View image ${idx + 1}`}
              className={`relative w-20 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                idx === activeIdx
                  ? "border-primary shadow-sm"
                  : "border-border opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={img}
                alt={`${product.title} thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Spec Row Component ── */
function SpecRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1 py-4 px-5 border-b border-border/60 last:border-b-0">
      <span className="text-[11px] uppercase font-semibold tracking-wider text-muted-foreground">
        {label}
      </span>
      <span className="text-sm font-medium text-foreground leading-relaxed">
        {value}
      </span>
    </div>
  );
}

/* ── Page Content (Client Component) ── */
export default function ProductDetailContent({
  product,
  relatedProducts,
}: {
  product: Product;
  relatedProducts: Product[];
}) {
  return (
    <main className="min-h-screen pt-28 pb-20 bg-background relative z-10 transition-colors duration-500">
      <div className="container-premium">
        {/* Breadcrumb */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mb-10"
        >
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            All Products
          </Link>
        </motion.div>

        {/* Main Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Gallery (5 cols) */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5"
          >
            <ProductGallery product={product} />
          </motion.div>

          {/* Product Info (7 cols) */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            {/* Title & Description */}
            <div>
              <span className="text-primary font-semibold text-xs tracking-[0.2em] uppercase block mb-3">
                Product Category
              </span>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-5">
                {product.title}
              </h1>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
                {product.description}
              </p>
            </div>

            {/* Technical Specifications */}
            <div className="rounded-2xl border border-border bg-surface overflow-hidden">
              <div className="bg-muted/50 px-5 py-3.5 border-b border-border">
                <h3 className="font-heading font-semibold text-sm text-foreground uppercase tracking-wider">
                  Specifications
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <SpecRow
                  label="Paper Materials"
                  value={product.specifications.paperTypes.join(", ")}
                />
                <SpecRow
                  label="Thickness (GSM)"
                  value={product.specifications.gsm.join(", ")}
                />
                <SpecRow
                  label="Dimensions"
                  value={
                    <div className="flex flex-col gap-1 pt-0.5">
                      {product.specifications.sizes.map((size, idx) => (
                        <span key={idx} className="block leading-relaxed">
                          {size}
                        </span>
                      ))}
                    </div>
                  }
                />
                <SpecRow
                  label="Handle Options"
                  value={product.specifications.handles.join(", ")}
                />
                <SpecRow
                  label="Printing"
                  value={product.specifications.printing.join(", ")}
                />
                <SpecRow
                  label="Finishes"
                  value={product.specifications.finishes.join(", ")}
                />
              </div>
            </div>

            {/* Applications */}
            <div>
              <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-foreground mb-4">
                Ideal Applications
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((app) => (
                  <span
                    key={app}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-muted/60 text-xs font-medium border border-border text-foreground"
                  >
                    <Check className="w-3 h-3 text-primary shrink-0" />
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href={`/?product=${encodeURIComponent(product.title)}#contact`}
                className="flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-[0_8px_25px_rgba(217,112,40,0.3)] active:scale-[0.98]"
              >
                Request a Quote
                <MessageSquare className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/919886699009"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 border border-border hover:border-emerald-500/30 text-foreground hover:text-emerald-600 rounded-xl text-sm font-semibold transition-all duration-300"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        <div className="border-t border-border pt-16">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-10">
            Explore Other Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <RelatedProductCard key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

function RelatedProductCard({ p }: { p: Product }) {
  const gallery = useDynamicGallery(p.slug, p.image);
  const imageSrc = gallery.length > 0 ? gallery[0] : p.image;

  return (
    <Link
      href={`/products/${p.slug}`}
      className="group border border-border bg-surface rounded-2xl overflow-hidden hover:border-primary/15 hover:shadow-[0_12px_36px_var(--shadow-lg)] transition-all duration-500 flex flex-col"
    >
      <div className="aspect-[4/3] bg-beige overflow-hidden">
        <img
          src={imageSrc}
          alt={p.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-6 flex flex-col gap-3">
        <h4 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
          {p.title}
        </h4>
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
          {p.shortDescription}
        </p>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary tracking-wider uppercase group-hover:gap-2 transition-all">
          View Details
          <ChevronRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </Link>
  );
}

