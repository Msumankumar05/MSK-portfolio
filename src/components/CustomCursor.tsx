import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { playHoverSound } from "../lib/sound-fx";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // Sharp inner dot spring
  const dotX = useSpring(rawX, { stiffness: 900, damping: 40 });
  const dotY = useSpring(rawY, { stiffness: 900, damping: 40 });

  // Smooth fluid trailing ring spring
  const ringX = useSpring(rawX, { stiffness: 280, damping: 25 });
  const ringY = useSpring(rawY, { stiffness: 280, damping: 25 });

  useEffect(() => {
    // Check if touch device
    if (typeof window === "undefined") return;
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouchDevice) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);

    let lastTarget: Element | null = null;

    const onMouseMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check interactive element
      const interactiveEl = target.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor-hover], .clickable'
      );
      const isInteractive = Boolean(interactiveEl);
      setIsPointer(isInteractive);

      // Play micro sound when first moving onto an interactive element
      if (interactiveEl && interactiveEl !== lastTarget) {
        playHoverSound();
        lastTarget = interactiveEl;
      } else if (!interactiveEl) {
        lastTarget = null;
      }

      // Check custom cursor label
      const labeledEl = target.closest("[data-cursor-text]") as HTMLElement | null;
      if (labeledEl) {
        setCursorText(labeledEl.getAttribute("data-cursor-text"));
      } else {
        setCursorText(null);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible, rawX, rawY]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Outer fluid trailing ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--pf-c1)]/60 bg-[var(--pf-c1)]/[0.04] backdrop-blur-[1px] transition-all duration-150 flex items-center justify-center"
        style={{
          x: ringX,
          y: ringY,
          width: cursorText ? 64 : isPointer ? 44 : 26,
          height: cursorText ? 64 : isPointer ? 44 : 26,
          boxShadow: isPointer
            ? "0 0 20px rgb(from var(--pf-c1) r g b / 0.35), inset 0 0 10px rgb(from var(--pf-c1) r g b / 0.15)"
            : "0 0 10px rgb(from var(--pf-c1) r g b / 0.15)",
          scale: isClicking ? 0.75 : 1,
        }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-mono text-[7.5px] font-bold uppercase tracking-widest text-[var(--pf-c1)]"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Inner sharp precision dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[10000] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--pf-c1)] shadow-[0_0_8px_var(--pf-c1)]"
        style={{
          x: dotX,
          y: dotY,
          width: isPointer && !cursorText ? 4 : 5,
          height: isPointer && !cursorText ? 4 : 5,
          opacity: cursorText ? 0 : 1,
          scale: isClicking ? 1.8 : 1,
        }}
      />
    </>
  );
}
