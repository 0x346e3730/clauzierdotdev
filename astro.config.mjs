import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import playformCompress from "@playform/compress";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), playformCompress(), icon()]
});
