import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { ViteToml } from "vite-plugin-toml";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), ViteToml()],
});
