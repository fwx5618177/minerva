import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/minerva/",
  plugins: [react()],
  resolve: {
    alias: {
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@config": path.resolve(__dirname, "src/config"),
      "@i18n": path.resolve(__dirname, "src/i18n"),
      "@components": path.resolve(__dirname, "src/components"),
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
