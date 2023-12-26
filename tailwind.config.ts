import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    colors: {
      primary: "#EA7C69",
      secondary: "#1F1D2B",
      bg: "#252836",
      line: "#393C49",
      form: "#2D303E",
      text: "#E0E6E9",
      nav: "#373A48",
      white: "#ffffff",
      transparent: "transparent"
    },
  },
};
export default config;
