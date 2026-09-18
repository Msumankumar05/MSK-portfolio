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
  const [altitude, setAltitude] = useState(2480);
  const [showHud, setShowHud] = useState(false);

  // Altitude telemetry ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setAltitude((prev) => {
        const delta = Math.floor(Math.random() * 15) - 7;
        return Math.max(2100, Math.min(3800, prev + delta));
      });
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  const handleLaunch = () => {
    if (isLaunching) return;
    setIsLaunching(true);
    setShowHud(true);
    playEagleSound();
    onScreech?.();

    // Reset after full sky loop sequence (3.2 seconds)
    setTimeout(() => {
      setIsLaunching(false);
      setTimeout(() => setShowHud(false), 2000);
    }, 3200);
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
      {/* Flight Telemetry HUD pill */}
      <AnimatePresence>
        {(isHovered || showHud || isLaunching) && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 6, scale: 0.92, filter: "blur(4px)" }}
            transition={{ duration: 0.2 }}
            className="absolute -top-7 z-40 flex items-center gap-1.5 rounded-full border border-[var(--pf-c1)]/30 bg-black/85 px-2.5 py-0.5 backdrop-blur-md shadow-[0_0_15px_rgba(245,193,74,0.2)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--pf-c1)] animate-ping" />
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/90 font-semibold">
              {isLaunching
                ? "APEX EAGLE // MACH 2.4 ASCENT"
                : isTerminalActive
                ? `APEX VANGUARD // ALT ${altitude}M // ACTIVE`
                : `APEX EAGLE // ALT ${altitude}M // SOARING`}
            </span>
            <span className="text-[8px] text-[var(--pf-c1)] hidden sm:inline">✦</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Eagle Flying Container */}
      <motion.div
        onClick={handleLaunch}
        className="relative cursor-pointer group"
        title="Apex Cyber Eagle — Click to launch sky soar!"
        animate={
          isLaunching
            ? {
                // Supersonic climb and aerial loop
                y: [0, -40, -180, -220, 40, 0],
                scale: [1, 1.15, 0.5, 0.2, 1.08, 1],
                rotate: [0, -8, -18, -360, 8, 0],
                opacity: [1, 1, 0.4, 0, 0.9, 1],
              }
            : isHovered
            ? {
                // High-lift hover glide
                y: [0, -8, -4, -10, 0],
                rotate: [-1, 1.5, -0.5, 1, -1],
                scale: 1.04,
              }
            : {
                // Majestic upward climbing & soaring cycle
                y: [0, -14, -24, -12, 0],
                rotate: [-2, 2.5, -1, 3, -2],
                scale: [1, 1.02, 1.03, 1.01, 1],
              }
        }
        transition={
          isLaunching
            ? {
                duration: 3.2,
                times: [0, 0.25, 0.5, 0.65, 0.88, 1],
                ease: [0.16, 1, 0.3, 1],
              }
            : {
                duration: isHovered ? 2.6 : 3.8,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      >
        {/* Aerodynamic Lift Stream Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-visible">
          {[
            { id: 1, left: "20%", delay: 0, duration: 1.8 },
            { id: 2, left: "50%", delay: 0.6, duration: 2.1 },
            { id: 3, left: "80%", delay: 1.1, duration: 1.9 },
          ].map((p) => (
            <motion.span
              key={p.id}
              className="absolute w-1 h-1 rounded-full bg-[var(--pf-c1)]/60 shadow-[0_0_6px_var(--pf-c1)]"
              style={{ left: p.left, top: "60%" }}
              animate={{
                y: [0, 35, 55],
                opacity: [0, 0.8, 0],
                scale: [0.5, 1.2, 0.2],
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

        {/* Ambient Eagle Halo / Thermal Updraft Glow */}
        <motion.div
          className="absolute -inset-4 -top-8 rounded-full pointer-events-none"
          animate={{
            opacity: isLaunching ? [0.6, 1, 0.4] : isHovered ? 0.75 : 0.45,
            scale: isHovered ? 1.12 : [1, 1.06, 1],
          }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(ellipse at 50% 45%, rgb(from var(--pf-c1) r g b / 0.22) 0%, rgb(from var(--pf-c3) r g b / 0.08) 45%, transparent 75%)",
            filter: "blur(14px)",
          }}
        />

        {/* Vector Cyber Eagle SVG */}
        <svg
          viewBox="0 0 200 120"
          className="w-[145px] sm:w-[170px] h-[85px] sm:h-[100px] overflow-visible drop-shadow-[0_8px_20px_rgba(0,0,0,0.7)]"
        >
          <defs>
            {/* Primary Golden Feather Gradient */}
            <linearGradient id="eagle-gold-feather" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffd700" />
              <stop offset="35%" stopColor="var(--pf-c1)" />
              <stop offset="75%" stopColor="#b45309" />
              <stop offset="100%" stopColor="#451a03" />
            </linearGradient>

            {/* Wing Covert Metallic Slate Gradient */}
            <linearGradient id="eagle-dark-wing" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="40%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            {/* Torso & Head Metallic Gradient */}
            <linearGradient id="eagle-body-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="25%" stopColor="#cbd5e1" />
              <stop offset="65%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#090d16" />
            </linearGradient>

            {/* Beak Gradient */}
            <linearGradient id="eagle-beak-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>

            {/* Neon Quill Circuit Glow Filter */}
            <filter id="eagle-quill-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ================= LEFT WING (FLAPPING) ================= */}
          <motion.g
            style={{ transformOrigin: "92px 50px" }}
            animate={
              isLaunching
                ? {
                    // Rapid high-power flaps during takeoff
                    rotate: [28, -32, 28],
                    scaleY: [0.85, 1.18, 0.85],
                    skewY: [-8, 12, -8],
                  }
                : isHovered
                ? {
                    // Wide thermal glide
                    rotate: [-6, -2, -6],
                    scaleY: [1.02, 1.05, 1.02],
                  }
                : {
                    // Normal rhythmic flight cycle (upstroke & downstroke)
                    rotate: [20, -26, 20],
                    scaleY: [0.88, 1.12, 0.88],
                    skewY: [-5, 8, -5],
                  }
            }
            transition={{
              duration: isLaunching ? 0.35 : isHovered ? 2.4 : 1.05,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Wingtip Vortex Trail (Left) */}
            <motion.path
              d="M 12,25 C 2,20 -8,28 -14,35"
              fill="none"
              stroke="var(--pf-c1)"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity={0.65}
              animate={{
                strokeDashoffset: [0, -30],
                opacity: [0.2, 0.7, 0.2],
              }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              strokeDasharray="4 4"
            />

            {/* Outer Primaries (Fingered Flight Feathers) */}
            {/* Primary 1 - Extreme Wingtip */}
            <path
              d="M 90,50 C 65,30 35,20 12,24 C 18,29 28,34 42,42 Z"
              fill="url(#eagle-gold-feather)"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="0.5"
            />
            {/* Primary 2 */}
            <path
              d="M 85,52 C 60,34 32,27 16,34 C 23,39 34,44 48,50 Z"
              fill="url(#eagle-gold-feather)"
              opacity="0.95"
            />
            {/* Primary 3 */}
            <path
              d="M 82,54 C 62,40 38,36 24,44 C 32,49 44,54 58,58 Z"
              fill="url(#eagle-gold-feather)"
              opacity="0.9"
            />
            {/* Primary 4 */}
            <path
              d="M 80,56 C 65,46 46,45 34,54 C 44,58 56,62 70,64 Z"
              fill="url(#eagle-gold-feather)"
              opacity="0.85"
            />
            {/* Primary 5 */}
            <path
              d="M 82,58 C 70,52 56,53 46,63 C 58,66 72,68 84,66 Z"
              fill="url(#eagle-gold-feather)"
              opacity="0.8"
            />

            {/* Inner Wing / Secondaries & Coverts */}
            <path
              d="M 92,50 C 72,42 50,44 38,48 C 50,58 68,66 90,62 Z"
              fill="url(#eagle-dark-wing)"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="0.5"
            />

            {/* Leading Edge Arm Bone Structure */}
            <path
              d="M 92,48 Q 55,28 14,24 Q 52,32 90,46 Z"
              fill="#1e293b"
              stroke="var(--pf-c1)"
              strokeWidth="0.8"
              opacity="0.9"
            />

            {/* Glowing Cyber Wing Circuit / Energy Quill Lines */}
            <path
              d="M 90,48 Q 55,32 16,25"
              fill="none"
              stroke="var(--pf-c1)"
              strokeWidth="1.2"
              filter="url(#eagle-quill-glow)"
            />
            <path
              d="M 68,39 L 28,36"
              fill="none"
              stroke="var(--pf-c3)"
              strokeWidth="0.75"
              opacity="0.7"
            />
            <path
              d="M 75,44 L 38,47"
              fill="none"
              stroke="var(--pf-c1)"
              strokeWidth="0.75"
              opacity="0.7"
            />
          </motion.g>

          {/* ================= RIGHT WING (FLAPPING) ================= */}
          <motion.g
            style={{ transformOrigin: "108px 50px" }}
            animate={
              isLaunching
                ? {
                    // Rapid high-power flaps during takeoff
                    rotate: [-28, 32, -28],
                    scaleY: [0.85, 1.18, 0.85],
                    skewY: [8, -12, 8],
                  }
                : isHovered
                ? {
                    // Wide thermal glide
                    rotate: [6, 2, 6],
                    scaleY: [1.02, 1.05, 1.02],
                  }
                : {
                    // Normal rhythmic flight cycle (symmetrical counter-flap)
                    rotate: [-20, 26, -20],
                    scaleY: [0.88, 1.12, 0.88],
                    skewY: [5, -8, 5],
                  }
            }
            transition={{
              duration: isLaunching ? 0.35 : isHovered ? 2.4 : 1.05,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Wingtip Vortex Trail (Right) */}
            <motion.path
              d="M 188,25 C 198,20 208,28 214,35"
              fill="none"
              stroke="var(--pf-c1)"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity={0.65}
              animate={{
                strokeDashoffset: [0, -30],
                opacity: [0.2, 0.7, 0.2],
              }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              strokeDasharray="4 4"
            />

            {/* Outer Primaries (Fingered Flight Feathers) */}
            {/* Primary 1 - Extreme Wingtip */}
            <path
              d="M 110,50 C 135,30 165,20 188,24 C 182,29 172,34 158,42 Z"
              fill="url(#eagle-gold-feather)"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="0.5"
            />
            {/* Primary 2 */}
            <path
              d="M 115,52 C 140,34 168,27 184,34 C 177,39 166,44 152,50 Z"
              fill="url(#eagle-gold-feather)"
              opacity="0.95"
            />
            {/* Primary 3 */}
            <path
              d="M 118,54 C 138,40 162,36 176,44 C 168,49 156,54 142,58 Z"
              fill="url(#eagle-gold-feather)"
              opacity="0.9"
            />
            {/* Primary 4 */}
            <path
              d="M 120,56 C 135,46 154,45 166,54 C 156,58 144,62 130,64 Z"
              fill="url(#eagle-gold-feather)"
              opacity="0.85"
            />
            {/* Primary 5 */}
            <path
              d="M 118,58 C 130,52 144,53 154,63 C 142,66 128,68 116,66 Z"
              fill="url(#eagle-gold-feather)"
              opacity="0.8"
            />

            {/* Inner Wing / Secondaries & Coverts */}
            <path
              d="M 108,50 C 128,42 150,44 162,48 C 150,58 132,66 110,62 Z"
              fill="url(#eagle-dark-wing)"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="0.5"
            />

            {/* Leading Edge Arm Bone Structure */}
            <path
              d="M 108,48 Q 145,28 186,24 Q 148,32 110,46 Z"
              fill="#1e293b"
              stroke="var(--pf-c1)"
              strokeWidth="0.8"
              opacity="0.9"
            />

            {/* Glowing Cyber Wing Circuit / Energy Quill Lines */}
            <path
              d="M 110,48 Q 145,32 184,25"
              fill="none"
              stroke="var(--pf-c1)"
              strokeWidth="1.2"
              filter="url(#eagle-quill-glow)"
            />
            <path
              d="M 132,39 L 172,36"
              fill="none"
              stroke="var(--pf-c3)"
              strokeWidth="0.75"
              opacity="0.7"
            />
            <path
              d="M 125,44 L 162,47"
              fill="none"
              stroke="var(--pf-c1)"
              strokeWidth="0.75"
              opacity="0.7"
            />
          </motion.g>

          {/* ================= TAIL FEATHERS (FAN) ================= */}
          <motion.g
            style={{ transformOrigin: "100px 75px" }}
            animate={{
              rotate: isHovered ? [0, 0] : [-3, 3, -3],
              scaleY: [0.96, 1.04, 0.96],
            }}
            transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Splayed Tail Feathers */}
            {/* Outer Left */}
            <path
              d="M 94,74 L 84,102 Q 88,106 93,103 L 97,74 Z"
              fill="url(#eagle-dark-wing)"
              stroke="var(--pf-c1)"
              strokeWidth="0.5"
            />
            {/* Mid Left */}
            <path
              d="M 96,75 L 91,108 Q 95,111 99,109 L 99,75 Z"
              fill="url(#eagle-gold-feather)"
              opacity="0.9"
            />
            {/* Center Feather */}
            <path
              d="M 98,75 L 97,112 Q 100,115 103,112 L 102,75 Z"
              fill="url(#eagle-body-grad)"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="0.5"
            />
            {/* Mid Right */}
            <path
              d="M 101,75 L 101,109 Q 105,111 109,108 L 104,75 Z"
              fill="url(#eagle-gold-feather)"
              opacity="0.9"
            />
            {/* Outer Right */}
            <path
              d="M 103,74 L 107,103 Q 112,106 116,102 L 106,74 Z"
              fill="url(#eagle-dark-wing)"
              stroke="var(--pf-c1)"
              strokeWidth="0.5"
            />
          </motion.g>

          {/* ================= CENTRAL BODY & TORSO ================= */}
          {/* Main Aerodynamic Torso */}
          <path
            d="M 92,48 C 88,60 92,76 100,82 C 108,76 112,60 108,48 Z"
            fill="url(#eagle-body-grad)"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="0.8"
          />

          {/* Layered Cyber Chest Plates / Feather Chevrons */}
          <path
            d="M 93,52 L 100,58 L 107,52"
            fill="none"
            stroke="var(--pf-c1)"
            strokeWidth="1"
            opacity="0.85"
          />
          <path
            d="M 94,60 L 100,66 L 106,60"
            fill="none"
            stroke="var(--pf-c3)"
            strokeWidth="0.9"
            opacity="0.75"
          />
          <path
            d="M 96,68 L 100,73 L 104,68"
            fill="none"
            stroke="var(--pf-c1)"
            strokeWidth="0.8"
            opacity="0.7"
          />

          {/* Aerodynamic Tucked Golden Talons */}
          <g transform="translate(0, 0)">
            {/* Left Talon */}
            <path
              d="M 94,80 L 92,86 L 90,89 M 94,80 L 94,88 L 93,91 M 95,80 L 96,87 L 97,90"
              stroke="#fbbf24"
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="none"
            />
            {/* Right Talon */}
            <path
              d="M 106,80 L 108,86 L 110,89 M 106,80 L 106,88 L 107,91 M 105,80 L 104,87 L 103,90"
              stroke="#fbbf24"
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="none"
            />
          </g>

          {/* ================= HEAD & HOOD ================= */}
          {/* White / Platinum Eagle Head Plumage */}
          <path
            d="M 94,40 C 93,30 96,24 100,24 C 104,24 107,30 106,40 C 104,46 96,46 94,40 Z"
            fill="url(#eagle-body-grad)"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="0.6"
          />

          {/* Occipital Feather Crest at Nape */}
          <path
            d="M 97,25 L 100,19 L 103,25"
            fill="none"
            stroke="var(--pf-c1)"
            strokeWidth="1"
          />

          {/* Fierce Cyber Eyes */}
          {/* Left Eye */}
          <motion.circle
            cx="96.5"
            cy="33"
            r="1.4"
            fill="var(--pf-c1)"
            filter="url(#eagle-quill-glow)"
            animate={{
              opacity: isHovered ? [1, 0.7, 1] : 1,
              scale: isHovered ? 1.3 : 1,
            }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
          <path
            d="M 94,31.5 L 98,33"
            stroke="#0f172a"
            strokeWidth="0.8"
            strokeLinecap="round"
          />

          {/* Right Eye */}
          <motion.circle
            cx="103.5"
            cy="33"
            r="1.4"
            fill="var(--pf-c1)"
            filter="url(#eagle-quill-glow)"
            animate={{
              opacity: isHovered ? [1, 0.7, 1] : 1,
              scale: isHovered ? 1.3 : 1,
            }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
          <path
            d="M 106,31.5 L 102,33"
            stroke="#0f172a"
            strokeWidth="0.8"
            strokeLinecap="round"
          />

          {/* Curved Golden Eagle Beak */}
          <path
            d="M 98,36 C 97,42 99,48 100,50 C 101,48 103,42 102,36 Z"
            fill="url(#eagle-beak-grad)"
            stroke="#78350f"
            strokeWidth="0.5"
          />
          {/* Beak Hook Tip */}
          <path
            d="M 100,43 Q 100,51 99.2,52"
            fill="none"
            stroke="#451a03"
            strokeWidth="0.8"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Terminal Perch Base Beam with Pulsing Energy Node */}
      <div className="relative w-28 h-[3px] -mt-1 flex items-center justify-center">
        {/* Glowing Horizon line */}
        <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--pf-c1)]/60 to-transparent" />
        {/* Core energy node */}
        <span className="relative z-10 h-1.5 w-1.5 rounded-full bg-[var(--pf-c1)] shadow-[0_0_8px_var(--pf-c1)]" />
      </div>
    </div>
  );
}
