const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['barlow', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
