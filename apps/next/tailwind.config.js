const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');
// console.log(join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'));
module.exports = {
  purge: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    './node_modules/@vechaiui/**/*.{js,ts,jsx,tsx}',
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: false, // or 'media' or 'class',

  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
