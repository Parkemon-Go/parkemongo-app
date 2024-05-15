/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#050706",
        background: "#eFEBDC",
        light: "#f3f1e7",
        secondary: "#9ce1a2",
        accent: "#364C38",
        primary: {
          50: "#f0f4f0",
          100: "#e1eae2",
          200: "#c3d5c5",
          300: "#a5c0a8",
          400: "#88aa8b",
          500: "#6a956d",
          600: "#557758",
          700: "#3f5a42",
          800: "#2a3c2c",
          900: "#151e16",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "selector",
};
