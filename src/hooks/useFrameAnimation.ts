"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface UseFrameAnimationOptions {
  totalFrames: number;
  getFramePath: (index: number) => string;
  scrollHeight?: number; // How many viewport heights the scroll area takes
}

export function useFrameAnimation({
  totalFrames,
  getFramePath,
  scrollHeight = 4,
}: UseFrameAnimationOptions) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  // Resize canvas to match viewport dimensions
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  // Draw specific image index on the pre-sized canvas
  const drawFrame = useCallback(
    (frameIndex: number) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      const img = imagesRef.current[frameIndex];
      if (!canvas || !ctx || !img) return;

      // Draw image covering canvas (object-fit: cover behavior)
      const imgRatio = img.width / img.height;
      const canvasRatio = canvas.width / canvas.height;

      let drawWidth: number, drawHeight: number, drawX: number, drawY: number;

      if (imgRatio > canvasRatio) {
        drawHeight = canvas.height;
        drawWidth = drawHeight * imgRatio;
        drawX = (canvas.width - drawWidth) / 2;
        drawY = 0;
      } else {
        drawWidth = canvas.width;
        drawHeight = drawWidth / imgRatio;
        drawX = 0;
        drawY = (canvas.height - drawHeight) / 2;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    },
    []
  );

  // Preload all frames sequentially
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    const handleLoadComplete = () => {
      loadedCount++;
      setLoadProgress(Math.round((loadedCount / totalFrames) * 100));
      
      if (loadedCount === totalFrames) {
        imagesRef.current = images;
        setIsLoaded(true);
        // Size the canvas once and draw the initial frame
        resizeCanvas();
        setTimeout(() => {
          resizeCanvas();
          drawFrame(0);
        }, 50);
      }
    };

    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = handleLoadComplete;
      img.onerror = handleLoadComplete; // Fallback so the preloader never gets stuck on networks
      images.push(img);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalFrames]);

  // Handle scroll events and scale window sizes
  useEffect(() => {
    if (!isLoaded) return;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const containerTop = rect.top;
      const containerHeight = rect.height - window.innerHeight;

      // Calculate scroll progress (0 to 1) based on sticky track progress
      let progress = -containerTop / containerHeight;
      progress = Math.max(0, Math.min(1, progress));

      const frameIndex = Math.min(
        Math.floor(progress * (totalFrames - 1)),
        totalFrames - 1
      );

      if (frameIndex !== currentFrameRef.current) {
        currentFrameRef.current = frameIndex;
        requestAnimationFrame(() => drawFrame(frameIndex));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Bind resizing handler
    const handleResize = () => {
      resizeCanvas();
      drawFrame(currentFrameRef.current);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isLoaded, totalFrames, drawFrame, resizeCanvas]);

  return {
    canvasRef,
    containerRef,
    isLoaded,
    loadProgress,
    scrollHeight,
  };
}
