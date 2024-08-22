/** @type {import('tailwindcss').Config} */

// import { nintendoThemes } from "./src/themes/nintendo-themes";
import { allThemes } from "./src/themes/index";

// console.log("NINTENDO THEMES: ", nintendoThemes);

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [allThemes, "light", "dark"],
  },
};
