import { resolve } from "path";
import { defineConfig } from "vite";
import terser from "@rollup/plugin-terser";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["iife"],
      name: "core",
      fileName: "core",
    },
    outDir: resolve(__dirname, "../../dist"),
    // rollupOptions: {
    //   plugins: [
    //     isProduction() &&
    //       terser({
    //         format: { comments: false },
    //         compress: { drop_console: true },
    //       }),
    //   ],
    // },
  },
});

function isProduction() {
  return process.env.NODE_ENV === "production";
}
