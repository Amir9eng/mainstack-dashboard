/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['sohne', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
