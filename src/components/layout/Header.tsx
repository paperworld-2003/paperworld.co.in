"use client";

import { useState, useEffect, useRef, useSyncExternalStore } from "react";
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
  const isScrollingToRef = useRef<string | null>(null);

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const currentActive = pathname.startsWith("/products") ? "products" : activeSection;

  useEffect(() => {
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
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed left-1/2 -translate-x-1/2 z-[100] transition-all duration-300 w-[94%] max-w-7xl rounded-full",
          isScrolled
            ? "top-3 sm:top-4 p-1.5 bg-background/90 dark:bg-black/85 shadow-lg border border-white/50 dark:border-white/10 backdrop-blur-2xl"
            : "top-4 sm:top-5 p-1.5 sm:p-2 bg-background/70 dark:bg-black/65 shadow-md border border-white/40 dark:border-white/10 backdrop-blur-xl"
        )}
      >
        <div className="w-full flex items-center justify-between pl-3 pr-2 sm:pl-4 sm:pr-2.5 gap-2">
          {/* Logo */}
          <a
            href="#hero"
            onClick={() => handleNavClick("hero")}
            className="flex items-center gap-2 sm:gap-2.5 group shrink-0"
            aria-label="Go to homepage"
          >
            <div
              className={cn(
                "relative z-10 flex items-center justify-center bg-white rounded-full overflow-hidden shadow-xs shrink-0 transition-all duration-300",
                isScrolled ? "w-8 h-8" : "w-8 h-8 sm:w-9 sm:h-9"
              )}
            >
              <Image
                src="/logo.png"
                alt="Paper World Logo"
                width={36}
                height={36}
                className="transition-all duration-300 object-contain p-0.5"
                priority
              />
            </div>
            <span className="brand-header-logo font-brand font-black text-sm sm:text-base lg:text-lg tracking-wider uppercase select-none transition-transform duration-300 group-hover:scale-105 whitespace-nowrap">
              <span className="text-primary font-black">PAPER</span>{" "}
              <span className="text-foreground font-black">WORLD</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden xl:flex items-center gap-0.5 lg:gap-1 bg-black/5 dark:bg-white/5 px-2 py-1 rounded-full border border-black/5 dark:border-white/5 shrink-0"
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
                  "relative px-2.5 lg:px-3 py-1.5 text-xs lg:text-[13px] font-semibold transition-all duration-200 rounded-full tracking-wide whitespace-nowrap",
                  currentActive === id
                    ? "text-primary font-bold"
                    : "text-foreground/75 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10"
                )}
              >
                {label}
                {currentActive === id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-full bg-primary/10 -z-10"
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
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="relative p-2 rounded-full border border-border/80 text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 flex items-center justify-center cursor-pointer shrink-0"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {mounted && theme === "dark" ? (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-4 h-4 text-amber-300" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-4 h-4 text-amber-500" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Request a Quote Button - Desktop */}
            <a
              href="#contact"
              onClick={() => handleNavClick("contact")}
              className="hidden md:inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 bg-[#D97028] hover:bg-[#C2631F] text-white rounded-full text-xs font-bold tracking-wider uppercase transition-all hover:scale-105 active:scale-95 shadow-sm whitespace-nowrap shrink-0 group"
            >
              <span className="text-white">Request a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 rounded-full border border-border/80 text-foreground hover:border-primary/50 transition-colors shrink-0 cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
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
            className="fixed inset-0 z-[99] bg-background/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-5 p-6"
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
                  "text-2xl font-heading font-bold transition-colors",
                  currentActive === id
                    ? "text-primary"
                    : "text-foreground/80 hover:text-foreground"
                )}
              >
                {label}
              </motion.a>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              href="#contact"
              onClick={() => {
                handleNavClick("contact");
                setIsMobileMenuOpen(false);
              }}
              className="mt-6 flex items-center gap-2 px-8 py-3.5 bg-[#D97028] hover:bg-[#C2631F] text-white rounded-full text-base font-bold shadow-sm"
            >
              <span className="text-white">Request a Quote</span>
              <ArrowRight className="w-5 h-5 text-white" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
