/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF4EC',
        surface: '#FFFFFF',
        line: '#ECE3D5',
        espresso: '#2C211B',
        muted: '#81756F',
        coffee: '#4A3528',
        caramel: '#BB6A3C',
        caramelD: '#A2592F',
        soft: '#F4E5D7',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
