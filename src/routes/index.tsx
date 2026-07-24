import React, { useEffect, useRef, useState, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValue,
  useTransform,
  AnimatePresence,
  type MotionValue,
} from "framer-motion";
import Lenis from "lenis";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  ArrowUpRight,
  Download,
  Code2,
  Server,
  Smartphone,
  Database,
  Brain,
  Wrench,
  ArrowUp,
  Send,
  Sparkles,
  ExternalLink,
  GraduationCap,
  Rocket,
  Layers,
  Terminal,
  Cpu,
  BookOpen,
  Compass,
} from "lucide-react";

/* ---------- Data ---------- */

const NAV = [
  { id: "home", label: "Home", num: "00" },
  { id: "about", label: "About", num: "01" },
  { id: "stack", label: "Stack", num: "02" },
  { id: "work", label: "Work", num: "03" },
  { id: "journey", label: "Journey", num: "04" },
  { id: "arena", label: "Arena", num: "05" },
  { id: "contact", label: "Contact", num: "06" },
];

const SCENE_MAP: Record<string, { chapter: string; title: string }> = {
  home: { chapter: "Chapter I", title: "Hello World" },
  about: { chapter: "Chapter II", title: "The Builder" },
  stack: { chapter: "Chapter III", title: "The Toolkit" },
  work: { chapter: "Chapter IV", title: "Selected Work" },
  journey: { chapter: "Chapter V", title: "The Timeline" },
  arena: { chapter: "Chapter VI", title: "The Arena" },
  contact: { chapter: "Chapter VII", title: "Cross the Border" },
};

const TECH_BADGES = [
  "React",
  "Node.js",
  "MongoDB",
  "Flutter",
  "React Native",
  "Kotlin",
  "Firebase",
  "TypeScript",
  "AI",
  "MERN",
];

const STATS = [
  { label: "Projects Shipped", value: 7, suffix: "+" },
  { label: "Technologies", value: 14, suffix: "+" },
  { label: "GitHub Repos", value: 15, suffix: "+" },
  { label: "Coding Hours", value: 1562, suffix: "+" },
];

const SKILL_GROUPS = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS"],
  },
  { title: "Backend", icon: Server, items: ["Node.js", "Express.js"] },
  { title: "Mobile", icon: Smartphone, items: ["Flutter", "Kotlin", "React Native"] },
  { title: "Databases", icon: Database, items: ["MongoDB", "MySQL", "Firebase"] },
  {
    title: "AI",
    icon: Brain,
    items: ["LLMs", "Prompt Engineering", "AI Assistants", "Voice Interfaces"],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "VS Code", "Android Studio", "Postman", "Figma"],
  },
];

const PROJECTS = [
  {
    name: "Farmora",
    tag: "Full-Stack",
    category: "Farm-to-Home Marketplace",
    desc: "MERN-based e-commerce platform connecting farmers with customers through a seamless shopping experience.",
    longDesc:
      "A full-stack MERN application that enables customers to browse fresh produce, manage carts, place orders, and securely authenticate. Features an intuitive admin dashboard, responsive UI, REST APIs, and MongoDB for efficient product and order management.",
    stack: ["React", "Node.js", "JavaScript", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    accent: "var(--pf-c1)",
    icon: "🌱",
    metric: {
      value: "100%",
      unit: "",
      label: "Responsive design · Secure authentication · Admin dashboard",
    },
    liveUrl: "https://farmora-farm-to-home.vercel.app/",
    githubUrl: "https://github.com/Msumankumar05/farmora1",
  },
  {
    name: "CineDB",
    tag: "Frontend",
    category: "Movie Discovery Platform",
    desc: "A responsive movie discovery application with search, trending titles, detailed pages, and a modern UI.",
    longDesc:
      "A React-based movie discovery platform powered by the TMDB API. Users can explore trending movies, search for titles, view detailed information, browse cast details, and enjoy a fast, responsive interface built with reusable components.",
    stack: ["React", "JavaScript", "TMDB API", "Tailwind CSS", "Vite"],
    accent: "var(--pf-c2)",
    icon: "🎬",
    metric: {
      value: "100%",
      unit: "",
      label: "Responsive UI · Live TMDB API · Fast search experience",
    },
    liveUrl: "https://cine-dbase.vercel.app/",
  },
  {
    name: "SKY AI",
    tag: "AI Assistant",
    category: "AI-Powered Web Application",
    desc: "An intelligent AI assistant with real-time chat, voice interaction, and a clean, responsive interface.",
    longDesc:
      "An AI-powered web application built with React and Node.js, featuring real-time conversations, voice input using the Web Speech API, and AI-generated responses through the OpenRouter API. Designed with a modern, responsive interface to deliver an intuitive user experience.",
    stack: ["React", "Node.js", "Express", "OpenRouter API", "Web Speech API"],
    accent: "var(--pf-c1)",
    icon: "🤖",
    metric: {
      value: "24/7",
      unit: "",
      label: "AI conversations · Voice input · Responsive design",
    },
  },
  {
    name: "Mobile Todo",
    tag: "Mobile",
    category: "Task Management App",
    desc: "A Kotlin-based task management application with add, update, delete, local storage, reminders, and an intuitive user interface.",
    longDesc:
      "A Kotlin-based task management application features task addition, updates, deletion, local data persistence using Room Database, reminders, and a clean, responsive interface. Designed to deliver a simple and efficient productivity experience across Android devices.",
    stack: ["Kotlin", "Room Database", "Material Design", "Jetpack Compose"],
    accent: "var(--pf-c2)",
    icon: "📱",
    metric: {
      value: "100%",
      unit: "",
      label: "Offline storage · Task reminders · Clean UI",
    },
    githubUrl: "https://github.com/Msumankumar05/My-Tasks-app",
  },
  {
    name: "InterviewAI",
    tag: "AI Platform",
    category: "Career · Interview Preparation",
    desc: "An AI-powered interview preparation platform that transforms resumes into personalized interview experiences.",
    longDesc:
      "Currently under development, InterviewAI analyzes uploaded resumes and generates tailored interview questions, technical assessments, and personalized preparation plans. Designed to help students and professionals practice with role-specific AI-driven interviews.",
    stack: ["Next.js", "TypeScript", "AI", "Node.js"],
    accent: "#94a3b8",
    icon: "🧠",
    placeholder: true,
    metric: {
      value: "Soon",
      unit: "",
      label: "AI resume analysis · Personalized interview preparation",
    },
  },
  {
    name: "Project On",
    tag: "Mobile",
    category: "Coming Soon",
    desc: "A next-generation mobile application currently in development. Details will be revealed soon.",
    longDesc:
      "A confidential mobile project focused on delivering an innovative user experience with modern technologies. Development is actively in progress, and the complete feature set will be announced upon launch.",
    stack: ["Flutter", "Firebase", "AI"],
    accent: "#94a3b8",
    icon: "🚀",
    placeholder: true,
    metric: {
      value: "2026",
      unit: "",
      label: "Currently in development · Official reveal coming soon",
    },
  },
];

const CODING_PROFILES = {
  leetcode: {
    platform: "LeetCode",
    rankName: "Knight",
    sub: "LEETCODE · KNIGHT · 600+ PROBLEMS SOLVED",
    url: "https://leetcode.com/u/sumankumar/",
    stats: [
      { value: "600+", label: "PROBLEMS SOLVED" },
      { value: "180", label: "EASY SOLVED" },
      { value: "320", label: "MEDIUM SOLVED" },
      { value: "100", label: "HARD SOLVED" },
    ],
    breakdown: [
      { label: "Easy", count: 180, pct: 30, color: "bg-[var(--pf-c1)]" },
      { label: "Medium", count: 320, pct: 53.3, color: "bg-[#c9a0ff]" },
      { label: "Hard", count: 100, pct: 16.7, color: "bg-[var(--pf-c2)]" },
    ],
  },
  codeforces: {
    platform: "Codeforces",
    rankName: "Specialist",
    sub: "CODEFORCES · SPECIALIST · 1620 MAX RATING",
    url: "https://codeforces.com/profile/sumankumar",
    stats: [
      { value: "1620", label: "MAX RATING" },
      { value: "Specialist", label: "CURRENT RANK" },
      { value: "450+", label: "PROBLEMS SOLVED" },
      { value: "28", label: "CONTESTS" },
    ],
    breakdown: [
      { label: "Easy (800-1100)", count: 210, pct: 46.7, color: "bg-[var(--pf-c1)]" },
      { label: "Medium (1200-1500)", count: 180, pct: 40, color: "bg-[#c9a0ff]" },
      { label: "Hard (1600+)", count: 60, pct: 13.3, color: "bg-[var(--pf-c2)]" },
    ],
  },
  codechef: {
    platform: "CodeChef",
    rankName: "3-Star",
    sub: "CODECHEF · 3★ · 1680 RATING",
    url: "https://www.codechef.com/users/sumankumar",
    stats: [
      { value: "1680", label: "CURRENT RATING" },
      { value: "3★", label: "RATING BAND" },
      { value: "350+", label: "PROBLEMS SOLVED" },
      { value: "Div 2", label: "CURRENT DIVISION" },
    ],
    breakdown: [
      { label: "Easy", count: 190, pct: 54.3, color: "bg-[var(--pf-c1)]" },
      { label: "Medium", count: 120, pct: 34.3, color: "bg-[#c9a0ff]" },
      { label: "Hard", count: 40, pct: 11.4, color: "bg-[var(--pf-c2)]" },
    ],
  },
};

/* ---------- Helpers ---------- */

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return n;
}

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setSeen(true), {
      threshold: 0.25,
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return { ref, seen };
}

function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id) as HTMLElement | null;
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -40, duration: 1.4 });
    };
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
}

function Magnetic({
  children,
  strength = 0.28,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 180, damping: 15 });
  const y = useSpring(0, { stiffness: 180, damping: 15 });
  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      className={className}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

