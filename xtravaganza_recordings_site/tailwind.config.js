/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#05060a',
        frost: '#7fdcff',
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        dark: {
          900: '#0a0a0f',
          800: '#0d0d14',
          700: '#12121a',
        }
      },
      fontFamily: {
        orbitron: ['Orbitron', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Orbitron', 'ui-sans-serif', 'system-ui', 'Inter', 'SF Pro Display', 'Helvetica', 'Arial'],
        body: ['ui-sans-serif', 'system-ui', 'Inter', 'SF Pro Text', 'Helvetica', 'Arial']
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(127,220,255,0.25), 0 0 30px rgba(127,220,255,0.12)',
        'glow-cyan': '0 0 20px rgba(6,182,212,0.3), 0 0 40px rgba(6,182,212,0.1)',
        'glow-strong': '0 0 30px rgba(127,220,255,0.4), 0 0 60px rgba(127,220,255,0.2)',
      },
      backgroundImage: {
        'circuit-lines': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cpath d='M0 50h40M60 50h40M50 0v40M50 60v40' stroke='rgba(127,220,255,0.1)' fill='none'/%3E%3C/svg%3E\")",
      }
    }
  },
  plugins: []
}
