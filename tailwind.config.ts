import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          lg: "80px",
        },
      },
      colors: {
        'gradient-start': '#DD7DDF',
        'gradient-mid1': '#E1CD86',
        'gradient-mid2': '#BBCB92',
        'gradient-end1': '#71C2EF',
        'gradient-end2': '#3BFFF'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #DD7DDF, #E1CD86, #BBCB92, #71C2EF, #3BFFF, #DD7DDF)'
      }
    },
  },
  plugins: [],
};

export default config;
