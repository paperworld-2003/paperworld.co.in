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
      className="fixed inset-0 z-0 bg-background overflow-hidden pointer-events-none transition-colors duration-200"
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

      {/* WhatsApp-Style Creative Paper Packaging Doodle Wallpaper (Subtle & Light Opacity) */}
      <svg
        className="absolute inset-0 w-full h-full text-foreground opacity-[0.045] dark:opacity-[0.055] transition-opacity duration-300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="paperworld-doodle-wallpaper"
            width="320"
            height="320"
            patternUnits="userSpaceOnUse"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* 1. Classic Boutique Bag with Twisted Handle */}
              <g transform="translate(16, 16) rotate(-10, 18, 20)">
                <path d="M5 14 L31 14 L28 40 L8 40 Z" />
                <path d="M5 14 L12 27 L8 40" strokeDasharray="1.5 1.5" />
                <line x1="5" y1="18" x2="31" y2="18" />
                <path d="M12 14 C12 5, 24 5, 24 14" />
                <path d="M14 14 C14 7, 22 7, 22 14" opacity="0.6" />
              </g>

              {/* 2. Eco Sprout & Botanical Leaf */}
              <g transform="translate(96, 22) rotate(16, 12, 14)">
                <path d="M3 24 C3 13 13 4 23 4 C23 15 14 25 3 24 Z" />
                <path d="M3 24 L1 27" />
                <path d="M5 21 C11 15 16 10 23 4" />
                <path d="M11 16 C14 16 17 14 18 13" />
              </g>

              {/* 3. Luxury Ribbon-Handle Bag with Bow Accent */}
              <g transform="translate(172, 14) rotate(7, 18, 20)">
                <rect x="4" y="14" width="28" height="5" rx="1" />
                <path d="M6 19 L30 19 L28 42 L8 42 Z" />
                <path d="M11 14 C9 4 16 4 16 14" />
                <path d="M20 14 C20 4 27 4 25 14" />
                <circle cx="18" cy="14" r="1.5" fill="currentColor" />
              </g>

              {/* 4. Circular Sustainable 3-Arrow Recycle Symbol */}
              <g transform="translate(252, 18) rotate(-8, 14, 14)">
                <path d="M14 4 A10 10 0 0 1 24 14" />
                <polyline points="21 14 24 14 24 11" />
                <path d="M24 14 A10 10 0 0 1 10 24" />
                <polyline points="10 21 10 24 13 24" />
                <path d="M10 24 A10 10 0 0 1 14 4" />
                <polyline points="17 4 14 4 14 7" />
              </g>

              {/* 5. Kraft Grocery / Bakery Sack with Serrated Rim */}
              <g transform="translate(18, 96) rotate(-14, 16, 18)">
                <path d="M6 10 L9 7 L12 10 L15 7 L18 10 L21 7 L24 10 L26 36 L6 36 Z" />
                <path d="M6 17 L25.5 17" strokeDasharray="2 1.5" />
                <path d="M16 17 L16 36" opacity="0.6" />
              </g>

              {/* 6. Kraft Paper Reel / Raw Material Roll */}
              <g transform="translate(94, 98) rotate(14, 16, 14)">
                <ellipse cx="16" cy="8" rx="12" ry="4.5" />
                <path d="M4 8 L4 22 C4 24.5 9.4 26.5 16 26.5 C22.6 26.5 28 24.5 28 22 L28 8" />
                <ellipse cx="16" cy="8" rx="4" ry="1.5" />
                <path d="M28 17 C32 19 33 24 30 26 L23 26" opacity="0.7" />
              </g>

              {/* 7. Takeaway Food Bag with Folded Flap & Seal Sticker */}
              <g transform="translate(174, 96) rotate(6, 16, 18)">
                <path d="M6 14 L26 14 L25 38 L7 38 Z" />
                <path d="M6 14 L16 22 L26 14" />
                <circle cx="16" cy="22" r="3" />
                <line x1="15" y1="22" x2="17" y2="22" />
              </g>

              {/* 8. Die-Cut Oval Handle Bag */}
              <g transform="translate(254, 98) rotate(-10, 16, 18)">
                <rect x="5" y="8" width="22" height="30" rx="3" />
                <rect x="11" y="13" width="10" height="4.5" rx="2.25" />
                <path d="M5 32 L27 32" opacity="0.6" strokeDasharray="2 1.5" />
              </g>

              {/* 9. Brand / Price Hangtag on String */}
              <g transform="translate(18, 178) rotate(-18, 15, 16)">
                <path d="M10 6 L20 6 L26 12 L26 28 L10 28 Z" />
                <circle cx="15" cy="11" r="2" />
                <path d="M15 9 C15 3 24 3 22 8" />
                <line x1="14" y1="18" x2="22" y2="18" />
                <line x1="14" y1="22" x2="20" y2="22" />
              </g>

              {/* 10. Stand-Up Resealable Zipper Pouch */}
              <g transform="translate(94, 174) rotate(10, 16, 18)">
                <line x1="6" y1="8" x2="26" y2="8" />
                <line x1="6" y1="12" x2="26" y2="12" strokeDasharray="1.5 1" />
                <path d="M5 10 L7 10" />
                <path d="M25 10 L27 10" />
                <path d="M7 12 L9 32 C12 36 20 36 23 32 L25 12" />
                <path d="M11 31 C14 33 18 33 21 31" opacity="0.6" />
              </g>

              {/* 11. Craft Precision Scissors & Cut Guide Line */}
              <g transform="translate(174, 178) rotate(22, 15, 15)">
                <line x1="7" y1="7" x2="22" y2="18" />
                <line x1="7" y1="18" x2="22" y2="7" />
                <circle cx="14.5" cy="12.5" r="1.2" fill="currentColor" />
                <circle cx="6" cy="5" r="3.5" />
                <circle cx="6" cy="20" r="3.5" />
                <line x1="24" y1="12.5" x2="31" y2="12.5" strokeDasharray="1.5 1.5" />
              </g>

              {/* 12. Rigid Gift Box with Tied Ribbon */}
              <g transform="translate(254, 174) rotate(-8, 16, 16)">
                <rect x="5" y="10" width="22" height="6" rx="1" />
                <rect x="6.5" y="16" width="19" height="16" rx="0.5" />
                <line x1="16" y1="10" x2="16" y2="32" />
                <path d="M16 10 C13 5 10 7 13 10 Z" />
                <path d="M16 10 C19 5 22 7 19 10 Z" />
              </g>

              {/* 13. Tall Wine / Bottle Bag */}
              <g transform="translate(20, 256) rotate(8, 14, 20)">
                <path d="M8 12 L20 12 L19 40 L9 40 Z" />
                <path d="M8 12 L12 24 L9 40" strokeDasharray="1.5 1.5" />
                <path d="M11 12 C11 4 17 4 17 12" />
              </g>

              {/* 14. FSC Sustainable Forestry Pine Tree */}
              <g transform="translate(94, 256) rotate(-10, 14, 16)">
                <polygon points="14,4 7,13 11,13 6,21 12,21 5,28 23,28 16,21 22,21 17,13 21,13" />
                <rect x="12.5" y="28" width="3" height="4" />
              </g>

              {/* 15. Wide Gusset Food Bag with Flat Tape Handles */}
              <g transform="translate(170, 256) rotate(-6, 18, 16)">
                <path d="M4 12 L30 12 L27 34 L7 34 Z" />
                <path d="M4 12 L11 22 L7 34" />
                <path d="M30 12 L23 22 L27 34" />
                <path d="M12 12 L12 6 L17 6 L17 12" />
                <path d="M18 12 L18 6 L23 6 L23 12" />
              </g>

              {/* 16. Artisan Sparkle Star & Quality Dots */}
              <g transform="translate(254, 256) rotate(15, 12, 12)">
                <path d="M12 2 Q12 12 22 12 Q12 12 12 22 Q12 12 2 12 Q12 12 12 2 Z" />
                <circle cx="21" cy="4" r="1.5" fill="currentColor" />
                <circle cx="4" cy="20" r="1" fill="currentColor" />
              </g>

              {/* Subtle Scattered Filler Doodles & Dots (WhatsApp aesthetic) */}
              <circle cx="68" cy="56" r="1.5" fill="currentColor" />
              <path d="M146 54 L152 54 M149 51 L149 57" strokeWidth="0.9" />
              <circle cx="228" cy="62" r="1.2" fill="currentColor" />
              <circle cx="62" cy="142" r="1.3" fill="currentColor" />
              <path d="M143 140 Q146 137 149 140 Q146 143 143 140 Z" />
              <circle cx="226" cy="142" r="1.5" fill="currentColor" />
              <path d="M64 222 L70 222 M67 219 L67 225" strokeWidth="0.9" />
              <circle cx="146" cy="224" r="1.3" fill="currentColor" />
              <circle cx="228" cy="220" r="1.2" fill="currentColor" />
              <circle cx="68" cy="298" r="1.5" fill="currentColor" />
              <path d="M148 296 L154 296 M151 293 L151 299" strokeWidth="0.9" />
              <circle cx="228" cy="298" r="1.3" fill="currentColor" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#paperworld-doodle-wallpaper)" />
      </svg>

      {/* Subtle Floating Silhouettes using pure GPU-composited CSS keyframes */}
      <div
        className="absolute hidden md:block text-primary/10 animate-float-slow"
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
        className="absolute hidden md:block text-foreground/5 animate-float-medium"
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
