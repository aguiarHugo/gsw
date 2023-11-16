/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        car_gray: "#656667",
        car_blue: "#255EC1",
        car_white: "#D6D8D3",
        car_brown: "#3C150E",
        car_black: "#040404",
        car_red: "#4E0F17",

        gsw_dark: "#121212",
        gsw_white: "#FFFFFF",
        gsw_gray: "rgba(255, 255, 255, 0.20)",
        gsw_green: "#DAF40F",
      },

      filter: {
        grayscale: 'grayscale(100%)',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
