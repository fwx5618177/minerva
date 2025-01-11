import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@layout": path.resolve(__dirname, "./src/layout"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@i18n": path.resolve(__dirname, "./src/i18n"),
      "@router": path.resolve(__dirname, "./src/router"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          router: ["react-router-dom"],
          i18n: ["i18next", "react-i18next"],
          icons: ["react-icons"],
          prism: ["prismjs"],
        },
      },
    },
  },
});
