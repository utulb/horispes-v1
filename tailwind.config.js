/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0A0A0A',
        'primary-light': '#FFFFFF',
        'accent-gold': '#C6A45C',
        'accent-gold-light': '#D4B87C',
        'border-gray': '#2A2A2A',
        'text-gray': '#E5E5E5',
        'text-gray-dark': '#A3A3A3',
        'overlay-dark': 'rgba(0, 0, 0, 0.7)',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}; 