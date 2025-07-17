// @ts-check
import {defineConfig, envField} from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  redirects: {
    "projects/apps": "/apps",
    "/projects/apps/germansucks": "/apps/germansucks",
  },

  integrations: [svelte( { extensions: ['.svelte']})],

  env: {
    schema: {
      // API access
      BSM_API_KEY: envField.string({context: "server", access: "secret"}),
      GITHUB_ACCESS_TOKEN: envField.string({context: "server", access: "secret"}),
      
      // SMTP configuration
      SMTP_SERVER: envField.string({context: "server", access: "secret"}),
      SMTP_PORT: envField.string({context: "server", access: "secret"}),
      SMTP_USER: envField.string({context: "server", access: "secret"}),
      SMTP_PASS: envField.string({context: "server", access: "secret"}),
      SMTP_MAIL_TO_ADDRESS: envField.string({context: "server", access: "secret"}),
      
      // Public contact information
      PUBLIC_CONTACT_EMAIL_ADDRESS: envField.string({context: "client", access: "public"}),
      PUBLIC_CONTACT_PHONE: envField.string({context: "client", access: "public"}),
      PUBLIC_CONTACT_ADDRESS: envField.string({context: "client", access: "public"})
    }
  },

  adapter: node({
    mode: "standalone"
  })
});