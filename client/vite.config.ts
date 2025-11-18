import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    // ... your dynamic plugins if you really need them
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),        // NOT "client/src"
      "@shared": path.resolve(__dirname, "../shared"), // adjust if needed
      "@assets": path.resolve(__dirname, "../attached_assets"),
    },
  },
  // REMOVE the "root" line! Vite automatically uses the folder it is run from (which is already /client).
  build: {
    outDir: "dist",      // This is the default, you can keep your "dist/public" if you want, but just "dist" is fine.
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});

