import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [dts()],
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "MinervaWebComponents",
      fileName: (format) => `minerva-web-components.${format}.js`,
      formats: ["es", "umd", "cjs"],
    },
    rollupOptions: {
      external: ["lit", "lit/decorators.js"],
      output: {
        globals: {
          lit: "lit",
          "lit/decorators.js": "litDecorators",
        },
        entryFileNames: "[name].[format].js",
        chunkFileNames: "[name].[hash].js",
        dir: "dist",
        exports: "named",
      },
    },
    cssCodeSplit: true,
    outDir: "dist",
    sourcemap: false,
    target: "esnext",
  },
  server: {
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
});
