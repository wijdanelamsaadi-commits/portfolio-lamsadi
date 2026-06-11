/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        night: {
          950: '#050505',
          900: '#0B0B0B',
        },
        ember: '#FF5A00',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        ember: '0 0 28px rgba(255, 90, 0, 0.4)',
        'ember-strong': '0 0 42px rgba(255, 90, 0, 0.58)',
      },
    },
  },
  plugins: [],
};
