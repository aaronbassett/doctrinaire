import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { ViteToml } from "vite-plugin-toml";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@root": resolve(__dirname, "."),
      "@": resolve(__dirname, "./src"),
    },
  },
  plugins: [react(), ViteToml(), tailwindcss()],
});
