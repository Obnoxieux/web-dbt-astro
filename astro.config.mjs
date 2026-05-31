// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  redirects: {
    "projects/apps": "/apps",
    "/projects/apps/germansucks": "/apps/germansucks",
  },

  integrations: [svelte({ extensions: [".svelte"] })],

  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
    },
  },
});
