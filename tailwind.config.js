/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6418C3",
        "iris-80": "#7879F1",
        "dark-02": "#15132B",
        "dark-01": "#0D0B21",
        "dark-04": "#1E1C3A",
        "gray-01": "#A5A5A5",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
