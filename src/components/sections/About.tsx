"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Target,
  Eye,
  Heart,
  Award,
  Sparkles,
  Leaf,
  Printer,
  Compass,
  Truck,
  Settings,
  ShieldCheck,
  Globe,
  ArrowRight,
  MessageSquare,
  Shirt,
  Gem,
  ShoppingBag,
  Building2,
  UtensilsCrossed,
  Layers,
  Palette,
  CheckCircle2,
  Sliders,
  Scissors,
  Users2,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils";

const stats = [
  { number: "23+", label: "Years Experience (Est. 2003)" },
  { number: "500+", label: "Brands Served Worldwide" },
  { number: "10M+", label: "Bags Manufactured" },
  { number: "100%", label: "Eco-Friendly & Recyclable" },
];

const businessSegments = [
  { icon: Shirt, title: "Garments & Apparel", desc: "Durable high-tensile bags engineered for boutiques & fashion chains." },
  { icon: Gem, title: "Jewellery & Luxury", desc: "Rigid luxury finishes with hot-foil stamping and velvet/ribbon touches." },
  { icon: ShoppingBag, title: "Retail & Boutiques", desc: "Signature shopping carriers that reinforce upscale retail presence." },
  { icon: Globe, title: "E-Commerce & Online", desc: "Reinforced delivery paper packaging ensuring safe parcel transits." },
  { icon: Award, title: "Exhibitions & Events", desc: "High-impact promotional bags designed for expos and trade showcases." },
  { icon: UtensilsCrossed, title: "Food & Hospitality", desc: "Food-grade certified paper packaging for restaurants and luxury resorts." },
  { icon: Building2, title: "Real Estate & Corporate", desc: "Architectural presentation kits for developers and corporate gifting." },
  { icon: Sparkles, title: "Haute Couture & Branding", desc: "Bespoke customized bag designs crafted from scratch for luxury houses." },
];

const customizationOptions = [
  {
    icon: Layers,
    title: "Paper Quality & Feel",
    points: [
      "Virgin Brown Kraft, Bleached & White Kraft",
      "Duplex Board, XL, Saphire, Art Paper & Specialty Textured Boards",
      "Wide GSM options from lightweight to ultra-rigid",
      "100% FSC-certified & biodegradable fibers",
    ],
  },
  {
    icon: Sliders,
    title: "Custom Sizing & Shapes",
    points: [
      "Custom height, width & gusset dimensions",
      "Tailored fit for your specific merchandise",
      "Reinforced top turn-overs and bottom boards",
      "High-load resistance up to 15kg+",
    ],
  },
  {
    icon: Palette,
    title: "Surface Finishing & Effects",
    points: [
      "Gold, Copper & Silver Hot-Foil Stamping",
      "3D Embossing & Subtle Debossing",
      "Spot UV, Drip-off, Gloss, Matte & Velvet Lamination",
      "Precision 1, 2 & Multi color offset, CMYK & Pantone",
    ],
  },
  {
    icon: Scissors,
    title: "Luxury Handle Concepts",
    points: [
      "Hand-inserted Grosgrain & Satin Ribbons",
      "Braided Cotton Ropes with metal eyelets",
      "Twisted Paper Handles for retail efficiency",
      "Ergonomic Die-Cut handles for effortless comfort",
    ],
  },
];

const perfectionSteps = [
  {
    step: "01",
    title: "Design Studio & Pre-Press",
    desc: "Our in-house design team audits your artwork for optimal print clarity, or designs your bespoke bag from scratch based on your vision.",
    icon: Compass,
  },
  {
    step: "02",
    title: "In-House Printing Facility",
    desc: "Equipped with single to multi-color printing presses, delivering vibrant, accurate Pantone colors with direct-factory cost efficiency.",
    icon: Printer,
  },
  {
    step: "03",
    title: "Precision Bag Forming",
    desc: "Methodical automated folding and organic starch bottom-pasting lines guarantee razor-sharp creases and structural integrity.",
    icon: Settings,
  },
  {
    step: "04",
    title: "Supervisor Inspection & Hand-Finishing",
    desc: "Every batch is inspected personally by our quality supervisors. Ribbon handles and luxury embellishments are hand-finished to perfection.",
    icon: ShieldCheck,
  },
];

const timeline = [
  { year: "2003", title: "Company Founded", desc: "Established in Bengaluru with a vision to redefine paper packaging." },
  { year: "2010", title: "Factory Expansion", desc: "Upgraded facility footprint to scale up production and warehousing capabilities." },
  { year: "2015", title: "Advanced Printing", desc: "Installed state-of-the-art multi-color offset and hot-foil press lines." },
  { year: "2018", title: "Automation Upgrade", desc: "Integrated fully automated folding, bottom-pasting, and handle-fitting lines." },
  { year: "2022", title: "Manufacturing Units Added", desc: "Manufacturing units added to significantly expand production capacity and facility infrastructure." },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To deliver premium, eco-friendly Paper Bag solutions that help brands make a lasting impression while minimizing environmental footprint.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To set the global standard for luxury sustainable packaging through continuous manufacturing innovation and absolute craftsmanship.",
  },
  {
    icon: Heart,
    title: "Craftsmanship",
    description: "Every fold, paste, and Gumming is a result of 23 years of manufacturing expertise, meticulous care and strict eye for details.",
  },
  {
    icon: Award,
    title: "Quality Promise",
    description: "We use only Prime Raw-Materials, finest raw stocks and food-grade organic adhesives to build structures that carry load safely and look premium.",
  },
];

