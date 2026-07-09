"use client";

import { motion, useScroll, useTransform } from "framer-motion";

// The SVG Outline Component
const BagOutline = ({ className, delay = 0, duration = 3 }: { className?: string, delay?: number, duration?: number }) => (
  <motion.svg 
    viewBox="0 0 200 240" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay }}
  >
    <motion.path 
      d="M40 70 L160 70 L150 210 L50 210 Z" 
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration, delay, ease: "easeInOut" }}
    />
    <motion.path 
      d="M40 70 L80 140 L50 210" 
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: duration * 0.8, delay: delay + 0.2, ease: "easeInOut" }}
    />
    <motion.path 
      d="M160 70 L120 140 L150 210" 
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: duration * 0.8, delay: delay + 0.4, ease: "easeInOut" }}
    />
    <motion.path 
      d="M70 70 C 70 30, 130 30, 130 70" 
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: duration * 0.6, delay: delay + 0.6, ease: "easeInOut" }}
    />
  </motion.svg>
);

// Continuously Floating Background Bags
const FloatingBag = ({ delay = 0, size = 150, initialLeft = "50%", duration = 20, rotate = 0, opacity = 0.2, isPrimary = false }) => (
  <motion.div
    className="absolute pointer-events-none drop-shadow-sm"
    style={{ left: initialLeft, width: size, height: size * 1.2 }}
    initial={{ y: "110vh", rotate, opacity: 0, x: 0 }}
    animate={{ 
      y: ["110vh", "-40vh"], 
      x: [0, 80, -80, 0],
      rotate: [rotate, rotate + 20, rotate - 20, rotate],
      opacity: [0, opacity, opacity, 0]
    }}
    transition={{ 
      y: { duration, repeat: Infinity, ease: "linear", delay },
      x: { duration: duration * 0.7, repeat: Infinity, ease: "easeInOut", delay },
      rotate: { duration: duration * 1.1, repeat: Infinity, ease: "easeInOut", delay },
      opacity: { duration, repeat: Infinity, ease: "easeInOut", delay }
    }}
  >
    <BagOutline className={`w-full h-full ${isPrimary ? 'text-primary' : 'text-foreground'}`} delay={0} duration={2} />
  </motion.div>
);

// Floating Paper Particles
const PaperParticle = ({ delay = 0, size = 20, initialLeft = "50%", duration = 10, rotate = 0 }) => (
  <motion.div
    className="absolute pointer-events-none drop-shadow-md"
    style={{ left: initialLeft, width: size, height: size }}
    initial={{ y: "120vh", rotate, opacity: 0, x: 0 }}
    animate={{ 
      y: ["120vh", "-20vh"], 
      x: [0, 60, -60, 0],
      rotate: [rotate, rotate + 180, rotate + 360],
      opacity: [0, 0.4, 0.4, 0]
    }}
    transition={{ 
      y: { duration, repeat: Infinity, ease: "linear", delay },
      x: { duration: duration * 0.8, repeat: Infinity, ease: "easeInOut", delay },
      rotate: { duration: duration * 1.2, repeat: Infinity, ease: "linear", delay },
      opacity: { duration, repeat: Infinity, ease: "easeInOut", delay }
    }}
  >
    <svg viewBox="0 0 24 24" fill="var(--primary)" opacity="0.6">
      <path d="M14 2 L22 10 L10 22 L2 14 Z" />
    </svg>
  </motion.div>
);

// Floating Glowing Orb
const GlowingOrb = ({ delay = 0, initialLeft = "50%", initialTop = "50%", duration = 8, size = 100 }) => (
  <motion.div
    className="absolute pointer-events-none rounded-full blur-[50px] mix-blend-screen opacity-20"
    style={{ left: initialLeft, top: initialTop, width: size, height: size, background: "var(--primary)" }}
    animate={{ 
      x: [0, 80, -80, 0],
      y: [0, -80, 80, 0],
      scale: [1, 1.3, 0.7, 1],
      opacity: [0.1, 0.4, 0.1]
    }}
    transition={{ 
      duration, 
      repeat: Infinity, 
      ease: "easeInOut",
      delay
    }}
  />
);

export default function GlobalBackground() {
  const { scrollY } = useScroll(); // Global window scroll

  // Smoothly fade out slightly on scroll to preserve perfect contrast for below sections
  const globalOpacity = useTransform(scrollY, [0, 600, 1200], [1, 0.7, 0.4]);

  return (
    <motion.div style={{ opacity: globalOpacity }} className="fixed inset-0 z-[-10] bg-background overflow-hidden pointer-events-none transition-colors duration-500">
      
      {/* Ambient Central Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[1000px] max-h-[1000px] bg-primary/10 rounded-full blur-[120px] opacity-50" />
      
      <GlowingOrb initialLeft="20%" initialTop="30%" duration={14} size={250} delay={0} />
      <GlowingOrb initialLeft="80%" initialTop="70%" duration={18} size={300} delay={2} />
      <GlowingOrb initialLeft="60%" initialTop="20%" duration={12} size={180} delay={5} />
      <GlowingOrb initialLeft="10%" initialTop="80%" duration={16} size={200} delay={4} />

      {/* Continuously Floating Background Bags (Dynamic & Fluid) */}
      <FloatingBag initialLeft="10%" size={220} duration={28} rotate={-15} opacity={0.3} delay={0} />
      <FloatingBag initialLeft="75%" size={300} duration={32} rotate={20} opacity={0.25} isPrimary delay={5} />
      <FloatingBag initialLeft="35%" size={180} duration={25} rotate={10} opacity={0.2} delay={10} />
      <FloatingBag initialLeft="65%" size={200} duration={30} rotate={-10} opacity={0.3} delay={15} isPrimary />
      <FloatingBag initialLeft="45%" size={260} duration={35} rotate={5} opacity={0.2} delay={20} />
      
      {/* Additional Bags for more density */}
      <FloatingBag initialLeft="20%" size={240} duration={26} rotate={30} opacity={0.25} delay={12} isPrimary />
      <FloatingBag initialLeft="85%" size={160} duration={22} rotate={-25} opacity={0.2} delay={8} />

      {/* Floating Paper Particles */}
      <PaperParticle initialLeft="15%" size={24} duration={14} rotate={15} delay={0} />
      <PaperParticle initialLeft="85%" size={18} duration={16} rotate={45} delay={3} />
      <PaperParticle initialLeft="35%" size={32} duration={20} rotate={75} delay={7} />
      <PaperParticle initialLeft="70%" size={20} duration={15} rotate={120} delay={5} />
      <PaperParticle initialLeft="50%" size={16} duration={22} rotate={10} delay={9} />
      <PaperParticle initialLeft="25%" size={28} duration={18} rotate={-45} delay={4} />
      <PaperParticle initialLeft="60%" size={22} duration={17} rotate={-20} delay={8} />

    </motion.div>
  );
}
