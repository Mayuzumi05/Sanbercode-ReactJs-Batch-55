const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    flowbite.content()
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'mobile': '0px',
      'tablet': '480px',
      'desktop': '768px',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    flowbite.plugin()
  ],
}

