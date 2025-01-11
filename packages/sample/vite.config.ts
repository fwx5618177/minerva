import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/minerva/",
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
  build: {
    outDir: "dist",
    assetsDir: ".",
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"),
      output: {
        assetFileNames: "[name].[ext]",
        chunkFileNames: "[name].js",
        entryFileNames: "[name].js",
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@styles/variables.scss" as *;`,
        includePaths: [path.resolve(__dirname, "src/styles")],
      },
    },
  },
  server: {
    port: 3000,
    open: true,
    host: "127.0.0.1",
    watch: {
      usePolling: true,
    },
  },
});
