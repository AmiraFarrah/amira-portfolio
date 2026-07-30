/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#F7F3EE',
        ink: '#211D1D',
        wine: '#6F2737',
        wineDark: '#4F1B28',
        sand: '#E8DED4',
        paper: '#FFFDFC',
        muted: '#756D69'
      },
      boxShadow: {
        soft: '0 18px 50px rgba(61, 42, 45, 0.08)',
        card: '0 10px 30px rgba(61, 42, 45, 0.06)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Georgia', 'Cambria', 'Times New Roman', 'serif']
      }
    }
  },
  plugins: []
}
