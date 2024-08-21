import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/PersonalPortfolio/",
  publicDir: "public", // Ensure this is set
  build: {
    outDir: "dist", // Output directory
  },
});
