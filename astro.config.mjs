import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://demiyang.dev",
  integrations: [tailwind(), sitemap(), react(), icon()],
  server: {
    host: true,
  },
});
