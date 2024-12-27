import type { Config } from "tailwindcss";

export default {
  prefix: "tw-",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "white": "#fff",

        "gray-100": "#F4F4F4",
        "gray-200": "#E1E1E6",
        "gray-300": "#C4C4CC",
        "gray-400": "#7C7C8A",
        "gray-600": "#323238",
        "gray-700": "#29292E",
        "gray-800": "#202024",
        "gray-900": "#121214",

        "blue-300": "#0091CF",
        "blue-400": "#006B9A",
        "blue-500": "#004769",
        "blue-700": "#00263B",

        "green-300": "#00A272",
        "green-600": "#015F43",

        "red-300": "#F75A68",
        "red-500": "#AB222E",
        "red-700": "#7A1921",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.7) 10%, transparent)',
      }
    },
  },
  plugins: [],
} satisfies Config;
