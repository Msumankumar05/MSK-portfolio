import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { playMatrixSound } from "../lib/sound-fx";
import { X } from "lucide-react";

interface MatrixRainProps {
  onClose: () => void;
}

export function MatrixRain({ onClose }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    playMatrixSound();

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const chars = "MSK0101XYZΑΒΓΔΩ0123456789ｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ";
    const fontSize = 15;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));

    let animationId: number;

    const render = () => {
      // Semi-transparent black to create fading trail
      ctx.fillStyle = "rgba(4, 8, 6, 0.12)";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "#00ff88";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Bright leading character
        if (Math.random() > 0.85) {
          ctx.fillStyle = "#ffffff";
          ctx.shadowBlur = 8;
          ctx.shadowColor = "#00ff88";
        } else {
          ctx.fillStyle = "rgba(0, 255, 136, 0.85)";
          ctx.shadowBlur = 0;
        }

        ctx.fillText(text, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    // Auto-timeout after 7.5 seconds
    const timer = setTimeout(onClose, 7500);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKeyDown);
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      className="fixed inset-0 z-[99999] cursor-pointer bg-black/90 backdrop-blur-md"
    >
      <canvas ref={canvasRef} className="block h-full w-full" />

      {/* Top Cyber Banner */}
      <div className="pointer-events-none absolute left-6 top-6 flex items-center gap-3">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff88] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff88]" />
        </span>
        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-[#00ff88]">
          MATRIX CYBER CORE // MSK TERMINAL ACTIVE
        </span>
      </div>

      {/* Exit Button & Hint */}
      <div className="absolute right-6 top-6 flex items-center gap-4">
        <span className="hidden sm:inline font-mono text-[9px] uppercase tracking-[0.25em] text-white/50">
          Press ESC or click to exit
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#00ff88]/40 bg-black/60 text-[#00ff88] transition hover:bg-[#00ff88] hover:text-black"
          aria-label="Close Matrix mode"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Center cyber label */}
      <div className="pointer-events-none absolute bottom-12 left-1/2 -translate-x-1/2 text-center">
        <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#00ff88]/80">
          SYSTEM INTEGRITY: 100% // MAKOJU SUMAN KUMAR
        </div>
      </div>
    </motion.div>
  );
}
