# High-Fidelity Interactive Portfolio (Makoju Suman Kumar)

A premium, interactive, and highly optimized developer portfolio website built with server-side rendering (SSR), high-performance animations, and custom theme layouts.

---

## 🚀 Tech Stack

This project is built using a modern, performant, and type-safe front-end stack:

* **Framework**: [TanStack Start](https://tanstack.com/start) (Full-stack SSR React framework with file-based routing)
* **Router & Query**: [TanStack Router](https://tanstack.com/router) & [TanStack Query v5](https://tanstack.com/query)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (using the new `@tailwindcss/vite` configuration for lightning-fast builds)
* **Animations**: [Framer Motion v12](https://www.framer.com/motion/) (micro-interactions, hardware-accelerated transitions)
* **Scroll Engine**: [Lenis](https://lenis.darkroom.engineering/) (for smooth, cinematic scrolling momentum)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Build Tool**: [Vite v8](https://vite.dev/) & [Nitro Engine](https://nitro.build/) (serving build presets for Vercel/Cloudflare)

---

## 🎨 Key Features & User Interface

* **Cinematic Boot Loader**: Custom animated introductory sequence tracking asset initialization progress.
* **Fluid Smooth Scroll**: Immersive vertical scroll curves paired with horizontal panel sweeps.
* **Multi-Theme Engine**: Swappable layout visual identities stored persistently in local storage with smooth peak blur transitions.
* **Interactive HUD Chrome**: Live compass positioning metrics, time calculations, and coordinates overlay.
* **Visual Data & Metrics**: Live-calculated contribution matrices, interactive profile stats (LeetCode, CodeChef, Codeforces), and dynamic progress bars.
* **Type-Safe Validation**: Fully validating contact submission form powered by React Hook Form & Zod.

---

## 📂 Project Architecture

```
├── .vercel/               # Vercel Deployment configuration (generated at build time)
├── public/                # Static assets (favicons, fonts, images)
├── src/
│   ├── lib/
│   │   ├── error-capture.ts            # SSR exception isolation layer
│   │   ├── error-page.ts               # Fatal crash fallback layout
│   │   └── lovable-error-reporting.ts  # Analytics boundary callbacks
│   ├── routes/
│   │   ├── __root.tsx                  # Root layout, html context providers, styles
│   │   └── index.tsx                   # Main interactive single-page app containing subcomponents
│   ├── router.tsx         # Router configuration & context definition
│   ├── server.ts          # Server SSR runner definition (entry point)
│   ├── start.ts           # Client hydration runner definition (entry point)
│   └── styles.css         # Global stylesheets, custom color themes & custom scrollbars
├── tsconfig.json          # TypeScript compilation options & alias maps
├── vite.config.ts         # Vite plugins, path mappings & Nitro preset config
└── package.json           # Scripts, dependencies and engines metadata
```

---

## 🛠️ Getting Started

### Prerequisites

You need [Node.js](https://nodejs.org/) (version 22 or higher) or [Bun](https://bun.sh/) installed.

### Installation

Clone the repository and install the dependencies:

```bash
# Using npm
npm install

# Using bun
bun install
```

### Development Server

Run the local development server:

```bash
# Using npm
npm run dev

# Using bun
bun run dev
```

Open `http://localhost:5173/` in your browser.

### Formatting & Linting

Ensure code meets style guidelines:

```bash
# Lint code quality
npm run lint

# Format code files with Prettier
npm run format
```

---

## 🏗️ Production Build

To compile a production-ready build:

```bash
# Using npm
npm run build

# Using bun
bun run build
```

This compiles client-side assets under `.vercel/output/static` and compiles the SSR functions under `.vercel/output/functions/__server.func` (utilizing the Vercel Build Output API v3).

---

## 🌐 Deployment Configuration

This project is configured out-of-the-box for **Vercel** serverless deployments.

### How it works

1. The project uses the custom **Nitro** engine preset in `vite.config.ts`:
   ```typescript
   nitro({ preset: "vercel" })
   ```
2. When Vercel imports and runs the build command (`npm run build`), Nitro compiles the app into the exact Vercel Serverless Function format (`.vercel/output`).
3. Vercel automatically detects the generated output, rendering the server-side pages and API endpoints with zero manual configuration.

---

## 🚀 Optimization & Performance Details

* **Bundle Pruning**: Removed all unused boilerplate packages and libraries.
* **Component De-bloating**: Pruned 47 unused UI components and hooks to decrease compiled stylesheet payload by **~50%** (reducing from `107 kB` down to `57 kB`).
* **Safe Local Storage Handling**: Swallowed localStorage errors to prevent browser sandbox crashes (e.g., Private Browsing mode).
