/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3e8ff',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9'
        },
        blue: {
          500: '#3b82f6',
          600: '#2563eb'
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb'
        }
      },
      backgroundImage: {
        'purple-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      },
      screens: {
        'mobile': '768px'
      }
    },
    fontFamily: {
      sans: ['Avenir', 'sans-serif'],
    }
  },
  plugins: [],
}
