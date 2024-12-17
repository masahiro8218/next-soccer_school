/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lightGray: '#d3d3d3',
        gray: '#778899',
        darkGray: '#464d53',
        darkdarkGray: '#363d42',
        yellow: '#ffd700',
      },
    },
  },
  plugins: [],
};
