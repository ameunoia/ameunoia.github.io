/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      circle: "circle",
    },
    extend: {
      colors: {
        primary: "#393646",
        secondary: "#F4EEE0",
        tertiary: "#6D5D6E",
        quarternary: "#4F4557",
      },
      fontFamily: {
        martel: ["martel-sans", "sans-serif"],
        trispace: ["trispace", "sans-serif"],
      },
    },
  },
  plugins: [],
};
