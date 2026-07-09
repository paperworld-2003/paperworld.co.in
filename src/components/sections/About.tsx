"use client";

import { motion } from "framer-motion";
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
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils";

const stats = [
  { number: "17+", label: "Years Experience" },
  { number: "500+", label: "Satisfied Clients" },
  { number: "10M+", label: "Bags Manufactured" },
  { number: "100%", label: "Eco Friendly" },
];

const features = [
  {
    icon: Sparkles,
    title: "Premium Materials",
    description: "Sourced from FSC-certified mills, ensuring exceptional texture, strength, and visual appeal.",
  },
  {
    icon: Leaf,
    title: "Eco Friendly",
    description: "100% biodegradable and recyclable papers, printed with non-toxic water-based organic vegetable inks.",
  },
  {
    icon: Printer,
    title: "Luxury Printing",
    description: "High-definition offset and flexographic printing, with gold foil stamping, debossing, and spot UV options.",
  },
  {
    icon: Compass,
    title: "Custom Designs",
    description: "Fully customizable dimensions, paper thickness, handle variants, and structural designs tailored to your brand.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Streamlined automated production lines ensuring swift turnaround times and timely dispatch.",
  },
  {
    icon: Settings,
    title: "Bulk Manufacturing",
    description: "Advanced facility scale designed to handle high-capacity requirements without compromising quality.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Control",
    description: "Rigorous step-by-step inspections testing load limits, bottom strength, and print consistency.",
  },
  {
    icon: Globe,
    title: "Export Standard",
    description: "Premium double-corrugated transit packaging complying with international shipment protocols.",
  },
];

const timeline = [
  { year: "2007", title: "Company Founded", desc: "Established in Bengaluru with a vision to redefine paper packaging." },
  { year: "2012", title: "Factory Expansion", desc: "Upgraded facility footprint to scale up production and warehousing capabilities." },
  { year: "2018", title: "Advanced Printing", desc: "Installed state-of-the-art multi-color offset and hot-foil press lines." },
  { year: "2022", title: "Automation Upgrade", desc: "Integrated fully automated folding, bottom-pasting, and handle-fitting lines." },
  { year: "2025", title: "Trusted Across India", desc: "Affiliated packaging partner for 500+ premium domestic and export brands." },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To deliver premium, eco-friendly paper packaging solutions that help brands make a lasting impression while minimizing environmental footprint.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To set the global standard for luxury sustainable packaging through continuous manufacturing innovation and absolute craftsmanship.",
  },
  {
    icon: Heart,
    title: "Craftsmanship",
    description: "Every fold, paste, and stitch is a result of years of manufacturing expertise, meticulous care, and strict eye for details.",
  },
  {
    icon: Award,
    title: "Quality Promise",
    description: "We use only the finest raw stocks and food-grade organic adhesives to build structures that carry load safely and look premium.",
  },
];

