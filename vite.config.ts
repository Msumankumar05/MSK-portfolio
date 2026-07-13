import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import path from "path";

const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
  plugins: [
    tanstackStart(),
    react(),
    tailwindcss(),
    nitro({ preset: isProduction ? "vercel" : "node" }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});