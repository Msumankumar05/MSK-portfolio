import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Zap, Heart, MessageSquare } from "lucide-react";

interface CyberDollProps {
  isTerminalActive?: boolean;
  className?: string;
}

const DOLL_QUOTES = [
  "Hi! I'm MSK's Cyber Companion ✦",
  "Try typing 'neofetch' or 'skills' in the terminal!",
  "Full-stack MERN, Flutter & AI ready to deploy ⚡",
  "Over 1,500+ hours coded and counting!",
  "Psst... press Cmd+K to open the Command Palette!",
  "Click me anytime to recharge my cyber core 🔋",
  "Love this design? Switch themes anytime below! 🎨",
];

export function CyberDoll({ isTerminalActive = false, className = "" }: CyberDollProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPoked, setIsPoked] = useState(false);
  const [pokeCount, setPokeCount] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [showBubble, setShowBubble] = useState(false);
  const [blinking, setBlinking] = useState(false);
  const [expression, setExpression] = useState<"idle" | "happy" | "stars" | "wink">("idle");
  const [particles, setParticles] = useState<Array<{ id: number; icon: string; x: number }>>([]);
  const bubbleTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Periodic blinking effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlinking(true);
      setTimeout(() => setBlinking(false), 180);
    }, 3600);
    return () => clearInterval(blinkInterval);
  }, []);

  // Periodic greeting bubbles
  useEffect(() => {
    const bubbleInterval = setInterval(() => {
      if (!isHovered && !isPoked) {
        setQuoteIndex((prev) => (prev + 1) % DOLL_QUOTES.length);
        setShowBubble(true);
        setTimeout(() => setShowBubble(false), 4200);
      }
    }, 14000);
    return () => clearInterval(bubbleInterval);
  }, [isHovered, isPoked]);

  // Handle poke / tap interaction
  const handlePoke = useCallback(() => {
    setIsPoked(true);
    setPokeCount((c) => c + 1);
    setExpression("stars");
    setQuoteIndex((prev) => (prev + 1) % DOLL_QUOTES.length);
    setShowBubble(true);

    // Spawn floating interaction particles
    const icons = ["✨", "⚡", "💖", "✦", "🤖"];
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];
    const newParticle = {
      id: Date.now() + Math.random(),
      icon: randomIcon,
      x: (Math.random() - 0.5) * 40,
    };
    setParticles((prev) => [...prev.slice(-4), newParticle]);

    if (bubbleTimerRef.current) clearTimeout(bubbleTimerRef.current);
    bubbleTimerRef.current = setTimeout(() => {
      setShowBubble(false);
    }, 5000);

    setTimeout(() => {
      setIsPoked(false);
      setExpression("happy");
      setTimeout(() => setExpression("idle"), 1800);
    }, 850);
  }, []);

  // Listen for terminal custom command: `doll` or `pet`
  useEffect(() => {
    const onExternalPoke = () => handlePoke();
    window.addEventListener("poke-cyber-doll", onExternalPoke);
    return () => window.removeEventListener("poke-cyber-doll", onExternalPoke);
  }, [handlePoke]);

  // Clean up particles
  useEffect(() => {
    if (particles.length > 0) {
      const timer = setTimeout(() => {
        setParticles((prev) => prev.slice(1));
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [particles]);

  return (
    <div
      className={`relative select-none pointer-events-auto flex flex-col items-center ${className}`}
      onMouseEnter={() => {
        setIsHovered(true);
        setExpression("happy");
        setShowBubble(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        if (!isPoked) {
          setExpression("idle");
          setTimeout(() => setShowBubble(false), 2000);
        }
      }}
    >
      {/* ── Holographic Floating Speech Bubble ── */}
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.85, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 8, scale: 0.9, filter: "blur(4px)" }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="absolute -top-16 z-50 flex items-center gap-2 rounded-xl border border-white/15 bg-black/85 px-3 py-1.5 shadow-[0_10px_35px_rgba(0,0,0,0.8)] backdrop-blur-xl max-w-[240px] pointer-events-none"
          >
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[var(--pf-c1)]/15 text-[var(--pf-c1)] border border-[var(--pf-c1)]/30">
              {expression === "stars" ? (
                <Zap className="h-3 w-3" />
              ) : isTerminalActive ? (
                <Sparkles className="h-3 w-3" />
              ) : (
                <MessageSquare className="h-3 w-3" />
              )}
            </div>
            <p className="font-mono text-[10px] leading-tight text-white/90">
              {DOLL_QUOTES[quoteIndex]}
            </p>
            {/* Bubble arrow */}
            <div className="absolute -bottom-1.5 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 border-b border-r border-white/15 bg-black/85" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating Sparks/Hearts on Click ── */}
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 1, y: 0, x: p.x, scale: 0.5 }}
            animate={{ opacity: 0, y: -45, x: p.x + (Math.random() - 0.5) * 20, scale: 1.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="pointer-events-none absolute -top-4 z-40 text-xs"
          >
            {p.icon}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* ── Interactive Doll Character (SVG + Framer Motion) ── */}
      <motion.button
        type="button"
        onClick={handlePoke}
        aria-label="Interact with MSK Cyber Doll companion"
        className="group relative cursor-pointer outline-none focus:outline-none"
        animate={
          isPoked
            ? {
                y: [-6, -18, -2, -10, 0],
                rotate: [-6, 8, -4, 4, 0],
                scale: [1, 1.14, 0.96, 1.04, 1],
              }
            : isHovered
              ? {
                  y: [0, -6, 0],
                  scale: 1.06,
                }
              : {
                  y: [0, -4, 0],
                  scale: 1,
                }
        }
        transition={
          isPoked
            ? { duration: 0.8, ease: "easeInOut" }
            : { duration: 2.8, repeat: Infinity, ease: "easeInOut" }
        }
      >
        {/* Ambient Halo Behind Head */}
        <div
          className="absolute inset-0 -top-2 rounded-full opacity-40 blur-xl transition-opacity duration-300 group-hover:opacity-75"
          style={{ background: "radial-gradient(circle, var(--pf-c1) 0%, transparent 70%)" }}
        />

        <svg
          width="104"
          height="124"
          viewBox="0 0 104 124"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)] overflow-visible"
        >
          <defs>
            {/* Glow Filter */}
            <filter id="cyber-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Helmet Gradients */}
            <linearGradient
              id="helmet-grad"
              x1="52"
              y1="12"
              x2="52"
              y2="68"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1e293b" />
              <stop offset="1" stopColor="#0a0f1d" />
            </linearGradient>

            <linearGradient
              id="visor-grad"
              x1="52"
              y1="26"
              x2="52"
              y2="56"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#080c16" />
              <stop offset="1" stopColor="#04060a" />
            </linearGradient>

            <linearGradient
              id="body-grad"
              x1="52"
              y1="64"
              x2="52"
              y2="92"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1e293b" />
              <stop offset="0.6" stopColor="#0f172a" />
              <stop offset="1" stopColor="#070b14" />
            </linearGradient>

            <linearGradient id="accent-grad" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="var(--pf-c1)" />
              <stop offset="1" stopColor="var(--pf-c2)" />
            </linearGradient>
          </defs>

          {/* ── Top Antenna with pulsing signal beacon ── */}
          <g className="antenna">
            <line
              x1="52"
              y1="14"
              x2="52"
              y2="4"
              stroke="var(--pf-c1)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="52" cy="3" r="3" fill="var(--pf-c1)" filter="url(#cyber-glow)" />
            <motion.circle
              cx="52"
              cy="3"
              r="5"
              fill="transparent"
              stroke="var(--pf-c1)"
              strokeWidth="1"
              animate={{ r: [3, 7, 3], opacity: [0.9, 0, 0.9] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
            />
          </g>

          {/* ── Side Mech Ears / Audio Sensors ── */}
          {/* Left ear */}
          <g>
            <rect
              x="18"
              y="32"
              width="6"
              height="16"
              rx="3"
              fill="#334155"
              stroke="var(--pf-c1)"
              strokeWidth="1"
            />
            <circle cx="21" cy="40" r="1.5" fill="var(--pf-c1)" filter="url(#cyber-glow)" />
          </g>
          {/* Right ear */}
          <g>
            <rect
              x="80"
              y="32"
              width="6"
              height="16"
              rx="3"
              fill="#334155"
              stroke="var(--pf-c1)"
              strokeWidth="1"
            />
            <circle cx="83" cy="40" r="1.5" fill="var(--pf-c1)" filter="url(#cyber-glow)" />
          </g>

          {/* ── Cyber Head / Helmet ── */}
          <rect
            x="22"
            y="14"
            width="60"
            height="50"
            rx="20"
            fill="url(#helmet-grad)"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="1.5"
          />

          {/* Visor Bezel / Glass ── */}
          <rect
            x="27"
            y="23"
            width="50"
            height="32"
            rx="12"
            fill="url(#visor-grad)"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
          {/* Visor Gloss Reflection highlight */}
          <path
            d="M32 26 C42 24, 62 24, 72 26 C68 30, 40 30, 32 26 Z"
            fill="rgba(255,255,255,0.12)"
          />

          {/* ── Animated Eyes / Facial Expression ── */}
          <g id="doll-eyes">
            {blinking ? (
              // Blinking flat slits
              <>
                <line
                  x1="38"
                  y1="39"
                  x2="46"
                  y2="39"
                  stroke="var(--pf-c1)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  filter="url(#cyber-glow)"
                />
                <line
                  x1="58"
                  y1="39"
                  x2="66"
                  y2="39"
                  stroke="var(--pf-c1)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  filter="url(#cyber-glow)"
                />
              </>
            ) : expression === "happy" ? (
              // Happy curved upside-down U eyes
              <>
                <path
                  d="M37 41 C39 36, 45 36, 47 41"
                  stroke="var(--pf-c1)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                  filter="url(#cyber-glow)"
                />
                <path
                  d="M57 41 C59 36, 65 36, 67 41"
                  stroke="var(--pf-c1)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                  filter="url(#cyber-glow)"
                />
              </>
            ) : expression === "stars" ? (
              // Excitement star eyes
              <>
                <path
                  d="M42 34 L43 38 L47 39 L43 40 L42 44 L41 40 L37 39 L41 38 Z"
                  fill="var(--pf-c1)"
                  filter="url(#cyber-glow)"
                />
                <path
                  d="M62 34 L63 38 L67 39 L63 40 L62 44 L61 40 L57 39 L61 38 Z"
                  fill="var(--pf-c1)"
                  filter="url(#cyber-glow)"
                />
              </>
            ) : isTerminalActive ? (
              // Terminal active scanner eyes
              <>
                <rect
                  x="36"
                  y="37"
                  width="10"
                  height="4"
                  rx="2"
                  fill="var(--pf-c1)"
                  filter="url(#cyber-glow)"
                />
                <rect
                  x="58"
                  y="37"
                  width="10"
                  height="4"
                  rx="2"
                  fill="var(--pf-c1)"
                  filter="url(#cyber-glow)"
                />
                <circle cx="41" cy="39" r="1" fill="#fff" />
                <circle cx="63" cy="39" r="1" fill="#fff" />
              </>
            ) : (
              // Default curious glowing round eyes
              <>
                <circle cx="42" cy="39" r="4" fill="var(--pf-c1)" filter="url(#cyber-glow)" />
                <circle cx="43.5" cy="37.5" r="1.5" fill="#ffffff" />
                <circle cx="62" cy="39" r="4" fill="var(--pf-c1)" filter="url(#cyber-glow)" />
                <circle cx="63.5" cy="37.5" r="1.5" fill="#ffffff" />
              </>
            )}

            {/* Cute Neon Blush */}
            {(isHovered || expression === "happy" || expression === "stars") && (
              <>
                <ellipse
                  cx="34"
                  cy="46"
                  rx="3"
                  ry="1.5"
                  fill="var(--pf-c2)"
                  opacity="0.6"
                  filter="url(#cyber-glow)"
                />
                <ellipse
                  cx="70"
                  cy="46"
                  rx="3"
                  ry="1.5"
                  fill="var(--pf-c2)"
                  opacity="0.6"
                  filter="url(#cyber-glow)"
                />
              </>
            )}

            {/* Subtle smiling mouth */}
            <path
              d={
                expression === "happy" || expression === "stars"
                  ? "M49 46 Q52 50 55 46"
                  : "M50 46 Q52 48 54 46"
              }
              stroke="var(--pf-c1)"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.8"
            />
          </g>

          {/* ── Torso / Cyber Hoodie ── */}
          <rect
            x="32"
            y="62"
            width="40"
            height="26"
            rx="8"
            fill="url(#body-grad)"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1"
          />

          {/* MSK Chest Reactor Core */}
          <polygon points="52,69 56,73 52,77 48,73" fill="var(--pf-c1)" filter="url(#cyber-glow)" />
          {/* Neon zipper / seam line */}
          <line
            x1="52"
            y1="77"
            x2="52"
            y2="88"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
            strokeDasharray="2 2"
          />

          {/* ── Floating Robotic Arms & Hands ── */}
          {/* Left arm: holding edge or coffee cup */}
          <g>
            <rect
              x="25"
              y="65"
              width="8"
              height="15"
              rx="4"
              fill="#1e293b"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
            <circle cx="28" cy="80" r="3" fill="#334155" stroke="var(--pf-c1)" strokeWidth="1" />
          </g>

          {/* Right arm: animated friendly waving hand */}
          <motion.g
            animate={
              isHovered || isPoked
                ? { rotate: [-10, 24, -10], originX: "78px", originY: "66px" }
                : { rotate: [0, 6, 0], originX: "78px", originY: "66px" }
            }
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect
              x="71"
              y="65"
              width="8"
              height="15"
              rx="4"
              fill="#1e293b"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
            <circle cx="76" cy="80" r="3" fill="#334155" stroke="var(--pf-c1)" strokeWidth="1" />
            {/* Tiny holographic sparkle at fingertip */}
            <circle cx="78" cy="78" r="1" fill="var(--pf-c1)" filter="url(#cyber-glow)" />
          </motion.g>

          {/* ── Dangling Doll Legs (with real pendulum swinging physics) ── */}
          {/* Left Dangling Leg */}
          <motion.g
            animate={
              isPoked
                ? { rotate: [-20, 22, -15, 18, 0] }
                : isHovered
                  ? { rotate: [-12, 14, -12] }
                  : { rotate: [-5, 7, -5] }
            }
            transition={{
              duration: isPoked ? 0.7 : isHovered ? 1.6 : 2.6,
              repeat: isPoked ? 1 : Infinity,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "42px 88px" }}
          >
            {/* Upper leg */}
            <rect
              x="39"
              y="87"
              width="6"
              height="14"
              rx="3"
              fill="#0f172a"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
            {/* Knee joint ring */}
            <rect x="38" y="100" width="8" height="3" rx="1.5" fill="var(--pf-c1)" opacity="0.8" />
            {/* Lower boot */}
            <rect
              x="37"
              y="103"
              width="9"
              height="15"
              rx="4"
              fill="#1e293b"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="1"
            />
            {/* Glowing sneaker sole */}
            <rect
              x="36"
              y="117"
              width="12"
              height="3.5"
              rx="1.5"
              fill="var(--pf-c1)"
              filter="url(#cyber-glow)"
            />
          </motion.g>

          {/* Right Dangling Leg (out-of-phase swing for natural doll sway) */}
          <motion.g
            animate={
              isPoked
                ? { rotate: [22, -20, 18, -15, 0] }
                : isHovered
                  ? { rotate: [14, -12, 14] }
                  : { rotate: [7, -5, 7] }
            }
            transition={{
              duration: isPoked ? 0.7 : isHovered ? 1.6 : 2.6,
              repeat: isPoked ? 1 : Infinity,
              ease: "easeInOut",
              delay: isPoked ? 0.05 : 0.25,
            }}
            style={{ transformOrigin: "62px 88px" }}
          >
            {/* Upper leg */}
            <rect
              x="59"
              y="87"
              width="6"
              height="14"
              rx="3"
              fill="#0f172a"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
            {/* Knee joint ring */}
            <rect x="58" y="100" width="8" height="3" rx="1.5" fill="var(--pf-c1)" opacity="0.8" />
            {/* Lower boot */}
            <rect
              x="58"
              y="103"
              width="9"
              height="15"
              rx="4"
              fill="#1e293b"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="1"
            />
            {/* Glowing sneaker sole */}
            <rect
              x="56"
              y="117"
              width="12"
              height="3.5"
              rx="1.5"
              fill="var(--pf-c1)"
              filter="url(#cyber-glow)"
            />
          </motion.g>
        </svg>

        {/* Mini Perch Base Plate / Shadow */}
        <div className="mx-auto -mt-3.5 h-1.5 w-14 rounded-full bg-black/60 blur-[2px]" />

        {/* Interactive Tap Hint pill (on hover) */}
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-200 group-hover:opacity-100 whitespace-nowrap">
          <span className="rounded-full border border-white/10 bg-black/75 px-2 py-0.5 font-mono text-[8px] uppercase tracking-wider text-[var(--pf-c1)] backdrop-blur-md shadow-md">
            Click to poke ✦
          </span>
        </div>
      </motion.button>
    </div>
  );
}
