import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        iron: {
          DEFAULT: "#090b0e",
          card: "#13161a",
          muted: "#1c2025",
        },
        lime: {
          DEFAULT: "#c7f540",
          soft: "#d4ff5e",
        },
        ink: "#0d120a",
        fog: "#9ea8ad",
        snow: "#f5f7f2",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "10px",
      },
    },
  },
  plugins: [],
};
export default config;
