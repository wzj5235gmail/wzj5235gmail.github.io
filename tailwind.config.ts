import flowbite from "flowbite-react/tailwind";

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "testimonials-bg": "url('/img/12.jpg')",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      color1: "#ffffff",
      color2: "#fff8ed",
      color3: "#fef7c9",
      color4: "#f4c450",
      color5: "#cd6c31",
      color6: "#434549",
      color7: "#141617",
      color8: "#111111",
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
