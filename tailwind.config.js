/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-pink': '#F8E1E7',
        'gold': '#D4AF37',
        'deep-rose': '#C2185B',
        'cream-white': '#FFF9F9',
        'charcoal-gray': '#333333',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Poppins', 'sans-serif'],
        'script': ['Great Vibes', 'cursive'],
      },
    },
  },
  plugins: [],
}