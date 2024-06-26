/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      screen: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1600px',
      },
    },
  },
  plugins: [],
};
