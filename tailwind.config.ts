import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        iron: {
          DEFAULT: "#0a0a0b",
          50: "#f4f4f5",
          100: "#e4e4e7",
          200: "#a1a1aa",
          300: "#71717a",
          400: "#52525b",
          500: "#3f3f46",
          600: "#27272a",
          700: "#18181b",
          800: "#0f0f12",
          900: "#0a0a0b",
        },
        cyan: {
          DEFAULT: "#22d3ee",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
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
