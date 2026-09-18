import React, { useState, useEffect } from "react";
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
  const [speed, setSpeed] = useState(480);
  const [showHud, setShowHud] = useState(false);

  // Free Fire Skyline Spree speed ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setSpeed((prev) => {
        const delta = Math.floor(Math.random() * 20) - 10;
        return Math.max(420, Math.min(680, prev + delta));
      });
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  const handleLaunch = () => {
    if (isLaunching) return;
    setIsLaunching(true);
    setShowHud(true);
    playEagleSound();
    onScreech?.();

    // Reset after full sky dive & loop sequence
    setTimeout(() => {
      setIsLaunching(false);
      setTimeout(() => setShowHud(false), 2400);
    }, 3400);
  };

  useEffect(() => {
    const onTrigger = () => handleLaunch();
    window.addEventListener("launch-eagle-flight", onTrigger);
    return () => window.removeEventListener("launch-eagle-flight", onTrigger);
  }, [isLaunching]);

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
            initial={{ opacity: 0, y: 10, scale: 0.9, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 6, scale: 0.92, filter: "blur(4px)" }}
            transition={{ duration: 0.2 }}
            className="absolute -top-8 z-40 flex items-center gap-2 rounded-full border border-orange-500/40 bg-black/90 px-3 py-1 backdrop-blur-md shadow-[0_0_20px_rgba(249,115,22,0.35)]"
          >
            <span className="h-2 w-2 rounded-full bg-orange-500 animate-ping" />
            <span className="font-mono text-[8.5px] uppercase tracking-[0.2em] text-orange-400 font-bold">
              {isLaunching
                ? "FALCO · SKYLINE SPREE DIVE // MACH 3.2"
                : isTerminalActive
                ? `FALCO [HELLFIRE] · DIVE SPD ${speed} KM/H`
                : `FALCO [RAPTOR] · AIR SPEED ${speed} KM/H`}
            </span>
            <span className="text-[9px] text-amber-400 font-black">🔥</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Free Fire Falco Falcon Container */}
      <motion.div
        onClick={handleLaunch}
        className="relative cursor-pointer group"
        title="Free Fire Falco Pet — Click to trigger Skyline Spree dive!"
        animate={
          isLaunching
            ? {
                // Free Fire Skyline Spree high-speed ascent & dive loop
                y: [0, -50, -220, -260, 40, 0],
                scale: [1, 1.25, 0.45, 0.15, 1.15, 1],
                rotate: [0, -12, -28, -360, 10, 0],
                opacity: [1, 1, 0.5, 0, 0.95, 1],
              }
            : isHovered
            ? {
                // Aggressive predator lock-on hover
                y: [0, -12, -6, -15, 0],
                rotate: [-2, 2.5, -1, 1.5, -2],
                scale: 1.06,
              }
            : {
                // Fierce upward flight and soaring climb cycle
                y: [0, -18, -28, -14, 0],
                rotate: [-3, 3, -1.5, 3.5, -3],
                scale: [1, 1.03, 1.05, 1.02, 1],
              }
        }
        transition={
          isLaunching
            ? {
                duration: 3.4,
                times: [0, 0.22, 0.48, 0.65, 0.88, 1],
                ease: [0.16, 1, 0.3, 1],
              }
            : {
                duration: isHovered ? 2.2 : 3.4,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      >
        {/* Burning Embers & Flame Sparks Emitter */}
        <div className="absolute inset-0 pointer-events-none overflow-visible">
          {[
            { id: 1, left: "15%", top: "45%", delay: 0, duration: 1.6 },
            { id: 2, left: "30%", top: "65%", delay: 0.4, duration: 1.9 },
            { id: 3, left: "50%", top: "70%", delay: 0.8, duration: 1.7 },
            { id: 4, left: "70%", top: "65%", delay: 0.2, duration: 2.0 },
            { id: 5, left: "85%", top: "45%", delay: 0.6, duration: 1.8 },
          ].map((p) => (
            <motion.span
              key={p.id}
              className="absolute w-1.5 h-1.5 rounded-full bg-gradient-to-t from-orange-600 to-amber-300 shadow-[0_0_8px_rgba(249,115,22,0.9)]"
              style={{ left: p.left, top: p.top }}
              animate={{
                y: [0, 40, 75],
                x: [(p.id % 2 === 0 ? -1 : 1) * 8, (p.id % 2 === 0 ? 1 : -1) * 16],
                opacity: [0, 0.95, 0],
                scale: [0.6, 1.4, 0.2],
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
          className="absolute -inset-6 -top-10 rounded-full pointer-events-none"
          animate={{
            opacity: isLaunching ? [0.7, 1, 0.5] : isHovered ? 0.85 : 0.55,
            scale: isHovered ? 1.15 : [1, 1.08, 1],
          }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(ellipse at 50% 45%, rgba(249,115,22,0.28) 0%, rgba(220,38,38,0.14) 45%, transparent 75%)",
            filter: "blur(16px)",
          }}
        />

        {/* Free Fire Falco Raptor SVG */}
        <svg
          viewBox="0 0 240 140"
          className="w-[165px] sm:w-[195px] h-[95px] sm:h-[115px] overflow-visible drop-shadow-[0_10px_25px_rgba(0,0,0,0.85)]"
        >
          <defs>
            {/* Hellfire Blade Gradient */}
            <linearGradient id="falco-hellfire-blade" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff7ed" />
              <stop offset="18%" stopColor="#fde047" />
              <stop offset="42%" stopColor="#fb923c" />
              <stop offset="72%" stopColor="#ea580c" />
              <stop offset="90%" stopColor="#b91c1c" />
              <stop offset="100%" stopColor="#450a0a" />
            </linearGradient>

            {/* Armored Cyber/Raptor Feather Gradient */}
            <linearGradient id="falco-armor-dark" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="35%" stopColor="#1e293b" />
              <stop offset="75%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>

            {/* Predator Skull & Mantle Gradient */}
            <linearGradient id="falco-skull-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fed7aa" />
              <stop offset="25%" stopColor="#fb923c" />
              <stop offset="60%" stopColor="#c2410c" />
              <stop offset="100%" stopColor="#1e1b4b" />
            </linearGradient>

            {/* Razor Raptor Hook Beak Gradient */}
            <linearGradient id="falco-raptor-beak" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="30%" stopColor="#f59e0b" />
              <stop offset="70%" stopColor="#b45309" />
              <stop offset="100%" stopColor="#1c1917" />
            </linearGradient>

            {/* Fierce Glow Filter */}
            <filter id="falco-flame-glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="3.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ================= LEFT WING (MASSIVE HELLFIRE BLADES) ================= */}
          <motion.g
            style={{ transformOrigin: "112px 56px" }}
            animate={
              isLaunching
                ? {
                    // High-speed Skyline Spree dive flaps
                    rotate: [32, -36, 32],
                    scaleY: [0.82, 1.22, 0.82],
                    skewY: [-10, 14, -10],
                  }
                : isHovered
                ? {
                    // Aggressive banked glide
                    rotate: [-8, -2, -8],
                    scaleY: [1.02, 1.06, 1.02],
                  }
                : {
                    // Powerful raptor wing flaps
                    rotate: [24, -28, 24],
                    scaleY: [0.86, 1.14, 0.86],
                    skewY: [-6, 9, -6],
                  }
            }
            transition={{
              duration: isLaunching ? 0.32 : isHovered ? 2.2 : 0.98,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Wingtip Fire Vortex Streak (Left) */}
            <motion.path
              d="M 10,22 C -6,16 -18,28 -26,38"
              fill="none"
              stroke="url(#falco-hellfire-blade)"
              strokeWidth="2.2"
              strokeLinecap="round"
              filter="url(#falco-flame-glow)"
              animate={{
                strokeDashoffset: [0, -40],
                opacity: [0.3, 0.9, 0.3],
              }}
              transition={{ duration: 0.65, repeat: Infinity, ease: "linear" }}
              strokeDasharray="6 4"
            />

            {/* Armored Wing Shoulder & Bone Core */}
            <path
              d="M 112,56 Q 70,30 16,22 Q 62,38 110,54 Z"
              fill="url(#falco-armor-dark)"
              stroke="#ea580c"
              strokeWidth="1.2"
            />

            {/* Blade 1 (Extreme Outer Primary Wingtip Knife) */}
            <path
              d="M 110,54 L 62,30 L 10,20 L 26,34 L 54,44 Z"
              fill="url(#falco-hellfire-blade)"
              stroke="#f97316"
              strokeWidth="0.8"
            />

            {/* Blade 2 (Outer Flame Blade) */}
            <path
              d="M 108,56 L 68,36 L 16,32 L 34,46 L 66,52 Z"
              fill="url(#falco-hellfire-blade)"
              opacity="0.95"
            />

            {/* Blade 3 (Mid Razor Feather) */}
            <path
              d="M 106,58 L 74,42 L 26,44 L 46,56 L 76,60 Z"
              fill="url(#falco-hellfire-blade)"
              opacity="0.92"
            />

            {/* Blade 4 (Mid-Inner Blade) */}
            <path
              d="M 104,60 L 80,48 L 38,56 L 58,66 L 86,66 Z"
              fill="url(#falco-hellfire-blade)"
              opacity="0.88"
            />

            {/* Blade 5 (Inner Secondary Feather) */}
            <path
              d="M 104,62 L 85,54 L 52,68 L 70,74 L 94,70 Z"
              fill="url(#falco-hellfire-blade)"
              opacity="0.84"
            />

            {/* Blade 6 (Covert Secondary) */}
            <path
              d="M 106,64 L 90,60 L 68,76 L 84,80 L 102,72 Z"
              fill="url(#falco-armor-dark)"
              stroke="#f97316"
              strokeWidth="0.6"
            />

            {/* Hellfire Energy Quills & Circuit Inlays */}
            <path
              d="M 110,55 Q 68,34 14,21"
              fill="none"
              stroke="#fde047"
              strokeWidth="1.6"
              filter="url(#falco-flame-glow)"
            />
            <path
              d="M 86,45 L 36,41"
              fill="none"
              stroke="#f97316"
              strokeWidth="1.2"
              opacity="0.85"
            />
            <path
              d="M 94,52 L 48,53"
              fill="none"
              stroke="#ef4444"
              strokeWidth="1"
              opacity="0.8"
            />

            {/* Outer Serrated Flame Blade Edge */}
            <polygon
              points="10,20 18,25 15,22"
              fill="#fff7ed"
              filter="url(#falco-flame-glow)"
            />
          </motion.g>

          {/* ================= RIGHT WING (MASSIVE HELLFIRE BLADES) ================= */}
          <motion.g
            style={{ transformOrigin: "128px 56px" }}
            animate={
              isLaunching
                ? {
                    // High-speed Skyline Spree dive flaps
                    rotate: [-32, 36, -32],
                    scaleY: [0.82, 1.22, 0.82],
                    skewY: [10, -14, 10],
                  }
                : isHovered
                ? {
                    // Aggressive banked glide
                    rotate: [8, 2, 8],
                    scaleY: [1.02, 1.06, 1.02],
                  }
                : {
                    // Powerful raptor wing flaps (symmetrical counter)
                    rotate: [-24, 28, -24],
                    scaleY: [0.86, 1.14, 0.86],
                    skewY: [6, -9, 6],
                  }
            }
            transition={{
              duration: isLaunching ? 0.32 : isHovered ? 2.2 : 0.98,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Wingtip Fire Vortex Streak (Right) */}
            <motion.path
              d="M 230,22 C 246,16 258,28 266,38"
              fill="none"
              stroke="url(#falco-hellfire-blade)"
              strokeWidth="2.2"
              strokeLinecap="round"
              filter="url(#falco-flame-glow)"
              animate={{
                strokeDashoffset: [0, -40],
                opacity: [0.3, 0.9, 0.3],
              }}
              transition={{ duration: 0.65, repeat: Infinity, ease: "linear" }}
              strokeDasharray="6 4"
            />

            {/* Armored Wing Shoulder & Bone Core */}
            <path
              d="M 128,56 Q 170,30 224,22 Q 178,38 130,54 Z"
              fill="url(#falco-armor-dark)"
              stroke="#ea580c"
              strokeWidth="1.2"
            />

            {/* Blade 1 (Extreme Outer Primary Wingtip Knife) */}
            <path
              d="M 130,54 L 178,30 L 230,20 L 214,34 L 186,44 Z"
              fill="url(#falco-hellfire-blade)"
              stroke="#f97316"
              strokeWidth="0.8"
            />

            {/* Blade 2 (Outer Flame Blade) */}
            <path
              d="M 132,56 L 172,36 L 224,32 L 206,46 L 174,52 Z"
              fill="url(#falco-hellfire-blade)"
              opacity="0.95"
            />

            {/* Blade 3 (Mid Razor Feather) */}
            <path
              d="M 134,58 L 166,42 L 214,44 L 194,56 L 164,60 Z"
              fill="url(#falco-hellfire-blade)"
              opacity="0.92"
            />

            {/* Blade 4 (Mid-Inner Blade) */}
            <path
              d="M 136,60 L 160,48 L 202,56 L 182,66 L 154,66 Z"
              fill="url(#falco-hellfire-blade)"
              opacity="0.88"
            />

            {/* Blade 5 (Inner Secondary Feather) */}
            <path
              d="M 136,62 L 155,54 L 188,68 L 170,74 L 146,70 Z"
              fill="url(#falco-hellfire-blade)"
              opacity="0.84"
            />

            {/* Blade 6 (Covert Secondary) */}
            <path
              d="M 134,64 L 150,60 L 172,76 L 156,80 L 138,72 Z"
              fill="url(#falco-armor-dark)"
              stroke="#f97316"
              strokeWidth="0.6"
            />

            {/* Hellfire Energy Quills & Circuit Inlays */}
            <path
              d="M 130,55 Q 172,34 226,21"
              fill="none"
              stroke="#fde047"
              strokeWidth="1.6"
              filter="url(#falco-flame-glow)"
            />
            <path
              d="M 154,45 L 204,41"
              fill="none"
              stroke="#f97316"
              strokeWidth="1.2"
              opacity="0.85"
            />
            <path
              d="M 146,52 L 192,53"
              fill="none"
              stroke="#ef4444"
              strokeWidth="1"
              opacity="0.8"
            />

            {/* Outer Serrated Flame Blade Edge */}
            <polygon
              points="230,20 222,25 225,22"
              fill="#fff7ed"
              filter="url(#falco-flame-glow)"
            />
          </motion.g>

          {/* ================= FORKED FALCON/PHOENIX TAIL ================= */}
          <motion.g
            style={{ transformOrigin: "120px 88px" }}
            animate={{
              rotate: isHovered ? [0, 0] : [-4, 4, -4],
              scaleY: [0.94, 1.06, 0.94],
            }}
            transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Outer Left Fork Blade */}
            <path
              d="M 112,86 L 94,124 L 102,126 L 116,86 Z"
              fill="url(#falco-hellfire-blade)"
              stroke="#ea580c"
              strokeWidth="0.6"
            />
            {/* Mid Left Blade */}
            <path
              d="M 115,87 L 106,132 L 114,133 L 118,87 Z"
              fill="url(#falco-hellfire-blade)"
              opacity="0.95"
            />
            {/* Center Spear Blade */}
            <path
              d="M 118,88 L 118,138 L 122,138 L 122,88 Z"
              fill="url(#falco-armor-dark)"
              stroke="#fde047"
              strokeWidth="0.8"
              filter="url(#falco-flame-glow)"
            />
            {/* Mid Right Blade */}
            <path
              d="M 122,87 L 126,133 L 134,132 L 125,87 Z"
              fill="url(#falco-hellfire-blade)"
              opacity="0.95"
            />
            {/* Outer Right Fork Blade */}
            <path
              d="M 124,86 L 138,126 L 146,124 L 128,86 Z"
              fill="url(#falco-hellfire-blade)"
              stroke="#ea580c"
              strokeWidth="0.6"
            />
          </motion.g>

          {/* ================= ARMORED RAPTOR TORSO ================= */}
          {/* Main Aerodynamic Body */}
          <path
            d="M 108,54 C 104,70 108,88 120,95 C 132,88 136,70 132,54 Z"
            fill="url(#falco-armor-dark)"
            stroke="#ea580c"
            strokeWidth="1.2"
          />

          {/* Free Fire Skyline Spree Chest Armor Plates */}
          <path
            d="M 110,60 L 120,68 L 130,60"
            fill="none"
            stroke="#f97316"
            strokeWidth="1.5"
          />
          <path
            d="M 112,68 L 120,76 L 128,68"
            fill="none"
            stroke="#fde047"
            strokeWidth="1.4"
            filter="url(#falco-flame-glow)"
          />
          <path
            d="M 114,77 L 120,84 L 126,77"
            fill="none"
            stroke="#ef4444"
            strokeWidth="1.2"
          />

          {/* Core Power Crystal (Free Fire Energy Gem) */}
          <polygon
            points="120,64 123,69 120,74 117,69"
            fill="#fef08a"
            stroke="#f59e0b"
            strokeWidth="0.8"
            filter="url(#falco-flame-glow)"
          />

          {/* Deadly Raptor Talons (Claws Ready to Strike) */}
          <g>
            {/* Left Talon */}
            <path
              d="M 112,92 L 108,102 L 104,107 M 112,92 L 111,104 L 110,109 M 114,92 L 116,103 L 118,108"
              stroke="#f59e0b"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
            />
            {/* Left Razor Claws */}
            <path
              d="M 104,107 Q 102,111 100,110 M 110,109 Q 109,114 107,113 M 118,108 Q 120,112 121,111"
              stroke="#1c1917"
              strokeWidth="1.6"
              strokeLinecap="round"
              fill="none"
            />

            {/* Right Talon */}
            <path
              d="M 128,92 L 132,102 L 136,107 M 128,92 L 129,104 L 130,109 M 126,92 L 124,103 L 122,108"
              stroke="#f59e0b"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
            />
            {/* Right Razor Claws */}
            <path
              d="M 136,107 Q 138,111 140,110 M 130,109 Q 131,114 133,113 M 122,108 Q 120,112 119,111"
              stroke="#1c1917"
              strokeWidth="1.6"
              strokeLinecap="round"
              fill="none"
            />
          </g>

          {/* ================= PREDATOR FALCON SKULL & HOOD ================= */}
          {/* Swept-Back Flaming Falcon Crest Feathers (Free Fire Falco Crown) */}
          <g>
            {/* Far Left Crest Spire */}
            <path
              d="M 112,30 L 98,12 L 114,26 Z"
              fill="url(#falco-hellfire-blade)"
              stroke="#f97316"
              strokeWidth="0.6"
            />
            {/* Mid Left Crest Spire */}
            <path
              d="M 115,26 L 108,4 L 118,22 Z"
              fill="url(#falco-hellfire-blade)"
              stroke="#fde047"
              strokeWidth="0.6"
            />
            {/* High Center Spire */}
            <path
              d="M 119,22 L 120,0 L 121,22 Z"
              fill="#fff7ed"
              stroke="#f59e0b"
              strokeWidth="0.8"
              filter="url(#falco-flame-glow)"
            />
            {/* Mid Right Crest Spire */}
            <path
              d="M 125,26 L 132,4 L 122,22 Z"
              fill="url(#falco-hellfire-blade)"
              stroke="#fde047"
              strokeWidth="0.6"
            />
            {/* Far Right Crest Spire */}
            <path
              d="M 128,30 L 142,12 L 126,26 Z"
              fill="url(#falco-hellfire-blade)"
              stroke="#f97316"
              strokeWidth="0.6"
            />
          </g>

          {/* Aerodynamic Raptor Head / Skull (Low, Sharp & Menacing) */}
          <path
            d="M 112,42 C 110,32 114,24 120,24 C 126,24 130,32 128,42 C 126,48 114,48 112,42 Z"
            fill="url(#falco-skull-grad)"
            stroke="#ea580c"
            strokeWidth="0.8"
          />

          {/* Fierce Aggressive Brow Ridges (Angry Predator Angle) */}
          {/* Left Brow */}
          <path
            d="M 111,32 L 119,36 L 112,37 Z"
            fill="#0f172a"
          />
          {/* Right Brow */}
          <path
            d="M 129,32 L 121,36 L 128,37 Z"
            fill="#0f172a"
          />

          {/* Glowing Hellfire Raptor Eyes */}
          {/* Left Eye */}
          <motion.polygon
            points="113,34 118,36 114,38"
            fill="#fde047"
            stroke="#ea580c"
            strokeWidth="0.5"
            filter="url(#falco-flame-glow)"
            animate={{
              opacity: isHovered ? [1, 0.75, 1] : [0.9, 1, 0.9],
              scale: isHovered ? 1.25 : 1,
            }}
            transition={{ duration: 0.6, repeat: Infinity }}
          />

          {/* Right Eye */}
          <motion.polygon
            points="127,34 122,36 126,38"
            fill="#fde047"
            stroke="#ea580c"
            strokeWidth="0.5"
            filter="url(#falco-flame-glow)"
            animate={{
              opacity: isHovered ? [1, 0.75, 1] : [0.9, 1, 0.9],
              scale: isHovered ? 1.25 : 1,
            }}
            transition={{ duration: 0.6, repeat: Infinity }}
          />

          {/* Deadly Elongated Razor Raptor Beak (NOT A ROUND PARROT BEAK!) */}
          {/* Upper Razor Hook */}
          <path
            d="M 117,37 L 120,56 Q 120.5,58 118.5,59 Q 118,54 117.5,45 Z"
            fill="url(#falco-raptor-beak)"
            stroke="#78350f"
            strokeWidth="0.7"
          />
          {/* Upper Right Beak Flange */}
          <path
            d="M 123,37 L 120,56 Q 120.5,58 121.5,59 Q 122,54 122.5,45 Z"
            fill="url(#falco-raptor-beak)"
            stroke="#78350f"
            strokeWidth="0.7"
          />

          {/* Lower Mandible Hook */}
          <path
            d="M 118,46 L 120,54 L 122,46 Z"
            fill="#451a03"
          />

          {/* Raptor Nostril Slit */}
          <ellipse
            cx="119"
            cy="40"
            rx="0.6"
            ry="1.4"
            fill="#1c1917"
            transform="rotate(-15 119 40)"
          />
          <ellipse
            cx="121"
            cy="40"
            rx="0.6"
            ry="1.4"
            fill="#1c1917"
            transform="rotate(15 121 40)"
          />
        </svg>
      </motion.div>

      {/* Free Fire Skyline Spree Perch Beam with Blazing Energy Line */}
      <div className="relative w-36 h-[4px] -mt-1 flex items-center justify-center">
        {/* Glowing Horizon Flame Line */}
        <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
        {/* Core Energy Flare */}
        <span className="relative z-10 h-2 w-2 rounded-full bg-gradient-to-r from-amber-300 to-orange-500 shadow-[0_0_12px_rgba(249,115,22,1)]" />
      </div>
    </div>
  );
}
