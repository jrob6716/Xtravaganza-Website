/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"] ,
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05090f",
          900: "#07101a",
          800: "#0b1726",
          700: "#102033",
        },
        frost: {
          50: "#e9fbff",
          200: "#b9f1ff",
          400: "#63ddff",
          500: "#2cc8ff",
          600: "#16a7da",
        }
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial"],
      },
      boxShadow: {
        hud: "0 0 0 1px rgba(130, 235, 255, .14), 0 0 30px rgba(44, 200, 255, .08)",
        card: "0 0 0 1px rgba(130, 235, 255, .10), 0 20px 60px rgba(0,0,0,.55)",
      },
      backgroundImage: {
        "hud-grid": "linear-gradient(rgba(130,235,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(130,235,255,.10) 1px, transparent 1px)",
        "scanlines": "repeating-linear-gradient(180deg, rgba(255,255,255,.06) 0, rgba(255,255,255,.06) 1px, transparent 1px, transparent 5px)",
        "vignette": "radial-gradient(1200px 600px at 50% 20%, rgba(44,200,255,.22), rgba(0,0,0,0) 55%), radial-gradient(1000px 700px at 80% 55%, rgba(44,200,255,.10), rgba(0,0,0,0) 60%), radial-gradient(900px 700px at 20% 70%, rgba(44,200,255,.08), rgba(0,0,0,0) 60%)"
      },
      keyframes: {
        drift: {
          '0%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(-12px, 8px, 0)' },
          '100%': { transform: 'translate3d(0,0,0)' },
        },
        shimmer: {
          '0%': { opacity: 0.25 },
          '50%': { opacity: 0.55 },
          '100%': { opacity: 0.25 },
        },
        glitchShift: {
          '0%': { transform: 'translateX(0)' },
          '8%': { transform: 'translateX(-2px)' },
          '12%': { transform: 'translateX(3px)' },
          '16%': { transform: 'translateX(-1px)' },
          '20%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(0)' },
        }
      },
      animation: {
        drift: 'drift 12s ease-in-out infinite',
        shimmer: 'shimmer 5s ease-in-out infinite',
        glitch: 'glitchShift 6s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
