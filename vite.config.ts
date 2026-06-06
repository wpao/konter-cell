import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // For development with ngrok
    // host: "0.0.0.0",
    // allowedHosts: [".ngrok-free.app"],

    // ngrok for development CRUD
    host: "0.0.0.0",
    allowedHosts: true,
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,

        // ngrok for development CRUD
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
