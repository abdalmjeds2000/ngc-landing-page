/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      ngc_brown: '#50220E',
      ngc_orange: '#D59F29',
      ngc_mid_orange: '#F9E9D1',
      ngc_light_orange: '#FFFAF2',
      ngc_green: '#23cdb2',
      ngc_red: '#D32A2A',
      ngc_dark: '#1e1e1e',
      ngc_secondary: '#848384',
      ngc_white: '#FFFFFF',
      ngc_light_gray: '#F5F5F5',
      ...require('tailwindcss/colors'),
    }
  },
  plugins: [],
}