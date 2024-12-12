import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
      colors: {
        intent: {
          expired: "#A1A1A1",
          dangerous:"#FF3535",
          warning: "#FF9925",
          safe: "#3BDB39",
        },
        primary: {
          95: "#000000",
          85: "#2d2d2d",
          75: "#4f4f4f",
          65: "#54595E",
          55: "#ACACAC",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
