import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { playEagleSound, playHoverSound } from "../lib/sound-fx";

interface EagleAnimationProps {
  isTerminalActive?: boolean;
  onScreech?: () => void;
  className?: string;
}

export function EagleAnimation({
  isTerminalActive = false,
  onScreech,
  className = "",
}: EagleAnimationProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);
  const [speed, setSpeed] = useState(485);
  const [showHud, setShowHud] = useState(false);

  // Speed telemetry ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setSpeed((prev) => {
        const delta = Math.floor(Math.random() * 24) - 12;
        return Math.max(420, Math.min(680, prev + delta));
      });
    }, 1400);
    return () => clearInterval(timer);
  }, []);

  const handleLaunch = useCallback(() => {
    if (isLaunching) return;
    setIsLaunching(true);
    setShowHud(true);
    playEagleSound();
    onScreech?.();

    // Reset after full sky dive & loop sequence
    setTimeout(() => {
      setIsLaunching(false);
      setTimeout(() => setShowHud(false), 2400);
    }, 3600);
  }, [isLaunching, onScreech]);

  useEffect(() => {
    const onTrigger = () => handleLaunch();
    window.addEventListener("launch-eagle-flight", onTrigger);
    return () => window.removeEventListener("launch-eagle-flight", onTrigger);
  }, [handleLaunch]);

  return (
    <div
      className={`relative flex flex-col items-center select-none pointer-events-auto ${className}`}
      onMouseEnter={() => {
        setIsHovered(true);
        playHoverSound();
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Free Fire Style Tactical HUD */}
      <AnimatePresence>
        {(isHovered || showHud || isLaunching) && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.9, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 8, scale: 0.92, filter: "blur(4px)" }}
            transition={{ duration: 0.22 }}
            className="absolute -top-10 z-40 flex items-center gap-2 rounded-full border border-orange-500/50 bg-black/90 px-3.5 py-1 backdrop-blur-md shadow-[0_0_25px_rgba(249,115,22,0.4)] whitespace-nowrap"
          >
            <span className="h-2 w-2 rounded-full bg-orange-500 animate-ping" />
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-orange-400 font-bold">
              {isLaunching
                ? "FALCO · SKYLINE SPREE DIVE // MACH 3.4"
                : isTerminalActive
                  ? `FALCO [HELLFIRE] · AIR SPD ${speed} KM/H`
                  : `FALCO [APEX RAPTOR] · AIR SPD ${speed} KM/H`}
            </span>
            <span className="text-[10px] text-amber-400">🔥</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Eagle Pet Container with interactive launch flight */}
      <motion.div
        onClick={handleLaunch}
        className="relative cursor-pointer group"
        title="Majestic Eagle Guardian — Click to trigger Skyline Spree aerial dive! (or type 'eagle')"
        animate={
          isLaunching
            ? {
                // High-speed aerial ascent & dive roll loop
                y: [0, -60, -260, -300, 45, 0],
                scale: [1, 1.25, 0.45, 0.15, 1.15, 1],
                rotate: [0, -12, -28, -360, 10, 0],
                opacity: [1, 1, 0.5, 0, 0.95, 1],
              }
            : isHovered
              ? {
                  // Aggressive predator lock-on hover
                  y: [0, -8, -4, -10, 0],
                  rotate: [-1, 1.5, -0.5, 1, -1],
                  scale: 1.05,
                }
              : {
                  // Gentle soaring perch breathing cycle
                  y: [0, -6, -10, -5, 0],
                  rotate: [-0.8, 0.8, -0.5, 1, -0.8],
                  scale: [1, 1.02, 1.03, 1.01, 1],
                }
        }
        transition={
          isLaunching
            ? {
                duration: 3.6,
                times: [0, 0.22, 0.48, 0.65, 0.88, 1],
                ease: [0.16, 1, 0.3, 1],
              }
            : {
                duration: isHovered ? 2.0 : 3.6,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      >
        {/* Burning Embers & Thermal Flame Sparks */}
        <div className="absolute inset-0 pointer-events-none overflow-visible">
          {[
            { id: 1, left: "14%", top: "40%", delay: 0, duration: 1.6 },
            { id: 2, left: "28%", top: "60%", delay: 0.4, duration: 1.9 },
            { id: 3, left: "50%", top: "72%", delay: 0.8, duration: 1.7 },
            { id: 4, left: "72%", top: "60%", delay: 0.2, duration: 2.0 },
            { id: 5, left: "86%", top: "40%", delay: 0.6, duration: 1.8 },
          ].map((p) => (
            <motion.span
              key={p.id}
              className="absolute w-1.5 h-1.5 rounded-full bg-gradient-to-t from-orange-600 to-amber-300 shadow-[0_0_8px_rgba(249,115,22,0.9)]"
              style={{ left: p.left, top: p.top }}
              animate={{
                y: [0, -35, -70],
                x: [(p.id % 2 === 0 ? -1 : 1) * 8, (p.id % 2 === 0 ? 1 : -1) * 16],
                opacity: [0, 0.95, 0],
                scale: [0.6, 1.3, 0.2],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        {/* Hellfire Flame Thermal Aura */}
        <motion.div
          className="absolute -inset-8 -top-12 rounded-full pointer-events-none"
          animate={{
            opacity: isLaunching ? [0.8, 1, 0.4] : isHovered ? 0.85 : 0.45,
            scale: isHovered ? 1.15 : [1, 1.08, 1],
          }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(249,115,22,0.32) 0%, rgba(220,38,38,0.16) 45%, transparent 75%)",
            filter: "blur(20px)",
          }}
        />

        {/* Supersonic Launch Shockwave Ring */}
        <AnimatePresence>
          {isLaunching && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0.9 }}
              animate={{ scale: 2.8, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 rounded-full border-2 border-orange-500/80 pointer-events-none shadow-[0_0_30px_rgba(249,115,22,0.8)]"
            />
          )}
        </AnimatePresence>

        {/* Authentic Photorealistic Eagle Video Animation */}
        <div className="relative w-[210px] sm:w-[260px] md:w-[300px] aspect-[480/262] flex items-end justify-center">
          <picture>
            <source src="/assets/eagle-animated.webp" type="image/webp" />
            <img
              src="/assets/eagle-poster.png"
              alt="Majestic Eagle Guardian"
              className="w-full h-full object-contain filter drop-shadow-[0_12px_32px_rgba(0,0,0,0.85)] pointer-events-none transform-gpu"
              draggable={false}
            />
          </picture>

          {/* Golden Eye Optic Gleam */}
          <motion.div
            className="absolute top-[18%] left-[51%] -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-amber-200 pointer-events-none shadow-[0_0_8px_#fde047]"
            animate={{
              opacity: isHovered ? [0.6, 1, 0.6] : [0.2, 0.8, 0.2],
              scale: isHovered ? [1, 1.4, 1] : [0.8, 1.1, 0.8],
            }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* High-Tech Terminal Perch Dock (Talons rest right on this bar) */}
        <div className="relative -mt-1 w-[110px] sm:w-[130px] mx-auto flex flex-col items-center">
          {/* Glowing neon perch plate */}
          <div className="w-full h-[3px] rounded-full bg-gradient-to-r from-transparent via-orange-500 to-transparent shadow-[0_0_12px_rgba(249,115,22,0.8)]" />
          <div className="flex items-center gap-1 mt-0.5 opacity-60 group-hover:opacity-100 transition-opacity">
            <span className="w-1 h-1 rounded-full bg-orange-400" />
            <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-orange-400/80 font-semibold">
              FALCO · DOCK
            </span>
            <span className="w-1 h-1 rounded-full bg-orange-400" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
