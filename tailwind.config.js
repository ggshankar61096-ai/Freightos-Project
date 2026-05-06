/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        status: {
          alive: "#10b981",
          dead: "#ef4444",
          unknown: "#8b5cf6",
        },
      },
    },
  },
  plugins: [],
};
