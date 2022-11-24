import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: "localhost",
//   },
// });

// https://vitejs.dev/config/
export default ({ command }) => ({
  build: {
    emptyOutDir: true,
  },
  plugins: [react()],
  server: {
    host: "0.0.0.0",
  },
});
