/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#c51c24", // Premium Red
          dark: "#a3171e",
        },
        secondary: {
          DEFAULT: "#1e1e7a", // Deep Blue
          dark: "#16165a",
        },
        accent: "#f97316", // Warm Orange
        background: {
          light: "#f8fafc",
          dark: "#0f172a",
        }
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(30, 30, 122, 0.12)',
        'hover': '0 20px 40px -15px rgba(30, 30, 122, 0.18)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
