import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Zap, MessageSquare, Cpu } from "lucide-react";

interface CyberDollProps {
  isTerminalActive?: boolean;
  className?: string;
}

const DOLL_QUOTES = [
  "Hi! I'm MSK's Cyber Companion ✦",
  "Try typing 'neofetch' or 'skills' in the terminal!",
  "Full-stack MERN, Flutter & AI ready to deploy ⚡",
  "Over 1,500+ hours coded and counting!",
  "Psst... switch themes using the palette below 🎨",
  "Click me anytime to recharge my cyber core 🔋",
  "Type 'help' in the terminal to unlock commands 🤖",
  "Built with love, caffeine & TypeScript ☕",
];

type Expression = "idle" | "happy" | "stars" | "scanning";

export function CyberDoll({ isTerminalActive = false, className = "" }: CyberDollProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPoked, setIsPoked] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [showBubble, setShowBubble] = useState(false);
  const [blinking, setBlinking] = useState(false);
  const [expression, setExpression] = useState<Expression>("idle");
  const [particles, setParticles] = useState<Array<{ id: number; icon: string; x: number }>>([]);
  const [scanLine, setScanLine] = useState(0);
  const bubbleTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Periodic blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlinking(true);
      setTimeout(() => setBlinking(false), 160);
    }, 3800);
    return () => clearInterval(blinkInterval);
  }, []);

  // Animate HUD scan line when terminal active
  useEffect(() => {
    if (!isTerminalActive) return;
    const id = setInterval(() => {
      setScanLine((v) => (v + 1) % 20);
    }, 80);
    return () => clearInterval(id);
  }, [isTerminalActive]);

  // Periodic greeting bubbles
  useEffect(() => {
    const bubbleInterval = setInterval(() => {
      if (!isHovered && !isPoked) {
        setQuoteIndex((prev) => (prev + 1) % DOLL_QUOTES.length);
        setShowBubble(true);
        setTimeout(() => setShowBubble(false), 4500);
      }
    }, 14000);
    return () => clearInterval(bubbleInterval);
  }, [isHovered, isPoked]);

  // Handle poke / tap interaction
  const handlePoke = useCallback(() => {
    setIsPoked(true);
    setExpression("stars");
    setQuoteIndex((prev) => (prev + 1) % DOLL_QUOTES.length);
    setShowBubble(true);

    const icons = ["✨", "⚡", "💖", "✦", "🤖", "🌟"];
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];
    const newParticle = {
      id: Date.now() + Math.random(),
      icon: randomIcon,
      x: (Math.random() - 0.5) * 60,
    };
    setParticles((prev) => [...prev.slice(-5), newParticle]);

    if (bubbleTimerRef.current) clearTimeout(bubbleTimerRef.current);
    bubbleTimerRef.current = setTimeout(() => {
      setShowBubble(false);
    }, 5200);

    setTimeout(() => {
      setIsPoked(false);
      setExpression("happy");
      setTimeout(() => setExpression("idle"), 2000);
    }, 900);
  }, []);

  // External poke trigger via terminal command
  useEffect(() => {
    const onExternalPoke = () => handlePoke();
    window.addEventListener("poke-cyber-doll", onExternalPoke);
    return () => window.removeEventListener("poke-cyber-doll", onExternalPoke);
  }, [handlePoke]);

  // Clean up oldest particle after animation
  useEffect(() => {
    if (particles.length > 0) {
      const timer = setTimeout(() => {
        setParticles((prev) => prev.slice(1));
      }, 1400);
      return () => clearTimeout(timer);
    }
  }, [particles]);

  const activeExpression: Expression = isTerminalActive ? "scanning" : expression;

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
          setTimeout(() => setShowBubble(false), 2200);
        }
      }}
    >
      {/* ── Floating Speech Bubble ── */}
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.8, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 8, scale: 0.9, filter: "blur(4px)" }}
            transition={{ type: "spring", stiffness: 380, damping: 26 }}
            className="absolute -top-[64px] sm:-top-[70px] z-50 flex items-start gap-2 rounded-2xl border border-white/10 bg-black/90 px-3 py-1.5 sm:px-3.5 sm:py-2 shadow-[0_10px_40px_rgba(0,0,0,0.8)] backdrop-blur-2xl max-w-[220px] sm:max-w-[260px] pointer-events-none"
            style={{
              boxShadow:
                "0 0 20px rgba(var(--pf-c1-raw, 99,102,241),0.18), 0 10px 30px rgba(0,0,0,0.7)",
            }}
          >
            <div className="mt-0.5 flex h-4 w-4 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-lg bg-[var(--pf-c1)]/20 text-[var(--pf-c1)] border border-[var(--pf-c1)]/30">
              {expression === "stars" ? (
                <Zap className="h-3 w-3" />
              ) : isTerminalActive ? (
                <Cpu className="h-3 w-3" />
              ) : isHovered ? (
                <Sparkles className="h-3 w-3" />
              ) : (
                <MessageSquare className="h-3 w-3" />
              )}
            </div>
            <p className="font-mono text-[9px] sm:text-[10px] leading-snug text-white/90 tracking-wide">
              {DOLL_QUOTES[quoteIndex]}
            </p>
            {/* Bubble pointer arrow */}
            <div className="absolute -bottom-[7px] left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-b border-r border-white/10 bg-black/90" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating Particles on Poke ── */}
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 1, y: 0, x: p.x, scale: 0.6 }}
            animate={{
              opacity: 0,
              y: -55,
              x: p.x + (Math.random() - 0.5) * 30,
              scale: 1.4,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.3, ease: "easeOut" }}
            className="pointer-events-none absolute top-6 z-40 text-sm"
          >
            {p.icon}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* ── Main Doll Button ── */}
      <motion.button
        type="button"
        onClick={handlePoke}
        aria-label="Interact with MSK Cyber Doll companion"
        className="group relative cursor-pointer outline-none focus:outline-none"
        animate={
          isPoked
            ? {
                y: [-8, -22, -4, -14, 0],
                rotate: [-8, 10, -5, 5, 0],
                scale: [1, 1.16, 0.94, 1.05, 1],
              }
            : isHovered
              ? { y: [0, -7, 0], scale: 1.07 }
              : { y: [0, -5, 0], scale: 1 }
        }
        transition={
          isPoked
            ? { duration: 0.85, ease: "easeInOut" }
            : { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }
      >
        {/* Ambient halo glow */}
        <div
          className="absolute inset-0 -top-4 rounded-full opacity-35 blur-2xl transition-opacity duration-300 group-hover:opacity-70 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, var(--pf-c1) 0%, var(--pf-c2) 40%, transparent 70%)",
          }}
        />

        {/* ── Pro SVG Doll ── */}
        <svg
          viewBox="0 0 140 170"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 drop-shadow-[0_12px_30px_rgba(0,0,0,0.7)] overflow-visible w-[118px] h-[143px] sm:w-[140px] sm:h-[170px]"
        >
          <defs>
            {/* ── Filters ── */}
            <filter id="cd-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="cd-soft-glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="cd-strong-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* ── Gradients ── */}
            <linearGradient
              id="cd-helmet"
              x1="70"
              y1="10"
              x2="70"
              y2="80"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1e293b" />
              <stop offset="0.5" stopColor="#0d1524" />
              <stop offset="1" stopColor="#07090f" />
            </linearGradient>

            <linearGradient
              id="cd-visor"
              x1="70"
              y1="28"
              x2="70"
              y2="68"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#060b16" />
              <stop offset="1" stopColor="#030508" />
            </linearGradient>

            <linearGradient
              id="cd-body"
              x1="70"
              y1="78"
              x2="70"
              y2="120"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1a2540" />
              <stop offset="0.5" stopColor="#0f172a" />
              <stop offset="1" stopColor="#070b14" />
            </linearGradient>

            <linearGradient
              id="cd-arm"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
              gradientUnits="objectBoundingBox"
            >
              <stop stopColor="#1e293b" />
              <stop offset="1" stopColor="#0d1524" />
            </linearGradient>

            <linearGradient
              id="cd-leg"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
              gradientUnits="objectBoundingBox"
            >
              <stop stopColor="#0f172a" />
              <stop offset="1" stopColor="#07090f" />
            </linearGradient>

            <linearGradient id="cd-accent" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="var(--pf-c1)" />
              <stop offset="1" stopColor="var(--pf-c2)" />
            </linearGradient>

            <radialGradient id="cd-eye-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--pf-c1)" stopOpacity="1" />
              <stop offset="100%" stopColor="var(--pf-c1)" stopOpacity="0.3" />
            </radialGradient>

            {/* Circuit texture pattern */}
            <pattern
              id="cd-circuit"
              x="0"
              y="0"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 5 H4 M6 5 H10 M5 0 V4 M5 6 V10"
                stroke="var(--pf-c1)"
                strokeWidth="0.3"
                strokeOpacity="0.25"
              />
              <circle cx="5" cy="5" r="1" fill="var(--pf-c1)" fillOpacity="0.2" />
            </pattern>
          </defs>

          {/* ── HAIR / SPIKY CYBER FRINGE ── */}
          <g>
            {/* Main hair mass */}
            <path
              d="M38 40 C36 28 34 18 42 12 C46 8 54 6 70 6 C86 6 94 8 98 12 C106 18 104 28 102 40"
              fill="#0a0e1a"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
            />
            {/* Spiky strands */}
            <path d="M42 22 C40 14 38 10 36 8 C40 10 44 16 46 22" fill="#111827" />
            <path d="M52 18 C50 10 51 5 54 2 C56 6 56 12 56 18" fill="#111827" />
            <path d="M64 16 C62 8 65 3 70 0 C75 3 78 8 76 16" fill="#0f1623" />
            <path d="M80 18 C82 10 84 5 86 2 C88 6 88 12 88 18" fill="#111827" />
            <path d="M94 22 C96 14 98 10 100 8 C98 10 95 16 93 22" fill="#111827" />
            {/* Accent neon strand highlight */}
            <path
              d="M66 10 C68 4 72 1 74 0 C76 3 76 7 74 12"
              stroke="var(--pf-c1)"
              strokeWidth="1"
              strokeOpacity="0.5"
              fill="none"
              filter="url(#cd-glow)"
            />
          </g>

          {/* ── TOP ANTENNA ── */}
          <g>
            <line
              x1="70"
              y1="12"
              x2="70"
              y2="2"
              stroke="var(--pf-c1)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="70" cy="1" r="3.5" fill="var(--pf-c1)" filter="url(#cd-glow)" />
            <motion.circle
              cx="70"
              cy="1"
              r="5"
              fill="transparent"
              stroke="var(--pf-c1)"
              strokeWidth="1.2"
              animate={{ r: [3, 9, 3], opacity: [0.9, 0, 0.9] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            />
            {/* Side fin details on antenna */}
            <line
              x1="66"
              y1="7"
              x2="70"
              y2="7"
              stroke="var(--pf-c1)"
              strokeWidth="1"
              strokeOpacity="0.6"
            />
            <line
              x1="74"
              y1="7"
              x2="70"
              y2="7"
              stroke="var(--pf-c1)"
              strokeWidth="1"
              strokeOpacity="0.6"
            />
          </g>

          {/* ── MECH EAR SENSORS ── */}
          {/* Left ear */}
          <g>
            <rect
              x="24"
              y="42"
              width="9"
              height="20"
              rx="4.5"
              fill="#1a2540"
              stroke="var(--pf-c1)"
              strokeWidth="1.2"
            />
            <rect
              x="26"
              y="46"
              width="5"
              height="3"
              rx="1.5"
              fill="var(--pf-c1)"
              opacity="0.7"
              filter="url(#cd-glow)"
            />
            <rect x="26" y="51" width="5" height="2" rx="1" fill="var(--pf-c1)" opacity="0.4" />
            <rect x="26" y="55" width="5" height="2" rx="1" fill="var(--pf-c1)" opacity="0.25" />
          </g>
          {/* Right ear */}
          <g>
            <rect
              x="107"
              y="42"
              width="9"
              height="20"
              rx="4.5"
              fill="#1a2540"
              stroke="var(--pf-c1)"
              strokeWidth="1.2"
            />
            <rect
              x="109"
              y="46"
              width="5"
              height="3"
              rx="1.5"
              fill="var(--pf-c1)"
              opacity="0.7"
              filter="url(#cd-glow)"
            />
            <rect x="109" y="51" width="5" height="2" rx="1" fill="var(--pf-c1)" opacity="0.4" />
            <rect x="109" y="55" width="5" height="2" rx="1" fill="var(--pf-c1)" opacity="0.25" />
          </g>

          {/* ── CYBER HELMET / HEAD ── */}
          <rect
            x="30"
            y="18"
            width="80"
            height="64"
            rx="26"
            fill="url(#cd-helmet)"
            stroke="rgba(255,255,255,0.14)"
            strokeWidth="1.5"
          />
          {/* Circuit overlay on helmet */}
          <rect
            x="30"
            y="18"
            width="80"
            height="64"
            rx="26"
            fill="url(#cd-circuit)"
            opacity="0.6"
          />
          {/* Helmet ridge lines */}
          <path
            d="M35 25 Q70 18 105 25"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M31 38 Q70 28 109 38"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="1"
            fill="none"
          />

          {/* ── VISOR GLASS ── */}
          <rect
            x="36"
            y="30"
            width="68"
            height="40"
            rx="16"
            fill="url(#cd-visor)"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />
          {/* Visor gloss top reflection */}
          <path d="M42 33 C54 30 86 30 98 33 C92 39 48 39 42 33 Z" fill="rgba(255,255,255,0.1)" />
          {/* Visor bottom glow tint */}
          <rect x="36" y="58" width="68" height="12" rx="8" fill="var(--pf-c1)" opacity="0.04" />

          {/* ── ANIMATED EYES ── */}
          <g id="doll-eyes">
            {blinking ? (
              <>
                <line
                  x1="52"
                  y1="51"
                  x2="64"
                  y2="51"
                  stroke="var(--pf-c1)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  filter="url(#cd-glow)"
                />
                <line
                  x1="76"
                  y1="51"
                  x2="88"
                  y2="51"
                  stroke="var(--pf-c1)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  filter="url(#cd-glow)"
                />
              </>
            ) : activeExpression === "happy" ? (
              <>
                <path
                  d="M50 53 C53 47 63 47 66 53"
                  stroke="var(--pf-c1)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  filter="url(#cd-glow)"
                />
                <path
                  d="M74 53 C77 47 87 47 90 53"
                  stroke="var(--pf-c1)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  filter="url(#cd-glow)"
                />
              </>
            ) : activeExpression === "stars" ? (
              <>
                {/* Star eyes */}
                <path
                  d="M58 44 L59.5 49 L65 50.5 L59.5 52 L58 57 L56.5 52 L51 50.5 L56.5 49 Z"
                  fill="var(--pf-c1)"
                  filter="url(#cd-soft-glow)"
                />
                <path
                  d="M82 44 L83.5 49 L89 50.5 L83.5 52 L82 57 L80.5 52 L75 50.5 L80.5 49 Z"
                  fill="var(--pf-c1)"
                  filter="url(#cd-soft-glow)"
                />
              </>
            ) : activeExpression === "scanning" ? (
              <>
                {/* HUD scanner eyes */}
                <rect
                  x="48"
                  y="47"
                  width="20"
                  height="7"
                  rx="3.5"
                  fill="var(--pf-c1)"
                  opacity="0.15"
                />
                <rect
                  x="72"
                  y="47"
                  width="20"
                  height="7"
                  rx="3.5"
                  fill="var(--pf-c1)"
                  opacity="0.15"
                />
                <rect
                  x="48"
                  y="47"
                  width="20"
                  height="7"
                  rx="3.5"
                  stroke="var(--pf-c1)"
                  strokeWidth="1"
                  fill="none"
                  filter="url(#cd-glow)"
                />
                <rect
                  x="72"
                  y="47"
                  width="20"
                  height="7"
                  rx="3.5"
                  stroke="var(--pf-c1)"
                  strokeWidth="1"
                  fill="none"
                  filter="url(#cd-glow)"
                />
                {/* Scanning line inside eye boxes */}
                <motion.rect
                  x="49"
                  y="49"
                  width="18"
                  height="2"
                  rx="1"
                  fill="var(--pf-c1)"
                  opacity="0.9"
                  animate={{ x: [49, 60, 49], opacity: [0.9, 0.3, 0.9] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                />
                <motion.rect
                  x="73"
                  y="49"
                  width="18"
                  height="2"
                  rx="1"
                  fill="var(--pf-c1)"
                  opacity="0.9"
                  animate={{ x: [73, 84, 73], opacity: [0.3, 0.9, 0.3] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                />
                <circle cx="58" cy="50.5" r="1.5" fill="#fff" opacity="0.8" />
                <circle cx="82" cy="50.5" r="1.5" fill="#fff" opacity="0.8" />
              </>
            ) : (
              <>
                {/* Default: round glowing eyes */}
                <circle cx="58" cy="51" r="7" fill="url(#cd-eye-glow)" filter="url(#cd-glow)" />
                <circle cx="82" cy="51" r="7" fill="url(#cd-eye-glow)" filter="url(#cd-glow)" />
                {/* Iris */}
                <circle cx="58" cy="51" r="4.5" fill="var(--pf-c1)" />
                <circle cx="82" cy="51" r="4.5" fill="var(--pf-c1)" />
                {/* Pupil */}
                <circle cx="58" cy="51" r="2.5" fill="#050812" />
                <circle cx="82" cy="51" r="2.5" fill="#050812" />
                {/* Pupil specular highlight */}
                <circle cx="59.5" cy="49.5" r="1.2" fill="#ffffff" />
                <circle cx="83.5" cy="49.5" r="1.2" fill="#ffffff" />
                {/* Eye outer ring glow */}
                <circle
                  cx="58"
                  cy="51"
                  r="7"
                  fill="none"
                  stroke="var(--pf-c1)"
                  strokeWidth="0.8"
                  strokeOpacity="0.5"
                />
                <circle
                  cx="82"
                  cy="51"
                  r="7"
                  fill="none"
                  stroke="var(--pf-c1)"
                  strokeWidth="0.8"
                  strokeOpacity="0.5"
                />
              </>
            )}

            {/* Neon blush cheeks */}
            {(isHovered || activeExpression === "happy" || activeExpression === "stars") && (
              <>
                <ellipse
                  cx="44"
                  cy="60"
                  rx="5"
                  ry="2.5"
                  fill="var(--pf-c2)"
                  opacity="0.5"
                  filter="url(#cd-glow)"
                />
                <ellipse
                  cx="96"
                  cy="60"
                  rx="5"
                  ry="2.5"
                  fill="var(--pf-c2)"
                  opacity="0.5"
                  filter="url(#cd-glow)"
                />
              </>
            )}

            {/* Animated mouth */}
            <path
              d={
                activeExpression === "happy" || activeExpression === "stars"
                  ? "M64 60 Q70 66 76 60"
                  : activeExpression === "scanning"
                    ? "M65 61 H75"
                    : "M66 61 Q70 64 74 61"
              }
              stroke="var(--pf-c1)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.85"
              filter="url(#cd-glow)"
            />
          </g>

          {/* ── NECK ── */}
          <rect
            x="61"
            y="80"
            width="18"
            height="8"
            rx="4"
            fill="#111827"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
          <line
            x1="64"
            y1="82"
            x2="76"
            y2="82"
            stroke="var(--pf-c1)"
            strokeWidth="0.8"
            strokeOpacity="0.4"
          />
          <line
            x1="64"
            y1="85"
            x2="76"
            y2="85"
            stroke="var(--pf-c1)"
            strokeWidth="0.8"
            strokeOpacity="0.4"
          />

          {/* ── BODY / TECH SUIT ── */}
          <rect
            x="38"
            y="86"
            width="64"
            height="36"
            rx="12"
            fill="url(#cd-body)"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1.5"
          />
          {/* Circuit overlay on suit */}
          <rect
            x="38"
            y="86"
            width="64"
            height="36"
            rx="12"
            fill="url(#cd-circuit)"
            opacity="0.5"
          />

          {/* Suit panel lines */}
          <path d="M56 88 L56 120" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <path d="M84 88 L84 120" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <path d="M42 100 H98" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <path d="M42 110 H98" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

          {/* Shoulder pad accents */}
          <rect
            x="38"
            y="86"
            width="16"
            height="8"
            rx="4"
            fill="#1e293b"
            stroke="var(--pf-c1)"
            strokeWidth="0.8"
            strokeOpacity="0.5"
          />
          <rect
            x="86"
            y="86"
            width="16"
            height="8"
            rx="4"
            fill="#1e293b"
            stroke="var(--pf-c1)"
            strokeWidth="0.8"
            strokeOpacity="0.5"
          />

          {/* Center MSK reactor diamond */}
          <motion.polygon
            points="70,91 76,97 70,103 64,97"
            fill="url(#cd-accent)"
            filter="url(#cd-strong-glow)"
            animate={{ opacity: [1, 0.7, 1], scale: [1, 1.05, 1] }}
            style={{ transformOrigin: "70px 97px" }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Inner reactor core */}
          <polygon points="70,93 74,97 70,101 66,97" fill="#050812" />
          <circle cx="70" cy="97" r="2" fill="var(--pf-c1)" filter="url(#cd-glow)" />

          {/* ── BELT / HIP ── */}
          <rect
            x="44"
            y="120"
            width="52"
            height="7"
            rx="3.5"
            fill="#0d1524"
            stroke="var(--pf-c1)"
            strokeWidth="0.8"
            strokeOpacity="0.6"
          />
          <rect
            x="64"
            y="121"
            width="12"
            height="5"
            rx="2.5"
            fill="var(--pf-c1)"
            opacity="0.8"
            filter="url(#cd-glow)"
          />

          {/* ── LEFT ARM (static, holding) ── */}
          <g>
            <rect
              x="28"
              y="89"
              width="12"
              height="22"
              rx="6"
              fill="url(#cd-arm)"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
            {/* arm detail ring */}
            <rect x="28" y="100" width="12" height="3" rx="1.5" fill="var(--pf-c1)" opacity="0.4" />
            {/* Cyber hand / fist */}
            <rect
              x="27"
              y="110"
              width="14"
              height="12"
              rx="5"
              fill="#1e293b"
              stroke="var(--pf-c1)"
              strokeWidth="0.8"
              strokeOpacity="0.7"
            />
            <circle cx="33" cy="122" r="2" fill="var(--pf-c1)" filter="url(#cd-glow)" />
          </g>

          {/* ── RIGHT ARM (animated wave) ── */}
          <motion.g
            animate={
              isHovered || isPoked
                ? { rotate: [-15, 28, -15], originX: "100px", originY: "90px" }
                : { rotate: [0, 8, 0], originX: "100px", originY: "90px" }
            }
            transition={{
              duration: isHovered || isPoked ? 0.9 : 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <rect
              x="100"
              y="89"
              width="12"
              height="22"
              rx="6"
              fill="url(#cd-arm)"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
            <rect
              x="100"
              y="100"
              width="12"
              height="3"
              rx="1.5"
              fill="var(--pf-c1)"
              opacity="0.4"
            />
            <rect
              x="99"
              y="110"
              width="14"
              height="12"
              rx="5"
              fill="#1e293b"
              stroke="var(--pf-c1)"
              strokeWidth="0.8"
              strokeOpacity="0.7"
            />
            {/* Fingertip sparkle */}
            <motion.circle
              cx="112"
              cy="118"
              r="1.8"
              fill="var(--pf-c1)"
              filter="url(#cd-glow)"
              animate={{ opacity: [1, 0.3, 1], r: [1.8, 2.5, 1.8] }}
              transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.g>

          {/* ── DANGLING LEFT LEG ── */}
          <motion.g
            animate={
              isPoked
                ? { rotate: [-22, 26, -18, 20, 0] }
                : isHovered
                  ? { rotate: [-14, 16, -14] }
                  : { rotate: [-6, 8, -6] }
            }
            transition={{
              duration: isPoked ? 0.75 : isHovered ? 1.7 : 2.8,
              repeat: isPoked ? 1 : Infinity,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "57px 127px" }}
          >
            {/* Hip joint */}
            <circle
              cx="57"
              cy="127"
              r="4"
              fill="#1e293b"
              stroke="var(--pf-c1)"
              strokeWidth="1"
              strokeOpacity="0.6"
            />
            {/* Upper leg */}
            <rect
              x="53"
              y="130"
              width="8"
              height="18"
              rx="4"
              fill="url(#cd-leg)"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
            />
            {/* Knee */}
            <rect
              x="52"
              y="147"
              width="10"
              height="4"
              rx="2"
              fill="var(--pf-c1)"
              opacity="0.75"
              filter="url(#cd-glow)"
            />
            {/* Lower leg */}
            <rect
              x="52"
              y="151"
              width="10"
              height="18"
              rx="4"
              fill="#1a2540"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
            {/* Cyber boot */}
            <rect
              x="50"
              y="167"
              width="14"
              height="8"
              rx="3"
              fill="#1e293b"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1"
            />
            {/* Glowing sole */}
            <rect
              x="49"
              y="174"
              width="16"
              height="3.5"
              rx="1.5"
              fill="var(--pf-c1)"
              filter="url(#cd-glow)"
            />
            {/* Boot detail */}
            <line
              x1="52"
              y1="169"
              x2="62"
              y2="169"
              stroke="var(--pf-c1)"
              strokeWidth="0.7"
              strokeOpacity="0.4"
            />
          </motion.g>

          {/* ── DANGLING RIGHT LEG (out-of-phase) ── */}
          <motion.g
            animate={
              isPoked
                ? { rotate: [26, -22, 20, -18, 0] }
                : isHovered
                  ? { rotate: [16, -14, 16] }
                  : { rotate: [8, -6, 8] }
            }
            transition={{
              duration: isPoked ? 0.75 : isHovered ? 1.7 : 2.8,
              repeat: isPoked ? 1 : Infinity,
              ease: "easeInOut",
              delay: isPoked ? 0.06 : 0.28,
            }}
            style={{ transformOrigin: "83px 127px" }}
          >
            {/* Hip joint */}
            <circle
              cx="83"
              cy="127"
              r="4"
              fill="#1e293b"
              stroke="var(--pf-c1)"
              strokeWidth="1"
              strokeOpacity="0.6"
            />
            {/* Upper leg */}
            <rect
              x="79"
              y="130"
              width="8"
              height="18"
              rx="4"
              fill="url(#cd-leg)"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
            />
            {/* Knee */}
            <rect
              x="78"
              y="147"
              width="10"
              height="4"
              rx="2"
              fill="var(--pf-c1)"
              opacity="0.75"
              filter="url(#cd-glow)"
            />
            {/* Lower leg */}
            <rect
              x="78"
              y="151"
              width="10"
              height="18"
              rx="4"
              fill="#1a2540"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
            {/* Cyber boot */}
            <rect
              x="76"
              y="167"
              width="14"
              height="8"
              rx="3"
              fill="#1e293b"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1"
            />
            {/* Glowing sole */}
            <rect
              x="75"
              y="174"
              width="16"
              height="3.5"
              rx="1.5"
              fill="var(--pf-c1)"
              filter="url(#cd-glow)"
            />
            {/* Boot detail */}
            <line
              x1="78"
              y1="169"
              x2="88"
              y2="169"
              stroke="var(--pf-c1)"
              strokeWidth="0.7"
              strokeOpacity="0.4"
            />
          </motion.g>

          {/* ── HUD Data overlay on visor (terminal mode) ── */}
          {isTerminalActive && (
            <g>
              <text
                x="38"
                y="43"
                fontFamily="monospace"
                fontSize="4.5"
                fill="var(--pf-c1)"
                opacity="0.45"
              >
                SYS:OK
              </text>
              <text
                x="86"
                y="43"
                fontFamily="monospace"
                fontSize="4.5"
                fill="var(--pf-c1)"
                opacity="0.45"
                textAnchor="end"
              >
                MSK//AI
              </text>
              {/* Animated scan line across visor */}
              <motion.line
                x1="36"
                y1="30"
                x2="104"
                y2="30"
                stroke="var(--pf-c1)"
                strokeWidth="1"
                strokeOpacity="0.35"
                animate={{ y1: [30, 70, 30], y2: [30, 70, 30] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
              />
            </g>
          )}
        </svg>

        {/* Shadow under doll */}
        <div className="mx-auto -mt-3 h-2 w-20 rounded-full bg-black/50 blur-[3px]" />

        {/* Hover tip pill */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-200 group-hover:opacity-100 whitespace-nowrap pointer-events-none">
          <span className="rounded-full border border-white/10 bg-black/80 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[var(--pf-c1)] backdrop-blur-lg shadow-lg">
            Click to poke ✦
          </span>
        </div>
      </motion.button>
    </div>
  );
}
