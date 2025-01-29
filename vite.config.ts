import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
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
  plugins: [TanStackRouterVite(), viteReact(), ViteToml(), tailwindcss()],
});