function HeroAurora({ mx, my }: { mx: MotionValue<number>; my: MotionValue<number> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  // Track mouse motion values
  useEffect(() => {
    const unsubX = mx.on("change", (v) => (mouseRef.current.x = (v + 1) / 2));
    const unsubY = my.on("change", (v) => (mouseRef.current.y = (v + 1) / 2));
    return () => { unsubX(); unsubY(); };
  }, [mx, my]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = 0, h = 0;

    // Read CSS variables for theme colors
    const getColors = () => {
      const style = getComputedStyle(document.documentElement);
      return {
        c1: style.getPropertyValue("--pf-c1").trim() || "#f5c14a",
        c2: style.getPropertyValue("--pf-c2").trim() || "#ff7a2d",
        c3: style.getPropertyValue("--pf-c3").trim() || "#ffd98a",
      };
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    // Robust CSS color parser to handle hex, rgb, and rgba formats
    const parseCssColor = (colorStr: string) => {
      const str = colorStr.trim();
      if (str.startsWith("rgb")) {
        const match = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (match) {
          return {
            r: parseInt(match[1], 10),
            g: parseInt(match[2], 10),
            b: parseInt(match[3], 10)
          };
        }
      }
      if (str.startsWith("#")) {
        const hex = str.slice(1);
        if (hex.length === 3) {
          return {
            r: parseInt(hex[0] + hex[0], 16),
            g: parseInt(hex[1] + hex[1], 16),
            b: parseInt(hex[2] + hex[2], 16)
          };
        }
        return {
          r: parseInt(hex.slice(0, 2), 16) || 0,
          g: parseInt(hex.slice(2, 4), 16) || 0,
          b: parseInt(hex.slice(4, 6), 16) || 0
        };
      }
      return { r: 255, g: 255, b: 255 };
    };

    // Aurora wave config
    const waves = [
      { speed: 0.0004, amp: 0.18, freq: 1.2, phase: 0, yBase: 0.65, colorIdx: 0, width: 0.22 },
      { speed: 0.0003, amp: 0.15, freq: 0.9, phase: 2.1, yBase: 0.55, colorIdx: 1, width: 0.18 },
      { speed: 0.00035, amp: 0.12, freq: 1.5, phase: 4.2, yBase: 0.72, colorIdx: 2, width: 0.15 },
      { speed: 0.00025, amp: 0.2, freq: 0.7, phase: 1.0, yBase: 0.48, colorIdx: 0, width: 0.25 },
      { speed: 0.00045, amp: 0.1, freq: 1.8, phase: 3.5, yBase: 0.78, colorIdx: 1, width: 0.12 },
    ];

    let t = 0;

    const draw = (timestamp: number) => {
      t = timestamp;
      const { c1, c2, c3 } = getColors();
      const colors = [parseCssColor(c1), parseCssColor(c2), parseCssColor(c3)];
      const mouse = mouseRef.current;

      ctx.clearRect(0, 0, w, h);

      // Draw aurora waves
      for (const wave of waves) {
        const col = colors[wave.colorIdx];
        const time = t * wave.speed + wave.phase;
        const mouseInfluence = (mouse.x - 0.5) * 0.08;

        ctx.beginPath();

        // Build wave path
        const points: Array<{ x: number; y: number }> = [];
        const steps = 80;
        for (let i = 0; i <= steps; i++) {
          const px = (i / steps) * w;
          const norm = i / steps;
          const waveY =
            Math.sin(norm * Math.PI * wave.freq * 2 + time) * wave.amp * h +
            Math.sin(norm * Math.PI * wave.freq * 3.7 + time * 1.3) * wave.amp * h * 0.3 +
            Math.cos(norm * Math.PI * 1.1 + time * 0.7) * wave.amp * h * 0.15;
          const mouseWarp = Math.sin((norm - mouse.x) * Math.PI * 2) * mouse.y * h * 0.04;
          const py = wave.yBase * h + waveY + mouseWarp + mouseInfluence * h;
          points.push({ x: px, y: py });
        }

        // Smooth curve through points
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length - 1; i++) {
          const cpx = (points[i].x + points[i + 1].x) / 2;
          const cpy = (points[i].y + points[i + 1].y) / 2;
          ctx.quadraticCurveTo(points[i].x, points[i].y, cpx, cpy);
        }

        // Create gradient fill for the wave band
        const bandH = wave.width * h;
        const gradient = ctx.createLinearGradient(0, wave.yBase * h - bandH, 0, wave.yBase * h + bandH);
        gradient.addColorStop(0, `rgba(${col.r},${col.g},${col.b},0)`);
        gradient.addColorStop(0.3, `rgba(${col.r},${col.g},${col.b},0.04)`);
        gradient.addColorStop(0.5, `rgba(${col.r},${col.g},${col.b},0.07)`);
        gradient.addColorStop(0.7, `rgba(${col.r},${col.g},${col.b},0.04)`);
        gradient.addColorStop(1, `rgba(${col.r},${col.g},${col.b},0)`);

        // Draw the filled wave band
        ctx.lineTo(w, h);
        ctx.lineTo(0, h);
        ctx.closePath();
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw glowing stroke on top
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length - 1; i++) {
          const cpx = (points[i].x + points[i + 1].x) / 2;
          const cpy = (points[i].y + points[i + 1].y) / 2;
          ctx.quadraticCurveTo(points[i].x, points[i].y, cpx, cpy);
        }
        ctx.strokeStyle = `rgba(${col.r},${col.g},${col.b},0.12)`;
        ctx.lineWidth = 1.5;
        ctx.shadowColor = `rgba(${col.r},${col.g},${col.b},0.3)`;
        ctx.shadowBlur = 20;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      // Floating luminous particles
      const particleCount = 35;
      for (let i = 0; i < particleCount; i++) {
        const seed = i * 137.508;
        const px = ((seed * 0.618) % 1) * w;
        const baseY = ((seed * 0.381) % 1) * h;
        const py = baseY + Math.sin(t * 0.0008 + seed) * 30 + Math.cos(t * 0.0005 + seed * 0.7) * 20;
        const col = colors[i % 3];
        const alpha = 0.15 + Math.sin(t * 0.001 + seed) * 0.1;
        const radius = 1 + Math.sin(t * 0.002 + seed * 0.5) * 0.8;

        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col.r},${col.g},${col.b},${Math.max(0.05, alpha)})`;
        ctx.shadowColor = `rgba(${col.r},${col.g},${col.b},0.4)`;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
      style={{ opacity: 0.85 }}
    />
  );
}

function NeuralConstellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width: number, height: number;

    // Robust CSS color parser to handle hex, rgb, and rgba formats
    const parseCssColor = (colorStr: string) => {
      const str = colorStr.trim();
      if (str.startsWith("rgb")) {
        const match = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (match) {
          return [
            parseInt(match[1], 10),
            parseInt(match[2], 10),
            parseInt(match[3], 10)
          ] as const;
        }
      }
      if (str.startsWith("#")) {
        const hex = str.slice(1);
        if (hex.length === 3) {
          return [
            parseInt(hex[0] + hex[0], 16),
            parseInt(hex[1] + hex[1], 16),
            parseInt(hex[2] + hex[2], 16)
          ] as const;
        }
        return [
          parseInt(hex.slice(0, 2), 16) || 0,
          parseInt(hex.slice(2, 4), 16) || 0,
          parseInt(hex.slice(4, 6), 16) || 0
        ] as const;
      }
      return [255, 255, 255] as const;
    };

    const getThemeColors = () => {
      const s = getComputedStyle(document.documentElement);
      return {
        c1: s.getPropertyValue("--pf-c1").trim() || "#f5c14a",
        c2: s.getPropertyValue("--pf-c2").trim() || "#ff7a2d",
        c3: s.getPropertyValue("--pf-c3").trim() || "#ffd98a",
      };
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      r: number; colorIdx: number; pulseOffset: number;
    }> = [];

    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * (canvas.clientWidth || 1920),
        y: Math.random() * (canvas.clientHeight || 1080),
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.4,
        colorIdx: i % 3,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY; };
    const handleMouseLeave = () => { mouseX = -1000; mouseY = -1000; };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    let t = 0;

    const draw = (ts: number) => {
      t = ts;
      const { c1, c2, c3 } = getThemeColors();
      const rgbs = [parseCssColor(c1), parseCssColor(c2), parseCssColor(c3)];

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particleCount; i++) {
        const p1 = particles[i];

        p1.x += p1.vx;
        p1.y += p1.vy;
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        const [r, g, b] = rgbs[p1.colorIdx];
        const pulse = 0.2 + Math.sin(t * 0.001 + p1.pulseOffset) * 0.1;

        ctx.fillStyle = `rgba(${r},${g},${b},${pulse})`;
        ctx.shadowColor = `rgba(${r},${g},${b},0.3)`;
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connect nearby particles
        for (let j = i + 1; j < particleCount; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.08;
            const [r2, g2, b2] = rgbs[p2.colorIdx];
            ctx.strokeStyle = `rgba(${(r + r2) >> 1},${(g + g2) >> 1},${(b + b2) >> 1},${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Mouse interaction
        if (mouseX > -500) {
          const distToMouse = Math.hypot(p1.x - mouseX, p1.y - mouseY);
          if (distToMouse < 160) {
            const alpha = (1 - distToMouse / 160) * 0.2;
            ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouseX, mouseY);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 -z-20 h-full w-full opacity-[0.85]"
    />
  );
}

function FloatingShape({
  mx,
  my,
  factorX,
  factorY,
  className = "",
  children,
}: {
  mx: MotionValue<number>;
  my: MotionValue<number>;
  factorX: number;
  factorY: number;
  className?: string;
  children: ReactNode;
}) {
  const x = useTransform(mx, [-1, 1], [-35 * factorX, 35 * factorX]);
  const y = useTransform(my, [-1, 1], [-35 * factorY, 35 * factorY]);

  return (
    <motion.div
      style={{ x, y }}
      className={`pointer-events-none absolute hidden lg:block ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Chrome ---------- */

function Starfield() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[var(--pf-bg)] transition-colors duration-700"
    >
      {/* Dynamic Smooth Ambient Gradient Mesh */}
      <div
        className="absolute inset-0 opacity-50 transition-opacity duration-700"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 75% 55% at 20% 25%, rgb(from var(--pf-c1) r g b / 0.12), transparent 60%), radial-gradient(ellipse 65% 50% at 80% 70%, rgb(from var(--pf-c2) r g b / 0.10), transparent 60%)",
        }}
      />
      {/* Subtle Micro Dot Net */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.35) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Ambient Star Particles */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 25% 30%, rgba(255,255,255,0.6) 50%, transparent 100%),\
           radial-gradient(1px 1px at 70% 20%, rgba(255,255,255,0.4) 50%, transparent 100%),\
           radial-gradient(1px 1px at 40% 80%, rgb(from var(--pf-c1) r g b / 0.5) 50%, transparent 100%),\
           radial-gradient(1px 1px at 85% 55%, rgb(from var(--pf-c2) r g b / 0.5) 50%, transparent 100%),\
           radial-gradient(1px 1px at 15% 60%, rgba(255,255,255,0.4) 50%, transparent 100%),\
           radial-gradient(1px 1px at 55% 45%, rgba(255,255,255,0.3) 50%, transparent 100%)",
          backgroundSize:
            "600px 600px, 800px 800px, 500px 500px, 700px 700px, 900px 900px, 400px 400px",
          backgroundRepeat: "repeat",
        }}
      />
      <ScrollAurora />
    </div>
  );
}

function ScrollAurora() {
  const { scrollYProgress } = useScroll();
  const p = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });
  const rotate = useTransform(p, [0, 1], [0, 300]);
  const y1 = useTransform(p, [0, 1], ["0%", "-30%"]);
  const y2 = useTransform(p, [0, 1], ["0%", "40%"]);
  return (
    <>
      <motion.div
        style={{ rotate, y: y1 }}
        className="absolute left-[-15%] top-[10%] h-[75vmin] w-[75vmin] rounded-[42%_58%_63%_37%] bg-[var(--pf-c1)]/[0.09] blur-3xl animate-aurora-orb-1"
      />
      <motion.div
        style={{ rotate: useTransform(rotate, (v) => -v), y: y2 }}
        className="absolute right-[-15%] top-[40%] h-[75vmin] w-[75vmin] rounded-[63%_37%_44%_56%] bg-[var(--pf-c2)]/[0.08] blur-3xl animate-aurora-orb-2"
      />
    </>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-[1px] origin-left bg-[var(--pf-c1)]"
    />
  );
}

function useActiveSection(ready: boolean) {
  const [active, setActive] = useState("home");
  useEffect(() => {
    // Don't set up the observer until sections are in the DOM
    if (!ready) return;

    const els = NAV.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    if (els.length === 0) return;

    // Track which sections are currently intersecting
    const visibleSet = new Map<string, IntersectionObserverEntry>();

    const pickActive = () => {
      if (visibleSet.size === 0) return;
      // Among all intersecting sections, pick the one whose top is closest
      // to (but above or at) the viewport centre — i.e. the "current" section.
      const midY = window.innerHeight * 0.4;
      let best: string | null = null;
      let bestDist = Infinity;
      visibleSet.forEach((entry, id) => {
        const rect = entry.target.getBoundingClientRect();
        const dist = Math.abs(rect.top - midY);
        if (dist < bestDist) {
          bestDist = dist;
          best = id;
        }
      });
      if (best) setActive(best);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            visibleSet.set(e.target.id, e);
          } else {
            visibleSet.delete(e.target.id);
          }
        });
        pickActive();
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.5], rootMargin: "-10% 0px -10% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ready]);
  return active;
}

function HUDChrome({ active }: { active: string }) {
  const scene = SCENE_MAP[active] ?? SCENE_MAP.home;
  const idx = NAV.findIndex((n) => n.id === active);
  const num = idx >= 0 ? NAV[idx].num : "00";
  return (
    <>
      {/* top-left: chapter */}
      <div className="pointer-events-none fixed left-6 top-6 z-40 hidden md:block">
        <AnimatePresence mode="wait">
          <motion.div
            key={active + "-tl"}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-1"
          >
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[var(--pf-c1)]" />
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[var(--pf-c1)]">
                {scene.chapter}
              </span>
            </div>
            <span className="pl-11 font-mono text-[9px] uppercase tracking-[0.3em] text-white/80">
              — {scene.title}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* bottom-left: section index */}
      <div className="pointer-events-none fixed bottom-5 left-6 z-40 hidden md:block">
        <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/40">
          {num} / <span className="text-white/70">{scene.title}</span>
        </span>
      </div>
      {/* bottom-right: coordinates */}
      <div className="pointer-events-none fixed bottom-5 right-6 z-40 hidden text-right md:block">
        <div className="font-mono text-[9px] uppercase tracking-[0.25em] leading-relaxed text-white/40">
          LAT 17.38° N
          <br />
          LNG 78.48° E
        </div>
      </div>
    </>
  );
}

function Navbar({ active }: { active: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  // Close menu on any nav click
  const handleNavClick = () => setMobileOpen(false);
  return (
    <header className="fixed inset-x-0 top-6 z-50 flex justify-center px-4">
      <nav
        className={`flex items-center gap-1 rounded-full border border-white/10 bg-black/70 px-2 py-1.5 backdrop-blur-xl transition-shadow ${scrolled ? "shadow-[0_10px_40px_-15px_rgb(from var(--pf-c1) r g b / 0.35)]" : ""}`}
      >
        <a
          href="#home"
          onClick={handleNavClick}
          className="flex items-center gap-2 rounded-full px-3 py-1"
        >
          <span className="font-display text-lg italic text-white">MSK.</span>
        </a>
        <div className="mx-1 h-4 w-px bg-white/10" />
        {/* Desktop nav links */}
        <ul className="hidden items-center md:flex">
          {NAV.slice(1).map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`relative rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors ${active === item.id ? "text-[var(--pf-c1)]" : "text-white/60 hover:text-white"}`}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-[var(--pf-c1)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex ml-2 items-center gap-1.5 rounded-full bg-[var(--pf-c1)] px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white"
        >
          Resume <Download className="h-3 w-3" />
        </a>
        {/* Mobile hamburger */}
        <button
          className="md:hidden ml-2 flex items-center justify-center rounded-full p-2 text-white/70 hover:text-white transition"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </nav>
      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-4 right-4 rounded-2xl border border-white/10 bg-black/90 backdrop-blur-xl p-4 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={handleNavClick}
                    className={`block rounded-xl px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors ${active === item.id
                      ? "bg-white/5 text-[var(--pf-c1)]"
                      : "text-white/60 hover:bg-white/5 hover:text-white"
                      }`}
                  >
                    <span className="text-[var(--pf-c1)]/40 mr-2">{item.num}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={handleNavClick}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[var(--pf-c1)] px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white"
            >
              Resume <Download className="h-3 w-3" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
function fetchTerminalAiResponse(userPrompt: string): Promise<string> {
  return new Promise((resolve) => {
    const apiKey = (import.meta.env.VITE_OPENROUTER_API_KEY as string | undefined)?.trim();
    const model = (import.meta.env.VITE_OPENROUTER_MODEL as string | undefined)?.trim() || "google/gemini-2.0-flash-001";

    const q = userPrompt.toLowerCase();

    let fallbackResult = "";
    if (q.includes("project") || q.includes("farmora") || q.includes("cinedb") || q.includes("sky")) {
      fallbackResult = "Suman's Top Projects:\n• Farmora: MERN e-commerce platform for farm-to-home produce.\n• CineDB: TMDB-powered movie discovery web app.\n• SKY AI: Real-time AI chat & voice interaction assistant.\n• Mobile Todo: Kotlin & Room DB task planner.";
    } else if (q.includes("skill") || q.includes("stack") || q.includes("tech") || q.includes("react") || q.includes("node")) {
      fallbackResult = "Suman's Tech Stack:\n• Frontend: React, TypeScript, JavaScript, Tailwind CSS\n• Backend: Node.js, Express.js, REST APIs\n• Mobile: Flutter, Kotlin, React Native\n• DB & AI: MongoDB, Firebase, MySQL, OpenRouter API, LLMs";
    } else if (q.includes("contact") || q.includes("email") || q.includes("hire") || q.includes("reach")) {
      fallbackResult = "Contact Suman:\n• Email: ms.kumar.developer05@gmail.com\n• LinkedIn: linkedin.com/in/m-suman-kumar-43b3a1300\n• GitHub: github.com/Msumankumar05";
    } else if (q.includes("who") || q.includes("about") || q.includes("suman") || q.includes("background")) {
      fallbackResult = "Makoju Suman Kumar is an MCA student & Full-Stack Engineer based in Odisha, India. He builds fast, production-ready web, mobile, and AI products.";
    } else {
      fallbackResult = `Makoju Suman Kumar is a Full-Stack Engineer specializing in React, Node.js, Flutter, and AI development.\nQuery answered regarding: "${userPrompt}"`;
    }

    if (!apiKey) {
      resolve(
        `⚠️  VITE_OPENROUTER_API_KEY is not configured in your .env file.\nShowing cached response:\n\n${fallbackResult}`
      );
      return;
    }

    fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        "X-Title": "MSK Portfolio AI Terminal",
      },
      body: JSON.stringify({
        model: model,
        messages: [
          {
            role: "system",
            content: "You are an AI shell assistant for Makoju Suman Kumar (MSK). Answer concisely in bullet points or short clear sentences.",
          },
          { role: "user", content: userPrompt },
        ],
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("API failed");
        return res.json();
      })
      .then((data) => {
        const text = data?.choices?.[0]?.message?.content;
        if (text) resolve(text.trim());
        else resolve(fallbackResult);
      })
      .catch(() => {
        resolve(fallbackResult);
      });
  });
}

const COMMANDS = {
  ai: { desc: "Ask AI Assistant (OpenRouter)", icon: "🤖" },
  ask: { desc: "Ask AI Assistant (OpenRouter)", icon: "🤖" },
  help: { desc: "Show available commands", icon: "📖" },
  about: { desc: "About Makoju Suman Kumar", icon: "👨‍💻" },
  skills: { desc: "Technical core stack", icon: "⚡" },
  projects: { desc: "Highlighted applications", icon: "🚀" },
  contact: { desc: "Connect with me", icon: "📫" },
  clear: { desc: "Clear terminal", icon: "🧹" },
  echo: { desc: "Print text to terminal", icon: "📢" },
  date: { desc: "Show current date & time", icon: "📅" },
  whoami: { desc: "Display user info", icon: "👤" },
  pwd: { desc: "Print working directory", icon: "📂" },
  ls: { desc: "List directory contents", icon: "📋" },
  neofetch: { desc: "System information", icon: "🖥️" },
  uptime: { desc: "Session uptime", icon: "⏱️" },
  history: { desc: "Command history", icon: "🔄" },
  version: { desc: "Terminal version", icon: "🎯" },
  theme: { desc: "Current theme info", icon: "🎨" },
};

function TerminalEmulator() {
  const [history, setHistory] = useState<string[]>([
    "✦ MSK Interactive Shell v2.0  ·  OpenRouter AI Active",
    "Type 'ai <question>' to query Suman's AI, or 'help' for commands.",
    "",
  ]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Auto-suggestions
  useEffect(() => {
    const inputValue = input.trim().toLowerCase();
    if (inputValue) {
      const matches = Object.keys(COMMANDS)
        .filter((cmd) => cmd.startsWith(inputValue))
        .slice(0, 5);
      setSuggestions(matches);
      setShowSuggestions(matches.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [input]);

  const scrollToBottom = () => {
    setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      }
    }, 10);
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;

    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);
    setShowSuggestions(false);

    const lowerCmd = cmd.toLowerCase();
    let response: string[] = [];

    // AI Shell Commands: ai <prompt> or ask <prompt>
    if (lowerCmd.startsWith("ai ") || lowerCmd.startsWith("ask ") || lowerCmd === "ai" || lowerCmd === "ask") {
      const userPrompt = cmd.replace(/^(ai|ask)\s*/i, "").trim();
      if (!userPrompt) {
        response = [
          `▸ ${cmd}`,
          "🤖 OpenRouter AI Assistant:",
          "  Usage : ai <your question>",
          "  Ex    : ai Tell me about Farmora project",
          "  Ex    : ask What are Suman's top skills?",
        ];
        setHistory((prev) => [...prev, ...response, ""]);
        setInput("");
        scrollToBottom();
        return;
      }

      setHistory((prev) => [
        ...prev,
        `▸ ${cmd}`,
        "🤖 Querying OpenRouter LLM...",
      ]);
      setInput("");
      scrollToBottom();

      fetchTerminalAiResponse(userPrompt).then((answer) => {
        setHistory((prev) => [
          ...prev.slice(0, -1),
          "🤖 OpenRouter AI:",
          ...answer.split("\n").map((line) => `  ${line}`),
          "",
        ]);
        scrollToBottom();
      });
      return;
    }

    switch (lowerCmd) {
      case "help":
        response = [
          `▸ ${cmd}`,
          "  Available Commands:",
          ...Object.entries(COMMANDS).map(
            ([key, { icon, desc }]) => `  ${icon} ${key.padEnd(10)} ${desc}`,
          ),
        ];
        break;

      case "about":
        response = [
          `▸ ${cmd}`,
          "  Makoju Suman Kumar",
          "  🎓 MCA Student & Full-Stack Developer",
          "  📍 Odisha, India  ·  Web • Mobile • AI",
        ];
        break;

      case "skills":
        response = [
          `▸ ${cmd}`,
          "  Core Stack:",
          "  ⚡ React, TypeScript, Node.js, Express",
          "  📱 Flutter, Kotlin, React Native",
          "  🗄️ MongoDB, MySQL, Firebase, OpenRouter AI",
        ];
        break;

      case "projects":
        response = [
          `▸ ${cmd}`,
          "  Top Applications:",
          "  🌾 Farmora   – MERN commerce platform",
          "  🎬 CineDB    – Movie discovery crawler",
          "  🤖 SKY AI    – Voice conversational AI",
          "  📱 Mobile    – Kotlin & Flutter apps",
        ];
        break;

      case "contact":
        response = [
          `▸ ${cmd}`,
          "  Reach Suman:",
          "  📧 ms.kumar.developer05@gmail.com",
          "  🐙 github.com/Msumankumar05",
          "  🔗 linkedin.com/in/m-suman-kumar-43b3a1300",
        ];
        break;

      case "echo": {
        const text = cmd.slice(5) || "Hello, World!";
        response = [`▸ ${cmd}`, `  ${text}`];
        break;
      }

      case "date": {
        const now = new Date();
        response = [
          `▸ ${cmd}`,
          `  ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`,
        ];
        break;
      }

      case "whoami":
        response = [`▸ ${cmd}`, "  guest@msk-portfolio"];
        break;

      case "pwd":
        response = [`▸ ${cmd}`, "  /home/msk/portfolio"];
        break;

      case "ls":
        response = [
          `▸ ${cmd}`,
          "  about/  projects/  skills/  contact/  README.md",
        ];
        break;

      case "neofetch":
        response = [
          `▸ ${cmd}`,
          "  OS: MSK Portfolio v2.0",
          "  Role: Full-Stack & AI Engineer",
          "  Status: Available for Work 🟢",
        ];
        break;

      case "uptime":
        response = [`▸ ${cmd}`, "  Session Uptime: 100% · Active"];
        break;

      case "history":
        response = [
          `▸ ${cmd}`,
          ...commandHistory.map((c, i) => `  ${i + 1}. ${c}`),
        ];
        break;

      case "version":
        response = [`▸ ${cmd}`, "  MSK Shell v2.0.0 (Vite + React 19)"];
        break;

      case "theme": {
        const theme = document.documentElement.getAttribute("data-pf-theme") || "gold";
        response = [`▸ ${cmd}`, `  Current Active Theme: ${theme.toUpperCase()}`];
        break;
      }

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default: {
        const suggestion = getSuggestion(lowerCmd);
        response = [
          `▸ ${cmd}`,
          `  ✗ Command not found: ${lowerCmd}`,
          suggestion !== "no suggestion" ? `  💡 Did you mean: ${suggestion}` : "",
        ].filter(Boolean);
      }
    }

    setHistory((prev) => [...prev, ...response, ""]);
    setInput("");
    scrollToBottom();
  };

  const getSuggestion = (cmd: string): string => {
    const commands = Object.keys(COMMANDS);
    const exact = commands.find((c) => c === cmd);
    if (exact) return exact;

    const partial = commands.filter((c) => c.startsWith(cmd));
    if (partial.length === 1) return partial[0];
    return "no suggestion";
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const idx = Math.min(historyIndex + 1, commandHistory.length - 1);
        setHistoryIndex(idx);
        setInput(commandHistory[commandHistory.length - 1 - idx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const idx = historyIndex - 1;
        setHistoryIndex(idx);
        setInput(commandHistory[commandHistory.length - 1 - idx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      if (suggestions.length > 0) {
        setInput(suggestions[0]);
        setShowSuggestions(false);
      }
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setHistory([]);
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    focusInput();
    scrollToBottom();
  }, []);

  return (
    <div
      onClick={focusInput}
      className="h-[250px] cursor-text overflow-y-auto px-4 py-3 font-mono text-[11px] leading-relaxed text-white/80 select-text flex flex-col justify-between"
      ref={containerRef}
      style={{ scrollbarWidth: "thin", scrollbarColor: "var(--pf-c1) transparent" }}
    >
      <div>
        {/* History */}
        <div className="space-y-1">
          {history.map((line, i) => {
            if (!line) return <div key={i} className="h-2" />;

            let color = "text-white/70";
            if (line.startsWith("▸")) color = "text-[var(--pf-c1)] font-semibold";
            else if (line.startsWith("🤖")) color = "text-[var(--pf-c1)] font-medium";
            else if (line.includes("✗")) color = "text-rose-400";
            else if (line.includes("💡")) color = "text-amber-300";
            else if (line.startsWith("✦")) color = "text-white/40 font-mono text-[10px]";

            return (
              <div key={i} className={`terminal-line ${color}`}>
                {line}
              </div>
            );
          })}
        </div>

        {/* Input prompt */}
        <form onSubmit={handleCommand} className="mt-3 flex items-center gap-1.5 font-mono text-[11px]">
          <span className="text-[var(--pf-c1)] select-none shrink-0 font-bold">msk@dev</span>
          <span className="text-white/40 select-none shrink-0">❯</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-white outline-none border-none p-0 font-mono text-[11px] focus:ring-0 focus:outline-none min-w-0 tracking-wide"
            maxLength={100}
            autoCapitalize="none"
            autoComplete="off"
            spellCheck={false}
            placeholder="type 'ai hello' or 'help'..."
          />
          <span
            className={`text-[var(--pf-c1)] select-none transition-opacity duration-100 ${
              cursorVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            ▋
          </span>
        </form>
      </div>

      {/* Quick Suggestion Chips */}
      <div className="mt-3 pt-2 flex items-center justify-between border-t border-white/5 font-mono text-[9px] text-white/40">
        <div className="flex gap-1.5 overflow-x-auto scrollbar-none py-0.5">
          {["ai", "about", "skills", "projects", "clear"].map((cmd) => (
            <button
              key={cmd}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (cmd === "ai") {
                  setInput("ai ");
                } else {
                  setInput(cmd);
                }
                inputRef.current?.focus();
              }}
              className="rounded bg-white/[0.04] border border-white/8 px-2 py-0.5 text-white/60 hover:text-white hover:border-[var(--pf-c1)] transition"
            >
              {COMMANDS[cmd as keyof typeof COMMANDS]?.icon} {cmd}
            </button>
          ))}
        </div>
        <span className="shrink-0 text-[8px] text-[var(--pf-c1)] font-semibold uppercase tracking-wider">
          OpenRouter LLM
        </span>
      </div>
    </div>
  );
}

function HeroCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState<"code" | "terminal">("code");
  const [selectedFile, setSelectedFile] = useState<"profile" | "skills" | "contact" | "package">(
    "profile",
  );
  const [isHovering, setIsHovering] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 120, damping: 25 });
  const springY = useSpring(y, { stiffness: 120, damping: 25 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6]);

  const glowX = useTransform(springX, [-0.5, 0.5], ["10%", "90%"]);
  const glowY = useTransform(springY, [-0.5, 0.5], ["10%", "90%"]);

  const glareX = useTransform(springX, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(springY, [-0.5, 0.5], [0, 100]);

  const glareOpacity = useSpring(0, { stiffness: 120, damping: 25 });
  const cardScale = useSpring(1, { stiffness: 180, damping: 30 });

  const glowBackground = useTransform(
    [glowX, glowY],
    ([gx, gy]) =>
      `radial-gradient(ellipse at ${gx} ${gy}, rgb(from var(--pf-c1) r g b / 0.15), rgb(from var(--pf-c3) r g b / 0.08) 50%, transparent 75%)`,
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX / width);
    y.set(mouseY / height);
    glareOpacity.set(0.5);
    cardScale.set(1.012);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    glareOpacity.set(0);
    cardScale.set(1);
    setIsHovering(false);
  };

  // File explorer config
  const fileExplorer = {
    profile: { icon: "✦", label: "profile.json", color: "text-[var(--pf-c1)]" },
    skills: { icon: "◈", label: "skills.txt", color: "text-[var(--pf-c2)]" },
    contact: { icon: "✧", label: "links.json", color: "text-[#a8ff78]" },
    package: { icon: "◉", label: "package.json", color: "text-[#febc2e]" },
  };

  // ─── THEME PALETTE CONFIG ─────────────────────────────
  const themesList = [
    { id: "gold",     label: "Gold",     name: "Luxury Gold",     c1: "#f5c14a", c2: "#ff7a2d", c3: "#ffd98a" },
    { id: "cyber",    label: "Cyber",    name: "Neon Cyber",      c1: "#00e5ff", c2: "#ff2d7d", c3: "#c084fc" },
    { id: "emerald",  label: "Emerald",  name: "Bio Emerald",     c1: "#00ff88", c2: "#00f0ff", c3: "#a6ff00" },
    { id: "devialet", label: "Obsidian", name: "Obsidian Crimson",c1: "#e8352a", c2: "#ff8b6a", c3: "#c9a87c" },
    { id: "midnight", label: "Midnight", name: "Midnight Violet", c1: "#a78bfa", c2: "#8b5cf6", c3: "#c4b5fd" },
    { id: "sunset",   label: "Sunset",   name: "Warm Sunset",     c1: "#ff6b6b", c2: "#ffa94d", c3: "#ffd93d" },
    { id: "ocean",    label: "Ocean",    name: "Deep Ocean",      c1: "#00d4ff", c2: "#0066ff", c3: "#7dd3fc" },
  ];

  const [currentTheme, setCurrentTheme] = useState(() => {
    if (typeof document !== "undefined") {
      return document.documentElement.getAttribute("data-pf-theme") || "gold";
    }
    return "gold";
  });

  const handleApplyTheme = (nextThemeId: string) => {
    if (typeof document === "undefined") return;

    const el = document.documentElement;
    document.body.classList.add("pf-theme-morph");

    const heroCard = document.querySelector(".pf-hero-card-inner") as HTMLElement | null;
    if (heroCard) {
      heroCard.classList.add("pf-card-lift");
      setTimeout(() => {
        el.setAttribute("data-pf-theme", nextThemeId);
        setCurrentTheme(nextThemeId);
        try { localStorage.setItem("pf-theme", nextThemeId); } catch (_) {}
      }, 100);

      setTimeout(() => {
        heroCard.classList.remove("pf-card-lift");
      }, 600);
    } else {
      el.setAttribute("data-pf-theme", nextThemeId);
      setCurrentTheme(nextThemeId);
      try { localStorage.setItem("pf-theme", nextThemeId); } catch (_) {}
    }

    setTimeout(() => {
      document.body.classList.remove("pf-theme-morph");
    }, 700);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
        scale: cardScale,
      }}
      className="relative w-full max-w-[540px] select-none pf-hero-card-wrap"
    >
      {/* Outer glow */}
      <motion.div
        className="pointer-events-none absolute -inset-8 rounded-lg"
        style={{
          background: glowBackground,
          filter: "blur(50px) saturate(1.5)",
        }}
        animate={{ opacity: isHovering ? 0.9 : 0.5 }}
        transition={{ duration: 0.4 }}
      />

      {/* Decorative ring */}
      <motion.div
        className="pointer-events-none absolute -inset-4 rounded-lg border border-white/5"
        animate={{
          opacity: isHovering ? 0.4 : 0.1,
          scale: isHovering ? 1.02 : 1,
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Main card */}
      <div className="relative overflow-hidden rounded-lg border border-white/8 bg-[var(--pf-card)] shadow-[0_60px_120px_-40px_rgb(from var(--pf-c1) r g b / 0.3)] backdrop-blur-xl pf-hero-card-inner">
        {/* Dynamic glare */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-20"
          style={{
            opacity: glareOpacity,
            background: useTransform(
              [glareX, glareY],
              ([gx, gy]) =>
                `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 40%, transparent 70%)`,
            ),
          }}
        />

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

        {/* Header */}
        <div className="relative flex items-center justify-between px-5 py-3 border-b border-white/8 bg-black/40 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              {["#ff5f57", "#febc2e", "#28c840"].map((color, i) => (
                <span
                  key={i}
                  className="h-2.5 w-2.5 rounded-full transition-all duration-300 hover:scale-110 shadow-sm"
                  style={{ backgroundColor: color, boxShadow: `0 0 6px ${color}80` }}
                />
              ))}
            </div>
            <span className="font-mono text-[9px] text-white/35 tracking-widest hidden sm:inline-block">
              zsh — msk@dev-station:~
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:flex items-center gap-1.5 font-mono text-[8px] font-bold tracking-wider text-[var(--pf-c1)] bg-[var(--pf-c1)]/10 px-2 py-0.5 rounded border border-[var(--pf-c1)]/30">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--pf-c1)] animate-pulse" />
              AI ACTIVE
            </span>

            <div className="flex items-center gap-1 bg-white/[0.04] rounded-lg p-0.5 border border-white/8">
              {[
                { id: "code" as const, label: "✦ profile.json" },
                { id: "terminal" as const, label: "🤖 ai-terminal.sh" },
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setTab(id)}
                  className={`font-mono text-[9px] tracking-[0.15em] px-3 py-1 rounded-md transition-all duration-300 flex items-center gap-1.5 ${
                    tab === id
                      ? "bg-white/12 text-white shadow-sm border border-white/10 font-semibold"
                      : "text-white/40 hover:text-white/70 hover:bg-white/5"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[var(--pf-c1)]/10 border border-[var(--pf-c1)]/20">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--pf-c1)] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--pf-c1)]" />
              </span>
              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[var(--pf-c1)] font-semibold">
                LIVE
              </span>
            </div>
          </div>
        </div>

        {/* Content panels */}
        {tab === "code" ? (
          <div className="flex h-[240px] font-mono text-[10px] leading-relaxed">
            <div className="w-[110px] shrink-0 border-r border-white/5 bg-white/[0.02] py-2 select-none">
              <div className="px-3 pb-2 font-mono text-[7px] uppercase tracking-[0.3em] text-white/20 border-b border-white/5 mb-1">
                explorer
              </div>
              {Object.entries(fileExplorer).map(([key, { icon, label, color }]) => (
                <button
                  key={key}
                  onClick={() => setSelectedFile(key as any)}
                  className={`group flex w-full items-center gap-2 px-3 py-1.5 text-left transition-all duration-200 ${
                    selectedFile === key
                      ? "bg-white/8 text-white border-r-2 border-[var(--pf-c1)]"
                      : "text-white/40 hover:text-white/70 hover:bg-white/5"
                  }`}
                >
                  <span className={`text-[10px] ${selectedFile === key ? color : "text-white/30"}`}>
                    {icon}
                  </span>
                  <span className={`text-[9px] ${selectedFile === key ? color : ""}`}>{label}</span>
                </button>
              ))}
            </div>
            <div className="flex-1 overflow-y-auto p-4 select-text" style={{ scrollbarWidth: "thin" }}>
              <style>{`
                .editor-scroll::-webkit-scrollbar { width: 2px; }
                .editor-scroll::-webkit-scrollbar-thumb { background: var(--pf-c1); border-radius: 0; }
              `}</style>
              <div className="relative">
                <div className="absolute left-0 top-0 text-white/10 text-right pr-3 select-none text-[9px] leading-relaxed">
                  {Array.from({ length: 8 }, (_, i) => <div key={i}>{i + 1}</div>)}
                </div>
                <div className="pl-7">
                  {selectedFile === "profile" && (
                    <div className="space-y-0.5 text-[10px]">
                      <div><span className="text-white/30">{"{"}</span></div>
                      <div className="pl-3">
                        <span className="text-[var(--pf-c1)]">"name"</span>
                        <span className="text-white/30">: </span>
                        <span className="text-[#a8ff78]">"Makoju Suman Kumar"</span><span className="text-white/30">,</span>
                      </div>
                      <div className="pl-3">
                        <span className="text-[var(--pf-c1)]">"role"</span>
                        <span className="text-white/30">: </span>
                        <span className="text-[#a8ff78]">"Fullstack Engineer"</span><span className="text-white/30">,</span>
                      </div>
                      <div className="pl-3">
                        <span className="text-[var(--pf-c1)]">"location"</span>
                        <span className="text-white/30">: </span>
                        <span className="text-[#a8ff78]">"Odisha, IN"</span><span className="text-white/30">,</span>
                      </div>
                      <div className="pl-3">
                        <span className="text-[var(--pf-c1)]">"status"</span>
                        <span className="text-white/30">: </span>
                        <span className="text-[#a8ff78]">"open_to_work"</span>
                      </div>
                      <div><span className="text-white/30">{"}"}</span></div>
                    </div>
                  )}
                  {selectedFile === "skills" && (
                    <div className="space-y-1 text-[9.5px] text-white/70">
                      <div className="text-[var(--pf-c2)] text-[9px]">// Core Technologies</div>
                      <div className="grid grid-cols-2 gap-x-3 gap-y-0.5">
                        {[
                          ["Frontend", "React, JS, TS"],
                          ["Backend", "Node, Express"],
                          ["Mobile", "Flutter, RN"],
                          ["Database", "MongoDB, SQL"],
                          ["DevOps", "Docker, AWS"],
                          ["AI/ML", "LLM, Agents"],
                        ].map(([label, value]) => (
                          <div key={label}>
                            <span className="text-[var(--pf-c1)]">{label}:</span> {value}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {selectedFile === "contact" && (
                    <div className="space-y-0.5 text-[10px]">
                      <div><span className="text-white/30">{"{"}</span></div>
                      <div className="pl-3">
                        <span className="text-[var(--pf-c1)]">"email"</span>
                        <span className="text-white/30">: </span>
                        <span className="text-[#a8ff78]">"ms.kumar.developer05@gmail.com"</span><span className="text-white/30">,</span>
                      </div>
                      <div className="pl-3">
                        <span className="text-[var(--pf-c1)]">"github"</span>
                        <span className="text-white/30">: </span>
                        <span className="text-[#a8ff78]">"github.com/Msumankumar05"</span><span className="text-white/30">,</span>
                      </div>
                      <div className="pl-3">
                        <span className="text-[var(--pf-c1)]">"linkedin"</span>
                        <span className="text-white/30">: </span>
                        <span className="text-[#a8ff78]">"linkedin.com/in/makoju-suman-kumar"</span>
                      </div>
                      <div><span className="text-white/30">{"}"}</span></div>
                    </div>
                  )}
                  {selectedFile === "package" && (
                    <div className="space-y-0.5 text-[9px] text-white/50">
                      <div><span className="text-white/20">{"{"}</span></div>
                      <div className="pl-3">
                        <span className="text-[var(--pf-c1)]">"name"</span>
                        <span className="text-white/20">: </span>
                        <span className="text-[#a8ff78]">"msk-portfolio"</span><span className="text-white/20">,</span>
                      </div>
                      <div className="pl-3">
                        <span className="text-[var(--pf-c1)]">"version"</span>
                        <span className="text-white/20">: </span>
                        <span className="text-[#a8ff78]">"2.0.0"</span><span className="text-white/20">,</span>
                      </div>
                      <div className="pl-3">
                        <span className="text-[var(--pf-c1)]">"dependencies"</span>
                        <span className="text-white/20">: {`{`}</span>
                      </div>
                      <div className="pl-6">
                        <span className="text-[var(--pf-c2)]">"react"</span>
                        <span className="text-white/20">: </span>
                        <span className="text-[#a8ff78]">"^19.0.0"</span><span className="text-white/20">,</span>
                      </div>
                      <div className="pl-6">
                        <span className="text-[var(--pf-c2)]">"framer-motion"</span>
                        <span className="text-white/20">: </span>
                        <span className="text-[#a8ff78]">"^11.0.0"</span>
                      </div>
                      <div className="pl-3"><span className="text-white/20">{"}"}</span></div>
                      <div><span className="text-white/20">{"}"}</span></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <TerminalEmulator />
        )}

        {/* Divider */}
        <div className="relative px-5">
          <div className="h-px bg-gradient-to-r from-[var(--pf-c1)]/20 via-[var(--pf-c2)]/20 to-transparent" />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 px-5 py-3 bg-white/[0.02]">
          {["MERN", "Flutter", "React Native", "AI / LLMs", "TypeScript"].map((tag) => (
            <span
              key={tag}
              className="group relative px-2.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.2em] text-[var(--pf-c1)]/50 border border-[var(--pf-c1)]/10 rounded transition-all duration-300 hover:border-[var(--pf-c1)]/40 hover:text-[var(--pf-c1)]/80 hover:bg-[var(--pf-c1)]/5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ─── PRO THEME SWAP BUTTON (NO TEMPLATE NAMES) ──────────────────────────── */}
        <div className="p-4 border-t border-white/5">
          <div className="pf-pro-swap-wrapper">
            <button
              type="button"
              onClick={() => {
                const currentIndex = themesList.findIndex((t) => t.id === currentTheme);
                const nextIndex = (currentIndex + 1) % themesList.length;
                handleApplyTheme(themesList[nextIndex].id);
              }}
              className="pf-pro-swap-btn"
            >
              {/* Color accent dots */}
              <div className="flex items-center gap-1.5">
                <span className="pf-pro-dot" style={{ background: "var(--pf-c1)", boxShadow: "0 0 6px var(--pf-c1)" }} />
                <span className="pf-pro-dot" style={{ background: "var(--pf-c2)", boxShadow: "0 0 6px var(--pf-c2)" }} />
                <span className="pf-pro-dot" style={{ background: "var(--pf-c3)", boxShadow: "0 0 6px var(--pf-c3)" }} />
              </div>
              <span className="tracking-[0.3em]">SWAP THEME</span>
              <span className="pf-pro-spin">⟳</span>
            </button>
          </div>
        </div>

        {/* Shine overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 40%, rgb(from var(--pf-c1) r g b / 0.02) 100%)",
          }}
        />

        {/* Accent bar with shimmer */}
        <div className="h-[2px] w-full bg-gradient-to-r from-[var(--pf-c1)] via-[var(--pf-c3)] to-[var(--pf-c2)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
        </div>
      </div>

      {/* Floating badges */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-2 -top-2 border border-[var(--pf-c1)]/20 bg-[var(--pf-bg)]/80 backdrop-blur-md px-3 py-1.5 shadow-xl"
      >
        <span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.2em] text-[var(--pf-c1)]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--pf-c1)] opacity-60" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--pf-c1)]" />
          </span>
          Open to Work
        </span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -bottom-3 -left-2 border border-[var(--pf-c2)]/20 bg-[var(--pf-bg)]/80 backdrop-blur-md px-3 py-1.5 shadow-xl"
      >
        <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-[var(--pf-c2)]/70 flex items-center gap-2">
          <span className="text-[10px]">✦</span>
          MSK
        </span>
      </motion.div>
    </motion.div>
  );
}

/* ---------- Hero ---------- */

const SOCIAL_LINKS = [
  { label: "GitHub", icon: Github, href: "https://github.com/Msumankumar05" },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/m-suman-kumar-43b3a1300/",
  },
  { label: "Instagram", icon: Instagram, href: "https://www.instagram.com/suman_k_72/" },
  { label: "Email", icon: Mail, href: "mailto: makojusumankumar@gmail.com" },
];

function Hero() {
  const spotRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const [ping, setPing] = useState(32);
  const [time, setTime] = useState("");
  const [sys, setSys] = useState({ os: "Linux", browser: "Chrome" });

  useEffect(() => {
    // Ping simulation
    const pTimer = setInterval(() => {
      setPing(Math.floor(Math.random() * 25) + 18);
    }, 2500);

    // Live clock
    const clockTimer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: true, timeZone: "Asia/Kolkata" }));
    }, 1000);

    // Dynamic OS & Browser detection
    if (typeof window !== "undefined") {
      const ua = navigator.userAgent;
      let os = "Linux";
      if (ua.indexOf("Win") !== -1) os = "Windows";
      else if (ua.indexOf("Mac") !== -1) os = "macOS";
      else if (ua.indexOf("X11") !== -1) os = "UNIX";
      else if (ua.indexOf("Linux") !== -1) os = "Linux";
      else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua))
        os = "Mobile OS";

      let browser = "Chrome";
      if (ua.indexOf("Firefox") !== -1) browser = "Firefox";
      else if (ua.indexOf("Safari") !== -1 && ua.indexOf("Chrome") === -1) browser = "Safari";
      else if (ua.indexOf("Edge") !== -1) browser = "Edge";
      else if (ua.indexOf("OPR") !== -1 || ua.indexOf("Opera") !== -1) browser = "Opera";

      setSys({ os, browser });
    }

    // Set initial time
    const initialNow = new Date();
    setTime(initialNow.toLocaleTimeString("en-US", { hour12: true, timeZone: "Asia/Kolkata" }));

    return () => {
      clearInterval(pTimer);
      clearInterval(clockTimer);
    };
  }, []);

  const rx = useTransform(my, [-1, 1], [3, -3]);
  const ry = useTransform(mx, [-1, 1], [-4, 4]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen lg:h-screen lg:min-h-0 items-center overflow-hidden px-6 pt-24 pb-16 md:px-20 lg:py-0"
    >
      {/* ── Backgrounds ── */}
      {/* Pro perspective grid */}
      <div className="pf-hero-cyber-grid z-0" />

      {/* cursor spotlight */}
      <div
        ref={spotRef}
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(700px circle at var(--x,40%) var(--y,50%), rgb(from var(--pf-c1) r g b / 0.09), transparent 55%)",
        }}
      />
      {/* animated ambient orb — top right */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.14, 0.08],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[-5%] top-[-10%] h-[70%] w-[55%] z-0 rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, var(--pf-c3), var(--pf-c1), transparent 70%)",
        }}
      />
      {/* animated ambient orb — bottom left */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.06, 0.12, 0.06],
          x: [0, -15, 0],
          y: [0, 25, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="pointer-events-none absolute bottom-[-15%] left-[-10%] h-[50%] w-[40%] z-0 rounded-full blur-[80px]"
        style={{
          background:
            "radial-gradient(ellipse at 30% 70%, var(--pf-c2), transparent 65%)",
        }}
      />
      {/* center accent glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.04, 0.08, 0.04],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="pointer-events-none absolute left-[20%] top-[30%] h-[40%] w-[40%] z-0 rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, var(--pf-c1), transparent 60%)",
        }}
      />

      {/* Aurora waveform canvas */}
      <HeroAurora mx={mx} my={my} />

      {/* Neural Network Constellation */}
      <NeuralConstellation />

      {/* Floating 3D shapes */}
      <FloatingShape
        mx={mx}
        my={my}
        factorX={1.5}
        factorY={0.8}
        className="left-[42%] top-[25%] z-20"
      >
        <motion.div
          animate={{ rotate: 360, y: [0, -10, 0] }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          className="relative h-7 w-7 rotate-45 border border-[var(--pf-c1)]/30 bg-[var(--pf-bg)]/40 backdrop-blur-sm flex items-center justify-center shadow-[0_0_15px_rgb(from var(--pf-c1) r g b / 0.12)]"
        >
          <span className="text-[10px] text-[var(--pf-c1)]/60 font-mono -rotate-45">✦</span>
          <motion.div
            animate={{ opacity: [0.15, 0.4, 0.15], scale: [1, 1.6, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-sm bg-[var(--pf-c1)]/10 blur-md"
          />
        </motion.div>
      </FloatingShape>
      <FloatingShape
        mx={mx}
        my={my}
        factorX={-1.2}
        factorY={1.2}
        className="right-[45%] bottom-[20%] z-20"
      >
        <motion.div
          animate={{ rotate: -360, y: [0, 12, 0] }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="relative h-8 w-8 border border-[var(--pf-c2)]/30 bg-[var(--pf-bg)]/40 backdrop-blur-sm flex items-center justify-center shadow-[0_0_15px_rgb(from var(--pf-c2) r g b / 0.12)]"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        />
      </FloatingShape>
      <FloatingShape
        mx={mx}
        my={my}
        factorX={0.6}
        factorY={-1.4}
        className="right-[8%] top-[15%] z-20"
      >
        <motion.div
          animate={{ rotate: 180, y: [0, -15, 0] }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          className="relative h-10 w-10 border border-[var(--pf-c3)]/30 bg-[var(--pf-bg)]/40 backdrop-blur-sm flex items-center justify-center shadow-[0_0_15px_rgb(from var(--pf-c3) r g b / 0.12)]"
          style={{ clipPath: "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)" }}
        >
          <motion.div
            animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.5, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute inset-0 bg-[var(--pf-c3)]/10 blur-lg"
            style={{ clipPath: "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)" }}
          />
        </motion.div>
      </FloatingShape>

      {/* ── Main grid ── */}
      <div className="relative z-10 grid w-full max-w-7xl mx-auto grid-cols-1 items-center gap-12 lg:grid-cols-12">
        {/* ── LEFT column ── */}
        <div className="lg:col-span-7">
          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2.5 border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-sm"
          >
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--pf-c1)] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--pf-c1)] shadow-[0_0_8px_var(--pf-c1)]" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/55">
              Odisha, India
            </span>
            <span className="h-3 w-px bg-white/15" />
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--pf-c1)]">
              Open to Work
            </span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.0, ease: [0.2, 0.7, 0.2, 1] }}
            style={{ rotateX: rx, rotateY: ry, transformPerspective: 1400 }}
          >
            <span className="mb-1.5 block font-display text-xl italic font-light text-white/40 md:text-2xl tracking-wide">
              Hi, I'm
            </span>
            <h1
              className="font-display leading-[0.92] tracking-tight text-white select-none cursor-default"
              style={{ fontSize: "clamp(4.5rem, 11vw, 8.2rem)" }}
            >
              MSK
              <span
                style={{
                  background: "linear-gradient(135deg,var(--pf-c1),var(--pf-c3))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                .
              </span>
            </h1>
          </motion.div>

          {/* Role chips */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-5 flex flex-wrap gap-2"
          >
            {["Full-Stack Engineer", "Mobile Dev", "AI Builder"].map((chip) => (
              <span
                key={chip}
                className="border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/55"
              >
                {chip}
              </span>
            ))}
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-5 max-w-[80ch] text-[12px] font-light leading-relaxed text-white/50"
          >
            Building the full spectrum — from pixel-perfect user interfaces and scalable backend
            architectures to cross-platform mobile applications and{" "}
            <span className="text-[var(--pf-c2)] font-mono">AI-powered</span> experiences. I focus
            on creating fast, accessible, and production-ready digital products that combine elegant
            design, clean architecture, and exceptional user experiences.
          </motion.p>

          {/* Telemetry HUD Dashboard Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.6 }}
            className="mt-5 max-w-[42ch] grid grid-cols-3 gap-px border border-white/5 bg-white/5 font-mono text-[9px] uppercase tracking-[0.2em] text-white/40"
          >
            <div className="bg-[var(--pf-bg)]/60 px-3.5 py-2 border-r border-white/5">
              <span className="text-white/20 select-none">ping /</span>{" "}
              <span className="text-[var(--pf-c1)] font-bold tabular-nums">{ping}ms</span>
            </div>
            <div className="bg-[var(--pf-bg)]/60 px-3.5 py-2 border-r border-white/5">
              <span className="text-white/20 select-none">env /</span>{" "}
              <span className="text-white/70">
                {sys.os} · {sys.browser}
              </span>
            </div>
            <div className="bg-[var(--pf-bg)]/60 px-3.5 py-2">
              <span className="text-white/20 select-none">time /</span>{" "}
              <span className="text-white/70 tabular-nums">{time || "11:03 PM"}</span>
            </div>
          </motion.div>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.7 }}
            className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3"
          >
            <Magnetic>
              <a
                href="#work"
                className="group relative flex items-center justify-center gap-2.5 overflow-hidden bg-[var(--pf-c1)] px-7 py-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-black transition-all hover:bg-white"
              >
                {/* shimmer */}
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                View Projects
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 border border-white/20 px-7 py-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Get In Touch
              </a>
            </Magnetic>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3.5 font-mono text-[11px] uppercase tracking-[0.25em] text-white/40 transition hover:text-[var(--pf-c1)]"
            >
              <Download className="h-3 w-3" /> Resume
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="mt-7 flex flex-wrap gap-x-5 gap-y-3"
          >
            {SOCIAL_LINKS.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-white/30 transition hover:text-white"
              >
                <Icon className="h-3 w-3" />
                {label}
                <ArrowUpRight className="h-2.5 w-2.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </motion.div>

          {/* Tech marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.8 }}
            className="mt-9 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
          >
            <div className="flex w-max animate-marquee gap-2">
              {[...TECH_BADGES, ...TECH_BADGES].map((t, i) => (
                <span
                  key={i}
                  className="whitespace-nowrap border border-white/10 bg-white/[0.02] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/55"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT: 3D Card ── */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.28, duration: 1.0, ease: [0.2, 0.7, 0.2, 1] }}
          className="hidden lg:flex lg:col-span-5 lg:items-center lg:justify-end"
          style={{ perspective: 1000 }}
        >
          <div className="hero-card-scale origin-center">
            <HeroCard />
          </div>
        </motion.div>
      </div>

      {/* ── Scroll cue (centered bottom) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 hidden flex-col items-center gap-2 md:flex"
      >
        <span className="font-mono text-[8px] uppercase tracking-[0.5em] text-white/25">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-[var(--pf-c1)]/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}

/* ---------- Section header ---------- */

function SectionEyebrow({ num, title }: { num: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em]"
    >
      <span className="text-white/25">{num} /</span>
      <span className="text-[var(--pf-c1)]">{title}</span>
      <div className="ml-2 h-px w-8 bg-[var(--pf-c1)]/40" />
    </motion.div>
  );
}

/* ---------- About ---------- */

function Stat({ v, label, suffix }: { v: number; label: string; suffix: string }) {
  const { ref, seen } = useInView<HTMLDivElement>();
  const n = useCountUp(v, seen);
  return (
    <div ref={ref} className="bg-[var(--pf-bg)] p-6">
      <div className="font-display text-4xl italic text-white">
        {n.toLocaleString()}
        <span className="text-[var(--pf-c1)]">{suffix}</span>
      </div>
      <div className="mt-2 font-mono text-[9px] uppercase tracking-[0.25em] text-white/40">
        {label}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative px-6 py-32 md:px-24">
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow num="01" title="The Builder" />
        <div className="mt-16 grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
              className="font-display text-4xl leading-[1.05] text-white md:text-6xl lg:text-7xl"
            >
              A builder who likes the <span className="italic text-[var(--pf-c2)]">messy bit</span>{" "}
              between the database and the user.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="mt-10 max-w-xl space-y-5 text-sm leading-relaxed text-white/60"
            >
              <p>
                I'm <span className="italic text-white">Makoju Suman Kumar</span> — an MCA student
                and full-stack developer who enjoys turning ideas into production-ready software
                across web, mobile, and AI.
              </p>
              <p>
                I write code because I like the moment something I built actually works for someone
                else. I care about clean architecture, intuitive UX, and continuously leveling up
                the craft.
              </p>
            </motion.div>
            <div className="mt-8 flex flex-wrap gap-2">
              {["MCA Student", "Full-Stack", "Mobile", "AI Enthusiast", "Fast Learner"].map((t) => (
                <span
                  key={t}
                  className="border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/60"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative border border-white/10 bg-white/[0.02] p-8">
              <div className="absolute -right-px -top-px h-14 w-14 border-r border-t border-[var(--pf-c1)]/60" />
              <div className="absolute -bottom-px -left-px h-14 w-14 border-b border-l border-[var(--pf-c2)]/50" />
              <div className="mb-8 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.3em]">
                <span className="text-white/40">profile.json</span>
                <span className="flex items-center gap-1.5 text-[var(--pf-c1)]">
                  <span className="h-1 w-1 animate-pulse rounded-full bg-[var(--pf-c1)]" /> LIVE
                </span>
              </div>
              <div className="space-y-4 text-[11px]">
                {[
                  ["Name", "Makoju Suman Kumar"],
                  ["Role", "Full-Stack Web · Mobile · AI"],
                  ["Based", "Odisha, India"],
                  ["Email", "ms.kumar.developer05@gmail.com"],
                  ["Status", "Open to internships · freelance · contracts"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="grid grid-cols-3 border-b border-white/5 pb-3 last:border-0"
                  >
                    <span className="font-mono uppercase tracking-[0.2em] text-white/35">{k}</span>
                    <span className="col-span-2 text-white/85">{v}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-px border border-white/10 bg-white/10">
                {STATS.map((s) => (
                  <Stat key={s.label} v={s.value} label={s.label} suffix={s.suffix} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Stack ---------- */

function Stack() {
  return (
    <section id="stack" className="relative px-6 py-32 md:px-24">
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow num="02" title="The Toolkit" />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-8 font-display text-5xl leading-[1.05] text-white md:text-7xl"
        >
          The full <span className="italic text-[var(--pf-c1)]">constellation</span>.
        </motion.h2>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/50">
          From pixel-perfect UI to backend systems, mobile apps, and AI — the tools I reach for.
        </p>

        <div className="mt-16 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, i) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group relative overflow-hidden bg-[var(--pf-bg)] p-8"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--pf-c1)]/0 blur-3xl transition-all duration-500 group-hover:bg-[var(--pf-c1)]/10" />
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-[var(--pf-c1)]" />
                    <h3 className="font-display text-2xl italic text-white">{group.title}</h3>
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/30">
                    0{i + 1}
                  </span>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((x) => (
                    <span
                      key={x}
                      className="border border-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-white/65 transition group-hover:border-white/25"
                    >
                      {x}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Work (pinned horizontal frames) ---------- */

function WorkCard({ p, i, total }: { p: (typeof PROJECTS)[number]; i: number; total: number }) {
  return (
    <div
      className="relative flex flex-col gap-8 border border-white/10 bg-white/[0.02] p-6 md:p-8"
      style={{
        background: `radial-gradient(ellipse at 50% 0%, ${p.accent}10, transparent 65%)`,
      }}
    >
      {/* top accent bar */}
      <div
        className="h-px w-full"
        style={{ background: `linear-gradient(to right, ${p.accent}, transparent)` }}
      />
      <div
        className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.3em]"
        style={{ color: p.accent }}
      >
        <span className="flex items-center gap-2">
          <span className="h-px w-4" style={{ backgroundColor: p.accent }} />
          Frame {String(i + 1).padStart(2, "0")}
        </span>
        <span className="text-white/30">
          {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>
      <div>
        <div className="mb-2 font-mono text-[9px] uppercase tracking-[0.3em] text-white/50">
          {p.category}
        </div>
        <h3 className="font-display text-4xl leading-[0.95] text-white sm:text-5xl">
          {p.name.split(" ").map((w, wi) => (
            <span key={wi} className={wi === 1 ? "italic" : ""}>
              {w}
              {wi < p.name.split(" ").length - 1 ? " " : ""}
            </span>
          ))}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-white/70">{p.longDesc}</p>
      </div>
      {/* metric */}
      <div className="flex items-start gap-4">
        <div className="font-display leading-none text-5xl" style={{ color: p.accent }}>
          {p.metric.value}
          <span className="text-[0.5em] align-top" style={{ color: p.accent }}>
            {p.metric.unit}
          </span>
        </div>
        <div className="mt-2 max-w-[16rem] font-mono text-[9px] uppercase leading-relaxed tracking-[0.22em] text-white/55">
          {p.metric.label}
        </div>
      </div>
      {/* stack */}
      <div className="flex flex-wrap gap-1.5">
        {p.stack.map((s) => (
          <span
            key={s}
            className="border border-white/15 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-white/70"
          >
            {s}
          </span>
        ))}
      </div>
      {/* CTAs */}
      <div className="flex flex-wrap items-center gap-3">
        <a
          href="#"
          className={`group inline-flex items-center gap-2 px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.3em] transition ${p.placeholder ? "pointer-events-none opacity-40" : ""
            }`}
          style={{ backgroundColor: p.accent, color: "var(--pf-bg)" }}
        >
          Read case study{" "}
          <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
        {p.liveUrl && (
          <a
            href={p.liveUrl}
            target="_blank"
            rel="noreferrer"
            className={`group inline-flex items-center gap-2 border border-white/20 px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.3em] text-white/80 transition hover:border-[var(--pf-c1)] hover:text-[var(--pf-c1)] ${p.placeholder ? "pointer-events-none opacity-40" : ""
              }`}
          >
            <ExternalLink className="h-3 w-3" /> Live
          </a>
        )}
        {p.githubUrl && (
          <a
            href={p.githubUrl}
            target="_blank"
            rel="noreferrer"
            className={`group inline-flex items-center gap-2 border border-white/20 px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.3em] text-white/80 transition hover:border-[var(--pf-c1)] hover:text-[var(--pf-c1)] ${p.placeholder ? "pointer-events-none opacity-40" : ""
              }`}
          >
            <Github className="h-3 w-3" /> GitHub
          </a>
        )}
      </div>
    </div>
  );
}

function WorkFrame({ p, i, total }: { p: (typeof PROJECTS)[number]; i: number; total: number }) {
  return (
    <div
      className="relative flex h-screen w-screen shrink-0 items-center justify-center px-6 md:px-24"
      style={{
        background: `radial-gradient(ellipse at 50% 60%, ${p.accent}12, transparent 65%)`,
      }}
    >
      {/* faded neighbor number left */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[6vw] top-1/2 hidden -translate-y-1/2 select-none font-display italic leading-none text-white/5 md:block"
        style={{ fontSize: "28vw" }}
      >
        {String(i + 1).padStart(2, "0")}
      </div>

      <div className="relative z-10 grid w-full max-w-6xl grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        {/* left: title + copy */}
        <div className="lg:col-span-7">
          <div
            className="mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em]"
            style={{ color: p.accent }}
          >
            <span className="h-px w-6" style={{ backgroundColor: p.accent }} />
            Frame {String(i + 1).padStart(2, "0")}
          </div>
          <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
            {p.category}
          </div>
          <h3 className="font-display text-6xl leading-[0.95] text-white md:text-8xl">
            {p.name.split(" ").map((w, wi) => (
              <span key={wi} className={wi === 1 ? "italic" : ""}>
                {w}
                {wi < p.name.split(" ").length - 1 ? " " : ""}
              </span>
            ))}
          </h3>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            {p.longDesc}
          </p>

          {/* metric */}
          <div className="mt-10 flex items-start gap-4">
            <div
              className="font-display leading-none"
              style={{ color: p.accent, fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            >
              {p.metric.value}
              <span className="text-[0.5em] align-top" style={{ color: p.accent }}>
                {p.metric.unit}
              </span>
            </div>
            <div className="mt-3 max-w-[16rem] font-mono text-[10px] uppercase leading-relaxed tracking-[0.22em] text-white/55">
              {p.metric.label}
            </div>
          </div>

          {/* stack chips */}
          <div className="mt-8 flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <span
                key={s}
                className="border border-white/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70"
              >
                {s}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#"
              // target="_blank"
              className={`group inline-flex items-center gap-2 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.3em] transition ${p.placeholder ? "pointer-events-none opacity-40" : ""
                }`}
              style={{ backgroundColor: p.accent, color: "var(--pf-bg)" }}
            >
              Read case study
              <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            {p.liveUrl && (
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noreferrer"
                className={`group inline-flex items-center gap-2 border border-white/20 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/80 transition hover:border-[var(--pf-c1)] hover:text-[var(--pf-c1)] ${p.placeholder ? "pointer-events-none opacity-40" : ""
                  }`}
              >
                <ExternalLink className="h-3 w-3" />
                Live
              </a>
            )}
            {p.githubUrl && (
              <a
                href={p.githubUrl}
                target="_blank"
                rel="noreferrer"
                className={`group inline-flex items-center gap-2 border border-white/20 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/80 transition hover:border-[var(--pf-c1)] hover:text-[var(--pf-c1)] ${p.placeholder ? "pointer-events-none opacity-40" : ""
                  }`}
              >
                <Github className="h-3 w-3" />
                GitHub
              </a>
            )}
          </div>
        </div>

        {/* right: project detail panel */}
        <div className="lg:col-span-5">
          <div
            className="relative flex flex-col gap-0 overflow-hidden border border-white/10 bg-[var(--pf-card)]"
            style={{
              boxShadow: `0 60px 140px -50px ${p.accent}44`,
              minHeight: "clamp(420px, 55vh, 640px)",
            }}
          >
            {/* top accent bar */}
            <div
              className="h-px w-full"
              style={{ background: `linear-gradient(to right, ${p.accent}, transparent)` }}
            />

            {/* header row */}
            <div className="flex items-center justify-between border-b border-white/5 px-7 py-4">
              <div className="flex items-center gap-2.5">
                <span
                  className="px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.2em]"
                  style={{ backgroundColor: p.accent, color: "var(--pf-bg)" }}
                >
                  {p.tag}
                </span>
                {p.placeholder && (
                  <span className="border border-white/20 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-white/50">
                    In Progress
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">
                {p.placeholder ? (
                  <span className="flex items-center gap-1.5 text-amber-400/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400/70" />
                    Alpha
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5" style={{ color: `${p.accent}cc` }}>
                    <span
                      className="h-1.5 w-1.5 animate-pulse rounded-full"
                      style={{ backgroundColor: p.accent }}
                    />
                    Live
                  </span>
                )}
                <span className="text-white/20">·</span>
                <span>
                  {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* big icon + name block */}
            <div
              className="relative flex-1 px-7 py-8"
              style={{
                background: `radial-gradient(ellipse at 80% 20%, ${p.accent}18, transparent 60%)`,
              }}
            >
              {/* watermark number */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-4 -bottom-6 select-none font-display italic leading-none text-white/[0.04]"
                style={{ fontSize: "11rem" }}
              >
                {p.icon}
              </div>

              {/* category label */}
              <div className="mb-5 font-mono text-[9px] uppercase tracking-[0.35em] text-white/35">
                {p.category}
              </div>

              {/* key highlights list */}
              <div className="space-y-3.5">
                {p.longDesc
                  .split(". ")
                  .filter(Boolean)
                  .slice(0, 3)
                  .map((sentence, si) => (
                    <div key={si} className="flex items-start gap-3">
                      <div
                        className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                        style={{ backgroundColor: p.accent }}
                      />
                      <p className="text-[13px] leading-relaxed text-white/65">
                        {sentence.replace(/\.$/, "")}.
                      </p>
                    </div>
                  ))}
              </div>

              {/* divider */}
              <div className="my-7 h-px bg-white/5" />

              {/* two-col info grid */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                <div>
                  <div className="mb-1 font-mono text-[8px] uppercase tracking-[0.35em] text-white/30">
                    Type
                  </div>
                  <div className="text-[12px] font-medium text-white/80">{p.tag}</div>
                </div>
                <div>
                  <div className="mb-1 font-mono text-[8px] uppercase tracking-[0.35em] text-white/30">
                    Domain
                  </div>
                  <div className="text-[12px] font-medium text-white/80">
                    {p.category.split(" · ")[0]}
                  </div>
                </div>
                <div>
                  <div className="mb-1 font-mono text-[8px] uppercase tracking-[0.35em] text-white/30">
                    Key Metric
                  </div>
                  <div className="font-display text-[13px] font-medium" style={{ color: p.accent }}>
                    {p.metric.value}
                    {p.metric.unit}
                  </div>
                </div>
                <div>
                  <div className="mb-1 font-mono text-[8px] uppercase tracking-[0.35em] text-white/30">
                    Stack size
                  </div>
                  <div className="text-[12px] font-medium text-white/80">
                    {p.stack.length} technologies
                  </div>
                </div>
              </div>

              {/* divider */}
              <div className="my-6 h-px bg-white/5" />

              {/* tech stack row */}
              <div>
                <div className="mb-3 font-mono text-[8px] uppercase tracking-[0.35em] text-white/30">
                  Built with
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.15em] transition"
                      style={{ borderColor: `${p.accent}30`, color: `${p.accent}bb` }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* bottom accent bar */}
            <div
              className="h-px w-full"
              style={{ background: `linear-gradient(to left, ${p.accent}60, transparent)` }}
            />
          </div>
        </div>
      </div>

      {/* faded neighbor number right */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[6vw] top-1/2 hidden -translate-y-1/2 select-none font-display italic leading-none text-white/5 md:block"
        style={{ fontSize: "28vw" }}
      >
        {String(i + 1).padStart(2, "0")}
      </div>
    </div>
  );
}

function Work() {
  const wrap = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: wrap, offset: ["start start", "end end"] });
  const total = PROJECTS.length;
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", `-${(total - 1) * 100}vw`]);
  const smoothX = useSpring(x, { stiffness: 90, damping: 22, mass: 0.5 });
  const [active, setActive] = useState(0);
  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const idx = Math.min(total - 1, Math.max(0, Math.round(v * (total - 1))));
      setActive(idx);
    });
  }, [scrollYProgress, total]);

  return (
    <section id="work">
      {/* ── Mobile: vertical card list ── */}
      <div className="md:hidden px-5 py-20">
        <div className="flex items-center gap-3 mb-10 font-mono text-[10px] uppercase tracking-[0.3em]">
          <span className="text-[var(--pf-c1)]">03</span>
          <span className="h-px w-6 bg-white/20" />
          <span className="text-white/50">Selected Work</span>
        </div>
        <div className="space-y-6">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.name + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <WorkCard p={p} i={i} total={total} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Desktop: pinned horizontal track ── */}
      <div ref={wrap} className="relative hidden md:block" style={{ height: `${total * 100}vh` }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* HUD top */}
          <div className="pointer-events-none absolute inset-x-0 top-6 z-20 flex items-center justify-between px-6 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 md:px-24">
            <div className="flex items-center gap-3">
              <span className="text-[var(--pf-c1)]">03</span>
              <span className="h-px w-6 bg-white/20" />
              <span>Selected Work — Horizontal Track</span>
            </div>
            <div>
              <span className="text-white">{String(active + 1).padStart(2, "00")}</span>
              <span className="text-white/40"> / {String(total).padStart(2, "00")}</span>
            </div>
          </div>
          <div className="pointer-events-none absolute bottom-6 left-6 z-20 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 md:left-24">
            {/* 03 / Selected Work */}
          </div>
          <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
            <motion.span
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="text-[var(--pf-c1)]"
            >
              ↓
            </motion.span>
            Scroll
          </div>
          <motion.div style={{ x: smoothX }} className="flex h-full will-change-transform">
            {PROJECTS.map((p, i) => (
              <WorkFrame key={p.name + i} p={p} i={i} total={total} />
            ))}
          </motion.div>
          <div className="absolute inset-x-6 bottom-14 z-20 flex items-center gap-3 md:inset-x-24">
            <div className="flex flex-1 items-center gap-1.5">
              {PROJECTS.map((_, i) => (
                <div key={i} className="relative h-px flex-1 bg-white/10">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-[var(--pf-c1)]"
                    animate={{ scaleX: i < active ? 1 : i === active ? 0.5 : 0 }}
                    style={{ transformOrigin: "left", width: "100%" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Journey ---------- */

const JOURNEY = [
  {
    period: "2022 — 2025",
    title: "Foundations",
    icon: BookOpen,
    tags: ["B.Sc CS", "DSA", "DBMS", "OS", "Software Eng."],
  },
  {
    period: "2023 — 2025",
    title: "Full-Stack",
    icon: Terminal,
    tags: ["MERN", "REST APIs", "Auth", "Dashboards", "Deploy"],
  },
  {
    period: "2024 — 2025",
    title: "Mobile",
    icon: Smartphone,
    tags: ["Flutter", "Kotlin", "State Mgmt", "Native UI"],
  },
  {
    period: "2025 — 2026",
    title: "Applied AI",
    icon: Cpu,
    tags: ["LLMs", "Voice-First", "SKY AI", "Prompting"],
  },
  {
    period: "2026 — Present",
    title: "Postgraduate",
    icon: GraduationCap,
    tags: ["MCA", "Distributed Sys", "Research"],
  },
  {
    period: "Ongoing",
    title: "Craft",
    icon: Compass,
    tags: ["Open Source", "Reading", "Shipping", "Always Learning"],
  },
];

function Journey() {
  return (
    <section id="journey" className="relative px-6 py-32 md:px-24">
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow num="04" title="The Timeline" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-8 font-display text-5xl leading-[1.05] text-white md:text-7xl"
        >
          Experience & <span className="italic text-[var(--pf-c1)]">learning</span>.
        </motion.h2>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/50">
          A quiet arc — from fundamentals to full-stack, mobile, and applied AI. The tools change,
          the craft stays.
        </p>

        <div className="mt-16 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {JOURNEY.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title + i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group relative overflow-hidden bg-[var(--pf-bg)] p-8"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--pf-c1)]/0 blur-3xl transition-all duration-500 group-hover:bg-[var(--pf-c1)]/10" />
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-[var(--pf-c1)]" />
                    <h3 className="font-display text-2xl italic text-white">{item.title}</h3>
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/30">
                    0{i + 1}
                  </span>
                </div>
                <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                  {item.period}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((x) => (
                    <span
                      key={x}
                      className="border border-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-white/65 transition group-hover:border-white/25"
                    >
                      {x}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Arena (GitHub) ---------- */

function ContribGraph() {
  const cells = Array.from({ length: 7 * 26 }, (_, i) => {
    const seed = Math.sin(i * 12.9898) * 43758.5453;
    const r = seed - Math.floor(seed);
    return r < 0.35 ? 0 : r < 0.6 ? 1 : r < 0.8 ? 2 : r < 0.94 ? 3 : 4;
  });
  const colors = [
    "bg-white/5",
    "bg-[var(--pf-c1)]/20",
    "bg-[var(--pf-c1)]/40",
    "bg-[var(--pf-c1)]/70",
    "bg-[var(--pf-c2)]",
  ];
  return (
    <div className="grid grid-flow-col grid-rows-7 gap-[3px]">
      {cells.map((v, i) => (
        <div key={i} className={`h-2.5 w-2.5 ${colors[v]}`} />
      ))}
    </div>
  );
}

function Arena() {
  const { ref, seen } = useInView<HTMLDivElement>();
  const commits = useCountUp(1240, seen);
  const stars = useCountUp(320, seen);
  const prs = useCountUp(85, seen);

  type ProfileKey = keyof typeof CODING_PROFILES;
  const TABS: { key: ProfileKey; label: string }[] = [
    { key: "codeforces", label: "Codeforces" },
    { key: "codechef", label: "CodeChef" },
    { key: "leetcode", label: "LeetCode" },
  ];

  const [activeTab, setActiveTab] = useState<ProfileKey>("leetcode");
  const profile = CODING_PROFILES[activeTab];

  return (
    <section id="arena" className="relative px-6 py-32 md:px-24">
      <div className="mx-auto max-w-6xl" ref={ref}>
        <SectionEyebrow num="05a" title="The Arena" />

        {/* ── Coding Profiles Heading ── */}
        <div className="mt-10 flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl leading-[1.05] text-white md:text-6xl lg:max-w-xl"
          >
            Numbers from the <span className="italic text-[var(--pf-c1)]">late-night</span> arena.
          </motion.h2>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
            <span className="text-white">——</span>&nbsp;&nbsp;1000+ Problems · 30+ Contests
          </div>
        </div>

        {/* ── Tab Switcher ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 flex flex-wrap items-center gap-2 border-b border-white/10 pb-0"
        >
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.25em] transition-colors ${activeTab === tab.key ? "text-[var(--pf-c1)]" : "text-white/40 hover:text-white/80"
                }`}
            >
              {activeTab === tab.key && (
                <motion.span
                  layoutId="arena-tab-underline"
                  className="absolute inset-x-0 bottom-[-1px] h-[1.5px] bg-[var(--pf-c1)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* ── Profile Panel ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
            className="mt-10"
          >
            {/* Large display row */}
            <div className="grid grid-cols-1 gap-8 border border-white/10 bg-white/[0.02] lg:grid-cols-12">
              {/* Left: Rank name + sub-label */}
              <div
                className="relative flex flex-col justify-between overflow-hidden px-8 py-10 lg:col-span-7"
                style={{
                  background:
                    "radial-gradient(ellipse at 25% 80%, rgb(from var(--pf-c1) r g b / 0.04), transparent 65%)",
                }}
              >
                {/* Watermark */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-4 -right-2 select-none font-display italic leading-none text-white/[0.04]"
                  style={{ fontSize: "12rem" }}
                >
                  {profile.rankName.split(" ")[0]}
                </div>

                <div>
                  <div className="mb-2 font-mono text-[9px] uppercase tracking-[0.35em] text-white/30">
                    Current rank
                  </div>
                  <h3 className="relative font-display text-[5.5rem] italic leading-[0.9] text-white md:text-[8rem]">
                    {profile.rankName}
                  </h3>
                </div>

                <div className="mt-8">
                  <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/40">
                    {profile.sub}
                  </p>
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--pf-c1)]/70 transition hover:text-[var(--pf-c1)]"
                  >
                    View Profile <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* Right: 2x2 stat grid */}
              <div className="grid grid-cols-2 border-t border-white/10 lg:border-t-0 lg:border-l lg:col-span-5">
                {profile.stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={`flex flex-col justify-center px-5 py-5 md:px-7 md:py-7 ${i % 2 === 0 ? "border-r border-white/10" : ""
                      } ${i < 2 ? "border-b border-white/10" : ""}`}
                  >
                    <div className="font-display text-2xl italic text-white md:text-4xl">
                      {s.value}
                    </div>
                    <div className="mt-1.5 font-mono text-[8px] uppercase tracking-[0.3em] text-white/35">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress bar breakdown */}
            <div className="mt-4 border border-white/10 bg-white/[0.02] px-8 py-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="font-display text-lg italic text-white">
                  {profile.platform} —{" "}
                  <span className="text-[var(--pf-c1)]">{profile.stats[0].value} solved</span>
                </div>
                <div className="hidden items-center gap-4 font-mono text-[9px] uppercase tracking-[0.25em] text-white/40 md:flex">
                  {profile.breakdown.map((b) => (
                    <span key={b.label}>
                      {b.label} {b.count}
                    </span>
                  ))}
                </div>
              </div>

              {/* Segmented bar */}
              <div className="flex h-8 w-full overflow-hidden">
                {profile.breakdown.map((b, i) => (
                  <motion.div
                    key={b.label}
                    initial={{ width: 0 }}
                    animate={{ width: `${b.pct}%` }}
                    transition={{ duration: 0.8, delay: i * 0.12, ease: [0.2, 0.7, 0.2, 1] }}
                    className={`${b.color} flex items-center justify-start overflow-hidden px-3 ${i > 0 ? "border-l border-[var(--pf-bg)]/60" : ""
                      }`}
                  >
                    <span className="whitespace-nowrap font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-[var(--pf-bg)]">
                      {b.count} {b.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Platform breadcrumbs */}
              <div className="mt-5 flex items-center gap-5">
                {TABS.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`font-mono text-[9px] uppercase tracking-[0.3em] transition ${activeTab === tab.key
                      ? "text-[var(--pf-c1)]"
                      : "text-white/30 hover:text-white/60"
                      }`}
                  >
                    {tab.label} {activeTab === tab.key ? "↗" : "/"}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Divider ── */}
        <div className="my-20 border-t border-white/5" />

        {/* ── GitHub Section ── */}
        <SectionEyebrow num="05b" title="Open Source" />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mt-8 font-display text-5xl leading-[1.05] text-white md:text-6xl"
        >
          Building in <span className="italic text-[var(--pf-c2)]">public</span>.
        </motion.h2>

        <div className="mt-16 grid gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="border border-white/10 bg-white/[0.02] p-8 lg:col-span-3"
          >
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-white/70">
                <Github className="h-4 w-4" />
                @MSK-INDIA
              </div>
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/40">
                Last 26 weeks
              </span>
            </div>
            <div className="overflow-x-auto">
              <ContribGraph />
            </div>
            <div className="mt-8 grid grid-cols-3 gap-px border border-white/10 bg-white/10">
              {[
                { l: "Commits", v: commits },
                { l: "Stars", v: stars },
                { l: "PRs", v: prs },
              ].map((s) => (
                <div key={s.l} className="bg-[var(--pf-bg)] p-5">
                  <div className="font-display text-3xl italic text-white">
                    {s.v.toLocaleString()}
                  </div>
                  <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.25em] text-white/40">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="border border-white/10 bg-white/[0.02] p-8 lg:col-span-2"
          >
            <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.25em] text-white/50">
              Top Languages
            </div>
            <div className="space-y-4">
              {[
                { name: "TypeScript", pct: 32, color: "var(--pf-c1)" },
                { name: "JavaScript", pct: 26, color: "#7dd3fc" },
                { name: "Dart", pct: 14, color: "var(--pf-c2)" },
                { name: "Kotlin", pct: 12, color: "var(--pf-c3)" },
                { name: "Java", pct: 9, color: "#22d3ee" },
                { name: "Other", pct: 7, color: "#64748b" },
              ].map((l) => (
                <div key={l.name}>
                  <div className="mb-1 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em]">
                    <span className="text-white/80">{l.name}</span>
                    <span className="text-white/40">{l.pct}%</span>
                  </div>
                  <div className="h-[3px] bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${l.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1, ease: [0.2, 0.7, 0.2, 1] }}
                      style={{ background: l.color }}
                      className="h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const params = new URLSearchParams();
      params.append("name", formData.name);
      params.append("email", formData.email);
      params.append("message", formData.message);
      params.append("_subject", `Portfolio contact from ${formData.name}`);
      params.append("_template", "table");
      params.append("_captcha", "false");

      const response = await fetch("https://formsubmit.co/ajax/ms.kumar.developer05@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: params,
      });

      if (!response.ok) {
        throw new Error("Message delivery failed. Please try again in a moment.");
      }

      setFormData({ name: "", email: "", message: "" });
      setStatus("success");
    } catch (error) {
      const fallbackMailto = `mailto:ms.kumar.developer05@gmail.com?subject=${encodeURIComponent(`Portfolio contact from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      window.location.href = fallbackMailto;
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Your mail app should open next.",
      );
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative px-6 py-32 md:px-24">
      <div className="mx-auto max-w-5xl">
        <SectionEyebrow num="06" title="Cross the Border" />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mt-8 font-display text-5xl leading-[1.05] text-white md:text-7xl"
        >
          Let's build something <span className="italic text-[var(--pf-c1)]">together</span>.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-xl text-sm leading-relaxed text-white/55"
        >
          Freelance, internships, or a full-time full-stack seat — my inbox is open.
        </motion.p>

        <div className="mt-16 grid gap-8 grid-cols-1 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="space-y-5 border border-white/10 bg-white/[0.02] p-6 md:p-8"
          >
            {[
              { k: "Email", v: "ms.kumar.developer05@gmail.com", i: Mail },
              { k: "Location", v: "Odisha, India", i: MapPin },
              { k: "GitHub", v: "github.com/Msumankumar05", i: Github },
              { k: "LinkedIn", v: "linkedin.com/in/m-suman-kumar", i: Linkedin },
            ].map(({ k, v, i: Icon }) => (
              <div
                key={k}
                className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between border-b border-white/5 pb-4 last:border-0"
              >
                <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                  <Icon className="h-3.5 w-3.5 text-[var(--pf-c1)]" />
                  {k}
                </div>
                <span className="text-sm text-white/85 break-all">{v}</span>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-4 border border-white/10 bg-white/[0.02] p-8"
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="flex min-h-[280px] flex-col items-center justify-center text-center"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--pf-c1)]/10">
                    <Sparkles className="h-5 w-5 text-[var(--pf-c1)]" />
                  </div>
                  <div className="font-display text-2xl text-white">Message sent</div>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                    I’ll get back to you soon.
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block font-mono text-[9px] uppercase tracking-[0.25em] text-white/40">
                        Name
                      </span>
                      <input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        className="w-full border border-white/10 bg-transparent px-3 py-2.5 text-sm text-white outline-none transition focus:border-[var(--pf-c1)]"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block font-mono text-[9px] uppercase tracking-[0.25em] text-white/40">
                        Email
                      </span>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, email: e.target.value }))
                        }
                        className="w-full border border-white/10 bg-transparent px-3 py-2.5 text-sm text-white outline-none transition focus:border-[var(--pf-c1)]"
                      />
                    </label>
                  </div>
                  <label className="block">
                    <span className="mb-1.5 block font-mono text-[9px] uppercase tracking-[0.25em] text-white/40">
                      Message
                    </span>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, message: e.target.value }))
                      }
                      className="w-full resize-none border border-white/10 bg-transparent px-3 py-2.5 text-sm text-white outline-none transition focus:border-[var(--pf-c1)]"
                    />
                  </label>
                  {status === "error" && errorMessage && (
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-rose-400">
                      {errorMessage}
                    </div>
                  )}
                  <button
                    disabled={status === "sending"}
                    className="group mt-2 flex w-full items-center justify-center gap-3 bg-[var(--pf-c1)] px-6 py-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                    <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer / BackToTop ---------- */