export default function About() {
  return (
    <div className="w-full relative min-h-screen">
      {/* ──────────────────────────────────────────────────────────────────────────
          1. HERO ABOUT
          ────────────────────────────────────────────────────────────────────────── */}
      <section id="about" className="section-padding relative overflow-hidden min-h-[100dvh] flex items-center">
        <div className="container-premium grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col gap-6 md:gap-8 text-left"
          >
            <motion.div variants={fadeInUp} className="flex flex-col gap-3">
              <span className="text-primary font-bold text-xs tracking-[0.25em] uppercase">
                About <span className="brand-header-logo font-brand font-black text-sm tracking-widest uppercase"><span className="text-primary">PAPER</span> <span className="text-foreground">WORLD</span></span>
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-foreground leading-[1.08] tracking-tight">
                Crafting Premium Packaging <span className="gradient-text">Since 2003</span>
              </h1>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col gap-4 max-w-2xl">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                <span className="font-brand font-black uppercase"><span className="text-primary">PAPER</span> <span className="text-foreground">WORLD</span></span> stands at the intersection of luxury manufacturing and environmental responsibility. Having manufactured for prestigious brands and independent retailers across India and internationally, we understand that exceptional packaging elevates your brand and makes every customer feel special.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                From luxury retail boutiques and garment empires to gourmet food ventures and corporate developers, we take the stress out of ordering personalized paper bags. Our dedicated team assists you through every step—from initial artwork review to direct factory production and doorstep delivery.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#customization"
                className="px-8 py-4 bg-primary text-white rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase hover:bg-primary-dark transition-all duration-300 hover:shadow-[0_8px_25px_rgba(217,112,40,0.35)] active:scale-[0.98] flex items-center gap-2"
              >
                Customization Options
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-border text-foreground rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase hover:bg-muted transition-all duration-300 active:scale-[0.98]"
              >
                Talk to Our Key Managers
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden bg-beige border border-border shadow-2xl">
              <Image
                src="/products/about-right-design.webp"
                alt="Paper World bespoke luxury paper shopping bags display"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 md:-left-8 glass px-6 py-5 rounded-2xl border border-border flex flex-col shadow-xl z-10"
            >
              <span className="text-3xl md:text-4xl font-heading font-black text-primary leading-none">
                23+
              </span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-foreground mt-1.5">
                Years Mastery (2003–Present)
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────────
          2. GLOBAL BRANDING & PERSONAL CLIENT SERVICE (User Content Integration)
          ────────────────────────────────────────────────────────────────────────── */}
      <section className="section-padding border-y border-border bg-surface/50">
        <div className="container-premium">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mb-12 text-left"
          >
            <span className="text-primary font-bold text-xs tracking-[0.25em] uppercase">
              Brand Impact & Dedication
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-heading font-black text-foreground leading-[1.12]">
              Elevating Brand Recognition <span className="gradient-text">Across India & Worldwide</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-surface border border-border hover:border-primary/25 transition-all shadow-sm flex flex-col gap-4 text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground">
                Superior Brand Presence
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We recognize the huge global impact branded paper bags create. A custom-finished paper bag gives your company a superior image, turning every customer into an ambassador and making their purchase feel memorable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="p-8 rounded-2xl bg-surface border border-border hover:border-primary/25 transition-all shadow-sm flex flex-col gap-4 text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Users2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground">
                Stress-Free Personalized Service
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our team takes the stress out of ordering personalized products. We help you choose the best design, provide transparent and detailed quotes, and maintain regular communication with direct access to our key managers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="p-8 rounded-2xl bg-surface border border-border hover:border-primary/25 transition-all shadow-sm flex flex-col gap-4 text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground">
                Trusted by 500+ Top Retailers
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Having manufactured for leading global retail giants as well as independent Indian boutiques, we ensure that every customer receives the personal care, technical advice, and reliability that define <span className="font-brand font-black"><span className="text-primary">PAPER</span> WORLD</span>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────────
          3. BUSINESS SEGMENTS SERVED
          ────────────────────────────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-premium">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="text-primary font-bold text-xs tracking-[0.25em] uppercase">
              Versatile Industry Scope
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-heading font-black text-foreground">
              Tailored For Every <span className="gradient-text">Business Segment</span>
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground">
              Capable of engineering custom paper carrier solutions across diverse commerce sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {businessSegments.map((seg, i) => {
              const Icon = seg.icon;
              return (
                <motion.div
                  key={seg.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="p-6 rounded-2xl bg-surface border border-border hover:border-primary/30 transition-all hover:shadow-lg flex flex-col gap-3 text-left group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-foreground">
                    {seg.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {seg.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────────
          4. CUSTOMIZATION MATRIX
          ────────────────────────────────────────────────────────────────────────── */}
      <section id="customization" className="section-padding border-y border-border bg-surface/40">
        <div className="container-premium">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="text-primary font-bold text-xs tracking-[0.25em] uppercase">
              Bespoke Specifications
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-heading font-black text-foreground">
              Engineered to Your <span className="gradient-text">Exact Specifications</span>
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground">
              Every detail is fully customizable—from paper quality and sizing to tactile feel, surface effects, handles, and budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customizationOptions.map((opt, idx) => {
              const Icon = opt.icon;
              return (
                <motion.div
                  key={opt.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  className="p-7 rounded-2xl bg-surface border border-border hover:border-primary/30 transition-all shadow-sm flex flex-col gap-4 text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground">
                    {opt.title}
                  </h3>
                  <ul className="flex flex-col gap-2.5 pt-2">
                    {opt.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-xs text-muted-foreground leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────────
          5. THE 4-STEP PERFECTION PROCESS (Design, Print, Bag-Making, Hand-Finish)
          ────────────────────────────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-premium">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-primary font-bold text-xs tracking-[0.25em] uppercase">
              Production Methodology
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-heading font-black text-foreground">
              The Journey to <span className="gradient-text">Flawless Perfection</span>
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground">
              From collaborative artwork design to automated forming and personal supervisor inspection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perfectionSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="relative p-7 rounded-2xl bg-surface border border-border hover:border-primary/30 transition-all shadow-sm flex flex-col text-left group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono font-black text-2xl text-primary/40 group-hover:text-primary transition-colors">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-base font-heading font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────────
          6. STATISTICS
          ────────────────────────────────────────────────────────────────────────── */}
      <section className="section-padding border-y border-border bg-surface/30">
        <div className="container-premium">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 + 0.1 }}
                className="p-6 md:p-8 rounded-2xl bg-surface border border-border text-center hover:border-primary/20 transition-all duration-500 shadow-sm"
              >
                <span className="text-3xl md:text-4xl lg:text-5xl font-heading font-black gradient-text block">
                  {stat.number}
                </span>
                <span className="mt-3 text-xs md:text-sm text-muted-foreground font-semibold block">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────────
          7. MANUFACTURING JOURNEY TIMELINE (2003 - 2022)
          ────────────────────────────────────────────────────────────────────────── */}
      <section className="section-padding overflow-hidden">
        <div className="container-premium flex flex-col items-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="text-primary font-bold text-xs tracking-[0.25em] uppercase">
              Our Milestones
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-heading font-black text-foreground">
              Manufacturing Journey <span className="gradient-text">Through The Years</span>
            </h2>
          </motion.div>

          {/* Timeline Tree */}
          <div className="relative w-full max-w-3xl flex flex-col items-center gap-12">
            <div className="absolute top-0 bottom-0 w-[1px] bg-border" />

            {timeline.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className={`relative flex flex-col md:flex-row items-center w-full ${
                    isEven ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 shadow-sm" />

                  <div
                    className={`w-full md:w-[45%] p-6 rounded-2xl bg-surface border border-border hover:border-primary/20 transition-all duration-300 text-center md:text-left shadow-sm ${
                      isEven ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <span className="text-2xl font-heading font-black gradient-text mb-1 block">
                      {step.year}
                    </span>
                    <h3 className="text-sm font-heading font-bold text-foreground mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────────
          8. MISSION & BRAND VALUES
          ────────────────────────────────────────────────────────────────────────── */}
      <section className="section-padding border-t border-border bg-surface/40">
        <div className="container-premium">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-14"
          >
            <span className="text-primary font-bold text-xs tracking-[0.25em] uppercase">
              Brand Values
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-heading font-black text-foreground">
              Core Principles <span className="gradient-text">Behind Our Craft</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  variants={fadeInUp}
                  className="group p-6 md:p-8 rounded-2xl bg-surface border border-border hover:border-primary/20 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 text-center flex flex-col items-center justify-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-heading font-bold text-foreground mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {val.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────────
          9. CALL TO ACTION: PARTNER WITH KEY MANAGERS
          ────────────────────────────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-14 lg:p-16 rounded-3xl bg-surface border border-border relative overflow-hidden flex flex-col items-center text-center max-w-5xl mx-auto shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none translate-x-1/2 translate-y-1/2" />

            <div className="relative z-10 flex flex-col items-center gap-5 max-w-2xl">
              <span className="text-primary font-bold text-xs tracking-[0.25em] uppercase">
                Let's Partner Up
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground leading-[1.1]">
                Ready to Order Personalized Paper Bags?
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl">
                Get a customized layout design, tailored material samples, and direct guidance from our key managers at the best direct-factory price.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 mt-3 w-full sm:w-auto justify-center">
                <a
                  href="#contact"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:bg-primary-dark hover:shadow-[0_8px_25px_rgba(217,112,40,0.35)] active:scale-[0.98]"
                >
                  Get Detailed Quote
                  <MessageSquare className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/919886699009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 border-2 border-border text-foreground hover:bg-muted rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300"
                >
                  Contact Through WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
