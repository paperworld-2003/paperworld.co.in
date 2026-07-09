"use client";

import { useEffect, useRef } from "react";
import { useIsTouchDevice } from "@/hooks/useMediaQuery";

export default function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isTouch = useIsTouchDevice();

  useEffect(() => {
    // Disable canvas floating particles on touch devices to prioritize battery/performance
    if (isTouch) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      alpha: number;
      targetAlpha: number;
    }> = [];

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Create initial particles
    const particleCount = 25;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.25,
        speedY: (Math.random() - 0.5) * 0.25,
        alpha: 0,
        targetAlpha: Math.random() * 0.35 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Move particle
        p.x += p.speedX;
        p.y += p.speedY;

        // Bounce off borders
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        // Fade in gradually
        if (p.alpha < p.targetAlpha) {
          p.alpha += 0.005;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        // Orange glow color matching #E87A1E
        ctx.fillStyle = `rgba(232, 122, 30, ${p.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isTouch]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden noise-overlay">
      {/* Sweeping Orange Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-primary/10 dark:from-primary/20 dark:via-transparent dark:to-primary/15 pointer-events-none" />

      {/* Premium Dot Matrix Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(var(--foreground) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse at 50% 50%, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 40%, transparent 80%)',
        }}
      />

      {/* Moving Ambient Gradient Orbs (CSS) */}
      <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] max-w-[600px] rounded-full bg-primary/10 blur-[120px] dark:bg-primary/10 animate-[pulse_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-[15%] right-[5%] w-[45vw] h-[45vw] max-w-[700px] rounded-full bg-primary/10 blur-[150px] dark:bg-primary/10 animate-[pulse_10s_ease-in-out_infinite_1.5s]" />
      <div className="absolute top-[50%] left-[60%] w-[30vw] h-[30vw] max-w-[500px] rounded-full bg-orange-400/10 blur-[100px] dark:bg-orange-400/10 animate-[pulse_12s_ease-in-out_infinite_3s]" />

      {/* Floating Canvas Particles */}
      {!isTouch && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-60 mix-blend-screen"
        />
      )}

      {/* Very subtle overall ambient overlay color to tie theme together */}
      <div className="absolute inset-0 bg-[rgba(245,240,232,0.015)] dark:bg-[rgba(10,10,10,0.02)]" />
    </div>
  );
}
