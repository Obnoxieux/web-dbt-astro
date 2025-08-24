// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import svelte from "@astrojs/svelte";
import node from "@astrojs/node";

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
      themes: {
        light: "one-light",
        dark: "one-dark-pro",
      },
    },
  },

  adapter: node({
    mode: "standalone",
  }),
});
