import { defineConfig } from 'astro/config';
import node from "@astrojs/node";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({
    mode: "middleware"
  }),
  integrations: [vue({ appEntrypoint: '/src/pages/_app' })],
});