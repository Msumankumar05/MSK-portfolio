import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Sparkles, Layers, Cpu, Database, Server, Copy } from "lucide-react";
import { playModalSound, playClickSound } from "../lib/sound-fx";
import { toast } from "sonner";

export interface ProjectDetail {
  name: string;
  tag: string;
  category: string;
  desc: string;
  longDesc: string;
  stack: string[];
  accent: string;
  icon: string;
  metric: { value: string; unit: string; label: string };
  liveUrl?: string;
  githubUrl?: string;
  placeholder?: boolean;
}

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (project) {
      playModalSound(true);
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown);
    } else {
      playModalSound(false);
    }
  }, [project, onClose]);

  if (!project) return null;

  const handleCopyLink = () => {
    playClickSound();
    if (project.liveUrl) {
      navigator.clipboard.writeText(project.liveUrl);
      toast.success("Live URL copied to clipboard!");
    } else if (project.githubUrl) {
      navigator.clipboard.writeText(project.githubUrl);
      toast.success("GitHub URL copied to clipboard!");
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[99995] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ type: "spring", damping: 26, stiffness: 340 }}
          className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/15 bg-[var(--pf-card)]/98 shadow-[0_30px_90px_rgba(0,0,0,0.9)] backdrop-blur-2xl"
        >
          {/* Top glowing accent line */}
          <div
            className="h-[2px] w-full"
            style={{
              background: `linear-gradient(to right, ${project.accent}, var(--pf-c3), transparent)`,
            }}
          />

          {/* Modal Header */}
          <div className="flex items-start justify-between border-b border-white/10 p-6">
            <div className="flex items-start gap-4">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl border border-white/10 bg-white/5 shadow-inner shrink-0"
                style={{ borderColor: `${project.accent}40` }}
              >
                {project.icon}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded font-semibold"
                    style={{ backgroundColor: `${project.accent}20`, color: project.accent }}
                  >
                    {project.tag}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-white/40">
                    {project.category}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-white mt-1">
                  {project.name}
                </h3>
              </div>
            </div>

            <button
              onClick={() => {
                playClickSound();
                onClose();
              }}
              className="rounded-full p-2 text-white/40 hover:bg-white/10 hover:text-white transition"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-white/10">
            {/* Overview */}
            <div>
              <h4 className="font-mono text-[9px] uppercase tracking-[0.25em] text-[var(--pf-c1)] mb-2">
                System Overview
              </h4>
              <p className="text-sm leading-relaxed text-white/80 font-light">
                {project.longDesc}
              </p>
            </div>

            {/* Performance & Metric Highlight */}
            <div
              className="rounded-xl border border-white/10 p-4 flex items-center justify-between"
              style={{
                background: `radial-gradient(ellipse at 80% 50%, ${project.accent}12, transparent 70%)`,
              }}
            >
              <div>
                <div className="font-mono text-[8.5px] uppercase tracking-widest text-white/40">
                  Key Metric
                </div>
                <div className="font-mono text-[11px] text-white/80 mt-1">
                  {project.metric.label}
                </div>
              </div>
              <div className="font-display text-3xl font-medium" style={{ color: project.accent }}>
                {project.metric.value}
                <span className="text-sm">{project.metric.unit}</span>
              </div>
            </div>

            {/* Architectural Stack Breakdown */}
            <div>
              <h4 className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/40 mb-3 flex items-center gap-2">
                <Layers className="h-3 w-3 text-[var(--pf-c1)]" /> Technical Architecture
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-[10px]">
                <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
                  <div className="text-white/40 mb-1">Architecture Pattern</div>
                  <div className="text-white font-medium">Modular Full-Stack / REST</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
                  <div className="text-white/40 mb-1">Deployment & Cloud</div>
                  <div className="text-white font-medium">Vercel / Cloud Engine</div>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/40 mb-3">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-white/15 bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white/80 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer CTAs */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-black/40 p-5">
            <div className="flex items-center gap-2">
              {(project.liveUrl || project.githubUrl) && (
                <button
                  onClick={handleCopyLink}
                  className="flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-white/60 hover:border-white hover:text-white transition"
                >
                  <Copy className="h-3 w-3" /> Copy Link
                </button>
              )}
            </div>

            <div className="flex items-center gap-2.5">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playClickSound()}
                  className="flex items-center gap-1.5 rounded-lg border border-white/20 px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-white hover:border-[var(--pf-c1)] hover:text-[var(--pf-c1)] transition"
                >
                  <Github className="h-3.5 w-3.5" /> Source Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playClickSound()}
                  className="flex items-center gap-1.5 rounded-lg px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-wider transition"
                  style={{ backgroundColor: project.accent, color: "var(--pf-bg)" }}
                >
                  Launch Live Demo <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
