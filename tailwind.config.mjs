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
        martel: ["Martel Sans", "sans-serif"],
        trispace: ["trispace", "sans-serif"],
        bricolage: ["Bricolage Grotesque", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#fff",
            h1: {
              color: "#fff",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
