import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       "background-primary": "#050505",
       "background-secondary": "#0f0f10",
       "background-tertiary": "#19191a",
       "content-body": "#CDCBCC",
       "content-placeholder": "#b27d7f",
       "content-headline": "#827d7f",
       "border-primary": "#19191A",
       "border-secondary": "#323234",
       "border-tertiary": "#97979b",
       "accent-purple": "#4b2dbb",
       "accent-green": "#87bb2d",
       "accent-pink": "#B5446b"
      },
    },
  },
  plugins: [],
} satisfies Config;
