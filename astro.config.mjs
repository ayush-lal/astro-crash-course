import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://github.com/ayush-lal",
  base: "/astro-crash-course",
  integrations: [react()],
});
