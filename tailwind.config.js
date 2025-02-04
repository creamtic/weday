/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "false",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maskImage: {
        gradientMask: "linear-gradient(180deg, transparent, rgba(0,0,0,0.013) 1.1%, #000 80%, transparent)",
      },
      webkitMaskImage: {
        gradientMask: "linear-gradient(180deg, transparent, rgba(0,0,0,0.013) 1.1%, #000 80%, transparent)",
      },
      boxShadow: {
        text: "1px 1px 2px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".text-shadow": {
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.15)",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