/* ---------- Footer / BackToTop ---------- */

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[var(--pf-bg)] px-6 py-16 md:px-24">
      {/* Subtle ambient light */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--pf-c1)]/[0.03] blur-[100px]"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-6xl"
      >
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl italic font-bold tracking-tight text-white">
                MSK<span className="text-[var(--pf-c1)]">.</span>
              </span>
              <span className="h-4 w-px bg-white/15" />
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/40">
                Makoju Suman Kumar
              </span>
            </div>
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-white/50">
              Full-Stack Developer crafting high-fidelity web, mobile, and AI solutions. Currently
              based in Odisha, India, exploring the horizons of software architecture.
            </p>
          </div>

          {/* Column 2: Chapters Quick Links */}
          <div className="lg:col-span-4">
            <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/35">
              Index / Chapters
            </div>
            <div className="mt-4 grid grid-cols-2 gap-y-2.5 font-mono text-[10px] uppercase tracking-[0.15em]">
              {NAV.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  className="w-fit text-white/60 transition-colors hover:text-[var(--pf-c1)]"
                >
                  <span className="text-[var(--pf-c1)]/50 mr-1.5">{n.num}</span> {n.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Contact Metadata & Socials */}
          <div className="lg:col-span-3">
            <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/35">
              Connection Terminals
            </div>

            {/* Social Icons row */}
            <div className="mt-4 flex gap-4">
              {[
                { label: "GitHub", href: "https://github.com/Msumankumar05", icon: Github },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/m-suman-kumar-43b3a1300/",
                  icon: Linkedin,
                },
                { label: "Email", href: "mailto: makojusumankumar@gmail.com", icon: Mail },
              ].map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  title={label}
                  className="flex h-8 w-8 items-center justify-center border border-white/10 bg-white/[0.02] text-white/60 transition hover:border-[var(--pf-c1)] hover:text-[var(--pf-c1)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            {/* Coordinates / Metadata */}
            <div className="mt-6 font-mono text-[9px] uppercase tracking-[0.25em] leading-relaxed text-white/30">
              <div className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-[var(--pf-c1)] animate-pulse" />
                <span>Loc: 17.38° N, 78.48° E</span>
              </div>
              <div className="mt-1">
                <span>Terminal Status: Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom border & sub footer */}
        <div className="mt-16 border-t border-white/5 pt-8 flex flex-wrap items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-[0.25em] text-white/25">
          <span>© {new Date().getFullYear()} Makoju Suman Kumar. All rights reserved.</span>
          <span className="flex items-center gap-2">
            Built with <span className="text-[var(--pf-c2)]">♡</span> · React · Framer Motion ·
            Tailwind
          </span>
        </div>
      </motion.div>
    </footer>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.a
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          href="#home"
          className="fixed bottom-20 right-6 z-40 flex h-10 w-10 items-center justify-center border border-white/15 bg-black/60 text-white backdrop-blur transition hover:border-[var(--pf-c1)] hover:text-[var(--pf-c1)]"
        >
          <ArrowUp className="h-4 w-4" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}

