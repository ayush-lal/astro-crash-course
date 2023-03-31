import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // site: "./",
  site: "https://github.com/ayush-lal/astro-crash-course",
  // base: "/astro-crash-course",
  integrations: [react()],
});
