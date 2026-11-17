import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        iron: {
          DEFAULT: "#0a1a0f",
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#a3a3a3",
          300: "#737373",
          400: "#525252",
          500: "#404040",
          600: "#1a2e1f",
          700: "#122018",
          800: "#0d1812",
          900: "#0a1a0f",
        },
        lime: {
          DEFAULT: "#c8f542",
          400: "#d4ff5e",
          500: "#c8f542",
          600: "#a8d12a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-bebas)", "Impact", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
