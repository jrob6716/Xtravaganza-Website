/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#05060a',
        frost: '#7fdcff'
      },
      fontFamily: {
        display: ['ui-sans-serif', 'system-ui', 'Inter', 'SF Pro Display', 'Helvetica', 'Arial'],
        body: ['ui-sans-serif', 'system-ui', 'Inter', 'SF Pro Text', 'Helvetica', 'Arial']
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(127,220,255,0.25), 0 0 30px rgba(127,220,255,0.12)'
      }
    }
  },
  plugins: []
}
