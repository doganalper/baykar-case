import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        loose: "0.5px",
      },
      fontSize: {
        "6xl": "56px",
        "mobile-section-title": "32px"
      },
      borderRadius: {
        "4xl": "30px"
      }
    },
  },
  plugins: [],
};
export default config;
