/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-slab': ['Roboto Slab, serif'],
        'inter': ['Inter, sans-serif']
      },
      colors: {
        'primary': '#374151',
        'base-color1': '#FFFFFF',  
        'base-color2': '#000000', 
        'accent-color': '#ef4444',
        'accent-color2': '#06b6d4',
        'accent-color3': '#0891b2',
        'primary2': '#D5343A',
      },
      textColor: {
        'primary': '#374151',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
