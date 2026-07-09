"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Hide loading screen after 2.2 seconds (gives time for frame loading & entrance transition)
    const timer = setTimeout(() => {
      setShow(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FAF9F6] dark:bg-[#0C0A09] transition-colors duration-500"
        >
          {/* Subtle glow background */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

          <div className="relative flex flex-col items-center gap-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative flex items-center justify-center"
            >
              {/* Outer dashed slow rotating */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute w-64 h-64 md:w-[320px] md:h-[320px] rounded-full border border-primary/30 border-dashed opacity-70"
              />
              
              {/* Middle fast rotating with glow */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full border-[2px] border-primary/50 border-t-transparent border-b-transparent shadow-[0_0_15px_rgba(232,122,30,0.2)]"
              />
              
              {/* Inner pulsing border */}
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.03, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute w-48 h-48 md:w-60 md:h-60 rounded-full border border-primary/60 border-l-transparent border-r-transparent"
              />
              
              {/* Logo inside */}
              <div className="w-40 h-40 md:w-48 md:h-48 bg-surface rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(232,122,30,0.15)] border border-primary/20 p-4 z-10">
                <Image src="/logo.png" alt="Paper World Logo" width={160} height={160} className="object-contain w-[100px] h-[100px] md:w-[150px] md:h-[150px]" />
              </div>
            </motion.div>

            {/* Brand text reveal */}
            <div className="overflow-hidden mt-6 md:mt-10">
              <motion.h1
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="font-heading font-bold text-xl tracking-[0.25em] text-foreground uppercase"
              >
                Paper World
              </motion.h1>
            </div>

            {/* Subtle premium progress slider */}
            <div className="w-40 h-[2px] bg-muted rounded-full overflow-hidden relative">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{
                  duration: 1.8,
                  ease: "easeInOut",
                  repeat: 0,
                }}
                className="absolute top-0 bottom-0 w-1/2 bg-primary rounded-full"
              />
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-xs tracking-wider text-muted-foreground uppercase"
            >
              Sustainable Craftsmanship
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
