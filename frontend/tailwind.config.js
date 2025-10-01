// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        primary: {
          50: '#fef2f7',
          100: '#fee5ef',
          200: '#fecce0',
          300: '#fda2c4',
          400: '#fb6ba0',
          500: '#f43f7f',
          600: '#e11d5f',
          700: '#c21249',
          800: '#a0123e',
          900: '#861237',
          DEFAULT: '#f43f7f',
        },
        // Secondary Accent
        secondary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          DEFAULT: '#8b5cf6',
        },
        // Neutral Grays
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          DEFAULT: '#737373',
        },
        // Success, Warning, Error
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
      },
      backgroundColor: {
        base: '#ffffff',
        subtle: '#fafafa',
        muted: '#f5f5f5',
      },
      textColor: {
        primary: '#171717',
        secondary: '#525252',
        muted: '#a3a3a3',
      },
    },
  },
  plugins: [],
}