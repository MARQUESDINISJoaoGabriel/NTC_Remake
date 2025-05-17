import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ntcBlue: "#003f87",
      },
    },
  },
  darkMode: "class", // enable if needed
  plugins: [],
};

export default config;
