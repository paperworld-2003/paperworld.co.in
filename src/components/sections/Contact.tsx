"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageCircle, CheckCircle, AlertTriangle } from "lucide-react";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/utils";
import { buildWeb3FormsPayload } from "@/lib/emailTemplate";

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
  const [lastSubmitted, setLastSubmitted] = useState<typeof formState | null>(null);

  const generateWhatsAppMessage = (data = formState) => {
    const lines = [
      `*PAPER WORLD — CLIENT QUOTATION INQUIRY*`,
      `────────────────────────────`,
      ``,
      `*CLIENT INFORMATION*`,
      `• Name: ${data.name.trim() || "Not specified"}`,
      data.company.trim() ? `• Organization: ${data.company.trim()}` : null,
      `• Contact: ${data.phone.trim() || "Not specified"}`,
      data.email.trim() ? `• Email: ${data.email.trim()}` : null,
      ``,
      `*ORDER SPECIFICATIONS*`,
      data.industry ? `• Industry Sector: ${data.industry}` : null,
      data.product ? `• Packaging Type: ${data.product}` : null,
      data.quantity ? `• Estimated Volume: ${data.quantity} units` : null,
      ``,
      `*REQUIREMENTS & DETAILS*`,
      data.message.trim() || "Interested in a manufacturing quote for custom paper bags.",
      ``,
      `────────────────────────────`,
      `_Submitted via paperworld.co.in_`,
    ].filter((line) => line !== null);

    return lines.join("\n");
  };

  const handleSendWhatsApp = (e?: React.MouseEvent, data = formState) => {
    if (e) e.preventDefault();

    if (!data.name.trim() || !data.phone.trim()) {
      setStatus("error");
      setErrorMessage("Please enter at least your Name and Phone Number to send via WhatsApp.");
      return;
    }

    const message = generateWhatsAppMessage(data);
    const waUrl = `https://wa.me/919886699009?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

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

    setLastSubmitted({ ...formState });

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
      "733724f6-ba0d-4a49-bf90-122c54e145ae";

    try {
      let isSuccess = false;
      let responseMessage = "";

      // 1. Prepare FormData with executive orange layout for Web3Forms
      const payload = buildWeb3FormsPayload(formState, accessKey);
      const formData = new FormData();
      Object.entries(payload).forEach(([key, val]) => {
        if (val !== undefined && val !== null) {
          formData.append(key, String(val));
        }
      });

      // Attempt client-side submission to Web3Forms
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });

        const contentType = response.headers.get("content-type") || "";
        if (contentType.includes("application/json")) {
          const result = await response.json();
          if (result.success) {
            isSuccess = true;
            responseMessage = result.message || "Quote request submitted successfully!";
          } else {
            responseMessage = result.message || "";
          }
        } else if (response.ok) {
          isSuccess = true;
        }
      } catch (clientErr) {
        console.warn("Client-side direct submission failed, attempting local API fallback:", clientErr);
      }

      // 2. If client-side submission didn't succeed, fallback to /api/contact
      if (!isSuccess) {
        try {
          const apiRes = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(formState),
          });

          const apiContentType = apiRes.headers.get("content-type") || "";
          if (apiContentType.includes("application/json")) {
            const apiResult = await apiRes.json();
            if (apiResult.success) {
              isSuccess = true;
              responseMessage = apiResult.message || "Quote request received!";
            } else {
              responseMessage = apiResult.message || responseMessage;
            }
          } else if (apiRes.ok) {
            isSuccess = true;
          }
        } catch (apiErr) {
          console.warn("API fallback failed:", apiErr);
        }
      }

      if (isSuccess) {
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
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        setStatus("error");
        setErrorMessage(
          responseMessage ||
            "Unable to submit via email service right now. Please connect directly via WhatsApp for an instant response."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Failed to send quote request. Please use WhatsApp for an immediate quotation."
      );
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
                      +91 9886699009 | +91 8884984499
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
                        className="w-full sm:flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-primary-dark hover:shadow-[0_4px_20px_rgba(217,112,40,0.25)] active:scale-[0.98] disabled:opacity-50 cursor-pointer"
                      >
                        {status === "loading" ? "Submitting Quote..." : "Submit Quote Request"}
                        <Send className="w-4 h-4" />
                      </button>

                      <button
                        type="button"
                        onClick={(e) => handleSendWhatsApp(e)}
                        className="w-full sm:flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl text-sm font-semibold transition-all duration-300 shadow-[0_4px_16px_rgba(37,211,102,0.25)] hover:shadow-[0_6px_22px_rgba(37,211,102,0.35)] active:scale-[0.98] cursor-pointer"
                      >
                        <MessageCircle className="w-4 h-4 fill-current" />
                        Contact Through WhatsApp
                      </button>
                    </div>
                    
                    {/* Small Status Message Below Action Buttons */}
                    <AnimatePresence mode="wait">
                      {status === "success" && (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="mt-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 flex flex-col gap-2 text-sm font-medium"
                        >
                          <div className="flex items-center gap-2.5">
                            <CheckCircle className="w-5 h-5 shrink-0 text-emerald-600 dark:text-emerald-500" />
                            <span>Quote Request Received! We will contact you within 24 hours.</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleSendWhatsApp(undefined, lastSubmitted || formState)}
                            className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline cursor-pointer pt-0.5"
                          >
                            <MessageCircle className="w-3.5 h-3.5 fill-current" />
                            Click here to also forward this quote to WhatsApp for immediate response →
                          </button>
                        </motion.div>
                      )}
                      
                      {status === "error" && (
                        <motion.div
                          key="error"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="mt-3 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 flex items-center gap-2.5 text-sm font-medium"
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
