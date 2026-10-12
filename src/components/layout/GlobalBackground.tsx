"use client";

import { memo } from "react";

// Pre-optimized SVG Bag Silhouette - lightweight, static SVG
const BagIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 200 240"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M40 70 L160 70 L150 210 L50 210 Z" />
    <path d="M40 70 L80 140 L50 210" opacity="0.6" />
    <path d="M160 70 L120 140 L150 210" opacity="0.6" />
    <path d="M70 70 C 70 30, 130 30, 130 70" />
  </svg>
);

function GlobalBackgroundComponent() {
  return (
    <div
      className="fixed inset-0 z-[-10] bg-background overflow-hidden pointer-events-none transition-colors duration-200"
      aria-hidden="true"
    >
      {/* Hardware-accelerated CSS Ambient Radial Glows (0 JS overhead) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] bg-primary/8 rounded-full blur-[100px] opacity-60"
        style={{ transform: "translate3d(-50%, -50%, 0)" }}
      />
      <div
        className="absolute bottom-1/4 right-10 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-primary/5 rounded-full blur-[80px] opacity-40"
        style={{ transform: "translate3d(0, 0, 0)" }}
      />

      {/* Subtle Floating Silhouettes using pure GPU-composited CSS keyframes */}
      <div
        className="absolute hidden md:block text-primary/15 animate-float-slow"
        style={{
          left: "8%",
          top: "20%",
          width: 140,
          height: 170,
          willChange: "transform",
        }}
      >
        <BagIcon className="w-full h-full" />
      </div>

      <div
        className="absolute hidden md:block text-foreground/10 animate-float-medium"
        style={{
          right: "10%",
          top: "45%",
          width: 180,
          height: 215,
          willChange: "transform",
        }}
      >
        <BagIcon className="w-full h-full" />
      </div>

      <div
        className="absolute hidden md:block text-primary/10 animate-float-fast"
        style={{
          left: "40%",
          top: "75%",
          width: 120,
          height: 145,
          willChange: "transform",
        }}
      >
        <BagIcon className="w-full h-full" />
      </div>
    </div>
  );
}

export default memo(GlobalBackgroundComponent);
