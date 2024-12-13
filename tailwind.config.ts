import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
      colors: {
        intent: {
          expired: "#A1A1A1",
          dangerous: "#FF3535",
          warning: "#FF9925",
          safe: "#3BDB39",
        },
        primary: {
          95: "#000000",
          85: "#2d2d2d",
          75: "#4f4f4f",
          65: "#54595E",
          55: "#ACACAC",
          45: "#D1D1D1",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    ({ addUtilities }: PluginAPI) => {
      addUtilities({
        ".custom-shadow-small": {
          "box-shadow":
            "0px 0px 2px 0px rgba(0, 0, 0, 0.12), 0px 20px 20px 0px rgba(0, 0, 0, 0.08)",
        },
      });
    },
  ],
} satisfies Config;


