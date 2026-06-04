import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "projects/apps": "/apps",
    "/projects/apps/germansucks": "/apps/germansucks",
  },

  integrations: [svelte({ extensions: [".svelte"] }), solidJs()],

  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
    },
  },
});
