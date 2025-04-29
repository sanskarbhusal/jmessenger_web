/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue-dark": "#0369A1",
        "custom-blue": "#0284C7",
      },
      gridTemplateColumns: {
        custom: "45px 1fr 45px",
      },
    },
  },
  plugins: [],
};