export default function About() {
  return (
    <div className="w-full relative min-h-screen">
      {/* 1. HERO ABOUT */}
      <section id="about" className="section-padding relative overflow-hidden">
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
              <span className="text-primary font-semibold text-xs tracking-[0.25em] uppercase">
                About Paper World
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-[1.08]">
                Crafting Premium Packaging <span className="gradient-text">Since 2007</span>
              </h1>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col gap-4 max-w-2xl">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Paper World stands at the intersection of luxury manufacturing and environmental responsibility. Over the last 17 years, we have built a reputation as Bengaluru's premier source for customized, high-quality shopping paper bags, serving upscale retailers, fashion boutiques, gourmet food providers, and event coordinators.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                By maintaining a state-of-the-art facility equipped with precision automation, we convert sustainable raw paper stocks into branded packages that tell your story. Our commitment to design excellence and strict QA processes ensures your bags look immaculate and perform reliably under load.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#story"
                className="px-8 py-4 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-[0_8px_25px_rgba(217,112,40,0.3)] active:scale-[0.98] flex items-center gap-2"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-border text-foreground rounded-xl text-sm font-semibold hover:bg-muted/50 transition-all duration-300 active:scale-[0.98]"
              >
                Contact Us
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
            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden bg-beige border border-border shadow-xl">
              <img
                src="/products/about-right-design.png"
                alt="Premium luxury packaging display"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 md:-left-8 glass px-6 py-5 rounded-2xl border border-border flex flex-col shadow-lg z-10"
            >
              <span className="text-2xl md:text-3xl font-heading font-bold text-primary leading-none">
                17+
              </span>
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-foreground mt-1.5">
                Years Experience
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. COMPANY STORY */}
      <section id="story" className="section-padding border-y border-border">
        <div className="container-premium">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-xl mb-12 md:mb-16"
          >
            <span className="text-primary font-semibold text-xs tracking-[0.25em] uppercase">
              Our Story
            </span>
            <h2 className="mt-5 text-foreground leading-[1.08]">
              The History of
              <br />
              <span className="gradient-text">Manufacturing Excellence</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-12 relative p-8 md:p-12 rounded-3xl border border-border bg-surface overflow-hidden">
              {/* Decorative quote mark */}
              <span className="absolute -top-10 -left-6 text-[180px] font-serif font-bold text-primary/5 select-none pointer-events-none leading-none">
                “
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Founded in 2007, Paper World was born out of a desire to replace single-use plastic carriers with strong, sustainably sourced paper bags. What began as a modest workshop in Bangalore has expanded into an advanced manufacturing facility driven by modern printing technology and automated lines. Over the years, we have stayed committed to the principle that packaging is an extension of a brand’s values.
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Every step of our history has been defined by quality and environmental care. By integrating water-based organic vegetable inks, FSC-certified forests paper sheets, and fully organic starch glues, we produce packaging that is safe for the ecosystem. Today, we stand proud as Bengaluru's trusted partner for over 500 brands, delivering export-standard carry options nationwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STATISTICS */}
      <section className="section-padding">
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
                className="p-6 md:p-8 rounded-2xl bg-surface border border-border text-center hover:border-primary/15 transition-all duration-500 hover:shadow-[0_8px_28px_var(--shadow-color)]"
              >
                <span className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold gradient-text block">
                  {stat.number}
                </span>
                <span className="mt-3 text-xs md:text-sm text-muted-foreground font-medium block">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="section-padding border-y border-border">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
            {/* Split Left */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col gap-5 text-left lg:pr-10"
            >
              <span className="text-primary font-semibold text-xs tracking-[0.25em] uppercase">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-heading font-bold text-foreground leading-[1.1]">
                Uncompromising Standards in Every Bag
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                From raw stock sourcing to international freight packaging, we provide tailored parameters that support your packaging requirements.
              </p>
            </motion.div>

            {/* Split Right (Feature Grid) */}
            <div className="lg:col-span-7">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
              >
                {features.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      variants={fadeInUp}
                      className="group p-6 rounded-2xl bg-surface border border-border hover:border-primary/15 transition-all duration-500 hover:shadow-[0_8px_28px_var(--shadow-color)] flex flex-col gap-4 text-left"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/8 text-primary flex items-center justify-center group-hover:bg-primary/12 transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-heading font-semibold text-foreground mb-1.5">
                          {feature.title}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MANUFACTURING JOURNEY */}
      <section className="section-padding overflow-hidden">
        <div className="container-premium flex flex-col items-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="text-primary font-semibold text-xs tracking-[0.25em] uppercase">
              Timeline
            </span>
            <h2 className="mt-5 text-foreground">
              Manufacturing Journey
              <br />
              <span className="gradient-text">Through The Years</span>
            </h2>
          </motion.div>

          {/* Timeline Tree */}
          <div className="relative w-full max-w-3xl flex flex-col items-center gap-12">
            {/* Center line */}
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
                  {/* Central Node Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 shadow-sm" />

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-[45%] p-6 rounded-2xl bg-surface border border-border hover:border-primary/15 transition-all duration-300 text-center md:text-left ${
                      isEven ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <span className="text-2xl font-heading font-black gradient-text mb-1 block">
                      {step.year}
                    </span>
                    <h3 className="text-sm font-heading font-semibold text-foreground mb-2">
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

      {/* 6. MISSION VISION */}
      <section className="section-padding border-t border-border">
        <div className="container-premium">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="text-primary font-semibold text-xs tracking-[0.25em] uppercase">
              Brand Values
            </span>
            <h2 className="mt-5 text-foreground">
              Core Principles
              <br />
              <span className="gradient-text">Behind Our Brand</span>
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
                  className="group p-6 md:p-8 rounded-2xl bg-surface border border-border hover:border-primary/15 transition-all duration-500 hover:shadow-[0_8px_28px_var(--shadow-color)] hover:-translate-y-1 text-center flex flex-col items-center justify-start glass"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/8 text-primary flex items-center justify-center mb-6 group-hover:bg-primary/12 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-heading font-semibold text-foreground mb-3">
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

      {/* 7. CALL TO ACTION */}
      <section className="section-padding">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-14 lg:p-16 rounded-3xl bg-surface border border-border relative overflow-hidden flex flex-col items-center text-center max-w-5xl mx-auto shadow-xl"
          >
            {/* Background glowing gradients */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none translate-x-1/2 translate-y-1/2" />

            <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl">
              <span className="text-primary font-semibold text-xs tracking-[0.25em] uppercase">
                Let's Partner Up
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground leading-[1.1]">
                Ready to Elevate Your Brand Packaging?
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl">
                Get a customized layout design and quotation tailored directly to your volume needs and brand budget.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto justify-center">
                <a
                  href="#contact"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-primary-dark hover:shadow-[0_8px_25px_rgba(217,112,40,0.3)] active:scale-[0.98]"
                >
                  Get Quote
                  <MessageSquare className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/919886699009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground hover:bg-muted/50 rounded-xl text-sm font-semibold transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
