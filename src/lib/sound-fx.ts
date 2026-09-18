// Web Audio API Micro-Synthesizer Sound FX Engine
// Pure client-side synthesis with zero external audio assets

let audioCtx: AudioContext | null = null;
let soundEnabled = true;

// Default to enabled, allow user override from Command Palette
if (typeof window !== "undefined") {
  try {
    const saved = localStorage.getItem("pf-sound-enabled-v2");
    if (saved !== null) {
      soundEnabled = saved === "true";
    }
  } catch {
    soundEnabled = true;
  }

  // Pre-unlock AudioContext on first gesture so synthesized sounds play cleanly
  const unlockAudio = () => {
    const ctx = getAudioContext();
    if (ctx && ctx.state === "suspended") {
      ctx.resume().catch(() => {});
    }
  };
  window.addEventListener("pointerdown", unlockAudio, { once: true, passive: true });
  window.addEventListener("keydown", unlockAudio, { once: true, passive: true });
  window.addEventListener("touchstart", unlockAudio, { once: true, passive: true });
}

const listeners = new Set<(enabled: boolean) => void>();

export function isSoundEnabled(): boolean {
  return soundEnabled;
}

export function toggleSound(): boolean {
  soundEnabled = !soundEnabled;
  try {
    localStorage.setItem("pf-sound-enabled-v2", String(soundEnabled));
  } catch {
    // Ignore localStorage errors
  }
  listeners.forEach((fn) => fn(soundEnabled));
  if (soundEnabled) {
    initAudio();
    playSuccessSound();
  }
  return soundEnabled;
}

export function subscribeSound(callback: (enabled: boolean) => void): () => void {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

export function initAudio() {
  getAudioContext();
}

/**
 * Subtle ethereal hover tick (very soft and short)
 */
export function playHoverSound() {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(1400, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1800, ctx.currentTime + 0.02);

    gain.gain.setValueAtTime(0.015, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.035);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.04);
  } catch {
    // Ignore audio error
  }
}

/**
 * Crisp high-tech mechanical click
 */
export function playClickSound() {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(900, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.04);

    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.045);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  } catch {
    // Ignore
  }
}

/**
 * Harmonious sci-fi chord for theme switching or level up
 */
export function playThemeSound() {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const freqs = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.04);

      const startTime = ctx.currentTime + idx * 0.04;
      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(0.03, startTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.36);
    });
  } catch {
    // Ignore
  }
}

/**
 * Digital retro beep for terminal commands
 */
export function playTerminalBeep() {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.setValueAtTime(1200, ctx.currentTime + 0.025);

    gain.gain.setValueAtTime(0.02, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.06);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.065);
  } catch {
    // Ignore
  }
}

/**
 * Pleasant success chime (ascending dual-tone)
 */
export function playSuccessSound() {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    [740, 1108].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.09);

      const startTime = ctx.currentTime + idx * 0.09;
      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(0.035, startTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.28);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.3);
    });
  } catch {
    // Ignore
  }
}

/**
 * Futuristic whoosh / modal open pop
 */
export function playModalSound(open = true) {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    if (open) {
      osc.frequency.setValueAtTime(320, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(780, ctx.currentTime + 0.08);
    } else {
      osc.frequency.setValueAtTime(650, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(240, ctx.currentTime + 0.08);
    }

    gain.gain.setValueAtTime(0.025, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.09);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  } catch {
    // Ignore
  }
}

/**
 * Matrix cyber stream sound
 */
export function playMatrixSound() {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const notes = [440, 554.37, 659.25, 830.61, 880, 1108.73];
    notes.forEach((note, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(note, ctx.currentTime + idx * 0.05);

      const startTime = ctx.currentTime + idx * 0.05;
      gain.gain.setValueAtTime(0.02, startTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.18);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.2);
    });
  } catch {
    // Ignore
  }
}

/**
 * Majestic cyber eagle cry & aerodynamic whoosh
 */
export function playEagleSound() {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;

    // Carrier oscillator for high-pitched raptor screech
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // FM modulation for authentic avian raspy screamer vibrato
    const modOsc = ctx.createOscillator();
    const modGain = ctx.createGain();

    modOsc.type = "sine";
    modOsc.frequency.setValueAtTime(34, now);
    modGain.gain.setValueAtTime(120, now);
    modGain.gain.exponentialRampToValueAtTime(8, now + 0.55);

    modOsc.connect(osc.frequency);

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(2400, now);
    osc.frequency.linearRampToValueAtTime(3100, now + 0.12);
    osc.frequency.exponentialRampToValueAtTime(1500, now + 0.55);

    // Bandpass filter to shape into a piercing organic eagle cry
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(2600, now);
    filter.Q.setValueAtTime(3.2, now);

    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.04, now + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.55);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    // Aerodynamic wing whoosh underneath
    const noiseBuffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.45), ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < noiseBuffer.length; i++) {
      output[i] = Math.random() * 2 - 1;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuffer;

    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = "lowpass";
    noiseFilter.frequency.setValueAtTime(500, now);
    noiseFilter.frequency.exponentialRampToValueAtTime(140, now + 0.45);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.025, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(ctx.destination);

    modOsc.start(now);
    osc.start(now);
    noise.start(now);

    modOsc.stop(now + 0.58);
    osc.stop(now + 0.58);
    noise.stop(now + 0.48);
  } catch {
    // Ignore audio errors
  }
}
