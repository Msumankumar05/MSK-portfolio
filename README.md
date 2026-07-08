# 🌐 Makoju Suman Kumar — High-Fidelity Interactive Portfolio

A premium, highly interactive developer portfolio showcasing full-stack engineering, mobile development, and applied AI. Built with server-side rendering (SSR), hardware-accelerated animations, and a customized responsive design system.

💻 **Live Deployment**: [itsmsk.vercel.app](https://itsmsk.vercel.app/)

---

## 🚀 Tech Stack

This project is built using a modern, performance-first, and fully type-safe framework ecosystem:

* **Framework**: [TanStack Start](https://tanstack.com/start) (Full-stack SSR React framework with file-based routing)
* **State & Router**: [TanStack Router](https://tanstack.com/router) & [TanStack Query v5](https://tanstack.com/query)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (using the new `@tailwindcss/vite` compiler adapter)
* **Animations**: [Framer Motion v12](https://www.framer.com/motion/) (magnetic widgets, spring transforms, custom orchestrations)
* **Scroll Engine**: [Lenis Scroll](https://lenis.darkroom.engineering/) (for smooth vertical scrolling and custom momentum anchors)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Build Engine**: [Vite v8](https://vite.dev/) & [Nitro Engine](https://nitro.build/) (routing and deployment preset builds)

---

## 🎨 Key Features & User Interface

### 1. Cinematic Boot Loader
* Traces initial asset compilation, calculating completion metrics (`000%` to `100%`) through custom ease transitions.
* Locks the body overflow while booting, executing dual-curtain slide-outs upon termination.

### 2. Multi-Theme Portal Engine
* Swaps visual color spaces through a custom portal animation overlay utilizing custom peak blurs.
* Persistent state stored in `localStorage` with private-browsing error protection.
* Available Themes:
  * 🟡 `cyber` (Cyberpunk amber contrast)
  * ⚪ `slate` (Minimal monochrome gray)
  * 🟢 `glass` (Translucent emerald overlays)
  * 🔵 `nord` (Arctic blue frost)

### 3. Interactive HUD Chrome
* **Pointer Compass Widget**: Active pointer-angle matrix tracking page orientation dynamically.
* **Terminal Diagnostics Explorer**: Dynamic file navigator (`about.txt`, `skills.json`, `stack.config`, `specs.md`) printing real-time diagnostic reports onto a mock IDE console.
* **Neural Constellation Canvas**: Custom HTML5 interactive 2D canvas drawing floating particles that link together based on cursor distance.
* **3D Perspective Grid**: Dynamic bottom landscape grid tilting in response to mouse movement coordinates.

---

## 📊 Live Coding Metrics & Statistics

### Code Arena (Dynamic switchable stats)
* **LeetCode (Knight Rank)**: 600+ solved (180 Easy, 320 Medium, 100 Hard).
* **Codeforces (Specialist)**: Max Rating 1620, 450+ solved across 28 contests.
* **CodeChef (3-Star)**: 1680 Rating, 350+ solved in Div 2.

### Open Source Contributions
* Dynamic counters counting up:
  * Commits: `1,240+`
  * Stars: `320+`
  * Pull Requests: `85+`
* Custom segmented progress charts tracking language metrics:
  * TypeScript (32%)
  * JavaScript (26%)
  * Dart (14%)
  * Kotlin (12%)
  * Java (9%)
  * Other (7%)

---

## 📂 Highlighted Projects

* **🌱 Farmora** (Full-Stack · Farm-to-Home Marketplace)
  * *Description*: MERN application connecting consumers with fresh products. Features a fully-responsive admin dashboard, secure JWT authentication, and REST endpoints.
  * *Stack*: React, Node.js, Express, MongoDB, JWT, Tailwind CSS.
* **🎬 CineDB** (Frontend · Movie Discovery)
  * *Description*: React search dashboard consuming the TMDB API to display casts, descriptions, and trending movies dynamically.
  * *Stack*: React, JavaScript, TMDB API, Tailwind CSS, Vite.
* **🤖 SKY AI** (AI Assistant · Conversational)
  * *Description*: Intelligent conversational panel using Web Speech API to provide voice answers fetched through OpenRouter.
  * *Stack*: React, Node.js, Express, OpenRouter API, Web Speech API.
* **📱 Mobile Todo** (Mobile · Task Organizer)
  * *Description*: Cross-platform mobile app utilizing SQLite storage, local notifications, and state providers.
  * *Stack*: Flutter, Kotlin, SQLite, Provider.
* **🧠 InterviewAI** (AI Platform · Under Dev)
  * *Description*: Analyzes resumes to draft custom interview assessments and prep roadmaps.
  * *Stack*: Next.js, TypeScript, AI, Node.js.

---

## 🛠️ Project Structure

```
├── .vercel/               # Vercel Deployment output folder (Build Output API)
├── public/                # Static assets (favicons, fonts, images)
├── src/
│   ├── lib/
│   │   ├── error-capture.ts            # SSR exception isolation layer
│   │   ├── error-page.ts               # Fatal crash fallback layout
│   │   └── lovable-error-reporting.ts  # Analytics boundary callbacks
│   ├── routes/
│   │   ├── __root.tsx                  # Root layout, html context providers, styles
│   │   └── index.tsx                   # Interactive portfolio SPA (Data, Hooks, Sections)
│   ├── router.tsx         # Router configuration & context definition
│   ├── server.ts          # Server SSR entry point
│   ├── start.ts           # Client hydration entry point
│   └── styles.css         # Global stylesheet (custom fonts, themes, custom scrollbars)
├── tsconfig.json          # TypeScript path maps
├── vite.config.ts         # Vite plugins, path alias mappings & Vercel preset Nitro configuration
└── package.json           # Scripts, dependencies and engines metadata
```

---

## ⚙️ Setup and Deployment

### 1. Install Dependencies
```bash
npm install
# or
bun install
```

### 2. Run Local Development Server
```bash
npm run dev
# or
bun run dev
```

### 3. Production Build
Nitro generates Vercel serverless functions directly on build:
```bash
npm run build
# or
bun run build
```

This compiles client-side outputs into `.vercel/output/static` and SSR functions into `.vercel/output/functions/__server.func` (following the Vercel Build Output API v3 specification).
