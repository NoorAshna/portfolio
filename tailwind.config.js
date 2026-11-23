/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#09090b',
          elevated: '#111115',
          card: '#141419',
          border: '#23232b',
        },
        accent: {
          emerald: '#10b981',
          amber: '#f59e0b',
          violet: '#8b5cf6',
          cyan: '#06b6d4',
        }
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'sans-serif'],
        display: ['var(--font-space)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