/* ---------- Cinematic loader ---------- */

function CinematicLoader() {
  const [gone, setGone] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const dur = 1600;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 2.4);
      setProgress(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setGone(true), 500);
    };
    raf = requestAnimationFrame(tick);
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
    };
  }, []);
  useEffect(() => {
    if (gone) document.body.style.overflow = "";
  }, [gone]);

  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          className="fixed inset-0 z-[80] overflow-hidden bg-[var(--pf-bg)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[var(--pf-c1)]/20 blur-[140px] animate-aurora" />
            <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[var(--pf-c2)]/15 blur-[130px] animate-float-slow" />
          </div>

          <div className="absolute left-8 top-8 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.35em] text-[var(--pf-c1)]">
            <div className="h-px w-8 bg-[var(--pf-c1)]" /> Booting Sequence
          </div>
          <div className="absolute bottom-8 right-8 text-right font-mono text-[9px] uppercase tracking-[0.25em] text-white/40">
            LAT 17.38° N<br />
            LNG 78.48° E
          </div>

          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6">
            <motion.div
              initial={{ scale: 0.7, opacity: 0, filter: "blur(10px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
              className="font-display text-7xl italic text-white md:text-9xl"
            >
              MSK<span className="text-[var(--pf-c2)]">.</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 font-mono text-[10px] uppercase tracking-[0.4em] text-white/50"
            >
              Makoju Suman Kumar — Portfolio
            </motion.div>

            <div className="mt-12 h-px w-64 max-w-[70vw] overflow-hidden bg-white/10">
              <motion.div className="h-full bg-[var(--pf-c1)]" style={{ width: `${progress}%` }} />
            </div>
            <div className="mt-3 font-mono text-[10px] tabular-nums text-white/60">
              {progress.toString().padStart(3, "0")}% <span className="text-[var(--pf-c1)]">·</span>{" "}
              Loading assets
            </div>
          </div>

          <motion.div
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ delay: 1.75, duration: 0.9, ease: [0.7, 0, 0.2, 1] }}
            style={{ transformOrigin: "top" }}
            className="pointer-events-none absolute inset-x-0 top-0 z-20 h-1/2 bg-[var(--pf-bg)]"
          />
          <motion.div
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ delay: 1.75, duration: 0.9, ease: [0.7, 0, 0.2, 1] }}
            style={{ transformOrigin: "bottom" }}
            className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-1/2 bg-[var(--pf-bg)]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------- Root ---------- */

