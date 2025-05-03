/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue-dark": "#0369A1",
        "custom-blue": "#0284C7",
        "highlight-color": "#3390EC",
      },
      gridTemplateColumns: {
        custom: "45px 1fr 45px",
      },
    },
  },
  plugins: [],
  safelist: [
    "border-highlight-color",
    "border-transparent",
    "border-gray-300/90",
    "text-highlight-color",
    "text-gray-500/70",
  ],
};
