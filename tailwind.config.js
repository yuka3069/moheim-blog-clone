/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    screens: {
      sm: "747px",
      lg: "1440px",
    },

    extend: {
      colors: {
        "brand-50": "#F1F2EE",
        "brand-300": "#E8E8E8",
        "brand-600": "#7E807C",
        "brand-700": "#4D4F4A",
        "brand-900": "#1D1F1A",
      },
    },
  },
  plugins: [],
};