function Portfolio() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("pf-theme");
      if (saved) document.documentElement.setAttribute("data-pf-theme", saved);
      else document.documentElement.setAttribute("data-pf-theme", "gold");
      // eslint-disable-next-line no-empty
    } catch (_) { }
    setMounted(true);
  }, []);

  useLenis();
  const active = useActiveSection(mounted);

  // Return null on the server so SSR produces no HTML, avoiding a
  // Suspense-boundary hydration mismatch with the TanStack Start client router.
  if (!mounted) return null;

  return (
    <div className="relative min-h-screen bg-[var(--pf-bg)] text-white overflow-x-clip">
      <CinematicLoader />
      <Starfield />
      <ScrollProgress />
      <Navbar active={active} />
      <HUDChrome active={active} />
      <main>
        <Hero />
        <About />
        <Stack />
        <Work />
        <Journey />
        <Arena />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export const Route = createFileRoute("/")({
  ssr: false,
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "MSK — Full-Stack · Mobile · AI" },
      {
        name: "description",
        content:
          "Makoju Suman Kumar — MCA student & full-stack engineer. Web, mobile & AI-powered products.",
      },
      { property: "og:title", content: "MSK — Full-Stack · Mobile · AI" },
      { property: "og:description", content: "Portfolio of Makoju Suman Kumar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
