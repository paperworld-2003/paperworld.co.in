"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Products", id: "products" },
  { label: "Manufacturing", id: "manufacturing" },
  { label: "Industries", id: "industries" },
  { label: "Sustainability", id: "sustainability" },
  { label: "Contact", id: "contact" },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mounted, setMounted] = useState(false);
  const isScrollingToRef = useRef<string | null>(null);

  const currentActive = pathname.startsWith("/products") ? "products" : activeSection;

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (window.scrollY < 50 && !isScrollingToRef.current) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for scroll spy
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (isScrollingToRef.current) return;
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.25, rootMargin: "-80px 0px -20% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (id: string) => {
    isScrollingToRef.current = id;
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      isScrollingToRef.current = null;
    }, 1400);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={cn(
          "fixed left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 w-[95%] max-w-6xl rounded-full",
          isScrolled
            ? "top-4 p-1.5 bg-white/70 dark:bg-black/70 shadow-lg border border-white/50 dark:border-white/10 backdrop-blur-xl"
            : "top-6 p-2 bg-white/50 dark:bg-black/50 shadow-md border border-white/30 dark:border-white/5 backdrop-blur-xl"
        )}
      >
        <div className="w-full flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={() => handleNavClick("hero")}
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
            aria-label="Go to homepage"
          >
            <div
              className={cn(
                "relative z-10 flex items-center justify-center bg-white rounded-full overflow-hidden shadow-sm shrink-0 transition-all duration-500",
                isScrolled ? "w-9 h-9" : "w-11 h-11"
              )}
            >
              <Image
                src="/logo.png"
                alt="Paper World Logo"
                width={isScrolled ? 36 : 46}
                height={isScrolled ? 36 : 46}
                className="transition-all duration-500 object-contain"
                priority
              />
            </div>
            <span className="brand-header-logo font-brand font-black text-lg sm:text-xl md:text-2xl tracking-wider uppercase select-none transition-transform duration-300 group-hover:scale-105">
              <span className="text-primary font-black">PAPER</span>{" "}
              <span className="text-foreground font-black">WORLD</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden xl:flex items-center gap-1"
            role="navigation"
            aria-label="Main navigation"
          >
            {navItems.map(({ label, id }) => (
              <a
                key={id}
                href={pathname === "/" ? `#${id}` : `/#${id}`}
                onClick={() => {
                  if (pathname === "/") handleNavClick(id);
                }}
                className={cn(
                  "relative px-3.5 py-2 text-[13px] font-medium transition-colors duration-300 rounded-lg tracking-wide",
                  currentActive === id
                    ? "text-primary"
                    : "text-foreground/60 hover:text-foreground"
                )}
              >
                {label}
                {currentActive === id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-primary rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="relative p-2.5 rounded-full border border-border text-foreground hover:border-primary/50 transition-all duration-300 flex items-center justify-center"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {mounted && theme === "dark" ? (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Moon className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Sun className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Get Quote Button - Desktop */}
            <a
              href="#contact"
              onClick={() => handleNavClick("contact")}
              className="hidden md:flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-md whitespace-nowrap shrink-0"
            >
              Get Quote
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl border border-border text-foreground transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-[99] bg-white/95 dark:bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-5"
          >

            {navItems.map(({ label, id }, index) => (
              <motion.a
                key={id}
                href={pathname === "/" ? `#${id}` : `/#${id}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 + 0.1 }}
                onClick={() => {
                  if (pathname === "/") handleNavClick(id);
                  setIsMobileMenuOpen(false);
                }}
                className={cn(
                  "text-2xl font-heading font-semibold transition-colors",
                  currentActive === id
                    ? "text-primary"
                    : "text-foreground/70"
                )}
              >
                {label}
              </motion.a>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              href="#contact"
              onClick={() => {
                handleNavClick("contact");
                setIsMobileMenuOpen(false);
              }}
              className="mt-6 flex items-center gap-2 px-8 py-3.5 bg-primary text-white rounded-xl text-lg font-semibold shadow-lg shadow-primary/20"
            >
              Get Quote
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
