/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-slab': ['Roboto Slab, serif'],
        'inter': ['Inter, sans-serif']
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
