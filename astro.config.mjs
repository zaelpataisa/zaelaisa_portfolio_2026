// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsDir: 'assets'
    }
  },
  server: {
    // host: '192.168.0.28',
    port: 3000
  },
});
