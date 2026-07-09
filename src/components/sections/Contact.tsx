"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageCircle, CheckCircle, AlertTriangle } from "lucide-react";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/utils";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    industry: "",
    product: "",
    quantity: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const productParam = searchParams.get("product");
      if (productParam) {
        setFormState((prev) => ({
          ...prev,
          product: "Others",
          message: `I am interested in getting a quote for: ${productParam}.\n\nAdditional details: `,
        }));
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Standard Form Validation
    if (!formState.name || !formState.phone || !formState.email || !formState.quantity || !formState.message) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields marked with *.");
      return;
    }

    try {
      // Using Web3Forms public API for backend-free email receipt
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE", // Replace with actual Web3Forms access key
          subject: `Paper World Quote Request from ${formState.name}`,
          from_name: "Paper World Website",
          ...formState,
        }),
      });

      // Special check to notify user if API key is not connected
      if ("YOUR_ACCESS_KEY_HERE" === "YOUR_ACCESS_KEY_HERE") {
        await new Promise((resolve) => setTimeout(resolve, 800)); // simulate network delay
        setStatus("error");
        setErrorMessage("Backend API is not connected. Please provide a valid Web3Forms Access Key to receive emails.");
        return;
      }

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormState({
          name: "",
          company: "",
          phone: "",
          email: "",
          industry: "",
          product: "",
          quantity: "",
          message: "",
        });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Failed to send quote request. Please check your internet connection.");
    }
  };

  return (
    <section id="contact" className="section-padding transition-colors duration-500 overflow-hidden relative scroll-mt-20">
      {/* Decorative background glow */}
      <div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-premium relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-primary font-semibold text-xs tracking-[0.25em] uppercase">Partnership</span>
          <h2 className="mt-5 text-foreground">
            Get Your Free Quote
            <br />
            <span className="gradient-text">& Custom Consultation</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-5 md:gap-6"
            >
              <h3 className="text-2xl font-heading font-bold text-foreground">
                Let&apos;s Design Your Bag
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Contact our sales and design desks directly. Share your logo and product specifications, and we will formulate a quote matching your brand budget.
              </p>

              {/* Direct Info Blocks */}
              <div className="flex flex-col gap-4 md:gap-5 mt-4">
                <div className="flex gap-4 items-start p-4 md:p-5 rounded-xl bg-surface border border-border">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-heading font-bold text-foreground mb-1">Factory Address</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      #527/2, 26th Cross, Bhagyalakshmi Tent road, K.P. Agrahara, Bhuvaneshwarinagar, Magadi Road, Bengaluru 560023, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 md:p-5 rounded-xl bg-surface border border-border">
                  <Phone className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-heading font-bold text-foreground mb-1">Direct Sales Helpline</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      +91 9886699009 | +91 8884984499 | +91 80 23118088
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 md:p-5 rounded-xl bg-surface border border-border">
                  <Mail className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-heading font-bold text-foreground mb-1">Inquiries Email</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      reachus@paperworld.co.in
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

          {/* Form (7 cols) */}
          <div className="lg:col-span-7">
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-2xl bg-surface border border-border relative overflow-hidden"
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                      {/* Name */}
                      <div className="flex flex-col gap-2.5">
                        <label htmlFor="name" className="text-xs font-semibold uppercase text-muted-foreground">
                          Your Name*
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="e.g. Rahul Kumar"
                          className="w-full px-5 py-4 rounded-xl border border-border bg-muted/30 focus:border-primary/50 text-foreground text-sm transition-colors duration-300 outline-none"
                        />
                      </div>

                      {/* Company */}
                      <div className="flex flex-col gap-2.5">
                        <label htmlFor="company" className="text-xs font-semibold uppercase text-muted-foreground">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          placeholder="e.g. Smoor Chocolate"
                          className="w-full px-5 py-4 rounded-xl border border-border bg-muted/30 focus:border-primary/50 text-foreground text-sm transition-colors duration-300 outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                      {/* Phone */}
                      <div className="flex flex-col gap-2.5">
                        <label htmlFor="phone" className="text-xs font-semibold uppercase text-muted-foreground">
                          Phone Number*
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="e.g. +91 9886699009"
                          className="w-full px-5 py-4 rounded-xl border border-border bg-muted/30 focus:border-primary/50 text-foreground text-sm transition-colors duration-300 outline-none"
                        />
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-2.5">
                        <label htmlFor="email" className="text-xs font-semibold uppercase text-muted-foreground">
                          Email Address*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="e.g. reachus@paperworld.co.in"
                          className="w-full px-5 py-4 rounded-xl border border-border bg-muted/30 focus:border-primary/50 text-foreground text-sm transition-colors duration-300 outline-none"
                        />
                      </div>
                    </div>

                    {/* Specifications Selection (2 columns) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                      {/* Industry Dropdown */}
                      <div className="flex flex-col gap-2.5">
                        <label htmlFor="industry" className="text-xs font-semibold uppercase text-muted-foreground">
                          Industry
                        </label>
                        <select
                          id="industry"
                          name="industry"
                          value={formState.industry}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-xl border border-border bg-muted/30 focus:border-primary/50 text-foreground text-sm transition-colors duration-300 outline-none appearance-none"
                        >
                          <option value="">Select Industry</option>
                          <option value="Retail">Retail Stores</option>
                          <option value="Jewellery">Jewellery Brands</option>
                          <option value="Garments">Garments & Textile</option>
                          <option value="Corporate">Corporate Events</option>
                          <option value="Hospitality">Hotel & Food</option>
                          <option value="Others">Others</option>
                        </select>
                      </div>

                      {/* Product Requirement */}
                      <div className="flex flex-col gap-2.5">
                        <label htmlFor="product" className="text-xs font-semibold uppercase text-muted-foreground">
                          Product Type
                        </label>
                        <select
                          id="product"
                          name="product"
                          value={formState.product}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-xl border border-border bg-muted/30 focus:border-primary/50 text-foreground text-sm transition-colors duration-300 outline-none"
                        >
                          <option value="">Select Bag Type</option>
                          <option value="Ready to Deliver">Ready to Deliver Bags</option>
                          <option value="Brown Kraft">Brown Kraft Bags</option>
                          <option value="Bleached Kraft">Bleached Kraft Bags</option>
                          <option value="Mid Premium">Mid Premium Bags</option>
                          <option value="Premium">Premium Bags</option>
                          <option value="Niche">Niche Bags</option>
                          <option value="Others">Others</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Quantity Dropdown */}
                      <div className="flex flex-col gap-2.5">
                        <label htmlFor="quantity" className="text-xs font-semibold uppercase text-muted-foreground">
                          Quantity*
                        </label>
                        <select
                          id="quantity"
                          name="quantity"
                          required
                          value={formState.quantity}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-xl border border-border bg-muted/30 focus:border-primary/50 text-foreground text-sm transition-colors duration-300 outline-none"
                        >
                          <option value="">Select Quantity</option>
                          <option value="1000 - 5000">1,000 - 5,000 bags</option>
                          <option value="5000 - 10000">5,000 - 10,000 bags</option>
                          <option value="10000+">10,000+ bags</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2.5">
                      <label htmlFor="message" className="text-xs font-semibold uppercase text-muted-foreground">
                        Project Description*
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Please include custom sizes, branding layout options, paper thickness (GSM) details, or special finishing requests..."
                        className="w-full px-5 py-4 rounded-xl border border-border bg-muted/30 focus:border-primary/50 text-foreground text-sm transition-colors duration-300 outline-none resize-none"
                      />
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-white rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-primary-dark hover:shadow-[0_4px_20px_rgba(217,112,40,0.25)] active:scale-[0.98] disabled:opacity-50"
                      >
                        {status === "loading" ? "Submitting Quote..." : "Submit Quote Request"}
                        <Send className="w-4 h-4" />
                      </button>

                      <a
                        href="https://wa.me/919886699009"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 border border-emerald-500/30 text-emerald-600 dark:text-emerald-500 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-emerald-500/5 hover:border-emerald-500/50"
                      >
                        WhatsApp Sales
                        <MessageCircle className="w-4 h-4 fill-current" />
                      </a>
                    </div>
                    
                    {/* Small Status Message Below Action Buttons */}
                    <AnimatePresence mode="wait">
                      {status === "success" && (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="mt-2 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-500 flex items-center gap-3 text-sm font-medium"
                        >
                          <CheckCircle className="w-5 h-5 shrink-0" />
                          <span>Quote Request Received! We will contact you within 24 hours.</span>
                        </motion.div>
                      )}
                      
                      {status === "error" && (
                        <motion.div
                          key="error"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="mt-2 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 flex items-center gap-3 text-sm font-medium"
                        >
                          <AlertTriangle className="w-5 h-5 shrink-0" />
                          <span>{errorMessage}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
            </motion.div>
            
            {/* Google Maps Iframe */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full h-[350px] mt-6 rounded-2xl overflow-hidden border border-border relative z-10"
            >
              <iframe
                title="Paper World Google Maps Coordinates"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124414.89996090962!2d77.48468434358902!3d12.974050536383052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d332d221c53%3A0xe360b1d019021b52!2sPaper%20World!5e0!3m2!1sen!2sin!4v1783602271896!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
export { Contact };
