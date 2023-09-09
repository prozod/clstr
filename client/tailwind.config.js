/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        assistant: ["Assistant", "sans-serif"],
      },
      gridTemplateColumns: {
        panel: "minmax(250px, 400px) minmax(500px, 1fr)",
      },
      gridTemplateRows: {
        panel: "60px 1fr",
      },
    },
  },
  plugins: [],
};
