/** @type {import('tailwindcss').Config} */

import flowbite from 'flowbite-react/tailwind';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [flowbite.plugin()],
  darkMode: 'class',
};
