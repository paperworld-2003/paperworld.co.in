"use client";

import { useTheme } from "@/context/ThemeContext";
import { useState, useEffect } from "react";
import { ArrowUp, Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";


export default function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-background transition-colors duration-500 overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-premium py-24 md:py-28 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Company Overview (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <a
              href="#hero"
              className="inline-flex items-center gap-3 self-start group"
              aria-label="Go to top"
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-1 shadow-sm overflow-hidden shrink-0">
                <Image
                  src="/logo.png"
                  alt="Paper World Logo"
                  width={44}
                  height={44}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-brand font-black text-xl md:text-2xl tracking-widest uppercase select-none transition-transform duration-300 group-hover:scale-105">
                <span className="text-primary">PAPER</span>{" "}
                <span className="text-foreground">WORLD</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
              <span className="font-brand font-black tracking-wider uppercase"><span className="text-primary">PAPER</span> <span className="text-foreground">WORLD</span></span> is a leading paper bag manufacturing company in Bangalore, India.
              For over 23 years, we have been dedicated to manufacturing and exporting custom 
              shopping paper bags for retail, fashion, luxury brands, corporate conferences, 
              events, and food industries. We deliver sustainable elegance, tailored to your budget.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/paperworldblr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 hover:shadow-[0_4px_12px_rgba(232,122,30,0.15)]"
                aria-label="Facebook Page"
              >
                <FaFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/paperworld_paperbags"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 hover:shadow-[0_4px_12px_rgba(232,122,30,0.15)]"
                aria-label="Instagram Profile"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCeOBzWbfYdGYM8EXky143WA?reload=9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 hover:shadow-[0_4px_12px_rgba(232,122,30,0.15)]"
                aria-label="YouTube Channel"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
              <a
                href="https://in.pinterest.com/paperworldbranding/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 hover:shadow-[0_4px_12px_rgba(232,122,30,0.15)]"
                aria-label="Pinterest Page"
              >
                <FaPinterest className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Navigation</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Home", id: "hero" },
                { label: "About Us", id: "about" },
                { label: "Products", id: "products" },
                { label: "Manufacturing", id: "manufacturing" },
                { label: "Industries", id: "industries" },
                { label: "Sustainability", id: "sustainability" },
                { label: "Contact", id: "contact" },
              ].map(({ label, id }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories (3 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Bags & Paper</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Ready to Deliver Bags", id: "ready-to-deliver" },
                { label: "Brown Kraft Bags", id: "brown-kraft" },
                { label: "Bleached Kraft Bags", id: "bleached-kraft" },
                { label: "Mid Premium Bags", id: "mid-premium" },
                { label: "Premium Bags", id: "premium" },
                { label: "Niche Bags", id: "niche" },
              ].map(({ label, id }) => (
                <li key={id}>
                  <a
                    href="#products"
                    className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300 text-left block"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Contact</h4>
            <ul className="flex flex-col gap-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  #527/2, 26th Cross, Bhagyalakshmi Tent road, K.P. Agrahara, Bhuvaneshwarinagar, Magadi Road, Bengaluru 560023, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+919886699009" className="hover:text-primary transition-colors">
                  +91 9886699009
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:reachus@paperworld.co.in" className="hover:text-primary transition-colors">
                  reachus@paperworld.co.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border my-12 md:my-14" />

        {/* Bottom copyright and Scroll-to-top */}
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} <span className="font-brand font-black uppercase tracking-wider"><span className="text-primary">PAPER</span> <span className="text-foreground">WORLD</span></span>. All Rights Reserved. Crafted with care.</p>
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="https://vyome.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-4 py-3 rounded-2xl border border-border bg-gradient-to-r from-primary/10 via-surface to-primary/5 hover:border-primary/40 hover:shadow-[0_8px_24px_rgba(232,122,30,0.12)] transition-all duration-300 font-semibold"
              aria-label="Visit Vyome website"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-white shadow-sm border border-border overflow-hidden p-1">
                <img src="/Vyome%20Logo.png" alt="Vyome Logo" className="w-full h-full object-contain" />
              </span>
              <span className="text-foreground group-hover:text-primary transition-colors duration-300">
                Designed & Developed by Vyome
              </span>
            </a>
            <button
              onClick={handleScrollTop}
              className="flex items-center gap-2 px-4 py-3 border border-border rounded-2xl hover:text-primary hover:border-primary/40 hover:shadow-[0_4px_15px_rgba(232,122,30,0.1)] transition-all duration-300"
              aria-label="Scroll back to top"
            >
              Back To Top
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
