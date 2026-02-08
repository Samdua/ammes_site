import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const ngrokurl = "https://daniele-skeighish-organisationally.ngrok-free.dev"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: true,
    allowedHosts: ['.ngrok-free.app'],
    port: 8080,
    hmr: false
  },
  hmr: {
    host: [ngrokurl],
    protocol: 'wss',
    clientPort: 8080
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
