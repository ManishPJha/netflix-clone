import react from "@vitejs/plugin-react-swc";
import path from "path";
import type { UserConfig } from "vite";

const config: UserConfig = {
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};

export default config;
