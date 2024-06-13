import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        cyan: "#2ACFCF",
        darkViolet: "#3B3054",
        // Secondary
        // Neutral
        grayishViolet: "hsl(257, 7%, 63%)",
        veryDarkBlue: "#35323E",
        veryDarkViolet: "#232127",
      },
      backgroundImage: {
        "shorten-desktop": "url('givenstuff/images/bg-shorten-desktop.svg')",
        "boost-desktop": "url('givenstuff/images/bg-boost-desktop.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
