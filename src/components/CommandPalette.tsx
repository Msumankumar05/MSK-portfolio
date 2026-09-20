import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Command,
  ArrowRight,
  Sparkles,
  Palette,
  FileText,
  Volume2,
  VolumeX,
  Copy,
  ExternalLink,
  Code2,
  Terminal,
  Zap,
  X,
  Award,
  Cpu,
  Layers,
  Activity,
  Quote,
} from "lucide-react";
import {
  playModalSound,
  playClickSound,
  playHoverSound,
  toggleSound,
  isSoundEnabled,
} from "../lib/sound-fx";
import { toast } from "sonner";

interface CommandItem {
  id: string;
  category: "Navigation" | "Projects" | "Themes" | "Actions" | "Social";
  title: string;
  subtitle?: string;
  icon: React.ElementType;
  badge?: string;
  action: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTheme: (themeId: string) => void;
  onTriggerMatrix: () => void;
  onOpenProjectModal: (projectName: string) => void;
}

export function CommandPalette({
  isOpen,
  onClose,
  onSelectTheme,
  onTriggerMatrix,
  onOpenProjectModal,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Sound state tracker
  const [soundOn, setSoundOn] = useState(isSoundEnabled());

  useEffect(() => {
    if (isOpen) {
      playModalSound(true);
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      playModalSound(false);
    }
  }, [isOpen]);

  const items: CommandItem[] = [
    // Navigation
    {
      id: "nav-home",
      category: "Navigation",
      title: "Home",
      subtitle: "Chapter I · Introduction & Terminal",
      icon: Terminal,
      action: () => {
        window.location.hash = "#home";
      },
    },
    {
      id: "nav-about",
      category: "Navigation",
      title: "About",
      subtitle: "Chapter II · The Builder & Philosophy",
      icon: Code2,
      action: () => {
        window.location.hash = "#about";
      },
    },
    {
      id: "nav-services",
      category: "Navigation",
      title: "Core Capabilities",
      subtitle: "Chapter III · Full-Stack, Mobile, AI & Cloud",
      icon: Layers,
      action: () => {
        window.location.hash = "#services";
      },
    },
    {
      id: "nav-stack",
      category: "Navigation",
      title: "Stack & Toolkit",
      subtitle: "Chapter IV · Frontend, Backend, AI, Mobile",
      icon: Code2,
      action: () => {
        window.location.hash = "#stack";
      },
    },
    {
      id: "nav-work",
      category: "Navigation",
      title: "Selected Work",
      subtitle: "Chapter V · Featured Projects Showcase",
      icon: Sparkles,
      action: () => {
        window.location.hash = "#work";
      },
    },
    {
      id: "nav-credentials",
      category: "Navigation",
      title: "Credentials & Badges",
      subtitle: "Chapter VI · Meta, Google Cloud & HackerRank",
      icon: Award,
      action: () => {
        window.location.hash = "#credentials";
      },
    },
    {
      id: "nav-journey",
      category: "Navigation",
      title: "Journey & Timeline",
      subtitle: "Chapter VII · Education & Experience",
      icon: ArrowRight,
      action: () => {
        window.location.hash = "#journey";
      },
    },
    {
      id: "nav-arena",
      category: "Navigation",
      title: "The Arena",
      subtitle: "Chapter VIII · LeetCode, Codeforces & GitHub",
      icon: Zap,
      action: () => {
        window.location.hash = "#arena";
      },
    },
    {
      id: "nav-lab",
      category: "Navigation",
      title: "Cyber Lab & Open Source",
      subtitle: "Chapter IX · Algorithm Benchmarks & AI Prompts",
      icon: Activity,
      action: () => {
        window.location.hash = "#lab";
      },
    },
    {
      id: "nav-endorsements",
      category: "Navigation",
      title: "Peer Endorsements",
      subtitle: "Chapter X · Recommendations & Testimonials",
      icon: Quote,
      action: () => {
        window.location.hash = "#endorsements";
      },
    },
    {
      id: "nav-contact",
      category: "Navigation",
      title: "Contact",
      subtitle: "Chapter XI · Cross the Border & Connect",
      icon: ArrowRight,
      action: () => {
        window.location.hash = "#contact";
      },
    },

    // Actions
    {
      id: "act-copy-email",
      category: "Actions",
      title: "Copy Email Address",
      subtitle: "ms.kumar.developer05@gmail.com",
      icon: Copy,
      badge: "Action",
      action: () => {
        navigator.clipboard.writeText("ms.kumar.developer05@gmail.com");
        toast.success("Email copied to clipboard!", {
          description: "ms.kumar.developer05@gmail.com",
        });
      },
    },
    {
      id: "act-resume",
      category: "Actions",
      title: "Download Resume",
      subtitle: "Open Makoju Suman Kumar Resume PDF",
      icon: FileText,
      badge: "PDF",
      action: () => {
        window.open("/Resume.pdf", "_blank");
      },
    },
    {
      id: "act-audio",
      category: "Actions",
      title: soundOn ? "Mute Cyber Audio FX" : "Enable Cyber Audio FX",
      subtitle: "Synthesized Web Audio sound design",
      icon: soundOn ? VolumeX : Volume2,
      badge: soundOn ? "ON" : "OFF",
      action: () => {
        const newState = toggleSound();
        setSoundOn(newState);
        toast(newState ? "🔊 Cyber Audio FX Enabled" : "🔇 Audio FX Muted");
      },
    },
    {
      id: "act-matrix",
      category: "Actions",
      title: "Launch Matrix Rain Mode",
      subtitle: "Trigger full-screen cyberpunk digital rain",
      icon: Terminal,
      badge: "Easter Egg",
      action: () => {
        onTriggerMatrix();
      },
    },

    // Projects
    {
      id: "proj-farmora",
      category: "Projects",
      title: "Farmora — Farm-to-Home",
      subtitle: "MERN full-stack agricultural commerce",
      icon: Sparkles,
      badge: "Live Demo",
      action: () => {
        window.open("https://farmora-farm-to-home.vercel.app/", "_blank");
      },
    },
    {
      id: "proj-cinedb",
      category: "Projects",
      title: "CineDB — Movie Discovery",
      subtitle: "React + TMDB movie & TV platform",
      icon: Sparkles,
      badge: "Live Demo",
      action: () => {
        window.open("https://cine-dbase.vercel.app/", "_blank");
      },
    },
    {
      id: "proj-skyai",
      category: "Projects",
      title: "SKY AI — Voice & Chat Assistant",
      subtitle: "Conversational voice agent with LLM",
      icon: Sparkles,
      badge: "AI",
      action: () => {
        onOpenProjectModal("SKY AI");
      },
    },
    {
      id: "proj-devpulse",
      category: "Projects",
      title: "DevPulse — Telemetry & CI/CD",
      subtitle: "Next.js & WebSockets developer analytics",
      icon: Sparkles,
      badge: "Full-Stack",
      action: () => {
        onOpenProjectModal("DevPulse");
      },
    },
    {
      id: "proj-neuralvoice",
      category: "Projects",
      title: "NeuralVoice AI — Autonomous Agent",
      subtitle: "Speech-to-action agent workflows",
      icon: Sparkles,
      badge: "AI Agent",
      action: () => {
        onOpenProjectModal("NeuralVoice AI");
      },
    },
    {
      id: "proj-tasks",
      category: "Projects",
      title: "Mobile Task Planner",
      subtitle: "Kotlin & Flutter task management app",
      icon: Sparkles,
      badge: "Mobile",
      action: () => {
        window.open("https://github.com/Msumankumar05/My-Tasks-app", "_blank");
      },
    },

    // Themes
    {
      id: "theme-gold",
      category: "Themes",
      title: "Theme: Luxury Gold",
      subtitle: "Editorial gold & deep warm amber",
      icon: Palette,
      badge: "#f5c14a",
      action: () => onSelectTheme("gold"),
    },
    {
      id: "theme-cyber",
      category: "Themes",
      title: "Theme: Neon Cyber",
      subtitle: "Cyan, neon pink & electric purple",
      icon: Palette,
      badge: "#00e5ff",
      action: () => onSelectTheme("cyber"),
    },
    {
      id: "theme-emerald",
      category: "Themes",
      title: "Theme: Bio Emerald",
      subtitle: "Matrix neon green & vivid teal",
      icon: Palette,
      badge: "#00ff88",
      action: () => onSelectTheme("emerald"),
    },
    {
      id: "theme-devialet",
      category: "Themes",
      title: "Theme: Obsidian Crimson",
      subtitle: "Deep crimson & luxury bronze",
      icon: Palette,
      badge: "#e8352a",
      action: () => onSelectTheme("devialet"),
    },
    {
      id: "theme-midnight",
      category: "Themes",
      title: "Theme: Midnight Violet",
      subtitle: "Deep indigo & electric violet",
      icon: Palette,
      badge: "#a78bfa",
      action: () => onSelectTheme("midnight"),
    },
    {
      id: "theme-sunset",
      category: "Themes",
      title: "Theme: Warm Sunset",
      subtitle: "Coral red, peach & gold",
      icon: Palette,
      badge: "#ff6b6b",
      action: () => onSelectTheme("sunset"),
    },
    {
      id: "theme-ocean",
      category: "Themes",
      title: "Theme: Deep Ocean",
      subtitle: "Electric cyan & sapphire blue",
      icon: Palette,
      badge: "#00d4ff",
      action: () => onSelectTheme("ocean"),
    },

    // Social Links
    {
      id: "soc-github",
      category: "Social",
      title: "GitHub Profile",
      subtitle: "github.com/Msumankumar05",
      icon: ExternalLink,
      action: () => {
        window.open("https://github.com/Msumankumar05", "_blank");
      },
    },
    {
      id: "soc-linkedin",
      category: "Social",
      title: "LinkedIn Profile",
      subtitle: "linkedin.com/in/itsmskdev",
      icon: ExternalLink,
      action: () => {
        window.open("https://www.linkedin.com/in/itsmskdev/", "_blank");
      },
    },
    {
      id: "soc-instagram",
      category: "Social",
      title: "Instagram",
      subtitle: "instagram.com/suman_k_72",
      icon: ExternalLink,
      action: () => {
        window.open("https://www.instagram.com/suman_k_72/", "_blank");
      },
    },
  ];

  const filteredItems = items.filter((item) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      (item.subtitle && item.subtitle.toLowerCase().includes(q))
    );
  });

  const handleSelect = (item: CommandItem) => {
    playClickSound();
    item.action();
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
      playHoverSound();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(
        (prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length),
      );
      playHoverSound();
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        handleSelect(filteredItems[selectedIndex]);
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99990] flex items-start justify-center pt-20 sm:pt-28 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Palette Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative w-full max-w-xl overflow-hidden rounded-xl border border-white/15 bg-[var(--pf-card)]/95 shadow-[0_25px_70px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
          >
            {/* Top Accent Line */}
            <div className="h-[2px] w-full bg-gradient-to-r from-[var(--pf-c1)] via-[var(--pf-c3)] to-[var(--pf-c2)]" />

            {/* Input Bar */}
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3.5">
              <Search className="h-4 w-4 text-[var(--pf-c1)] shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Search chapters, projects, themes, commands..."
                className="w-full bg-transparent font-mono text-sm text-white placeholder-white/40 outline-none"
              />
              {query && (
                <button onClick={() => setQuery("")} className="text-white/40 hover:text-white">
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
              <kbd className="hidden sm:inline-flex items-center gap-1 rounded border border-white/15 bg-white/5 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-white/50">
                ESC
              </kbd>
            </div>

            {/* Results List */}
            <div
              ref={listRef}
              className="max-h-[380px] overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-white/10"
            >
              {filteredItems.length === 0 ? (
                <div className="py-12 text-center font-mono text-xs text-white/40">
                  No matching commands found for "{query}".
                </div>
              ) : (
                <div className="space-y-0.5">
                  {filteredItems.map((item, index) => {
                    const Icon = item.icon;
                    const isSelected = index === selectedIndex;
                    return (
                      <div
                        key={item.id}
                        onClick={() => handleSelect(item)}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`group flex items-center justify-between rounded-lg px-3 py-2.5 cursor-pointer transition-all ${
                          isSelected
                            ? "bg-white/10 text-white"
                            : "text-white/70 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className={`flex h-7 w-7 items-center justify-center rounded-md border ${
                              isSelected
                                ? "border-[var(--pf-c1)] bg-[var(--pf-c1)]/15 text-[var(--pf-c1)]"
                                : "border-white/10 bg-white/5 text-white/50"
                            }`}
                          >
                            <Icon className="h-3.5 w-3.5" />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-[11px] font-medium text-white truncate">
                                {item.title}
                              </span>
                              <span className="font-mono text-[8px] uppercase tracking-wider text-white/30">
                                {item.category}
                              </span>
                            </div>
                            {item.subtitle && (
                              <p className="text-[10px] text-white/40 truncate font-mono">
                                {item.subtitle}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 ml-2">
                          {item.badge && (
                            <span
                              className="rounded border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider"
                              style={{
                                color: item.badge.startsWith("#") ? item.badge : "var(--pf-c1)",
                                borderColor: item.badge.startsWith("#")
                                  ? `${item.badge}40`
                                  : "var(--pf-c1)40",
                              }}
                            >
                              {item.badge}
                            </span>
                          )}
                          <ArrowRight
                            className={`h-3.5 w-3.5 transition-transform ${
                              isSelected ? "text-[var(--pf-c1)] translate-x-0.5" : "text-white/20"
                            }`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer helper */}
            <div className="flex items-center justify-between border-t border-white/10 px-4 py-2.5 font-mono text-[9px] uppercase tracking-wider text-white/40 bg-black/40">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="rounded border border-white/15 px-1 bg-white/5">↑</kbd>
                  <kbd className="rounded border border-white/15 px-1 bg-white/5">↓</kbd> to
                  navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="rounded border border-white/15 px-1 bg-white/5">↵</kbd> to select
                </span>
              </div>
              <span className="text-[var(--pf-c1)]">MSK HUD SPOTLIGHT</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
