import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import rawPlugin from "vite-raw-plugin";
import viteTsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    rawPlugin({
      fileRegex: /\.scss$/,
    }),
  ],
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 5173, // you can replace this port with any port
  },
  resolve: {
    alias: {
      "@src": resolve(__dirname, "./src"),
      "@router": resolve(__dirname, "./src/Router"),
      "@pages": resolve(__dirname, "./src/pages"),
      "@components": resolve(__dirname, "./src/components"),
      "@hooks": resolve(__dirname, "./src/hooks"),
      "@layout": resolve(__dirname, "./src/layout"),
      "@utils": resolve(__dirname, "./src/utils"),
      "@constant": resolve(__dirname, "./src/constant"),
      "@assets": resolve(__dirname, "./src/assets"),
      "@types": resolve(__dirname, "./src/@types"),
      "@theme": resolve(__dirname, "./src/theme"),
      "@styles": resolve(__dirname, "./src/styles"),
      "@context": resolve(__dirname, "./src/context"),
    },
  },
});
